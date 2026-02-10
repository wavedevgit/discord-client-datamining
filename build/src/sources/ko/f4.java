package ko;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import ko.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(kp.c.f34925b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(kp.c.f34926c);
        int c10 = androidx.core.content.a.c(context, kp.b.f34923c);
        Integer f10 = sp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = kp.g.f34960a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(kp.g.f34961b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(kp.g.f34963d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(kp.g.f34962c, c10);
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
        f5.d.e eVar = f5.d.e.f31174d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f31612c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f31169d)) {
            i10 = o4.f31610a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f31170d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0472d.f31173d) && !Intrinsics.areEqual(overlay, f5.d.f.f31175d)) {
            throw new rr.p();
        } else {
            i10 = o4.f31611b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f31363j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f31169d)) {
            i11 = l4.f31354a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f31175d)) {
            i11 = l4.f31355b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f31170d)) {
            i11 = l4.f31359f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0472d.f31173d)) {
            throw new rr.p();
        } else {
            i11 = l4.f31360g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = kp.a.f34910j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f31169d)) {
            i12 = kp.a.f34906f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f31170d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0472d.f31173d) && !Intrinsics.areEqual(overlay, f5.d.f.f31175d)) {
            throw new rr.p();
        } else {
            i12 = kp.a.f34909i;
        }
        Integer f10 = sp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = kp.g.f34964e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(kp.g.f34965f, i10);
            i11 = obtainStyledAttributes.getResourceId(kp.g.f34966g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
