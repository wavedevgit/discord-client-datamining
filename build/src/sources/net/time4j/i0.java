package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import kt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends kt.k0 implements ht.a, ht.g, kt.d0, lt.h {

    /* renamed from: i  reason: collision with root package name */
    private static final i0 f40582i;

    /* renamed from: o  reason: collision with root package name */
    private static final i0 f40583o;

    /* renamed from: p  reason: collision with root package name */
    private static final Map f40584p;

    /* renamed from: q  reason: collision with root package name */
    private static final kt.h0 f40585q;

    /* renamed from: r  reason: collision with root package name */
    private static final kt.j0 f40586r;
    private static final long serialVersionUID = 7458380065762437714L;

    /* renamed from: d  reason: collision with root package name */
    private final transient f0 f40587d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g0 f40588e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40589a;

        static {
            int[] iArr = new int[g.values().length];
            f40589a = iArr;
            try {
                iArr[g.f40467d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40589a[g.f40468e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40589a[g.f40469i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40589a[g.f40470o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40589a[g.f40471p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40589a[g.f40472q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c extends d {
        c(kt.p pVar) {
            super(pVar, null);
        }

        @Override // net.time4j.i0.d, kt.z
        /* renamed from: q */
        public boolean l(i0 i0Var, BigDecimal bigDecimal) {
            if (bigDecimal == null) {
                return false;
            }
            BigDecimal bigDecimal2 = (BigDecimal) ((d) this).f40592d.e();
            if (((BigDecimal) ((d) this).f40592d.A()).compareTo(bigDecimal) > 0 || bigDecimal.compareTo(bigDecimal2) > 0) {
                return false;
            }
            return true;
        }

        @Override // net.time4j.i0.d, kt.z
        /* renamed from: r */
        public i0 v(i0 i0Var, BigDecimal bigDecimal, boolean z10) {
            if (l(i0Var, bigDecimal)) {
                return i0.b0(i0Var.f40587d, (g0) i0Var.f40588e.E(((d) this).f40592d, bigDecimal));
            }
            throw new IllegalArgumentException("Out of range: " + bigDecimal);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d implements kt.z {

        /* renamed from: d  reason: collision with root package name */
        private final kt.p f40592d;

        /* synthetic */ d(kt.p pVar, a aVar) {
            this(pVar);
        }

        static d m(kt.p pVar) {
            return new d(pVar);
        }

        private long n(Object obj) {
            return ((Number) Number.class.cast(obj)).longValue();
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p a(i0 i0Var) {
            return (kt.p) i0.f40584p.get(this.f40592d);
        }

        @Override // kt.z
        /* renamed from: d */
        public kt.p g(i0 i0Var) {
            return (kt.p) i0.f40584p.get(this.f40592d);
        }

        @Override // kt.z
        /* renamed from: e */
        public Object h(i0 i0Var) {
            if (this.f40592d.y()) {
                return i0Var.f40587d.p(this.f40592d);
            }
            if (this.f40592d.C()) {
                return this.f40592d.e();
            }
            throw new kt.r("Missing rule for: " + this.f40592d.name());
        }

        @Override // kt.z
        /* renamed from: f */
        public Object o(i0 i0Var) {
            if (this.f40592d.y()) {
                return i0Var.f40587d.k(this.f40592d);
            }
            if (this.f40592d.C()) {
                return this.f40592d.A();
            }
            throw new kt.r("Missing rule for: " + this.f40592d.name());
        }

        @Override // kt.z
        /* renamed from: j */
        public Object x(i0 i0Var) {
            if (this.f40592d.y()) {
                return i0Var.f40587d.v(this.f40592d);
            }
            if (this.f40592d.C()) {
                return i0Var.f40588e.v(this.f40592d);
            }
            throw new kt.r("Missing rule for: " + this.f40592d.name());
        }

        @Override // kt.z
        /* renamed from: k */
        public boolean l(i0 i0Var, Object obj) {
            if (obj == null) {
                return false;
            }
            if (this.f40592d.y()) {
                return i0Var.f40587d.B(this.f40592d, obj);
            }
            if (this.f40592d.C()) {
                if (Number.class.isAssignableFrom(this.f40592d.getType())) {
                    long n10 = n(this.f40592d.A());
                    long n11 = n(this.f40592d.e());
                    long n12 = n(obj);
                    if (n10 > n12 || n11 < n12) {
                        return false;
                    }
                    return true;
                } else if (this.f40592d.equals(g0.f40485z) && g0.f40484y.equals(obj)) {
                    return false;
                } else {
                    return i0Var.f40588e.B(this.f40592d, obj);
                }
            }
            throw new kt.r("Missing rule for: " + this.f40592d.name());
        }

        @Override // kt.z
        /* renamed from: p */
        public i0 v(i0 i0Var, Object obj, boolean z10) {
            if (obj != null) {
                if (obj.equals(x(i0Var))) {
                    return i0Var;
                }
                if (z10) {
                    return (i0) i0Var.K(ht.c.m(n(obj), n(x(i0Var))), (w) i0.f40585q.N(this.f40592d));
                } else if (this.f40592d.y()) {
                    return i0.b0((f0) i0Var.f40587d.E(this.f40592d, obj), i0Var.f40588e);
                } else {
                    if (this.f40592d.C()) {
                        if (Number.class.isAssignableFrom(this.f40592d.getType())) {
                            long n10 = n(this.f40592d.A());
                            long n11 = n(this.f40592d.e());
                            long n12 = n(obj);
                            if (n10 > n12 || n11 < n12) {
                                throw new IllegalArgumentException("Out of range: " + obj);
                            }
                        } else if (this.f40592d.equals(g0.f40485z) && obj.equals(g0.f40484y)) {
                            throw new IllegalArgumentException("Out of range: " + obj);
                        }
                        return i0.b0(i0Var.f40587d, (g0) i0Var.f40588e.E(this.f40592d, obj));
                    }
                    throw new kt.r("Missing rule for: " + this.f40592d.name());
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        private d(kt.p pVar) {
            this.f40592d = pVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements kt.u {
        private e() {
        }

        @Override // kt.u
        public kt.f0 a() {
            return kt.f0.f36677a;
        }

        @Override // kt.u
        public kt.x b() {
            return null;
        }

        @Override // kt.u
        public int c() {
            return f0.r0().c();
        }

        @Override // kt.u
        /* renamed from: d */
        public i0 h(kt.q qVar, kt.d dVar, boolean z10, boolean z11) {
            boolean z12;
            f0 f0Var;
            g0 g0Var;
            net.time4j.tz.k kVar;
            if (qVar instanceof ht.f) {
                kt.c cVar = lt.a.f37629d;
                if (dVar.c(cVar)) {
                    kVar = (net.time4j.tz.k) dVar.b(cVar);
                } else if (z10) {
                    kVar = net.time4j.tz.p.f40787v;
                } else {
                    throw new IllegalArgumentException("Missing timezone attribute for type conversion.");
                }
                return a0.a0((ht.f) ht.f.class.cast(qVar)).t0(kVar);
            }
            if (z11 && qVar.t(g0.J) == 60) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12) {
                qVar.C(g0.J, 59);
            }
            kt.p pVar = f0.f40451y;
            if (qVar.s(pVar)) {
                f0Var = (f0) qVar.v(pVar);
            } else {
                f0Var = (f0) f0.r0().h(qVar, dVar, z10, false);
            }
            if (f0Var == null) {
                return null;
            }
            kt.p pVar2 = g0.f40485z;
            if (qVar.s(pVar2)) {
                g0Var = (g0) qVar.v(pVar2);
            } else {
                g0Var = (g0) g0.i0().h(qVar, dVar, z10, false);
                if (g0Var == null && z10) {
                    g0Var = g0.f40483x;
                }
            }
            if (g0Var == null) {
                return null;
            }
            kt.p pVar3 = x.f40793r;
            if (qVar.s(pVar3)) {
                f0Var = (f0) f0Var.K(((Long) qVar.v(pVar3)).longValue(), f.f40434s);
            }
            if (z12) {
                kt.b0 b0Var = kt.b0.LEAP_SECOND;
                Boolean bool = Boolean.TRUE;
                if (qVar.B(b0Var, bool)) {
                    qVar.E(b0Var, bool);
                }
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // kt.u
        public String g(kt.y yVar, Locale locale) {
            lt.e d10 = lt.e.d(yVar.a());
            return lt.b.u(d10, d10, locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // kt.u
        /* renamed from: e */
        public kt.o i(i0 i0Var, kt.d dVar) {
            return i0Var;
        }
    }

    static {
        i0 i0Var = new i0(f0.f40441o, g0.f40483x);
        f40582i = i0Var;
        f0 f0Var = f0.f40442p;
        kt.p pVar = g0.f40485z;
        i0 i0Var2 = new i0(f0Var, (g0) pVar.e());
        f40583o = i0Var2;
        HashMap hashMap = new HashMap();
        kt.p pVar2 = f0.f40451y;
        hashMap.put(pVar2, pVar);
        net.time4j.c cVar = f0.A;
        l0 l0Var = f0.E;
        hashMap.put(cVar, l0Var);
        net.time4j.c cVar2 = f0.B;
        hashMap.put(cVar2, a1.f40221x.n());
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
        f40584p = Collections.unmodifiableMap(hashMap);
        h0.b k10 = h0.b.k(w.class, i0.class, new e(null), i0Var, i0Var2);
        d m10 = d.m(pVar2);
        f fVar = f.f40434s;
        h0.b e10 = k10.e(pVar2, m10, fVar);
        d m11 = d.m(cVar);
        f fVar2 = f.f40430o;
        h0.b e11 = e10.e(cVar, m11, fVar2).e(cVar2, d.m(cVar2), x0.f40797d).e(c0Var, d.m(c0Var), f.f40431p);
        d m12 = d.m(c0Var2);
        f fVar3 = f.f40432q;
        h0.b d10 = e11.e(c0Var2, m12, fVar3).e(l0Var, d.m(l0Var), fVar3).e(l0Var3, d.m(l0Var3), fVar).e(c0Var3, d.m(c0Var3), fVar).e(l0Var4, d.m(l0Var4), fVar).e(l0Var2, d.m(l0Var2), fVar).e(d0Var, d.m(d0Var), f.f40433r).d(pVar, d.m(pVar)).d(d1Var, d.m(d1Var));
        d m13 = d.m(cVar3);
        g gVar = g.f40467d;
        h0.b e12 = d10.e(cVar3, m13, gVar).e(cVar4, d.m(cVar4), gVar).e(l0Var5, d.m(l0Var5), gVar).e(l0Var7, d.m(l0Var7), gVar).e(l0Var8, d.m(l0Var8), gVar);
        d m14 = d.m(l0Var6);
        g gVar2 = g.f40468e;
        h0.b e13 = e12.e(l0Var6, m14, gVar2).e(l0Var10, d.m(l0Var10), gVar2);
        d m15 = d.m(l0Var9);
        g gVar3 = g.f40469i;
        h0.b e14 = e13.e(l0Var9, m15, gVar3).e(l0Var12, d.m(l0Var12), gVar3);
        l0 l0Var13 = g0.L;
        d m16 = d.m(l0Var13);
        g gVar4 = g.f40470o;
        h0.b e15 = e14.e(l0Var13, m16, gVar4);
        l0 l0Var14 = g0.M;
        d m17 = d.m(l0Var14);
        g gVar5 = g.f40471p;
        h0.b e16 = e15.e(l0Var14, m17, gVar5);
        d m18 = d.m(l0Var11);
        g gVar6 = g.f40472q;
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
        kt.p pVar3 = g0.U;
        h0.b d14 = d13.d(pVar3, d.m(pVar3));
        c0(d14);
        d0(d14);
        e0(d14);
        f40585q = d14.h();
        f40586r = n.g(fVar2, fVar3, fVar, gVar, gVar2, gVar3, gVar6);
    }

    private i0(f0 f0Var, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40587d = (f0) f0Var.K(1L, f.f40434s);
            this.f40588e = g0.f40483x;
        } else if (f0Var != null) {
            this.f40587d = f0Var;
            this.f40588e = g0Var;
        } else {
            throw new NullPointerException("Missing date.");
        }
    }

    public static kt.h0 S() {
        return f40585q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i0 U(ht.f fVar, net.time4j.tz.p pVar) {
        long o10 = fVar.o() + pVar.m();
        int a10 = fVar.a() + pVar.l();
        if (a10 < 0) {
            a10 += 1000000000;
            o10--;
        } else if (a10 >= 1000000000) {
            a10 -= 1000000000;
            o10++;
        }
        f0 M0 = f0.M0(ht.c.b(o10, 86400), kt.a0.UNIX);
        int d10 = ht.c.d(o10, 86400);
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
        EnumSet range = EnumSet.range(f.f40427d, f.f40432q);
        EnumSet range2 = EnumSet.range(f.f40433r, f.f40434s);
        f[] values = f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            f fVar = values[i10];
            b bVar2 = new b(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(f.f40433r) < 0) {
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
        for (kt.s sVar : f0.r0().v()) {
            bVar.f(sVar);
        }
        for (kt.s sVar2 : g0.i0().v()) {
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
    @Override // kt.q
    /* renamed from: H */
    public kt.h0 w() {
        return f40585q;
    }

    public a0 Q(net.time4j.tz.p pVar) {
        long i10 = ht.c.i(this.f40587d.C0() + 730, 86400L) + (this.f40588e.h() * 3600) + (this.f40588e.e() * 60) + this.f40588e.d();
        int a10 = this.f40588e.a();
        long m10 = i10 - pVar.m();
        int l10 = a10 - pVar.l();
        if (l10 < 0) {
            l10 += 1000000000;
            m10--;
        } else if (l10 >= 1000000000) {
            l10 -= 1000000000;
            m10++;
        }
        return a0.l0(m10, l10, rt.f.POSIX);
    }

    public a0 R() {
        return Q(net.time4j.tz.p.f40787v);
    }

    @Override // java.lang.Comparable
    /* renamed from: T */
    public int compareTo(i0 i0Var) {
        if (this.f40587d.P(i0Var.f40587d)) {
            return 1;
        }
        if (this.f40587d.Q(i0Var.f40587d)) {
            return -1;
        }
        return this.f40588e.compareTo(i0Var.f40588e);
    }

    public f0 V() {
        return this.f40587d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.q
    /* renamed from: W */
    public i0 x() {
        return this;
    }

    public g0 X() {
        return this.f40588e;
    }

    public a0 Y(net.time4j.tz.l lVar) {
        if (lVar.J()) {
            return Q(lVar.A(this.f40587d, this.f40588e));
        }
        net.time4j.tz.o E = lVar.E();
        long b10 = E.b(this.f40587d, this.f40588e, lVar);
        a0 l02 = a0.l0(b10, this.f40588e.a(), rt.f.POSIX);
        if (E == net.time4j.tz.l.f40726p) {
            a0.W(b10, this);
        }
        return l02;
    }

    public a0 Z(net.time4j.tz.k kVar) {
        return Y(net.time4j.tz.l.N(kVar));
    }

    @Override // ht.g
    public int a() {
        return this.f40588e.a();
    }

    @Override // ht.g
    public int d() {
        return this.f40588e.d();
    }

    @Override // ht.g
    public int e() {
        return this.f40588e.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f40587d.equals(i0Var.f40587d) && this.f40588e.equals(i0Var.f40588e)) {
                return true;
            }
        }
        return false;
    }

    @Override // ht.a
    public int f() {
        return this.f40587d.f();
    }

    public f0 f0() {
        return this.f40587d;
    }

    @Override // ht.a
    public int g() {
        return this.f40587d.g();
    }

    @Override // ht.g
    public int h() {
        return this.f40588e.h();
    }

    public int hashCode() {
        return (this.f40587d.hashCode() * 13) + (this.f40588e.hashCode() * 37);
    }

    @Override // ht.a
    public int r() {
        return this.f40587d.r();
    }

    @Override // ht.a
    public String toString() {
        return this.f40587d.toString() + this.f40588e.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements kt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f40590a;

        /* renamed from: b  reason: collision with root package name */
        private final g f40591b;

        b(f fVar) {
            this.f40590a = fVar;
            this.f40591b = null;
        }

        @Override // kt.m0
        /* renamed from: c */
        public i0 b(i0 i0Var, long j10) {
            f0 f0Var;
            g0 g0Var;
            if (this.f40590a != null) {
                f0Var = (f0) i0Var.f40587d.K(j10, this.f40590a);
                g0Var = i0Var.f40588e;
            } else {
                j P0 = i0Var.f40588e.P0(j10, this.f40591b);
                g0 b10 = P0.b();
                f0Var = (f0) i0Var.f40587d.K(P0.a(), f.f40434s);
                g0Var = b10;
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // kt.m0
        /* renamed from: d */
        public long a(i0 i0Var, i0 i0Var2) {
            long f10;
            f fVar = this.f40590a;
            if (fVar != null) {
                long e10 = fVar.e(i0Var.f40587d, i0Var2.f40587d);
                int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
                if (i10 != 0) {
                    if (this.f40590a == f.f40434s || ((f0) i0Var.f40587d.K(e10, this.f40590a)).M(i0Var2.f40587d) == 0) {
                        g0 g0Var = i0Var.f40588e;
                        g0 g0Var2 = i0Var2.f40588e;
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
            } else if (i0Var.f40587d.P(i0Var2.f40587d)) {
                return -a(i0Var2, i0Var);
            } else {
                long L = i0Var.f40587d.L(i0Var2.f40587d, f.f40434s);
                if (L == 0) {
                    return this.f40591b.e(i0Var.f40588e, i0Var2.f40588e);
                }
                if (this.f40591b.compareTo(g.f40469i) <= 0) {
                    long i11 = ht.c.i(L, 86400L);
                    g0 g0Var3 = i0Var2.f40588e;
                    l0 l0Var = g0.K;
                    f10 = ht.c.f(i11, ht.c.m(((Integer) g0Var3.v(l0Var)).longValue(), ((Integer) i0Var.f40588e.v(l0Var)).longValue()));
                    if (i0Var.f40588e.a() > i0Var2.f40588e.a()) {
                        f10--;
                    }
                } else {
                    long i12 = ht.c.i(L, 86400000000000L);
                    g0 g0Var4 = i0Var2.f40588e;
                    l0 l0Var2 = g0.Q;
                    f10 = ht.c.f(i12, ht.c.m(((Long) g0Var4.v(l0Var2)).longValue(), ((Long) i0Var.f40588e.v(l0Var2)).longValue()));
                }
                switch (a.f40589a[this.f40591b.ordinal()]) {
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
                        throw new UnsupportedOperationException(this.f40591b.name());
                }
            }
        }

        b(g gVar) {
            this.f40590a = null;
            this.f40591b = gVar;
        }
    }
}
