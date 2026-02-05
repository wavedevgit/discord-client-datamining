package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import pt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends pt.k0 implements nt.a, nt.g, pt.d0, qt.h {

    /* renamed from: i  reason: collision with root package name */
    private static final i0 f40081i;

    /* renamed from: o  reason: collision with root package name */
    private static final i0 f40082o;

    /* renamed from: p  reason: collision with root package name */
    private static final Map f40083p;

    /* renamed from: q  reason: collision with root package name */
    private static final pt.h0 f40084q;

    /* renamed from: r  reason: collision with root package name */
    private static final pt.j0 f40085r;
    private static final long serialVersionUID = 7458380065762437714L;

    /* renamed from: d  reason: collision with root package name */
    private final transient f0 f40086d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g0 f40087e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40088a;

        static {
            int[] iArr = new int[g.values().length];
            f40088a = iArr;
            try {
                iArr[g.f39966d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40088a[g.f39967e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40088a[g.f39968i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40088a[g.f39969o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40088a[g.f39970p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40088a[g.f39971q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c extends d {
        c(pt.p pVar) {
            super(pVar, null);
        }

        @Override // net.time4j.i0.d, pt.z
        /* renamed from: o */
        public boolean p(i0 i0Var, BigDecimal bigDecimal) {
            if (bigDecimal == null) {
                return false;
            }
            BigDecimal bigDecimal2 = (BigDecimal) ((d) this).f40091d.e();
            if (((BigDecimal) ((d) this).f40091d.A()).compareTo(bigDecimal) > 0 || bigDecimal.compareTo(bigDecimal2) > 0) {
                return false;
            }
            return true;
        }

        @Override // net.time4j.i0.d, pt.z
        /* renamed from: q */
        public i0 x(i0 i0Var, BigDecimal bigDecimal, boolean z10) {
            if (p(i0Var, bigDecimal)) {
                return i0.b0(i0Var.f40086d, (g0) i0Var.f40087e.E(((d) this).f40091d, bigDecimal));
            }
            throw new IllegalArgumentException("Out of range: " + bigDecimal);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d implements pt.z {

        /* renamed from: d  reason: collision with root package name */
        private final pt.p f40091d;

        /* synthetic */ d(pt.p pVar, a aVar) {
            this(pVar);
        }

        static d j(pt.p pVar) {
            return new d(pVar);
        }

        private long l(Object obj) {
            return ((Number) Number.class.cast(obj)).longValue();
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p a(i0 i0Var) {
            return (pt.p) i0.f40083p.get(this.f40091d);
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p h(i0 i0Var) {
            return (pt.p) i0.f40083p.get(this.f40091d);
        }

        @Override // pt.z
        /* renamed from: e */
        public Object k(i0 i0Var) {
            if (this.f40091d.z()) {
                return i0Var.f40086d.n(this.f40091d);
            }
            if (this.f40091d.B()) {
                return this.f40091d.e();
            }
            throw new pt.r("Missing rule for: " + this.f40091d.name());
        }

        @Override // pt.z
        /* renamed from: f */
        public Object r(i0 i0Var) {
            if (this.f40091d.z()) {
                return i0Var.f40086d.s(this.f40091d);
            }
            if (this.f40091d.B()) {
                return this.f40091d.A();
            }
            throw new pt.r("Missing rule for: " + this.f40091d.name());
        }

        @Override // pt.z
        /* renamed from: g */
        public Object y(i0 i0Var) {
            if (this.f40091d.z()) {
                return i0Var.f40086d.v(this.f40091d);
            }
            if (this.f40091d.B()) {
                return i0Var.f40087e.v(this.f40091d);
            }
            throw new pt.r("Missing rule for: " + this.f40091d.name());
        }

        @Override // pt.z
        /* renamed from: i */
        public boolean p(i0 i0Var, Object obj) {
            if (obj == null) {
                return false;
            }
            if (this.f40091d.z()) {
                return i0Var.f40086d.B(this.f40091d, obj);
            }
            if (this.f40091d.B()) {
                if (Number.class.isAssignableFrom(this.f40091d.getType())) {
                    long l10 = l(this.f40091d.A());
                    long l11 = l(this.f40091d.e());
                    long l12 = l(obj);
                    if (l10 > l12 || l11 < l12) {
                        return false;
                    }
                    return true;
                } else if (this.f40091d.equals(g0.f39984z) && g0.f39983y.equals(obj)) {
                    return false;
                } else {
                    return i0Var.f40087e.B(this.f40091d, obj);
                }
            }
            throw new pt.r("Missing rule for: " + this.f40091d.name());
        }

        @Override // pt.z
        /* renamed from: n */
        public i0 x(i0 i0Var, Object obj, boolean z10) {
            if (obj != null) {
                if (obj.equals(y(i0Var))) {
                    return i0Var;
                }
                if (z10) {
                    return (i0) i0Var.K(nt.c.m(l(obj), l(y(i0Var))), (w) i0.f40084q.N(this.f40091d));
                } else if (this.f40091d.z()) {
                    return i0.b0((f0) i0Var.f40086d.E(this.f40091d, obj), i0Var.f40087e);
                } else {
                    if (this.f40091d.B()) {
                        if (Number.class.isAssignableFrom(this.f40091d.getType())) {
                            long l10 = l(this.f40091d.A());
                            long l11 = l(this.f40091d.e());
                            long l12 = l(obj);
                            if (l10 > l12 || l11 < l12) {
                                throw new IllegalArgumentException("Out of range: " + obj);
                            }
                        } else if (this.f40091d.equals(g0.f39984z) && obj.equals(g0.f39983y)) {
                            throw new IllegalArgumentException("Out of range: " + obj);
                        }
                        return i0.b0(i0Var.f40086d, (g0) i0Var.f40087e.E(this.f40091d, obj));
                    }
                    throw new pt.r("Missing rule for: " + this.f40091d.name());
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        private d(pt.p pVar) {
            this.f40091d = pVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements pt.u {
        private e() {
        }

        @Override // pt.u
        public pt.f0 a() {
            return pt.f0.f46601a;
        }

        @Override // pt.u
        public pt.x b() {
            return null;
        }

        @Override // pt.u
        public String c(pt.y yVar, Locale locale) {
            qt.e d10 = qt.e.d(yVar.a());
            return qt.b.u(d10, d10, locale);
        }

        @Override // pt.u
        /* renamed from: d */
        public i0 k(pt.q qVar, pt.d dVar, boolean z10, boolean z11) {
            boolean z12;
            f0 f0Var;
            g0 g0Var;
            net.time4j.tz.k kVar;
            if (qVar instanceof nt.f) {
                pt.c cVar = qt.a.f48089d;
                if (dVar.b(cVar)) {
                    kVar = (net.time4j.tz.k) dVar.c(cVar);
                } else if (z10) {
                    kVar = net.time4j.tz.p.f40286v;
                } else {
                    throw new IllegalArgumentException("Missing timezone attribute for type conversion.");
                }
                return a0.a0((nt.f) nt.f.class.cast(qVar)).t0(kVar);
            }
            if (z11 && qVar.r(g0.J) == 60) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12) {
                qVar.C(g0.J, 59);
            }
            pt.p pVar = f0.f39950y;
            if (qVar.m(pVar)) {
                f0Var = (f0) qVar.v(pVar);
            } else {
                f0Var = (f0) f0.r0().k(qVar, dVar, z10, false);
            }
            if (f0Var == null) {
                return null;
            }
            pt.p pVar2 = g0.f39984z;
            if (qVar.m(pVar2)) {
                g0Var = (g0) qVar.v(pVar2);
            } else {
                g0Var = (g0) g0.i0().k(qVar, dVar, z10, false);
                if (g0Var == null && z10) {
                    g0Var = g0.f39982x;
                }
            }
            if (g0Var == null) {
                return null;
            }
            pt.p pVar3 = x.f40292r;
            if (qVar.m(pVar3)) {
                f0Var = (f0) f0Var.K(((Long) qVar.v(pVar3)).longValue(), f.f39933s);
            }
            if (z12) {
                pt.b0 b0Var = pt.b0.LEAP_SECOND;
                Boolean bool = Boolean.TRUE;
                if (qVar.B(b0Var, bool)) {
                    qVar.E(b0Var, bool);
                }
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // pt.u
        public int j() {
            return f0.r0().j();
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // pt.u
        /* renamed from: e */
        public pt.o h(i0 i0Var, pt.d dVar) {
            return i0Var;
        }
    }

    static {
        i0 i0Var = new i0(f0.f39940o, g0.f39982x);
        f40081i = i0Var;
        f0 f0Var = f0.f39941p;
        pt.p pVar = g0.f39984z;
        i0 i0Var2 = new i0(f0Var, (g0) pVar.e());
        f40082o = i0Var2;
        HashMap hashMap = new HashMap();
        pt.p pVar2 = f0.f39950y;
        hashMap.put(pVar2, pVar);
        net.time4j.c cVar = f0.A;
        l0 l0Var = f0.E;
        hashMap.put(cVar, l0Var);
        net.time4j.c cVar2 = f0.B;
        hashMap.put(cVar2, a1.f39720x.n());
        c0 c0Var = f0.C;
        l0 l0Var2 = f0.I;
        hashMap.put(c0Var, l0Var2);
        c0 c0Var2 = f0.D;
        l0 l0Var3 = f0.F;
        hashMap.put(c0Var2, l0Var3);
        hashMap.put(l0Var, l0Var3);
        hashMap.put(l0Var3, pVar);
        c0 c0Var3 = f0.G;
        hashMap.put(c0Var3, pVar);
        l0 l0Var4 = f0.H;
        hashMap.put(l0Var4, pVar);
        hashMap.put(l0Var2, pVar);
        d0 d0Var = f0.J;
        hashMap.put(d0Var, pVar);
        d1 d1Var = g0.B;
        l0 l0Var5 = g0.E;
        hashMap.put(d1Var, l0Var5);
        net.time4j.c cVar3 = g0.C;
        l0 l0Var6 = g0.H;
        hashMap.put(cVar3, l0Var6);
        net.time4j.c cVar4 = g0.D;
        hashMap.put(cVar4, l0Var6);
        hashMap.put(l0Var5, l0Var6);
        l0 l0Var7 = g0.F;
        hashMap.put(l0Var7, l0Var6);
        l0 l0Var8 = g0.G;
        hashMap.put(l0Var8, l0Var6);
        l0 l0Var9 = g0.J;
        hashMap.put(l0Var6, l0Var9);
        l0 l0Var10 = g0.I;
        hashMap.put(l0Var10, l0Var9);
        l0 l0Var11 = g0.N;
        hashMap.put(l0Var9, l0Var11);
        l0 l0Var12 = g0.K;
        hashMap.put(l0Var12, l0Var11);
        f40083p = Collections.unmodifiableMap(hashMap);
        h0.b k10 = h0.b.k(w.class, i0.class, new e(null), i0Var, i0Var2);
        d j10 = d.j(pVar2);
        f fVar = f.f39933s;
        h0.b e10 = k10.e(pVar2, j10, fVar);
        d j11 = d.j(cVar);
        f fVar2 = f.f39929o;
        h0.b e11 = e10.e(cVar, j11, fVar2).e(cVar2, d.j(cVar2), x0.f40296d).e(c0Var, d.j(c0Var), f.f39930p);
        d j12 = d.j(c0Var2);
        f fVar3 = f.f39931q;
        h0.b d10 = e11.e(c0Var2, j12, fVar3).e(l0Var, d.j(l0Var), fVar3).e(l0Var3, d.j(l0Var3), fVar).e(c0Var3, d.j(c0Var3), fVar).e(l0Var4, d.j(l0Var4), fVar).e(l0Var2, d.j(l0Var2), fVar).e(d0Var, d.j(d0Var), f.f39932r).d(pVar, d.j(pVar)).d(d1Var, d.j(d1Var));
        d j13 = d.j(cVar3);
        g gVar = g.f39966d;
        h0.b e12 = d10.e(cVar3, j13, gVar).e(cVar4, d.j(cVar4), gVar).e(l0Var5, d.j(l0Var5), gVar).e(l0Var7, d.j(l0Var7), gVar).e(l0Var8, d.j(l0Var8), gVar);
        d j14 = d.j(l0Var6);
        g gVar2 = g.f39967e;
        h0.b e13 = e12.e(l0Var6, j14, gVar2).e(l0Var10, d.j(l0Var10), gVar2);
        d j15 = d.j(l0Var9);
        g gVar3 = g.f39968i;
        h0.b e14 = e13.e(l0Var9, j15, gVar3).e(l0Var12, d.j(l0Var12), gVar3);
        l0 l0Var13 = g0.L;
        d j16 = d.j(l0Var13);
        g gVar4 = g.f39969o;
        h0.b e15 = e14.e(l0Var13, j16, gVar4);
        l0 l0Var14 = g0.M;
        d j17 = d.j(l0Var14);
        g gVar5 = g.f39970p;
        h0.b e16 = e15.e(l0Var14, j17, gVar5);
        d j18 = d.j(l0Var11);
        g gVar6 = g.f39971q;
        h0.b e17 = e16.e(l0Var11, j18, gVar6);
        l0 l0Var15 = g0.O;
        h0.b e18 = e17.e(l0Var15, d.j(l0Var15), gVar4);
        l0 l0Var16 = g0.P;
        h0.b e19 = e18.e(l0Var16, d.j(l0Var16), gVar5);
        l0 l0Var17 = g0.Q;
        h0.b e20 = e19.e(l0Var17, d.j(l0Var17), gVar6);
        d1 d1Var2 = g0.R;
        h0.b d11 = e20.d(d1Var2, new c(d1Var2));
        d1 d1Var3 = g0.S;
        h0.b d12 = d11.d(d1Var3, new c(d1Var3));
        d1 d1Var4 = g0.T;
        h0.b d13 = d12.d(d1Var4, new c(d1Var4));
        pt.p pVar3 = g0.U;
        h0.b d14 = d13.d(pVar3, d.j(pVar3));
        c0(d14);
        d0(d14);
        e0(d14);
        f40084q = d14.h();
        f40085r = n.g(fVar2, fVar3, fVar, gVar, gVar2, gVar3, gVar6);
    }

    private i0(f0 f0Var, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40086d = (f0) f0Var.K(1L, f.f39933s);
            this.f40087e = g0.f39982x;
        } else if (f0Var != null) {
            this.f40086d = f0Var;
            this.f40087e = g0Var;
        } else {
            throw new NullPointerException("Missing date.");
        }
    }

    public static pt.h0 S() {
        return f40084q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i0 U(nt.f fVar, net.time4j.tz.p pVar) {
        long q10 = fVar.q() + pVar.m();
        int a10 = fVar.a() + pVar.l();
        if (a10 < 0) {
            a10 += 1000000000;
            q10--;
        } else if (a10 >= 1000000000) {
            a10 -= 1000000000;
            q10++;
        }
        f0 M0 = f0.M0(nt.c.b(q10, 86400), pt.a0.UNIX);
        int d10 = nt.c.d(q10, 86400);
        int i10 = d10 % 60;
        int i11 = d10 / 60;
        return b0(M0, g0.J0(i11 / 60, i11 % 60, i10, a10));
    }

    public static i0 a0(int i10, int i11, int i12, int i13, int i14, int i15) {
        return b0(f0.H0(i10, i11, i12), g0.I0(i13, i14, i15));
    }

    public static i0 b0(f0 f0Var, g0 g0Var) {
        return new i0(f0Var, g0Var);
    }

    private static void c0(h0.b bVar) {
        EnumSet enumSet;
        EnumSet range = EnumSet.range(f.f39926d, f.f39931q);
        EnumSet range2 = EnumSet.range(f.f39932r, f.f39933s);
        f[] values = f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            f fVar = values[i10];
            b bVar2 = new b(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(f.f39932r) < 0) {
                enumSet = range;
            } else {
                enumSet = range2;
            }
            h0.b bVar3 = bVar;
            bVar3.g(fVar, bVar2, length2, enumSet);
            i10++;
            bVar = bVar3;
        }
    }

    private static void d0(h0.b bVar) {
        g[] values;
        for (g gVar : g.values()) {
            bVar.g(gVar, new b(gVar), gVar.getLength(), EnumSet.allOf(g.class));
        }
    }

    private static void e0(h0.b bVar) {
        for (pt.s sVar : f0.r0().x()) {
            bVar.f(sVar);
        }
        for (pt.s sVar2 : g0.i0().x()) {
            bVar.f(sVar2);
        }
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 8);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.q
    /* renamed from: H */
    public pt.h0 w() {
        return f40084q;
    }

    public a0 Q(net.time4j.tz.p pVar) {
        long i10 = nt.c.i(this.f40086d.C0() + 730, 86400L) + (this.f40087e.h() * 3600) + (this.f40087e.e() * 60) + this.f40087e.d();
        int a10 = this.f40087e.a();
        long m10 = i10 - pVar.m();
        int l10 = a10 - pVar.l();
        if (l10 < 0) {
            l10 += 1000000000;
            m10--;
        } else if (l10 >= 1000000000) {
            l10 -= 1000000000;
            m10++;
        }
        return a0.l0(m10, l10, wt.f.POSIX);
    }

    public a0 R() {
        return Q(net.time4j.tz.p.f40286v);
    }

    @Override // java.lang.Comparable
    /* renamed from: T */
    public int compareTo(i0 i0Var) {
        if (this.f40086d.P(i0Var.f40086d)) {
            return 1;
        }
        if (this.f40086d.Q(i0Var.f40086d)) {
            return -1;
        }
        return this.f40087e.compareTo(i0Var.f40087e);
    }

    public f0 V() {
        return this.f40086d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.q
    /* renamed from: W */
    public i0 x() {
        return this;
    }

    public g0 X() {
        return this.f40087e;
    }

    public a0 Y(net.time4j.tz.l lVar) {
        if (lVar.J()) {
            return Q(lVar.A(this.f40086d, this.f40087e));
        }
        net.time4j.tz.o E = lVar.E();
        long b10 = E.b(this.f40086d, this.f40087e, lVar);
        a0 l02 = a0.l0(b10, this.f40087e.a(), wt.f.POSIX);
        if (E == net.time4j.tz.l.f40225p) {
            a0.W(b10, this);
        }
        return l02;
    }

    public a0 Z(net.time4j.tz.k kVar) {
        return Y(net.time4j.tz.l.N(kVar));
    }

    @Override // nt.g
    public int a() {
        return this.f40087e.a();
    }

    @Override // nt.g
    public int d() {
        return this.f40087e.d();
    }

    @Override // nt.g
    public int e() {
        return this.f40087e.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f40086d.equals(i0Var.f40086d) && this.f40087e.equals(i0Var.f40087e)) {
                return true;
            }
        }
        return false;
    }

    @Override // nt.a
    public int f() {
        return this.f40086d.f();
    }

    public f0 f0() {
        return this.f40086d;
    }

    @Override // nt.a
    public int g() {
        return this.f40086d.g();
    }

    @Override // nt.g
    public int h() {
        return this.f40087e.h();
    }

    public int hashCode() {
        return (this.f40086d.hashCode() * 13) + (this.f40087e.hashCode() * 37);
    }

    @Override // nt.a
    public int t() {
        return this.f40086d.t();
    }

    @Override // nt.a
    public String toString() {
        return this.f40086d.toString() + this.f40087e.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements pt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f40089a;

        /* renamed from: b  reason: collision with root package name */
        private final g f40090b;

        b(f fVar) {
            this.f40089a = fVar;
            this.f40090b = null;
        }

        @Override // pt.m0
        /* renamed from: c */
        public i0 b(i0 i0Var, long j10) {
            f0 f0Var;
            g0 g0Var;
            if (this.f40089a != null) {
                f0Var = (f0) i0Var.f40086d.K(j10, this.f40089a);
                g0Var = i0Var.f40087e;
            } else {
                j P0 = i0Var.f40087e.P0(j10, this.f40090b);
                g0 b10 = P0.b();
                f0Var = (f0) i0Var.f40086d.K(P0.a(), f.f39933s);
                g0Var = b10;
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // pt.m0
        /* renamed from: d */
        public long a(i0 i0Var, i0 i0Var2) {
            long f10;
            f fVar = this.f40089a;
            if (fVar != null) {
                long e10 = fVar.e(i0Var.f40086d, i0Var2.f40086d);
                int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
                if (i10 != 0) {
                    if (this.f40089a == f.f39933s || ((f0) i0Var.f40086d.K(e10, this.f40089a)).M(i0Var2.f40086d) == 0) {
                        g0 g0Var = i0Var.f40087e;
                        g0 g0Var2 = i0Var2.f40087e;
                        if (i10 > 0 && g0Var.x0(g0Var2)) {
                            return e10 - 1;
                        }
                        if (i10 < 0 && g0Var.y0(g0Var2)) {
                            return e10 + 1;
                        }
                        return e10;
                    }
                    return e10;
                }
                return e10;
            } else if (i0Var.f40086d.P(i0Var2.f40086d)) {
                return -a(i0Var2, i0Var);
            } else {
                long L = i0Var.f40086d.L(i0Var2.f40086d, f.f39933s);
                if (L == 0) {
                    return this.f40090b.e(i0Var.f40087e, i0Var2.f40087e);
                }
                if (this.f40090b.compareTo(g.f39968i) <= 0) {
                    long i11 = nt.c.i(L, 86400L);
                    g0 g0Var3 = i0Var2.f40087e;
                    l0 l0Var = g0.K;
                    f10 = nt.c.f(i11, nt.c.m(((Integer) g0Var3.v(l0Var)).longValue(), ((Integer) i0Var.f40087e.v(l0Var)).longValue()));
                    if (i0Var.f40087e.a() > i0Var2.f40087e.a()) {
                        f10--;
                    }
                } else {
                    long i12 = nt.c.i(L, 86400000000000L);
                    g0 g0Var4 = i0Var2.f40087e;
                    l0 l0Var2 = g0.Q;
                    f10 = nt.c.f(i12, nt.c.m(((Long) g0Var4.v(l0Var2)).longValue(), ((Long) i0Var.f40087e.v(l0Var2)).longValue()));
                }
                switch (a.f40088a[this.f40090b.ordinal()]) {
                    case 1:
                        return f10 / 3600;
                    case 2:
                        return f10 / 60;
                    case 3:
                    case 6:
                        return f10;
                    case 4:
                        return f10 / 1000000;
                    case 5:
                        return f10 / 1000;
                    default:
                        throw new UnsupportedOperationException(this.f40090b.name());
                }
            }
        }

        b(g gVar) {
            this.f40089a = null;
            this.f40090b = gVar;
        }
    }
}
