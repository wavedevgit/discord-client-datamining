package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import jt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends jt.k0 implements gt.a, gt.g, jt.d0, kt.h {

    /* renamed from: i  reason: collision with root package name */
    private static final i0 f40719i;

    /* renamed from: o  reason: collision with root package name */
    private static final i0 f40720o;

    /* renamed from: p  reason: collision with root package name */
    private static final Map f40721p;

    /* renamed from: q  reason: collision with root package name */
    private static final jt.h0 f40722q;

    /* renamed from: r  reason: collision with root package name */
    private static final jt.j0 f40723r;
    private static final long serialVersionUID = 7458380065762437714L;

    /* renamed from: d  reason: collision with root package name */
    private final transient f0 f40724d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g0 f40725e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40726a;

        static {
            int[] iArr = new int[g.values().length];
            f40726a = iArr;
            try {
                iArr[g.f40604d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40726a[g.f40605e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40726a[g.f40606i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40726a[g.f40607o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40726a[g.f40608p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40726a[g.f40609q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c extends d {
        c(jt.p pVar) {
            super(pVar, null);
        }

        @Override // net.time4j.i0.d, jt.z
        /* renamed from: q */
        public boolean l(i0 i0Var, BigDecimal bigDecimal) {
            if (bigDecimal == null) {
                return false;
            }
            BigDecimal bigDecimal2 = (BigDecimal) ((d) this).f40729d.e();
            if (((BigDecimal) ((d) this).f40729d.A()).compareTo(bigDecimal) > 0 || bigDecimal.compareTo(bigDecimal2) > 0) {
                return false;
            }
            return true;
        }

        @Override // net.time4j.i0.d, jt.z
        /* renamed from: r */
        public i0 w(i0 i0Var, BigDecimal bigDecimal, boolean z10) {
            if (l(i0Var, bigDecimal)) {
                return i0.b0(i0Var.f40724d, (g0) i0Var.f40725e.E(((d) this).f40729d, bigDecimal));
            }
            throw new IllegalArgumentException("Out of range: " + bigDecimal);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40729d;

        /* synthetic */ d(jt.p pVar, a aVar) {
            this(pVar);
        }

        static d m(jt.p pVar) {
            return new d(pVar);
        }

        private long n(Object obj) {
            return ((Number) Number.class.cast(obj)).longValue();
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(i0 i0Var) {
            return (jt.p) i0.f40721p.get(this.f40729d);
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(i0 i0Var) {
            return (jt.p) i0.f40721p.get(this.f40729d);
        }

        @Override // jt.z
        /* renamed from: e */
        public Object j(i0 i0Var) {
            if (this.f40729d.y()) {
                return i0Var.f40724d.i(this.f40729d);
            }
            if (this.f40729d.C()) {
                return this.f40729d.e();
            }
            throw new jt.r("Missing rule for: " + this.f40729d.name());
        }

        @Override // jt.z
        /* renamed from: f */
        public Object p(i0 i0Var) {
            if (this.f40729d.y()) {
                return i0Var.f40724d.t(this.f40729d);
            }
            if (this.f40729d.C()) {
                return this.f40729d.A();
            }
            throw new jt.r("Missing rule for: " + this.f40729d.name());
        }

        @Override // jt.z
        /* renamed from: g */
        public Object x(i0 i0Var) {
            if (this.f40729d.y()) {
                return i0Var.f40724d.p(this.f40729d);
            }
            if (this.f40729d.C()) {
                return i0Var.f40725e.p(this.f40729d);
            }
            throw new jt.r("Missing rule for: " + this.f40729d.name());
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(i0 i0Var, Object obj) {
            if (obj == null) {
                return false;
            }
            if (this.f40729d.y()) {
                return i0Var.f40724d.B(this.f40729d, obj);
            }
            if (this.f40729d.C()) {
                if (Number.class.isAssignableFrom(this.f40729d.getType())) {
                    long n10 = n(this.f40729d.A());
                    long n11 = n(this.f40729d.e());
                    long n12 = n(obj);
                    if (n10 > n12 || n11 < n12) {
                        return false;
                    }
                    return true;
                } else if (this.f40729d.equals(g0.f40622z) && g0.f40621y.equals(obj)) {
                    return false;
                } else {
                    return i0Var.f40725e.B(this.f40729d, obj);
                }
            }
            throw new jt.r("Missing rule for: " + this.f40729d.name());
        }

        @Override // jt.z
        /* renamed from: o */
        public i0 w(i0 i0Var, Object obj, boolean z10) {
            if (obj != null) {
                if (obj.equals(x(i0Var))) {
                    return i0Var;
                }
                if (z10) {
                    return (i0) i0Var.K(gt.c.m(n(obj), n(x(i0Var))), (w) i0.f40722q.N(this.f40729d));
                } else if (this.f40729d.y()) {
                    return i0.b0((f0) i0Var.f40724d.E(this.f40729d, obj), i0Var.f40725e);
                } else {
                    if (this.f40729d.C()) {
                        if (Number.class.isAssignableFrom(this.f40729d.getType())) {
                            long n10 = n(this.f40729d.A());
                            long n11 = n(this.f40729d.e());
                            long n12 = n(obj);
                            if (n10 > n12 || n11 < n12) {
                                throw new IllegalArgumentException("Out of range: " + obj);
                            }
                        } else if (this.f40729d.equals(g0.f40622z) && obj.equals(g0.f40621y)) {
                            throw new IllegalArgumentException("Out of range: " + obj);
                        }
                        return i0.b0(i0Var.f40724d, (g0) i0Var.f40725e.E(this.f40729d, obj));
                    }
                    throw new jt.r("Missing rule for: " + this.f40729d.name());
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        private d(jt.p pVar) {
            this.f40729d = pVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements jt.u {
        private e() {
        }

        @Override // jt.u
        public jt.f0 a() {
            return jt.f0.f32758a;
        }

        @Override // jt.u
        public jt.x b() {
            return null;
        }

        @Override // jt.u
        /* renamed from: d */
        public i0 j(jt.q qVar, jt.d dVar, boolean z10, boolean z11) {
            boolean z12;
            f0 f0Var;
            g0 g0Var;
            net.time4j.tz.k kVar;
            if (qVar instanceof gt.f) {
                jt.c cVar = kt.a.f36547d;
                if (dVar.a(cVar)) {
                    kVar = (net.time4j.tz.k) dVar.c(cVar);
                } else if (z10) {
                    kVar = net.time4j.tz.p.f40924v;
                } else {
                    throw new IllegalArgumentException("Missing timezone attribute for type conversion.");
                }
                return a0.a0((gt.f) gt.f.class.cast(qVar)).t0(kVar);
            }
            if (z11 && qVar.q(g0.J) == 60) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12) {
                qVar.C(g0.J, 59);
            }
            jt.p pVar = f0.f40588y;
            if (qVar.o(pVar)) {
                f0Var = (f0) qVar.p(pVar);
            } else {
                f0Var = (f0) f0.r0().j(qVar, dVar, z10, false);
            }
            if (f0Var == null) {
                return null;
            }
            jt.p pVar2 = g0.f40622z;
            if (qVar.o(pVar2)) {
                g0Var = (g0) qVar.p(pVar2);
            } else {
                g0Var = (g0) g0.i0().j(qVar, dVar, z10, false);
                if (g0Var == null && z10) {
                    g0Var = g0.f40620x;
                }
            }
            if (g0Var == null) {
                return null;
            }
            jt.p pVar3 = x.f40930r;
            if (qVar.o(pVar3)) {
                f0Var = (f0) f0Var.K(((Long) qVar.p(pVar3)).longValue(), f.f40571s);
            }
            if (z12) {
                jt.b0 b0Var = jt.b0.LEAP_SECOND;
                Boolean bool = Boolean.TRUE;
                if (qVar.B(b0Var, bool)) {
                    qVar.E(b0Var, bool);
                }
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // jt.u
        public int h() {
            return f0.r0().h();
        }

        @Override // jt.u
        public String k(jt.y yVar, Locale locale) {
            kt.e d10 = kt.e.d(yVar.a());
            return kt.b.u(d10, d10, locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // jt.u
        /* renamed from: e */
        public jt.o c(i0 i0Var, jt.d dVar) {
            return i0Var;
        }
    }

    static {
        i0 i0Var = new i0(f0.f40578o, g0.f40620x);
        f40719i = i0Var;
        f0 f0Var = f0.f40579p;
        jt.p pVar = g0.f40622z;
        i0 i0Var2 = new i0(f0Var, (g0) pVar.e());
        f40720o = i0Var2;
        HashMap hashMap = new HashMap();
        jt.p pVar2 = f0.f40588y;
        hashMap.put(pVar2, pVar);
        net.time4j.c cVar = f0.A;
        l0 l0Var = f0.E;
        hashMap.put(cVar, l0Var);
        net.time4j.c cVar2 = f0.B;
        hashMap.put(cVar2, a1.f40358x.n());
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
        f40721p = Collections.unmodifiableMap(hashMap);
        h0.b k10 = h0.b.k(w.class, i0.class, new e(null), i0Var, i0Var2);
        d m10 = d.m(pVar2);
        f fVar = f.f40571s;
        h0.b e10 = k10.e(pVar2, m10, fVar);
        d m11 = d.m(cVar);
        f fVar2 = f.f40567o;
        h0.b e11 = e10.e(cVar, m11, fVar2).e(cVar2, d.m(cVar2), x0.f40934d).e(c0Var, d.m(c0Var), f.f40568p);
        d m12 = d.m(c0Var2);
        f fVar3 = f.f40569q;
        h0.b d10 = e11.e(c0Var2, m12, fVar3).e(l0Var, d.m(l0Var), fVar3).e(l0Var3, d.m(l0Var3), fVar).e(c0Var3, d.m(c0Var3), fVar).e(l0Var4, d.m(l0Var4), fVar).e(l0Var2, d.m(l0Var2), fVar).e(d0Var, d.m(d0Var), f.f40570r).d(pVar, d.m(pVar)).d(d1Var, d.m(d1Var));
        d m13 = d.m(cVar3);
        g gVar = g.f40604d;
        h0.b e12 = d10.e(cVar3, m13, gVar).e(cVar4, d.m(cVar4), gVar).e(l0Var5, d.m(l0Var5), gVar).e(l0Var7, d.m(l0Var7), gVar).e(l0Var8, d.m(l0Var8), gVar);
        d m14 = d.m(l0Var6);
        g gVar2 = g.f40605e;
        h0.b e13 = e12.e(l0Var6, m14, gVar2).e(l0Var10, d.m(l0Var10), gVar2);
        d m15 = d.m(l0Var9);
        g gVar3 = g.f40606i;
        h0.b e14 = e13.e(l0Var9, m15, gVar3).e(l0Var12, d.m(l0Var12), gVar3);
        l0 l0Var13 = g0.L;
        d m16 = d.m(l0Var13);
        g gVar4 = g.f40607o;
        h0.b e15 = e14.e(l0Var13, m16, gVar4);
        l0 l0Var14 = g0.M;
        d m17 = d.m(l0Var14);
        g gVar5 = g.f40608p;
        h0.b e16 = e15.e(l0Var14, m17, gVar5);
        d m18 = d.m(l0Var11);
        g gVar6 = g.f40609q;
        h0.b e17 = e16.e(l0Var11, m18, gVar6);
        l0 l0Var15 = g0.O;
        h0.b e18 = e17.e(l0Var15, d.m(l0Var15), gVar4);
        l0 l0Var16 = g0.P;
        h0.b e19 = e18.e(l0Var16, d.m(l0Var16), gVar5);
        l0 l0Var17 = g0.Q;
        h0.b e20 = e19.e(l0Var17, d.m(l0Var17), gVar6);
        d1 d1Var2 = g0.R;
        h0.b d11 = e20.d(d1Var2, new c(d1Var2));
        d1 d1Var3 = g0.S;
        h0.b d12 = d11.d(d1Var3, new c(d1Var3));
        d1 d1Var4 = g0.T;
        h0.b d13 = d12.d(d1Var4, new c(d1Var4));
        jt.p pVar3 = g0.U;
        h0.b d14 = d13.d(pVar3, d.m(pVar3));
        c0(d14);
        d0(d14);
        e0(d14);
        f40722q = d14.h();
        f40723r = n.g(fVar2, fVar3, fVar, gVar, gVar2, gVar3, gVar6);
    }

    private i0(f0 f0Var, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40724d = (f0) f0Var.K(1L, f.f40571s);
            this.f40725e = g0.f40620x;
        } else if (f0Var != null) {
            this.f40724d = f0Var;
            this.f40725e = g0Var;
        } else {
            throw new NullPointerException("Missing date.");
        }
    }

    public static jt.h0 S() {
        return f40722q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i0 U(gt.f fVar, net.time4j.tz.p pVar) {
        long r10 = fVar.r() + pVar.l();
        int a10 = fVar.a() + pVar.k();
        if (a10 < 0) {
            a10 += 1000000000;
            r10--;
        } else if (a10 >= 1000000000) {
            a10 -= 1000000000;
            r10++;
        }
        f0 M0 = f0.M0(gt.c.b(r10, 86400), jt.a0.UNIX);
        int d10 = gt.c.d(r10, 86400);
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
        EnumSet range = EnumSet.range(f.f40564d, f.f40569q);
        EnumSet range2 = EnumSet.range(f.f40570r, f.f40571s);
        f[] values = f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            f fVar = values[i10];
            b bVar2 = new b(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(f.f40570r) < 0) {
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
        for (jt.s sVar : f0.r0().w()) {
            bVar.f(sVar);
        }
        for (jt.s sVar2 : g0.i0().w()) {
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
    @Override // jt.q
    /* renamed from: H */
    public jt.h0 w() {
        return f40722q;
    }

    public a0 Q(net.time4j.tz.p pVar) {
        long i10 = gt.c.i(this.f40724d.C0() + 730, 86400L) + (this.f40725e.h() * 3600) + (this.f40725e.e() * 60) + this.f40725e.d();
        int a10 = this.f40725e.a();
        long l10 = i10 - pVar.l();
        int k10 = a10 - pVar.k();
        if (k10 < 0) {
            k10 += 1000000000;
            l10--;
        } else if (k10 >= 1000000000) {
            k10 -= 1000000000;
            l10++;
        }
        return a0.l0(l10, k10, qt.f.POSIX);
    }

    public a0 R() {
        return Q(net.time4j.tz.p.f40924v);
    }

    @Override // java.lang.Comparable
    /* renamed from: T */
    public int compareTo(i0 i0Var) {
        if (this.f40724d.P(i0Var.f40724d)) {
            return 1;
        }
        if (this.f40724d.Q(i0Var.f40724d)) {
            return -1;
        }
        return this.f40725e.compareTo(i0Var.f40725e);
    }

    public f0 V() {
        return this.f40724d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.q
    /* renamed from: W */
    public i0 x() {
        return this;
    }

    public g0 X() {
        return this.f40725e;
    }

    public a0 Y(net.time4j.tz.l lVar) {
        if (lVar.J()) {
            return Q(lVar.A(this.f40724d, this.f40725e));
        }
        net.time4j.tz.o E = lVar.E();
        long b10 = E.b(this.f40724d, this.f40725e, lVar);
        a0 l02 = a0.l0(b10, this.f40725e.a(), qt.f.POSIX);
        if (E == net.time4j.tz.l.f40863p) {
            a0.W(b10, this);
        }
        return l02;
    }

    public a0 Z(net.time4j.tz.k kVar) {
        return Y(net.time4j.tz.l.N(kVar));
    }

    @Override // gt.g
    public int a() {
        return this.f40725e.a();
    }

    @Override // gt.g
    public int d() {
        return this.f40725e.d();
    }

    @Override // gt.g
    public int e() {
        return this.f40725e.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f40724d.equals(i0Var.f40724d) && this.f40725e.equals(i0Var.f40725e)) {
                return true;
            }
        }
        return false;
    }

    @Override // gt.a
    public int f() {
        return this.f40724d.f();
    }

    public f0 f0() {
        return this.f40724d;
    }

    @Override // gt.a
    public int g() {
        return this.f40724d.g();
    }

    @Override // gt.g
    public int h() {
        return this.f40725e.h();
    }

    public int hashCode() {
        return (this.f40724d.hashCode() * 13) + (this.f40725e.hashCode() * 37);
    }

    @Override // gt.a
    public String toString() {
        return this.f40724d.toString() + this.f40725e.toString();
    }

    @Override // gt.a
    public int u() {
        return this.f40724d.u();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements jt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f40727a;

        /* renamed from: b  reason: collision with root package name */
        private final g f40728b;

        b(f fVar) {
            this.f40727a = fVar;
            this.f40728b = null;
        }

        @Override // jt.m0
        /* renamed from: c */
        public i0 b(i0 i0Var, long j10) {
            f0 f0Var;
            g0 g0Var;
            if (this.f40727a != null) {
                f0Var = (f0) i0Var.f40724d.K(j10, this.f40727a);
                g0Var = i0Var.f40725e;
            } else {
                j P0 = i0Var.f40725e.P0(j10, this.f40728b);
                g0 b10 = P0.b();
                f0Var = (f0) i0Var.f40724d.K(P0.a(), f.f40571s);
                g0Var = b10;
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // jt.m0
        /* renamed from: d */
        public long a(i0 i0Var, i0 i0Var2) {
            long f10;
            f fVar = this.f40727a;
            if (fVar != null) {
                long e10 = fVar.e(i0Var.f40724d, i0Var2.f40724d);
                int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
                if (i10 != 0) {
                    if (this.f40727a == f.f40571s || ((f0) i0Var.f40724d.K(e10, this.f40727a)).M(i0Var2.f40724d) == 0) {
                        g0 g0Var = i0Var.f40725e;
                        g0 g0Var2 = i0Var2.f40725e;
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
            } else if (i0Var.f40724d.P(i0Var2.f40724d)) {
                return -a(i0Var2, i0Var);
            } else {
                long L = i0Var.f40724d.L(i0Var2.f40724d, f.f40571s);
                if (L == 0) {
                    return this.f40728b.e(i0Var.f40725e, i0Var2.f40725e);
                }
                if (this.f40728b.compareTo(g.f40606i) <= 0) {
                    long i11 = gt.c.i(L, 86400L);
                    g0 g0Var3 = i0Var2.f40725e;
                    l0 l0Var = g0.K;
                    f10 = gt.c.f(i11, gt.c.m(((Integer) g0Var3.p(l0Var)).longValue(), ((Integer) i0Var.f40725e.p(l0Var)).longValue()));
                    if (i0Var.f40725e.a() > i0Var2.f40725e.a()) {
                        f10--;
                    }
                } else {
                    long i12 = gt.c.i(L, 86400000000000L);
                    g0 g0Var4 = i0Var2.f40725e;
                    l0 l0Var2 = g0.Q;
                    f10 = gt.c.f(i12, gt.c.m(((Long) g0Var4.p(l0Var2)).longValue(), ((Long) i0Var.f40725e.p(l0Var2)).longValue()));
                }
                switch (a.f40726a[this.f40728b.ordinal()]) {
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
                        throw new UnsupportedOperationException(this.f40728b.name());
                }
            }
        }

        b(g gVar) {
            this.f40727a = null;
            this.f40728b = gVar;
        }
    }
}
