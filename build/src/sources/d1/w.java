package d1;

import java.util.Arrays;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends d1.c {

    /* renamed from: t  reason: collision with root package name */
    public static final a f21188t = new a(null);

    /* renamed from: u  reason: collision with root package name */
    private static final i f21189u = new i() { // from class: d1.p
        @Override // d1.i
        public final double a(double d10) {
            double t10;
            t10 = w.t(d10);
            return t10;
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private final y f21190e;

    /* renamed from: f  reason: collision with root package name */
    private final float f21191f;

    /* renamed from: g  reason: collision with root package name */
    private final float f21192g;

    /* renamed from: h  reason: collision with root package name */
    private final x f21193h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f21194i;

    /* renamed from: j  reason: collision with root package name */
    private final float[] f21195j;

    /* renamed from: k  reason: collision with root package name */
    private final float[] f21196k;

    /* renamed from: l  reason: collision with root package name */
    private final i f21197l;

    /* renamed from: m  reason: collision with root package name */
    private final Function1 f21198m;

    /* renamed from: n  reason: collision with root package name */
    private final i f21199n;

    /* renamed from: o  reason: collision with root package name */
    private final i f21200o;

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f21201p;

    /* renamed from: q  reason: collision with root package name */
    private final i f21202q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f21203r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f21204s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final float e(float[] fArr) {
            float f10 = fArr[0];
            float f11 = fArr[1];
            float f12 = fArr[2];
            float f13 = fArr[3];
            float f14 = fArr[4];
            float f15 = fArr[5];
            float f16 = ((((((f10 * f13) + (f11 * f14)) + (f12 * f15)) - (f13 * f14)) - (f11 * f12)) - (f10 * f15)) * 0.5f;
            if (f16 < 0.0f) {
                return -f16;
            }
            return f16;
        }

        private final boolean f(double d10, i iVar, i iVar2) {
            if (Math.abs(iVar.a(d10) - iVar2.a(d10)) <= 0.001d) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final float[] g(float[] fArr, y yVar) {
            float f10 = fArr[0];
            float f11 = fArr[1];
            float f12 = fArr[2];
            float f13 = fArr[3];
            float f14 = fArr[4];
            float f15 = fArr[5];
            float a10 = yVar.a();
            float b10 = yVar.b();
            float f16 = 1;
            float f17 = (f16 - f10) / f11;
            float f18 = f10 / f11;
            float f19 = (f12 / f13) - f18;
            float f20 = (a10 / b10) - f18;
            float f21 = ((f16 - f12) / f13) - f17;
            float f22 = (f14 / f15) - f18;
            float f23 = (((((f16 - a10) / b10) - f17) * f19) - (f20 * f21)) / (((((f16 - f14) / f15) - f17) * f19) - (f21 * f22));
            float f24 = (f20 - (f22 * f23)) / f19;
            float f25 = (1.0f - f24) - f23;
            float f26 = f25 / f11;
            float f27 = f24 / f13;
            float f28 = f23 / f15;
            return new float[]{f26 * f10, f25, f26 * ((1.0f - f10) - f11), f27 * f12, f24, f27 * ((1.0f - f12) - f13), f28 * f14, f23, f28 * ((1.0f - f14) - f15)};
        }

        private final boolean h(float[] fArr, float[] fArr2) {
            float f10 = fArr[0];
            float f11 = fArr2[0];
            float f12 = fArr[1];
            float f13 = fArr2[1];
            float f14 = fArr[4];
            float f15 = fArr2[4];
            float f16 = fArr[5];
            float f17 = fArr2[5];
            float[] fArr3 = {f10 - f11, f12 - f13, fArr[2] - fArr2[2], fArr[3] - fArr2[3], f14 - f15, f16 - f17};
            if (i(fArr3[0], fArr3[1], f11 - f15, f13 - f17) < 0.0f || i(fArr2[0] - fArr2[2], fArr2[1] - fArr2[3], fArr3[0], fArr3[1]) < 0.0f || i(fArr3[2], fArr3[3], fArr2[2] - fArr2[0], fArr2[3] - fArr2[1]) < 0.0f || i(fArr2[2] - fArr2[4], fArr2[3] - fArr2[5], fArr3[2], fArr3[3]) < 0.0f || i(fArr3[4], fArr3[5], fArr2[4] - fArr2[2], fArr2[5] - fArr2[3]) < 0.0f || i(fArr2[4] - fArr2[0], fArr2[5] - fArr2[1], fArr3[4], fArr3[5]) < 0.0f) {
                return false;
            }
            return true;
        }

        private final float i(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean j(float[] fArr, y yVar, i iVar, i iVar2, float f10, float f11, int i10) {
            if (i10 == 0) {
                return true;
            }
            g gVar = g.f21121a;
            if (!d.g(fArr, gVar.i()) || !d.f(yVar, j.f21158a.e()) || f10 != 0.0f || f11 != 1.0f) {
                return false;
            }
            w h10 = gVar.h();
            for (double d10 = 0.0d; d10 <= 1.0d; d10 += 0.00392156862745098d) {
                if (!f(d10, iVar, h10.H()) || !f(d10, iVar2, h10.E())) {
                    return false;
                }
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean k(float[] fArr, float f10, float f11) {
            float e10 = e(fArr);
            g gVar = g.f21121a;
            if (e10 / e(gVar.f()) <= 0.9f || !h(fArr, gVar.i())) {
                if (f10 < 0.0f && f11 > 1.0f) {
                    return true;
                }
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final float[] l(float[] fArr) {
            float[] fArr2 = new float[6];
            if (fArr.length == 9) {
                float f10 = fArr[0];
                float f11 = fArr[1];
                float f12 = f10 + f11 + fArr[2];
                fArr2[0] = f10 / f12;
                fArr2[1] = f11 / f12;
                float f13 = fArr[3];
                float f14 = fArr[4];
                float f15 = f13 + f14 + fArr[5];
                fArr2[2] = f13 / f15;
                fArr2[3] = f14 / f15;
                float f16 = fArr[6];
                float f17 = fArr[7];
                float f18 = f16 + f17 + fArr[8];
                fArr2[4] = f16 / f18;
                fArr2[5] = f17 / f18;
                return fArr2;
            }
            kotlin.collections.i.m(fArr, fArr2, 0, 0, 6, 6, null);
            return fArr2;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function1 {
        b() {
            super(1);
        }

        public final Double a(double d10) {
            return Double.valueOf(w.this.E().a(kotlin.ranges.d.k(d10, w.this.f21191f, w.this.f21192g)));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            return a(((Number) obj).doubleValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends Lambda implements Function1 {
        c() {
            super(1);
        }

        public final Double a(double d10) {
            return Double.valueOf(kotlin.ranges.d.k(w.this.H().a(d10), w.this.f21191f, w.this.f21192g));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            return a(((Number) obj).doubleValue());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public w(String name, float[] primaries, y whitePoint, float[] fArr, i oetf, i eotf, float f10, float f11, x xVar, int i10) {
        super(name, d1.b.f21112a.b(), i10, null);
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(primaries, "primaries");
        Intrinsics.checkNotNullParameter(whitePoint, "whitePoint");
        Intrinsics.checkNotNullParameter(oetf, "oetf");
        Intrinsics.checkNotNullParameter(eotf, "eotf");
        this.f21190e = whitePoint;
        this.f21191f = f10;
        this.f21192g = f11;
        this.f21193h = xVar;
        this.f21197l = oetf;
        this.f21198m = new c();
        this.f21199n = new i() { // from class: d1.n
            @Override // d1.i
            public final double a(double d10) {
                double K;
                K = w.K(w.this, d10);
                return K;
            }
        };
        this.f21200o = eotf;
        this.f21201p = new b();
        this.f21202q = new i() { // from class: d1.o
            @Override // d1.i
            public final double a(double d10) {
                double C;
                C = w.C(w.this, d10);
                return C;
            }
        };
        if (primaries.length != 6 && primaries.length != 9) {
            throw new IllegalArgumentException("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
        }
        if (f10 < f11) {
            a aVar = f21188t;
            float[] l10 = aVar.l(primaries);
            this.f21194i = l10;
            if (fArr == null) {
                this.f21195j = aVar.g(l10, whitePoint);
            } else if (fArr.length == 9) {
                this.f21195j = fArr;
            } else {
                throw new IllegalArgumentException("Transform must have 9 entries! Has " + fArr.length);
            }
            this.f21196k = d.j(this.f21195j);
            this.f21203r = aVar.k(l10, f10, f11);
            this.f21204s = aVar.j(l10, whitePoint, oetf, eotf, f10, f11, i10);
            return;
        }
        throw new IllegalArgumentException("Invalid range: min=" + f10 + ", max=" + f11 + "; min must be strictly < max");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double C(w this$0, double d10) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        return this$0.f21200o.a(kotlin.ranges.d.k(d10, this$0.f21191f, this$0.f21192g));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double K(w this$0, double d10) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        return kotlin.ranges.d.k(this$0.f21197l.a(d10), this$0.f21191f, this$0.f21192g);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double u(double d10, double d11) {
        if (d11 < 0.0d) {
            d11 = 0.0d;
        }
        return Math.pow(d11, 1.0d / d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double v(double d10, double d11) {
        if (d11 < 0.0d) {
            d11 = 0.0d;
        }
        return Math.pow(d11, d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double w(x function, double d10) {
        Intrinsics.checkNotNullParameter(function, "$function");
        return d.q(d10, function.a(), function.b(), function.c(), function.d(), function.g());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double x(x function, double d10) {
        Intrinsics.checkNotNullParameter(function, "$function");
        return d.r(d10, function.a(), function.b(), function.c(), function.d(), function.e(), function.f(), function.g());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double y(x function, double d10) {
        Intrinsics.checkNotNullParameter(function, "$function");
        return d.s(d10, function.a(), function.b(), function.c(), function.d(), function.g());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double z(x function, double d10) {
        Intrinsics.checkNotNullParameter(function, "$function");
        return d.t(d10, function.a(), function.b(), function.c(), function.d(), function.e(), function.f(), function.g());
    }

    public final i D() {
        return this.f21202q;
    }

    public final i E() {
        return this.f21200o;
    }

    public final float[] F() {
        return this.f21196k;
    }

    public final i G() {
        return this.f21199n;
    }

    public final i H() {
        return this.f21197l;
    }

    public final float[] I() {
        return this.f21195j;
    }

    public final y J() {
        return this.f21190e;
    }

    @Override // d1.c
    public float c(int i10) {
        return this.f21192g;
    }

    @Override // d1.c
    public float d(int i10) {
        return this.f21191f;
    }

    @Override // d1.c
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || w.class != obj.getClass() || !super.equals(obj)) {
            return false;
        }
        w wVar = (w) obj;
        if (Float.compare(wVar.f21191f, this.f21191f) != 0 || Float.compare(wVar.f21192g, this.f21192g) != 0 || !Intrinsics.areEqual(this.f21190e, wVar.f21190e) || !Arrays.equals(this.f21194i, wVar.f21194i)) {
            return false;
        }
        x xVar = this.f21193h;
        if (xVar != null) {
            return Intrinsics.areEqual(xVar, wVar.f21193h);
        }
        if (wVar.f21193h == null) {
            return true;
        }
        if (!Intrinsics.areEqual(this.f21197l, wVar.f21197l)) {
            return false;
        }
        return Intrinsics.areEqual(this.f21200o, wVar.f21200o);
    }

    @Override // d1.c
    public boolean g() {
        return this.f21204s;
    }

    @Override // d1.c
    public long h(float f10, float f11, float f12) {
        float a10 = (float) this.f21202q.a(f10);
        float a11 = (float) this.f21202q.a(f11);
        float a12 = (float) this.f21202q.a(f12);
        return (Float.floatToIntBits(d.n(this.f21195j, a10, a11, a12)) << 32) | (Float.floatToIntBits(d.o(this.f21195j, a10, a11, a12)) & 4294967295L);
    }

    @Override // d1.c
    public int hashCode() {
        int floatToIntBits;
        int floatToIntBits2;
        int hashCode = ((((super.hashCode() * 31) + this.f21190e.hashCode()) * 31) + Arrays.hashCode(this.f21194i)) * 31;
        float f10 = this.f21191f;
        int i10 = 0;
        if (f10 == 0.0f) {
            floatToIntBits = 0;
        } else {
            floatToIntBits = Float.floatToIntBits(f10);
        }
        int i11 = (hashCode + floatToIntBits) * 31;
        float f11 = this.f21192g;
        if (f11 == 0.0f) {
            floatToIntBits2 = 0;
        } else {
            floatToIntBits2 = Float.floatToIntBits(f11);
        }
        int i12 = (i11 + floatToIntBits2) * 31;
        x xVar = this.f21193h;
        if (xVar != null) {
            i10 = xVar.hashCode();
        }
        int i13 = i12 + i10;
        if (this.f21193h == null) {
            return (((i13 * 31) + this.f21197l.hashCode()) * 31) + this.f21200o.hashCode();
        }
        return i13;
    }

    @Override // d1.c
    public float i(float f10, float f11, float f12) {
        return d.p(this.f21195j, (float) this.f21202q.a(f10), (float) this.f21202q.a(f11), (float) this.f21202q.a(f12));
    }

    @Override // d1.c
    public long j(float f10, float f11, float f12, float f13, d1.c colorSpace) {
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        return c1.b.a((float) this.f21199n.a(d.n(this.f21196k, f10, f11, f12)), (float) this.f21199n.a(d.o(this.f21196k, f10, f11, f12)), (float) this.f21199n.a(d.p(this.f21196k, f10, f11, f12)), f13, colorSpace);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double t(double d10) {
        return d10;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public w(String name, float[] primaries, y whitePoint, final x function, int i10) {
        this(name, primaries, whitePoint, null, (function.e() == 0.0d && function.f() == 0.0d) ? new i() { // from class: d1.s
            @Override // d1.i
            public final double a(double d10) {
                double w10;
                w10 = w.w(x.this, d10);
                return w10;
            }
        } : new i() { // from class: d1.t
            @Override // d1.i
            public final double a(double d10) {
                double x10;
                x10 = w.x(x.this, d10);
                return x10;
            }
        }, (function.e() == 0.0d && function.f() == 0.0d) ? new i() { // from class: d1.u
            @Override // d1.i
            public final double a(double d10) {
                double y10;
                y10 = w.y(x.this, d10);
                return y10;
            }
        } : new i() { // from class: d1.v
            @Override // d1.i
            public final double a(double d10) {
                double z10;
                z10 = w.z(x.this, d10);
                return z10;
            }
        }, 0.0f, 1.0f, function, i10);
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(primaries, "primaries");
        Intrinsics.checkNotNullParameter(whitePoint, "whitePoint");
        Intrinsics.checkNotNullParameter(function, "function");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public w(java.lang.String r20, float[] r21, d1.y r22, final double r23, float r25, float r26, int r27) {
        /*
            r19 = this;
            r1 = r23
            java.lang.String r0 = "name"
            r3 = r20
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.lang.String r0 = "primaries"
            r4 = r21
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = "whitePoint"
            r5 = r22
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            r6 = 4607182418800017408(0x3ff0000000000000, double:1.0)
            int r0 = (r1 > r6 ? 1 : (r1 == r6 ? 0 : -1))
            if (r0 != 0) goto L22
            d1.i r6 = d1.w.f21189u
        L1f:
            r17 = r6
            goto L28
        L22:
            d1.q r6 = new d1.q
            r6.<init>()
            goto L1f
        L28:
            if (r0 != 0) goto L2f
            d1.i r0 = d1.w.f21189u
        L2c:
            r18 = r0
            goto L35
        L2f:
            d1.r r0 = new d1.r
            r0.<init>()
            goto L2c
        L35:
            d1.x r10 = new d1.x
            r15 = 96
            r16 = 0
            r3 = 4607182418800017408(0x3ff0000000000000, double:1.0)
            r5 = 0
            r7 = 0
            r0 = r10
            r9 = 0
            r11 = 0
            r13 = 0
            r0.<init>(r1, r3, r5, r7, r9, r11, r13, r15, r16)
            r5 = 0
            r1 = r19
            r2 = r20
            r3 = r21
            r4 = r22
            r8 = r25
            r9 = r26
            r11 = r27
            r10 = r0
            r6 = r17
            r7 = r18
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9, r10, r11)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: d1.w.<init>(java.lang.String, float[], d1.y, double, float, float, int):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public w(w colorSpace, float[] transform, y whitePoint) {
        this(colorSpace.f(), colorSpace.f21194i, whitePoint, transform, colorSpace.f21197l, colorSpace.f21200o, colorSpace.f21191f, colorSpace.f21192g, colorSpace.f21193h, -1);
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        Intrinsics.checkNotNullParameter(transform, "transform");
        Intrinsics.checkNotNullParameter(whitePoint, "whitePoint");
    }
}
