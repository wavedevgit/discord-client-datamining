package com.facebook.drawee.drawable;

import android.graphics.Matrix;
import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class w extends o {

    /* renamed from: l  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f10116l = new w();

    private w() {
    }

    @Override // com.facebook.drawee.drawable.o
    public void getTransformImpl(Matrix matrix, Rect rect, int i10, int i11, float f10, float f11, float f12, float f13) {
        float height = rect.top + ((rect.height() - (i11 * f12)) * 0.5f);
        matrix.setScale(f12, f12);
        matrix.postTranslate((int) (rect.left + 0.5f), (int) (height + 0.5f));
    }

    public String toString() {
        return "fit_x";
    }
}
