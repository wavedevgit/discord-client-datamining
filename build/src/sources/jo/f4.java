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
        float dimension = context.getResources().getDimension(jp.c.f30785b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(jp.c.f30786c);
        int c10 = androidx.core.content.a.c(context, jp.b.f30783c);
        Integer f10 = rp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = jp.g.f30820a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(jp.g.f30821b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(jp.g.f30823d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(jp.g.f30822c, c10);
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
        f5.d.e eVar = f5.d.e.f30175d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f30613c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30170d)) {
            i10 = o4.f30611a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f30171d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30174d) && !Intrinsics.areEqual(overlay, f5.d.f.f30176d)) {
            throw new qr.p();
        } else {
            i10 = o4.f30612b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f30364j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30170d)) {
            i11 = l4.f30355a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f30176d)) {
            i11 = l4.f30356b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f30171d)) {
            i11 = l4.f30360f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30174d)) {
            throw new qr.p();
        } else {
            i11 = l4.f30361g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = jp.a.f30770j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f30170d)) {
            i12 = jp.a.f30766f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f30171d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0426d.f30174d) && !Intrinsics.areEqual(overlay, f5.d.f.f30176d)) {
            throw new qr.p();
        } else {
            i12 = jp.a.f30769i;
        }
        Integer f10 = rp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = jp.g.f30824e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(jp.g.f30825f, i10);
            i11 = obtainStyledAttributes.getResourceId(jp.g.f30826g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
