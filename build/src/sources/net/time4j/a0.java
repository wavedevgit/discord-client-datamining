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
import st.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends st.k0 implements zt.g {
    private static final st.v A;

    /* renamed from: i  reason: collision with root package name */
    private static final long f38191i;

    /* renamed from: o  reason: collision with root package name */
    private static final long f38192o;

    /* renamed from: p  reason: collision with root package name */
    private static final a0 f38193p;

    /* renamed from: q  reason: collision with root package name */
    private static final a0 f38194q;

    /* renamed from: r  reason: collision with root package name */
    private static final a0 f38195r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f38196s;
    private static final long serialVersionUID = -3192884724477742274L;

    /* renamed from: t  reason: collision with root package name */
    private static final Map f38197t;

    /* renamed from: u  reason: collision with root package name */
    private static final Map f38198u;

    /* renamed from: v  reason: collision with root package name */
    private static final st.h0 f38199v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f38200w;

    /* renamed from: x  reason: collision with root package name */
    public static final st.p f38201x;

    /* renamed from: y  reason: collision with root package name */
    public static final st.p f38202y;

    /* renamed from: z  reason: collision with root package name */
    public static final st.p f38203z;

    /* renamed from: d  reason: collision with root package name */
    private final transient long f38204d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f38205e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38206a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f38207b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f38208c;

        static {
            int[] iArr = new int[TimeUnit.values().length];
            f38208c = iArr;
            try {
                iArr[TimeUnit.DAYS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38208c[TimeUnit.HOURS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f38208c[TimeUnit.MINUTES.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f38208c[TimeUnit.SECONDS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f38208c[TimeUnit.MILLISECONDS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f38208c[TimeUnit.MICROSECONDS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f38208c[TimeUnit.NANOSECONDS.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            int[] iArr2 = new int[o0.values().length];
            f38207b = iArr2;
            try {
                iArr2[o0.SECONDS.ordinal()] = 1;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f38207b[o0.NANOSECONDS.ordinal()] = 2;
            } catch (NoSuchFieldError unused9) {
            }
            int[] iArr3 = new int[zt.f.values().length];
            f38206a = iArr3;
            try {
                iArr3[zt.f.POSIX.ordinal()] = 1;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f38206a[zt.f.UTC.ordinal()] = 2;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f38206a[zt.f.TAI.ordinal()] = 3;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f38206a[zt.f.GPS.ordinal()] = 4;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f38206a[zt.f.TT.ordinal()] = 5;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f38206a[zt.f.UT.ordinal()] = 6;
            } catch (NoSuchFieldError unused15) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements st.i0 {
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
    public enum c implements st.p, st.z {
        FRACTION;

        @Override // st.p
        public boolean A() {
            return false;
        }

        @Override // st.z
        /* renamed from: C */
        public st.p a(a0 a0Var) {
            return null;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.z
        /* renamed from: E */
        public st.p g(a0 a0Var) {
            return null;
        }

        @Override // st.p
        /* renamed from: F */
        public Integer e() {
            return 999999999;
        }

        @Override // st.p
        /* renamed from: G */
        public Integer B() {
            return 0;
        }

        @Override // st.z
        /* renamed from: H */
        public Integer h(a0 a0Var) {
            return e();
        }

        @Override // st.z
        /* renamed from: I */
        public Integer m(a0 a0Var) {
            return B();
        }

        @Override // st.z
        /* renamed from: J */
        public Integer y(a0 a0Var) {
            return Integer.valueOf(a0Var.a());
        }

        @Override // st.z
        /* renamed from: K */
        public boolean k(a0 a0Var, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 0 || intValue >= 1000000000) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: L */
        public a0 s(a0 a0Var, Integer num, boolean z10) {
            if (num != null) {
                if (zt.d.s().G()) {
                    zt.f fVar = zt.f.UTC;
                    return a0.l0(a0Var.l(fVar), num.intValue(), fVar);
                }
                return a0.l0(a0Var.o(), num.intValue(), zt.f.POSIX);
            }
            throw new IllegalArgumentException("Missing fraction value.");
        }

        @Override // st.p
        public char d() {
            return (char) 0;
        }

        @Override // st.p
        public boolean f() {
            return false;
        }

        @Override // st.p
        public Class getType() {
            return Integer.class;
        }

        @Override // java.util.Comparator
        /* renamed from: z */
        public int compare(st.o oVar, st.o oVar2) {
            return ((Integer) oVar.t(this)).compareTo((Integer) oVar2.t(this));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum d implements st.p, st.z {
        POSIX_TIME;

        @Override // st.p
        public boolean A() {
            return false;
        }

        @Override // st.z
        /* renamed from: C */
        public st.p a(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.z
        /* renamed from: E */
        public st.p g(a0 a0Var) {
            return c.FRACTION;
        }

        @Override // st.p
        /* renamed from: F */
        public Long e() {
            return Long.valueOf(a0.f38192o);
        }

        @Override // st.p
        /* renamed from: G */
        public Long B() {
            return Long.valueOf(a0.f38191i);
        }

        @Override // st.z
        /* renamed from: H */
        public Long h(a0 a0Var) {
            return Long.valueOf(a0.f38192o);
        }

        @Override // st.z
        /* renamed from: I */
        public Long m(a0 a0Var) {
            return Long.valueOf(a0.f38191i);
        }

        @Override // st.z
        /* renamed from: J */
        public Long y(a0 a0Var) {
            return Long.valueOf(a0Var.o());
        }

        @Override // st.z
        /* renamed from: K */
        public boolean k(a0 a0Var, Long l10) {
            if (l10 == null) {
                return false;
            }
            long longValue = l10.longValue();
            if (longValue < a0.f38191i || longValue > a0.f38192o) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: L */
        public a0 s(a0 a0Var, Long l10, boolean z10) {
            if (l10 != null) {
                return a0.l0(l10.longValue(), a0Var.a(), zt.f.POSIX);
            }
            throw new IllegalArgumentException("Missing elapsed seconds.");
        }

        @Override // st.p
        public char d() {
            return (char) 0;
        }

        @Override // st.p
        public boolean f() {
            return false;
        }

        @Override // st.p
        public Class getType() {
            return Long.class;
        }

        @Override // java.util.Comparator
        /* renamed from: z */
        public int compare(st.o oVar, st.o oVar2) {
            return ((Long) oVar.t(this)).compareTo((Long) oVar2.t(this));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements st.u {
        private e() {
        }

        @Override // st.u
        public st.f0 a() {
            return st.f0.f50375a;
        }

        @Override // st.u
        public st.x b() {
            return i0.S();
        }

        @Override // st.u
        public int c() {
            return f0.r0().c();
        }

        @Override // st.u
        /* renamed from: d */
        public a0 i(st.q qVar, st.d dVar, boolean z10, boolean z11) {
            i0 i0Var;
            net.time4j.tz.k kVar;
            a0 a0Var;
            net.time4j.tz.p B;
            a0 a0Var2;
            zt.f fVar = (zt.f) dVar.b(tt.a.f51024w, zt.f.UTC);
            if (qVar instanceof qt.f) {
                return a0.a0((qt.f) qt.f.class.cast(qVar)).u0(fVar);
            }
            d dVar2 = d.POSIX_TIME;
            if (qVar.s(dVar2)) {
                long longValue = ((Long) qVar.t(dVar2)).longValue();
                c cVar = c.FRACTION;
                return a0.l0(longValue, qVar.s(cVar) ? ((Integer) qVar.t(cVar)).intValue() : 0, zt.f.POSIX).u0(fVar);
            }
            if (qVar.s(st.b0.LEAP_SECOND)) {
                qVar.C(g0.J, 60);
                r3 = 1;
            }
            st.p M = i0.S().M();
            if (qVar.s(M)) {
                i0Var = (i0) qVar.t(M);
            } else {
                i0Var = (i0) i0.S().i(qVar, dVar, z10, z11);
            }
            if (i0Var == null) {
                return null;
            }
            if (qVar.k()) {
                kVar = qVar.u();
            } else {
                st.c cVar2 = tt.a.f51005d;
                kVar = dVar.c(cVar2) ? (net.time4j.tz.k) dVar.a(cVar2) : null;
            }
            if (kVar != null) {
                st.b0 b0Var = st.b0.DAYLIGHT_SAVING;
                if (qVar.s(b0Var)) {
                    a0Var = i0Var.Y(net.time4j.tz.l.N(kVar).Q(((net.time4j.tz.o) dVar.b(tt.a.f51006e, net.time4j.tz.l.f38719o)).a(((Boolean) qVar.t(b0Var)).booleanValue() ? net.time4j.tz.g.EARLIER_OFFSET : net.time4j.tz.g.LATER_OFFSET)));
                } else {
                    st.c cVar3 = tt.a.f51006e;
                    if (dVar.c(cVar3)) {
                        a0Var = i0Var.Y(net.time4j.tz.l.N(kVar).Q((net.time4j.tz.o) dVar.a(cVar3)));
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
                        if (zt.d.s().G()) {
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

        @Override // st.u
        /* renamed from: e */
        public st.o h(a0 a0Var, st.d dVar) {
            st.c cVar = tt.a.f51005d;
            if (dVar.c(cVar)) {
                return a0Var.v0((zt.f) dVar.b(tt.a.f51024w, zt.f.UTC)).h0((net.time4j.tz.k) dVar.a(cVar));
            }
            throw new IllegalArgumentException("Cannot print moment without timezone.");
        }

        @Override // st.u
        public String g(st.y yVar, Locale locale) {
            tt.e d10 = tt.e.d(yVar.a());
            return tt.b.s(d10, d10, locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements st.v {
        private f() {
        }

        @Override // st.v
        /* renamed from: a */
        public a0 apply(a0 a0Var) {
            zt.b C;
            zt.d s10 = zt.d.s();
            if (s10.G() && (C = s10.C(a0Var.l(zt.f.UTC))) != null) {
                return f0.w0(C.c()).q0(23, 59, 59).R().n0(C.a(), o0.SECONDS);
            }
            return null;
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g implements st.z {
        private g() {
        }

        @Override // st.z
        /* renamed from: b */
        public st.p a(a0 a0Var) {
            return null;
        }

        @Override // st.z
        /* renamed from: c */
        public st.p g(a0 a0Var) {
            return null;
        }

        @Override // st.z
        /* renamed from: d */
        public TimeUnit h(a0 a0Var) {
            return TimeUnit.NANOSECONDS;
        }

        @Override // st.z
        /* renamed from: e */
        public TimeUnit m(a0 a0Var) {
            return TimeUnit.DAYS;
        }

        @Override // st.z
        /* renamed from: f */
        public TimeUnit y(a0 a0Var) {
            int a10 = a0Var.a();
            if (a10 == 0) {
                long j10 = a0Var.f38204d;
                if (qt.c.d(j10, 86400) == 0) {
                    return TimeUnit.DAYS;
                }
                if (qt.c.d(j10, 3600) == 0) {
                    return TimeUnit.HOURS;
                }
                if (qt.c.d(j10, 60) == 0) {
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

        @Override // st.z
        /* renamed from: j */
        public boolean k(a0 a0Var, TimeUnit timeUnit) {
            return timeUnit != null;
        }

        @Override // st.z
        /* renamed from: l */
        public a0 s(a0 a0Var, TimeUnit timeUnit, boolean z10) {
            a0 l02;
            if (timeUnit != null) {
                switch (a.f38208c[timeUnit.ordinal()]) {
                    case 1:
                        return a0.m0(qt.c.b(a0Var.f38204d, 86400) * 86400, zt.f.POSIX);
                    case 2:
                        return a0.m0(qt.c.b(a0Var.f38204d, 3600) * 3600, zt.f.POSIX);
                    case 3:
                        return a0.m0(qt.c.b(a0Var.f38204d, 60) * 60, zt.f.POSIX);
                    case 4:
                        l02 = a0.l0(a0Var.f38204d, 0, zt.f.POSIX);
                        break;
                    case 5:
                        l02 = a0.l0(a0Var.f38204d, (a0Var.a() / 1000000) * 1000000, zt.f.POSIX);
                        break;
                    case 6:
                        l02 = a0.l0(a0Var.f38204d, (a0Var.a() / 1000) * 1000, zt.f.POSIX);
                        break;
                    case 7:
                        return a0Var;
                    default:
                        throw new UnsupportedOperationException(timeUnit.name());
                }
                if (a0Var.j0() && zt.d.s().G()) {
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
    private static class h implements st.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final TimeUnit f38213a;

        h(TimeUnit timeUnit) {
            this.f38213a = timeUnit;
        }

        @Override // st.m0
        /* renamed from: c */
        public a0 b(a0 a0Var, long j10) {
            if (this.f38213a.compareTo(TimeUnit.SECONDS) >= 0) {
                return a0.l0(qt.c.f(a0Var.o(), qt.c.i(j10, this.f38213a.toSeconds(1L))), a0Var.a(), zt.f.POSIX);
            }
            long f10 = qt.c.f(a0Var.a(), qt.c.i(j10, this.f38213a.toNanos(1L)));
            return a0.l0(qt.c.f(a0Var.o(), qt.c.b(f10, 1000000000)), qt.c.d(f10, 1000000000), zt.f.POSIX);
        }

        @Override // st.m0
        /* renamed from: d */
        public long a(a0 a0Var, a0 a0Var2) {
            long f10;
            if (this.f38213a.compareTo(TimeUnit.SECONDS) >= 0) {
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
                f10 = qt.c.f(qt.c.i(qt.c.m(a0Var2.o(), a0Var.o()), 1000000000L), a0Var2.a() - a0Var.a());
            }
            switch (a.f38208c[this.f38213a.ordinal()]) {
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
                    throw new UnsupportedOperationException(this.f38213a.name());
            }
        }
    }

    static {
        TimeUnit[] values;
        long j10 = qt.b.j(-999999999, 1, 1);
        long j11 = qt.b.j(999999999, 12, 31);
        st.a0 a0Var = st.a0.UNIX;
        st.a0 a0Var2 = st.a0.MODIFIED_JULIAN_DATE;
        long k10 = a0Var.k(j10, a0Var2) * 86400;
        f38191i = k10;
        long k11 = (a0Var.k(j11, a0Var2) * 86400) + 86399;
        f38192o = k11;
        zt.f fVar = zt.f.POSIX;
        a0 a0Var3 = new a0(k10, 0, fVar);
        f38193p = a0Var3;
        a0 a0Var4 = new a0(k11, 999999999, fVar);
        f38194q = a0Var4;
        f38195r = new a0(63158400L, 0, fVar);
        HashSet hashSet = new HashSet();
        hashSet.add(g0.G);
        hashSet.add(g0.F);
        hashSet.add(g0.E);
        hashSet.add(g0.D);
        hashSet.add(g0.C);
        hashSet.add(g0.B);
        hashSet.add(g0.H);
        hashSet.add(g0.I);
        f38196s = Collections.unmodifiableSet(hashSet);
        HashMap hashMap = new HashMap();
        hashMap.put(g0.J, 1);
        hashMap.put(g0.K, 1);
        hashMap.put(g0.L, 1000);
        hashMap.put(g0.O, 1000);
        hashMap.put(g0.M, 1000000);
        hashMap.put(g0.P, 1000000);
        hashMap.put(g0.N, 1000000000);
        hashMap.put(g0.Q, 1000000000);
        f38197t = Collections.unmodifiableMap(hashMap);
        EnumMap enumMap = new EnumMap(TimeUnit.class);
        enumMap.put((EnumMap) TimeUnit.DAYS, (TimeUnit) Double.valueOf(86400.0d));
        enumMap.put((EnumMap) TimeUnit.HOURS, (TimeUnit) Double.valueOf(3600.0d));
        enumMap.put((EnumMap) TimeUnit.MINUTES, (TimeUnit) Double.valueOf(60.0d));
        enumMap.put((EnumMap) TimeUnit.SECONDS, (TimeUnit) Double.valueOf(1.0d));
        enumMap.put((EnumMap) TimeUnit.MILLISECONDS, (TimeUnit) Double.valueOf(0.001d));
        enumMap.put((EnumMap) TimeUnit.MICROSECONDS, (TimeUnit) Double.valueOf(1.0E-6d));
        enumMap.put((EnumMap) TimeUnit.NANOSECONDS, (TimeUnit) Double.valueOf(1.0E-9d));
        f38198u = Collections.unmodifiableMap(enumMap);
        h0.b k12 = h0.b.k(TimeUnit.class, a0.class, new e(null), a0Var3, a0Var4);
        for (TimeUnit timeUnit : TimeUnit.values()) {
            h hVar = new h(timeUnit);
            Map map = f38198u;
            k12.g(timeUnit, hVar, ((Double) map.get(timeUnit)).doubleValue(), map.keySet());
        }
        d dVar = d.POSIX_TIME;
        k12.e(dVar, dVar, TimeUnit.SECONDS);
        c cVar = c.FRACTION;
        k12.e(cVar, cVar, TimeUnit.NANOSECONDS);
        st.p pVar = j0.f38588p;
        k12.d(pVar, new g(null));
        f38199v = k12.l(new b(null)).h();
        f38200w = new a0(0L, 0, zt.f.POSIX);
        f38201x = dVar;
        f38202y = cVar;
        f38203z = pVar;
        A = new f(null);
    }

    /* synthetic */ a0(int i10, long j10, a aVar) {
        this(i10, j10);
    }

    public static st.h0 T() {
        return f38199v;
    }

    static void U(a0 a0Var) {
        if (a0Var.f38204d >= 63072000) {
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
        zt.d s10 = zt.d.s();
        if (s10.L() && s10.K(s10.g(j10)) > j10) {
            throw new st.r("Illegal local timestamp due to negative leap second: " + i0Var);
        }
    }

    private static void X(long j10) {
        if (j10 <= f38192o && j10 >= f38191i) {
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

    public static a0 a0(qt.f fVar) {
        if (fVar instanceof a0) {
            return (a0) a0.class.cast(fVar);
        }
        if ((fVar instanceof zt.g) && zt.d.s().G()) {
            zt.g gVar = (zt.g) zt.g.class.cast(fVar);
            zt.f fVar2 = zt.f.UTC;
            return l0(gVar.l(fVar2), gVar.q(fVar2), fVar2);
        }
        return l0(fVar.o(), fVar.a(), zt.f.POSIX);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 c0() {
        return f0.M0(qt.c.b(this.f38204d, 86400), st.a0.UNIX);
    }

    private long d0() {
        if (zt.d.s().G()) {
            long g10 = zt.d.s().g(this.f38204d);
            if (k0()) {
                return g10 + 1;
            }
            return g10;
        }
        return this.f38204d - 63072000;
    }

    private double e0() {
        double d02 = ((d0() + 42.184d) + (a() / 1.0E9d)) - zt.f.e(c0());
        long floor = (long) Math.floor(d02);
        if (Double.compare(1.0E9d - ((d02 - floor) * 1.0E9d), 1.0d) < 0) {
            return floor + 1;
        }
        return d02;
    }

    private static int f0(a0 a0Var) {
        return qt.c.d(a0Var.f38204d, 86400);
    }

    private i0 g0(net.time4j.tz.l lVar) {
        return i0.U(this, lVar.B(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean k0() {
        if ((this.f38205e >>> 30) != 0) {
            return true;
        }
        return false;
    }

    public static a0 l0(long j10, int i10, zt.f fVar) {
        if (j10 == 0 && i10 == 0 && fVar == zt.f.POSIX) {
            return f38200w;
        }
        return new a0(j10, i10, fVar);
    }

    public static a0 m0(long j10, zt.f fVar) {
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
                    return f38200w;
                }
            } else {
                throw new InvalidObjectException("UTC epoch is no leap second.");
            }
        }
        if (readLong == f38191i && i10 == 0) {
            if (!z10) {
                return f38193p;
            }
            throw new InvalidObjectException("Minimum is no leap second.");
        } else if (readLong == f38192o && i10 == 999999999) {
            if (!z10) {
                return f38194q;
            }
            throw new InvalidObjectException("Maximum is no leap second.");
        } else {
            V(i10);
            if (z10) {
                zt.d s10 = zt.d.s();
                if (s10.G() && !s10.H(s10.g(readLong) + 1)) {
                    long l10 = qt.b.l(readLong);
                    int h10 = qt.b.h(l10);
                    int g10 = qt.b.g(l10);
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Not registered as leap second event: ");
                    sb2.append(qt.b.i(l10));
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
            return (int) ((d10 * 1.0E9d) - qt.c.i(j10, 1000000000L));
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
        int E = (f02 % 60) + zt.d.s().E(d0());
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
    public a0 u0(zt.f fVar) {
        if (fVar != zt.f.UTC) {
            if (!j0()) {
                int i10 = a.f38206a[fVar.ordinal()];
                if (i10 != 1) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5 && i10 != 6) {
                                throw new UnsupportedOperationException(fVar.name());
                            }
                            return new a0(qt.c.m(this.f38204d, 63072000L), a(), fVar);
                        }
                        return new a0(qt.c.m(this.f38204d, 315964800L), a(), fVar);
                    }
                    return new a0(qt.c.m(this.f38204d, -378691200L), a(), fVar);
                }
            } else {
                throw new IllegalArgumentException("Leap seconds do not exist on continuous time scale: " + fVar);
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public a0 v0(zt.f fVar) {
        switch (a.f38206a[fVar.ordinal()]) {
            case 1:
                if (j0()) {
                    return new a0(a(), this.f38204d);
                }
                break;
            case 2:
                break;
            case 3:
                return new a0(q(fVar), qt.c.f(l(fVar), -378691200L));
            case 4:
                return new a0(a(), qt.c.f(l(zt.f.GPS), 315964800L));
            case 5:
            case 6:
                return new a0(q(fVar), qt.c.f(l(fVar), 63072000L));
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
        return this;
    }

    private Object writeReplace() {
        return new SPX(this, 4);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.q
    /* renamed from: H */
    public st.h0 w() {
        return f38199v;
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

    @Override // qt.f
    public int a() {
        return this.f38205e & (-1073741825);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.q
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
            if (this.f38204d != a0Var.f38204d) {
                return false;
            }
            if (zt.d.s().G()) {
                if (this.f38205e == a0Var.f38205e) {
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
        long j10 = this.f38204d;
        return (((int) (j10 ^ (j10 >>> 32))) * 19) + (a() * 37);
    }

    public boolean i0(zt.g gVar) {
        if (compareTo(a0(gVar)) < 0) {
            return true;
        }
        return false;
    }

    public boolean j0() {
        if (k0() && zt.d.s().G()) {
            return true;
        }
        return false;
    }

    @Override // zt.g
    public long l(zt.f fVar) {
        long d02;
        int r02;
        switch (a.f38206a[fVar.ordinal()]) {
            case 1:
                return this.f38204d;
            case 2:
                return d0();
            case 3:
                if (d0() < 0) {
                    double e10 = zt.f.e(c0()) + (this.f38204d - 63072000) + (a() / 1.0E9d);
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
                if (zt.d.s().K(d03) >= 315964800) {
                    if (!zt.d.s().G()) {
                        d03 += 9;
                    }
                    return d03 - 252892809;
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f38204d < 63072000) {
                    double e11 = zt.f.e(c0()) + (this.f38204d - 63072000) + (a() / 1.0E9d);
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
                long j11 = this.f38204d;
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
            int i11 = a.f38207b[o0Var.ordinal()];
            if (i11 != 1) {
                if (i11 == 2) {
                    long f10 = qt.c.f(a(), j10);
                    int d10 = qt.c.d(f10, 1000000000);
                    long b10 = qt.c.b(f10, 1000000000);
                    if (zt.d.s().G()) {
                        l02 = new a0(qt.c.f(d0(), b10), d10, zt.f.UTC);
                    } else {
                        l02 = l0(qt.c.f(this.f38204d, b10), d10, zt.f.POSIX);
                    }
                } else {
                    throw new UnsupportedOperationException();
                }
            } else if (zt.d.s().G()) {
                l02 = new a0(qt.c.f(d0(), j10), a(), zt.f.UTC);
            } else {
                l02 = l0(qt.c.f(this.f38204d, j10), a(), zt.f.POSIX);
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

    @Override // qt.f
    public long o() {
        return this.f38204d;
    }

    public r p0(st.j jVar, String str, net.time4j.tz.k kVar, st.f0 f0Var) {
        i0 t02 = t0(kVar);
        t02.X();
        ((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f38463i)).V();
        throw null;
    }

    @Override // zt.g
    public int q(zt.f fVar) {
        long d02;
        int a10;
        int i10 = 0;
        switch (a.f38206a[fVar.ordinal()]) {
            case 1:
            case 2:
                return a();
            case 3:
                if (d0() < 0) {
                    double e10 = zt.f.e(c0()) + (this.f38204d - 63072000) + (a() / 1.0E9d);
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
                if (zt.d.s().K(d0()) >= 315964800) {
                    return a();
                }
                throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + this);
            case 5:
                if (this.f38204d < 63072000) {
                    double e11 = zt.f.e(c0()) + (this.f38204d - 63072000) + (a() / 1.0E9d);
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
                if (this.f38204d < 63072000) {
                    return a();
                }
                double e02 = e0();
                return r0(e02, (long) Math.floor(e02));
            default:
                throw new UnsupportedOperationException("Not yet implemented: " + fVar);
        }
    }

    public r q0(st.x xVar, net.time4j.tz.k kVar, st.f0 f0Var) {
        i0 t02 = t0(kVar);
        return r.b(((i0) t02.J(f0Var.b(t02.V(), kVar), net.time4j.g.f38463i)).V().T(xVar.n()), t02.X());
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
        dataOutput.writeLong(this.f38204d);
        if (a10 > 0) {
            dataOutput.writeInt(a10);
        }
    }

    private a0(long j10, int i10, zt.f fVar) {
        long j11;
        long floor;
        int r02;
        long g10;
        long j12 = j10;
        int i11 = i10;
        if (fVar == zt.f.POSIX) {
            this.f38204d = j12;
            this.f38205e = i11;
        } else {
            zt.d s10 = zt.d.s();
            if (s10.G()) {
                if (fVar == zt.f.UTC) {
                    j11 = 0;
                } else {
                    j11 = 0;
                    if (fVar == zt.f.TAI) {
                        if (j12 < 0) {
                            throw new IllegalArgumentException("TAI not supported before 1958-01-01: " + j12);
                        } else if (j12 < 441763200) {
                            long f10 = qt.c.f(j12, -441763168L);
                            int e10 = qt.c.e(i11, 184000000);
                            if (e10 >= 1000000000) {
                                f10 = qt.c.f(f10, 1L);
                                e10 = qt.c.l(e10, 1000000000);
                            }
                            double d10 = f10 + (e10 / 1.0E9d);
                            double e11 = d10 - zt.f.e(f0.M0(qt.c.b((long) (d10 - 42.184d), 86400), st.a0.UTC));
                            floor = (long) Math.floor(e11);
                            r02 = r0(e11, floor);
                        } else {
                            r02 = i11;
                            floor = qt.c.m(j12, 441763210L);
                        }
                    } else if (fVar == zt.f.GPS) {
                        long f11 = qt.c.f(j12, 252892809L);
                        if (f11 < 252892809) {
                            throw new IllegalArgumentException("GPS not supported before 1980-01-06: " + j12);
                        }
                        r02 = i11;
                        floor = f11;
                    } else if (fVar == zt.f.TT) {
                        int i12 = (j12 > 42L ? 1 : (j12 == 42L ? 0 : -1));
                        if (i12 >= 0 && (i12 != 0 || i11 >= 184000000)) {
                            j12 = qt.c.m(j12, 42L);
                            i11 = qt.c.l(i11, 184000000);
                            if (i11 < 0) {
                                j12 = qt.c.m(j12, 1L);
                                i11 = qt.c.e(i11, 1000000000);
                            }
                        } else {
                            double d11 = j12 + (i11 / 1.0E9d);
                            double e12 = d11 - zt.f.e(f0.M0(qt.c.b((long) (d11 - 42.184d), 86400), st.a0.UTC));
                            floor = (long) Math.floor(e12);
                            r02 = r0(e12, floor);
                        }
                    } else if (fVar != zt.f.UT) {
                        throw new UnsupportedOperationException("Not yet implemented: " + fVar.name());
                    } else if (j12 >= 0) {
                        double e13 = ((j12 + (i11 / 1.0E9d)) + zt.f.e(f0.M0(qt.c.b(j12, 86400), st.a0.UTC))) - 42.184d;
                        floor = (long) Math.floor(e13);
                        r02 = r0(e13, floor);
                    }
                    long K = s10.K(floor);
                    g10 = floor - s10.g(K);
                    this.f38204d = K;
                    if (g10 != j11 || K == f38192o) {
                        this.f38205e = r02;
                    } else if (g10 == 1) {
                        this.f38205e = 1073741824 | r02;
                    } else {
                        throw new IllegalStateException("Cannot handle leap shift of " + j12 + ".");
                    }
                    i11 = r02;
                }
                r02 = i11;
                floor = j12;
                long K2 = s10.K(floor);
                g10 = floor - s10.g(K2);
                this.f38204d = K2;
                if (g10 != j11) {
                }
                this.f38205e = r02;
                i11 = r02;
            } else {
                throw new IllegalStateException("Leap seconds are not supported by configuration.");
            }
        }
        X(this.f38204d);
        V(i11);
    }

    private a0(int i10, long j10) {
        X(j10);
        this.f38204d = j10;
        this.f38205e = i10;
    }
}
