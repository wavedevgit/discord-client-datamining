package com.discord.media.engine.video.texture_view;

import android.content.Context;
import android.graphics.Point;
import android.graphics.SurfaceTexture;
import android.util.AttributeSet;
import android.view.TextureView;
import com.discord.logging.Log;
import com.discord.media.engine.MediaEngine;
import com.discord.media.engine.MediaEngineKt;
import com.discord.media.engine.types.Debug;
import com.discord.media.engine.types.VideoSink;
import com.discord.media.engine.video.AttachedVideoSinks;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.webrtc.RendererCommon;
import org.webrtc.VideoFrame;
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\n\u0018\u0000 62\u00020\u00012\u00020\u00022\u00020\u0003:\u00016B\u001d\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0018\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00142\u0006\u0010\u001c\u001a\u00020\u0014H\u0014J0\u0010\u001d\u001a\u00020\u001a2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00142\u0006\u0010!\u001a\u00020\u00142\u0006\u0010\"\u001a\u00020\u00142\u0006\u0010#\u001a\u00020\u0014H\u0014J\b\u0010$\u001a\u00020\u001aH\u0002J\b\u0010%\u001a\u00020\u001aH\u0016J \u0010&\u001a\u00020\u001a2\u0006\u0010'\u001a\u00020\u00142\u0006\u0010(\u001a\u00020\u00142\u0006\u0010)\u001a\u00020\u0014H\u0016J\b\u0010*\u001a\u00020\u001aH\u0016J\u0018\u0010+\u001a\u00020\u001a2\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020\u001fH\u0016J\u0018\u0010/\u001a\u00020\u001a2\u0006\u00100\u001a\u00020\u000b2\u0006\u00101\u001a\u00020\u0003H\u0007J\b\u00102\u001a\u00020\u001aH\u0007J\u001c\u00103\u001a\u00020\u001a2\b\u00100\u001a\u0004\u0018\u00010\u000b2\b\u00101\u001a\u0004\u0018\u00010\u0003H\u0002J\u0010\u00104\u001a\u00020\u001a2\u0006\u00101\u001a\u00020\u0003H\u0002J\b\u00105\u001a\u00020\u000bH\u0016R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0003X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000¨\u00067"}, d2 = {"Lcom/discord/media/engine/video/texture_view/VideoStreamTextureView;", "Landroid/view/TextureView;", "Lcom/discord/media/engine/types/VideoSink;", "Lorg/webrtc/RendererCommon$RendererEvents;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", StackTraceHelper.NAME_KEY, "", "videoLayoutMeasure", "Lorg/webrtc/RendererCommon$VideoLayoutMeasure;", "mediaEngine", "Lcom/discord/media/engine/MediaEngine;", "eglRenderer", "Lcom/discord/media/engine/video/texture_view/TextureViewEglRenderer;", "rendererEvents", "rotatedFrameWidth", "", "rotatedFrameHeight", "currentStreamId", "startRenderingTimestampNs", "", "onMeasure", "", "widthSpec", "heightSpec", "onLayout", "changed", "", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "updateSurfaceSize", "onFirstFrameRendered", "onFrameResolutionChanged", "videoWidth", "videoHeight", ViewProps.ROTATION, "requestLayout", "onFrame", "frame", "Lorg/webrtc/VideoFrame;", "mirror", "startRenderingStream", "streamId", "events", "reset", "attachToStream", "init", "toString", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nVideoStreamTextureView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 VideoStreamTextureView.kt\ncom/discord/media/engine/video/texture_view/VideoStreamTextureView\n+ 2 Debug.kt\ncom/discord/media/engine/types/Debug\n+ 3 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n*L\n1#1,240:1\n38#2,4:241\n38#2,4:245\n38#2,4:254\n44#2,7:258\n38#2,4:265\n58#2,4:274\n38#2,4:278\n38#2,4:282\n44#2,7:291\n17#3,5:249\n17#3,5:269\n17#3,5:286\n*S KotlinDebug\n*F\n+ 1 VideoStreamTextureView.kt\ncom/discord/media/engine/video/texture_view/VideoStreamTextureView\n*L\n98#1:241,4\n110#1:245,4\n121#1:254,4\n132#1:258,7\n146#1:265,4\n160#1:274,4\n178#1:278,4\n191#1:282,4\n229#1:291,7\n119#1:249,5\n151#1:269,5\n199#1:286,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoStreamTextureView extends TextureView implements VideoSink, RendererCommon.RendererEvents {
    @NotNull
    private static final String TAG = "VideoStreamTextureView";
    private String currentStreamId;
    @NotNull
    private final TextureViewEglRenderer eglRenderer;
    @NotNull
    private final MediaEngine mediaEngine;
    @NotNull
    private final String name;
    private RendererCommon.RendererEvents rendererEvents;
    private int rotatedFrameHeight;
    private int rotatedFrameWidth;
    private long startRenderingTimestampNs;
    @NotNull
    private final RendererCommon.VideoLayoutMeasure videoLayoutMeasure;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final AtomicInteger count = new AtomicInteger();
    @NotNull
    private static final AtomicInteger liveCount = new AtomicInteger();

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/media/engine/video/texture_view/VideoStreamTextureView$Companion;", "", "<init>", "()V", "TAG", "", "count", "Ljava/util/concurrent/atomic/AtomicInteger;", "liveCount", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public VideoStreamTextureView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void attachToStream(String str, RendererCommon.RendererEvents rendererEvents) {
        if (ThreadUtilsKt.isOnMainThread()) {
            String str2 = this.currentStreamId;
            if (str2 != null) {
                Log log = Log.INSTANCE;
                String str3 = this.name;
                int decrementAndGet = liveCount.decrementAndGet();
                Log.i$default(log, str3, "Releasing, liveCount now " + decrementAndGet, (Throwable) null, 4, (Object) null);
                this.eglRenderer.release();
                if (AttachedVideoSinks.INSTANCE.removeSink(this.mediaEngine, this, str2)) {
                    this.mediaEngine.activeSinksChanged$media_engine_release(str2, false);
                }
                this.currentStreamId = null;
            }
            if (str != null) {
                this.currentStreamId = str;
                try {
                    if (rendererEvents != null) {
                        init(rendererEvents);
                        if (AttachedVideoSinks.INSTANCE.addSink(this.mediaEngine, this, str)) {
                            this.mediaEngine.activeSinksChanged$media_engine_release(str, true);
                            return;
                        }
                        return;
                    }
                    throw new IllegalArgumentException("Required value was null.");
                } catch (RuntimeException e10) {
                    Log.INSTANCE.e(this.name, "Couldn't init EGLRenderer for stream", e10);
                    return;
                }
            }
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void init(RendererCommon.RendererEvents rendererEvents) {
        System.nanoTime();
        this.rendererEvents = rendererEvents;
        this.rotatedFrameWidth = 0;
        this.rotatedFrameHeight = 0;
        this.eglRenderer.initialize(rendererEvents);
        Log log = Log.INSTANCE;
        int incrementAndGet = liveCount.incrementAndGet();
        Log.i$default(log, TAG, "initialized, liveCount now " + incrementAndGet, (Throwable) null, 4, (Object) null);
        Debug debug = Debug.INSTANCE;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void updateSurfaceSize() {
        if (ThreadUtilsKt.isOnMainThread()) {
            if (isAvailable()) {
                Debug debug = Debug.INSTANCE;
                String unused = this.name;
                SurfaceTexture surfaceTexture = getSurfaceTexture();
                Intrinsics.checkNotNull(surfaceTexture);
                surfaceTexture.setDefaultBufferSize(getMeasuredWidth(), getMeasuredHeight());
                return;
            }
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @Override // org.webrtc.RendererCommon.RendererEvents
    public void onFirstFrameRendered() {
        Debug debug = Debug.INSTANCE;
        RendererCommon.RendererEvents rendererEvents = this.rendererEvents;
        if (rendererEvents == null) {
            Intrinsics.throwUninitializedPropertyAccessException("rendererEvents");
            rendererEvents = null;
        }
        rendererEvents.onFirstFrameRendered();
    }

    @Override // com.discord.media.engine.types.VideoSink
    public void onFrame(@NotNull VideoFrame frame, boolean z10) {
        Intrinsics.checkNotNullParameter(frame, "frame");
        this.eglRenderer.onFrame(frame, z10);
    }

    @Override // org.webrtc.RendererCommon.RendererEvents
    public void onFrameResolutionChanged(int i10, int i11, int i12) {
        int i13;
        int i14;
        if (i12 != 0 && i12 != 180) {
            i13 = i11;
        } else {
            i13 = i10;
        }
        if (i12 != 0 && i12 != 180) {
            i14 = i10;
        } else {
            i14 = i11;
        }
        Debug debug = Debug.INSTANCE;
        RendererCommon.RendererEvents rendererEvents = this.rendererEvents;
        if (rendererEvents == null) {
            Intrinsics.throwUninitializedPropertyAccessException("rendererEvents");
            rendererEvents = null;
        }
        rendererEvents.onFrameResolutionChanged(i10, i11, i12);
        if (ThreadUtilsKt.isOnMainThread()) {
            this.rotatedFrameWidth = i13;
            this.rotatedFrameHeight = i14;
            updateSurfaceSize();
            requestLayout();
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        if (z10) {
            float f10 = (i12 - i10) / (i13 - i11);
            if (!Float.isNaN(f10)) {
                Debug debug = Debug.INSTANCE;
                this.eglRenderer.setLayoutAspectRatio(f10);
                updateSurfaceSize();
            }
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        Point measure = this.videoLayoutMeasure.measure(i10, i11, this.rotatedFrameWidth, this.rotatedFrameHeight);
        if (this.rotatedFrameWidth != 0 || this.rotatedFrameHeight != 0) {
            Debug debug = Debug.INSTANCE;
        }
        setMeasuredDimension(measure.x, measure.y);
    }

    @Override // android.view.View
    public void requestLayout() {
        Debug debug = Debug.INSTANCE;
        super.requestLayout();
    }

    public final void reset() {
        Debug debug = Debug.INSTANCE;
        this.startRenderingTimestampNs = 0L;
        attachToStream(null, null);
    }

    public final void startRenderingStream(@NotNull String streamId, @NotNull RendererCommon.RendererEvents events) {
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        Intrinsics.checkNotNullParameter(events, "events");
        Debug debug = Debug.INSTANCE;
        this.startRenderingTimestampNs = System.nanoTime();
        attachToStream(streamId, events);
    }

    @Override // android.view.View
    @NotNull
    public String toString() {
        String str = this.name;
        String str2 = this.currentStreamId;
        return str + " (currentStreamId=" + str2 + ")";
    }

    public /* synthetic */ VideoStreamTextureView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public VideoStreamTextureView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        String str = "VideoStreamTextureView-" + count.incrementAndGet();
        this.name = str;
        this.videoLayoutMeasure = new RendererCommon.VideoLayoutMeasure();
        this.mediaEngine = MediaEngineKt.getMediaEngine((ReactContext) context);
        this.eglRenderer = new TextureViewEglRenderer(str);
        setSurfaceTextureListener(new TextureView.SurfaceTextureListener() { // from class: com.discord.media.engine.video.texture_view.VideoStreamTextureView.1
            private long startNs = System.nanoTime();
            private int surfaceTextureCount;

            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureAvailable(SurfaceTexture surface, int i10, int i11) {
                Intrinsics.checkNotNullParameter(surface, "surface");
                Debug debug = Debug.INSTANCE;
                String unused = VideoStreamTextureView.this.name;
                VideoStreamTextureView.this.updateSurfaceSize();
                VideoStreamTextureView.this.eglRenderer.onSurfaceTextureAvailable(surface, i10, i11);
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public boolean onSurfaceTextureDestroyed(SurfaceTexture surface) {
                Intrinsics.checkNotNullParameter(surface, "surface");
                System.nanoTime();
                boolean onSurfaceTextureDestroyed = VideoStreamTextureView.this.eglRenderer.onSurfaceTextureDestroyed(surface);
                Debug debug = Debug.INSTANCE;
                String unused = VideoStreamTextureView.this.name;
                return onSurfaceTextureDestroyed;
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int i10, int i11) {
                Intrinsics.checkNotNullParameter(surface, "surface");
                Debug debug = Debug.INSTANCE;
                String unused = VideoStreamTextureView.this.name;
                VideoStreamTextureView.this.eglRenderer.onSurfaceTextureSizeChanged(surface, i10, i11);
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureUpdated(SurfaceTexture surface) {
                Intrinsics.checkNotNullParameter(surface, "surface");
                VideoStreamTextureView.this.eglRenderer.onSurfaceTextureUpdated(surface);
            }
        });
    }
}
