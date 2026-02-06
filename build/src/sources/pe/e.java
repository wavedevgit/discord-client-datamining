package pe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    public final a f43813a;

    /* renamed from: b  reason: collision with root package name */
    public final a f43814b;

    /* renamed from: c  reason: collision with root package name */
    public final int f43815c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f43816d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final b[] f43817a;

        public a(b... bVarArr) {
            this.f43817a = bVarArr;
        }

        public b a(int i10) {
            return this.f43817a[i10];
        }

        public int b() {
            return this.f43817a.length;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f43818a;

        /* renamed from: b  reason: collision with root package name */
        public final int f43819b;

        /* renamed from: c  reason: collision with root package name */
        public final float[] f43820c;

        /* renamed from: d  reason: collision with root package name */
        public final float[] f43821d;

        public b(int i10, float[] fArr, float[] fArr2, int i11) {
            boolean z10;
            this.f43818a = i10;
            if (fArr.length * 2 == fArr2.length * 3) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f43820c = fArr;
            this.f43821d = fArr2;
            this.f43819b = i11;
        }

        public int a() {
            return this.f43820c.length / 3;
        }
    }

    public e(a aVar, int i10) {
        this(aVar, aVar, i10);
    }

    public static e a(float f10, int i10, int i11, float f11, float f12, int i12) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        float f13;
        int i13;
        int i14 = i10;
        if (f10 > 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (i14 >= 1) {
            z11 = true;
        } else {
            z11 = false;
        }
        ne.a.a(z11);
        if (i11 >= 1) {
            z12 = true;
        } else {
            z12 = false;
        }
        ne.a.a(z12);
        if (f11 > 0.0f && f11 <= 180.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        ne.a.a(z13);
        if (f12 > 0.0f && f12 <= 360.0f) {
            z14 = true;
        } else {
            z14 = false;
        }
        ne.a.a(z14);
        float radians = (float) Math.toRadians(f11);
        float radians2 = (float) Math.toRadians(f12);
        float f14 = radians / i14;
        float f15 = radians2 / i11;
        int i15 = i11 + 1;
        int i16 = ((i15 * 2) + 2) * i14;
        float[] fArr = new float[i16 * 3];
        float[] fArr2 = new float[i16 * 2];
        int i17 = 0;
        int i18 = 0;
        int i19 = 0;
        while (i17 < i14) {
            float f16 = radians / 2.0f;
            float f17 = (i17 * f14) - f16;
            int i20 = i17 + 1;
            float f18 = (i20 * f14) - f16;
            int i21 = 0;
            while (i21 < i15) {
                float f19 = radians;
                float f20 = radians2;
                int i22 = 0;
                int i23 = 2;
                while (i22 < i23) {
                    if (i22 == 0) {
                        f13 = f17;
                    } else {
                        f13 = f18;
                    }
                    float f21 = f14;
                    float f22 = i21 * f15;
                    float f23 = f15;
                    float f24 = f17;
                    double d10 = f10;
                    double d11 = (f22 + 3.1415927f) - (f20 / 2.0f);
                    double d12 = f13;
                    fArr[i18] = -((float) (Math.cos(d12) * Math.sin(d11) * d10));
                    fArr[i18 + 1] = (float) (d10 * Math.sin(d12));
                    int i24 = i18 + 3;
                    fArr[i18 + 2] = (float) (d10 * Math.cos(d11) * Math.cos(d12));
                    fArr2[i19] = f22 / f20;
                    int i25 = i19 + 2;
                    fArr2[i19 + 1] = ((i17 + i22) * f21) / f19;
                    if ((i21 == 0 && i22 == 0) || (i21 == i11 && i22 == 1)) {
                        System.arraycopy(fArr, i18, fArr, i24, 3);
                        i18 += 6;
                        i13 = 2;
                        System.arraycopy(fArr2, i19, fArr2, i25, 2);
                        i19 += 4;
                    } else {
                        i13 = 2;
                        i18 = i24;
                        i19 = i25;
                    }
                    i22++;
                    i23 = i13;
                    f14 = f21;
                    f15 = f23;
                    f17 = f24;
                }
                i21++;
                radians2 = f20;
                radians = f19;
                f14 = f14;
            }
            i14 = i10;
            i17 = i20;
        }
        return new e(new a(new b(0, fArr, fArr2, 1)), i12);
    }

    public static e b(int i10) {
        return a(50.0f, 36, 72, 180.0f, 360.0f, i10);
    }

    public e(a aVar, a aVar2, int i10) {
        this.f43813a = aVar;
        this.f43814b = aVar2;
        this.f43815c = i10;
        this.f43816d = aVar == aVar2;
    }
}
