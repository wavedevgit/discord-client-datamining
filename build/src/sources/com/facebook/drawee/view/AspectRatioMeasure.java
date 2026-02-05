package com.facebook.drawee.view;

import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class AspectRatioMeasure {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class Spec {

        /* renamed from: a  reason: collision with root package name */
        public int f10172a;

        /* renamed from: b  reason: collision with root package name */
        public int f10173b;
    }

    private static boolean a(int i10) {
        return i10 == 0 || i10 == -2;
    }

    public static void b(Spec spec, float f10, ViewGroup.LayoutParams layoutParams, int i10, int i11) {
        if (f10 > 0.0f && layoutParams != null) {
            if (a(layoutParams.height)) {
                spec.f10173b = View.MeasureSpec.makeMeasureSpec(View.resolveSize((int) (((View.MeasureSpec.getSize(spec.f10172a) - i10) / f10) + i11), spec.f10173b), 1073741824);
            } else if (a(layoutParams.width)) {
                spec.f10172a = View.MeasureSpec.makeMeasureSpec(View.resolveSize((int) (((View.MeasureSpec.getSize(spec.f10173b) - i11) * f10) + i10), spec.f10172a), 1073741824);
            }
        }
    }
}
