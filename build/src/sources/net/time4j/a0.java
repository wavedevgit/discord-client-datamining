package net.time4j;

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
import pt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends pt.k0 implements wt.g {
    private static final pt.v A;

    /* renamed from: i  reason: collision with root package name */
    private static final long f39696i;

    /* renamed from: o  reason: collision with root package name */
    private static final long f39697o;

    /* renamed from: p  reason: collision with root package name */
    private static final a0 f39698p;

    /* renamed from: q  reason: collision with root package name */
    private static final a0 f39699q;

    /* renamed from: r  reason: collision with root package name */
    private static final a0 f39700r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f39701s;
    private static final long serialVersionUID = -3192884724477742274L;

    /* renamed from: t  reason: collision with root package name */
    private static final Map f39702t;

    /* renamed from: u  reason: collision with root package name */
    private static final Map f39703u;

    /* renamed from: v  reason: collision with root package name */
    private static final pt.h0 f39704v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f39705w;

    /* renamed from: x  reason: collision with root package name */
    public static final pt.p f39706x;

    /* renamed from: y  reason: collision with root package name */
    public static final pt.p f39707y;

    /* renamed from: z  reason: collision with root package name */
    public static final pt.p f39708z;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f39709d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f39710e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39711a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f39712b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f39713c;

        static {
            int[] iArr = new int[TimeUnit.values().length];
            f39713c = iArr;
            try {
                iArr[TimeUnit.DAYS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39713c[TimeUnit.HOURS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39713c[TimeUnit.MINUTES.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39713c[TimeUnit.SECONDS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39713c[TimeUnit.MILLISECONDS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f39713c[TimeUnit.MICROSECONDS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f39713c[TimeUnit.NANOSECONDS.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            int[] iArr2 = new int[o0.values().length];
            f39712b = iArr2;
            try {
                iArr2[o0.SECONDS.ordinal()] = 1;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f39712b[o0.NANOSECONDS.ordinal()] = 2;
            } catch (NoSuchFieldError unused9) {
            }
            int[] iArr3 = new int[wt.f.values().length];
            f39711a = iArr3;
            try {
                iArr3[wt.f.POSIX.ordinal()] = 1;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f39711a[wt.f.UTC.ordinal()] = 2;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f39711a[wt.f.TAI.ordinal()] = 3;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f39711a[wt.f.GPS.ordinal()] = 4;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f39711a[wt.f.TT.ordinal()] = 5;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f39711a[wt.f.UT.ordinal()] = 6;
            } catch (NoSuchFieldError unused15) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements pt.i0 {
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
    public enum c implements pt.p, pt.z {
        FRACTION;

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // java.util.Comparator
        /* renamed from: C */
        public int compare(pt.o oVar, pt.o oVar2) {
            return ((Integer) oVar.v(this)).compareTo((Integer) oVar2.v(this));
        }

        @Override // pt.z
        /* renamed from: D */
        public pt.p a(a0 a0Var) {
            return null;
        }

        @Override // pt.z
        /* renamed from: E */
        public pt.p h(a0 a0Var) {
            return null;
        }

        @Override // pt.p
        /* renamed from: F */
        public Integer e() {
            return 999999999;
        }

        @Override // pt.p
        /* renamed from: G */
        public Integer A() {
            return 0;
        }

        @Override // pt.z
        /* renamed from: H */
        public Integer k(a0 a0Var) {
            return e();
        }

        @Override // pt.z
        /* renamed from: I */
        public Integer r(a0 a0Var) {
            return A();
        }

        @Override // pt.z
        /* renamed from: J */
        public Integer y(a0 a0Var) {
            return Integer.valueOf(a0Var.a());
        }

        @Override // pt.z
        /* renamed from: K */
        public boolean p(a0 a0Var, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 0 || intValue >= 1000000000) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: L */
        public a0 x(a0 a0Var, Integer num, boolean z10) {
            if (num != null) {
                if (wt.d.w().D()) {
                    wt.f fVar = wt.f.UTC;
                    return a0.l0(a0Var.l(fVar), num.intValue(), fVar);
                }
                return a0.l0(a0Var.q(), num.intValue(), wt.f.POSIX);
            }
            throw new IllegalArgumentException("Missing fraction value.");
        }

        @Override // pt.p
        public char d() {
            return (char) 0;
        }

        @Override // pt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // pt.p
        public boolean l() {
            return false;
        }

        @Override // pt.p
        public boolean z() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum d implements pt.p, pt.z {
        POSIX_TIME;

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // java.util.Comparator
        /* renamed from: C */
        public int compare(pt.o oVar, pt.o oVar2) {
            return ((Long) oVar.v(this)).compareTo((Long) oVar2.v(this));
        }

        @Override // pt.z
        /* renamed from: D */
        public pt.p a(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // pt.z
        /* renamed from: E */
        public pt.p h(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // pt.p
        /* renamed from: F */
        public Long e() {
            return Long.valueOf(a0.f39697o);
        }

        @Override // pt.p
        /* renamed from: G */
        public Long A() {
            return Long.valueOf(a0.f39696i);
        }

        @Override // pt.z
        /* renamed from: H */
        public Long k(a0 a0Var) {
            return Long.valueOf(a0.f39697o);
        }

        @Override // pt.z
        /* renamed from: I */
        public Long r(a0 a0Var) {
            return Long.valueOf(a0.f39696i);
        }

        @Override // pt.z
        /* renamed from: J */
        public Long y(a0 a0Var) {
            return Long.valueOf(a0Var.q());
        }

        @Override // pt.z
        /* renamed from: K */
        public boolean p(a0 a0Var, Long l10) {
            if (l10 == null) {
                return false;
            }
            long longValue = l10.longValue();
            if (longValue < a0.f39696i || longValue > a0.f39697o) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: L */
        public a0 x(a0 a0Var, Long l10, boolean z10) {
            if (l10 != null) {
                return a0.l0(l10.longValue(), a0Var.a(), wt.f.POSIX);
            }
            throw new IllegalArgumentException("Missing elapsed seconds.");
        }

        @Override // pt.p
        public char d() {
            return (char) 0;
        }

        @Override // pt.p
        public Class getType() {
            return Long.class;
        }

        @Override // pt.p
        public boolean l() {
            return false;
        }

        @Override // pt.p
        public boolean z() {
            return false;
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
            return i0.S();
        }

        @Override // pt.u
        public String c(pt.y yVar, Locale locale) {
            qt.e d10 = qt.e.d(yVar.a());
            return qt.b.s(d10, d10, locale);
        }

        @Override // pt.u
        /* renamed from: d */
        public a0 k(pt.q qVar, pt.d dVar, boolean z10, boolean z11) {
            i0 i0Var;
            net.time4j.tz.k kVar;
            a0 a0Var;
            net.time4j.tz.p B;
            a0 a0Var2;
            wt.f fVar = (wt.f) dVar.a(qt.a.f48108w, wt.f.UTC);
            if (qVar instanceof nt.f) {
                return a0.a0((nt.f) nt.f.class.cast(qVar)).u0(fVar);
            }
            d dVar2 = d.POSIX_TIME;
            if (qVar.m(dVar2)) {
                long longValue = ((Long) qVar.v(dVar2)).longValue();
                c cVar = c.FRACTION;
                return a0.l0(longValue, qVar.m(cVar) ? ((Integer) qVar.v(cVar)).intValue() : 0, wt.f.POSIX).u0(fVar);
            }
            if (qVar.m(pt.b0.LEAP_SECOND)) {
                qVar.C(g0.J, 60);
                r3 = 1;
            }
            pt.p M = i0.S().M();
            if (qVar.m(M)) {
                i0Var = (i0) qVar.v(M);
            } else {
                i0Var = (i0) i0.S().k(qVar, dVar, z10, z11);
            }
            if (i0Var == null) {
                return null;
            }
            if (qVar.k()) {
                kVar = qVar.u();
            } else {
                pt.c cVar2 = qt.a.f48089d;
                kVar = dVar.b(cVar2) ? (net.time4j.tz.k) dVar.c(cVar2) : null;
            }
            if (kVar != null) {
                pt.b0 b0Var = pt.b0.DAYLIGHT_SAVING;
                if (qVar.m(b0Var)) {
                    a0Var = i0Var.Y(net.time4j.tz.l.N(kVar).Q(((net.time4j.tz.o) dVar.a(qt.a.f48090e, net.time4j.tz.l.f40224o)).a(((Boolean) qVar.v(b0Var)).booleanValue() ? net.time4j.tz.g.EARLIER_OFFSET : net.time4j.tz.g.LATER_OFFSET)));
                } else {
                    pt.c cVar3 = qt.a.f48090e;
                    if (dVar.b(cVar3)) {
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
                        a0Var2 = new a0(a0Var.a(), a0Var.q() + 1, (a) null);
                    }
                    if (!z10) {
                        if (wt.d.w().D()) {
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

        @Override // pt.u
        /* renamed from: e */
        public pt.o h(a0 a0Var, pt.d dVar) {
            pt.c cVar = qt.a.f48089d;
            if (dVar.b(cVar)) {
                return a0Var.v0((wt.f) dVar.a(qt.a.f48108w, wt.f.UTC)).h0((net.time4j.tz.k) dVar.c(cVar));
            }
            throw new IllegalArgumentException("Cannot print moment without timezone.");
        }

        @Override // pt.u
        public int j() {
            return f0.r0().j();
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements pt.v {
        private f() {
        }

        @Override // pt.v
        /* renamed from: a */
        public a0 apply(a0 a0Var) {
            wt.b x10;
            wt.d w10 = wt.d.w();
            if (w10.D() && (x10 = w10.x(a0Var.l(wt.f.UTC))) != null) {
                return f0.w0(x10.c()).q0(23, 59, 59).R().n0(x10.a(), o0.SECONDS);
            }
            return null;
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g implements pt.z {
        private g() {
        }

        @Override // pt.z
        /* renamed from: b */
        public pt.p a(a0 a0Var) {
            return null;
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p h(a0 a0Var) {
            return null;
        }

        @Override // pt.z
        /* renamed from: d */
        public TimeUnit k(a0 a0Var) {
            return TimeUnit.NANOSECONDS;
        }

        @Override // pt.z
        /* renamed from: e */
        public TimeUnit r(a0 a0Var) {
            return TimeUnit.DAYS;
        }

        @Override // pt.z
        /* renamed from: f */
        public TimeUnit y(a0 a0Var) {
            int a10 = a0Var.a();
            if (a10 == 0) {
                long j10 = a0Var.f39709d;
                if (nt.c.d(j10, 86400) == 0) {
                    return TimeUnit.DAYS;
                }
                if (nt.c.d(j10, 3600) == 0) {
                    return TimeUnit.HOURS;
                }
                if (nt.c.d(j10, 60) == 0) {
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

        @Override // pt.z
        /* renamed from: g */
        public boolean p(a0 a0Var, TimeUnit timeUnit) {
            return timeUnit != null;
        }

        @Override // pt.z
        /* renamed from: i */
        public a0 x(a0 a0Var, TimeUnit timeUnit, boolean z10) {
            a0 l02;
            if (timeUnit != null) {
                switch (a.f39713c[timeUnit.ordinal()]) {
                    case 1:
                        return a0.m0(nt.c.b(a0Var.f39709d, 86400) * 86400, wt.f.POSIX);
                    case 2:
                        return a0.m0(nt.c.b(a0Var.f39709d, 3600) * 3600, wt.f.POSIX);
                    case 3:
                        return a0.m0(nt.c.b(a0Var.f39709d, 60) * 60, wt.f.POSIX);
                    case 4:
                        l02 = a0.l0(a0Var.f39709d, 0, wt.f.POSIX);
                        break;
                    case 5:
                        l02 = a0.l0(a0Var.f39709d, (a0Var.a() / 1000000) * 1000000, wt.f.POSIX);
                        break;
                    case 6:
                        l02 = a0.l0(a0Var.f39709d, (a0Var.a() / 1000) * 1000, wt.f.POSIX);
                        break;
                    case 7:
                        return a0Var;
                    default:
                        throw new UnsupportedOperationException(timeUnit.name());
                }
                if (a0Var.j0() && wt.d.w().D()) {
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
    private static class h implements pt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final TimeUnit f39718a;

        h(TimeUnit timeUnit) {
            this.f39718a = timeUnit;
        }

        @Override // pt.m0
        /* renamed from: c */
        public a0 b(a0 a0Var, long j10) {
            if (this.f39718a.compareTo(TimeUnit.SECONDS) >= 0) {
                return a0.l0(nt.c.f(a0Var.q(), nt.c.i(j10, this.f39718a.toSeconds(1L))), a0Var.a(), wt.f.POSIX);
            }
            long f10 = nt.c.f(a0Var.a(), nt.c.i(j10, this.f39718a.toNanos(1L)));
            return a0.l0(nt.c.f(a0Var.q(), nt.c.b(f10, 1000000000)), nt.c.d(f10, 1000000000), wt.f.POSIX);
        }

        @Override // pt.m0
        /* renamed from: d */
        public long a(a0 a0Var, a0 a0Var2) {
            long f10;
            if (this.f39718a.compareTo(TimeUnit.SECONDS) >= 0) {
                f10 = a0Var2.q() - a0Var.q();
                int i10 = (f10 > 0L ? 1 : (f10 == 0L ? 0 : -1));
                if (i10 < 0) {
                    if (a0Var2.a() > a0Var.a()) {
                        f10++;
                    }
                } else if (i10 > 0 && a0Var2.a() < a0Var.a()) {
                    f10--;
                }
            } else {
                f10 = nt.c.f(nt.c.i(nt.c.m(a0Var2.q(), a0Var.q()), 1000000000L), a0Var2.a() - a0Var.a());
            }
            switch (a.f39713c[this.f39718a.ordinal()]) {
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
                    throw new UnsupportedOperationException(this.f39718a.name());
            }
        }
    }

    static {
        TimeUnit[] values;
        long j10 = nt.b.j(-999999999, 1, 1);
        long j11 = nt.b.j(999999999, 12, 31);
        pt.a0 a0Var = pt.a0.UNIX;
        pt.a0 a0Var2 = pt.a0.MODIFIED_JULIAN_DATE;
        long p10 = a0Var.p(j10, a0Var2) * 86400;
        f39696i = p10;
        long p11 = (a0Var.p(j11, a0Var2) * 86400) + 86399;
        f39697o = p11;
        wt.f fVar = wt.f.POSIX;
        a0 a0Var3 = new a0(p10, 0, fVar);
        f39698p = a0Var3;
        a0 a0Var4 = new a0(p11, 999999999, fVar);
        f39699q = a0Var4;
        f39700r = new a0(63158400L, 0, fVar);
        HashSet hashSet = new HashSet();
        hashSet.add(g0.G);
        hashSet.add(g0.F);
        hashSet.add(g0.E);
        hashSet.add(g0.D);
        hashSet.add(g0.C);
        hashSet.add(g0.B);
        hashSet.add(g0.H);
        hashSet.add(g0.I);
        f39701s = Collections.unmodifiableSet(hashSet);
        HashMap hashMap = new HashMap();
        hashMap.put(g0.J, 1);
        hashMap.put(g0.K, 1);
        hashMap.put(g0.L, 1000);
        hashMap.put(g0.O, 1000);
        hashMap.put(g0.M, 1000000);
        hashMap.put(g0.P, 1000000);
        hashMap.put(g0.N, 1000000000);
        hashMap.put(g0.Q, 1000000000);
        f39702t = Collections.unmodifiableMap(hashMap);
        EnumMap enumMap = new EnumMap(TimeUnit.class);
        enumMap.put((EnumMap) TimeUnit.DAYS, (TimeUnit) Double.valueOf(86400.0d));
        enumMap.put((EnumMap) TimeUnit.HOURS, (TimeUnit) Double.valueOf(3600.0d));
        enumMap.put((EnumMap) TimeUnit.MINUTES, (TimeUnit) Double.valueOf(60.0d));
        enumMap.put((EnumMap) TimeUnit.SECONDS, (TimeUnit) Double.valueOf(1.0d));
        enumMap.put((EnumMap) TimeUnit.MILLISECONDS, (TimeUnit) Double.valueOf(0.001d));
        enumMap.put((EnumMap) TimeUnit.MICROSECONDS, (TimeUnit) Double.valueOf(1.0E-6d));
        enumMap.put((EnumMap) TimeUnit.NANOSECONDS, (TimeUnit) Double.valueOf(1.0E-9d));
        f39703u = Collections.unmodifiableMap(enumMap);
        h0.b k10 = h0.b.k(TimeUnit.class, a0.class, new e(null), a0Var3, a0Var4);
        for (TimeUnit timeUnit : TimeUnit.values()) {
            h hVar = new h(timeUnit);
            Map map = f39703u;
            k10.g(timeUnit, hVar, ((Double) map.get(timeUnit)).doubleValue(), map.keySet());
        }
        d dVar = d.POSIX_TIME;
        k10.e(dVar, dVar, TimeUnit.SECONDS);
        c cVar = c.FRACTION;
        k10.e(cVar, cVar, TimeUnit.NANOSECONDS);
        pt.p pVar = j0.f40093p;
        k10.d(pVar, new g(null));
        f39704v = k10.l(new b(null)).h();
        f39705w = new a0(0L, 0, wt.f.POSIX);
        f39706x = dVar;
        f39707y = cVar;
        f39708z = pVar;
        A = new f(null);
    }

    /* synthetic */ a0(int i10, long j10, a aVar) {
        this(i10, j10);
    }

    public static pt.h0 T() {
        return f39704v;
    }

    static void U(a0 a0Var) {
        if (a0Var.f39709d >= 63072000) {
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
        wt.d w10 = wt.d.w();
        if (w10.I() && w10.H(w10.h(j10)) > j10) {
            throw new pt.r("Illegal local timestamp due to negative leap second: " + i0Var);
        }
    }

    private static void X(long j10) {
        if (j10 <= f39697o && j10 >= f39696i) {
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

    public static a0 a0(nt.f fVar) {
        if (fVar instanceof a0) {
            return (a0) a0.class.cast(fVar);
        }
        if ((fVar instanceof wt.g) && wt.d.w().D()) {
            wt.g gVar = (wt.g) wt.g.class.cast(fVar);
            wt.f fVar2 = wt.f.UTC;
            return l0(gVar.l(fVar2), gVar.p(fVar2), fVar2);
        }
        return l0(fVar.q(), fVar.a(), wt.f.POSIX);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 c0() {
        return f0.M0(nt.c.b(this.f39709d, 86400), pt.a0.UNIX);
    }

    private long d0() {
        if (wt.d.w().D()) {
            long h10 = wt.d.w().h(this.f39709d);
            if (k0()) {
                return h10 + 1;
            }
            return h10;
        }
        return this.f39709d - 63072000;
    }

    private double e0() {
        double d02 = ((d0() + 42.184d) + (a() / 1.0E9d)) - wt.f.e(c0());
        long floor = (long) Math.floor(d02);
        if (Double.compare(1.0E9d - ((d02 - floor) * 1.0E9d), 1.0d) < 0) {
            return floor + 1;
        }
        return d02;
    }

    private static int f0(a0 a0Var) {
        return nt.c.d(a0Var.f39709d, 86400);
    }

    private i0 g0(net.time4j.tz.l lVar) {
        return i0.U(this, lVar.B(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean k0() {
        if ((this.f39710e >>> 30) != 0) {
            return true;
        }
        return false;
    }

    public static a0 l0(long j10, int i10, wt.f fVar) {
        if (j10 == 0 && i10 == 0 && fVar == wt.f.POSIX) {
            return f39705w;
        }
        return new a0(j10, i10, fVar);
    }

    public static a0 m0(long j10, wt.f fVar) {
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
                    return f39705w;
                }
            } else {
                throw new InvalidObjectException("UTC epoch is no leap second.");
            }
        }
        if (readLong == f39696i && i10 == 0) {
            if (!z10) {
                return f39698p;
            }
            throw new InvalidObjectException("Minimum is no leap second.");
        } else if (readLong == f39697o && i10 == 999999999) {
            if (!z10) {
                return f39699q;
            }
            throw new InvalidObjectException("Maximum is no leap second.");
        } else {
            V(i10);
            if (z10) {
                wt.d w10 = wt.d.w();
                if (w10.D() && !w10.G(w10.h(readLong) + 1)) {
                    long l10 = nt.b.l(readLong);
                    int h10 = nt.b.h(l10);
                    int g10 = nt.b.g(l10);
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Not registered as leap second event: ");
                    sb2.append(nt.b.i(l10));
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
            return (int) ((d10 * 1.0E9d) - nt.c.i(j10, 1000000000L));
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
        int y10 = (f02 % 60) + wt.d.w().y(d0());
        int a10 = a();
        StringBuilder sb2 = new StringBuilder(50);
        sb2.append(c02);
        sb2.append('T');
        Z(i11, 2, sb2);
        if (z10 || (i12 | y10 | a10) != 0) {
            sb2.append(':');
            Z(i12, 2, sb2);
            if (z10 || (y10 | a10) != 0) {
                sb2.append(':');
                Z(y10, 2, sb2);
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
    public a0 u0(wt.f fVar) {
        if (fVar != wt.f.UTC) {
            if (!j0()) {
                int i10 = a.f39711a[fVar.ordinal()];
                if (i10 != 1) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5 && i10 != 6) {
                                throw new UnsupportedOperationException(fVar.name());
                            }
                            return new a0(nt.c.m(this.f39709d, 63072000L), a(), fVar);
                        }
                        return new a0(nt.c.m(this.f39709d, 315964800L), a(), fVar);
                    }
                    return new a0(nt.c.m(this.f39709d, -378691200L), a(), fVar);
                }
            } else {
                throw new IllegalArgumentException("Leap seconds do not exist on continuous time scale: " + fVar);
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public a0 v0(wt.f fVar) {
        switch (a.f39711a[fVar.ordinal()]) {
            case 1:
                if (j0()) {
                    return new a0(a(), this.f39709d);
                }
                break;
            case 2:
                break;
            case 3:
                return new a0(p(fVar), nt.c.f(l(fVar), -378691200L));
            case 4:
                return new a0(a(), nt.c.f(l(wt.f.GPS), 315964800L));
            case 5:
            case 6:
                return new a0(p(fVar), nt.c.f(l(fVar), 63072000L));
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
        return this;
    }

    private Object writeReplace() {
        return new SPX(this, 4);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.q
    /* renamed from: H */
    public pt.h0 w() {
        return f39704v;
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

    @Override // nt.f
    public int a() {
        return this.f39710e & (-1073741825);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.q
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
            if (this.f39709d != a0Var.f39709d) {
                return false;
            }
            if (wt.d.w().D()) {
                if (this.f39710e == a0Var.f39710e) {
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
        long j10 = this.f39709d;
        return (((int) (j10 ^ (j10 >>> 32))) * 19) + (a() * 37);
    }

    public boolean i0(wt.g gVar) {
        if (compareTo(a0(gVar)) < 0) {
            return true;
        }
        return false;
    }

    public boolean j0() {
        if (k0() && wt.d.w().D()) {
            return true;
        }
        return false;
    }

    @Override // wt.g
    public long l(wt.f fVar) {
        long d02;
        int r02;
        switch (a.f39711a[fVar.ordinal()]) {
            case 1:
                return this.f39709d;
            case 2:
                return d0();
            case 3:
                if (d0() < 0) {
                    double e10 = wt.f.e(c0()) + (this.f39709d - 63072000) + (a() / 1.0E9d);
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
                if (wt.d.w().H(d03) >= 315964800) {
                    if (!wt.d.w().D()) {
                        d03 += 9;
                    }
                    return d03 - 252892809;
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f39709d < 63072000) {
                    double e11 = wt.f.e(c0()) + (this.f39709d - 63072000) + (a() / 1.0E9d);
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
                long j11 = this.f39709d;
                if (j11 < 63072000) {
                    return j11 - 63072000;
                }
                return (long) Math.floor(e0());
            default:
                throw new UnsupportedOperationException("Not yet implemented: " + fVar);
        }
    }

    public a0 n0(long j10, o0 o0Var) {
        a0 l02;
        U(this);
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 == 0) {
            return this;
        }
        try {
            int i11 = a.f39712b[o0Var.ordinal()];
            if (i11 != 1) {
                if (i11 == 2) {
                    long f10 = nt.c.f(a(), j10);
                    int d10 = nt.c.d(f10, 1000000000);
                    long b10 = nt.c.b(f10, 1000000000);
                    if (wt.d.w().D()) {
                        l02 = new a0(nt.c.f(d0(), b10), d10, wt.f.UTC);
                    } else {
                        l02 = l0(nt.c.f(this.f39709d, b10), d10, wt.f.POSIX);
                    }
                } else {
                    throw new UnsupportedOperationException();
                }
            } else if (wt.d.w().D()) {
                l02 = new a0(nt.c.f(d0(), j10), a(), wt.f.UTC);
            } else {
                l02 = l0(nt.c.f(this.f39709d, j10), a(), wt.f.POSIX);
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

    @Override // wt.g
    public int p(wt.f fVar) {
        long d02;
        int a10;
        int i10 = 0;
        switch (a.f39711a[fVar.ordinal()]) {
            case 1:
            case 2:
                return a();
            case 3:
                if (d0() < 0) {
                    double e10 = wt.f.e(c0()) + (this.f39709d - 63072000) + (a() / 1.0E9d);
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
                if (wt.d.w().H(d0()) >= 315964800) {
                    return a();
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f39709d < 63072000) {
                    double e11 = wt.f.e(c0()) + (this.f39709d - 63072000) + (a() / 1.0E9d);
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
                if (this.f39709d < 63072000) {
                    return a();
                }
                double e02 = e0();
                return r0(e02, (long) Math.floor(e02));
            default:
                throw new UnsupportedOperationException("Not yet implemented: " + fVar);
        }
    }

    public r p0(pt.j jVar, String str, net.time4j.tz.k kVar, pt.f0 f0Var) {
        i0 t02 = t0(kVar);
        t02.X();
        ((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f39968i)).V();
        throw null;
    }

    @Override // nt.f
    public long q() {
        return this.f39709d;
    }

    public r q0(pt.x xVar, net.time4j.tz.k kVar, pt.f0 f0Var) {
        i0 t02 = t0(kVar);
        return r.b(((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f39968i)).V().T(xVar.r()), t02.X());
    }

    public i0 t0(net.time4j.tz.k kVar) {
        return g0(net.time4j.tz.l.N(kVar));
    }

    public String toString() {
        return s0(true);
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
        dataOutput.writeLong(this.f39709d);
        if (a10 > 0) {
            dataOutput.writeInt(a10);
        }
    }

    private a0(long j10, int i10, wt.f fVar) {
        long j11;
        long floor;
        int r02;
        long h10;
        long j12 = j10;
        int i11 = i10;
        if (fVar == wt.f.POSIX) {
            this.f39709d = j12;
            this.f39710e = i11;
        } else {
            wt.d w10 = wt.d.w();
            if (w10.D()) {
                if (fVar == wt.f.UTC) {
                    j11 = 0;
                } else {
                    j11 = 0;
                    if (fVar == wt.f.TAI) {
                        if (j12 < 0) {
                            throw new IllegalArgumentException("TAI not supported before 1958-01-01: " + j12);
                        } else if (j12 < 441763200) {
                            long f10 = nt.c.f(j12, -441763168L);
                            int e10 = nt.c.e(i11, 184000000);
                            if (e10 >= 1000000000) {
                                f10 = nt.c.f(f10, 1L);
                                e10 = nt.c.l(e10, 1000000000);
                            }
                            double d10 = f10 + (e10 / 1.0E9d);
                            double e11 = d10 - wt.f.e(f0.M0(nt.c.b((long) (d10 - 42.184d), 86400), pt.a0.UTC));
                            floor = (long) Math.floor(e11);
                            r02 = r0(e11, floor);
                        } else {
                            r02 = i11;
                            floor = nt.c.m(j12, 441763210L);
                        }
                    } else if (fVar == wt.f.GPS) {
                        long f11 = nt.c.f(j12, 252892809L);
                        if (f11 < 252892809) {
                            throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + j12);
                        }
                        r02 = i11;
                        floor = f11;
                    } else if (fVar == wt.f.TT) {
                        int i12 = (j12 > 42L ? 1 : (j12 == 42L ? 0 : -1));
                        if (i12 >= 0 && (i12 != 0 || i11 >= 184000000)) {
                            j12 = nt.c.m(j12, 42L);
                            i11 = nt.c.l(i11, 184000000);
                            if (i11 < 0) {
                                j12 = nt.c.m(j12, 1L);
                                i11 = nt.c.e(i11, 1000000000);
                            }
                        } else {
                            double d11 = j12 + (i11 / 1.0E9d);
                            double e12 = d11 - wt.f.e(f0.M0(nt.c.b((long) (d11 - 42.184d), 86400), pt.a0.UTC));
                            floor = (long) Math.floor(e12);
                            r02 = r0(e12, floor);
                        }
                    } else if (fVar != wt.f.UT) {
                        throw new UnsupportedOperationException("Not yet implemented: " + fVar.name());
                    } else if (j12 >= 0) {
                        double e13 = ((j12 + (i11 / 1.0E9d)) + wt.f.e(f0.M0(nt.c.b(j12, 86400), pt.a0.UTC))) - 42.184d;
                        floor = (long) Math.floor(e13);
                        r02 = r0(e13, floor);
                    }
                    long H = w10.H(floor);
                    h10 = floor - w10.h(H);
                    this.f39709d = H;
                    if (h10 != j11 || H == f39697o) {
                        this.f39710e = r02;
                    } else if (h10 == 1) {
                        this.f39710e = 1073741824 | r02;
                    } else {
                        throw new IllegalStateException("Cannot handle leap shift of " + j12 + ".");
                    }
                    i11 = r02;
                }
                r02 = i11;
                floor = j12;
                long H2 = w10.H(floor);
                h10 = floor - w10.h(H2);
                this.f39709d = H2;
                if (h10 != j11) {
                }
                this.f39710e = r02;
                i11 = r02;
            } else {
                throw new IllegalStateException("Leap seconds are not supported by configuration.");
            }
        }
        X(this.f39709d);
        V(i11);
    }

    private a0(int i10, long j10) {
        X(j10);
        this.f39709d = j10;
        this.f39710e = i10;
    }
}
