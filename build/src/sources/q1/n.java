package q1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class n {

    /* renamed from: k  reason: collision with root package name */
    static final n f46860k = k(b.f46826c, (float) ((b.h(50.0f) * 63.66197723675813d) / 100.0d), 50.0f, 2.0f, false);

    /* renamed from: a  reason: collision with root package name */
    private final float f46861a;

    /* renamed from: b  reason: collision with root package name */
    private final float f46862b;

    /* renamed from: c  reason: collision with root package name */
    private final float f46863c;

    /* renamed from: d  reason: collision with root package name */
    private final float f46864d;

    /* renamed from: e  reason: collision with root package name */
    private final float f46865e;

    /* renamed from: f  reason: collision with root package name */
    private final float f46866f;

    /* renamed from: g  reason: collision with root package name */
    private final float[] f46867g;

    /* renamed from: h  reason: collision with root package name */
    private final float f46868h;

    /* renamed from: i  reason: collision with root package name */
    private final float f46869i;

    /* renamed from: j  reason: collision with root package name */
    private final float f46870j;

    private n(float f10, float f11, float f12, float f13, float f14, float f15, float[] fArr, float f16, float f17, float f18) {
        this.f46866f = f10;
        this.f46861a = f11;
        this.f46862b = f12;
        this.f46863c = f13;
        this.f46864d = f14;
        this.f46865e = f15;
        this.f46867g = fArr;
        this.f46868h = f16;
        this.f46869i = f17;
        this.f46870j = f18;
    }

    static n k(float[] fArr, float f10, float f11, float f12, boolean z10) {
        float d10;
        float exp;
        float[][] fArr2 = b.f46824a;
        float f13 = fArr[0];
        float[] fArr3 = fArr2[0];
        float f14 = fArr[1];
        float f15 = fArr[2];
        float f16 = (fArr3[0] * f13) + (fArr3[1] * f14) + (fArr3[2] * f15);
        float[] fArr4 = fArr2[1];
        float f17 = (fArr4[0] * f13) + (fArr4[1] * f14) + (fArr4[2] * f15);
        float[] fArr5 = fArr2[2];
        float f18 = (f13 * fArr5[0]) + (f14 * fArr5[1]) + (f15 * fArr5[2]);
        float f19 = (f12 / 10.0f) + 0.8f;
        if (f19 >= 0.9d) {
            d10 = b.d(0.59f, 0.69f, (f19 - 0.9f) * 10.0f);
        } else {
            d10 = b.d(0.525f, 0.59f, (f19 - 0.8f) * 10.0f);
        }
        float f20 = d10;
        if (z10) {
            exp = 1.0f;
        } else {
            exp = (1.0f - (((float) Math.exp(((-f10) - 42.0f) / 92.0f)) * 0.2777778f)) * f19;
        }
        double d11 = exp;
        if (d11 > 1.0d) {
            exp = 1.0f;
        } else if (d11 < 0.0d) {
            exp = 0.0f;
        }
        float[] fArr6 = {(((100.0f / f16) * exp) + 1.0f) - exp, (((100.0f / f17) * exp) + 1.0f) - exp, (((100.0f / f18) * exp) + 1.0f) - exp};
        float f21 = 1.0f / ((5.0f * f10) + 1.0f);
        float f22 = f21 * f21 * f21 * f21;
        float f23 = 1.0f - f22;
        float cbrt = (f22 * f10) + (0.1f * f23 * f23 * ((float) Math.cbrt(f10 * 5.0d)));
        float h10 = b.h(f11) / fArr[1];
        double d12 = h10;
        float pow = 0.725f / ((float) Math.pow(d12, 0.2d));
        float[] fArr7 = {(float) Math.pow(((fArr6[0] * cbrt) * f16) / 100.0d, 0.42d), (float) Math.pow(((fArr6[1] * cbrt) * f17) / 100.0d, 0.42d), (float) Math.pow(((fArr6[2] * cbrt) * f18) / 100.0d, 0.42d)};
        float f24 = fArr7[0];
        float f25 = (f24 * 400.0f) / (f24 + 27.13f);
        float f26 = fArr7[1];
        float f27 = (f26 * 400.0f) / (f26 + 27.13f);
        float f28 = fArr7[2];
        float[] fArr8 = {f25, f27, (400.0f * f28) / (f28 + 27.13f)};
        return new n(h10, ((fArr8[0] * 2.0f) + fArr8[1] + (fArr8[2] * 0.05f)) * pow, pow, pow, f20, f19, fArr6, cbrt, (float) Math.pow(cbrt, 0.25d), ((float) Math.sqrt(d12)) + 1.48f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float a() {
        return this.f46861a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float b() {
        return this.f46864d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float c() {
        return this.f46868h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float d() {
        return this.f46869i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        return this.f46866f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float f() {
        return this.f46862b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.f46865e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        return this.f46863c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float[] i() {
        return this.f46867g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f46870j;
    }
}
