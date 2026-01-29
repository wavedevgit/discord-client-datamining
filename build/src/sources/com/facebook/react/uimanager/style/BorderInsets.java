package com.facebook.react.uimanager.style;

import android.content.Context;
import android.graphics.RectF;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001d\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u0006¢\u0006\u0002\u0010\rJ\u0016\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013R\u0018\u0010\u0004\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00060\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0007¨\u0006\u0014"}, d2 = {"Lcom/facebook/react/uimanager/style/BorderInsets;", "", "<init>", "()V", "edgeInsets", "", "", "[Ljava/lang/Float;", "setBorderWidth", "", "edge", "Lcom/facebook/react/uimanager/style/LogicalEdge;", "width", "(Lcom/facebook/react/uimanager/style/LogicalEdge;Ljava/lang/Float;)V", "resolve", "Landroid/graphics/RectF;", ViewProps.LAYOUT_DIRECTION, "", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BorderInsets {
    @NotNull
    private final Float[] edgeInsets = new Float[LogicalEdge.values().length];

    @NotNull
    public final RectF resolve(int i10, @NotNull Context context) {
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float f16;
        float f17;
        float f18;
        Intrinsics.checkNotNullParameter(context, "context");
        float f19 = 0.0f;
        if (i10 != 0) {
            if (i10 == 1) {
                if (I18nUtil.Companion.getInstance().doLeftAndRightSwapInRTL(context)) {
                    Float f20 = this.edgeInsets[LogicalEdge.END.ordinal()];
                    if (f20 != null || (f20 = this.edgeInsets[LogicalEdge.RIGHT.ordinal()]) != null || (f20 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f20 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                        f16 = f20.floatValue();
                    } else {
                        f16 = 0.0f;
                    }
                    Float f21 = this.edgeInsets[LogicalEdge.BLOCK_START.ordinal()];
                    if (f21 != null || (f21 = this.edgeInsets[LogicalEdge.TOP.ordinal()]) != null || (f21 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f21 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f21 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                        f17 = f21.floatValue();
                    } else {
                        f17 = 0.0f;
                    }
                    Float f22 = this.edgeInsets[LogicalEdge.START.ordinal()];
                    if (f22 != null || (f22 = this.edgeInsets[LogicalEdge.LEFT.ordinal()]) != null || (f22 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f22 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                        f18 = f22.floatValue();
                    } else {
                        f18 = 0.0f;
                    }
                    Float f23 = this.edgeInsets[LogicalEdge.BLOCK_END.ordinal()];
                    if (f23 != null || (f23 = this.edgeInsets[LogicalEdge.BOTTOM.ordinal()]) != null || (f23 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f23 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f23 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                        f19 = f23.floatValue();
                    }
                    return new RectF(f16, f17, f18, f19);
                }
                Float f24 = this.edgeInsets[LogicalEdge.END.ordinal()];
                if (f24 != null || (f24 = this.edgeInsets[LogicalEdge.LEFT.ordinal()]) != null || (f24 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f24 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                    f13 = f24.floatValue();
                } else {
                    f13 = 0.0f;
                }
                Float f25 = this.edgeInsets[LogicalEdge.BLOCK_START.ordinal()];
                if (f25 != null || (f25 = this.edgeInsets[LogicalEdge.TOP.ordinal()]) != null || (f25 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f25 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f25 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                    f14 = f25.floatValue();
                } else {
                    f14 = 0.0f;
                }
                Float f26 = this.edgeInsets[LogicalEdge.START.ordinal()];
                if (f26 != null || (f26 = this.edgeInsets[LogicalEdge.RIGHT.ordinal()]) != null || (f26 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f26 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                    f15 = f26.floatValue();
                } else {
                    f15 = 0.0f;
                }
                Float f27 = this.edgeInsets[LogicalEdge.BLOCK_END.ordinal()];
                if (f27 != null || (f27 = this.edgeInsets[LogicalEdge.BOTTOM.ordinal()]) != null || (f27 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f27 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f27 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
                    f19 = f27.floatValue();
                }
                return new RectF(f13, f14, f15, f19);
            }
            throw new IllegalArgumentException("Expected resolved layout direction");
        }
        Float f28 = this.edgeInsets[LogicalEdge.START.ordinal()];
        if (f28 != null || (f28 = this.edgeInsets[LogicalEdge.LEFT.ordinal()]) != null || (f28 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f28 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
            f10 = f28.floatValue();
        } else {
            f10 = 0.0f;
        }
        Float f29 = this.edgeInsets[LogicalEdge.BLOCK_START.ordinal()];
        if (f29 != null || (f29 = this.edgeInsets[LogicalEdge.TOP.ordinal()]) != null || (f29 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f29 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f29 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
            f11 = f29.floatValue();
        } else {
            f11 = 0.0f;
        }
        Float f30 = this.edgeInsets[LogicalEdge.END.ordinal()];
        if (f30 != null || (f30 = this.edgeInsets[LogicalEdge.RIGHT.ordinal()]) != null || (f30 = this.edgeInsets[LogicalEdge.HORIZONTAL.ordinal()]) != null || (f30 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
            f12 = f30.floatValue();
        } else {
            f12 = 0.0f;
        }
        Float f31 = this.edgeInsets[LogicalEdge.BLOCK_END.ordinal()];
        if (f31 != null || (f31 = this.edgeInsets[LogicalEdge.BOTTOM.ordinal()]) != null || (f31 = this.edgeInsets[LogicalEdge.BLOCK.ordinal()]) != null || (f31 = this.edgeInsets[LogicalEdge.VERTICAL.ordinal()]) != null || (f31 = this.edgeInsets[LogicalEdge.ALL.ordinal()]) != null) {
            f19 = f31.floatValue();
        }
        return new RectF(f10, f11, f12, f19);
    }

    public final void setBorderWidth(@NotNull LogicalEdge edge, Float f10) {
        Intrinsics.checkNotNullParameter(edge, "edge");
        this.edgeInsets[edge.ordinal()] = f10;
    }
}
