package ao;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import ao.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(bp.c.f7633b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(bp.c.f7634c);
        int c10 = androidx.core.content.a.c(context, bp.b.f7631c);
        Integer f10 = jp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = bp.g.f7668a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(bp.g.f7669b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(bp.g.f7671d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(bp.g.f7670c, c10);
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
        f5.d.e eVar = f5.d.e.f5989d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f6427c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f5984d)) {
            i10 = o4.f6425a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f5985d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0087d.f5988d) && !Intrinsics.areEqual(overlay, f5.d.f.f5990d)) {
            throw new ir.p();
        } else {
            i10 = o4.f6426b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f6178j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f5984d)) {
            i11 = l4.f6169a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f5990d)) {
            i11 = l4.f6170b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f5985d)) {
            i11 = l4.f6174f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0087d.f5988d)) {
            throw new ir.p();
        } else {
            i11 = l4.f6175g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = bp.a.f7618j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f5984d)) {
            i12 = bp.a.f7614f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f5985d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0087d.f5988d) && !Intrinsics.areEqual(overlay, f5.d.f.f5990d)) {
            throw new ir.p();
        } else {
            i12 = bp.a.f7617i;
        }
        Integer f10 = jp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = bp.g.f7672e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(bp.g.f7673f, i10);
            i11 = obtainStyledAttributes.getResourceId(bp.g.f7674g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
