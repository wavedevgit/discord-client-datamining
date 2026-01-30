package zg;

import android.animation.TypeEvaluator;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f implements TypeEvaluator {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f55682a = new float[9];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f55683b = new float[9];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f55684c = new Matrix();

    public Matrix a(float f10, Matrix matrix, Matrix matrix2) {
        matrix.getValues(this.f55682a);
        matrix2.getValues(this.f55683b);
        for (int i10 = 0; i10 < 9; i10++) {
            float[] fArr = this.f55683b;
            float f11 = fArr[i10];
            float f12 = this.f55682a[i10];
            fArr[i10] = f12 + ((f11 - f12) * f10);
        }
        this.f55684c.setValues(this.f55683b);
        return this.f55684c;
    }
}
