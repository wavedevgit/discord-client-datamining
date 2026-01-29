package com.facebook.react.views.image;

import android.graphics.Matrix;
import android.graphics.Rect;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.drawable.o;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\b\u0000\u0018\u0000 \u00162\u00020\u0001:\u0001\u0016B\u0007¢\u0006\u0004\b\u0002\u0010\u0003JO\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u0014\u0010\u0015¨\u0006\u0017"}, d2 = {"Lcom/facebook/react/views/image/ScaleTypeStartInside;", "Lcom/facebook/drawee/drawable/o;", "<init>", "()V", "Landroid/graphics/Matrix;", "outTransform", "Landroid/graphics/Rect;", "parentRect", "", "childWidth", "childHeight", "", "focusX", "focusY", ViewProps.SCALE_X, ViewProps.SCALE_Y, "", "getTransformImpl", "(Landroid/graphics/Matrix;Landroid/graphics/Rect;IIFFFF)V", "", "toString", "()Ljava/lang/String;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ScaleTypeStartInside extends o {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final ScalingUtils$ScaleType INSTANCE = new ScaleTypeStartInside();

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/views/image/ScaleTypeStartInside$Companion;", "", "<init>", "()V", "INSTANCE", "Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;", "getINSTANCE", "()Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ScalingUtils$ScaleType getINSTANCE() {
            return ScaleTypeStartInside.INSTANCE;
        }

        private Companion() {
        }
    }

    @Override // com.facebook.drawee.drawable.o
    public void getTransformImpl(@NotNull Matrix outTransform, @NotNull Rect parentRect, int i10, int i11, float f10, float f11, float f12, float f13) {
        Intrinsics.checkNotNullParameter(outTransform, "outTransform");
        Intrinsics.checkNotNullParameter(parentRect, "parentRect");
        float h10 = d.h(Math.min(f12, f13), 1.0f);
        outTransform.setScale(h10, h10);
        outTransform.postTranslate(Math.round(parentRect.left), Math.round(parentRect.top));
    }

    @NotNull
    public String toString() {
        return "start_inside";
    }
}
