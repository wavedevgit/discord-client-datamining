package com.facebook.drawee.drawable;

import android.graphics.Matrix;
import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o implements ScalingUtils$ScaleType {
    @Override // com.facebook.drawee.drawable.ScalingUtils$ScaleType
    public Matrix getTransform(Matrix matrix, Rect rect, int i10, int i11, float f10, float f11) {
        getTransformImpl(matrix, rect, i10, i11, f10, f11, rect.width() / i10, rect.height() / i11);
        return matrix;
    }

    public abstract void getTransformImpl(Matrix matrix, Rect rect, int i10, int i11, float f10, float f11, float f12, float f13);
}
