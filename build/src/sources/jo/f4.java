package jo;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import jo.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(jp.c.f30833b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(jp.c.f30834c);
        int c10 = androidx.core.content.a.c(context, jp.b.f30831c);
        Integer f10 = rp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = jp.g.f30868a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(jp.g.f30869b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(jp.g.f30871d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(jp.g.f30870c, c10);
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
        f5.d.e eVar = f5.d.e.f30223d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f30661c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30218d)) {
            i10 = o4.f30659a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f30219d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30222d) && !Intrinsics.areEqual(overlay, f5.d.f.f30224d)) {
            throw new qr.p();
        } else {
            i10 = o4.f30660b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f30412j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30218d)) {
            i11 = l4.f30403a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f30224d)) {
            i11 = l4.f30404b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f30219d)) {
            i11 = l4.f30408f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30222d)) {
            throw new qr.p();
        } else {
            i11 = l4.f30409g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = jp.a.f30818j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30218d)) {
            i12 = jp.a.f30814f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f30219d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30222d) && !Intrinsics.areEqual(overlay, f5.d.f.f30224d)) {
            throw new qr.p();
        } else {
            i12 = jp.a.f30817i;
        }
        Integer f10 = rp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = jp.g.f30872e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(jp.g.f30873f, i10);
            i11 = obtainStyledAttributes.getResourceId(jp.g.f30874g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
