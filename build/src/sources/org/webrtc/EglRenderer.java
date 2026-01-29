package org.webrtc;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.view.Surface;
import java.nio.ByteBuffer;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.LongCompanionObject;
import org.webrtc.EglBase;
import org.webrtc.EglThread;
import org.webrtc.GlUtil;
import org.webrtc.RendererCommon;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class EglRenderer implements VideoSink {
    private static final long LOG_INTERVAL_SEC = 4;
    private static final String TAG = "EglRenderer";
    private final GlTextureFrameBuffer bitmapTextureFramebuffer;
    private final Matrix drawMatrix;
    private RendererCommon.GlDrawer drawer;
    private EglBase eglBase;
    private final Runnable eglExceptionCallback;
    private final EglSurfaceCreation eglSurfaceCreationRunnable;
    private EglThread eglThread;
    private volatile ErrorCallback errorCallback;
    private final Object fpsReductionLock;
    private final VideoFrameDrawer frameDrawer;
    private final ArrayList<FrameListenerAndParams> frameListeners;
    private final Object frameLock;
    private int framesDropped;
    private int framesReceived;
    private int framesRendered;

    /* renamed from: id  reason: collision with root package name */
    private Optional<UUID> f44625id;
    private float layoutAspectRatio;
    private final Object layoutLock;
    private final Runnable logStatisticsRunnable;
    private long minRenderPeriodNs;
    private boolean mirrorHorizontally;
    private boolean mirrorVertically;
    protected final String name;
    private long nextFrameTimeNs;
    private VideoFrame pendingFrame;
    private final ArrayList<RenderListener> renderListeners;
    private long renderSwapBufferTimeNs;
    private long renderTimeNs;
    private final Object statisticsLock;
    private long statisticsStartTimeNs;
    private final Object threadLock;
    private boolean usePresentationTimeStamp;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class EglSurfaceCreation implements Runnable {
        private Object surface;

        @Override // java.lang.Runnable
        public synchronized void run() {
            try {
                if (this.surface != null && EglRenderer.this.eglBase != null && !EglRenderer.this.eglBase.hasSurface()) {
                    Object obj = this.surface;
                    if (obj instanceof Surface) {
                        EglRenderer.this.eglBase.createSurface((Surface) this.surface);
                    } else if (obj instanceof SurfaceTexture) {
                        EglRenderer.this.eglBase.createSurface((SurfaceTexture) this.surface);
                    } else {
                        Object obj2 = this.surface;
                        throw new IllegalStateException("Invalid surface: " + obj2);
                    }
                    EglRenderer.this.eglBase.makeCurrent();
                    GLES20.glPixelStorei(3317, 1);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }

        public synchronized void setSurface(Object obj) {
            this.surface = obj;
        }

        private EglSurfaceCreation() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ErrorCallback {
        void onGlOutOfMemory();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface FrameListener {
        void onFrame(Bitmap bitmap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class FrameListenerAndParams {
        public final boolean applyFpsReduction;
        public final RendererCommon.GlDrawer drawer;
        public final FrameListener listener;
        public final float scale;

        public FrameListenerAndParams(FrameListener frameListener, float f10, RendererCommon.GlDrawer glDrawer, boolean z10) {
            this.listener = frameListener;
            this.scale = f10;
            this.drawer = glDrawer;
            this.applyFpsReduction = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface RenderListener {
        void onRender(long j10);
    }

    public EglRenderer(String str) {
        this(str, new VideoFrameDrawer());
    }

    private String averageTimeAsString(long j10, int i10) {
        if (i10 <= 0) {
            return "NA";
        }
        long micros = TimeUnit.NANOSECONDS.toMicros(j10 / i10);
        return micros + " us";
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: clearSurfaceOnRenderThread */
    public void lambda$clearImage$5(float f10, float f11, float f12, float f13) {
        EglBase eglBase = this.eglBase;
        if (eglBase != null && eglBase.hasSurface()) {
            logD("clearSurface");
            this.eglBase.makeCurrent();
            GLES20.glClearColor(f10, f11, f12, f13);
            GLES20.glClear(16384);
            this.eglBase.swapBuffers();
        }
    }

    private void createEglSurfaceInternal(Object obj) {
        this.eglSurfaceCreationRunnable.setSurface(obj);
        postToRenderThread(this.eglSurfaceCreationRunnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$addFrameListener$1(RendererCommon.GlDrawer glDrawer, FrameListener frameListener, float f10, boolean z10) {
        if (glDrawer == null) {
            glDrawer = this.drawer;
        }
        this.frameListeners.add(new FrameListenerAndParams(frameListener, f10, glDrawer, z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$release$0(CountDownLatch countDownLatch) {
        synchronized (EglBase.lock) {
            GLES20.glUseProgram(0);
        }
        RendererCommon.GlDrawer glDrawer = this.drawer;
        if (glDrawer != null) {
            glDrawer.release();
            this.drawer = null;
        }
        this.frameDrawer.release();
        this.bitmapTextureFramebuffer.release();
        if (this.eglBase != null) {
            logD("eglBase detach and release.");
            this.eglBase.detachCurrent();
            this.eglBase.release();
            this.eglBase = null;
        }
        this.renderListeners.clear();
        this.frameListeners.clear();
        countDownLatch.countDown();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$releaseEglSurface$4(Runnable runnable) {
        EglBase eglBase = this.eglBase;
        if (eglBase != null) {
            eglBase.detachCurrent();
            this.eglBase.releaseSurface();
        }
        runnable.run();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$removeFrameListener$2(CountDownLatch countDownLatch, FrameListener frameListener) {
        countDownLatch.countDown();
        Iterator<FrameListenerAndParams> it = this.frameListeners.iterator();
        while (it.hasNext()) {
            if (it.next().listener == frameListener) {
                it.remove();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$removeRenderListener$3(CountDownLatch countDownLatch, RenderListener renderListener) {
        countDownLatch.countDown();
        Iterator<RenderListener> it = this.renderListeners.iterator();
        while (it.hasNext()) {
            if (it.next() == renderListener) {
                it.remove();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$swapBuffersOnRenderThread$6(VideoFrame videoFrame, long j10, boolean z10) {
        if (!z10) {
            EglBase eglBase = this.eglBase;
            if (eglBase != null && eglBase.hasSurface()) {
                this.eglBase.makeCurrent();
            } else {
                return;
            }
        }
        if (this.usePresentationTimeStamp) {
            this.eglBase.swapBuffers(videoFrame.getTimestampNs());
        } else {
            this.eglBase.swapBuffers();
        }
        Iterator<RenderListener> it = this.renderListeners.iterator();
        while (it.hasNext()) {
            it.next().onRender(System.nanoTime());
        }
        synchronized (this.statisticsLock) {
            this.renderSwapBufferTimeNs += System.nanoTime() - j10;
        }
    }

    private void logD(String str) {
        String str2 = this.name;
        Logging.d(TAG, str2 + str);
    }

    private void logE(String str, Throwable th2) {
        String str2 = this.name;
        Logging.e(TAG, str2 + str, th2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void logStatistics() {
        DecimalFormat decimalFormat = new DecimalFormat("#.0");
        long nanoTime = System.nanoTime();
        synchronized (this.statisticsLock) {
            try {
                long j10 = nanoTime - this.statisticsStartTimeNs;
                if (j10 > 0 && (this.minRenderPeriodNs != LongCompanionObject.MAX_VALUE || this.framesReceived != 0)) {
                    float nanos = ((float) (this.framesRendered * TimeUnit.SECONDS.toNanos(1L))) / ((float) j10);
                    long millis = TimeUnit.NANOSECONDS.toMillis(j10);
                    int i10 = this.framesReceived;
                    int i11 = this.framesDropped;
                    int i12 = this.framesRendered;
                    String format = decimalFormat.format(nanos);
                    String averageTimeAsString = averageTimeAsString(this.renderTimeNs, this.framesRendered);
                    String averageTimeAsString2 = averageTimeAsString(this.renderSwapBufferTimeNs, this.framesRendered);
                    logD("Duration: " + millis + " ms. Frames received: " + i10 + ". Dropped: " + i11 + ". Rendered: " + i12 + ". Render fps: " + format + ". Average render time: " + averageTimeAsString + ". Average swapBuffer time: " + averageTimeAsString2 + ".");
                    resetStatistics(nanoTime);
                }
            } finally {
            }
        }
    }

    private void logW(String str) {
        String str2 = this.name;
        Logging.w(TAG, str2 + str);
    }

    private void notifyCallbacks(VideoFrame videoFrame, boolean z10) {
        float f10;
        float f11;
        if (!this.frameListeners.isEmpty()) {
            this.drawMatrix.reset();
            this.drawMatrix.preTranslate(0.5f, 0.5f);
            Matrix matrix = this.drawMatrix;
            if (this.mirrorHorizontally) {
                f10 = -1.0f;
            } else {
                f10 = 1.0f;
            }
            if (this.mirrorVertically) {
                f11 = -1.0f;
            } else {
                f11 = 1.0f;
            }
            matrix.preScale(f10, f11);
            this.drawMatrix.preScale(1.0f, -1.0f);
            this.drawMatrix.preTranslate(-0.5f, -0.5f);
            Iterator<FrameListenerAndParams> it = this.frameListeners.iterator();
            while (it.hasNext()) {
                FrameListenerAndParams next = it.next();
                if (z10 || !next.applyFpsReduction) {
                    it.remove();
                    int rotatedWidth = (int) (next.scale * videoFrame.getRotatedWidth());
                    int rotatedHeight = (int) (next.scale * videoFrame.getRotatedHeight());
                    if (rotatedWidth != 0 && rotatedHeight != 0) {
                        this.bitmapTextureFramebuffer.setSize(rotatedWidth, rotatedHeight);
                        GLES20.glBindFramebuffer(36160, this.bitmapTextureFramebuffer.getFrameBufferId());
                        GLES20.glFramebufferTexture2D(36160, 36064, 3553, this.bitmapTextureFramebuffer.getTextureId(), 0);
                        GLES20.glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                        GLES20.glClear(16384);
                        this.frameDrawer.drawFrame(videoFrame, next.drawer, this.drawMatrix, 0, 0, rotatedWidth, rotatedHeight);
                        ByteBuffer allocateDirect = ByteBuffer.allocateDirect(rotatedWidth * rotatedHeight * 4);
                        GLES20.glViewport(0, 0, rotatedWidth, rotatedHeight);
                        GLES20.glReadPixels(0, 0, rotatedWidth, rotatedHeight, 6408, 5121, allocateDirect);
                        GLES20.glBindFramebuffer(36160, 0);
                        GlUtil.checkNoGLES2Error("EglRenderer.notifyCallbacks");
                        Bitmap createBitmap = Bitmap.createBitmap(rotatedWidth, rotatedHeight, Bitmap.Config.ARGB_8888);
                        createBitmap.copyPixelsFromBuffer(allocateDirect);
                        next.listener.onFrame(createBitmap);
                    } else {
                        next.listener.onFrame(null);
                    }
                }
            }
        }
    }

    private void postToRenderThread(Runnable runnable) {
        synchronized (this.threadLock) {
            try {
                EglThread eglThread = this.eglThread;
                if (eglThread != null) {
                    eglThread.getHandler().post(runnable);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void renderFrameOnRenderThread() {
        boolean z10;
        float f10;
        float f11;
        float f12;
        float f13;
        synchronized (this.frameLock) {
            try {
                VideoFrame videoFrame = this.pendingFrame;
                if (videoFrame == null) {
                    return;
                }
                this.pendingFrame = null;
                EglBase eglBase = this.eglBase;
                if (eglBase != null && eglBase.hasSurface()) {
                    this.eglBase.makeCurrent();
                    synchronized (this.fpsReductionLock) {
                        try {
                            long j10 = this.minRenderPeriodNs;
                            if (j10 != LongCompanionObject.MAX_VALUE) {
                                if (j10 > 0) {
                                    long nanoTime = System.nanoTime();
                                    long j11 = this.nextFrameTimeNs;
                                    if (nanoTime < j11) {
                                        logD("Skipping frame rendering - fps reduction is active.");
                                    } else {
                                        long j12 = j11 + this.minRenderPeriodNs;
                                        this.nextFrameTimeNs = j12;
                                        this.nextFrameTimeNs = Math.max(j12, nanoTime);
                                    }
                                }
                                z10 = true;
                            }
                            z10 = false;
                        } finally {
                        }
                    }
                    long nanoTime2 = System.nanoTime();
                    float rotatedWidth = videoFrame.getRotatedWidth() / videoFrame.getRotatedHeight();
                    synchronized (this.layoutLock) {
                        f10 = this.layoutAspectRatio;
                        if (f10 == 0.0f) {
                            f10 = rotatedWidth;
                        }
                    }
                    float f14 = 1.0f;
                    if (rotatedWidth > f10) {
                        f12 = f10 / rotatedWidth;
                        f11 = 1.0f;
                    } else {
                        f11 = rotatedWidth / f10;
                        f12 = 1.0f;
                    }
                    this.drawMatrix.reset();
                    this.drawMatrix.preTranslate(0.5f, 0.5f);
                    Matrix matrix = this.drawMatrix;
                    if (this.mirrorHorizontally) {
                        f13 = -1.0f;
                    } else {
                        f13 = 1.0f;
                    }
                    if (this.mirrorVertically) {
                        f14 = -1.0f;
                    }
                    matrix.preScale(f13, f14);
                    this.drawMatrix.preScale(f12, f11);
                    this.drawMatrix.preTranslate(-0.5f, -0.5f);
                    try {
                        if (z10) {
                            try {
                                GLES20.glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                                GLES20.glClear(16384);
                                this.frameDrawer.drawFrame(videoFrame, this.drawer, this.drawMatrix, 0, 0, this.eglBase.surfaceWidth(), this.eglBase.surfaceHeight());
                                long nanoTime3 = System.nanoTime();
                                swapBuffersOnRenderThread(videoFrame, nanoTime3);
                                synchronized (this.statisticsLock) {
                                    this.framesRendered++;
                                    this.renderTimeNs += nanoTime3 - nanoTime2;
                                }
                            } catch (GlUtil.GlOutOfMemoryException e10) {
                                logE("Error while drawing frame", e10);
                                ErrorCallback errorCallback = this.errorCallback;
                                if (errorCallback != null) {
                                    errorCallback.onGlOutOfMemory();
                                }
                                this.drawer.release();
                                this.frameDrawer.release();
                                this.bitmapTextureFramebuffer.release();
                                videoFrame.release();
                                return;
                            }
                        }
                        notifyCallbacks(videoFrame, z10);
                        videoFrame.release();
                        return;
                    } catch (Throwable th2) {
                        videoFrame.release();
                        throw th2;
                    }
                }
                logD("Dropping frame - No surface");
                videoFrame.release();
            } finally {
            }
        }
    }

    private void resetStatistics(long j10) {
        synchronized (this.statisticsLock) {
            this.statisticsStartTimeNs = j10;
            this.framesReceived = 0;
            this.framesDropped = 0;
            this.framesRendered = 0;
            this.renderTimeNs = 0L;
            this.renderSwapBufferTimeNs = 0L;
        }
    }

    private void swapBuffersOnRenderThread(final VideoFrame videoFrame, final long j10) {
        synchronized (this.threadLock) {
            try {
                if (this.eglThread == null) {
                    return;
                }
                EglThread.RenderUpdate renderUpdate = new EglThread.RenderUpdate() { // from class: org.webrtc.q
                    @Override // org.webrtc.EglThread.RenderUpdate
                    public final void update(boolean z10) {
                        EglRenderer.this.lambda$swapBuffersOnRenderThread$6(videoFrame, j10, z10);
                    }
                };
                if (this.f44625id.isPresent()) {
                    this.eglThread.scheduleRenderUpdate(this.f44625id.get(), renderUpdate);
                } else {
                    this.eglThread.scheduleRenderUpdate(renderUpdate);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void addFrameListener(FrameListener frameListener, float f10) {
        addFrameListener(frameListener, f10, null, false);
    }

    public void addRenderListener(RenderListener renderListener) {
        this.renderListeners.add(renderListener);
    }

    public void clearImage() {
        clearImage(0.0f, 0.0f, 0.0f, 0.0f);
    }

    public void createEglSurface(Surface surface) {
        createEglSurfaceInternal(surface);
    }

    public void disableFpsReduction() {
        setFpsReduction(Float.POSITIVE_INFINITY);
    }

    public void init(EglThread eglThread, RendererCommon.GlDrawer glDrawer, boolean z10) {
        synchronized (this.threadLock) {
            try {
                if (this.eglThread == null) {
                    logD("Initializing EglRenderer");
                    this.eglThread = eglThread;
                    this.drawer = glDrawer;
                    this.usePresentationTimeStamp = z10;
                    eglThread.addExceptionCallback(this.eglExceptionCallback);
                    this.eglBase = eglThread.createEglBaseWithSharedConnection();
                    eglThread.getHandler().post(this.eglSurfaceCreationRunnable);
                    resetStatistics(System.nanoTime());
                    eglThread.getHandler().postDelayed(this.logStatisticsRunnable, TimeUnit.SECONDS.toMillis(LOG_INTERVAL_SEC));
                } else {
                    String str = this.name;
                    throw new IllegalStateException(str + "Already initialized");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // org.webrtc.VideoSink
    public void onFrame(VideoFrame videoFrame) {
        boolean z10;
        synchronized (this.statisticsLock) {
            this.framesReceived++;
        }
        synchronized (this.threadLock) {
            try {
                if (this.eglThread == null) {
                    logD("Dropping frame - Not initialized or already released.");
                    return;
                }
                synchronized (this.frameLock) {
                    VideoFrame videoFrame2 = this.pendingFrame;
                    if (videoFrame2 != null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10) {
                        videoFrame2.release();
                    }
                    this.pendingFrame = videoFrame;
                    videoFrame.retain();
                    this.eglThread.getHandler().post(new Runnable() { // from class: org.webrtc.s
                        @Override // java.lang.Runnable
                        public final void run() {
                            EglRenderer.this.renderFrameOnRenderThread();
                        }
                    });
                }
                if (z10) {
                    synchronized (this.statisticsLock) {
                        this.framesDropped++;
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void pauseVideo() {
        setFpsReduction(0.0f);
    }

    public void printStackTrace() {
        Thread thread;
        synchronized (this.threadLock) {
            try {
                EglThread eglThread = this.eglThread;
                if (eglThread == null) {
                    thread = null;
                } else {
                    thread = eglThread.getHandler().getLooper().getThread();
                }
                if (thread != null) {
                    StackTraceElement[] stackTrace = thread.getStackTrace();
                    if (stackTrace.length > 0) {
                        logW("EglRenderer stack trace:");
                        for (StackTraceElement stackTraceElement : stackTrace) {
                            logW(stackTraceElement.toString());
                        }
                    }
                }
            } finally {
            }
        }
    }

    public void release() {
        logD("Releasing.");
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        synchronized (this.threadLock) {
            try {
                EglThread eglThread = this.eglThread;
                if (eglThread == null) {
                    logD("Already released");
                    return;
                }
                eglThread.getHandler().removeCallbacks(this.logStatisticsRunnable);
                this.eglThread.removeExceptionCallback(this.eglExceptionCallback);
                this.eglThread.getHandler().postAtFrontOfQueue(new Runnable() { // from class: org.webrtc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        EglRenderer.this.lambda$release$0(countDownLatch);
                    }
                });
                this.eglThread.release();
                this.eglThread = null;
                ThreadUtils.awaitUninterruptibly(countDownLatch);
                synchronized (this.frameLock) {
                    try {
                        VideoFrame videoFrame = this.pendingFrame;
                        if (videoFrame != null) {
                            videoFrame.release();
                            this.pendingFrame = null;
                        }
                    } finally {
                    }
                }
                logD("Releasing done.");
            } finally {
            }
        }
    }

    public void releaseEglSurface(final Runnable runnable) {
        this.eglSurfaceCreationRunnable.setSurface(null);
        synchronized (this.threadLock) {
            try {
                EglThread eglThread = this.eglThread;
                if (eglThread != null) {
                    eglThread.getHandler().removeCallbacks(this.eglSurfaceCreationRunnable);
                    this.eglThread.getHandler().postAtFrontOfQueue(new Runnable() { // from class: org.webrtc.n
                        @Override // java.lang.Runnable
                        public final void run() {
                            EglRenderer.this.lambda$releaseEglSurface$4(runnable);
                        }
                    });
                    return;
                }
                runnable.run();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void removeFrameListener(final FrameListener frameListener) {
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        synchronized (this.threadLock) {
            try {
                if (this.eglThread == null) {
                    return;
                }
                if (Thread.currentThread() != this.eglThread.getHandler().getLooper().getThread()) {
                    postToRenderThread(new Runnable() { // from class: org.webrtc.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            EglRenderer.this.lambda$removeFrameListener$2(countDownLatch, frameListener);
                        }
                    });
                    ThreadUtils.awaitUninterruptibly(countDownLatch);
                    return;
                }
                throw new RuntimeException("removeFrameListener must not be called on the render thread.");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void removeRenderListener(final RenderListener renderListener) {
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        synchronized (this.threadLock) {
            try {
                if (this.eglThread == null) {
                    return;
                }
                if (Thread.currentThread() != this.eglThread.getHandler().getLooper().getThread()) {
                    postToRenderThread(new Runnable() { // from class: org.webrtc.u
                        @Override // java.lang.Runnable
                        public final void run() {
                            EglRenderer.this.lambda$removeRenderListener$3(countDownLatch, renderListener);
                        }
                    });
                    ThreadUtils.awaitUninterruptibly(countDownLatch);
                    return;
                }
                throw new RuntimeException("removeRenderListener must not be called on the render thread.");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void setErrorCallback(ErrorCallback errorCallback) {
        this.errorCallback = errorCallback;
    }

    public void setFpsReduction(float f10) {
        synchronized (this.fpsReductionLock) {
            try {
                long j10 = this.minRenderPeriodNs;
                if (f10 <= 0.0f) {
                    this.minRenderPeriodNs = LongCompanionObject.MAX_VALUE;
                } else {
                    this.minRenderPeriodNs = ((float) TimeUnit.SECONDS.toNanos(1L)) / f10;
                }
                if (this.minRenderPeriodNs != j10) {
                    this.nextFrameTimeNs = System.nanoTime();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void setLayoutAspectRatio(float f10) {
        synchronized (this.layoutLock) {
            this.layoutAspectRatio = f10;
        }
    }

    public void setMirror(boolean z10) {
        synchronized (this.layoutLock) {
            this.mirrorHorizontally = z10;
        }
    }

    public void setMirrorVertically(boolean z10) {
        synchronized (this.layoutLock) {
            this.mirrorVertically = z10;
        }
    }

    public EglRenderer(String str, VideoFrameDrawer videoFrameDrawer) {
        this.f44625id = Optional.empty();
        this.threadLock = new Object();
        this.eglExceptionCallback = new Runnable() { // from class: org.webrtc.EglRenderer.1
            @Override // java.lang.Runnable
            public void run() {
                synchronized (EglRenderer.this.threadLock) {
                    EglRenderer.this.eglThread = null;
                }
            }
        };
        this.frameListeners = new ArrayList<>();
        this.renderListeners = new ArrayList<>();
        this.fpsReductionLock = new Object();
        this.drawMatrix = new Matrix();
        this.frameLock = new Object();
        this.layoutLock = new Object();
        this.statisticsLock = new Object();
        this.bitmapTextureFramebuffer = new GlTextureFrameBuffer(6408);
        this.logStatisticsRunnable = new Runnable() { // from class: org.webrtc.EglRenderer.2
            @Override // java.lang.Runnable
            public void run() {
                EglRenderer.this.logStatistics();
                synchronized (EglRenderer.this.threadLock) {
                    try {
                        if (EglRenderer.this.eglThread != null) {
                            EglRenderer.this.eglThread.getHandler().removeCallbacks(EglRenderer.this.logStatisticsRunnable);
                            EglRenderer.this.eglThread.getHandler().postDelayed(EglRenderer.this.logStatisticsRunnable, TimeUnit.SECONDS.toMillis(EglRenderer.LOG_INTERVAL_SEC));
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        };
        this.eglSurfaceCreationRunnable = new EglSurfaceCreation();
        this.name = str;
        this.frameDrawer = videoFrameDrawer;
    }

    public void addFrameListener(FrameListener frameListener, float f10, RendererCommon.GlDrawer glDrawer) {
        addFrameListener(frameListener, f10, glDrawer, false);
    }

    public void clearImage(final float f10, final float f11, final float f12, final float f13) {
        synchronized (this.threadLock) {
            try {
                EglThread eglThread = this.eglThread;
                if (eglThread == null) {
                    return;
                }
                eglThread.getHandler().postAtFrontOfQueue(new Runnable() { // from class: org.webrtc.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        EglRenderer.this.lambda$clearImage$5(f10, f11, f12, f13);
                    }
                });
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void createEglSurface(SurfaceTexture surfaceTexture) {
        createEglSurfaceInternal(surfaceTexture);
    }

    public void addFrameListener(final FrameListener frameListener, final float f10, final RendererCommon.GlDrawer glDrawer, final boolean z10) {
        postToRenderThread(new Runnable() { // from class: org.webrtc.o
            @Override // java.lang.Runnable
            public final void run() {
                EglRenderer.this.lambda$addFrameListener$1(glDrawer, frameListener, f10, z10);
            }
        });
    }

    public void init(EglThread eglThread, RendererCommon.GlDrawer glDrawer, boolean z10, boolean z11) {
        if (z11) {
            this.f44625id = Optional.of(UUID.randomUUID());
        }
        init(eglThread, glDrawer, z10);
    }

    public void init(EglBase.Context context, int[] iArr, RendererCommon.GlDrawer glDrawer, boolean z10) {
        init(EglThread.create(null, context, iArr), glDrawer, z10);
    }

    public void init(EglBase.Context context, int[] iArr, RendererCommon.GlDrawer glDrawer) {
        init(context, iArr, glDrawer, false);
    }
}
