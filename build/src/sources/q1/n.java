package q1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class n {

    /* renamed from: k  reason: collision with root package name */
    static final n f46425k = k(b.f46391c, (float) ((b.h(50.0f) * 63.66197723675813d) / 100.0d), 50.0f, 2.0f, false);

    /* renamed from: a  reason: collision with root package name */
    private final float f46426a;

    /* renamed from: b  reason: collision with root package name */
    private final float f46427b;

    /* renamed from: c  reason: collision with root package name */
    private final float f46428c;

    /* renamed from: d  reason: collision with root package name */
    private final float f46429d;

    /* renamed from: e  reason: collision with root package name */
    private final float f46430e;

    /* renamed from: f  reason: collision with root package name */
    private final float f46431f;

    /* renamed from: g  reason: collision with root package name */
    private final float[] f46432g;

    /* renamed from: h  reason: collision with root package name */
    private final float f46433h;

    /* renamed from: i  reason: collision with root package name */
    private final float f46434i;

    /* renamed from: j  reason: collision with root package name */
    private final float f46435j;

    private n(float f10, float f11, float f12, float f13, float f14, float f15, float[] fArr, float f16, float f17, float f18) {
        this.f46431f = f10;
        this.f46426a = f11;
        this.f46427b = f12;
        this.f46428c = f13;
        this.f46429d = f14;
        this.f46430e = f15;
        this.f46432g = fArr;
        this.f46433h = f16;
        this.f46434i = f17;
        this.f46435j = f18;
    }

    static n k(float[] fArr, float f10, float f11, float f12, boolean z10) {
        float d10;
        float exp;
        float[][] fArr2 = b.f46389a;
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
        return this.f46426a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float b() {
        return this.f46429d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float c() {
        return this.f46433h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float d() {
        return this.f46434i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        return this.f46431f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float f() {
        return this.f46427b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.f46430e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        return this.f46428c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float[] i() {
        return this.f46432g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f46435j;
    }
}
