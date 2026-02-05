package com.facebook.drawee.drawable;

import android.graphics.Matrix;
import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class y extends o {

    /* renamed from: l  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10118l = new y();

    private y() {
    }

    @Override // com.facebook.drawee.drawable.o
    public void getTransformImpl(Matrix matrix, Rect rect, int i10, int i11, float f10, float f11, float f12, float f13) {
        matrix.setScale(f13, f13);
        matrix.postTranslate((int) (rect.left + ((rect.width() - (i10 * f13)) * 0.5f) + 0.5f), (int) (rect.top + 0.5f));
    }

    public String toString() {
        return "fit_y";
    }
}
