package com.discord.media.engine.video.texture_view;

import android.graphics.SurfaceTexture;
import android.view.TextureView;
import com.discord.logging.Log;
import com.discord.media.engine.types.Debug;
import com.discord.media.engine.video.egl_renderer.EglRenderer;
import com.discord.media.engine.video.egl_renderer.ErrorCallback;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Arrays;
import java.util.Locale;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.StringCompanionObject;
import org.jetbrains.annotations.NotNull;
import org.webrtc.RendererCommon;
import org.webrtc.ThreadUtils;
import org.webrtc.VideoFrame;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\f\b\u0000\u0018\u0000 '2\u00020\u00012\u00020\u00022\u00020\u0003:\u0001'B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\u0014\u001a\u00020\u00152\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u0018\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\rH\u0016J \u0010\u001a\u001a\u00020\u00152\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u000fH\u0017J\u0010\u0010\u001f\u001a\u00020\r2\u0006\u0010\u001b\u001a\u00020\u001cH\u0017J \u0010 \u001a\u00020\u00152\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010!\u001a\u00020\u000f2\u0006\u0010\"\u001a\u00020\u000fH\u0016J\u0010\u0010#\u001a\u00020\u00152\u0006\u0010\u001b\u001a\u00020\u001cH\u0016J\b\u0010$\u001a\u00020\u0015H\u0016J\u0010\u0010%\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u0018H\u0002J\b\u0010&\u001a\u00020\u0015H\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/discord/media/engine/video/texture_view/TextureViewEglRenderer;", "Lcom/discord/media/engine/video/egl_renderer/EglRenderer;", "Landroid/view/TextureView$SurfaceTextureListener;", "Lcom/discord/media/engine/video/egl_renderer/ErrorCallback;", StackTraceHelper.NAME_KEY, "", "<init>", "(Ljava/lang/String;)V", "layoutLock", "", "rendererEvents", "Lorg/webrtc/RendererCommon$RendererEvents;", "isFirstFrameRendered", "", "rotatedFrameWidth", "", "rotatedFrameHeight", "frameRotation", "webRtcFrameCount", "surfaceTextureFrameCount", "initialize", "", "onFrame", "frame", "Lorg/webrtc/VideoFrame;", "mirror", "onSurfaceTextureAvailable", "surface", "Landroid/graphics/SurfaceTexture;", "width", "height", "onSurfaceTextureDestroyed", "onSurfaceTextureSizeChanged", "w", "h", "onSurfaceTextureUpdated", "onGlOutOfMemory", "updateFrameDimensionsAndReportEvents", "debugOnFrame", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTextureViewEglRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TextureViewEglRenderer.kt\ncom/discord/media/engine/video/texture_view/TextureViewEglRenderer\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 Debug.kt\ncom/discord/media/engine/types/Debug\n*L\n1#1,155:1\n17#2,5:156\n17#2,5:161\n17#2,5:166\n38#3,4:171\n*S KotlinDebug\n*F\n+ 1 TextureViewEglRenderer.kt\ncom/discord/media/engine/video/texture_view/TextureViewEglRenderer\n*L\n44#1:156,5\n70#1:161,5\n79#1:166,5\n132#1:171,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TextureViewEglRenderer extends EglRenderer implements TextureView.SurfaceTextureListener, ErrorCallback {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final AtomicInteger count = new AtomicInteger();
    private int frameRotation;
    private boolean isFirstFrameRendered;
    @NotNull
    private final Object layoutLock;
    private RendererCommon.RendererEvents rendererEvents;
    private int rotatedFrameHeight;
    private int rotatedFrameWidth;
    private int surfaceTextureFrameCount;
    private int webRtcFrameCount;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0010\u0007\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0006\u001a\u00020\u0007*\u00020\bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/media/engine/video/texture_view/TextureViewEglRenderer$Companion;", "", "<init>", "()V", "count", "Ljava/util/concurrent/atomic/AtomicInteger;", "toNiceString", "", "", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String toNiceString(float f10) {
            StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
            String format = String.format(Locale.getDefault(), "%.3f", Arrays.copyOf(new Object[]{Float.valueOf(f10)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            return format;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TextureViewEglRenderer(@NotNull String name) {
        super(name);
        Intrinsics.checkNotNullParameter(name, "name");
        this.layoutLock = new Object();
    }

    private final void debugOnFrame() {
        int i10 = this.webRtcFrameCount + 1;
        this.webRtcFrameCount = i10;
        if (i10 % 100 == 0) {
            Debug debug = Debug.INSTANCE;
            getName();
        }
    }

    private final void updateFrameDimensionsAndReportEvents(VideoFrame videoFrame) {
        synchronized (this.layoutLock) {
            try {
                if (!this.isFirstFrameRendered) {
                    this.isFirstFrameRendered = true;
                    RendererCommon.RendererEvents rendererEvents = this.rendererEvents;
                    if (rendererEvents != null) {
                        rendererEvents.onFirstFrameRendered();
                    }
                }
                if (this.rotatedFrameWidth != videoFrame.getRotatedWidth() || this.rotatedFrameHeight != videoFrame.getRotatedHeight() || this.frameRotation != videoFrame.getRotation()) {
                    RendererCommon.RendererEvents rendererEvents2 = this.rendererEvents;
                    if (rendererEvents2 != null) {
                        rendererEvents2.onFrameResolutionChanged(videoFrame.getBuffer().getWidth(), videoFrame.getBuffer().getHeight(), videoFrame.getRotation());
                    }
                    this.rotatedFrameWidth = videoFrame.getRotatedWidth();
                    this.rotatedFrameHeight = videoFrame.getRotatedHeight();
                    this.frameRotation = videoFrame.getRotation();
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void initialize(@NotNull RendererCommon.RendererEvents rendererEvents) {
        Intrinsics.checkNotNullParameter(rendererEvents, "rendererEvents");
        if (ThreadUtilsKt.isOnMainThread()) {
            this.rendererEvents = rendererEvents;
            synchronized (this.layoutLock) {
                this.isFirstFrameRendered = false;
                this.rotatedFrameWidth = 0;
                this.rotatedFrameHeight = 0;
                this.frameRotation = 0;
                Unit unit = Unit.f32056a;
            }
            init();
            setErrorCallback(this);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @Override // com.discord.media.engine.video.egl_renderer.EglRenderer, com.discord.media.engine.types.VideoSink
    public void onFrame(@NotNull VideoFrame frame, boolean z10) {
        Intrinsics.checkNotNullParameter(frame, "frame");
        updateFrameDimensionsAndReportEvents(frame);
        super.onFrame(frame, z10);
    }

    @Override // com.discord.media.engine.video.egl_renderer.ErrorCallback
    public void onGlOutOfMemory() {
        Log.e$default(Log.INSTANCE, getName(), "onGlOutOfMemory on render thread", (Throwable) null, 4, (Object) null);
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureAvailable(@NotNull SurfaceTexture surface, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        if (ThreadUtilsKt.isOnMainThread()) {
            Log log = Log.INSTANCE;
            String name = getName();
            int incrementAndGet = count.incrementAndGet();
            Log.i$default(log, name, "createEglSurface (" + incrementAndGet + " total)", (Throwable) null, 4, (Object) null);
            createEglSurface(surface);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public boolean onSurfaceTextureDestroyed(@NotNull SurfaceTexture surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        if (ThreadUtilsKt.isOnMainThread()) {
            long currentTimeMillis = System.currentTimeMillis();
            final CountDownLatch countDownLatch = new CountDownLatch(1);
            releaseEglSurface(new Function0<Unit>() { // from class: com.discord.media.engine.video.texture_view.TextureViewEglRenderer$onSurfaceTextureDestroyed$1$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m940invoke();
                    return Unit.f32056a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m940invoke() {
                    countDownLatch.countDown();
                }
            });
            ThreadUtils.awaitUninterruptibly(countDownLatch, LongCompanionObject.MAX_VALUE);
            long currentTimeMillis2 = System.currentTimeMillis() - currentTimeMillis;
            Log log = Log.INSTANCE;
            String name = getName();
            int decrementAndGet = count.decrementAndGet();
            Log.i$default(log, name, "releaseEglSurface (" + currentTimeMillis2 + " ms) (" + decrementAndGet + " total)", (Throwable) null, 4, (Object) null);
            return true;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureSizeChanged(@NotNull SurfaceTexture surface, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surface, "surface");
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureUpdated(@NotNull SurfaceTexture surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
    }
}
