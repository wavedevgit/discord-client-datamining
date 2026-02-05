package ho;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import ho.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(hp.c.f26789b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(hp.c.f26790c);
        int c10 = androidx.core.content.a.c(context, hp.b.f26787c);
        Integer f10 = pp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = hp.g.f26824a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(hp.g.f26825b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(hp.g.f26827d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(hp.g.f26826c, c10);
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
        f5.d.e eVar = f5.d.e.f26179d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f26617c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f26174d)) {
            i10 = o4.f26615a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f26175d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0359d.f26178d) && !Intrinsics.areEqual(overlay, f5.d.f.f26180d)) {
            throw new or.p();
        } else {
            i10 = o4.f26616b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f26368j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f26174d)) {
            i11 = l4.f26359a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f26180d)) {
            i11 = l4.f26360b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f26175d)) {
            i11 = l4.f26364f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0359d.f26178d)) {
            throw new or.p();
        } else {
            i11 = l4.f26365g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = hp.a.f26774j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f26174d)) {
            i12 = hp.a.f26770f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f26175d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0359d.f26178d) && !Intrinsics.areEqual(overlay, f5.d.f.f26180d)) {
            throw new or.p();
        } else {
            i12 = hp.a.f26773i;
        }
        Integer f10 = pp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = hp.g.f26828e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(hp.g.f26829f, i10);
            i11 = obtainStyledAttributes.getResourceId(hp.g.f26830g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
