package app.rive.runtime.kotlin.core;

import android.content.Context;
import android.graphics.RectF;
import app.rive.runtime.kotlin.fonts.FontHelper;
import app.rive.runtime.kotlin.fonts.Fonts;
import app.rive.runtime.kotlin.fonts.NativeFontHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import tb.c;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0000\bÇ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J0\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u000b2\b\b\u0002\u0010\u0012\u001a\u00020\u0013J9\u0010\u0014\u001a\u00020\u00152\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u0013H\u0082 J\t\u0010\u0017\u001a\u00020\u0015H\u0082 J\u0018\u0010\u0018\u001a\u00020\u00152\u0006\u0010\u0019\u001a\u00020\u001a2\b\b\u0002\u0010\u001b\u001a\u00020\u0006J\u0006\u0010\u001c\u001a\u00020\u0015J\u0014\u0010\u001d\u001a\u00020\u001e2\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010 H\u0007J\u0010\u0010\u001d\u001a\u00020\u001e2\u0006\u0010!\u001a\u00020\"H\u0007R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R\u001e\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u0006@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006#"}, d2 = {"Lapp/rive/runtime/kotlin/core/Rive;", "", "()V", "RIVE_ANDROID", "", "<set-?>", "Lapp/rive/runtime/kotlin/core/RendererType;", "defaultRendererType", "getDefaultRendererType", "()Lapp/rive/runtime/kotlin/core/RendererType;", "calculateRequiredBounds", "Landroid/graphics/RectF;", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "availableBounds", "artboardBounds", "scaleFactor", "", "cppCalculateRequiredBounds", "", "requiredBounds", "cppInitialize", "init", "context", "Landroid/content/Context;", "defaultRenderer", "initializeCppEnvironment", "setFallbackFont", "", "opts", "Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts;", "byteArray", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Rive {
    @NotNull
    private static final String RIVE_ANDROID = "rive-android";
    @NotNull
    public static final Rive INSTANCE = new Rive();
    @NotNull
    private static RendererType defaultRendererType = RendererType.Rive;
    public static final int $stable = 8;

    private Rive() {
    }

    public static /* synthetic */ RectF calculateRequiredBounds$default(Rive rive, Fit fit, Alignment alignment, RectF rectF, RectF rectF2, float f10, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            f10 = 1.0f;
        }
        return rive.calculateRequiredBounds(fit, alignment, rectF, rectF2, f10);
    }

    private final native void cppCalculateRequiredBounds(Fit fit, Alignment alignment, RectF rectF, RectF rectF2, RectF rectF3, float f10);

    private final native void cppInitialize();

    public static /* synthetic */ void init$default(Rive rive, Context context, RendererType rendererType, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            rendererType = RendererType.Rive;
        }
        rive.init(context, rendererType);
    }

    public static /* synthetic */ boolean setFallbackFont$default(Rive rive, Fonts.FontOpts fontOpts, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            fontOpts = null;
        }
        return rive.setFallbackFont(fontOpts);
    }

    @NotNull
    public final RectF calculateRequiredBounds(@NotNull Fit fit, @NotNull Alignment alignment, @NotNull RectF availableBounds, @NotNull RectF artboardBounds, float f10) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(availableBounds, "availableBounds");
        Intrinsics.checkNotNullParameter(artboardBounds, "artboardBounds");
        RectF rectF = new RectF();
        cppCalculateRequiredBounds(fit, alignment, availableBounds, artboardBounds, rectF, f10);
        return rectF;
    }

    @NotNull
    public final RendererType getDefaultRendererType() {
        return defaultRendererType;
    }

    public final void init(@NotNull Context context, @NotNull RendererType defaultRenderer) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(defaultRenderer, "defaultRenderer");
        c.a().e(context, RIVE_ANDROID);
        defaultRendererType = defaultRenderer;
        initializeCppEnvironment();
    }

    public final void initializeCppEnvironment() {
        cppInitialize();
    }

    @jr.c
    public final boolean setFallbackFont(@NotNull byte[] byteArray) {
        Intrinsics.checkNotNullParameter(byteArray, "byteArray");
        return NativeFontHelper.INSTANCE.cppRegisterFallbackFont(byteArray);
    }

    @jr.c
    public final boolean setFallbackFont(Fonts.FontOpts fontOpts) {
        byte[] fallbackFontBytes = FontHelper.Companion.getFallbackFontBytes(fontOpts);
        return fallbackFontBytes != null && NativeFontHelper.INSTANCE.cppRegisterFallbackFont(fallbackFontBytes);
    }
}
