package ch;

import android.animation.TypeEvaluator;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f implements TypeEvaluator {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f8284a = new float[9];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f8285b = new float[9];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f8286c = new Matrix();

    public Matrix a(float f10, Matrix matrix, Matrix matrix2) {
        matrix.getValues(this.f8284a);
        matrix2.getValues(this.f8285b);
        for (int i10 = 0; i10 < 9; i10++) {
            float[] fArr = this.f8285b;
            float f11 = fArr[i10];
            float f12 = this.f8284a[i10];
            fArr[i10] = f12 + ((f11 - f12) * f10);
        }
        this.f8286c.setValues(this.f8285b);
        return this.f8286c;
    }
}
