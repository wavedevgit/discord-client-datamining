package app.rive.runtime.kotlin.renderers;

import android.graphics.RectF;
import android.os.Handler;
import android.os.Looper;
import android.view.Choreographer;
import android.view.Surface;
import app.rive.runtime.kotlin.SharedSurface;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.NativeObject;
import app.rive.runtime.kotlin.core.RefCount;
import app.rive.runtime.kotlin.core.RendererType;
import app.rive.runtime.kotlin.core.Rive;
import com.discord.js_watchdog.SharedPreferencesKey;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\u0010\b\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\"\b'\u0018\u00002\u00020\u00012\u00020\u0002B\u0019\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0004\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0006¢\u0006\u0002\u0010\u0007J\u0010\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\tH'J0\u0010$\u001a\u00020\"2\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020*2\b\b\u0002\u0010,\u001a\u00020\tJ\u0019\u0010-\u001a\u00020.2\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0003\u001a\u00020/H\u0082 J9\u00100\u001a\u00020\"2\u0006\u00101\u001a\u00020.2\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*2\u0006\u00102\u001a\u00020*2\u0006\u0010,\u001a\u00020\tH\u0082 J\u0011\u00103\u001a\u00020\t2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u00105\u001a\u00020\"2\u0006\u00106\u001a\u00020.H\u0096 J\u0011\u00107\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u00108\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u00109\u001a\u00020/2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u0010:\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u0010;\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 J\u0019\u0010<\u001a\u00020\"2\u0006\u0010=\u001a\u00020>2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u0010?\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 J\u0011\u0010@\u001a\u00020\"2\u0006\u00104\u001a\u00020.H\u0082 JA\u0010A\u001a\u00020\"2\u0006\u00101\u001a\u00020.2\u0006\u0010B\u001a\u00020\t2\u0006\u0010C\u001a\u00020\t2\u0006\u0010D\u001a\u00020\t2\u0006\u0010E\u001a\u00020\t2\u0006\u0010F\u001a\u00020\t2\u0006\u0010G\u001a\u00020\tH\u0082 J\u0011\u0010H\u001a\u00020/2\u0006\u00104\u001a\u00020.H\u0082 J\b\u0010I\u001a\u00020\"H\u0017J\b\u0010J\u001a\u00020\"H\u0002J\b\u0010K\u001a\u00020\"H\u0015J\u0010\u0010L\u001a\u00020\"2\u0006\u0010M\u001a\u00020.H\u0017J\b\u0010N\u001a\u00020\"H'J\b\u0010O\u001a\u00020\"H\u0017J\u0006\u0010P\u001a\u00020\"J\u0006\u0010Q\u001a\u00020\"J\u0016\u0010R\u001a\u00020\"2\u0006\u0010D\u001a\u00020\t2\u0006\u0010C\u001a\u00020\tJ\b\u0010S\u001a\u00020\"H\u0016J\u0010\u0010T\u001a\u00020\"2\u0006\u0010U\u001a\u00020/H\u0001J\u0010\u0010V\u001a\u00020\"2\u0006\u0010=\u001a\u00020>H\u0007J\u0015\u0010V\u001a\u00020\"2\u0006\u0010=\u001a\u00020\u0019H\u0000¢\u0006\u0002\bWJ\u0006\u0010X\u001a\u00020\"J\b\u0010Y\u001a\u00020\"H\u0007J\r\u0010Z\u001a\u00020\"H\u0001¢\u0006\u0002\b[J6\u0010\\\u001a\u00020\"2\u0006\u0010B\u001a\u00020\t2\u0006\u0010C\u001a\u00020\t2\u0006\u0010D\u001a\u00020\t2\u0006\u0010E\u001a\u00020\t2\u0006\u0010F\u001a\u00020\t2\u0006\u0010G\u001a\u00020\tJ\u0016\u0010]\u001a\u00020\"2\u0006\u0010^\u001a\u00020\t2\u0006\u0010_\u001a\u00020\tR\u0011\u0010\b\u001a\u00020\t8F¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0010\u001a\u00020\t8F¢\u0006\u0006\u001a\u0004\b\u0011\u0010\u000bR\u001a\u0010\u0012\u001a\u00020\u0006X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0012\u0010\u0013\"\u0004\b\u0014\u0010\u0015R\u001e\u0010\u0017\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0013R\u0010\u0010\u0018\u001a\u0004\u0018\u00010\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0013R\u001c\u0010\u0003\u001a\u00020\u00048\u0007X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001b\u0010\u001c\"\u0004\b\u001d\u0010\u001eR\u0011\u0010\u001f\u001a\u00020\t8F¢\u0006\u0006\u001a\u0004\b \u0010\u000b¨\u0006`"}, d2 = {"Lapp/rive/runtime/kotlin/renderers/Renderer;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "Landroid/view/Choreographer$FrameCallback;", "type", "Lapp/rive/runtime/kotlin/core/RendererType;", SharedPreferencesKey.TRACE, "", "(Lapp/rive/runtime/kotlin/core/RendererType;Z)V", "averageFps", "", "getAverageFps", "()F", "frameLock", "", "getFrameLock", "()Ljava/lang/Object;", "height", "getHeight", "isAttached", "()Z", "setAttached", "(Z)V", "<set-?>", "isPlaying", "sharedSurface", "Lapp/rive/runtime/kotlin/SharedSurface;", "getTrace", "getType", "()Lapp/rive/runtime/kotlin/core/RendererType;", "setType", "(Lapp/rive/runtime/kotlin/core/RendererType;)V", "width", "getWidth", "advance", "", "elapsed", "align", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "targetBounds", "Landroid/graphics/RectF;", "sourceBounds", "scaleFactor", "constructor", "", "", "cppAlign", "cppPointer", "srcBounds", "cppAvgFps", "rendererPointer", "cppDelete", "pointer", "cppDestroySurface", "cppDoFrame", "cppHeight", "cppRestore", "cppSave", "cppSetSurface", "surface", "Landroid/view/Surface;", "cppStart", "cppStop", "cppTransform", "x", "sy", "sx", "y", "tx", "ty", "cppWidth", "delete", "destroySurface", "disposeDependencies", "doFrame", "frameTimeNanos", "draw", "make", "restore", "save", "scale", "scheduleFrame", "setRendererType", "newType", "setSurface", "setSurface$kotlin_release", ViewProps.START, "stop", "stopThread", "stopThread$kotlin_release", ViewProps.TRANSFORM, "translate", "dx", "dy", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Renderer.kt\napp/rive/runtime/kotlin/renderers/Renderer\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,323:1\n1863#2,2:324\n*S KotlinDebug\n*F\n+ 1 Renderer.kt\napp/rive/runtime/kotlin/renderers/Renderer\n*L\n318#1:324,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Renderer extends NativeObject implements Choreographer.FrameCallback {
    public static final int $stable = 8;
    @NotNull
    private final Object frameLock;
    private boolean isAttached;
    private boolean isPlaying;
    private SharedSurface sharedSurface;
    private final boolean trace;
    @NotNull
    private RendererType type;

    public Renderer() {
        this(null, false, 3, null);
    }

    public static /* synthetic */ void align$default(Renderer renderer, Fit fit, Alignment alignment, RectF rectF, RectF rectF2, float f10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 16) != 0) {
                f10 = 1.0f;
            }
            renderer.align(fit, alignment, rectF, rectF2, f10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: align");
    }

    private final native long constructor(boolean z10, int i10);

    private final native void cppAlign(long j10, Fit fit, Alignment alignment, RectF rectF, RectF rectF2, float f10);

    private final native float cppAvgFps(long j10);

    private final native void cppDestroySurface(long j10);

    private final native void cppDoFrame(long j10);

    private final native int cppHeight(long j10);

    private final native void cppRestore(long j10);

    private final native void cppSave(long j10);

    private final native void cppSetSurface(Surface surface, long j10);

    private final native void cppStart(long j10);

    private final native void cppStop(long j10);

    private final native void cppTransform(long j10, float f10, float f11, float f12, float f13, float f14, float f15);

    private final native int cppWidth(long j10);

    private final void destroySurface() {
        synchronized (this.frameLock) {
            this.isAttached = false;
            stop();
            cppDestroySurface(getCppPointer());
            Unit unit = Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void scheduleFrame$lambda$3(Renderer this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Choreographer.getInstance().postFrameCallback(this$0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void stop$lambda$1(Renderer this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Choreographer.getInstance().removeFrameCallback(this$0);
    }

    public abstract void advance(float f10);

    public final void align(@NotNull Fit fit, @NotNull Alignment alignment, @NotNull RectF targetBounds, @NotNull RectF sourceBounds, float f10) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(targetBounds, "targetBounds");
        Intrinsics.checkNotNullParameter(sourceBounds, "sourceBounds");
        cppAlign(getCppPointer(), fit, alignment, targetBounds, sourceBounds, f10);
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject
    public native void cppDelete(long j10);

    public void delete() {
        stop();
        synchronized (this.frameLock) {
            destroySurface();
            cppDelete(getCppPointer());
            setCppPointer(0L);
            Unit unit = Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void disposeDependencies() {
        synchronized (this.frameLock) {
            try {
                SharedSurface sharedSurface = this.sharedSurface;
                if (sharedSurface != null) {
                    sharedSurface.release();
                }
                this.sharedSurface = null;
                for (RefCount refCount : getDependencies()) {
                    refCount.release();
                }
                getDependencies().clear();
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.view.Choreographer.FrameCallback
    public void doFrame(long j10) {
        if (this.isPlaying) {
            synchronized (this.frameLock) {
                try {
                    if (getHasCppObject()) {
                        cppDoFrame(getCppPointer());
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            if (this.isPlaying) {
                scheduleFrame();
            }
        }
    }

    public abstract void draw();

    public final float getAverageFps() {
        return cppAvgFps(getCppPointer());
    }

    @NotNull
    public final Object getFrameLock() {
        return this.frameLock;
    }

    public final float getHeight() {
        return cppHeight(getCppPointer());
    }

    public final boolean getTrace() {
        return this.trace;
    }

    @NotNull
    public final RendererType getType() {
        return this.type;
    }

    public final float getWidth() {
        return cppWidth(getCppPointer());
    }

    public final boolean isAttached() {
        return this.isAttached;
    }

    public final boolean isPlaying() {
        return this.isPlaying;
    }

    public void make() {
        if (!getHasCppObject()) {
            setCppPointer(constructor(this.trace, this.type.getValue()));
            getRefs().incrementAndGet();
        }
    }

    public final void restore() {
        cppRestore(getCppPointer());
    }

    public final void save() {
        cppSave(getCppPointer());
    }

    public final void scale(float f10, float f11) {
        transform(f10, 0.0f, 0.0f, f11, 0.0f, 0.0f);
    }

    public void scheduleFrame() {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: app.rive.runtime.kotlin.renderers.b
            @Override // java.lang.Runnable
            public final void run() {
                Renderer.scheduleFrame$lambda$3(Renderer.this);
            }
        });
    }

    public final void setAttached(boolean z10) {
        this.isAttached = z10;
    }

    public final void setRendererType(int i10) {
        if (i10 != this.type.getValue()) {
            this.type = RendererType.Companion.fromIndex(i10);
        }
    }

    @c
    public final void setSurface(@NotNull Surface surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        setSurface$kotlin_release(new SharedSurface(surface));
    }

    public final void setSurface$kotlin_release(@NotNull SharedSurface surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        synchronized (this.frameLock) {
            try {
                SharedSurface sharedSurface = this.sharedSurface;
                if (sharedSurface != null) {
                    sharedSurface.release();
                }
                surface.acquire();
                this.sharedSurface = surface;
                cppSetSurface(surface.getSurface(), getCppPointer());
                this.isAttached = true;
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        start();
    }

    public final void setType(@NotNull RendererType rendererType) {
        Intrinsics.checkNotNullParameter(rendererType, "<set-?>");
        this.type = rendererType;
    }

    public final void start() {
        if (this.isPlaying || !this.isAttached || !getHasCppObject()) {
            return;
        }
        this.isPlaying = true;
        cppStart(getCppPointer());
        scheduleFrame();
    }

    public final void stop() {
        stopThread$kotlin_release();
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: app.rive.runtime.kotlin.renderers.a
            @Override // java.lang.Runnable
            public final void run() {
                Renderer.stop$lambda$1(Renderer.this);
            }
        });
    }

    public final void stopThread$kotlin_release() {
        if (!this.isPlaying || !getHasCppObject()) {
            return;
        }
        this.isPlaying = false;
        cppStop(getCppPointer());
    }

    public final void transform(float f10, float f11, float f12, float f13, float f14, float f15) {
        cppTransform(getCppPointer(), f10, f11, f12, f13, f14, f15);
    }

    public final void translate(float f10, float f11) {
        transform(1.0f, 0.0f, 0.0f, 1.0f, f10, f11);
    }

    public /* synthetic */ Renderer(RendererType rendererType, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? Rive.INSTANCE.getDefaultRendererType() : rendererType, (i10 & 2) != 0 ? false : z10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Renderer(@NotNull RendererType type, boolean z10) {
        super(0L);
        Intrinsics.checkNotNullParameter(type, "type");
        this.type = type;
        this.trace = z10;
        this.frameLock = new Object();
    }
}
