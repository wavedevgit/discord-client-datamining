package net.time4j;

import bu.h0;
import java.io.DataInput;
import java.io.DataOutput;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends bu.k0 implements iu.g {
    private static final bu.v A;

    /* renamed from: i  reason: collision with root package name */
    private static final long f37764i;

    /* renamed from: o  reason: collision with root package name */
    private static final long f37765o;

    /* renamed from: p  reason: collision with root package name */
    private static final a0 f37766p;

    /* renamed from: q  reason: collision with root package name */
    private static final a0 f37767q;

    /* renamed from: r  reason: collision with root package name */
    private static final a0 f37768r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f37769s;
    private static final long serialVersionUID = -3192884724477742274L;

    /* renamed from: t  reason: collision with root package name */
    private static final Map f37770t;

    /* renamed from: u  reason: collision with root package name */
    private static final Map f37771u;

    /* renamed from: v  reason: collision with root package name */
    private static final bu.h0 f37772v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f37773w;

    /* renamed from: x  reason: collision with root package name */
    public static final bu.p f37774x;

    /* renamed from: y  reason: collision with root package name */
    public static final bu.p f37775y;

    /* renamed from: z  reason: collision with root package name */
    public static final bu.p f37776z;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f37777d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f37778e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37779a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f37780b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f37781c;

        static {
            int[] iArr = new int[TimeUnit.values().length];
            f37781c = iArr;
            try {
                iArr[TimeUnit.DAYS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37781c[TimeUnit.HOURS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37781c[TimeUnit.MINUTES.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f37781c[TimeUnit.SECONDS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f37781c[TimeUnit.MILLISECONDS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f37781c[TimeUnit.MICROSECONDS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f37781c[TimeUnit.NANOSECONDS.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            int[] iArr2 = new int[o0.values().length];
            f37780b = iArr2;
            try {
                iArr2[o0.SECONDS.ordinal()] = 1;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f37780b[o0.NANOSECONDS.ordinal()] = 2;
            } catch (NoSuchFieldError unused9) {
            }
            int[] iArr3 = new int[iu.f.values().length];
            f37779a = iArr3;
            try {
                iArr3[iu.f.POSIX.ordinal()] = 1;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f37779a[iu.f.UTC.ordinal()] = 2;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f37779a[iu.f.TAI.ordinal()] = 3;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f37779a[iu.f.GPS.ordinal()] = 4;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f37779a[iu.f.TT.ordinal()] = 5;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f37779a[iu.f.UT.ordinal()] = 6;
            } catch (NoSuchFieldError unused15) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements bu.i0 {
        private b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(a0 a0Var, a0 a0Var2) {
            return a0Var.compareTo(a0Var2);
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum c implements bu.p, bu.z {
        FRACTION;

        @Override // bu.p
        public boolean A() {
            return false;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.z
        /* renamed from: D */
        public bu.p a(a0 a0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: E */
        public bu.p h(a0 a0Var) {
            return null;
        }

        @Override // bu.p
        /* renamed from: F */
        public Integer f() {
            return 999999999;
        }

        @Override // bu.p
        /* renamed from: G */
        public Integer B() {
            return 0;
        }

        @Override // bu.z
        /* renamed from: H */
        public Integer m(a0 a0Var) {
            return f();
        }

        @Override // bu.z
        /* renamed from: I */
        public Integer q(a0 a0Var) {
            return B();
        }

        @Override // bu.z
        /* renamed from: J */
        public Integer y(a0 a0Var) {
            return Integer.valueOf(a0Var.a());
        }

        @Override // bu.z
        /* renamed from: K */
        public boolean o(a0 a0Var, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 0 || intValue >= 1000000000) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: L */
        public a0 x(a0 a0Var, Integer num, boolean z10) {
            if (num != null) {
                if (iu.d.x().G()) {
                    iu.f fVar = iu.f.UTC;
                    return a0.l0(a0Var.s(fVar), num.intValue(), fVar);
                }
                return a0.l0(a0Var.o(), num.intValue(), iu.f.POSIX);
            }
            throw new IllegalArgumentException("Missing fraction value.");
        }

        @Override // bu.p
        public char d() {
            return (char) 0;
        }

        @Override // bu.p
        public Class getType() {
            return Integer.class;
        }

        @Override // bu.p
        public boolean k() {
            return false;
        }

        @Override // java.util.Comparator
        /* renamed from: z */
        public int compare(bu.o oVar, bu.o oVar2) {
            return ((Integer) oVar.k(this)).compareTo((Integer) oVar2.k(this));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum d implements bu.p, bu.z {
        POSIX_TIME;

        @Override // bu.p
        public boolean A() {
            return false;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.z
        /* renamed from: D */
        public bu.p a(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // bu.z
        /* renamed from: E */
        public bu.p h(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // bu.p
        /* renamed from: F */
        public Long f() {
            return Long.valueOf(a0.f37765o);
        }

        @Override // bu.p
        /* renamed from: G */
        public Long B() {
            return Long.valueOf(a0.f37764i);
        }

        @Override // bu.z
        /* renamed from: H */
        public Long m(a0 a0Var) {
            return Long.valueOf(a0.f37765o);
        }

        @Override // bu.z
        /* renamed from: I */
        public Long q(a0 a0Var) {
            return Long.valueOf(a0.f37764i);
        }

        @Override // bu.z
        /* renamed from: J */
        public Long y(a0 a0Var) {
            return Long.valueOf(a0Var.o());
        }

        @Override // bu.z
        /* renamed from: K */
        public boolean o(a0 a0Var, Long l10) {
            if (l10 == null) {
                return false;
            }
            long longValue = l10.longValue();
            if (longValue < a0.f37764i || longValue > a0.f37765o) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: L */
        public a0 x(a0 a0Var, Long l10, boolean z10) {
            if (l10 != null) {
                return a0.l0(l10.longValue(), a0Var.a(), iu.f.POSIX);
            }
            throw new IllegalArgumentException("Missing elapsed seconds.");
        }

        @Override // bu.p
        public char d() {
            return (char) 0;
        }

        @Override // bu.p
        public Class getType() {
            return Long.class;
        }

        @Override // bu.p
        public boolean k() {
            return false;
        }

        @Override // java.util.Comparator
        /* renamed from: z */
        public int compare(bu.o oVar, bu.o oVar2) {
            return ((Long) oVar.k(this)).compareTo((Long) oVar2.k(this));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements bu.u {
        private e() {
        }

        @Override // bu.u
        public bu.f0 a() {
            return bu.f0.f7804a;
        }

        @Override // bu.u
        public bu.x b() {
            return i0.S();
        }

        @Override // bu.u
        public int c() {
            return f0.r0().c();
        }

        @Override // bu.u
        /* renamed from: d */
        public a0 h(bu.q qVar, bu.d dVar, boolean z10, boolean z11) {
            i0 i0Var;
            net.time4j.tz.k kVar;
            a0 a0Var;
            net.time4j.tz.p B;
            a0 a0Var2;
            iu.f fVar = (iu.f) dVar.b(cu.a.f21131w, iu.f.UTC);
            if (qVar instanceof zt.f) {
                return a0.a0((zt.f) zt.f.class.cast(qVar)).u0(fVar);
            }
            d dVar2 = d.POSIX_TIME;
            if (qVar.n(dVar2)) {
                long longValue = ((Long) qVar.k(dVar2)).longValue();
                c cVar = c.FRACTION;
                return a0.l0(longValue, qVar.n(cVar) ? ((Integer) qVar.k(cVar)).intValue() : 0, iu.f.POSIX).u0(fVar);
            }
            if (qVar.n(bu.b0.LEAP_SECOND)) {
                qVar.C(g0.J, 60);
                r3 = 1;
            }
            bu.p M = i0.S().M();
            if (qVar.n(M)) {
                i0Var = (i0) qVar.k(M);
            } else {
                i0Var = (i0) i0.S().h(qVar, dVar, z10, z11);
            }
            if (i0Var == null) {
                return null;
            }
            if (qVar.l()) {
                kVar = qVar.r();
            } else {
                bu.c cVar2 = cu.a.f21112d;
                kVar = dVar.a(cVar2) ? (net.time4j.tz.k) dVar.c(cVar2) : null;
            }
            if (kVar != null) {
                bu.b0 b0Var = bu.b0.DAYLIGHT_SAVING;
                if (qVar.n(b0Var)) {
                    a0Var = i0Var.Y(net.time4j.tz.l.N(kVar).Q(((net.time4j.tz.o) dVar.b(cu.a.f21113e, net.time4j.tz.l.f38292o)).a(((Boolean) qVar.k(b0Var)).booleanValue() ? net.time4j.tz.g.EARLIER_OFFSET : net.time4j.tz.g.LATER_OFFSET)));
                } else {
                    bu.c cVar3 = cu.a.f21113e;
                    if (dVar.a(cVar3)) {
                        a0Var = i0Var.Y(net.time4j.tz.l.N(kVar).Q((net.time4j.tz.o) dVar.c(cVar3)));
                    } else {
                        a0Var = i0Var.Z(kVar);
                    }
                }
            } else {
                a0Var = null;
            }
            if (a0Var == null) {
                return null;
            }
            if (r3 != 0) {
                if (kVar instanceof net.time4j.tz.p) {
                    B = (net.time4j.tz.p) kVar;
                } else {
                    B = net.time4j.tz.l.N(kVar).B(a0Var);
                }
                if (B.l() == 0 && B.k() % 60 == 0) {
                    if (a0Var.c0().f() >= 1972) {
                        a0Var2 = a0Var.n0(1L, o0.SECONDS);
                    } else {
                        a0Var2 = new a0(a0Var.a(), a0Var.o() + 1, (a) null);
                    }
                    if (!z10) {
                        if (iu.d.x().G()) {
                            if (!a0Var2.k0()) {
                                throw new IllegalArgumentException("SECOND_OF_MINUTE parsed as invalid leapsecond before " + a0Var2);
                            }
                        }
                    }
                    a0Var = a0Var2;
                } else {
                    throw new IllegalArgumentException("Leap second is only allowed  with timezone-offset in full minutes: " + B);
                }
            }
            return a0Var.u0(fVar);
        }

        @Override // bu.u
        /* renamed from: e */
        public bu.o m(a0 a0Var, bu.d dVar) {
            bu.c cVar = cu.a.f21112d;
            if (dVar.a(cVar)) {
                return a0Var.v0((iu.f) dVar.b(cu.a.f21131w, iu.f.UTC)).h0((net.time4j.tz.k) dVar.c(cVar));
            }
            throw new IllegalArgumentException("Cannot print moment without timezone.");
        }

        @Override // bu.u
        public String j(bu.y yVar, Locale locale) {
            cu.e d10 = cu.e.d(yVar.a());
            return cu.b.s(d10, d10, locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements bu.v {
        private f() {
        }

        @Override // bu.v
        /* renamed from: a */
        public a0 apply(a0 a0Var) {
            iu.b D;
            iu.d x10 = iu.d.x();
            if (x10.G() && (D = x10.D(a0Var.s(iu.f.UTC))) != null) {
                return f0.w0(D.c()).q0(23, 59, 59).R().n0(D.a(), o0.SECONDS);
            }
            return null;
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g implements bu.z {
        private g() {
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(a0 a0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(a0 a0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public TimeUnit m(a0 a0Var) {
            return TimeUnit.NANOSECONDS;
        }

        @Override // bu.z
        /* renamed from: e */
        public TimeUnit q(a0 a0Var) {
            return TimeUnit.DAYS;
        }

        @Override // bu.z
        /* renamed from: f */
        public TimeUnit y(a0 a0Var) {
            int a10 = a0Var.a();
            if (a10 == 0) {
                long j10 = a0Var.f37777d;
                if (zt.c.d(j10, 86400) == 0) {
                    return TimeUnit.DAYS;
                }
                if (zt.c.d(j10, 3600) == 0) {
                    return TimeUnit.HOURS;
                }
                if (zt.c.d(j10, 60) == 0) {
                    return TimeUnit.MINUTES;
                }
                return TimeUnit.SECONDS;
            } else if (a10 % 1000000 == 0) {
                return TimeUnit.MILLISECONDS;
            } else {
                if (a10 % 1000 == 0) {
                    return TimeUnit.MICROSECONDS;
                }
                return TimeUnit.NANOSECONDS;
            }
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(a0 a0Var, TimeUnit timeUnit) {
            return timeUnit != null;
        }

        @Override // bu.z
        /* renamed from: i */
        public a0 x(a0 a0Var, TimeUnit timeUnit, boolean z10) {
            a0 l02;
            if (timeUnit != null) {
                switch (a.f37781c[timeUnit.ordinal()]) {
                    case 1:
                        return a0.m0(zt.c.b(a0Var.f37777d, 86400) * 86400, iu.f.POSIX);
                    case 2:
                        return a0.m0(zt.c.b(a0Var.f37777d, 3600) * 3600, iu.f.POSIX);
                    case 3:
                        return a0.m0(zt.c.b(a0Var.f37777d, 60) * 60, iu.f.POSIX);
                    case 4:
                        l02 = a0.l0(a0Var.f37777d, 0, iu.f.POSIX);
                        break;
                    case 5:
                        l02 = a0.l0(a0Var.f37777d, (a0Var.a() / 1000000) * 1000000, iu.f.POSIX);
                        break;
                    case 6:
                        l02 = a0.l0(a0Var.f37777d, (a0Var.a() / 1000) * 1000, iu.f.POSIX);
                        break;
                    case 7:
                        return a0Var;
                    default:
                        throw new UnsupportedOperationException(timeUnit.name());
                }
                if (a0Var.j0() && iu.d.x().G()) {
                    return l02.n0(1L, o0.SECONDS);
                }
                return l02;
            }
            throw new IllegalArgumentException("Missing precision.");
        }

        /* synthetic */ g(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class h implements bu.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final TimeUnit f37786a;

        h(TimeUnit timeUnit) {
            this.f37786a = timeUnit;
        }

        @Override // bu.m0
        /* renamed from: c */
        public a0 b(a0 a0Var, long j10) {
            if (this.f37786a.compareTo(TimeUnit.SECONDS) >= 0) {
                return a0.l0(zt.c.f(a0Var.o(), zt.c.i(j10, this.f37786a.toSeconds(1L))), a0Var.a(), iu.f.POSIX);
            }
            long f10 = zt.c.f(a0Var.a(), zt.c.i(j10, this.f37786a.toNanos(1L)));
            return a0.l0(zt.c.f(a0Var.o(), zt.c.b(f10, 1000000000)), zt.c.d(f10, 1000000000), iu.f.POSIX);
        }

        @Override // bu.m0
        /* renamed from: d */
        public long a(a0 a0Var, a0 a0Var2) {
            long f10;
            if (this.f37786a.compareTo(TimeUnit.SECONDS) >= 0) {
                f10 = a0Var2.o() - a0Var.o();
                int i10 = (f10 > 0L ? 1 : (f10 == 0L ? 0 : -1));
                if (i10 < 0) {
                    if (a0Var2.a() > a0Var.a()) {
                        f10++;
                    }
                } else if (i10 > 0 && a0Var2.a() < a0Var.a()) {
                    f10--;
                }
            } else {
                f10 = zt.c.f(zt.c.i(zt.c.m(a0Var2.o(), a0Var.o()), 1000000000L), a0Var2.a() - a0Var.a());
            }
            switch (a.f37781c[this.f37786a.ordinal()]) {
                case 1:
                    return f10 / 86400;
                case 2:
                    return f10 / 3600;
                case 3:
                    return f10 / 60;
                case 4:
                case 7:
                    return f10;
                case 5:
                    return f10 / 1000000;
                case 6:
                    return f10 / 1000;
                default:
                    throw new UnsupportedOperationException(this.f37786a.name());
            }
        }
    }

    static {
        TimeUnit[] values;
        long j10 = zt.b.j(-999999999, 1, 1);
        long j11 = zt.b.j(999999999, 12, 31);
        bu.a0 a0Var = bu.a0.UNIX;
        bu.a0 a0Var2 = bu.a0.MODIFIED_JULIAN_DATE;
        long o10 = a0Var.o(j10, a0Var2) * 86400;
        f37764i = o10;
        long o11 = (a0Var.o(j11, a0Var2) * 86400) + 86399;
        f37765o = o11;
        iu.f fVar = iu.f.POSIX;
        a0 a0Var3 = new a0(o10, 0, fVar);
        f37766p = a0Var3;
        a0 a0Var4 = new a0(o11, 999999999, fVar);
        f37767q = a0Var4;
        f37768r = new a0(63158400L, 0, fVar);
        HashSet hashSet = new HashSet();
        hashSet.add(g0.G);
        hashSet.add(g0.F);
        hashSet.add(g0.E);
        hashSet.add(g0.D);
        hashSet.add(g0.C);
        hashSet.add(g0.B);
        hashSet.add(g0.H);
        hashSet.add(g0.I);
        f37769s = Collections.unmodifiableSet(hashSet);
        HashMap hashMap = new HashMap();
        hashMap.put(g0.J, 1);
        hashMap.put(g0.K, 1);
        hashMap.put(g0.L, 1000);
        hashMap.put(g0.O, 1000);
        hashMap.put(g0.M, 1000000);
        hashMap.put(g0.P, 1000000);
        hashMap.put(g0.N, 1000000000);
        hashMap.put(g0.Q, 1000000000);
        f37770t = Collections.unmodifiableMap(hashMap);
        EnumMap enumMap = new EnumMap(TimeUnit.class);
        enumMap.put((EnumMap) TimeUnit.DAYS, (TimeUnit) Double.valueOf(86400.0d));
        enumMap.put((EnumMap) TimeUnit.HOURS, (TimeUnit) Double.valueOf(3600.0d));
        enumMap.put((EnumMap) TimeUnit.MINUTES, (TimeUnit) Double.valueOf(60.0d));
        enumMap.put((EnumMap) TimeUnit.SECONDS, (TimeUnit) Double.valueOf(1.0d));
        enumMap.put((EnumMap) TimeUnit.MILLISECONDS, (TimeUnit) Double.valueOf(0.001d));
        enumMap.put((EnumMap) TimeUnit.MICROSECONDS, (TimeUnit) Double.valueOf(1.0E-6d));
        enumMap.put((EnumMap) TimeUnit.NANOSECONDS, (TimeUnit) Double.valueOf(1.0E-9d));
        f37771u = Collections.unmodifiableMap(enumMap);
        h0.b k10 = h0.b.k(TimeUnit.class, a0.class, new e(null), a0Var3, a0Var4);
        for (TimeUnit timeUnit : TimeUnit.values()) {
            h hVar = new h(timeUnit);
            Map map = f37771u;
            k10.g(timeUnit, hVar, ((Double) map.get(timeUnit)).doubleValue(), map.keySet());
        }
        d dVar = d.POSIX_TIME;
        k10.e(dVar, dVar, TimeUnit.SECONDS);
        c cVar = c.FRACTION;
        k10.e(cVar, cVar, TimeUnit.NANOSECONDS);
        bu.p pVar = j0.f38161p;
        k10.d(pVar, new g(null));
        f37772v = k10.l(new b(null)).h();
        f37773w = new a0(0L, 0, iu.f.POSIX);
        f37774x = dVar;
        f37775y = cVar;
        f37776z = pVar;
        A = new f(null);
    }

    /* synthetic */ a0(int i10, long j10, a aVar) {
        this(i10, j10);
    }

    public static bu.h0 T() {
        return f37772v;
    }

    static void U(a0 a0Var) {
        if (a0Var.f37777d >= 63072000) {
            return;
        }
        throw new UnsupportedOperationException("Cannot calculate SI-duration before 1972-01-01.");
    }

    private static void V(int i10) {
        if (i10 < 1000000000 && i10 >= 0) {
            return;
        }
        throw new IllegalArgumentException("Nanosecond out of range: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void W(long j10, i0 i0Var) {
        iu.d x10 = iu.d.x();
        if (x10.L() && x10.K(x10.j(j10)) > j10) {
            throw new bu.r("Illegal local timestamp due to negative leap second: " + i0Var);
        }
    }

    private static void X(long j10) {
        if (j10 <= f37765o && j10 >= f37764i) {
            return;
        }
        throw new IllegalArgumentException("UNIX time (UT) out of supported range: " + j10);
    }

    private static void Z(int i10, int i11, StringBuilder sb2) {
        int i12 = 1;
        for (int i13 = 0; i13 < i11 - 1; i13++) {
            i12 *= 10;
        }
        while (i10 < i12 && i12 >= 10) {
            sb2.append('0');
            i12 /= 10;
        }
        sb2.append(String.valueOf(i10));
    }

    public static a0 a0(zt.f fVar) {
        if (fVar instanceof a0) {
            return (a0) a0.class.cast(fVar);
        }
        if ((fVar instanceof iu.g) && iu.d.x().G()) {
            iu.g gVar = (iu.g) iu.g.class.cast(fVar);
            iu.f fVar2 = iu.f.UTC;
            return l0(gVar.s(fVar2), gVar.u(fVar2), fVar2);
        }
        return l0(fVar.o(), fVar.a(), iu.f.POSIX);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 c0() {
        return f0.M0(zt.c.b(this.f37777d, 86400), bu.a0.UNIX);
    }

    private long d0() {
        if (iu.d.x().G()) {
            long j10 = iu.d.x().j(this.f37777d);
            if (k0()) {
                return j10 + 1;
            }
            return j10;
        }
        return this.f37777d - 63072000;
    }

    private double e0() {
        double d02 = ((d0() + 42.184d) + (a() / 1.0E9d)) - iu.f.e(c0());
        long floor = (long) Math.floor(d02);
        if (Double.compare(1.0E9d - ((d02 - floor) * 1.0E9d), 1.0d) < 0) {
            return floor + 1;
        }
        return d02;
    }

    private static int f0(a0 a0Var) {
        return zt.c.d(a0Var.f37777d, 86400);
    }

    private i0 g0(net.time4j.tz.l lVar) {
        return i0.U(this, lVar.B(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean k0() {
        if ((this.f37778e >>> 30) != 0) {
            return true;
        }
        return false;
    }

    public static a0 l0(long j10, int i10, iu.f fVar) {
        if (j10 == 0 && i10 == 0 && fVar == iu.f.POSIX) {
            return f37773w;
        }
        return new a0(j10, i10, fVar);
    }

    public static a0 m0(long j10, iu.f fVar) {
        return l0(j10, 0, fVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 o0(DataInput dataInput, boolean z10, boolean z11) {
        int i10;
        String str;
        long readLong = dataInput.readLong();
        if (z11) {
            i10 = dataInput.readInt();
        } else {
            i10 = 0;
        }
        if (readLong == 0) {
            if (!z10) {
                if (i10 == 0) {
                    return f37773w;
                }
            } else {
                throw new InvalidObjectException("UTC epoch is no leap second.");
            }
        }
        if (readLong == f37764i && i10 == 0) {
            if (!z10) {
                return f37766p;
            }
            throw new InvalidObjectException("Minimum is no leap second.");
        } else if (readLong == f37765o && i10 == 999999999) {
            if (!z10) {
                return f37767q;
            }
            throw new InvalidObjectException("Maximum is no leap second.");
        } else {
            V(i10);
            if (z10) {
                iu.d x10 = iu.d.x();
                if (x10.G() && !x10.H(x10.j(readLong) + 1)) {
                    long l10 = zt.b.l(readLong);
                    int h10 = zt.b.h(l10);
                    int g10 = zt.b.g(l10);
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Not registered as leap second event: ");
                    sb2.append(zt.b.i(l10));
                    sb2.append("-");
                    String str2 = "";
                    if (h10 >= 10) {
                        str = "";
                    } else {
                        str = "0";
                    }
                    sb2.append(str);
                    sb2.append(h10);
                    if (g10 < 10) {
                        str2 = "0";
                    }
                    sb2.append(str2);
                    sb2.append(g10);
                    sb2.append(" [Please check leap second configurations ");
                    sb2.append("either of emitter vm or this target vm]");
                    throw new InvalidObjectException(sb2.toString());
                }
                i10 |= 1073741824;
            }
            return new a0(i10, readLong);
        }
    }

    private static int r0(double d10, long j10) {
        try {
            return (int) ((d10 * 1.0E9d) - zt.c.i(j10, 1000000000L));
        } catch (ArithmeticException unused) {
            return (int) ((d10 - j10) * 1.0E9d);
        }
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private String s0(boolean z10) {
        f0 c02 = c0();
        int f02 = f0(this);
        int i10 = f02 / 60;
        int i11 = i10 / 60;
        int i12 = i10 % 60;
        int E = (f02 % 60) + iu.d.x().E(d0());
        int a10 = a();
        StringBuilder sb2 = new StringBuilder(50);
        sb2.append(c02);
        sb2.append('T');
        Z(i11, 2, sb2);
        if (z10 || (i12 | E | a10) != 0) {
            sb2.append(':');
            Z(i12, 2, sb2);
            if (z10 || (E | a10) != 0) {
                sb2.append(':');
                Z(E, 2, sb2);
                if (a10 > 0) {
                    sb2.append(',');
                    Z(a10, 9, sb2);
                }
            }
        }
        sb2.append('Z');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public a0 u0(iu.f fVar) {
        if (fVar != iu.f.UTC) {
            if (!j0()) {
                int i10 = a.f37779a[fVar.ordinal()];
                if (i10 != 1) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5 && i10 != 6) {
                                throw new UnsupportedOperationException(fVar.name());
                            }
                            return new a0(zt.c.m(this.f37777d, 63072000L), a(), fVar);
                        }
                        return new a0(zt.c.m(this.f37777d, 315964800L), a(), fVar);
                    }
                    return new a0(zt.c.m(this.f37777d, -378691200L), a(), fVar);
                }
            } else {
                throw new IllegalArgumentException("Leap seconds do not exist on continuous time scale: " + fVar);
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public a0 v0(iu.f fVar) {
        switch (a.f37779a[fVar.ordinal()]) {
            case 1:
                if (j0()) {
                    return new a0(a(), this.f37777d);
                }
                break;
            case 2:
                break;
            case 3:
                return new a0(u(fVar), zt.c.f(s(fVar), -378691200L));
            case 4:
                return new a0(a(), zt.c.f(s(iu.f.GPS), 315964800L));
            case 5:
            case 6:
                return new a0(u(fVar), zt.c.f(s(fVar), 63072000L));
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
        return this;
    }

    private Object writeReplace() {
        return new SPX(this, 4);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.q
    /* renamed from: H */
    public bu.h0 w() {
        return f37772v;
    }

    @Override // java.lang.Comparable
    /* renamed from: Y */
    public int compareTo(a0 a0Var) {
        int a10;
        int i10 = (d0() > a0Var.d0() ? 1 : (d0() == a0Var.d0() ? 0 : -1));
        if (i10 < 0) {
            return -1;
        }
        if (i10 > 0 || (a10 = a() - a0Var.a()) > 0) {
            return 1;
        }
        if (a10 < 0) {
            return -1;
        }
        return 0;
    }

    @Override // zt.f
    public int a() {
        return this.f37778e & (-1073741825);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.q
    /* renamed from: b0 */
    public a0 x() {
        return this;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f37777d != a0Var.f37777d) {
                return false;
            }
            if (iu.d.x().G()) {
                if (this.f37778e == a0Var.f37778e) {
                    return true;
                }
                return false;
            } else if (a() == a0Var.a()) {
                return true;
            }
        }
        return false;
    }

    public c1 h0(net.time4j.tz.k kVar) {
        return c1.d(this, net.time4j.tz.l.N(kVar));
    }

    public int hashCode() {
        long j10 = this.f37777d;
        return (((int) (j10 ^ (j10 >>> 32))) * 19) + (a() * 37);
    }

    public boolean i0(iu.g gVar) {
        if (compareTo(a0(gVar)) < 0) {
            return true;
        }
        return false;
    }

    public boolean j0() {
        if (k0() && iu.d.x().G()) {
            return true;
        }
        return false;
    }

    public a0 n0(long j10, o0 o0Var) {
        a0 l02;
        U(this);
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 == 0) {
            return this;
        }
        try {
            int i11 = a.f37780b[o0Var.ordinal()];
            if (i11 != 1) {
                if (i11 == 2) {
                    long f10 = zt.c.f(a(), j10);
                    int d10 = zt.c.d(f10, 1000000000);
                    long b10 = zt.c.b(f10, 1000000000);
                    if (iu.d.x().G()) {
                        l02 = new a0(zt.c.f(d0(), b10), d10, iu.f.UTC);
                    } else {
                        l02 = l0(zt.c.f(this.f37777d, b10), d10, iu.f.POSIX);
                    }
                } else {
                    throw new UnsupportedOperationException();
                }
            } else if (iu.d.x().G()) {
                l02 = new a0(zt.c.f(d0(), j10), a(), iu.f.UTC);
            } else {
                l02 = l0(zt.c.f(this.f37777d, j10), a(), iu.f.POSIX);
            }
            if (i10 < 0) {
                U(l02);
            }
            return l02;
        } catch (IllegalArgumentException e10) {
            ArithmeticException arithmeticException = new ArithmeticException("Result beyond boundaries of time axis.");
            arithmeticException.initCause(e10);
            throw arithmeticException;
        }
    }

    @Override // zt.f
    public long o() {
        return this.f37777d;
    }

    public r p0(bu.j jVar, String str, net.time4j.tz.k kVar, bu.f0 f0Var) {
        i0 t02 = t0(kVar);
        t02.X();
        ((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f38036i)).V();
        throw null;
    }

    public r q0(bu.x xVar, net.time4j.tz.k kVar, bu.f0 f0Var) {
        i0 t02 = t0(kVar);
        return r.b(((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f38036i)).V().S(xVar.q()), t02.X());
    }

    @Override // iu.g
    public long s(iu.f fVar) {
        long d02;
        int r02;
        switch (a.f37779a[fVar.ordinal()]) {
            case 1:
                return this.f37777d;
            case 2:
                return d0();
            case 3:
                if (d0() < 0) {
                    double e10 = iu.f.e(c0()) + (this.f37777d - 63072000) + (a() / 1.0E9d);
                    long floor = (long) Math.floor(e10);
                    if (Double.compare(1.0E9d - ((e10 - floor) * 1.0E9d), 1.0d) < 0) {
                        floor++;
                        r02 = 0;
                    } else {
                        r02 = r0(e10, floor);
                    }
                    d02 = floor - (-441763168);
                    if (r02 - 184000000 < 0) {
                        d02 = floor - (-441763167);
                    }
                } else {
                    d02 = d0() + 441763210;
                }
                if (d02 >= 0) {
                    return d02;
                }
                throw new IllegalArgumentException("TAI not supported before 1958-01-01: " + this);
            case 4:
                long d03 = d0();
                if (iu.d.x().K(d03) >= 315964800) {
                    if (!iu.d.x().G()) {
                        d03 += 9;
                    }
                    return d03 - 252892809;
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f37777d < 63072000) {
                    double e11 = iu.f.e(c0()) + (this.f37777d - 63072000) + (a() / 1.0E9d);
                    long floor2 = (long) Math.floor(e11);
                    if (Double.compare(1.0E9d - ((e11 - floor2) * 1.0E9d), 1.0d) < 0) {
                        return floor2 + 1;
                    }
                    return floor2;
                }
                long d04 = d0();
                long j10 = 42 + d04;
                if (a() + 184000000 >= 1000000000) {
                    return d04 + 43;
                }
                return j10;
            case 6:
                long j11 = this.f37777d;
                if (j11 < 63072000) {
                    return j11 - 63072000;
                }
                return (long) Math.floor(e0());
            default:
                throw new UnsupportedOperationException("Not yet implemented: " + fVar);
        }
    }

    public i0 t0(net.time4j.tz.k kVar) {
        return g0(net.time4j.tz.l.N(kVar));
    }

    public String toString() {
        return s0(true);
    }

    @Override // iu.g
    public int u(iu.f fVar) {
        long d02;
        int a10;
        int i10 = 0;
        switch (a.f37779a[fVar.ordinal()]) {
            case 1:
            case 2:
                return a();
            case 3:
                if (d0() < 0) {
                    double e10 = iu.f.e(c0()) + (this.f37777d - 63072000) + (a() / 1.0E9d);
                    long floor = (long) Math.floor(e10);
                    if (Double.compare(1.0E9d - ((e10 - floor) * 1.0E9d), 1.0d) < 0) {
                        floor++;
                    } else {
                        i10 = r0(e10, floor);
                    }
                    d02 = floor - (-441763168);
                    a10 = i10 - 184000000;
                    if (a10 < 0) {
                        d02 = floor - (-441763167);
                        a10 = i10 - (-816000000);
                    }
                } else {
                    d02 = d0() + 441763200;
                    a10 = a();
                }
                if (d02 >= 0) {
                    return a10;
                }
                throw new IllegalArgumentException("TAI not supported before 1958-01-01: " + this);
            case 4:
                if (iu.d.x().K(d0()) >= 315964800) {
                    return a();
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f37777d < 63072000) {
                    double e11 = iu.f.e(c0()) + (this.f37777d - 63072000) + (a() / 1.0E9d);
                    long floor2 = (long) Math.floor(e11);
                    if (Double.compare(1.0E9d - ((e11 - floor2) * 1.0E9d), 1.0d) < 0) {
                        return 0;
                    }
                    return r0(e11, floor2);
                }
                int a11 = a();
                int i11 = 184000000 + a11;
                if (i11 >= 1000000000) {
                    return a11 - 816000000;
                }
                return i11;
            case 6:
                if (this.f37777d < 63072000) {
                    return a();
                }
                double e02 = e0();
                return r0(e02, (long) Math.floor(e02));
            default:
                throw new UnsupportedOperationException("Not yet implemented: " + fVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w0(DataOutput dataOutput) {
        int i10;
        if (k0()) {
            i10 = 65;
        } else {
            i10 = 64;
        }
        int a10 = a();
        if (a10 > 0) {
            i10 |= 2;
        }
        dataOutput.writeByte(i10);
        dataOutput.writeLong(this.f37777d);
        if (a10 > 0) {
            dataOutput.writeInt(a10);
        }
    }

    private a0(long j10, int i10, iu.f fVar) {
        long j11;
        long floor;
        int r02;
        long j12;
        long j13 = j10;
        int i11 = i10;
        if (fVar == iu.f.POSIX) {
            this.f37777d = j13;
            this.f37778e = i11;
        } else {
            iu.d x10 = iu.d.x();
            if (x10.G()) {
                if (fVar == iu.f.UTC) {
                    j11 = 0;
                } else {
                    j11 = 0;
                    if (fVar == iu.f.TAI) {
                        if (j13 < 0) {
                            throw new IllegalArgumentException("TAI not supported before 1958-01-01: " + j13);
                        } else if (j13 < 441763200) {
                            long f10 = zt.c.f(j13, -441763168L);
                            int e10 = zt.c.e(i11, 184000000);
                            if (e10 >= 1000000000) {
                                f10 = zt.c.f(f10, 1L);
                                e10 = zt.c.l(e10, 1000000000);
                            }
                            double d10 = f10 + (e10 / 1.0E9d);
                            double e11 = d10 - iu.f.e(f0.M0(zt.c.b((long) (d10 - 42.184d), 86400), bu.a0.UTC));
                            floor = (long) Math.floor(e11);
                            r02 = r0(e11, floor);
                        } else {
                            r02 = i11;
                            floor = zt.c.m(j13, 441763210L);
                        }
                    } else if (fVar == iu.f.GPS) {
                        long f11 = zt.c.f(j13, 252892809L);
                        if (f11 < 252892809) {
                            throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + j13);
                        }
                        r02 = i11;
                        floor = f11;
                    } else if (fVar == iu.f.TT) {
                        int i12 = (j13 > 42L ? 1 : (j13 == 42L ? 0 : -1));
                        if (i12 >= 0 && (i12 != 0 || i11 >= 184000000)) {
                            j13 = zt.c.m(j13, 42L);
                            i11 = zt.c.l(i11, 184000000);
                            if (i11 < 0) {
                                j13 = zt.c.m(j13, 1L);
                                i11 = zt.c.e(i11, 1000000000);
                            }
                        } else {
                            double d11 = j13 + (i11 / 1.0E9d);
                            double e12 = d11 - iu.f.e(f0.M0(zt.c.b((long) (d11 - 42.184d), 86400), bu.a0.UTC));
                            floor = (long) Math.floor(e12);
                            r02 = r0(e12, floor);
                        }
                    } else if (fVar != iu.f.UT) {
                        throw new UnsupportedOperationException("Not yet implemented: " + fVar.name());
                    } else if (j13 >= 0) {
                        double e13 = ((j13 + (i11 / 1.0E9d)) + iu.f.e(f0.M0(zt.c.b(j13, 86400), bu.a0.UTC))) - 42.184d;
                        floor = (long) Math.floor(e13);
                        r02 = r0(e13, floor);
                    }
                    long K = x10.K(floor);
                    j12 = floor - x10.j(K);
                    this.f37777d = K;
                    if (j12 != j11 || K == f37765o) {
                        this.f37778e = r02;
                    } else if (j12 == 1) {
                        this.f37778e = 1073741824 | r02;
                    } else {
                        throw new IllegalStateException("Cannot handle leap shift of " + j13 + ".");
                    }
                    i11 = r02;
                }
                r02 = i11;
                floor = j13;
                long K2 = x10.K(floor);
                j12 = floor - x10.j(K2);
                this.f37777d = K2;
                if (j12 != j11) {
                }
                this.f37778e = r02;
                i11 = r02;
            } else {
                throw new IllegalStateException("Leap seconds are not supported by configuration.");
            }
        }
        X(this.f37777d);
        V(i11);
    }

    private a0(int i10, long j10) {
        X(j10);
        this.f37777d = j10;
        this.f37778e = i10;
    }
}
