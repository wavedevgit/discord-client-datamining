package to;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import kotlin.jvm.internal.Intrinsics;
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(tp.c.f49776b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(tp.c.f49777c);
        int c10 = androidx.core.content.a.c(context, tp.b.f49774c);
        Integer f10 = bq.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = tp.g.f49811a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(tp.g.f49812b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(tp.g.f49814d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(tp.g.f49813c, c10);
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
        f5.d.e eVar = f5.d.e.f49166d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f49604c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49161d)) {
            i10 = o4.f49602a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f49162d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49165d) && !Intrinsics.areEqual(overlay, f5.d.f.f49167d)) {
            throw new as.p();
        } else {
            i10 = o4.f49603b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f49355j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49161d)) {
            i11 = l4.f49346a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f49167d)) {
            i11 = l4.f49347b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f49162d)) {
            i11 = l4.f49351f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49165d)) {
            throw new as.p();
        } else {
            i11 = l4.f49352g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = tp.a.f49761j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49161d)) {
            i12 = tp.a.f49757f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f49162d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49165d) && !Intrinsics.areEqual(overlay, f5.d.f.f49167d)) {
            throw new as.p();
        } else {
            i12 = tp.a.f49760i;
        }
        Integer f10 = bq.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = tp.g.f49815e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(tp.g.f49816f, i10);
            i11 = obtainStyledAttributes.getResourceId(tp.g.f49817g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
