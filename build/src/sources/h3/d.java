package h3;

import android.view.animation.Interpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d implements Interpolator {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f27525a;

    /* renamed from: b  reason: collision with root package name */
    private final float f27526b;

    /* JADX INFO: Access modifiers changed from: protected */
    public d(float[] fArr) {
        this.f27525a = fArr;
        this.f27526b = 1.0f / (fArr.length - 1);
    }

    @Override // android.animation.TimeInterpolator
    public float getInterpolation(float f10) {
        if (f10 >= 1.0f) {
            return 1.0f;
        }
        if (f10 <= 0.0f) {
            return 0.0f;
        }
        float[] fArr = this.f27525a;
        int min = Math.min((int) ((fArr.length - 1) * f10), fArr.length - 2);
        float f11 = this.f27526b;
        float f12 = (f10 - (min * f11)) / f11;
        float[] fArr2 = this.f27525a;
        float f13 = fArr2[min];
        return f13 + (f12 * (fArr2[min + 1] - f13));
    }
}
