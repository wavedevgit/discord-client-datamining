package com.discord.media.engine.video.egl_renderer;

import android.graphics.Matrix;
import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.view.Surface;
import co.discord.media_engine.SharedEglBaseContext;
import com.discord.media.engine.types.Debug;
import com.discord.media.engine.types.VideoSink;
import com.facebook.react.devsupport.StackTraceHelper;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.text.DecimalFormat;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.webrtc.EglBase;
import org.webrtc.EglHelper;
import org.webrtc.GlRectDrawer;
import org.webrtc.GlUtil;
import org.webrtc.Logging;
import org.webrtc.RendererCommon;
import org.webrtc.ThreadUtils;
import org.webrtc.VideoFrame;
import org.webrtc.VideoFrameDrawer;
@Metadata(d1 = {"\u0000\u009a\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0003\n\u0002\b\u0004\b\u0010\u0018\u0000 P2\u00020\u0001:\u0002OPB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010,\u001a\u00020+H\u0002J\u0006\u0010/\u001a\u000200J\u000e\u00101\u001a\u0002002\u0006\u00102\u001a\u000203J\u000e\u00101\u001a\u0002002\u0006\u00104\u001a\u000205J\u0010\u00106\u001a\u0002002\u0006\u00102\u001a\u00020\tH\u0002J\u0006\u00107\u001a\u000200J\u0012\u00108\u001a\u0002002\b\b\u0002\u00109\u001a\u00020\u0010H\u0002J\u000e\u0010:\u001a\u0002002\u0006\u0010 \u001a\u00020!J\u000e\u0010;\u001a\u0002002\u0006\u0010<\u001a\u00020!J\u0006\u0010=\u001a\u000200J\u0006\u0010>\u001a\u000200J\u0010\u0010?\u001a\u0002002\b\u0010\f\u001a\u0004\u0018\u00010\rJ\u0018\u0010@\u001a\u0002002\u0006\u0010A\u001a\u00020\u001c2\u0006\u0010B\u001a\u00020\u001eH\u0016J\u0014\u0010C\u001a\u0002002\f\u0010D\u001a\b\u0012\u0004\u0012\u0002000EJ\u0010\u0010F\u001a\u0002002\u0006\u0010G\u001a\u00020+H\u0002J\b\u0010H\u001a\u000200H\u0002J\b\u0010I\u001a\u000200H\u0002J\u0018\u0010J\u001a\u0002002\u0006\u0010K\u001a\u00020\u00032\u0006\u0010L\u001a\u00020MH\u0002J\u0010\u0010N\u001a\u0002002\u0006\u0010K\u001a\u00020\u0003H\u0002R\u0014\u0010\u0002\u001a\u00020\u0003X\u0084\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0015X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0019X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u001cX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001f\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020!X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\"\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010#\u001a\u00020$X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010%\u001a\u00020$X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010&\u001a\u00020$X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010'\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010(\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010)\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010*\u001a\u00020+X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010-\u001a\u00060.R\u00020\u0000X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006Q"}, d2 = {"Lcom/discord/media/engine/video/egl_renderer/EglRenderer;", "Lcom/discord/media/engine/types/VideoSink;", StackTraceHelper.NAME_KEY, "", "<init>", "(Ljava/lang/String;)V", "getName", "()Ljava/lang/String;", "handlerLock", "", "renderThreadHandler", "Landroid/os/Handler;", "errorCallback", "Lcom/discord/media/engine/video/egl_renderer/ErrorCallback;", "fpsReductionLock", "nextFrameTimeNs", "", "minRenderPeriodNs", "eglBase", "Lorg/webrtc/EglBase;", "frameDrawer", "Lorg/webrtc/VideoFrameDrawer;", "drawer", "Lorg/webrtc/RendererCommon$GlDrawer;", "drawMatrix", "Landroid/graphics/Matrix;", "frameLock", "pendingFrame", "Lorg/webrtc/VideoFrame;", "pendingFrameMirror", "", "layoutLock", "layoutAspectRatio", "", "statisticsLock", "framesReceived", "", "framesDropped", "framesRendered", "statisticsStartTimeNs", "renderTimeNs", "renderSwapBufferTimeNs", "logStatisticsRunnable", "Ljava/lang/Runnable;", "logStatisticsTask", "eglSurfaceCreationRunnable", "Lcom/discord/media/engine/video/egl_renderer/EglRenderer$EglSurfaceCreation;", "init", "", "createEglSurface", "surface", "Landroid/view/Surface;", "surfaceTexture", "Landroid/graphics/SurfaceTexture;", "createEglSurfaceInternal", "release", "resetStatistics", "currentTimeNs", "setLayoutAspectRatio", "setFpsReduction", "fps", "disableFpsReduction", "pauseVideo", "setErrorCallback", "onFrame", "frame", "mirror", "releaseEglSurface", "completionCallback", "Lkotlin/Function0;", "postToRenderThread", "runnable", "renderFrameOnRenderThread", "logStatistics", "logE", InquiryField.StringField.TYPE, "e", "", "logD", "EglSurfaceCreation", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEglRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EglRenderer.kt\ncom/discord/media/engine/video/egl_renderer/EglRenderer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 Debug.kt\ncom/discord/media/engine/types/Debug\n*L\n1#1,524:1\n1#2:525\n44#3,7:526\n44#3,7:533\n*S KotlinDebug\n*F\n+ 1 EglRenderer.kt\ncom/discord/media/engine/video/egl_renderer/EglRenderer\n*L\n168#1:526,7\n179#1:533,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class EglRenderer implements VideoSink {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long LOG_INTERVAL_MS = 4000;
    @NotNull
    private static final String TAG = "EglRenderer";
    private static final boolean USE_PRESENTATION_TIMESTAMP = false;
    @NotNull
    private final Matrix drawMatrix;
    @NotNull
    private final RendererCommon.GlDrawer drawer;
    private EglBase eglBase;
    @NotNull
    private final EglSurfaceCreation eglSurfaceCreationRunnable;
    private volatile ErrorCallback errorCallback;
    @NotNull
    private final Object fpsReductionLock;
    @NotNull
    private final VideoFrameDrawer frameDrawer;
    @NotNull
    private final Object frameLock;
    private int framesDropped;
    private int framesReceived;
    private int framesRendered;
    @NotNull
    private final Object handlerLock;
    private float layoutAspectRatio;
    @NotNull
    private final Object layoutLock;
    @NotNull
    private final Runnable logStatisticsRunnable;
    private long minRenderPeriodNs;
    @NotNull
    private final String name;
    private long nextFrameTimeNs;
    private VideoFrame pendingFrame;
    private boolean pendingFrameMirror;
    private long renderSwapBufferTimeNs;
    private Handler renderThreadHandler;
    private long renderTimeNs;
    @NotNull
    private final Object statisticsLock;
    private long statisticsStartTimeNs;

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\n\u001a\u00020\u00052\u0006\u0010\u000b\u001a\u00020\u00072\u0006\u0010\f\u001a\u00020\rH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/media/engine/video/egl_renderer/EglRenderer$Companion;", "", "<init>", "()V", "TAG", "", "LOG_INTERVAL_MS", "", "USE_PRESENTATION_TIMESTAMP", "", "averageTimeAsString", "sumTimeNs", "count", "", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String averageTimeAsString(long j10, int i10) {
            if (i10 <= 0) {
                return "NA";
            }
            long micros = TimeUnit.NANOSECONDS.toMicros(j10 / i10);
            return micros + " us";
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\b\u0082\u0004\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0006\u001a\u00020\u00072\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005J\b\u0010\b\u001a\u00020\u0007H\u0016R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/media/engine/video/egl_renderer/EglRenderer$EglSurfaceCreation;", "Ljava/lang/Runnable;", "<init>", "(Lcom/discord/media/engine/video/egl_renderer/EglRenderer;)V", "surface", "", "setSurface", "", "run", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class EglSurfaceCreation implements Runnable {
        private Object surface;

        public EglSurfaceCreation() {
        }

        @Override // java.lang.Runnable
        public synchronized void run() {
            try {
                Object obj = this.surface;
                if (obj != null) {
                    EglBase eglBase = EglRenderer.this.eglBase;
                    if (eglBase == null) {
                        return;
                    }
                    if (eglBase.hasSurface()) {
                        return;
                    }
                    if (obj instanceof Surface) {
                        eglBase.createSurface((Surface) obj);
                    } else if (obj instanceof SurfaceTexture) {
                        eglBase.createSurface((SurfaceTexture) obj);
                    } else {
                        throw new IllegalStateException(("Invalid surface: " + obj).toString());
                    }
                    eglBase.makeCurrent();
                    GLES20.glPixelStorei(3317, 1);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }

        public final synchronized void setSurface(Object obj) {
            this.surface = obj;
        }
    }

    public EglRenderer(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.name = name;
        this.handlerLock = new Object();
        this.fpsReductionLock = new Object();
        this.frameDrawer = new VideoFrameDrawer();
        this.drawer = new GlRectDrawer();
        this.drawMatrix = new Matrix();
        this.frameLock = new Object();
        this.layoutLock = new Object();
        this.statisticsLock = new Object();
        this.logStatisticsRunnable = new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.c
            @Override // java.lang.Runnable
            public final void run() {
                EglRenderer.logStatisticsRunnable$lambda$2(EglRenderer.this);
            }
        };
        this.eglSurfaceCreationRunnable = new EglSurfaceCreation();
    }

    private final void createEglSurfaceInternal(Object obj) {
        this.eglSurfaceCreationRunnable.setSurface(obj);
        postToRenderThread(this.eglSurfaceCreationRunnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit init$lambda$10$lambda$6(EglRenderer eglRenderer, Exception ex) {
        Intrinsics.checkNotNullParameter(ex, "ex");
        Logging.e(TAG, "Exception on EglRenderer thread", ex);
        synchronized (eglRenderer.handlerLock) {
            eglRenderer.renderThreadHandler = null;
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void init$lambda$10$lambda$9(EglRenderer eglRenderer, long j10) {
        eglRenderer.logD("Creating EglBase");
        eglRenderer.eglBase = EglHelper.create(SharedEglBaseContext.getEglContext(), EglBase.CONFIG_PLAIN);
        Debug debug = Debug.INSTANCE;
    }

    private final void logD(String str) {
        String str2 = this.name;
        Logging.d(str2, "name: " + str);
    }

    private final void logE(String str, Throwable th2) {
        String str2 = this.name;
        Logging.e(str2, "name: " + str, th2);
    }

    private final void logStatistics() {
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
                    Companion companion = Companion;
                    String averageTimeAsString = companion.averageTimeAsString(this.renderTimeNs, this.framesRendered);
                    String averageTimeAsString2 = companion.averageTimeAsString(this.renderSwapBufferTimeNs, this.framesRendered);
                    logD("[logStatistics] Duration: " + millis + " ms. Frames received: " + i10 + ". Dropped: " + i11 + ". Rendered: " + i12 + ". Render fps: " + format + ". Average render time: " + averageTimeAsString + ". Average swapBuffer time: " + averageTimeAsString2 + ".");
                    resetStatistics(nanoTime);
                    Unit unit = Unit.f32464a;
                }
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void logStatisticsRunnable$lambda$2(EglRenderer eglRenderer) {
        eglRenderer.logStatistics();
        synchronized (eglRenderer.handlerLock) {
            try {
                Handler handler = eglRenderer.renderThreadHandler;
                if (handler != null) {
                    handler.removeCallbacks(eglRenderer.logStatisticsTask());
                    handler.postDelayed(eglRenderer.logStatisticsTask(), LOG_INTERVAL_MS);
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final Runnable logStatisticsTask() {
        return this.logStatisticsRunnable;
    }

    private final void postToRenderThread(Runnable runnable) {
        synchronized (this.handlerLock) {
            Handler handler = this.renderThreadHandler;
            if (handler != null) {
                handler.post(runnable);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void release$lambda$15$lambda$13(EglRenderer eglRenderer, CountDownLatch countDownLatch) {
        Object lock = EglBase.lock;
        Intrinsics.checkNotNullExpressionValue(lock, "lock");
        synchronized (lock) {
            GLES20.glUseProgram(0);
            Unit unit = Unit.f32464a;
        }
        eglRenderer.drawer.release();
        eglRenderer.frameDrawer.release();
        EglBase eglBase = eglRenderer.eglBase;
        if (eglBase != null) {
            eglRenderer.logD("eglBase detach and release.");
            eglBase.detachCurrent();
            eglBase.release();
        }
        eglRenderer.eglBase = null;
        countDownLatch.countDown();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void release$lambda$15$lambda$14(EglRenderer eglRenderer, Looper looper) {
        eglRenderer.logD("Quitting render thread.");
        looper.quit();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void releaseEglSurface$lambda$31$lambda$30$lambda$29(EglRenderer eglRenderer, Function0 function0) {
        EglBase eglBase = eglRenderer.eglBase;
        if (eglBase != null) {
            eglBase.detachCurrent();
            eglBase.releaseSurface();
        }
        function0.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void renderFrameOnRenderThread() {
        boolean z10;
        float f10;
        float f11;
        float f12;
        float f13;
        synchronized (this.frameLock) {
            VideoFrame videoFrame = this.pendingFrame;
            if (videoFrame != null) {
                this.pendingFrame = null;
                EglBase eglBase = this.eglBase;
                if (eglBase != null && eglBase.hasSurface()) {
                    long nanoTime = System.nanoTime();
                    synchronized (this.fpsReductionLock) {
                        try {
                            long j10 = this.minRenderPeriodNs;
                            if (j10 > 0) {
                                z10 = false;
                                if (j10 != LongCompanionObject.MAX_VALUE) {
                                    long j11 = this.nextFrameTimeNs;
                                    if (nanoTime < j11) {
                                        logD("Skipping frame rendering - fps reduction is active.");
                                    } else {
                                        long j12 = j11 + j10;
                                        this.nextFrameTimeNs = j12;
                                        this.nextFrameTimeNs = kotlin.ranges.d.e(j12, nanoTime);
                                    }
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    float rotatedAspectRatio = WebRtcExtensionsKt.getRotatedAspectRatio(videoFrame);
                    synchronized (this.layoutLock) {
                        f10 = this.layoutAspectRatio;
                        if (f10 == 0.0f) {
                            f10 = rotatedAspectRatio;
                        }
                    }
                    if (rotatedAspectRatio > f10) {
                        f12 = f10 / rotatedAspectRatio;
                        f11 = 1.0f;
                    } else {
                        f11 = rotatedAspectRatio / f10;
                        f12 = 1.0f;
                    }
                    this.drawMatrix.reset();
                    this.drawMatrix.preTranslate(0.5f, 0.5f);
                    Matrix matrix = this.drawMatrix;
                    if (this.pendingFrameMirror) {
                        f13 = -1.0f;
                    } else {
                        f13 = 1.0f;
                    }
                    matrix.preScale(f13, 1.0f);
                    this.drawMatrix.preScale(f12, f11);
                    this.drawMatrix.preTranslate(-0.5f, -0.5f);
                    try {
                        if (z10) {
                            try {
                                GLES20.glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                                GLES20.glClear(16384);
                                this.frameDrawer.drawFrame(videoFrame, this.drawer, this.drawMatrix, 0, 0, eglBase.surfaceWidth(), eglBase.surfaceHeight());
                                long nanoTime2 = System.nanoTime();
                                eglBase.swapBuffers();
                                long nanoTime3 = System.nanoTime();
                                synchronized (this.statisticsLock) {
                                    this.framesRendered++;
                                    this.renderTimeNs += nanoTime3 - nanoTime;
                                    this.renderSwapBufferTimeNs += nanoTime3 - nanoTime2;
                                    Unit unit = Unit.f32464a;
                                }
                            } catch (GlUtil.GlOutOfMemoryException e10) {
                                logE("Error while drawing frame", e10);
                                ErrorCallback errorCallback = this.errorCallback;
                                if (errorCallback != null) {
                                    errorCallback.onGlOutOfMemory();
                                }
                                this.drawer.release();
                                this.frameDrawer.release();
                                videoFrame.release();
                                return;
                            }
                        }
                        return;
                    } finally {
                        videoFrame.release();
                    }
                }
                logD("Dropping frame - No surface");
                videoFrame.release();
            }
        }
    }

    private final void resetStatistics(long j10) {
        synchronized (this.statisticsLock) {
            this.statisticsStartTimeNs = j10;
            this.framesReceived = 0;
            this.framesDropped = 0;
            this.framesRendered = 0;
            this.renderTimeNs = 0L;
            this.renderSwapBufferTimeNs = 0L;
            Unit unit = Unit.f32464a;
        }
    }

    static /* synthetic */ void resetStatistics$default(EglRenderer eglRenderer, long j10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                j10 = System.nanoTime();
            }
            eglRenderer.resetStatistics(j10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: resetStatistics");
    }

    public final void createEglSurface(@NotNull Surface surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        createEglSurfaceInternal(surface);
    }

    public final void disableFpsReduction() {
        setFpsReduction(Float.POSITIVE_INFINITY);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @NotNull
    public final String getName() {
        return this.name;
    }

    public final void init() {
        final long nanoTime = System.nanoTime();
        synchronized (this.handlerLock) {
            if (this.renderThreadHandler == null) {
                logD("Initializing EglRenderer");
                String str = this.name;
                HandlerThread handlerThread = new HandlerThread(str + TAG);
                handlerThread.start();
                Looper looper = handlerThread.getLooper();
                Intrinsics.checkNotNullExpressionValue(looper, "getLooper(...)");
                HandlerWithExceptionCallback handlerWithExceptionCallback = new HandlerWithExceptionCallback(looper, new Function1() { // from class: com.discord.media.engine.video.egl_renderer.f
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit init$lambda$10$lambda$6;
                        init$lambda$10$lambda$6 = EglRenderer.init$lambda$10$lambda$6(EglRenderer.this, (Exception) obj);
                        return init$lambda$10$lambda$6;
                    }
                });
                this.renderThreadHandler = handlerWithExceptionCallback;
                Debug debug = Debug.INSTANCE;
                ThreadUtils.invokeAtFrontUninterruptibly(handlerWithExceptionCallback, new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.g
                    @Override // java.lang.Runnable
                    public final void run() {
                        EglRenderer.init$lambda$10$lambda$9(EglRenderer.this, nanoTime);
                    }
                });
                handlerWithExceptionCallback.post(this.eglSurfaceCreationRunnable);
                resetStatistics$default(this, 0L, 1, null);
                handlerWithExceptionCallback.postDelayed(this.logStatisticsRunnable, LOG_INTERVAL_MS);
            } else {
                String str2 = this.name;
                throw new IllegalStateException((str2 + ": already initialized").toString());
            }
        }
    }

    @Override // com.discord.media.engine.types.VideoSink
    public void onFrame(@NotNull VideoFrame frame, boolean z10) {
        boolean z11;
        Intrinsics.checkNotNullParameter(frame, "frame");
        synchronized (this.statisticsLock) {
            this.framesReceived++;
        }
        synchronized (this.handlerLock) {
            Handler handler = this.renderThreadHandler;
            if (handler == null) {
                logD("Dropping frame - Not initialized or already released.");
                return;
            }
            synchronized (this.frameLock) {
                VideoFrame videoFrame = this.pendingFrame;
                if (videoFrame != null) {
                    videoFrame.release();
                    z11 = true;
                } else {
                    z11 = false;
                }
                frame.retain();
                this.pendingFrame = frame;
                this.pendingFrameMirror = z10;
                handler.post(new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.b
                    @Override // java.lang.Runnable
                    public final void run() {
                        EglRenderer.this.renderFrameOnRenderThread();
                    }
                });
            }
            if (z11) {
                synchronized (this.statisticsLock) {
                    this.framesDropped++;
                }
            }
        }
    }

    public final void pauseVideo() {
        setFpsReduction(0.0f);
    }

    public final void release() {
        logD("Releasing.");
        long nanoTime = System.nanoTime();
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        synchronized (this.handlerLock) {
            Handler handler = this.renderThreadHandler;
            if (handler == null) {
                logD("Already released");
                return;
            }
            handler.removeCallbacks(this.logStatisticsRunnable);
            handler.postAtFrontOfQueue(new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.d
                @Override // java.lang.Runnable
                public final void run() {
                    EglRenderer.release$lambda$15$lambda$13(EglRenderer.this, countDownLatch);
                }
            });
            final Looper looper = handler.getLooper();
            Intrinsics.checkNotNullExpressionValue(looper, "getLooper(...)");
            handler.post(new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.e
                @Override // java.lang.Runnable
                public final void run() {
                    EglRenderer.release$lambda$15$lambda$14(EglRenderer.this, looper);
                }
            });
            this.renderThreadHandler = null;
            Unit unit = Unit.f32464a;
            ThreadUtils.awaitUninterruptibly(countDownLatch);
            synchronized (this.frameLock) {
                try {
                    VideoFrame videoFrame = this.pendingFrame;
                    if (videoFrame != null) {
                        videoFrame.release();
                    }
                    this.pendingFrame = null;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            long millis = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - nanoTime);
            logD("release done: " + millis + " ms");
        }
    }

    public final void releaseEglSurface(@NotNull final Function0<Unit> completionCallback) {
        Intrinsics.checkNotNullParameter(completionCallback, "completionCallback");
        this.eglSurfaceCreationRunnable.setSurface(null);
        synchronized (this.handlerLock) {
            Handler handler = this.renderThreadHandler;
            if (handler != null) {
                handler.removeCallbacks(this.eglSurfaceCreationRunnable);
                handler.postAtFrontOfQueue(new Runnable() { // from class: com.discord.media.engine.video.egl_renderer.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        EglRenderer.releaseEglSurface$lambda$31$lambda$30$lambda$29(EglRenderer.this, completionCallback);
                    }
                });
                return;
            }
            completionCallback.invoke();
        }
    }

    public final void setErrorCallback(ErrorCallback errorCallback) {
        this.errorCallback = errorCallback;
    }

    public final void setFpsReduction(float f10) {
        long nanos;
        logD("setFpsReduction: " + f10);
        synchronized (this.fpsReductionLock) {
            try {
                long j10 = this.minRenderPeriodNs;
                if (f10 <= 0.0f) {
                    nanos = LongCompanionObject.MAX_VALUE;
                } else {
                    nanos = ((float) TimeUnit.SECONDS.toNanos(1L)) / f10;
                }
                this.minRenderPeriodNs = nanos;
                if (nanos != j10) {
                    this.nextFrameTimeNs = System.nanoTime();
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void setLayoutAspectRatio(float f10) {
        logD("setLayoutAspectRatio: " + f10);
        synchronized (this.layoutLock) {
            try {
                if (Math.abs(f10) <= Float.MAX_VALUE) {
                    this.layoutAspectRatio = f10;
                } else {
                    this.layoutAspectRatio = 0.0f;
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void createEglSurface(@NotNull SurfaceTexture surfaceTexture) {
        Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
        createEglSurfaceInternal(surfaceTexture);
    }
}
