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
    public static boolean f26080s = false;

    /* renamed from: t  reason: collision with root package name */
    public static boolean f26081t = true;

    /* renamed from: u  reason: collision with root package name */
    public static boolean f26082u = true;

    /* renamed from: v  reason: collision with root package name */
    public static boolean f26083v = true;

    /* renamed from: w  reason: collision with root package name */
    public static boolean f26084w = false;

    /* renamed from: x  reason: collision with root package name */
    public static Metrics f26085x;

    /* renamed from: y  reason: collision with root package name */
    public static long f26086y;

    /* renamed from: z  reason: collision with root package name */
    public static long f26087z;

    /* renamed from: e  reason: collision with root package name */
    private a f26092e;

    /* renamed from: o  reason: collision with root package name */
    final c f26102o;

    /* renamed from: r  reason: collision with root package name */
    private a f26105r;

    /* renamed from: a  reason: collision with root package name */
    private int f26088a = 1000;

    /* renamed from: b  reason: collision with root package name */
    public boolean f26089b = false;

    /* renamed from: c  reason: collision with root package name */
    int f26090c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f26091d = null;

    /* renamed from: f  reason: collision with root package name */
    private int f26093f = 32;

    /* renamed from: g  reason: collision with root package name */
    private int f26094g = 32;

    /* renamed from: i  reason: collision with root package name */
    public boolean f26096i = false;

    /* renamed from: j  reason: collision with root package name */
    public boolean f26097j = false;

    /* renamed from: k  reason: collision with root package name */
    private boolean[] f26098k = new boolean[32];

    /* renamed from: l  reason: collision with root package name */
    int f26099l = 1;

    /* renamed from: m  reason: collision with root package name */
    int f26100m = 0;

    /* renamed from: n  reason: collision with root package name */
    private int f26101n = 32;

    /* renamed from: p  reason: collision with root package name */
    private h[] f26103p = new h[1000];

    /* renamed from: q  reason: collision with root package name */
    private int f26104q = 0;

    /* renamed from: h  reason: collision with root package name */
    h1.b[] f26095h = new h1.b[32];

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
            this.f26074e = new i(this, cVar);
        }
    }

    public d() {
        F();
        c cVar = new c();
        this.f26102o = cVar;
        this.f26092e = new g(cVar);
        if (f26084w) {
            this.f26105r = new b(cVar);
        } else {
            this.f26105r = new h1.b(cVar);
        }
    }

    private void B() {
        int i10 = this.f26093f * 2;
        this.f26093f = i10;
        this.f26095h = (h1.b[]) Arrays.copyOf(this.f26095h, i10);
        c cVar = this.f26102o;
        cVar.f26079d = (h[]) Arrays.copyOf(cVar.f26079d, this.f26093f);
        int i11 = this.f26093f;
        this.f26098k = new boolean[i11];
        this.f26094g = i11;
        this.f26101n = i11;
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2374f++;
            metrics.f2385q = Math.max(metrics.f2385q, i11);
            Metrics metrics2 = f26085x;
            metrics2.f2394z = metrics2.f2385q;
        }
    }

    private int E(a aVar, boolean z10) {
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2378j++;
        }
        for (int i10 = 0; i10 < this.f26099l; i10++) {
            this.f26098k[i10] = false;
        }
        boolean z11 = false;
        int i11 = 0;
        while (!z11) {
            Metrics metrics2 = f26085x;
            if (metrics2 != null) {
                metrics2.f2379k++;
            }
            i11++;
            if (i11 < this.f26099l * 2) {
                if (aVar.getKey() != null) {
                    this.f26098k[aVar.getKey().f26120i] = true;
                }
                h c10 = aVar.c(this, this.f26098k);
                if (c10 != null) {
                    boolean[] zArr = this.f26098k;
                    int i12 = c10.f26120i;
                    if (!zArr[i12]) {
                        zArr[i12] = true;
                    }
                }
                if (c10 != null) {
                    float f10 = Float.MAX_VALUE;
                    int i13 = -1;
                    for (int i14 = 0; i14 < this.f26100m; i14++) {
                        h1.b bVar = this.f26095h[i14];
                        if (bVar.f26070a.f26127u != h.a.UNRESTRICTED && !bVar.f26075f && bVar.t(c10)) {
                            float i15 = bVar.f26074e.i(c10);
                            if (i15 < 0.0f) {
                                float f11 = (-bVar.f26071b) / i15;
                                if (f11 < f10) {
                                    i13 = i14;
                                    f10 = f11;
                                }
                            }
                        }
                    }
                    if (i13 > -1) {
                        h1.b bVar2 = this.f26095h[i13];
                        bVar2.f26070a.f26121o = -1;
                        Metrics metrics3 = f26085x;
                        if (metrics3 != null) {
                            metrics3.f2380l++;
                        }
                        bVar2.x(c10);
                        h hVar = bVar2.f26070a;
                        hVar.f26121o = i13;
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
        if (f26084w) {
            while (i10 < this.f26100m) {
                h1.b bVar = this.f26095h[i10];
                if (bVar != null) {
                    this.f26102o.f26076a.release(bVar);
                }
                this.f26095h[i10] = null;
                i10++;
            }
            return;
        }
        while (i10 < this.f26100m) {
            h1.b bVar2 = this.f26095h[i10];
            if (bVar2 != null) {
                this.f26102o.f26077b.release(bVar2);
            }
            this.f26095h[i10] = null;
            i10++;
        }
    }

    private h a(h.a aVar, String str) {
        h hVar = (h) this.f26102o.f26078c.acquire();
        if (hVar == null) {
            hVar = new h(aVar, str);
            hVar.i(aVar, str);
        } else {
            hVar.g();
            hVar.i(aVar, str);
        }
        int i10 = this.f26104q;
        int i11 = this.f26088a;
        if (i10 >= i11) {
            int i12 = i11 * 2;
            this.f26088a = i12;
            this.f26103p = (h[]) Arrays.copyOf(this.f26103p, i12);
        }
        h[] hVarArr = this.f26103p;
        int i13 = this.f26104q;
        this.f26104q = i13 + 1;
        hVarArr[i13] = hVar;
        return hVar;
    }

    private void l(h1.b bVar) {
        int i10;
        if (f26082u && bVar.f26075f) {
            bVar.f26070a.h(this, bVar.f26071b);
        } else {
            h1.b[] bVarArr = this.f26095h;
            int i11 = this.f26100m;
            bVarArr[i11] = bVar;
            h hVar = bVar.f26070a;
            hVar.f26121o = i11;
            this.f26100m = i11 + 1;
            hVar.k(this, bVar);
        }
        if (f26082u && this.f26089b) {
            int i12 = 0;
            while (i12 < this.f26100m) {
                if (this.f26095h[i12] == null) {
                    System.out.println("WTF");
                }
                h1.b bVar2 = this.f26095h[i12];
                if (bVar2 != null && bVar2.f26075f) {
                    bVar2.f26070a.h(this, bVar2.f26071b);
                    if (f26084w) {
                        this.f26102o.f26076a.release(bVar2);
                    } else {
                        this.f26102o.f26077b.release(bVar2);
                    }
                    this.f26095h[i12] = null;
                    int i13 = i12 + 1;
                    int i14 = i13;
                    while (true) {
                        i10 = this.f26100m;
                        if (i13 >= i10) {
                            break;
                        }
                        h1.b[] bVarArr2 = this.f26095h;
                        int i15 = i13 - 1;
                        h1.b bVar3 = bVarArr2[i13];
                        bVarArr2[i15] = bVar3;
                        h hVar2 = bVar3.f26070a;
                        if (hVar2.f26121o == i13) {
                            hVar2.f26121o = i15;
                        }
                        i14 = i13;
                        i13++;
                    }
                    if (i14 < i10) {
                        this.f26095h[i14] = null;
                    }
                    this.f26100m = i10 - 1;
                    i12--;
                }
                i12++;
            }
            this.f26089b = false;
        }
    }

    private void n() {
        for (int i10 = 0; i10 < this.f26100m; i10++) {
            h1.b bVar = this.f26095h[i10];
            bVar.f26070a.f26123q = bVar.f26071b;
        }
    }

    public static h1.b s(d dVar, h hVar, h hVar2, float f10) {
        return dVar.r().j(hVar, hVar2, f10);
    }

    private int u(a aVar) {
        float f10;
        long j10;
        for (int i10 = 0; i10 < this.f26100m; i10++) {
            h1.b bVar = this.f26095h[i10];
            if (bVar.f26070a.f26127u != h.a.UNRESTRICTED) {
                float f11 = 0.0f;
                if (bVar.f26071b < 0.0f) {
                    boolean z10 = false;
                    int i11 = 0;
                    while (!z10) {
                        Metrics metrics = f26085x;
                        long j11 = 1;
                        if (metrics != null) {
                            metrics.f2381m++;
                        }
                        i11++;
                        float f12 = Float.MAX_VALUE;
                        int i12 = 0;
                        int i13 = -1;
                        int i14 = -1;
                        int i15 = 0;
                        while (true) {
                            if (i12 >= this.f26100m) {
                                break;
                            }
                            h1.b bVar2 = this.f26095h[i12];
                            if (bVar2.f26070a.f26127u != h.a.UNRESTRICTED && !bVar2.f26075f && bVar2.f26071b < f11) {
                                if (f26083v) {
                                    int h10 = bVar2.f26074e.h();
                                    int i16 = 0;
                                    while (i16 < h10) {
                                        float f13 = f11;
                                        h c10 = bVar2.f26074e.c(i16);
                                        long j12 = j11;
                                        float i17 = bVar2.f26074e.i(c10);
                                        if (i17 > f13) {
                                            for (int i18 = 0; i18 < 9; i18++) {
                                                float f14 = c10.f26125s[i18] / i17;
                                                if ((f14 < f12 && i18 == i15) || i18 > i15) {
                                                    i15 = i18;
                                                    i14 = c10.f26120i;
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
                                    for (int i19 = 1; i19 < this.f26099l; i19++) {
                                        h hVar = this.f26102o.f26079d[i19];
                                        float i20 = bVar2.f26074e.i(hVar);
                                        if (i20 > f10) {
                                            for (int i21 = 0; i21 < 9; i21++) {
                                                float f15 = hVar.f26125s[i21] / i20;
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
                            h1.b bVar3 = this.f26095h[i13];
                            bVar3.f26070a.f26121o = -1;
                            Metrics metrics2 = f26085x;
                            if (metrics2 != null) {
                                metrics2.f2380l += j13;
                            }
                            bVar3.x(this.f26102o.f26079d[i14]);
                            h hVar2 = bVar3.f26070a;
                            hVar2.f26121o = i13;
                            hVar2.k(this, bVar3);
                        } else {
                            z10 = true;
                        }
                        if (i11 > this.f26099l / 2) {
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
        return f26085x;
    }

    public int A(Object obj) {
        h i10 = ((androidx.constraintlayout.core.widgets.d) obj).i();
        if (i10 != null) {
            return (int) (i10.f26123q + 0.5f);
        }
        return 0;
    }

    public void C() {
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2375g++;
        }
        if (this.f26092e.isEmpty()) {
            n();
        } else if (!this.f26096i && !this.f26097j) {
            D(this.f26092e);
        } else {
            Metrics metrics2 = f26085x;
            if (metrics2 != null) {
                metrics2.f2387s++;
            }
            for (int i10 = 0; i10 < this.f26100m; i10++) {
                if (!this.f26095h[i10].f26075f) {
                    D(this.f26092e);
                    return;
                }
            }
            Metrics metrics3 = f26085x;
            if (metrics3 != null) {
                metrics3.f2386r++;
            }
            n();
        }
    }

    void D(a aVar) {
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2390v++;
            metrics.f2391w = Math.max(metrics.f2391w, this.f26099l);
            Metrics metrics2 = f26085x;
            metrics2.f2392x = Math.max(metrics2.f2392x, this.f26100m);
        }
        u(aVar);
        E(aVar, false);
        n();
    }

    public void G() {
        c cVar;
        int i10 = 0;
        while (true) {
            cVar = this.f26102o;
            h[] hVarArr = cVar.f26079d;
            if (i10 >= hVarArr.length) {
                break;
            }
            h hVar = hVarArr[i10];
            if (hVar != null) {
                hVar.g();
            }
            i10++;
        }
        cVar.f26078c.a(this.f26103p, this.f26104q);
        this.f26104q = 0;
        Arrays.fill(this.f26102o.f26079d, (Object) null);
        HashMap hashMap = this.f26091d;
        if (hashMap != null) {
            hashMap.clear();
        }
        this.f26090c = 0;
        this.f26092e.clear();
        this.f26099l = 1;
        for (int i11 = 0; i11 < this.f26100m; i11++) {
            h1.b bVar = this.f26095h[i11];
            if (bVar != null) {
                bVar.f26072c = false;
            }
        }
        F();
        this.f26100m = 0;
        if (f26084w) {
            this.f26105r = new b(this.f26102o);
        } else {
            this.f26105r = new h1.b(this.f26102o);
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
            androidx.constraintlayout.core.Metrics r0 = h1.d.f26085x
            r1 = 1
            if (r0 == 0) goto L18
            long r3 = r0.f2376h
            long r3 = r3 + r1
            r0.f2376h = r3
            boolean r3 = r8.f26075f
            if (r3 == 0) goto L18
            long r3 = r0.f2377i
            long r3 = r3 + r1
            r0.f2377i = r3
        L18:
            int r0 = r7.f26100m
            r3 = 1
            int r0 = r0 + r3
            int r4 = r7.f26101n
            if (r0 >= r4) goto L27
            int r0 = r7.f26099l
            int r0 = r0 + r3
            int r4 = r7.f26094g
            if (r0 < r4) goto L2a
        L27:
            r7.B()
        L2a:
            boolean r0 = r8.f26075f
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
            r8.f26070a = r0
            int r5 = r7.f26100m
            r7.l(r8)
            int r6 = r7.f26100m
            int r5 = r5 + r3
            if (r6 != r5) goto L9a
            h1.d$a r4 = r7.f26105r
            r4.b(r8)
            h1.d$a r4 = r7.f26105r
            r7.E(r4, r3)
            int r4 = r0.f26121o
            r5 = -1
            if (r4 != r5) goto L9b
            h1.h r4 = r8.f26070a
            if (r4 != r0) goto L78
            h1.h r0 = r8.v(r0)
            if (r0 == 0) goto L78
            androidx.constraintlayout.core.Metrics r4 = h1.d.f26085x
            if (r4 == 0) goto L75
            long r5 = r4.f2380l
            long r5 = r5 + r1
            r4.f2380l = r5
        L75:
            r8.x(r0)
        L78:
            boolean r0 = r8.f26075f
            if (r0 != 0) goto L81
            h1.h r0 = r8.f26070a
            r0.k(r7, r8)
        L81:
            boolean r0 = h1.d.f26084w
            if (r0 == 0) goto L8d
            h1.c r0 = r7.f26102o
            h1.e r0 = r0.f26076a
            r0.release(r8)
            goto L94
        L8d:
            h1.c r0 = r7.f26102o
            h1.e r0 = r0.f26077b
            r0.release(r8)
        L94:
            int r0 = r7.f26100m
            int r0 = r0 - r3
            r7.f26100m = r0
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
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.P++;
        }
        if (f26081t && i11 == 8 && hVar2.f26124r && hVar.f26121o == -1) {
            hVar.h(this, hVar2.f26123q + i10);
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
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.P++;
        }
        if (f26081t && hVar.f26121o == -1) {
            float f10 = i10;
            hVar.h(this, f10);
            for (int i11 = 0; i11 < this.f26090c + 1; i11++) {
                h hVar2 = this.f26102o.f26079d[i11];
                if (hVar2 != null && hVar2.f26131y && hVar2.f26132z == hVar.f26120i) {
                    hVar2.h(this, hVar2.A + f10);
                }
            }
            return;
        }
        int i12 = hVar.f26121o;
        if (i12 != -1) {
            h1.b bVar = this.f26095h[i12];
            if (bVar.f26075f) {
                bVar.f26071b = i10;
                return;
            } else if (bVar.f26074e.h() == 0) {
                bVar.f26075f = true;
                bVar.f26071b = i10;
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
        t10.f26122p = 0;
        r10.o(hVar, hVar2, t10, i10);
        d(r10);
    }

    public void h(h hVar, h hVar2, int i10, int i11) {
        h1.b r10 = r();
        h t10 = t();
        t10.f26122p = 0;
        r10.o(hVar, hVar2, t10, i10);
        if (i11 != 8) {
            m(r10, (int) (r10.f26074e.i(t10) * (-1.0f)), i11);
        }
        d(r10);
    }

    public void i(h hVar, h hVar2, int i10, boolean z10) {
        h1.b r10 = r();
        h t10 = t();
        t10.f26122p = 0;
        r10.p(hVar, hVar2, t10, i10);
        d(r10);
    }

    public void j(h hVar, h hVar2, int i10, int i11) {
        h1.b r10 = r();
        h t10 = t();
        t10.f26122p = 0;
        r10.p(hVar, hVar2, t10, i10);
        if (i11 != 8) {
            m(r10, (int) (r10.f26074e.i(t10) * (-1.0f)), i11);
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
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2382n++;
        }
        if (this.f26099l + 1 >= this.f26094g) {
            B();
        }
        h a10 = a(h.a.ERROR, str);
        int i11 = this.f26090c + 1;
        this.f26090c = i11;
        this.f26099l++;
        a10.f26120i = i11;
        a10.f26122p = i10;
        this.f26102o.f26079d[i11] = a10;
        this.f26092e.a(a10);
        return a10;
    }

    public h p() {
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2384p++;
        }
        if (this.f26099l + 1 >= this.f26094g) {
            B();
        }
        h a10 = a(h.a.SLACK, null);
        int i10 = this.f26090c + 1;
        this.f26090c = i10;
        this.f26099l++;
        a10.f26120i = i10;
        this.f26102o.f26079d[i10] = a10;
        return a10;
    }

    public h q(Object obj) {
        h hVar = null;
        if (obj == null) {
            return null;
        }
        if (this.f26099l + 1 >= this.f26094g) {
            B();
        }
        if (obj instanceof androidx.constraintlayout.core.widgets.d) {
            androidx.constraintlayout.core.widgets.d dVar = (androidx.constraintlayout.core.widgets.d) obj;
            hVar = dVar.i();
            if (hVar == null) {
                dVar.s(this.f26102o);
                hVar = dVar.i();
            }
            int i10 = hVar.f26120i;
            if (i10 != -1 && i10 <= this.f26090c && this.f26102o.f26079d[i10] != null) {
                return hVar;
            }
            if (i10 != -1) {
                hVar.g();
            }
            int i11 = this.f26090c + 1;
            this.f26090c = i11;
            this.f26099l++;
            hVar.f26120i = i11;
            hVar.f26127u = h.a.UNRESTRICTED;
            this.f26102o.f26079d[i11] = hVar;
        }
        return hVar;
    }

    public h1.b r() {
        h1.b bVar;
        if (f26084w) {
            bVar = (h1.b) this.f26102o.f26076a.acquire();
            if (bVar == null) {
                bVar = new b(this.f26102o);
                f26087z++;
            } else {
                bVar.y();
            }
        } else {
            bVar = (h1.b) this.f26102o.f26077b.acquire();
            if (bVar == null) {
                bVar = new h1.b(this.f26102o);
                f26086y++;
            } else {
                bVar.y();
            }
        }
        h.e();
        return bVar;
    }

    public h t() {
        Metrics metrics = f26085x;
        if (metrics != null) {
            metrics.f2383o++;
        }
        if (this.f26099l + 1 >= this.f26094g) {
            B();
        }
        h a10 = a(h.a.SLACK, null);
        int i10 = this.f26090c + 1;
        this.f26090c = i10;
        this.f26099l++;
        a10.f26120i = i10;
        this.f26102o.f26079d[i10] = a10;
        return a10;
    }

    public void v(Metrics metrics) {
        f26085x = metrics;
    }

    public c w() {
        return this.f26102o;
    }

    public int y() {
        return this.f26100m;
    }

    public int z() {
        return this.f26090c;
    }
}
