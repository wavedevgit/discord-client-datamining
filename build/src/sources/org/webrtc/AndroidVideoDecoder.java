package org.webrtc;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.os.SystemClock;
import android.view.Surface;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.TimeUnit;
import org.webrtc.EglBase;
import org.webrtc.EncodedImage;
import org.webrtc.ThreadUtils;
import org.webrtc.VideoDecoder;
import org.webrtc.VideoFrame;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidVideoDecoder implements VideoDecoder, VideoSink {
    private static final int DEQUEUE_INPUT_TIMEOUT_US = 500000;
    private static final int DEQUEUE_OUTPUT_BUFFER_TIMEOUT_US = 100000;
    private static final int MEDIA_CODEC_RELEASE_TIMEOUT_MS = 5000;
    private static final String TAG = "AndroidVideoDecoder";
    private VideoDecoder.Callback callback;
    private MediaCodecWrapper codec;
    private final String codecName;
    private final VideoCodecMimeType codecType;
    private int colorFormat;
    private ThreadUtils.ThreadChecker decoderThreadChecker;
    private final BlockingDeque<FrameInfo> frameInfos;
    private boolean hasDecodedFirstFrame;
    private int height;
    private boolean keyFrameRequired;
    private final MediaCodecWrapperFactory mediaCodecWrapperFactory;
    private Thread outputThread;
    private ThreadUtils.ThreadChecker outputThreadChecker;
    private DecodedTextureMetadata renderedTextureMetadata;
    private volatile boolean running;
    private final EglBase.Context sharedContext;
    private volatile Exception shutdownException;
    private int sliceHeight;
    private int stride;
    private Surface surface;
    private SurfaceTextureHelper surfaceTextureHelper;
    private int width;
    private final Object dimensionLock = new Object();
    private final Object renderedTextureMetadataLock = new Object();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class DecodedTextureMetadata {
        final Integer decodeTimeMs;
        final long presentationTimestampUs;

        DecodedTextureMetadata(long j10, Integer num) {
            this.presentationTimestampUs = j10;
            this.decodeTimeMs = num;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class FrameInfo {
        final long decodeStartTimeMs;
        final int rotation;

        FrameInfo(long j10, int i10) {
            this.decodeStartTimeMs = j10;
            this.rotation = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AndroidVideoDecoder(MediaCodecWrapperFactory mediaCodecWrapperFactory, String str, VideoCodecMimeType videoCodecMimeType, int i10, EglBase.Context context) {
        if (isSupportedColorFormat(i10)) {
            Logging.d(TAG, "ctor name: " + str + " type: " + videoCodecMimeType + " color format: " + i10 + " context: " + context);
            this.mediaCodecWrapperFactory = mediaCodecWrapperFactory;
            this.codecName = str;
            this.codecType = videoCodecMimeType;
            this.colorFormat = i10;
            this.sharedContext = context;
            this.frameInfos = new LinkedBlockingDeque();
            return;
        }
        throw new IllegalArgumentException("Unsupported color format: " + i10);
    }

    private VideoFrame.Buffer copyI420Buffer(ByteBuffer byteBuffer, int i10, int i11, int i12, int i13) {
        int i14;
        if (i10 % 2 == 0) {
            int i15 = (i12 + 1) / 2;
            int i16 = i11 % 2;
            if (i16 == 0) {
                i14 = (i13 + 1) / 2;
            } else {
                i14 = i13 / 2;
            }
            int i17 = i14;
            int i18 = i10 / 2;
            int i19 = i10 * i11;
            int i20 = i18 * i17;
            int i21 = i19 + ((i18 * i11) / 2);
            int i22 = i21 + i20;
            VideoFrame.I420Buffer allocateI420Buffer = allocateI420Buffer(i12, i13);
            ByteBuffer byteBuffer2 = (ByteBuffer) byteBuffer.limit(i10 * i13);
            ByteBuffer byteBuffer3 = (ByteBuffer) byteBuffer.position(0);
            copyPlane(byteBuffer.slice(), i10, allocateI420Buffer.getDataY(), allocateI420Buffer.getStrideY(), i12, i13);
            ByteBuffer byteBuffer4 = (ByteBuffer) byteBuffer.limit(i19 + i20);
            ByteBuffer byteBuffer5 = (ByteBuffer) byteBuffer.position(i19);
            copyPlane(byteBuffer.slice(), i18, allocateI420Buffer.getDataU(), allocateI420Buffer.getStrideU(), i15, i17);
            if (i16 == 1) {
                ByteBuffer byteBuffer6 = (ByteBuffer) byteBuffer.position(i19 + (i18 * (i17 - 1)));
                ByteBuffer dataU = allocateI420Buffer.getDataU();
                ByteBuffer byteBuffer7 = (ByteBuffer) dataU.position(allocateI420Buffer.getStrideU() * i17);
                dataU.put(byteBuffer);
            }
            ByteBuffer byteBuffer8 = (ByteBuffer) byteBuffer.limit(i22);
            ByteBuffer byteBuffer9 = (ByteBuffer) byteBuffer.position(i21);
            copyPlane(byteBuffer.slice(), i18, allocateI420Buffer.getDataV(), allocateI420Buffer.getStrideV(), i15, i17);
            if (i16 == 1) {
                ByteBuffer byteBuffer10 = (ByteBuffer) byteBuffer.position(i21 + (i18 * (i17 - 1)));
                ByteBuffer dataV = allocateI420Buffer.getDataV();
                ByteBuffer byteBuffer11 = (ByteBuffer) dataV.position(allocateI420Buffer.getStrideV() * i17);
                dataV.put(byteBuffer);
            }
            return allocateI420Buffer;
        }
        throw new AssertionError("Stride is not divisible by two: " + i10);
    }

    private VideoFrame.Buffer copyNV12ToI420Buffer(ByteBuffer byteBuffer, int i10, int i11, int i12, int i13) {
        return new NV12Buffer(i12, i13, i10, i11, byteBuffer, null).toI420();
    }

    private Thread createOutputThread() {
        return new Thread("AndroidVideoDecoder.outputThread") { // from class: org.webrtc.AndroidVideoDecoder.1
            @Override // java.lang.Thread, java.lang.Runnable
            public void run() {
                AndroidVideoDecoder.this.outputThreadChecker = new ThreadUtils.ThreadChecker();
                while (AndroidVideoDecoder.this.running) {
                    AndroidVideoDecoder.this.deliverDecodedFrame();
                }
                AndroidVideoDecoder.this.releaseCodecOnOutputThread();
            }
        };
    }

    private void deliverByteFrame(int i10, MediaCodec.BufferInfo bufferInfo, int i11, Integer num) {
        int i12;
        int i13;
        int i14;
        int i15;
        AndroidVideoDecoder androidVideoDecoder;
        VideoFrame.Buffer copyNV12ToI420Buffer;
        synchronized (this.dimensionLock) {
            try {
                i12 = this.width;
                i13 = this.height;
                i14 = this.stride;
                i15 = this.sliceHeight;
            } catch (Throwable th2) {
                th = th2;
                while (true) {
                    try {
                        break;
                    } catch (Throwable th3) {
                        th = th3;
                    }
                }
                throw th;
            }
        }
        int i16 = bufferInfo.size;
        if (i16 < ((i12 * i13) * 3) / 2) {
            Logging.e(TAG, "Insufficient output buffer size: " + i16);
            return;
        }
        if (i16 < ((i14 * i13) * 3) / 2 && i15 == i13 && i14 > i12) {
            i14 = (i16 * 2) / (i13 * 3);
        }
        int i17 = i14;
        ByteBuffer outputBuffer = this.codec.getOutputBuffer(i10);
        ByteBuffer byteBuffer = (ByteBuffer) outputBuffer.position(bufferInfo.offset);
        ByteBuffer byteBuffer2 = (ByteBuffer) outputBuffer.limit(bufferInfo.offset + bufferInfo.size);
        ByteBuffer slice = outputBuffer.slice();
        if (this.colorFormat == 19) {
            androidVideoDecoder = this;
            copyNV12ToI420Buffer = androidVideoDecoder.copyI420Buffer(slice, i17, i15, i12, i13);
        } else {
            androidVideoDecoder = this;
            copyNV12ToI420Buffer = androidVideoDecoder.copyNV12ToI420Buffer(slice, i17, i15, i12, i13);
        }
        androidVideoDecoder.codec.releaseOutputBuffer(i10, false);
        VideoFrame videoFrame = new VideoFrame(copyNV12ToI420Buffer, i11, bufferInfo.presentationTimeUs * 1000);
        androidVideoDecoder.callback.onDecodedFrame(videoFrame, num, null);
        videoFrame.release();
    }

    private void deliverTextureFrame(int i10, MediaCodec.BufferInfo bufferInfo, int i11, Integer num) {
        int i12;
        int i13;
        synchronized (this.dimensionLock) {
            i12 = this.width;
            i13 = this.height;
        }
        synchronized (this.renderedTextureMetadataLock) {
            try {
                if (this.renderedTextureMetadata != null) {
                    this.codec.releaseOutputBuffer(i10, false);
                    return;
                }
                if (i12 > 0 && i13 > 0) {
                    this.surfaceTextureHelper.setTextureSize(i12, i13);
                    this.surfaceTextureHelper.setFrameRotation(i11);
                    this.renderedTextureMetadata = new DecodedTextureMetadata(bufferInfo.presentationTimeUs, num);
                    this.codec.releaseOutputBuffer(i10, true);
                    return;
                }
                this.codec.releaseOutputBuffer(i10, false);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private VideoCodecStatus initDecodeInternal(int i10, int i11) {
        this.decoderThreadChecker.checkIsOnValidThread();
        String str = this.codecName;
        VideoCodecMimeType videoCodecMimeType = this.codecType;
        int i12 = this.colorFormat;
        Logging.d(TAG, "initDecodeInternal name: " + str + " type: " + videoCodecMimeType + " width: " + i10 + " height: " + i11 + " color format: " + i12);
        if (this.outputThread != null) {
            Logging.e(TAG, "initDecodeInternal called while the codec is already running");
            return VideoCodecStatus.FALLBACK_SOFTWARE;
        }
        this.width = i10;
        this.height = i11;
        this.stride = i10;
        this.sliceHeight = i11;
        this.hasDecodedFirstFrame = false;
        this.keyFrameRequired = true;
        try {
            this.codec = this.mediaCodecWrapperFactory.createByCodecName(this.codecName);
            try {
                MediaFormat createVideoFormat = MediaFormat.createVideoFormat(this.codecType.mimeType(), i10, i11);
                if (this.sharedContext == null) {
                    createVideoFormat.setInteger("color-format", this.colorFormat);
                }
                this.codec.configure(createVideoFormat, this.surface, null, 0);
                this.codec.start();
                this.running = true;
                Thread createOutputThread = createOutputThread();
                this.outputThread = createOutputThread;
                createOutputThread.start();
                Logging.d(TAG, "initDecodeInternal done");
                return VideoCodecStatus.OK;
            } catch (IllegalArgumentException e10) {
                e = e10;
                Logging.e(TAG, "initDecode failed", e);
                release();
                return VideoCodecStatus.FALLBACK_SOFTWARE;
            } catch (IllegalStateException e11) {
                e = e11;
                Logging.e(TAG, "initDecode failed", e);
                release();
                return VideoCodecStatus.FALLBACK_SOFTWARE;
            }
        } catch (IOException | IllegalArgumentException | IllegalStateException unused) {
            String str2 = this.codecName;
            Logging.e(TAG, "Cannot create media decoder " + str2);
            return VideoCodecStatus.FALLBACK_SOFTWARE;
        }
    }

    private boolean isSupportedColorFormat(int i10) {
        for (int i11 : MediaCodecUtils.DECODER_COLOR_FORMATS) {
            if (i11 == i10) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00f1  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x0110 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void reformat(android.media.MediaFormat r8) {
        /*
            Method dump skipped, instructions count: 422
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: org.webrtc.AndroidVideoDecoder.reformat(android.media.MediaFormat):void");
    }

    private VideoCodecStatus reinitDecode(int i10, int i11) {
        this.decoderThreadChecker.checkIsOnValidThread();
        VideoCodecStatus releaseInternal = releaseInternal();
        if (releaseInternal != VideoCodecStatus.OK) {
            return releaseInternal;
        }
        return initDecodeInternal(i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void releaseCodecOnOutputThread() {
        this.outputThreadChecker.checkIsOnValidThread();
        Logging.d(TAG, "Releasing MediaCodec on output thread");
        try {
            this.codec.stop();
        } catch (Exception e10) {
            Logging.e(TAG, "Media decoder stop failed", e10);
        }
        try {
            this.codec.release();
        } catch (Exception e11) {
            Logging.e(TAG, "Media decoder release failed", e11);
            this.shutdownException = e11;
        }
        Logging.d(TAG, "Release on output thread done");
    }

    /* JADX WARN: Type inference failed for: r2v0, types: [org.webrtc.MediaCodecWrapper, java.lang.Thread] */
    private VideoCodecStatus releaseInternal() {
        if (!this.running) {
            Logging.d(TAG, "release: Decoder is not running.");
            return VideoCodecStatus.OK;
        }
        try {
            this.running = false;
            if (!ThreadUtils.joinUninterruptibly(this.outputThread, 5000L)) {
                Logging.e(TAG, "Media decoder release timeout", new RuntimeException());
                return VideoCodecStatus.TIMEOUT;
            } else if (this.shutdownException != null) {
                Logging.e(TAG, "Media decoder release error", new RuntimeException(this.shutdownException));
                this.shutdownException = null;
                return VideoCodecStatus.ERROR;
            } else {
                this.codec = null;
                this.outputThread = null;
                return VideoCodecStatus.OK;
            }
        } finally {
            this.codec = null;
            this.outputThread = null;
        }
    }

    private void stopOnOutputThread(Exception exc) {
        this.outputThreadChecker.checkIsOnValidThread();
        this.running = false;
        this.shutdownException = exc;
    }

    protected VideoFrame.I420Buffer allocateI420Buffer(int i10, int i11) {
        return JavaI420Buffer.allocate(i10, i11);
    }

    protected void copyPlane(ByteBuffer byteBuffer, int i10, ByteBuffer byteBuffer2, int i11, int i12, int i13) {
        YuvHelper.copyPlane(byteBuffer, i10, byteBuffer2, i11, i12, i13);
    }

    protected SurfaceTextureHelper createSurfaceTextureHelper() {
        return SurfaceTextureHelper.create("decoder-texture-thread", this.sharedContext);
    }

    @Override // org.webrtc.VideoDecoder
    public VideoCodecStatus decode(EncodedImage encodedImage, VideoDecoder.DecodeInfo decodeInfo) {
        int i10;
        int i11;
        VideoCodecStatus reinitDecode;
        this.decoderThreadChecker.checkIsOnValidThread();
        MediaCodecWrapper mediaCodecWrapper = this.codec;
        boolean z10 = false;
        if (mediaCodecWrapper != null && this.callback != null) {
            ByteBuffer byteBuffer = encodedImage.buffer;
            if (byteBuffer == null) {
                Logging.e(TAG, "decode() - no input data");
                return VideoCodecStatus.ERR_PARAMETER;
            }
            int remaining = byteBuffer.remaining();
            if (remaining == 0) {
                Logging.e(TAG, "decode() - input buffer empty");
                return VideoCodecStatus.ERR_PARAMETER;
            }
            synchronized (this.dimensionLock) {
                i10 = this.width;
                i11 = this.height;
            }
            int i12 = encodedImage.encodedWidth;
            int i13 = encodedImage.encodedHeight;
            if (i12 * i13 > 0 && ((i12 != i10 || i13 != i11) && (reinitDecode = reinitDecode(i12, i13)) != VideoCodecStatus.OK)) {
                return reinitDecode;
            }
            if (this.keyFrameRequired && encodedImage.frameType != EncodedImage.FrameType.VideoFrameKey) {
                Logging.e(TAG, "decode() - key frame required first");
                return VideoCodecStatus.NO_OUTPUT;
            }
            try {
                int dequeueInputBuffer = this.codec.dequeueInputBuffer(500000L);
                if (dequeueInputBuffer < 0) {
                    Logging.e(TAG, "decode() - no HW buffers available; decoder falling behind");
                    return VideoCodecStatus.ERROR;
                }
                try {
                    ByteBuffer inputBuffer = this.codec.getInputBuffer(dequeueInputBuffer);
                    if (inputBuffer.capacity() < remaining) {
                        Logging.e(TAG, "decode() - HW buffer too small");
                        return VideoCodecStatus.ERROR;
                    }
                    inputBuffer.put(encodedImage.buffer);
                    this.frameInfos.offer(new FrameInfo(SystemClock.elapsedRealtime(), encodedImage.rotation));
                    try {
                        this.codec.queueInputBuffer(dequeueInputBuffer, 0, remaining, TimeUnit.NANOSECONDS.toMicros(encodedImage.captureTimeNs), 0);
                        if (this.keyFrameRequired) {
                            this.keyFrameRequired = false;
                        }
                        return VideoCodecStatus.OK;
                    } catch (IllegalStateException e10) {
                        Logging.e(TAG, "queueInputBuffer failed", e10);
                        this.frameInfos.pollLast();
                        return VideoCodecStatus.ERROR;
                    }
                } catch (IllegalStateException e11) {
                    Logging.e(TAG, "getInputBuffer with index=" + dequeueInputBuffer + " failed", e11);
                    return VideoCodecStatus.ERROR;
                }
            } catch (IllegalStateException e12) {
                Logging.e(TAG, "dequeueInputBuffer failed", e12);
                return VideoCodecStatus.ERROR;
            }
        }
        if (mediaCodecWrapper != null) {
            z10 = true;
        }
        VideoDecoder.Callback callback = this.callback;
        Logging.d(TAG, "decode uninitalized, codec: " + z10 + ", callback: " + callback);
        return VideoCodecStatus.UNINITIALIZED;
    }

    protected void deliverDecodedFrame() {
        Integer num;
        int i10;
        this.outputThreadChecker.checkIsOnValidThread();
        try {
            MediaCodec.BufferInfo bufferInfo = new MediaCodec.BufferInfo();
            int dequeueOutputBuffer = this.codec.dequeueOutputBuffer(bufferInfo, 100000L);
            if (dequeueOutputBuffer == -2) {
                reformat(this.codec.getOutputFormat());
            } else if (dequeueOutputBuffer < 0) {
                Logging.v(TAG, "dequeueOutputBuffer returned " + dequeueOutputBuffer);
            } else {
                FrameInfo poll = this.frameInfos.poll();
                if (poll != null) {
                    num = Integer.valueOf((int) (SystemClock.elapsedRealtime() - poll.decodeStartTimeMs));
                    i10 = poll.rotation;
                } else {
                    num = null;
                    i10 = 0;
                }
                this.hasDecodedFirstFrame = true;
                if (this.surfaceTextureHelper != null) {
                    deliverTextureFrame(dequeueOutputBuffer, bufferInfo, i10, num);
                } else {
                    deliverByteFrame(dequeueOutputBuffer, bufferInfo, i10, num);
                }
            }
        } catch (IllegalStateException e10) {
            Logging.e(TAG, "deliverDecodedFrame failed", e10);
        }
    }

    @Override // org.webrtc.VideoDecoder
    public String getImplementationName() {
        return this.codecName;
    }

    @Override // org.webrtc.VideoDecoder
    public VideoCodecStatus initDecode(VideoDecoder.Settings settings, VideoDecoder.Callback callback) {
        this.decoderThreadChecker = new ThreadUtils.ThreadChecker();
        this.callback = callback;
        if (this.sharedContext != null) {
            try {
                this.surfaceTextureHelper = createSurfaceTextureHelper();
                this.surface = new Surface(this.surfaceTextureHelper.getSurfaceTexture());
                this.surfaceTextureHelper.startListening(this);
            } catch (Throwable th2) {
                Logging.e(TAG, "Error creating SurfaceTextureHelper", th2);
                Surface surface = this.surface;
                if (surface != null) {
                    surface.release();
                    this.surface = null;
                }
                SurfaceTextureHelper surfaceTextureHelper = this.surfaceTextureHelper;
                if (surfaceTextureHelper != null) {
                    surfaceTextureHelper.dispose();
                    this.surfaceTextureHelper = null;
                }
                return VideoCodecStatus.FALLBACK_SOFTWARE;
            }
        }
        return initDecodeInternal(settings.width, settings.height);
    }

    @Override // org.webrtc.VideoSink
    public void onFrame(VideoFrame videoFrame) {
        long j10;
        Integer num;
        synchronized (this.renderedTextureMetadataLock) {
            DecodedTextureMetadata decodedTextureMetadata = this.renderedTextureMetadata;
            if (decodedTextureMetadata != null) {
                j10 = decodedTextureMetadata.presentationTimestampUs * 1000;
                num = decodedTextureMetadata.decodeTimeMs;
                this.renderedTextureMetadata = null;
            } else {
                throw new IllegalStateException("Rendered texture metadata was null in onTextureFrameAvailable.");
            }
        }
        this.callback.onDecodedFrame(new VideoFrame(videoFrame.getBuffer(), videoFrame.getRotation(), j10), num, null);
    }

    @Override // org.webrtc.VideoDecoder
    public VideoCodecStatus release() {
        Logging.d(TAG, "release");
        VideoCodecStatus releaseInternal = releaseInternal();
        if (this.surface != null) {
            releaseSurface();
            this.surface = null;
            this.surfaceTextureHelper.stopListening();
            this.surfaceTextureHelper.dispose();
            this.surfaceTextureHelper = null;
        }
        synchronized (this.renderedTextureMetadataLock) {
            this.renderedTextureMetadata = null;
        }
        this.callback = null;
        this.frameInfos.clear();
        return releaseInternal;
    }

    protected void releaseSurface() {
        this.surface.release();
    }
}
