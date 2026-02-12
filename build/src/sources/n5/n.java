package n5;

import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import java.util.List;
import l5.b0;
import o5.a;
import t5.k;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n implements m, a.b, k {

    /* renamed from: e  reason: collision with root package name */
    private final String f36920e;

    /* renamed from: f  reason: collision with root package name */
    private final com.airbnb.lottie.n f36921f;

    /* renamed from: g  reason: collision with root package name */
    private final k.a f36922g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36923h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36924i;

    /* renamed from: j  reason: collision with root package name */
    private final o5.a f36925j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f36926k;

    /* renamed from: l  reason: collision with root package name */
    private final o5.a f36927l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f36928m;

    /* renamed from: n  reason: collision with root package name */
    private final o5.a f36929n;

    /* renamed from: o  reason: collision with root package name */
    private final o5.a f36930o;

    /* renamed from: p  reason: collision with root package name */
    private final o5.a f36931p;

    /* renamed from: r  reason: collision with root package name */
    private boolean f36933r;

    /* renamed from: a  reason: collision with root package name */
    private final Path f36916a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Path f36917b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final PathMeasure f36918c = new PathMeasure();

    /* renamed from: d  reason: collision with root package name */
    private final float[] f36919d = new float[2];

    /* renamed from: q  reason: collision with root package name */
    private final b f36932q = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36934a;

        static {
            int[] iArr = new int[k.a.values().length];
            f36934a = iArr;
            try {
                iArr[k.a.STAR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36934a[k.a.POLYGON.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public n(com.airbnb.lottie.n nVar, u5.b bVar, t5.k kVar) {
        this.f36921f = nVar;
        this.f36920e = kVar.d();
        k.a j10 = kVar.j();
        this.f36922g = j10;
        this.f36923h = kVar.k();
        this.f36924i = kVar.l();
        o5.d a10 = kVar.g().a();
        this.f36925j = a10;
        o5.a a11 = kVar.h().a();
        this.f36926k = a11;
        o5.d a12 = kVar.i().a();
        this.f36927l = a12;
        o5.d a13 = kVar.e().a();
        this.f36929n = a13;
        o5.d a14 = kVar.f().a();
        this.f36931p = a14;
        k.a aVar = k.a.STAR;
        if (j10 == aVar) {
            this.f36928m = kVar.b().a();
            this.f36930o = kVar.c().a();
        } else {
            this.f36928m = null;
            this.f36930o = null;
        }
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        bVar.i(a13);
        bVar.i(a14);
        if (j10 == aVar) {
            bVar.i(this.f36928m);
            bVar.i(this.f36930o);
        }
        a10.a(this);
        a11.a(this);
        a12.a(this);
        a13.a(this);
        a14.a(this);
        if (j10 == aVar) {
            this.f36928m.a(this);
            this.f36930o.a(this);
        }
    }

    private void g() {
        double floatValue;
        double d10;
        float f10;
        float f11;
        float f12;
        int floor = (int) Math.floor(((Float) this.f36925j.h()).floatValue());
        o5.a aVar = this.f36927l;
        if (aVar == null) {
            floatValue = 0.0d;
        } else {
            floatValue = ((Float) aVar.h()).floatValue();
        }
        double radians = Math.toRadians(floatValue - 90.0d);
        double d11 = floor;
        float floatValue2 = ((Float) this.f36931p.h()).floatValue() / 100.0f;
        float floatValue3 = ((Float) this.f36929n.h()).floatValue();
        double d12 = floatValue3;
        float cos = (float) (Math.cos(radians) * d12);
        float sin = (float) (Math.sin(radians) * d12);
        this.f36916a.moveTo(cos, sin);
        double d13 = (float) (6.283185307179586d / d11);
        double ceil = Math.ceil(d11);
        double d14 = radians + d13;
        int i10 = 0;
        while (true) {
            double d15 = i10;
            if (d15 < ceil) {
                float cos2 = (float) (d12 * Math.cos(d14));
                float sin2 = (float) (Math.sin(d14) * d12);
                if (floatValue2 != 0.0f) {
                    d10 = ceil;
                    f10 = floatValue2;
                    double atan2 = (float) (Math.atan2(sin, cos) - 1.5707963267948966d);
                    float cos3 = (float) Math.cos(atan2);
                    float sin3 = (float) Math.sin(atan2);
                    double atan22 = (float) (Math.atan2(sin2, cos2) - 1.5707963267948966d);
                    float f13 = floatValue3 * f10 * 0.25f;
                    float f14 = f13 * cos3;
                    float f15 = f13 * sin3;
                    float cos4 = ((float) Math.cos(atan22)) * f13;
                    float sin4 = f13 * ((float) Math.sin(atan22));
                    if (d15 == d10 - 1.0d) {
                        this.f36917b.reset();
                        this.f36917b.moveTo(cos, sin);
                        float f16 = cos - f14;
                        float f17 = sin - f15;
                        float f18 = cos2 + cos4;
                        float f19 = sin2 + sin4;
                        f11 = cos2;
                        f12 = sin2;
                        this.f36917b.cubicTo(f16, f17, f18, f19, f11, f12);
                        this.f36918c.setPath(this.f36917b, false);
                        PathMeasure pathMeasure = this.f36918c;
                        pathMeasure.getPosTan(pathMeasure.getLength() * 0.9999f, this.f36919d, null);
                        Path path = this.f36916a;
                        float[] fArr = this.f36919d;
                        path.cubicTo(f16, f17, f18, f19, fArr[0], fArr[1]);
                    } else {
                        f11 = cos2;
                        f12 = sin2;
                        this.f36916a.cubicTo(cos - f14, sin - f15, f11 + cos4, f12 + sin4, f11, f12);
                    }
                    cos = f11;
                    sin = f12;
                } else {
                    cos = cos2;
                    sin = sin2;
                    d10 = ceil;
                    f10 = floatValue2;
                    if (d15 != d10 - 1.0d) {
                        this.f36916a.lineTo(cos, sin);
                    } else {
                        i10++;
                        ceil = d10;
                        floatValue2 = f10;
                    }
                }
                d14 += d13;
                i10++;
                ceil = d10;
                floatValue2 = f10;
            } else {
                PointF pointF = (PointF) this.f36926k.h();
                this.f36916a.offset(pointF.x, pointF.y);
                this.f36916a.close();
                return;
            }
        }
    }

    private void i() {
        double floatValue;
        float f10;
        float f11;
        float f12;
        float f13;
        int i10;
        float cos;
        float sin;
        float f14;
        float f15;
        double d10;
        float f16;
        float f17;
        int i11;
        float f18;
        double d11;
        float f19;
        float f20;
        double d12;
        float f21;
        float f22;
        float f23;
        float f24;
        float f25;
        float f26;
        float floatValue2 = ((Float) this.f36925j.h()).floatValue();
        o5.a aVar = this.f36927l;
        if (aVar == null) {
            floatValue = 0.0d;
        } else {
            floatValue = ((Float) aVar.h()).floatValue();
        }
        double radians = Math.toRadians(floatValue - 90.0d);
        double d13 = floatValue2;
        float f27 = (float) (6.283185307179586d / d13);
        if (this.f36924i) {
            f27 *= -1.0f;
        }
        float f28 = f27 / 2.0f;
        float f29 = floatValue2 - ((int) floatValue2);
        int i12 = (f29 > 0.0f ? 1 : (f29 == 0.0f ? 0 : -1));
        if (i12 != 0) {
            radians += (1.0f - f29) * f28;
        }
        float floatValue3 = ((Float) this.f36929n.h()).floatValue();
        float floatValue4 = ((Float) this.f36928m.h()).floatValue();
        o5.a aVar2 = this.f36930o;
        if (aVar2 != null) {
            f10 = ((Float) aVar2.h()).floatValue() / 100.0f;
        } else {
            f10 = 0.0f;
        }
        o5.a aVar3 = this.f36931p;
        if (aVar3 != null) {
            f11 = ((Float) aVar3.h()).floatValue() / 100.0f;
        } else {
            f11 = 0.0f;
        }
        if (i12 != 0) {
            f16 = ((floatValue3 - floatValue4) * f29) + floatValue4;
            f13 = 0.0f;
            i10 = i12;
            double d14 = f16;
            f12 = 2.0f;
            float cos2 = (float) (d14 * Math.cos(radians));
            sin = (float) (d14 * Math.sin(radians));
            this.f36916a.moveTo(cos2, sin);
            d10 = radians + ((f27 * f29) / 2.0f);
            f14 = f29;
            cos = cos2;
            f15 = f28;
        } else {
            f12 = 2.0f;
            f13 = 0.0f;
            i10 = i12;
            double d15 = floatValue3;
            cos = (float) (Math.cos(radians) * d15);
            sin = (float) (d15 * Math.sin(radians));
            this.f36916a.moveTo(cos, sin);
            f14 = f29;
            f15 = f28;
            d10 = radians + f15;
            f16 = 0.0f;
        }
        double ceil = Math.ceil(d13) * 2.0d;
        int i13 = 0;
        boolean z10 = false;
        double d16 = d10;
        float f30 = sin;
        float f31 = cos;
        double d17 = d16;
        while (true) {
            double d18 = i13;
            if (d18 < ceil) {
                if (z10) {
                    f17 = floatValue3;
                } else {
                    f17 = floatValue4;
                }
                int i14 = (f16 > f13 ? 1 : (f16 == f13 ? 0 : -1));
                if (i14 != 0 && d18 == ceil - 2.0d) {
                    i11 = i13;
                    f18 = (f27 * f14) / f12;
                } else {
                    i11 = i13;
                    f18 = f15;
                }
                if (i14 != 0 && d18 == ceil - 1.0d) {
                    d11 = d18;
                    f19 = f16;
                } else {
                    d11 = d18;
                    f19 = f17;
                }
                double d19 = f19;
                float cos3 = (float) (d19 * Math.cos(d17));
                float f32 = f27;
                float sin2 = (float) (d19 * Math.sin(d17));
                if (f10 == f13 && f11 == f13) {
                    this.f36916a.lineTo(cos3, sin2);
                    f26 = cos3;
                    f21 = sin2;
                    f20 = f15;
                    d12 = d17;
                } else {
                    f20 = f15;
                    d12 = d17;
                    double atan2 = (float) (Math.atan2(f30, f31) - 1.5707963267948966d);
                    float cos4 = (float) Math.cos(atan2);
                    float sin3 = (float) Math.sin(atan2);
                    float f33 = f31;
                    float f34 = f30;
                    f21 = sin2;
                    double atan22 = (float) (Math.atan2(sin2, cos3) - 1.5707963267948966d);
                    float cos5 = (float) Math.cos(atan22);
                    float sin4 = (float) Math.sin(atan22);
                    if (z10) {
                        f22 = f10;
                    } else {
                        f22 = f11;
                    }
                    if (z10) {
                        f23 = f11;
                    } else {
                        f23 = f10;
                    }
                    if (z10) {
                        f24 = floatValue4;
                    } else {
                        f24 = floatValue3;
                    }
                    if (z10) {
                        f25 = floatValue3;
                    } else {
                        f25 = floatValue4;
                    }
                    float f35 = f24 * f22 * 0.47829f;
                    float f36 = cos4 * f35;
                    float f37 = f35 * sin3;
                    float f38 = f25 * f23 * 0.47829f;
                    float f39 = cos5 * f38;
                    float f40 = f38 * sin4;
                    if (i10 != 0) {
                        if (i11 == 0) {
                            f36 *= f14;
                            f37 *= f14;
                        } else if (d11 == ceil - 1.0d) {
                            f39 *= f14;
                            f40 *= f14;
                        }
                    }
                    f26 = cos3;
                    this.f36916a.cubicTo(f33 - f36, f34 - f37, cos3 + f39, f21 + f40, f26, f21);
                }
                d17 = d12 + f18;
                z10 = !z10;
                i13 = i11 + 1;
                f15 = f20;
                f31 = f26;
                f30 = f21;
                f27 = f32;
            } else {
                PointF pointF = (PointF) this.f36926k.h();
                this.f36916a.offset(pointF.x, pointF.y);
                this.f36916a.close();
                return;
            }
        }
    }

    private void j() {
        this.f36933r = false;
        this.f36921f.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        j();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f36932q.a(uVar);
                    uVar.d(this);
                }
            }
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.a aVar;
        o5.a aVar2;
        if (obj == b0.f35568w) {
            this.f36925j.o(cVar);
        } else if (obj == b0.f35569x) {
            this.f36927l.o(cVar);
        } else if (obj == b0.f35559n) {
            this.f36926k.o(cVar);
        } else if (obj == b0.f35570y && (aVar2 = this.f36928m) != null) {
            aVar2.o(cVar);
        } else if (obj == b0.f35571z) {
            this.f36929n.o(cVar);
        } else if (obj == b0.A && (aVar = this.f36930o) != null) {
            aVar.o(cVar);
        } else if (obj == b0.B) {
            this.f36931p.o(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.c
    public String getName() {
        return this.f36920e;
    }

    @Override // n5.m
    public Path t() {
        if (this.f36933r) {
            return this.f36916a;
        }
        this.f36916a.reset();
        if (this.f36923h) {
            this.f36933r = true;
            return this.f36916a;
        }
        int i10 = a.f36934a[this.f36922g.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                g();
            }
        } else {
            i();
        }
        this.f36916a.close();
        this.f36932q.b(this.f36916a);
        this.f36933r = true;
        return this.f36916a;
    }
}
