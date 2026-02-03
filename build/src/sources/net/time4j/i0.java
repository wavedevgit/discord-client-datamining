package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import mt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends mt.k0 implements kt.a, kt.g, mt.d0, nt.h {

    /* renamed from: i  reason: collision with root package name */
    private static final i0 f40621i;

    /* renamed from: o  reason: collision with root package name */
    private static final i0 f40622o;

    /* renamed from: p  reason: collision with root package name */
    private static final Map f40623p;

    /* renamed from: q  reason: collision with root package name */
    private static final mt.h0 f40624q;

    /* renamed from: r  reason: collision with root package name */
    private static final mt.j0 f40625r;
    private static final long serialVersionUID = 7458380065762437714L;

    /* renamed from: d  reason: collision with root package name */
    private final transient f0 f40626d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g0 f40627e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40628a;

        static {
            int[] iArr = new int[g.values().length];
            f40628a = iArr;
            try {
                iArr[g.f40506d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40628a[g.f40507e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40628a[g.f40508i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40628a[g.f40509o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40628a[g.f40510p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40628a[g.f40511q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c extends d {
        c(mt.p pVar) {
            super(pVar, null);
        }

        @Override // net.time4j.i0.d, mt.z
        /* renamed from: n */
        public boolean q(i0 i0Var, BigDecimal bigDecimal) {
            if (bigDecimal == null) {
                return false;
            }
            BigDecimal bigDecimal2 = (BigDecimal) ((d) this).f40631d.f();
            if (((BigDecimal) ((d) this).f40631d.A()).compareTo(bigDecimal) > 0 || bigDecimal.compareTo(bigDecimal2) > 0) {
                return false;
            }
            return true;
        }

        @Override // net.time4j.i0.d, mt.z
        /* renamed from: p */
        public i0 x(i0 i0Var, BigDecimal bigDecimal, boolean z10) {
            if (q(i0Var, bigDecimal)) {
                return i0.b0(i0Var.f40626d, (g0) i0Var.f40627e.E(((d) this).f40631d, bigDecimal));
            }
            throw new IllegalArgumentException("Out of range: " + bigDecimal);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d implements mt.z {

        /* renamed from: d  reason: collision with root package name */
        private final mt.p f40631d;

        /* synthetic */ d(mt.p pVar, a aVar) {
            this(pVar);
        }

        static d j(mt.p pVar) {
            return new d(pVar);
        }

        private long k(Object obj) {
            return ((Number) Number.class.cast(obj)).longValue();
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(i0 i0Var) {
            return (mt.p) i0.f40623p.get(this.f40631d);
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(i0 i0Var) {
            return (mt.p) i0.f40623p.get(this.f40631d);
        }

        @Override // mt.z
        /* renamed from: e */
        public Object l(i0 i0Var) {
            if (this.f40631d.y()) {
                return i0Var.f40626d.u(this.f40631d);
            }
            if (this.f40631d.C()) {
                return this.f40631d.f();
            }
            throw new mt.r("Missing rule for: " + this.f40631d.name());
        }

        @Override // mt.z
        /* renamed from: f */
        public Object r(i0 i0Var) {
            if (this.f40631d.y()) {
                return i0Var.f40626d.v(this.f40631d);
            }
            if (this.f40631d.C()) {
                return this.f40631d.A();
            }
            throw new mt.r("Missing rule for: " + this.f40631d.name());
        }

        @Override // mt.z
        /* renamed from: g */
        public Object z(i0 i0Var) {
            if (this.f40631d.y()) {
                return i0Var.f40626d.o(this.f40631d);
            }
            if (this.f40631d.C()) {
                return i0Var.f40627e.o(this.f40631d);
            }
            throw new mt.r("Missing rule for: " + this.f40631d.name());
        }

        @Override // mt.z
        /* renamed from: i */
        public boolean q(i0 i0Var, Object obj) {
            if (obj == null) {
                return false;
            }
            if (this.f40631d.y()) {
                return i0Var.f40626d.B(this.f40631d, obj);
            }
            if (this.f40631d.C()) {
                if (Number.class.isAssignableFrom(this.f40631d.getType())) {
                    long k10 = k(this.f40631d.A());
                    long k11 = k(this.f40631d.f());
                    long k12 = k(obj);
                    if (k10 > k12 || k11 < k12) {
                        return false;
                    }
                    return true;
                } else if (this.f40631d.equals(g0.f40524z) && g0.f40523y.equals(obj)) {
                    return false;
                } else {
                    return i0Var.f40627e.B(this.f40631d, obj);
                }
            }
            throw new mt.r("Missing rule for: " + this.f40631d.name());
        }

        @Override // mt.z
        /* renamed from: m */
        public i0 x(i0 i0Var, Object obj, boolean z10) {
            if (obj != null) {
                if (obj.equals(z(i0Var))) {
                    return i0Var;
                }
                if (z10) {
                    return (i0) i0Var.K(kt.c.m(k(obj), k(z(i0Var))), (w) i0.f40624q.N(this.f40631d));
                } else if (this.f40631d.y()) {
                    return i0.b0((f0) i0Var.f40626d.E(this.f40631d, obj), i0Var.f40627e);
                } else {
                    if (this.f40631d.C()) {
                        if (Number.class.isAssignableFrom(this.f40631d.getType())) {
                            long k10 = k(this.f40631d.A());
                            long k11 = k(this.f40631d.f());
                            long k12 = k(obj);
                            if (k10 > k12 || k11 < k12) {
                                throw new IllegalArgumentException("Out of range: " + obj);
                            }
                        } else if (this.f40631d.equals(g0.f40524z) && obj.equals(g0.f40523y)) {
                            throw new IllegalArgumentException("Out of range: " + obj);
                        }
                        return i0.b0(i0Var.f40626d, (g0) i0Var.f40627e.E(this.f40631d, obj));
                    }
                    throw new mt.r("Missing rule for: " + this.f40631d.name());
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        private d(mt.p pVar) {
            this.f40631d = pVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements mt.u {
        private e() {
        }

        @Override // mt.u
        public mt.f0 a() {
            return mt.f0.f39404a;
        }

        @Override // mt.u
        public mt.x b() {
            return null;
        }

        @Override // mt.u
        public int c() {
            return f0.r0().c();
        }

        @Override // mt.u
        /* renamed from: d */
        public i0 m(mt.q qVar, mt.d dVar, boolean z10, boolean z11) {
            boolean z12;
            f0 f0Var;
            g0 g0Var;
            net.time4j.tz.k kVar;
            if (qVar instanceof kt.f) {
                mt.c cVar = nt.a.f42029d;
                if (dVar.a(cVar)) {
                    kVar = (net.time4j.tz.k) dVar.c(cVar);
                } else if (z10) {
                    kVar = net.time4j.tz.p.f40826v;
                } else {
                    throw new IllegalArgumentException("Missing timezone attribute for type conversion.");
                }
                return a0.a0((kt.f) kt.f.class.cast(qVar)).t0(kVar);
            }
            if (z11 && qVar.j(g0.J) == 60) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12) {
                qVar.C(g0.J, 59);
            }
            mt.p pVar = f0.f40490y;
            if (qVar.q(pVar)) {
                f0Var = (f0) qVar.o(pVar);
            } else {
                f0Var = (f0) f0.r0().m(qVar, dVar, z10, false);
            }
            if (f0Var == null) {
                return null;
            }
            mt.p pVar2 = g0.f40524z;
            if (qVar.q(pVar2)) {
                g0Var = (g0) qVar.o(pVar2);
            } else {
                g0Var = (g0) g0.i0().m(qVar, dVar, z10, false);
                if (g0Var == null && z10) {
                    g0Var = g0.f40522x;
                }
            }
            if (g0Var == null) {
                return null;
            }
            mt.p pVar3 = x.f40832r;
            if (qVar.q(pVar3)) {
                f0Var = (f0) f0Var.K(((Long) qVar.o(pVar3)).longValue(), f.f40473s);
            }
            if (z12) {
                mt.b0 b0Var = mt.b0.LEAP_SECOND;
                Boolean bool = Boolean.TRUE;
                if (qVar.B(b0Var, bool)) {
                    qVar.E(b0Var, bool);
                }
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // mt.u
        public String l(mt.y yVar, Locale locale) {
            nt.e d10 = nt.e.d(yVar.a());
            return nt.b.u(d10, d10, locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // mt.u
        /* renamed from: e */
        public mt.o h(i0 i0Var, mt.d dVar) {
            return i0Var;
        }
    }

    static {
        i0 i0Var = new i0(f0.f40480o, g0.f40522x);
        f40621i = i0Var;
        f0 f0Var = f0.f40481p;
        mt.p pVar = g0.f40524z;
        i0 i0Var2 = new i0(f0Var, (g0) pVar.f());
        f40622o = i0Var2;
        HashMap hashMap = new HashMap();
        mt.p pVar2 = f0.f40490y;
        hashMap.put(pVar2, pVar);
        net.time4j.c cVar = f0.A;
        l0 l0Var = f0.E;
        hashMap.put(cVar, l0Var);
        net.time4j.c cVar2 = f0.B;
        hashMap.put(cVar2, a1.f40260x.n());
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
        f40623p = Collections.unmodifiableMap(hashMap);
        h0.b k10 = h0.b.k(w.class, i0.class, new e(null), i0Var, i0Var2);
        d j10 = d.j(pVar2);
        f fVar = f.f40473s;
        h0.b e10 = k10.e(pVar2, j10, fVar);
        d j11 = d.j(cVar);
        f fVar2 = f.f40469o;
        h0.b e11 = e10.e(cVar, j11, fVar2).e(cVar2, d.j(cVar2), x0.f40836d).e(c0Var, d.j(c0Var), f.f40470p);
        d j12 = d.j(c0Var2);
        f fVar3 = f.f40471q;
        h0.b d10 = e11.e(c0Var2, j12, fVar3).e(l0Var, d.j(l0Var), fVar3).e(l0Var3, d.j(l0Var3), fVar).e(c0Var3, d.j(c0Var3), fVar).e(l0Var4, d.j(l0Var4), fVar).e(l0Var2, d.j(l0Var2), fVar).e(d0Var, d.j(d0Var), f.f40472r).d(pVar, d.j(pVar)).d(d1Var, d.j(d1Var));
        d j13 = d.j(cVar3);
        g gVar = g.f40506d;
        h0.b e12 = d10.e(cVar3, j13, gVar).e(cVar4, d.j(cVar4), gVar).e(l0Var5, d.j(l0Var5), gVar).e(l0Var7, d.j(l0Var7), gVar).e(l0Var8, d.j(l0Var8), gVar);
        d j14 = d.j(l0Var6);
        g gVar2 = g.f40507e;
        h0.b e13 = e12.e(l0Var6, j14, gVar2).e(l0Var10, d.j(l0Var10), gVar2);
        d j15 = d.j(l0Var9);
        g gVar3 = g.f40508i;
        h0.b e14 = e13.e(l0Var9, j15, gVar3).e(l0Var12, d.j(l0Var12), gVar3);
        l0 l0Var13 = g0.L;
        d j16 = d.j(l0Var13);
        g gVar4 = g.f40509o;
        h0.b e15 = e14.e(l0Var13, j16, gVar4);
        l0 l0Var14 = g0.M;
        d j17 = d.j(l0Var14);
        g gVar5 = g.f40510p;
        h0.b e16 = e15.e(l0Var14, j17, gVar5);
        d j18 = d.j(l0Var11);
        g gVar6 = g.f40511q;
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
        mt.p pVar3 = g0.U;
        h0.b d14 = d13.d(pVar3, d.j(pVar3));
        c0(d14);
        d0(d14);
        e0(d14);
        f40624q = d14.h();
        f40625r = n.g(fVar2, fVar3, fVar, gVar, gVar2, gVar3, gVar6);
    }

    private i0(f0 f0Var, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40626d = (f0) f0Var.K(1L, f.f40473s);
            this.f40627e = g0.f40522x;
        } else if (f0Var != null) {
            this.f40626d = f0Var;
            this.f40627e = g0Var;
        } else {
            throw new NullPointerException("Missing date.");
        }
    }

    public static mt.h0 S() {
        return f40624q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i0 U(kt.f fVar, net.time4j.tz.p pVar) {
        long p10 = fVar.p() + pVar.l();
        int a10 = fVar.a() + pVar.k();
        if (a10 < 0) {
            a10 += 1000000000;
            p10--;
        } else if (a10 >= 1000000000) {
            a10 -= 1000000000;
            p10++;
        }
        f0 M0 = f0.M0(kt.c.b(p10, 86400), mt.a0.UNIX);
        int d10 = kt.c.d(p10, 86400);
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
        EnumSet range = EnumSet.range(f.f40466d, f.f40471q);
        EnumSet range2 = EnumSet.range(f.f40472r, f.f40473s);
        f[] values = f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            f fVar = values[i10];
            b bVar2 = new b(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(f.f40472r) < 0) {
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
        for (mt.s sVar : f0.r0().x()) {
            bVar.f(sVar);
        }
        for (mt.s sVar2 : g0.i0().x()) {
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
    @Override // mt.q
    /* renamed from: H */
    public mt.h0 w() {
        return f40624q;
    }

    public a0 Q(net.time4j.tz.p pVar) {
        long i10 = kt.c.i(this.f40626d.C0() + 730, 86400L) + (this.f40627e.h() * 3600) + (this.f40627e.e() * 60) + this.f40627e.d();
        int a10 = this.f40627e.a();
        long l10 = i10 - pVar.l();
        int k10 = a10 - pVar.k();
        if (k10 < 0) {
            k10 += 1000000000;
            l10--;
        } else if (k10 >= 1000000000) {
            k10 -= 1000000000;
            l10++;
        }
        return a0.l0(l10, k10, tt.f.POSIX);
    }

    public a0 R() {
        return Q(net.time4j.tz.p.f40826v);
    }

    @Override // java.lang.Comparable
    /* renamed from: T */
    public int compareTo(i0 i0Var) {
        if (this.f40626d.P(i0Var.f40626d)) {
            return 1;
        }
        if (this.f40626d.Q(i0Var.f40626d)) {
            return -1;
        }
        return this.f40627e.compareTo(i0Var.f40627e);
    }

    public f0 V() {
        return this.f40626d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.q
    /* renamed from: W */
    public i0 x() {
        return this;
    }

    public g0 X() {
        return this.f40627e;
    }

    public a0 Y(net.time4j.tz.l lVar) {
        if (lVar.J()) {
            return Q(lVar.A(this.f40626d, this.f40627e));
        }
        net.time4j.tz.o E = lVar.E();
        long a10 = E.a(this.f40626d, this.f40627e, lVar);
        a0 l02 = a0.l0(a10, this.f40627e.a(), tt.f.POSIX);
        if (E == net.time4j.tz.l.f40765p) {
            a0.W(a10, this);
        }
        return l02;
    }

    public a0 Z(net.time4j.tz.k kVar) {
        return Y(net.time4j.tz.l.N(kVar));
    }

    @Override // kt.g
    public int a() {
        return this.f40627e.a();
    }

    @Override // kt.g
    public int d() {
        return this.f40627e.d();
    }

    @Override // kt.g
    public int e() {
        return this.f40627e.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f40626d.equals(i0Var.f40626d) && this.f40627e.equals(i0Var.f40627e)) {
                return true;
            }
        }
        return false;
    }

    @Override // kt.a
    public int f() {
        return this.f40626d.f();
    }

    public f0 f0() {
        return this.f40626d;
    }

    @Override // kt.a
    public int g() {
        return this.f40626d.g();
    }

    @Override // kt.g
    public int h() {
        return this.f40627e.h();
    }

    public int hashCode() {
        return (this.f40626d.hashCode() * 13) + (this.f40627e.hashCode() * 37);
    }

    @Override // kt.a
    public int s() {
        return this.f40626d.s();
    }

    @Override // kt.a
    public String toString() {
        return this.f40626d.toString() + this.f40627e.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements mt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f40629a;

        /* renamed from: b  reason: collision with root package name */
        private final g f40630b;

        b(f fVar) {
            this.f40629a = fVar;
            this.f40630b = null;
        }

        @Override // mt.m0
        /* renamed from: c */
        public i0 b(i0 i0Var, long j10) {
            f0 f0Var;
            g0 g0Var;
            if (this.f40629a != null) {
                f0Var = (f0) i0Var.f40626d.K(j10, this.f40629a);
                g0Var = i0Var.f40627e;
            } else {
                j P0 = i0Var.f40627e.P0(j10, this.f40630b);
                g0 b10 = P0.b();
                f0Var = (f0) i0Var.f40626d.K(P0.a(), f.f40473s);
                g0Var = b10;
            }
            return i0.b0(f0Var, g0Var);
        }

        @Override // mt.m0
        /* renamed from: d */
        public long a(i0 i0Var, i0 i0Var2) {
            long f10;
            f fVar = this.f40629a;
            if (fVar != null) {
                long e10 = fVar.e(i0Var.f40626d, i0Var2.f40626d);
                int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
                if (i10 != 0) {
                    if (this.f40629a == f.f40473s || ((f0) i0Var.f40626d.K(e10, this.f40629a)).M(i0Var2.f40626d) == 0) {
                        g0 g0Var = i0Var.f40627e;
                        g0 g0Var2 = i0Var2.f40627e;
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
            } else if (i0Var.f40626d.P(i0Var2.f40626d)) {
                return -a(i0Var2, i0Var);
            } else {
                long L = i0Var.f40626d.L(i0Var2.f40626d, f.f40473s);
                if (L == 0) {
                    return this.f40630b.e(i0Var.f40627e, i0Var2.f40627e);
                }
                if (this.f40630b.compareTo(g.f40508i) <= 0) {
                    long i11 = kt.c.i(L, 86400L);
                    g0 g0Var3 = i0Var2.f40627e;
                    l0 l0Var = g0.K;
                    f10 = kt.c.f(i11, kt.c.m(((Integer) g0Var3.o(l0Var)).longValue(), ((Integer) i0Var.f40627e.o(l0Var)).longValue()));
                    if (i0Var.f40627e.a() > i0Var2.f40627e.a()) {
                        f10--;
                    }
                } else {
                    long i12 = kt.c.i(L, 86400000000000L);
                    g0 g0Var4 = i0Var2.f40627e;
                    l0 l0Var2 = g0.Q;
                    f10 = kt.c.f(i12, kt.c.m(((Long) g0Var4.o(l0Var2)).longValue(), ((Long) i0Var.f40627e.o(l0Var2)).longValue()));
                }
                switch (a.f40628a[this.f40630b.ordinal()]) {
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
                        throw new UnsupportedOperationException(this.f40630b.name());
                }
            }
        }

        b(g gVar) {
            this.f40629a = null;
            this.f40630b = gVar;
        }
    }
}
