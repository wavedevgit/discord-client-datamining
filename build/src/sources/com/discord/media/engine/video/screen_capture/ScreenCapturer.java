package com.discord.media.engine.video.screen_capture;

import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.graphics.Rect;
import android.media.AudioFormat;
import android.media.AudioPlaybackCaptureConfiguration;
import android.media.AudioRecord;
import android.media.projection.MediaProjection;
import android.os.Build;
import android.view.WindowManager;
import co.discord.media_engine.NativeCapturerObserver;
import co.discord.media_engine.SoundshareAudioSource;
import com.discord.device.utils.IsMetaQuestKt;
import com.discord.logging.Log;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.webrtc.CapturerObserver;
import org.webrtc.ScreenCapturerAndroid;
import org.webrtc.SurfaceTextureHelper;
import org.webrtc.TimestampAligner;
import org.webrtc.VideoFrame;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\n\b\u0000\u0018\u0000 @2\u00020\u0001:\u0003>?@B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J \u0010%\u001a\u00020&2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010'\u001a\u00020\u00142\u0006\u0010(\u001a\u00020)H\u0016J\n\u0010*\u001a\u0004\u0018\u00010+H\u0003J \u0010,\u001a\u00020&2\u0006\u0010-\u001a\u00020\u001a2\u0006\u0010.\u001a\u00020\u001a2\u0006\u0010\u0019\u001a\u00020\u001aH\u0016J\b\u0010/\u001a\u00020&H\u0016J \u00100\u001a\u00020&2\u0006\u0010-\u001a\u00020\u001a2\u0006\u0010.\u001a\u00020\u001a2\u0006\u0010\u0019\u001a\u00020\u001aH\u0016J\u0016\u00101\u001a\u00020&2\u0006\u00102\u001a\u00020 2\u0006\u0010$\u001a\u00020\u001aJ\u0010\u00103\u001a\u00020&2\u0006\u0010\u0019\u001a\u00020\u001aH\u0002J\u0010\u00104\u001a\u00020 2\u0006\u0010\u0013\u001a\u00020\u0014H\u0002J\u0012\u00105\u001a\u00020&2\b\u00106\u001a\u0004\u0018\u000107H\u0016J\b\u00108\u001a\u00020&H\u0014J\b\u00109\u001a\u00020&H\u0002J\b\u0010:\u001a\u00020&H\u0002J\u0006\u0010;\u001a\u00020&J\u0006\u0010<\u001a\u00020&J\b\u0010=\u001a\u00020&H\u0016R(\u0010\b\u001a\u0004\u0018\u00010\u00072\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\t\u0010\n\"\u0004\b\u000b\u0010\fR\u0012\u0010\r\u001a\u00060\u000eR\u00020\u0000X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082.¢\u0006\u0002\n\u0000R\u0011\u0010\u0015\u001a\u00020\u0016¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u000e\u0010\u0019\u001a\u00020\u001aX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u001aX\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u001c\u001a\u0004\u0018\u00010\u001dX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001eR\u000e\u0010\u001f\u001a\u00020 X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010!\u001a\u00020 X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\"\u001a\u00020#X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020\u001aX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006A"}, d2 = {"Lcom/discord/media/engine/video/screen_capture/ScreenCapturer;", "Lorg/webrtc/ScreenCapturerAndroid;", "mediaProjectionPermissionResultData", "Landroid/content/Intent;", "<init>", "(Landroid/content/Intent;)V", "value", "Lcom/discord/media/engine/video/screen_capture/ThumbnailEmitter;", "thumbnailEmitter", "getThumbnailEmitter", "()Lcom/discord/media/engine/video/screen_capture/ThumbnailEmitter;", "setThumbnailEmitter", "(Lcom/discord/media/engine/video/screen_capture/ThumbnailEmitter;)V", "watchdog", "Lcom/discord/media/engine/video/screen_capture/ScreenCapturer$Watchdog;", "nativeObserver", "Lco/discord/media_engine/NativeCapturerObserver;", "surfaceTextureHelper", "Lorg/webrtc/SurfaceTextureHelper;", "context", "Landroid/content/Context;", "soundshare", "Lco/discord/media_engine/SoundshareAudioSource;", "getSoundshare", "()Lco/discord/media_engine/SoundshareAudioSource;", "framerate", "", "intervalNanos", "lastFrameTimestamp", "", "Ljava/lang/Long;", "lastMeasuredSize", "Landroid/graphics/Rect;", "currentMeasuredSize", "calculatedSize", "Landroid/graphics/Point;", "maxPixelCount", "initialize", "", "applicationContext", "capturerObserver", "Lorg/webrtc/CapturerObserver;", "createRecorder", "Landroid/media/AudioRecord;", "startCapture", "width", "height", "stopCapture", "changeCaptureFormat", "changeCaptureFormatInternal", "measuredSize", "setFramerate", "getScreenSize", "onFrame", "frame", "Lorg/webrtc/VideoFrame;", "updateVirtualDisplay", "startWatchdog", "stopWatchdog", "scheduleWatchdog", "release", "dispose", "Watchdog", "MediaProjectionObserver", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenCapturer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenCapturer.kt\ncom/discord/media/engine/video/screen_capture/ScreenCapturer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,262:1\n1#2:263\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ScreenCapturer extends ScreenCapturerAndroid {
    private static final int AUDIO_FORMAT = 2;
    private static final int CHANNEL_CONFIG = 16;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MIN_REPEAT_FRAMERATE = 10;
    private static final int SAMPLING_RATE_IN_HZ = 44100;
    @NotNull
    private static final String TAG = "ScreenCapturer";
    @NotNull
    private final Point calculatedSize;
    private Context context;
    @NotNull
    private final Rect currentMeasuredSize;
    private int framerate;
    private int intervalNanos;
    private Long lastFrameTimestamp;
    @NotNull
    private final Rect lastMeasuredSize;
    private int maxPixelCount;
    private NativeCapturerObserver nativeObserver;
    @NotNull
    private final SoundshareAudioSource soundshare;
    private SurfaceTextureHelper surfaceTextureHelper;
    private ThumbnailEmitter thumbnailEmitter;
    @NotNull
    private final Watchdog watchdog;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H\u0002R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/media/engine/video/screen_capture/ScreenCapturer$Companion;", "", "<init>", "()V", "closestMod16", "", "n", "TAG", "", "SAMPLING_RATE_IN_HZ", "CHANNEL_CONFIG", "AUDIO_FORMAT", "MIN_REPEAT_FRAMERATE", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int closestMod16(int i10) {
            int i11 = i10 % 16;
            if (i11 < 8) {
                return i10 - i11;
            }
            return (i10 + 16) - i11;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\rH\u0016R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\t¨\u0006\u000f"}, d2 = {"Lcom/discord/media/engine/video/screen_capture/ScreenCapturer$MediaProjectionObserver;", "Landroid/media/projection/MediaProjection$Callback;", "<init>", "()V", "currentCaptureSize", "Landroid/graphics/Rect;", "getCurrentCaptureSize", "()Landroid/graphics/Rect;", "setCurrentCaptureSize", "(Landroid/graphics/Rect;)V", "onCapturedContentResize", "", "width", "", "height", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class MediaProjectionObserver extends MediaProjection.Callback {
        @NotNull
        public static final MediaProjectionObserver INSTANCE = new MediaProjectionObserver();
        @NotNull
        private static Rect currentCaptureSize = new Rect();

        private MediaProjectionObserver() {
        }

        @NotNull
        public final Rect getCurrentCaptureSize() {
            return currentCaptureSize;
        }

        public void onCapturedContentResize(int i10, int i11) {
            currentCaptureSize.set(0, 0, i10, i11);
        }

        public final void setCurrentCaptureSize(@NotNull Rect rect) {
            Intrinsics.checkNotNullParameter(rect, "<set-?>");
            currentCaptureSize = rect;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\b\u0082\u0004\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"Lcom/discord/media/engine/video/screen_capture/ScreenCapturer$Watchdog;", "Ljava/lang/Runnable;", "<init>", "(Lcom/discord/media/engine/video/screen_capture/ScreenCapturer;)V", "run", "", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class Watchdog implements Runnable {
        public Watchdog() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (ScreenCapturer.this.framerate > 0) {
                Long l10 = ScreenCapturer.this.lastFrameTimestamp;
                if (l10 != null) {
                    ScreenCapturer screenCapturer = ScreenCapturer.this;
                    if (TimestampAligner.getRtcTimeNanos() - l10.longValue() > screenCapturer.intervalNanos) {
                        NativeCapturerObserver nativeCapturerObserver = screenCapturer.nativeObserver;
                        if (nativeCapturerObserver == null) {
                            Intrinsics.throwUninitializedPropertyAccessException("nativeObserver");
                            nativeCapturerObserver = null;
                        }
                        nativeCapturerObserver.repeatLastFrame();
                    }
                }
                ScreenCapturer.this.scheduleWatchdog();
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenCapturer(@NotNull Intent mediaProjectionPermissionResultData) {
        super(mediaProjectionPermissionResultData, MediaProjectionObserver.INSTANCE);
        Intrinsics.checkNotNullParameter(mediaProjectionPermissionResultData, "mediaProjectionPermissionResultData");
        this.watchdog = new Watchdog();
        this.soundshare = new SoundshareAudioSource();
        this.lastMeasuredSize = new Rect();
        this.currentMeasuredSize = new Rect();
        this.calculatedSize = new Point();
    }

    private final AudioRecord createRecorder() {
        MediaProjection mediaProjection = this.mediaProjection;
        if (mediaProjection != null) {
            AudioPlaybackCaptureConfiguration build = a.a(mediaProjection).addMatchingUsage(1).addMatchingUsage(14).addMatchingUsage(0).build();
            Intrinsics.checkNotNullExpressionValue(build, "build(...)");
            try {
                return new AudioRecord.Builder().setAudioFormat(new AudioFormat.Builder().setEncoding(2).setSampleRate(SAMPLING_RATE_IN_HZ).setChannelMask(16).build()).setAudioPlaybackCaptureConfig(build).build();
            } catch (SecurityException e10) {
                Log.INSTANCE.e(TAG, "Failed to record audio", e10);
            }
        }
        return null;
    }

    private final Rect getScreenSize(Context context) {
        Rect rect = this.currentMeasuredSize;
        if (IsMetaQuestKt.isMetaQuest()) {
            rect.set(0, 0, 1280, 720);
            return rect;
        }
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            rect.set(MediaProjectionObserver.INSTANCE.getCurrentCaptureSize());
            return rect;
        } else if (i10 >= 30) {
            Object systemService = context.getSystemService("window");
            Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.view.WindowManager");
            rect.set(((WindowManager) systemService).getMaximumWindowMetrics().getBounds());
            return rect;
        } else {
            rect.set(0, 0, context.getResources().getDisplayMetrics().widthPixels, context.getResources().getDisplayMetrics().heightPixels);
            return rect;
        }
    }

    private final void setFramerate(int i10) {
        if (i10 <= 0) {
            this.framerate = 0;
            this.intervalNanos = 0;
            return;
        }
        this.framerate = i10;
        this.intervalNanos = 1000000000 / Math.max(10, i10 / 2);
    }

    private final void startWatchdog() {
        scheduleWatchdog();
    }

    private final void stopWatchdog() {
        this.framerate = 0;
        this.lastFrameTimestamp = null;
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoCapturer
    public synchronized void changeCaptureFormat(int i10, int i11, int i12) {
        changeCaptureFormatInternal(this.lastMeasuredSize, i10 * i11);
        setFramerate(i12);
    }

    public final synchronized void changeCaptureFormatInternal(@NotNull Rect measuredSize, int i10) {
        Intrinsics.checkNotNullParameter(measuredSize, "measuredSize");
        int width = measuredSize.width() * measuredSize.height();
        if (width > 0) {
            float sqrt = (float) Math.sqrt(i10 / width);
            this.calculatedSize.set((int) (measuredSize.width() * sqrt), (int) (measuredSize.height() * sqrt));
            Point point = this.calculatedSize;
            Companion companion = Companion;
            point.set(companion.closestMod16(point.x), companion.closestMod16(this.calculatedSize.y));
            Point point2 = this.calculatedSize;
            super.changeCaptureFormat(point2.x, point2.y, this.framerate);
        }
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoCapturer
    public void dispose() {
        release();
        super.dispose();
    }

    @NotNull
    public final SoundshareAudioSource getSoundshare() {
        return this.soundshare;
    }

    public final ThumbnailEmitter getThumbnailEmitter() {
        return this.thumbnailEmitter;
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoCapturer
    public synchronized void initialize(@NotNull SurfaceTextureHelper surfaceTextureHelper, @NotNull Context applicationContext, @NotNull CapturerObserver capturerObserver) {
        Intrinsics.checkNotNullParameter(surfaceTextureHelper, "surfaceTextureHelper");
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(capturerObserver, "capturerObserver");
        this.surfaceTextureHelper = surfaceTextureHelper;
        this.context = applicationContext;
        this.nativeObserver = (NativeCapturerObserver) capturerObserver;
        super.initialize(surfaceTextureHelper, applicationContext, capturerObserver);
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoSink
    public void onFrame(VideoFrame videoFrame) {
        if (videoFrame != null) {
            Context context = this.context;
            if (context == null) {
                Intrinsics.throwUninitializedPropertyAccessException("context");
                context = null;
            }
            Rect screenSize = getScreenSize(context);
            if (!Intrinsics.areEqual(screenSize, this.lastMeasuredSize)) {
                this.lastMeasuredSize.set(screenSize);
                changeCaptureFormatInternal(screenSize, this.maxPixelCount);
            }
            this.lastFrameTimestamp = Long.valueOf(videoFrame.getTimestampNs());
            ThumbnailEmitter thumbnailEmitter = this.thumbnailEmitter;
            if (thumbnailEmitter != null) {
                thumbnailEmitter.onFrame(videoFrame);
            }
        }
        super.onFrame(videoFrame);
    }

    public final void release() {
        stopCapture();
        this.soundshare.release();
        setThumbnailEmitter(null);
    }

    public final void scheduleWatchdog() {
        if (this.framerate > 0) {
            SurfaceTextureHelper surfaceTextureHelper = this.surfaceTextureHelper;
            if (surfaceTextureHelper == null) {
                Intrinsics.throwUninitializedPropertyAccessException("surfaceTextureHelper");
                surfaceTextureHelper = null;
            }
            surfaceTextureHelper.getHandler().postDelayed(this.watchdog, this.intervalNanos / 1000000);
        }
    }

    public final void setThumbnailEmitter(ThumbnailEmitter thumbnailEmitter) {
        ThumbnailEmitter thumbnailEmitter2 = this.thumbnailEmitter;
        if (thumbnailEmitter2 != null) {
            thumbnailEmitter2.release();
        }
        this.thumbnailEmitter = thumbnailEmitter;
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoCapturer
    public synchronized void startCapture(int i10, int i11, int i12) {
        AudioRecord createRecorder;
        try {
            super.startCapture(i10, i11, i12);
            this.maxPixelCount = i10 * i11;
            setFramerate(i12);
            if (Build.VERSION.SDK_INT >= 29 && (createRecorder = createRecorder()) != null) {
                this.soundshare.startRecording(createRecorder);
            }
            startWatchdog();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // org.webrtc.ScreenCapturerAndroid, org.webrtc.VideoCapturer
    public synchronized void stopCapture() {
        super.stopCapture();
        this.soundshare.stopRecording();
        stopWatchdog();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // org.webrtc.ScreenCapturerAndroid
    public void updateVirtualDisplay() {
        try {
            super.updateVirtualDisplay();
        } catch (Throwable th2) {
            Log.INSTANCE.e(TAG, "error in updateVirtualDisplay", th2);
        }
    }
}
