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
        float dimension = context.getResources().getDimension(tp.c.f49777b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(tp.c.f49778c);
        int c10 = androidx.core.content.a.c(context, tp.b.f49775c);
        Integer f10 = bq.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = tp.g.f49812a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(tp.g.f49813b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(tp.g.f49815d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(tp.g.f49814c, c10);
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
        f5.d.e eVar = f5.d.e.f49167d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f49605c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49162d)) {
            i10 = o4.f49603a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f49163d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49166d) && !Intrinsics.areEqual(overlay, f5.d.f.f49168d)) {
            throw new as.p();
        } else {
            i10 = o4.f49604b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f49356j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49162d)) {
            i11 = l4.f49347a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f49168d)) {
            i11 = l4.f49348b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f49163d)) {
            i11 = l4.f49352f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49166d)) {
            throw new as.p();
        } else {
            i11 = l4.f49353g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = tp.a.f49762j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f49162d)) {
            i12 = tp.a.f49758f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f49163d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0670d.f49166d) && !Intrinsics.areEqual(overlay, f5.d.f.f49168d)) {
            throw new as.p();
        } else {
            i12 = tp.a.f49761i;
        }
        Integer f10 = bq.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = tp.g.f49816e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(tp.g.f49817f, i10);
            i11 = obtainStyledAttributes.getResourceId(tp.g.f49818g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
