package h1;

import androidx.constraintlayout.core.Metrics;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import h1.h;
import java.util.Arrays;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: s  reason: collision with root package name */
    public static boolean f24861s = false;

    /* renamed from: t  reason: collision with root package name */
    public static boolean f24862t = true;

    /* renamed from: u  reason: collision with root package name */
    public static boolean f24863u = true;

    /* renamed from: v  reason: collision with root package name */
    public static boolean f24864v = true;

    /* renamed from: w  reason: collision with root package name */
    public static boolean f24865w = false;

    /* renamed from: x  reason: collision with root package name */
    public static Metrics f24866x;

    /* renamed from: y  reason: collision with root package name */
    public static long f24867y;

    /* renamed from: z  reason: collision with root package name */
    public static long f24868z;

    /* renamed from: e  reason: collision with root package name */
    private a f24873e;

    /* renamed from: o  reason: collision with root package name */
    final c f24883o;

    /* renamed from: r  reason: collision with root package name */
    private a f24886r;

    /* renamed from: a  reason: collision with root package name */
    private int f24869a = 1000;

    /* renamed from: b  reason: collision with root package name */
    public boolean f24870b = false;

    /* renamed from: c  reason: collision with root package name */
    int f24871c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f24872d = null;

    /* renamed from: f  reason: collision with root package name */
    private int f24874f = 32;

    /* renamed from: g  reason: collision with root package name */
    private int f24875g = 32;

    /* renamed from: i  reason: collision with root package name */
    public boolean f24877i = false;

    /* renamed from: j  reason: collision with root package name */
    public boolean f24878j = false;

    /* renamed from: k  reason: collision with root package name */
    private boolean[] f24879k = new boolean[32];

    /* renamed from: l  reason: collision with root package name */
    int f24880l = 1;

    /* renamed from: m  reason: collision with root package name */
    int f24881m = 0;

    /* renamed from: n  reason: collision with root package name */
    private int f24882n = 32;

    /* renamed from: p  reason: collision with root package name */
    private h[] f24884p = new h[1000];

    /* renamed from: q  reason: collision with root package name */
    private int f24885q = 0;

    /* renamed from: h  reason: collision with root package name */
    h1.b[] f24876h = new h1.b[32];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(h hVar);

        void b(a aVar);

        h c(d dVar, boolean[] zArr);

        void clear();

        h getKey();

        boolean isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends h1.b {
        b(c cVar) {
            this.f24855e = new i(this, cVar);
        }
    }

    public d() {
        F();
        c cVar = new c();
        this.f24883o = cVar;
        this.f24873e = new g(cVar);
        if (f24865w) {
            this.f24886r = new b(cVar);
        } else {
            this.f24886r = new h1.b(cVar);
        }
    }

    private void B() {
        int i10 = this.f24874f * 2;
        this.f24874f = i10;
        this.f24876h = (h1.b[]) Arrays.copyOf(this.f24876h, i10);
        c cVar = this.f24883o;
        cVar.f24860d = (h[]) Arrays.copyOf(cVar.f24860d, this.f24874f);
        int i11 = this.f24874f;
        this.f24879k = new boolean[i11];
        this.f24875g = i11;
        this.f24882n = i11;
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2371f++;
            metrics.f2382q = Math.max(metrics.f2382q, i11);
            Metrics metrics2 = f24866x;
            metrics2.f2391z = metrics2.f2382q;
        }
    }

    private int E(a aVar, boolean z10) {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2375j++;
        }
        for (int i10 = 0; i10 < this.f24880l; i10++) {
            this.f24879k[i10] = false;
        }
        boolean z11 = false;
        int i11 = 0;
        while (!z11) {
            Metrics metrics2 = f24866x;
            if (metrics2 != null) {
                metrics2.f2376k++;
            }
            i11++;
            if (i11 < this.f24880l * 2) {
                if (aVar.getKey() != null) {
                    this.f24879k[aVar.getKey().f24901i] = true;
                }
                h c10 = aVar.c(this, this.f24879k);
                if (c10 != null) {
                    boolean[] zArr = this.f24879k;
                    int i12 = c10.f24901i;
                    if (!zArr[i12]) {
                        zArr[i12] = true;
                    }
                }
                if (c10 != null) {
                    float f10 = Float.MAX_VALUE;
                    int i13 = -1;
                    for (int i14 = 0; i14 < this.f24881m; i14++) {
                        h1.b bVar = this.f24876h[i14];
                        if (bVar.f24851a.f24908u != h.a.UNRESTRICTED && !bVar.f24856f && bVar.t(c10)) {
                            float i15 = bVar.f24855e.i(c10);
                            if (i15 < 0.0f) {
                                float f11 = (-bVar.f24852b) / i15;
                                if (f11 < f10) {
                                    i13 = i14;
                                    f10 = f11;
                                }
                            }
                        }
                    }
                    if (i13 > -1) {
                        h1.b bVar2 = this.f24876h[i13];
                        bVar2.f24851a.f24902o = -1;
                        Metrics metrics3 = f24866x;
                        if (metrics3 != null) {
                            metrics3.f2377l++;
                        }
                        bVar2.x(c10);
                        h hVar = bVar2.f24851a;
                        hVar.f24902o = i13;
                        hVar.k(this, bVar2);
                    }
                } else {
                    z11 = true;
                }
            }
            return i11;
        }
        return i11;
    }

    private void F() {
        int i10 = 0;
        if (f24865w) {
            while (i10 < this.f24881m) {
                h1.b bVar = this.f24876h[i10];
                if (bVar != null) {
                    this.f24883o.f24857a.release(bVar);
                }
                this.f24876h[i10] = null;
                i10++;
            }
            return;
        }
        while (i10 < this.f24881m) {
            h1.b bVar2 = this.f24876h[i10];
            if (bVar2 != null) {
                this.f24883o.f24858b.release(bVar2);
            }
            this.f24876h[i10] = null;
            i10++;
        }
    }

    private h a(h.a aVar, String str) {
        h hVar = (h) this.f24883o.f24859c.acquire();
        if (hVar == null) {
            hVar = new h(aVar, str);
            hVar.i(aVar, str);
        } else {
            hVar.g();
            hVar.i(aVar, str);
        }
        int i10 = this.f24885q;
        int i11 = this.f24869a;
        if (i10 >= i11) {
            int i12 = i11 * 2;
            this.f24869a = i12;
            this.f24884p = (h[]) Arrays.copyOf(this.f24884p, i12);
        }
        h[] hVarArr = this.f24884p;
        int i13 = this.f24885q;
        this.f24885q = i13 + 1;
        hVarArr[i13] = hVar;
        return hVar;
    }

    private void l(h1.b bVar) {
        int i10;
        if (f24863u && bVar.f24856f) {
            bVar.f24851a.h(this, bVar.f24852b);
        } else {
            h1.b[] bVarArr = this.f24876h;
            int i11 = this.f24881m;
            bVarArr[i11] = bVar;
            h hVar = bVar.f24851a;
            hVar.f24902o = i11;
            this.f24881m = i11 + 1;
            hVar.k(this, bVar);
        }
        if (f24863u && this.f24870b) {
            int i12 = 0;
            while (i12 < this.f24881m) {
                if (this.f24876h[i12] == null) {
                    System.out.println("WTF");
                }
                h1.b bVar2 = this.f24876h[i12];
                if (bVar2 != null && bVar2.f24856f) {
                    bVar2.f24851a.h(this, bVar2.f24852b);
                    if (f24865w) {
                        this.f24883o.f24857a.release(bVar2);
                    } else {
                        this.f24883o.f24858b.release(bVar2);
                    }
                    this.f24876h[i12] = null;
                    int i13 = i12 + 1;
                    int i14 = i13;
                    while (true) {
                        i10 = this.f24881m;
                        if (i13 >= i10) {
                            break;
                        }
                        h1.b[] bVarArr2 = this.f24876h;
                        int i15 = i13 - 1;
                        h1.b bVar3 = bVarArr2[i13];
                        bVarArr2[i15] = bVar3;
                        h hVar2 = bVar3.f24851a;
                        if (hVar2.f24902o == i13) {
                            hVar2.f24902o = i15;
                        }
                        i14 = i13;
                        i13++;
                    }
                    if (i14 < i10) {
                        this.f24876h[i14] = null;
                    }
                    this.f24881m = i10 - 1;
                    i12--;
                }
                i12++;
            }
            this.f24870b = false;
        }
    }

    private void n() {
        for (int i10 = 0; i10 < this.f24881m; i10++) {
            h1.b bVar = this.f24876h[i10];
            bVar.f24851a.f24904q = bVar.f24852b;
        }
    }

    public static h1.b s(d dVar, h hVar, h hVar2, float f10) {
        return dVar.r().j(hVar, hVar2, f10);
    }

    private int u(a aVar) {
        float f10;
        long j10;
        for (int i10 = 0; i10 < this.f24881m; i10++) {
            h1.b bVar = this.f24876h[i10];
            if (bVar.f24851a.f24908u != h.a.UNRESTRICTED) {
                float f11 = 0.0f;
                if (bVar.f24852b < 0.0f) {
                    boolean z10 = false;
                    int i11 = 0;
                    while (!z10) {
                        Metrics metrics = f24866x;
                        long j11 = 1;
                        if (metrics != null) {
                            metrics.f2378m++;
                        }
                        i11++;
                        float f12 = Float.MAX_VALUE;
                        int i12 = 0;
                        int i13 = -1;
                        int i14 = -1;
                        int i15 = 0;
                        while (true) {
                            if (i12 >= this.f24881m) {
                                break;
                            }
                            h1.b bVar2 = this.f24876h[i12];
                            if (bVar2.f24851a.f24908u != h.a.UNRESTRICTED && !bVar2.f24856f && bVar2.f24852b < f11) {
                                if (f24864v) {
                                    int h10 = bVar2.f24855e.h();
                                    int i16 = 0;
                                    while (i16 < h10) {
                                        float f13 = f11;
                                        h c10 = bVar2.f24855e.c(i16);
                                        long j12 = j11;
                                        float i17 = bVar2.f24855e.i(c10);
                                        if (i17 > f13) {
                                            for (int i18 = 0; i18 < 9; i18++) {
                                                float f14 = c10.f24906s[i18] / i17;
                                                if ((f14 < f12 && i18 == i15) || i18 > i15) {
                                                    i15 = i18;
                                                    i14 = c10.f24901i;
                                                    i13 = i12;
                                                    f12 = f14;
                                                }
                                            }
                                        }
                                        i16++;
                                        f11 = f13;
                                        j11 = j12;
                                    }
                                } else {
                                    f10 = f11;
                                    j10 = j11;
                                    for (int i19 = 1; i19 < this.f24880l; i19++) {
                                        h hVar = this.f24883o.f24860d[i19];
                                        float i20 = bVar2.f24855e.i(hVar);
                                        if (i20 > f10) {
                                            for (int i21 = 0; i21 < 9; i21++) {
                                                float f15 = hVar.f24906s[i21] / i20;
                                                if ((f15 < f12 && i21 == i15) || i21 > i15) {
                                                    i15 = i21;
                                                    f12 = f15;
                                                    i13 = i12;
                                                    i14 = i19;
                                                }
                                            }
                                        }
                                    }
                                    i12++;
                                    f11 = f10;
                                    j11 = j10;
                                }
                            }
                            f10 = f11;
                            j10 = j11;
                            i12++;
                            f11 = f10;
                            j11 = j10;
                        }
                        float f16 = f11;
                        long j13 = j11;
                        if (i13 != -1) {
                            h1.b bVar3 = this.f24876h[i13];
                            bVar3.f24851a.f24902o = -1;
                            Metrics metrics2 = f24866x;
                            if (metrics2 != null) {
                                metrics2.f2377l += j13;
                            }
                            bVar3.x(this.f24883o.f24860d[i14]);
                            h hVar2 = bVar3.f24851a;
                            hVar2.f24902o = i13;
                            hVar2.k(this, bVar3);
                        } else {
                            z10 = true;
                        }
                        if (i11 > this.f24880l / 2) {
                            z10 = true;
                        }
                        f11 = f16;
                    }
                    return i11;
                }
            }
        }
        return 0;
    }

    public static Metrics x() {
        return f24866x;
    }

    public int A(Object obj) {
        h i10 = ((androidx.constraintlayout.core.widgets.d) obj).i();
        if (i10 != null) {
            return (int) (i10.f24904q + 0.5f);
        }
        return 0;
    }

    public void C() {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2372g++;
        }
        if (this.f24873e.isEmpty()) {
            n();
        } else if (!this.f24877i && !this.f24878j) {
            D(this.f24873e);
        } else {
            Metrics metrics2 = f24866x;
            if (metrics2 != null) {
                metrics2.f2384s++;
            }
            for (int i10 = 0; i10 < this.f24881m; i10++) {
                if (!this.f24876h[i10].f24856f) {
                    D(this.f24873e);
                    return;
                }
            }
            Metrics metrics3 = f24866x;
            if (metrics3 != null) {
                metrics3.f2383r++;
            }
            n();
        }
    }

    void D(a aVar) {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2387v++;
            metrics.f2388w = Math.max(metrics.f2388w, this.f24880l);
            Metrics metrics2 = f24866x;
            metrics2.f2389x = Math.max(metrics2.f2389x, this.f24881m);
        }
        u(aVar);
        E(aVar, false);
        n();
    }

    public void G() {
        c cVar;
        int i10 = 0;
        while (true) {
            cVar = this.f24883o;
            h[] hVarArr = cVar.f24860d;
            if (i10 >= hVarArr.length) {
                break;
            }
            h hVar = hVarArr[i10];
            if (hVar != null) {
                hVar.g();
            }
            i10++;
        }
        cVar.f24859c.a(this.f24884p, this.f24885q);
        this.f24885q = 0;
        Arrays.fill(this.f24883o.f24860d, (Object) null);
        HashMap hashMap = this.f24872d;
        if (hashMap != null) {
            hashMap.clear();
        }
        this.f24871c = 0;
        this.f24873e.clear();
        this.f24880l = 1;
        for (int i11 = 0; i11 < this.f24881m; i11++) {
            h1.b bVar = this.f24876h[i11];
            if (bVar != null) {
                bVar.f24853c = false;
            }
        }
        F();
        this.f24881m = 0;
        if (f24865w) {
            this.f24886r = new b(this.f24883o);
        } else {
            this.f24886r = new h1.b(this.f24883o);
        }
    }

    public void b(ConstraintWidget constraintWidget, ConstraintWidget constraintWidget2, float f10, int i10) {
        d.a aVar = d.a.LEFT;
        h q10 = q(constraintWidget.o(aVar));
        d.a aVar2 = d.a.TOP;
        h q11 = q(constraintWidget.o(aVar2));
        d.a aVar3 = d.a.RIGHT;
        h q12 = q(constraintWidget.o(aVar3));
        d.a aVar4 = d.a.BOTTOM;
        h q13 = q(constraintWidget.o(aVar4));
        h q14 = q(constraintWidget2.o(aVar));
        h q15 = q(constraintWidget2.o(aVar2));
        h q16 = q(constraintWidget2.o(aVar3));
        h q17 = q(constraintWidget2.o(aVar4));
        h1.b r10 = r();
        double d10 = f10;
        double d11 = i10;
        r10.q(q11, q13, q15, q17, (float) (Math.sin(d10) * d11));
        d(r10);
        h1.b r11 = r();
        r11.q(q10, q12, q14, q16, (float) (Math.cos(d10) * d11));
        d(r11);
    }

    public void c(h hVar, h hVar2, int i10, float f10, h hVar3, h hVar4, int i11, int i12) {
        h1.b r10 = r();
        r10.h(hVar, hVar2, i10, f10, hVar3, hVar4, i11);
        if (i12 != 8) {
            r10.d(this, i12);
        }
        d(r10);
    }

    /* JADX WARN: Removed duplicated region for block: B:45:0x00a2  */
    /* JADX WARN: Removed duplicated region for block: B:52:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(h1.b r8) {
        /*
            r7 = this;
            if (r8 != 0) goto L4
            goto La8
        L4:
            androidx.constraintlayout.core.Metrics r0 = h1.d.f24866x
            r1 = 1
            if (r0 == 0) goto L18
            long r3 = r0.f2373h
            long r3 = r3 + r1
            r0.f2373h = r3
            boolean r3 = r8.f24856f
            if (r3 == 0) goto L18
            long r3 = r0.f2374i
            long r3 = r3 + r1
            r0.f2374i = r3
        L18:
            int r0 = r7.f24881m
            r3 = 1
            int r0 = r0 + r3
            int r4 = r7.f24882n
            if (r0 >= r4) goto L27
            int r0 = r7.f24880l
            int r0 = r0 + r3
            int r4 = r7.f24875g
            if (r0 < r4) goto L2a
        L27:
            r7.B()
        L2a:
            boolean r0 = r8.f24856f
            r4 = 0
            if (r0 != 0) goto La3
            r8.D(r7)
            boolean r0 = r8.isEmpty()
            if (r0 == 0) goto L3a
            goto La8
        L3a:
            r8.r()
            boolean r0 = r8.f(r7)
            if (r0 == 0) goto L9a
            h1.h r0 = r7.p()
            r8.f24851a = r0
            int r5 = r7.f24881m
            r7.l(r8)
            int r6 = r7.f24881m
            int r5 = r5 + r3
            if (r6 != r5) goto L9a
            h1.d$a r4 = r7.f24886r
            r4.b(r8)
            h1.d$a r4 = r7.f24886r
            r7.E(r4, r3)
            int r4 = r0.f24902o
            r5 = -1
            if (r4 != r5) goto L9b
            h1.h r4 = r8.f24851a
            if (r4 != r0) goto L78
            h1.h r0 = r8.v(r0)
            if (r0 == 0) goto L78
            androidx.constraintlayout.core.Metrics r4 = h1.d.f24866x
            if (r4 == 0) goto L75
            long r5 = r4.f2377l
            long r5 = r5 + r1
            r4.f2377l = r5
        L75:
            r8.x(r0)
        L78:
            boolean r0 = r8.f24856f
            if (r0 != 0) goto L81
            h1.h r0 = r8.f24851a
            r0.k(r7, r8)
        L81:
            boolean r0 = h1.d.f24865w
            if (r0 == 0) goto L8d
            h1.c r0 = r7.f24883o
            h1.e r0 = r0.f24857a
            r0.release(r8)
            goto L94
        L8d:
            h1.c r0 = r7.f24883o
            h1.e r0 = r0.f24858b
            r0.release(r8)
        L94:
            int r0 = r7.f24881m
            int r0 = r0 - r3
            r7.f24881m = r0
            goto L9b
        L9a:
            r3 = r4
        L9b:
            boolean r0 = r8.s()
            if (r0 != 0) goto La2
            goto La8
        La2:
            r4 = r3
        La3:
            if (r4 != 0) goto La8
            r7.l(r8)
        La8:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: h1.d.d(h1.b):void");
    }

    public h1.b e(h hVar, h hVar2, int i10, int i11) {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.P++;
        }
        if (f24862t && i11 == 8 && hVar2.f24905r && hVar.f24902o == -1) {
            hVar.h(this, hVar2.f24904q + i10);
            return null;
        }
        h1.b r10 = r();
        r10.n(hVar, hVar2, i10);
        if (i11 != 8) {
            r10.d(this, i11);
        }
        d(r10);
        return r10;
    }

    public void f(h hVar, int i10) {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.P++;
        }
        if (f24862t && hVar.f24902o == -1) {
            float f10 = i10;
            hVar.h(this, f10);
            for (int i11 = 0; i11 < this.f24871c + 1; i11++) {
                h hVar2 = this.f24883o.f24860d[i11];
                if (hVar2 != null && hVar2.f24912y && hVar2.f24913z == hVar.f24901i) {
                    hVar2.h(this, hVar2.A + f10);
                }
            }
            return;
        }
        int i12 = hVar.f24902o;
        if (i12 != -1) {
            h1.b bVar = this.f24876h[i12];
            if (bVar.f24856f) {
                bVar.f24852b = i10;
                return;
            } else if (bVar.f24855e.h() == 0) {
                bVar.f24856f = true;
                bVar.f24852b = i10;
                return;
            } else {
                h1.b r10 = r();
                r10.m(hVar, i10);
                d(r10);
                return;
            }
        }
        h1.b r11 = r();
        r11.i(hVar, i10);
        d(r11);
    }

    public void g(h hVar, h hVar2, int i10, boolean z10) {
        h1.b r10 = r();
        h t10 = t();
        t10.f24903p = 0;
        r10.o(hVar, hVar2, t10, i10);
        d(r10);
    }

    public void h(h hVar, h hVar2, int i10, int i11) {
        h1.b r10 = r();
        h t10 = t();
        t10.f24903p = 0;
        r10.o(hVar, hVar2, t10, i10);
        if (i11 != 8) {
            m(r10, (int) (r10.f24855e.i(t10) * (-1.0f)), i11);
        }
        d(r10);
    }

    public void i(h hVar, h hVar2, int i10, boolean z10) {
        h1.b r10 = r();
        h t10 = t();
        t10.f24903p = 0;
        r10.p(hVar, hVar2, t10, i10);
        d(r10);
    }

    public void j(h hVar, h hVar2, int i10, int i11) {
        h1.b r10 = r();
        h t10 = t();
        t10.f24903p = 0;
        r10.p(hVar, hVar2, t10, i10);
        if (i11 != 8) {
            m(r10, (int) (r10.f24855e.i(t10) * (-1.0f)), i11);
        }
        d(r10);
    }

    public void k(h hVar, h hVar2, h hVar3, h hVar4, float f10, int i10) {
        h1.b r10 = r();
        r10.k(hVar, hVar2, hVar3, hVar4, f10);
        if (i10 != 8) {
            r10.d(this, i10);
        }
        d(r10);
    }

    void m(h1.b bVar, int i10, int i11) {
        bVar.e(o(i11, null), i10);
    }

    public h o(int i10, String str) {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2379n++;
        }
        if (this.f24880l + 1 >= this.f24875g) {
            B();
        }
        h a10 = a(h.a.ERROR, str);
        int i11 = this.f24871c + 1;
        this.f24871c = i11;
        this.f24880l++;
        a10.f24901i = i11;
        a10.f24903p = i10;
        this.f24883o.f24860d[i11] = a10;
        this.f24873e.a(a10);
        return a10;
    }

    public h p() {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2381p++;
        }
        if (this.f24880l + 1 >= this.f24875g) {
            B();
        }
        h a10 = a(h.a.SLACK, null);
        int i10 = this.f24871c + 1;
        this.f24871c = i10;
        this.f24880l++;
        a10.f24901i = i10;
        this.f24883o.f24860d[i10] = a10;
        return a10;
    }

    public h q(Object obj) {
        h hVar = null;
        if (obj == null) {
            return null;
        }
        if (this.f24880l + 1 >= this.f24875g) {
            B();
        }
        if (obj instanceof androidx.constraintlayout.core.widgets.d) {
            androidx.constraintlayout.core.widgets.d dVar = (androidx.constraintlayout.core.widgets.d) obj;
            hVar = dVar.i();
            if (hVar == null) {
                dVar.s(this.f24883o);
                hVar = dVar.i();
            }
            int i10 = hVar.f24901i;
            if (i10 != -1 && i10 <= this.f24871c && this.f24883o.f24860d[i10] != null) {
                return hVar;
            }
            if (i10 != -1) {
                hVar.g();
            }
            int i11 = this.f24871c + 1;
            this.f24871c = i11;
            this.f24880l++;
            hVar.f24901i = i11;
            hVar.f24908u = h.a.UNRESTRICTED;
            this.f24883o.f24860d[i11] = hVar;
        }
        return hVar;
    }

    public h1.b r() {
        h1.b bVar;
        if (f24865w) {
            bVar = (h1.b) this.f24883o.f24857a.acquire();
            if (bVar == null) {
                bVar = new b(this.f24883o);
                f24868z++;
            } else {
                bVar.y();
            }
        } else {
            bVar = (h1.b) this.f24883o.f24858b.acquire();
            if (bVar == null) {
                bVar = new h1.b(this.f24883o);
                f24867y++;
            } else {
                bVar.y();
            }
        }
        h.e();
        return bVar;
    }

    public h t() {
        Metrics metrics = f24866x;
        if (metrics != null) {
            metrics.f2380o++;
        }
        if (this.f24880l + 1 >= this.f24875g) {
            B();
        }
        h a10 = a(h.a.SLACK, null);
        int i10 = this.f24871c + 1;
        this.f24871c = i10;
        this.f24880l++;
        a10.f24901i = i10;
        this.f24883o.f24860d[i10] = a10;
        return a10;
    }

    public void v(Metrics metrics) {
        f24866x = metrics;
    }

    public c w() {
        return this.f24883o;
    }

    public int y() {
        return this.f24881m;
    }

    public int z() {
        return this.f24871c;
    }
}
