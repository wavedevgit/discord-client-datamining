package com.facebook.drawee.drawable;

import android.graphics.Matrix;
import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class s extends o {

    /* renamed from: l  reason: collision with root package name */
    public static final ScalingUtils$ScaleType f9727l = new s();

    private s() {
    }

    @Override // com.facebook.drawee.drawable.o
    public void getTransformImpl(Matrix matrix, Rect rect, int i10, int i11, float f10, float f11, float f12, float f13) {
        float min = Math.min(f12, f13);
        matrix.setScale(min, min);
        matrix.postTranslate((int) (rect.left + 0.5f), (int) (rect.top + (rect.height() - (i11 * min)) + 0.5f));
    }

    public String toString() {
        return "fit_bottom_start";
    }
}
