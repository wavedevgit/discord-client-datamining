package bo;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import bo.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(cp.c.f20631b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(cp.c.f20632c);
        int c10 = androidx.core.content.a.c(context, cp.b.f20629c);
        Integer f10 = kp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = cp.g.f20666a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(cp.g.f20667b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(cp.g.f20669d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(cp.g.f20668c, c10);
            obtainStyledAttributes.recycle();
        }
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setCornerRadius(dimension);
        gradientDrawable.setStroke(dimensionPixelSize, c10);
        return gradientDrawable;
    }

    public static final i4 b(Context context, f5.d overlay) {
        int i10;
        int i11;
        int i12;
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(overlay, "overlay");
        f5.d.e eVar = f5.d.e.f6812d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f7250c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f6807d)) {
            i10 = o4.f7248a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f6808d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0121d.f6811d) && !Intrinsics.areEqual(overlay, f5.d.f.f6813d)) {
            throw new jr.p();
        } else {
            i10 = o4.f7249b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f7001j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f6807d)) {
            i11 = l4.f6992a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f6813d)) {
            i11 = l4.f6993b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f6808d)) {
            i11 = l4.f6997f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0121d.f6811d)) {
            throw new jr.p();
        } else {
            i11 = l4.f6998g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = cp.a.f20616j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f6807d)) {
            i12 = cp.a.f20612f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f6808d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0121d.f6811d) && !Intrinsics.areEqual(overlay, f5.d.f.f6813d)) {
            throw new jr.p();
        } else {
            i12 = cp.a.f20615i;
        }
        Integer f10 = kp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = cp.g.f20670e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(cp.g.f20671f, i10);
            i11 = obtainStyledAttributes.getResourceId(cp.g.f20672g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
