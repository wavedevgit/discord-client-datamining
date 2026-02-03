package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final float f27119a;

    /* renamed from: b  reason: collision with root package name */
    private final float f27120b;

    /* renamed from: c  reason: collision with root package name */
    private final float f27121c;

    /* renamed from: d  reason: collision with root package name */
    private final float f27122d;

    /* renamed from: e  reason: collision with root package name */
    private final float f27123e;

    /* renamed from: f  reason: collision with root package name */
    private final float f27124f;

    /* renamed from: g  reason: collision with root package name */
    private final float f27125g;

    /* renamed from: h  reason: collision with root package name */
    private final float f27126h;

    /* renamed from: i  reason: collision with root package name */
    private final float f27127i;

    private m(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18) {
        this.f27119a = f10;
        this.f27120b = f13;
        this.f27121c = f16;
        this.f27122d = f11;
        this.f27123e = f14;
        this.f27124f = f17;
        this.f27125g = f12;
        this.f27126h = f15;
        this.f27127i = f18;
    }

    public static m b(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18, float f19, float f20, float f21, float f22, float f23, float f24, float f25) {
        return d(f18, f19, f20, f21, f22, f23, f24, f25).e(c(f10, f11, f12, f13, f14, f15, f16, f17));
    }

    public static m c(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return d(f10, f11, f12, f13, f14, f15, f16, f17).a();
    }

    public static m d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        float f18 = ((f10 - f12) + f14) - f16;
        float f19 = ((f11 - f13) + f15) - f17;
        if (f18 == 0.0f && f19 == 0.0f) {
            return new m(f12 - f10, f14 - f12, f10, f13 - f11, f15 - f13, f11, 0.0f, 0.0f, 1.0f);
        }
        float f20 = f12 - f14;
        float f21 = f16 - f14;
        float f22 = f13 - f15;
        float f23 = f17 - f15;
        float f24 = (f20 * f23) - (f21 * f22);
        float f25 = ((f23 * f18) - (f21 * f19)) / f24;
        float f26 = ((f20 * f19) - (f18 * f22)) / f24;
        return new m((f12 - f10) + (f25 * f12), (f16 - f10) + (f26 * f16), f10, (f13 - f11) + (f25 * f13), (f17 - f11) + (f26 * f17), f11, f25, f26, 1.0f);
    }

    m a() {
        float f10 = this.f27123e;
        float f11 = this.f27127i;
        float f12 = this.f27124f;
        float f13 = this.f27126h;
        float f14 = (f10 * f11) - (f12 * f13);
        float f15 = this.f27125g;
        float f16 = this.f27122d;
        float f17 = (f12 * f15) - (f16 * f11);
        float f18 = (f16 * f13) - (f10 * f15);
        float f19 = this.f27121c;
        float f20 = this.f27120b;
        float f21 = (f19 * f13) - (f20 * f11);
        float f22 = this.f27119a;
        return new m(f14, f17, f18, f21, (f11 * f22) - (f19 * f15), (f15 * f20) - (f13 * f22), (f20 * f12) - (f19 * f10), (f19 * f16) - (f12 * f22), (f22 * f10) - (f20 * f16));
    }

    m e(m mVar) {
        float f10 = this.f27119a;
        float f11 = mVar.f27119a;
        float f12 = this.f27122d;
        float f13 = mVar.f27120b;
        float f14 = this.f27125g;
        float f15 = mVar.f27121c;
        float f16 = (f10 * f11) + (f12 * f13) + (f14 * f15);
        float f17 = mVar.f27122d;
        float f18 = mVar.f27123e;
        float f19 = mVar.f27124f;
        float f20 = (f10 * f17) + (f12 * f18) + (f14 * f19);
        float f21 = mVar.f27125g;
        float f22 = mVar.f27126h;
        float f23 = mVar.f27127i;
        float f24 = this.f27120b;
        float f25 = this.f27123e;
        float f26 = this.f27126h;
        float f27 = (f24 * f21) + (f25 * f22) + (f26 * f23);
        float f28 = this.f27121c;
        float f29 = f11 * f28;
        float f30 = this.f27124f;
        float f31 = f29 + (f13 * f30);
        float f32 = this.f27127i;
        return new m(f16, f20, (f10 * f21) + (f12 * f22) + (f14 * f23), (f24 * f11) + (f25 * f13) + (f26 * f15), (f24 * f17) + (f25 * f18) + (f26 * f19), f27, f31 + (f15 * f32), (f28 * f17) + (f18 * f30) + (f19 * f32), (f28 * f21) + (f30 * f22) + (f32 * f23));
    }

    public void f(float[] fArr) {
        float f10 = this.f27119a;
        float f11 = this.f27120b;
        float f12 = this.f27121c;
        float f13 = this.f27122d;
        float f14 = this.f27123e;
        float f15 = this.f27124f;
        float f16 = this.f27125g;
        float f17 = this.f27126h;
        float f18 = this.f27127i;
        int length = fArr.length - 1;
        for (int i10 = 0; i10 < length; i10 += 2) {
            float f19 = fArr[i10];
            int i11 = i10 + 1;
            float f20 = fArr[i11];
            float f21 = (f12 * f19) + (f15 * f20) + f18;
            fArr[i10] = (((f10 * f19) + (f13 * f20)) + f16) / f21;
            fArr[i11] = (((f19 * f11) + (f20 * f14)) + f17) / f21;
        }
    }
}
