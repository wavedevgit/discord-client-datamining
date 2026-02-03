package app.rive.core;

import android.opengl.EGL14;
import android.opengl.EGLDisplay;
import android.opengl.EGLSurface;
import android.view.Surface;
import androidx.annotation.Keep;
import app.rive.RiveLog;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Keep
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0019\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0087\b\u0018\u00002\u00020\u0001B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\r¢\u0006\u0002\u0010\u000fJ\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0007HÂ\u0003J\t\u0010\u001e\u001a\u00020\tHÆ\u0003J\u0016\u0010\u001f\u001a\u00020\u000bHÆ\u0003ø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b \u0010\u0011J\t\u0010!\u001a\u00020\rHÆ\u0003J\t\u0010\"\u001a\u00020\rHÆ\u0003JY\u0010#\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\rHÆ\u0001ø\u0001\u0000¢\u0006\u0004\b$\u0010%J\u0011\u0010&\u001a\u00020'2\u0006\u0010\b\u001a\u00020\tH\u0082 J\u0006\u0010(\u001a\u00020'J\u0013\u0010)\u001a\u00020*2\b\u0010+\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010,\u001a\u00020\rHÖ\u0001J\t\u0010-\u001a\u00020.HÖ\u0001R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0019\u0010\n\u001a\u00020\u000bø\u0001\u0000ø\u0001\u0001¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u000e\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0011R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0016\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006/"}, d2 = {"Lapp/rive/core/RiveSurface;", "", "surface", "Landroid/view/Surface;", "eglSurface", "Landroid/opengl/EGLSurface;", ViewProps.DISPLAY, "Landroid/opengl/EGLDisplay;", "renderTargetPointer", "", "drawKey", "Lapp/rive/core/DrawKey;", "width", "", "height", "(Landroid/view/Surface;Landroid/opengl/EGLSurface;Landroid/opengl/EGLDisplay;JJIILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getDrawKey-DhFih_o", "()J", "J", "getEglSurface", "()Landroid/opengl/EGLSurface;", "getHeight", "()I", "getRenderTargetPointer", "getSurface", "()Landroid/view/Surface;", "getWidth", "component1", "component2", "component3", "component4", "component5", "component5-DhFih_o", "component6", "component7", "copy", "copy-__Kf5Qc", "(Landroid/view/Surface;Landroid/opengl/EGLSurface;Landroid/opengl/EGLDisplay;JJII)Lapp/rive/core/RiveSurface;", "cppDelete", "", "dispose", "equals", "", "other", "hashCode", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CommandQueue.kt\napp/rive/core/RiveSurface\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,2459:1\n57#2:2460\n*S KotlinDebug\n*F\n+ 1 CommandQueue.kt\napp/rive/core/RiveSurface\n*L\n2413#1:2460\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveSurface {
    public static final int $stable = 8;
    @NotNull
    private final EGLDisplay display;
    private final long drawKey;
    @NotNull
    private final EGLSurface eglSurface;
    private final int height;
    private final long renderTargetPointer;
    @NotNull
    private final Surface surface;
    private final int width;

    public /* synthetic */ RiveSurface(Surface surface, EGLSurface eGLSurface, EGLDisplay eGLDisplay, long j10, long j11, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(surface, eGLSurface, eGLDisplay, j10, j11, i10, i11);
    }

    private final EGLDisplay component3() {
        return this.display;
    }

    /* renamed from: copy-__Kf5Qc$default  reason: not valid java name */
    public static /* synthetic */ RiveSurface m186copy__Kf5Qc$default(RiveSurface riveSurface, Surface surface, EGLSurface eGLSurface, EGLDisplay eGLDisplay, long j10, long j11, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            surface = riveSurface.surface;
        }
        if ((i12 & 2) != 0) {
            eGLSurface = riveSurface.eglSurface;
        }
        if ((i12 & 4) != 0) {
            eGLDisplay = riveSurface.display;
        }
        if ((i12 & 8) != 0) {
            j10 = riveSurface.renderTargetPointer;
        }
        if ((i12 & 16) != 0) {
            j11 = riveSurface.drawKey;
        }
        if ((i12 & 32) != 0) {
            i10 = riveSurface.width;
        }
        if ((i12 & 64) != 0) {
            i11 = riveSurface.height;
        }
        long j12 = j11;
        long j13 = j10;
        EGLDisplay eGLDisplay2 = eGLDisplay;
        return riveSurface.m188copy__Kf5Qc(surface, eGLSurface, eGLDisplay2, j13, j12, i10, i11);
    }

    private final native void cppDelete(long j10);

    @NotNull
    public final Surface component1() {
        return this.surface;
    }

    @NotNull
    public final EGLSurface component2() {
        return this.eglSurface;
    }

    public final long component4() {
        return this.renderTargetPointer;
    }

    /* renamed from: component5-DhFih_o  reason: not valid java name */
    public final long m187component5DhFih_o() {
        return this.drawKey;
    }

    public final int component6() {
        return this.width;
    }

    public final int component7() {
        return this.height;
    }

    @NotNull
    /* renamed from: copy-__Kf5Qc  reason: not valid java name */
    public final RiveSurface m188copy__Kf5Qc(@NotNull Surface surface, @NotNull EGLSurface eglSurface, @NotNull EGLDisplay display, long j10, long j11, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        Intrinsics.checkNotNullParameter(eglSurface, "eglSurface");
        Intrinsics.checkNotNullParameter(display, "display");
        return new RiveSurface(surface, eglSurface, display, j10, j11, i10, i11, null);
    }

    public final void dispose() {
        RiveLog.INSTANCE.getLogger().d("RiveUI/Surface", new Function0<String>() { // from class: app.rive.core.RiveSurface$dispose$1
            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                return "Deleting surface";
            }
        });
        this.surface.release();
        EGL14.eglDestroySurface(this.display, this.eglSurface);
        cppDelete(this.renderTargetPointer);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RiveSurface) {
            RiveSurface riveSurface = (RiveSurface) obj;
            return Intrinsics.areEqual(this.surface, riveSurface.surface) && Intrinsics.areEqual(this.eglSurface, riveSurface.eglSurface) && Intrinsics.areEqual(this.display, riveSurface.display) && this.renderTargetPointer == riveSurface.renderTargetPointer && DrawKey.m161equalsimpl0(this.drawKey, riveSurface.drawKey) && this.width == riveSurface.width && this.height == riveSurface.height;
        }
        return false;
    }

    /* renamed from: getDrawKey-DhFih_o  reason: not valid java name */
    public final long m189getDrawKeyDhFih_o() {
        return this.drawKey;
    }

    @NotNull
    public final EGLSurface getEglSurface() {
        return this.eglSurface;
    }

    public final int getHeight() {
        return this.height;
    }

    public final long getRenderTargetPointer() {
        return this.renderTargetPointer;
    }

    @NotNull
    public final Surface getSurface() {
        return this.surface;
    }

    public final int getWidth() {
        return this.width;
    }

    public int hashCode() {
        return (((((((((((this.surface.hashCode() * 31) + this.eglSurface.hashCode()) * 31) + this.display.hashCode()) * 31) + Long.hashCode(this.renderTargetPointer)) * 31) + DrawKey.m162hashCodeimpl(this.drawKey)) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height);
    }

    @NotNull
    public String toString() {
        Surface surface = this.surface;
        EGLSurface eGLSurface = this.eglSurface;
        EGLDisplay eGLDisplay = this.display;
        long j10 = this.renderTargetPointer;
        String m163toStringimpl = DrawKey.m163toStringimpl(this.drawKey);
        int i10 = this.width;
        int i11 = this.height;
        return "RiveSurface(surface=" + surface + ", eglSurface=" + eGLSurface + ", display=" + eGLDisplay + ", renderTargetPointer=" + j10 + ", drawKey=" + m163toStringimpl + ", width=" + i10 + ", height=" + i11 + ")";
    }

    private RiveSurface(Surface surface, EGLSurface eglSurface, EGLDisplay display, long j10, long j11, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        Intrinsics.checkNotNullParameter(eglSurface, "eglSurface");
        Intrinsics.checkNotNullParameter(display, "display");
        this.surface = surface;
        this.eglSurface = eglSurface;
        this.display = display;
        this.renderTargetPointer = j10;
        this.drawKey = j11;
        this.width = i10;
        this.height = i11;
    }
}
