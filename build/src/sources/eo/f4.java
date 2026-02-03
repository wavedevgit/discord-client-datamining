package eo;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import eo.f5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f4 {
    public static final GradientDrawable a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        float dimension = context.getResources().getDimension(ep.c.f22477b);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(ep.c.f22478c);
        int c10 = androidx.core.content.a.c(context, ep.b.f22475c);
        Integer f10 = mp.s.f(context, i10, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrame = ep.g.f22512a;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrame, "Pi2IdFrame");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrame);
            dimension = obtainStyledAttributes.getDimension(ep.g.f22513b, dimension);
            dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(ep.g.f22515d, dimensionPixelSize);
            c10 = obtainStyledAttributes.getColor(ep.g.f22514c, c10);
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
        f5.d.e eVar = f5.d.e.f21867d;
        if (Intrinsics.areEqual(overlay, eVar)) {
            i10 = o4.f22305c;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f21862d)) {
            i10 = o4.f22303a;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f21863d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0291d.f21866d) && !Intrinsics.areEqual(overlay, f5.d.f.f21868d)) {
            throw new lr.p();
        } else {
            i10 = o4.f22304b;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i11 = l4.f22056j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f21862d)) {
            i11 = l4.f22047a;
        } else if (Intrinsics.areEqual(overlay, f5.d.f.f21868d)) {
            i11 = l4.f22048b;
        } else if (Intrinsics.areEqual(overlay, f5.d.b.f21863d)) {
            i11 = l4.f22052f;
        } else if (!(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0291d.f21866d)) {
            throw new lr.p();
        } else {
            i11 = l4.f22053g;
        }
        if (Intrinsics.areEqual(overlay, eVar)) {
            i12 = ep.a.f22462j;
        } else if (Intrinsics.areEqual(overlay, f5.d.a.f21862d)) {
            i12 = ep.a.f22458f;
        } else if (!Intrinsics.areEqual(overlay, f5.d.b.f21863d) && !(overlay instanceof f5.d.c) && !Intrinsics.areEqual(overlay, f5.d.C0291d.f21866d) && !Intrinsics.areEqual(overlay, f5.d.f.f21868d)) {
            throw new lr.p();
        } else {
            i12 = ep.a.f22461i;
        }
        Integer f10 = mp.s.f(context, i12, null, false, 6, null);
        if (f10 != null) {
            int intValue = f10.intValue();
            int[] Pi2IdFrameGuideAssets = ep.g.f22516e;
            Intrinsics.checkNotNullExpressionValue(Pi2IdFrameGuideAssets, "Pi2IdFrameGuideAssets");
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(intValue, Pi2IdFrameGuideAssets);
            i10 = obtainStyledAttributes.getResourceId(ep.g.f22517f, i10);
            i11 = obtainStyledAttributes.getResourceId(ep.g.f22518g, i11);
            obtainStyledAttributes.recycle();
        }
        return new i4(i10, i11);
    }
}
