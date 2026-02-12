package net.time4j;

import bu.h0;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import net.time4j.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 extends bu.k0 implements zt.g, cu.h {
    public static final v0 A;
    public static final d1 B;
    public static final net.time4j.c C;
    public static final net.time4j.c D;
    public static final l0 E;
    public static final l0 F;
    public static final l0 G;
    public static final l0 H;
    public static final l0 I;
    public static final l0 J;
    public static final l0 K;
    public static final l0 L;
    public static final l0 M;
    public static final l0 N;
    public static final l0 O;
    public static final l0 P;
    public static final l0 Q;
    public static final d1 R;
    public static final d1 S;
    public static final d1 T;
    public static final bu.p U;
    private static final Map V;
    private static final bu.z W;
    private static final bu.z X;
    private static final bu.z Y;
    private static final bu.h0 Z;

    /* renamed from: p  reason: collision with root package name */
    static final char f37474p;

    /* renamed from: q  reason: collision with root package name */
    private static final BigDecimal f37475q;

    /* renamed from: r  reason: collision with root package name */
    private static final BigDecimal f37476r;

    /* renamed from: s  reason: collision with root package name */
    private static final BigDecimal f37477s;
    private static final long serialVersionUID = 2780881537313863339L;

    /* renamed from: t  reason: collision with root package name */
    private static final BigDecimal f37478t;

    /* renamed from: u  reason: collision with root package name */
    private static final BigDecimal f37479u;

    /* renamed from: v  reason: collision with root package name */
    private static final BigDecimal f37480v;

    /* renamed from: w  reason: collision with root package name */
    private static final g0[] f37481w;

    /* renamed from: x  reason: collision with root package name */
    static final g0 f37482x;

    /* renamed from: y  reason: collision with root package name */
    static final g0 f37483y;

    /* renamed from: z  reason: collision with root package name */
    static final bu.p f37484z;

    /* renamed from: d  reason: collision with root package name */
    private final transient byte f37485d;

    /* renamed from: e  reason: collision with root package name */
    private final transient byte f37486e;

    /* renamed from: i  reason: collision with root package name */
    private final transient byte f37487i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f37488o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37489a;

        static {
            int[] iArr = new int[net.time4j.g.values().length];
            f37489a = iArr;
            try {
                iArr[net.time4j.g.f37466d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37489a[net.time4j.g.f37467e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37489a[net.time4j.g.f37468i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f37489a[net.time4j.g.f37469o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f37489a[net.time4j.g.f37470p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f37489a[net.time4j.g.f37471q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        private final bu.p f37490d;

        /* renamed from: e  reason: collision with root package name */
        private final BigDecimal f37491e;

        b(bu.p pVar, BigDecimal bigDecimal) {
            this.f37490d = pVar;
            this.f37491e = bigDecimal;
        }

        private static BigDecimal b(BigDecimal bigDecimal, BigDecimal bigDecimal2) {
            return bigDecimal.divide(bigDecimal2, 16, RoundingMode.FLOOR);
        }

        private static int j(BigDecimal bigDecimal) {
            return Math.min(999999999, bigDecimal.movePointRight(9).setScale(0, RoundingMode.HALF_UP).intValue());
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p a(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p h(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: e */
        public BigDecimal m(g0 g0Var) {
            bu.p pVar;
            if (g0Var.f37485d == 24 && ((pVar = this.f37490d) == g0.S || pVar == g0.T)) {
                return BigDecimal.ZERO;
            }
            return this.f37491e;
        }

        @Override // bu.z
        /* renamed from: f */
        public BigDecimal q(g0 g0Var) {
            return BigDecimal.ZERO;
        }

        @Override // bu.z
        /* renamed from: g */
        public BigDecimal y(g0 g0Var) {
            BigDecimal add;
            bu.p pVar = this.f37490d;
            if (pVar == g0.R) {
                if (g0Var.equals(g0.f37482x)) {
                    return BigDecimal.ZERO;
                }
                if (g0Var.f37485d == 24) {
                    return g0.f37478t;
                }
                add = BigDecimal.valueOf(g0Var.f37485d).add(b(BigDecimal.valueOf(g0Var.f37486e), g0.f37475q)).add(b(BigDecimal.valueOf(g0Var.f37487i), g0.f37476r)).add(b(BigDecimal.valueOf(g0Var.f37488o), g0.f37476r.multiply(g0.f37477s)));
            } else if (pVar == g0.S) {
                if (g0Var.z0()) {
                    return BigDecimal.ZERO;
                }
                add = BigDecimal.valueOf(g0Var.f37486e).add(b(BigDecimal.valueOf(g0Var.f37487i), g0.f37475q)).add(b(BigDecimal.valueOf(g0Var.f37488o), g0.f37475q.multiply(g0.f37477s)));
            } else if (pVar == g0.T) {
                if (g0Var.A0()) {
                    return BigDecimal.ZERO;
                }
                add = BigDecimal.valueOf(g0Var.f37487i).add(b(BigDecimal.valueOf(g0Var.f37488o), g0.f37477s));
            } else {
                throw new UnsupportedOperationException(this.f37490d.name());
            }
            return h0.a(add.setScale(15, RoundingMode.FLOOR));
        }

        @Override // bu.z
        /* renamed from: i */
        public boolean o(g0 g0Var, BigDecimal bigDecimal) {
            bu.p pVar;
            if (bigDecimal == null) {
                return false;
            }
            if (g0Var.f37485d == 24 && ((pVar = this.f37490d) == g0.S || pVar == g0.T)) {
                if (BigDecimal.ZERO.compareTo(bigDecimal) != 0) {
                    return false;
                }
                return true;
            } else if (BigDecimal.ZERO.compareTo(bigDecimal) > 0 || this.f37491e.compareTo(bigDecimal) < 0) {
                return false;
            } else {
                return true;
            }
        }

        @Override // bu.z
        /* renamed from: k */
        public g0 x(g0 g0Var, BigDecimal bigDecimal, boolean z10) {
            int i10;
            int i11;
            long j10;
            int i12;
            int i13;
            int i14;
            int i15;
            if (bigDecimal != null) {
                bu.p pVar = this.f37490d;
                if (pVar == g0.R) {
                    RoundingMode roundingMode = RoundingMode.FLOOR;
                    BigDecimal scale = bigDecimal.setScale(0, roundingMode);
                    BigDecimal multiply = bigDecimal.subtract(scale).multiply(g0.f37475q);
                    BigDecimal scale2 = multiply.setScale(0, roundingMode);
                    BigDecimal multiply2 = multiply.subtract(scale2).multiply(g0.f37475q);
                    BigDecimal scale3 = multiply2.setScale(0, roundingMode);
                    j10 = scale.longValueExact();
                    i12 = scale2.intValue();
                    i11 = scale3.intValue();
                    i13 = j(multiply2.subtract(scale3));
                } else if (pVar == g0.S) {
                    RoundingMode roundingMode2 = RoundingMode.FLOOR;
                    BigDecimal scale4 = bigDecimal.setScale(0, roundingMode2);
                    BigDecimal multiply3 = bigDecimal.subtract(scale4).multiply(g0.f37475q);
                    BigDecimal scale5 = multiply3.setScale(0, roundingMode2);
                    i11 = scale5.intValue();
                    int j11 = j(multiply3.subtract(scale5));
                    long longValueExact = scale4.longValueExact();
                    long j12 = g0Var.f37485d;
                    if (!z10) {
                        g0.k0(longValueExact);
                        i14 = (int) longValueExact;
                    } else {
                        j12 += zt.c.b(longValueExact, 60);
                        i14 = zt.c.d(longValueExact, 60);
                    }
                    j10 = j12;
                    i12 = i14;
                    i13 = j11;
                } else if (pVar == g0.T) {
                    BigDecimal scale6 = bigDecimal.setScale(0, RoundingMode.FLOOR);
                    int j13 = j(bigDecimal.subtract(scale6));
                    long longValueExact2 = scale6.longValueExact();
                    long j14 = g0Var.f37485d;
                    int i16 = g0Var.f37486e;
                    if (!z10) {
                        g0.m0(longValueExact2);
                        i10 = (int) longValueExact2;
                    } else {
                        i10 = zt.c.d(longValueExact2, 60);
                        long b10 = i16 + zt.c.b(longValueExact2, 60);
                        j14 += zt.c.b(b10, 60);
                        i16 = zt.c.d(b10, 60);
                    }
                    i11 = i10;
                    j10 = j14;
                    i12 = i16;
                    i13 = j13;
                } else {
                    throw new UnsupportedOperationException(this.f37490d.name());
                }
                if (z10) {
                    i15 = zt.c.d(j10, 24);
                    if (j10 > 0 && (i15 | i12 | i11 | i13) == 0) {
                        return g0.f37483y;
                    }
                } else if (j10 >= 0 && j10 <= 24) {
                    i15 = (int) j10;
                } else {
                    throw new IllegalArgumentException("Value out of range: " + bigDecimal);
                }
                return g0.J0(i15, i12, i11, i13);
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements bu.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final net.time4j.g f37492a;

        /* synthetic */ c(net.time4j.g gVar, a aVar) {
            this(gVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static j e(g0 g0Var, long j10, net.time4j.g gVar) {
            if (j10 == 0 && g0Var.f37485d < 24) {
                return new j(0L, g0Var);
            }
            return (j) g(j.class, gVar, g0Var, j10);
        }

        private static Object g(Class cls, net.time4j.g gVar, g0 g0Var, long j10) {
            long f10;
            g0 J0;
            int i10 = g0Var.f37486e;
            int i11 = g0Var.f37487i;
            int i12 = g0Var.f37488o;
            switch (a.f37489a[gVar.ordinal()]) {
                case 1:
                    f10 = zt.c.f(g0Var.f37485d, j10);
                    break;
                case 2:
                    long f11 = zt.c.f(g0Var.f37486e, j10);
                    f10 = zt.c.f(g0Var.f37485d, zt.c.b(f11, 60));
                    i10 = zt.c.d(f11, 60);
                    break;
                case 3:
                    long f12 = zt.c.f(g0Var.f37487i, j10);
                    long f13 = zt.c.f(g0Var.f37486e, zt.c.b(f12, 60));
                    f10 = zt.c.f(g0Var.f37485d, zt.c.b(f13, 60));
                    int d10 = zt.c.d(f13, 60);
                    i11 = zt.c.d(f12, 60);
                    i10 = d10;
                    break;
                case 4:
                    return g(cls, net.time4j.g.f37471q, g0Var, zt.c.i(j10, 1000000L));
                case 5:
                    return g(cls, net.time4j.g.f37471q, g0Var, zt.c.i(j10, 1000L));
                case 6:
                    long f14 = zt.c.f(g0Var.f37488o, j10);
                    long f15 = zt.c.f(g0Var.f37487i, zt.c.b(f14, 1000000000));
                    long f16 = zt.c.f(g0Var.f37486e, zt.c.b(f15, 60));
                    f10 = zt.c.f(g0Var.f37485d, zt.c.b(f16, 60));
                    int d11 = zt.c.d(f16, 60);
                    int d12 = zt.c.d(f15, 60);
                    int d13 = zt.c.d(f14, 1000000000);
                    i10 = d11;
                    i11 = d12;
                    i12 = d13;
                    break;
                default:
                    throw new UnsupportedOperationException(gVar.name());
            }
            int d14 = zt.c.d(f10, 24);
            if ((d14 | i10 | i11 | i12) == 0) {
                if (j10 > 0 && cls == g0.class) {
                    J0 = g0.f37483y;
                } else {
                    J0 = g0.f37482x;
                }
            } else {
                J0 = g0.J0(d14, i10, i11, i12);
            }
            if (cls == g0.class) {
                return cls.cast(J0);
            }
            return cls.cast(new j(zt.c.b(f10, 24), J0));
        }

        @Override // bu.m0
        /* renamed from: d */
        public g0 b(g0 g0Var, long j10) {
            if (j10 == 0) {
                return g0Var;
            }
            return (g0) g(g0.class, this.f37492a, g0Var, j10);
        }

        @Override // bu.m0
        /* renamed from: f */
        public long a(g0 g0Var, g0 g0Var2) {
            long j10;
            long v02 = g0Var2.v0() - g0Var.v0();
            switch (a.f37489a[this.f37492a.ordinal()]) {
                case 1:
                    j10 = 3600000000000L;
                    break;
                case 2:
                    j10 = 60000000000L;
                    break;
                case 3:
                    j10 = 1000000000;
                    break;
                case 4:
                    j10 = 1000000;
                    break;
                case 5:
                    j10 = 1000;
                    break;
                case 6:
                    j10 = 1;
                    break;
                default:
                    throw new UnsupportedOperationException(this.f37492a.name());
            }
            return v02 / j10;
        }

        private c(net.time4j.g gVar) {
            this.f37492a = gVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        private final bu.p f37493d;

        /* renamed from: e  reason: collision with root package name */
        private final int f37494e;

        /* renamed from: i  reason: collision with root package name */
        private final int f37495i;

        /* renamed from: o  reason: collision with root package name */
        private final int f37496o;

        d(bu.p pVar, int i10, int i11) {
            this.f37493d = pVar;
            if (pVar instanceof t) {
                this.f37494e = ((t) pVar).K();
            } else {
                this.f37494e = -1;
            }
            this.f37495i = i10;
            this.f37496o = i11;
        }

        private bu.p b(g0 g0Var) {
            switch (this.f37494e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return g0.H;
                case 6:
                case 7:
                    return g0.J;
                case 8:
                case 9:
                    return g0.N;
                default:
                    return null;
            }
        }

        private static boolean i(g0 g0Var) {
            if (g0Var.f37485d >= 12 && g0Var.f37485d != 24) {
                return false;
            }
            return true;
        }

        private g0 l(g0 g0Var, int i10) {
            bu.p pVar = this.f37493d;
            if (pVar != g0.G && pVar != g0.F && pVar != g0.E) {
                if (pVar == g0.H) {
                    return (g0) g0Var.K(zt.c.l(i10, g0Var.f37486e), net.time4j.g.f37467e);
                }
                if (pVar == g0.J) {
                    return (g0) g0Var.K(zt.c.l(i10, g0Var.f37487i), net.time4j.g.f37468i);
                }
                l0 l0Var = g0.L;
                if (pVar == l0Var) {
                    return (g0) g0Var.K(zt.c.l(i10, ((Integer) g0Var.k(l0Var)).intValue()), net.time4j.g.f37469o);
                }
                l0 l0Var2 = g0.M;
                if (pVar == l0Var2) {
                    return (g0) g0Var.K(zt.c.l(i10, ((Integer) g0Var.k(l0Var2)).intValue()), net.time4j.g.f37470p);
                }
                if (pVar == g0.N) {
                    return (g0) g0Var.K(zt.c.l(i10, g0Var.f37488o), net.time4j.g.f37471q);
                }
                if (pVar == g0.O) {
                    int c10 = zt.c.c(i10, 86400000);
                    int i11 = g0Var.f37488o % 1000000;
                    if (c10 != 0 || i11 != 0) {
                        return g0.p0(c10, i11);
                    }
                    if (i10 > 0) {
                        return g0.f37483y;
                    }
                    return g0.f37482x;
                } else if (pVar == g0.I) {
                    int c11 = zt.c.c(i10, 1440);
                    if (c11 == 0 && g0Var.A0()) {
                        if (i10 > 0) {
                            return g0.f37483y;
                        }
                        return g0.f37482x;
                    }
                    return x(g0Var, Integer.valueOf(c11), false);
                } else if (pVar == g0.K) {
                    int c12 = zt.c.c(i10, 86400);
                    if (c12 == 0 && g0Var.f37488o == 0) {
                        if (i10 > 0) {
                            return g0.f37483y;
                        }
                        return g0.f37482x;
                    }
                    return x(g0Var, Integer.valueOf(c12), false);
                } else {
                    throw new UnsupportedOperationException(this.f37493d.name());
                }
            }
            return (g0) g0Var.K(zt.c.l(i10, ((Integer) g0Var.k(pVar)).intValue()), net.time4j.g.f37466d);
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p a(g0 g0Var) {
            return b(g0Var);
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p h(g0 g0Var) {
            return b(g0Var);
        }

        @Override // bu.z
        /* renamed from: e */
        public Integer m(g0 g0Var) {
            if (g0Var.f37485d == 24) {
                switch (this.f37494e) {
                    case 6:
                    case 8:
                    case 10:
                    case 11:
                    case 12:
                        return 0;
                }
            }
            if (g0Var.w0(this.f37493d)) {
                return Integer.valueOf(this.f37496o - 1);
            }
            return Integer.valueOf(this.f37496o);
        }

        @Override // bu.z
        /* renamed from: f */
        public Integer q(g0 g0Var) {
            return Integer.valueOf(this.f37495i);
        }

        @Override // bu.z
        /* renamed from: g */
        public Integer y(g0 g0Var) {
            int i10;
            byte b10;
            int i11 = 12;
            switch (this.f37494e) {
                case 1:
                    int i12 = g0Var.f37485d % 12;
                    if (i12 != 0) {
                        i11 = i12;
                        break;
                    }
                    break;
                case 2:
                    i11 = g0Var.f37485d % 24;
                    if (i11 == 0) {
                        i11 = 24;
                        break;
                    }
                    break;
                case 3:
                    i11 = g0Var.f37485d % 12;
                    break;
                case 4:
                    i11 = g0Var.f37485d % 24;
                    break;
                case 5:
                    i11 = g0Var.f37485d;
                    break;
                case 6:
                    i11 = g0Var.f37486e;
                    break;
                case 7:
                    i10 = g0Var.f37485d * 60;
                    b10 = g0Var.f37486e;
                    i11 = i10 + b10;
                    break;
                case 8:
                    i11 = g0Var.f37487i;
                    break;
                case 9:
                    i10 = (g0Var.f37485d * 3600) + (g0Var.f37486e * 60);
                    b10 = g0Var.f37487i;
                    i11 = i10 + b10;
                    break;
                case 10:
                    i11 = g0Var.f37488o / 1000000;
                    break;
                case 11:
                    i11 = g0Var.f37488o / 1000;
                    break;
                case 12:
                    i11 = g0Var.f37488o;
                    break;
                case 13:
                    i11 = (int) (g0Var.v0() / 1000000);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f37493d.name());
            }
            return Integer.valueOf(i11);
        }

        @Override // bu.z
        /* renamed from: j */
        public boolean o(g0 g0Var, Integer num) {
            int intValue;
            int i10;
            if (num == null || (intValue = num.intValue()) < this.f37495i || intValue > (i10 = this.f37496o)) {
                return false;
            }
            if (intValue == i10) {
                int i11 = this.f37494e;
                if (i11 == 5) {
                    return g0Var.z0();
                }
                if (i11 == 7) {
                    return g0Var.A0();
                }
                if (i11 != 9) {
                    if (i11 == 13) {
                        if (g0Var.f37488o % 1000000 != 0) {
                            return false;
                        }
                        return true;
                    }
                } else if (g0Var.f37488o != 0) {
                    return false;
                } else {
                    return true;
                }
            }
            if (g0Var.f37485d == 24) {
                switch (this.f37494e) {
                    case 6:
                    case 8:
                    case 10:
                    case 11:
                    case 12:
                        if (intValue != 0) {
                            return false;
                        }
                        return true;
                }
            }
            return true;
        }

        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0072, code lost:
            if (i(r7) != false) goto L24;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0075, code lost:
            r8 = r8 + 12;
         */
        /* JADX WARN: Code restructure failed: missing block: B:34:0x0087, code lost:
            if (i(r7) != false) goto L24;
         */
        @Override // bu.z
        /* renamed from: k */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public net.time4j.g0 x(net.time4j.g0 r7, java.lang.Integer r8, boolean r9) {
            /*
                r6 = this;
                if (r8 == 0) goto La6
                if (r9 == 0) goto Ld
                int r8 = r8.intValue()
                net.time4j.g0 r7 = r6.l(r7, r8)
                return r7
            Ld:
                boolean r9 = r6.o(r7, r8)
                if (r9 == 0) goto L8f
                byte r9 = net.time4j.g0.e0(r7)
                byte r0 = net.time4j.g0.f0(r7)
                byte r1 = net.time4j.g0.g0(r7)
                int r2 = net.time4j.g0.M(r7)
                int r8 = r8.intValue()
                int r3 = r6.f37494e
                r4 = 0
                r5 = 1000000(0xf4240, float:1.401298E-39)
                switch(r3) {
                    case 1: goto L7e;
                    case 2: goto L78;
                    case 3: goto L6e;
                    case 4: goto L6c;
                    case 5: goto L6c;
                    case 6: goto L6a;
                    case 7: goto L65;
                    case 8: goto L63;
                    case 9: goto L5a;
                    case 10: goto L53;
                    case 11: goto L48;
                    case 12: goto L46;
                    case 13: goto L3c;
                    default: goto L30;
                }
            L30:
                java.lang.UnsupportedOperationException r7 = new java.lang.UnsupportedOperationException
                bu.p r8 = r6.f37493d
                java.lang.String r8 = r8.name()
                r7.<init>(r8)
                throw r7
            L3c:
                int r7 = net.time4j.g0.M(r7)
                int r7 = r7 % r5
                net.time4j.g0 r7 = net.time4j.g0.N(r8, r7)
                return r7
            L46:
                r2 = r8
                goto L8a
            L48:
                int r8 = r8 * 1000
                int r7 = net.time4j.g0.M(r7)
                int r7 = r7 % 1000
            L50:
                int r2 = r8 + r7
                goto L8a
            L53:
                int r8 = r8 * r5
                int r7 = net.time4j.g0.M(r7)
                int r7 = r7 % r5
                goto L50
            L5a:
                int r9 = r8 / 3600
                int r8 = r8 % 3600
                int r0 = r8 / 60
                int r1 = r8 % 60
                goto L8a
            L63:
                r1 = r8
                goto L8a
            L65:
                int r9 = r8 / 60
                int r0 = r8 % 60
                goto L8a
            L6a:
                r0 = r8
                goto L8a
            L6c:
                r9 = r8
                goto L8a
            L6e:
                boolean r7 = i(r7)
                if (r7 == 0) goto L75
                goto L6c
            L75:
                int r8 = r8 + 12
                goto L6c
            L78:
                r7 = 24
                if (r8 != r7) goto L6c
                r9 = r4
                goto L8a
            L7e:
                r9 = 12
                if (r8 != r9) goto L83
                r8 = r4
            L83:
                boolean r7 = i(r7)
                if (r7 == 0) goto L75
                goto L6c
            L8a:
                net.time4j.g0 r7 = net.time4j.g0.J0(r9, r0, r1, r2)
                return r7
            L8f:
                java.lang.IllegalArgumentException r7 = new java.lang.IllegalArgumentException
                java.lang.StringBuilder r9 = new java.lang.StringBuilder
                r9.<init>()
                java.lang.String r0 = "Value out of range: "
                r9.append(r0)
                r9.append(r8)
                java.lang.String r8 = r9.toString()
                r7.<init>(r8)
                throw r7
            La6:
                java.lang.IllegalArgumentException r7 = new java.lang.IllegalArgumentException
                java.lang.String r8 = "Missing element value."
                r7.<init>(r8)
                throw r7
            */
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.g0.d.x(net.time4j.g0, java.lang.Integer, boolean):net.time4j.g0");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        private final bu.p f37497d;

        /* renamed from: e  reason: collision with root package name */
        private final long f37498e;

        /* renamed from: i  reason: collision with root package name */
        private final long f37499i;

        e(bu.p pVar, long j10, long j11) {
            this.f37497d = pVar;
            this.f37498e = j10;
            this.f37499i = j11;
        }

        private g0 j(g0 g0Var, long j10) {
            if (this.f37497d == g0.P) {
                long t02 = g0.t0(j10, 86400000000L);
                int i10 = g0Var.f37488o % 1000;
                if (t02 != 0 || i10 != 0 || j10 <= 0) {
                    return g0.o0(t02, i10);
                }
                return g0.f37483y;
            }
            long t03 = g0.t0(j10, 86400000000000L);
            if (t03 != 0 || j10 <= 0) {
                return g0.q0(t03);
            }
            return g0.f37483y;
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public Long m(g0 g0Var) {
            if (this.f37497d == g0.P && g0Var.f37488o % 1000 != 0) {
                return Long.valueOf(this.f37499i - 1);
            }
            return Long.valueOf(this.f37499i);
        }

        @Override // bu.z
        /* renamed from: e */
        public Long q(g0 g0Var) {
            return Long.valueOf(this.f37498e);
        }

        @Override // bu.z
        /* renamed from: f */
        public Long y(g0 g0Var) {
            long v02;
            if (this.f37497d != g0.P) {
                v02 = g0Var.v0();
            } else {
                v02 = g0Var.v0() / 1000;
            }
            return Long.valueOf(v02);
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(g0 g0Var, Long l10) {
            if (l10 == null) {
                return false;
            }
            if (this.f37497d == g0.P && l10.longValue() == this.f37499i) {
                if (g0Var.f37488o % 1000 != 0) {
                    return false;
                }
                return true;
            } else if (this.f37498e > l10.longValue() || l10.longValue() > this.f37499i) {
                return false;
            } else {
                return true;
            }
        }

        @Override // bu.z
        /* renamed from: i */
        public g0 x(g0 g0Var, Long l10, boolean z10) {
            if (l10 != null) {
                if (z10) {
                    return j(g0Var, l10.longValue());
                }
                if (o(g0Var, l10)) {
                    long longValue = l10.longValue();
                    return this.f37497d == g0.P ? g0.o0(longValue, g0Var.f37488o % 1000) : g0.q0(longValue);
                }
                throw new IllegalArgumentException("Value out of range: " + l10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements bu.u {
        private f() {
        }

        private static void e(bu.q qVar, String str) {
            bu.n0 n0Var = bu.n0.ERROR_MESSAGE;
            if (qVar.B(n0Var, str)) {
                qVar.E(n0Var, str);
            }
        }

        private static int g(bu.q qVar) {
            int m10 = qVar.m(g0.F);
            if (m10 != Integer.MIN_VALUE) {
                return m10;
            }
            int m11 = qVar.m(g0.D);
            if (m11 == 0) {
                return -1;
            }
            int i10 = 0;
            if (m11 == 24) {
                return 0;
            }
            if (m11 != Integer.MIN_VALUE) {
                return m11;
            }
            d1 d1Var = g0.B;
            if (qVar.n(d1Var)) {
                z zVar = (z) qVar.k(d1Var);
                int m12 = qVar.m(g0.C);
                if (m12 != Integer.MIN_VALUE) {
                    if (m12 == 0) {
                        if (zVar == z.AM) {
                            return -1;
                        }
                        return -2;
                    }
                    if (m12 != 12) {
                        i10 = m12;
                    }
                    if (zVar == z.AM) {
                        return i10;
                    }
                    return i10 + 12;
                }
                int m13 = qVar.m(g0.E);
                if (m13 != Integer.MIN_VALUE) {
                    if (zVar == z.AM) {
                        return m13;
                    }
                    return m13 + 12;
                }
            }
            return Integer.MIN_VALUE;
        }

        private static g0 i(bu.q qVar) {
            int i10;
            int i11;
            int i12;
            l0 l0Var = g0.Q;
            if (qVar.n(l0Var)) {
                long longValue = ((Long) qVar.k(l0Var)).longValue();
                if (longValue >= 0 && longValue <= 86400000000000L) {
                    return g0.q0(longValue);
                }
                e(qVar, "NANO_OF_DAY out of range: " + longValue);
                return null;
            }
            l0 l0Var2 = g0.P;
            int i13 = 0;
            if (qVar.n(l0Var2)) {
                l0 l0Var3 = g0.N;
                if (qVar.n(l0Var3)) {
                    i13 = ((Integer) qVar.k(l0Var3)).intValue() % 1000;
                }
                return g0.o0(((Long) qVar.k(l0Var2)).longValue(), i13);
            }
            l0 l0Var4 = g0.O;
            if (qVar.n(l0Var4)) {
                l0 l0Var5 = g0.N;
                if (qVar.n(l0Var5)) {
                    int intValue = ((Integer) qVar.k(l0Var5)).intValue();
                    if (intValue >= 0 && intValue < 1000000000) {
                        i13 = intValue % 1000000;
                    } else {
                        e(qVar, "NANO_OF_SECOND out of range: " + intValue);
                        return null;
                    }
                } else {
                    l0 l0Var6 = g0.M;
                    if (qVar.n(l0Var6)) {
                        int intValue2 = ((Integer) qVar.k(l0Var6)).intValue();
                        if (intValue2 >= 0 && intValue2 < 1000000) {
                            i13 = intValue2 % 1000;
                        } else {
                            e(qVar, "MICRO_OF_SECOND out of range: " + intValue2);
                            return null;
                        }
                    }
                }
                int intValue3 = ((Integer) qVar.k(l0Var4)).intValue();
                if (intValue3 >= 0 && intValue3 <= 86400000) {
                    return g0.p0(intValue3, i13);
                }
                e(qVar, "MILLI_OF_DAY out of range: " + intValue3);
                return null;
            }
            l0 l0Var7 = g0.K;
            if (qVar.n(l0Var7)) {
                l0 l0Var8 = g0.N;
                if (qVar.n(l0Var8)) {
                    i12 = ((Integer) qVar.k(l0Var8)).intValue();
                } else {
                    l0 l0Var9 = g0.M;
                    if (qVar.n(l0Var9)) {
                        i12 = ((Integer) qVar.k(l0Var9)).intValue() * 1000;
                    } else {
                        l0 l0Var10 = g0.L;
                        if (qVar.n(l0Var10)) {
                            i12 = ((Integer) qVar.k(l0Var10)).intValue() * 1000000;
                        } else {
                            i12 = 0;
                        }
                    }
                }
                return (g0) g0.J0(0, 0, 0, i12).E(l0Var7, qVar.k(l0Var7));
            }
            l0 l0Var11 = g0.I;
            if (!qVar.n(l0Var11)) {
                return null;
            }
            l0 l0Var12 = g0.N;
            if (qVar.n(l0Var12)) {
                i10 = ((Integer) qVar.k(l0Var12)).intValue();
            } else {
                l0 l0Var13 = g0.M;
                if (qVar.n(l0Var13)) {
                    i10 = ((Integer) qVar.k(l0Var13)).intValue() * 1000;
                } else {
                    l0 l0Var14 = g0.L;
                    if (qVar.n(l0Var14)) {
                        i10 = ((Integer) qVar.k(l0Var14)).intValue() * 1000000;
                    } else {
                        i10 = 0;
                    }
                }
            }
            l0 l0Var15 = g0.J;
            if (qVar.n(l0Var15)) {
                i11 = ((Integer) qVar.k(l0Var15)).intValue();
            } else {
                i11 = 0;
            }
            return (g0) g0.J0(0, 0, i11, i10).E(l0Var11, qVar.k(l0Var11));
        }

        @Override // bu.u
        public bu.f0 a() {
            return bu.f0.f7804a;
        }

        @Override // bu.u
        public bu.x b() {
            return null;
        }

        @Override // bu.u
        public int c() {
            return f0.r0().c();
        }

        @Override // bu.u
        /* renamed from: d */
        public g0 h(bu.q qVar, bu.d dVar, boolean z10, boolean z11) {
            if (qVar instanceof zt.f) {
                return ((i0) i0.S().h(qVar, dVar, z10, z11)).X();
            }
            bu.p pVar = g0.f37484z;
            if (qVar.n(pVar)) {
                return (g0) qVar.k(pVar);
            }
            d1 d1Var = g0.R;
            if (qVar.n(d1Var)) {
                return g0.L0((BigDecimal) qVar.k(d1Var));
            }
            int m10 = qVar.m(g0.G);
            if (m10 == Integer.MIN_VALUE) {
                m10 = g(qVar);
                if (m10 == Integer.MIN_VALUE) {
                    return i(qVar);
                }
                if (m10 != -1 && m10 != -2) {
                    if (m10 == 24 && !z10) {
                        e(qVar, "Time 24:00 not allowed, use lax mode or element HOUR_FROM_0_TO_24 instead.");
                        return null;
                    }
                } else if (z10) {
                    m10 = m10 == -1 ? 0 : 12;
                } else {
                    e(qVar, "Clock hour cannot be zero.");
                    return null;
                }
            }
            d1 d1Var2 = g0.S;
            if (qVar.n(d1Var2)) {
                return (g0) g0.X.x(g0.G0(m10), qVar.k(d1Var2), false);
            }
            int m11 = qVar.m(g0.H);
            if (m11 == Integer.MIN_VALUE) {
                m11 = 0;
            }
            d1 d1Var3 = g0.T;
            if (qVar.n(d1Var3)) {
                return (g0) g0.Y.x(g0.H0(m10, m11), qVar.k(d1Var3), false);
            }
            int m12 = qVar.m(g0.J);
            if (m12 == Integer.MIN_VALUE) {
                m12 = 0;
            }
            int m13 = qVar.m(g0.N);
            if (m13 == Integer.MIN_VALUE) {
                int m14 = qVar.m(g0.M);
                if (m14 == Integer.MIN_VALUE) {
                    int m15 = qVar.m(g0.L);
                    if (m15 == Integer.MIN_VALUE) {
                        m13 = 0;
                    } else {
                        m13 = zt.c.h(m15, 1000000);
                    }
                } else {
                    m13 = zt.c.h(m14, 1000);
                }
            }
            if (z10) {
                long f10 = zt.c.f(zt.c.i(zt.c.f(zt.c.f(zt.c.i(m10, 3600L), zt.c.i(m11, 60L)), m12), 1000000000L), m13);
                long t02 = g0.t0(f10, 86400000000000L);
                long s02 = g0.s0(f10, 86400000000000L);
                int i10 = (s02 > 0L ? 1 : (s02 == 0L ? 0 : -1));
                if (i10 != 0) {
                    bu.p pVar2 = x.f37792r;
                    if (qVar.A(pVar2, s02)) {
                        qVar.D(pVar2, s02);
                    }
                }
                if (t02 != 0 || i10 <= 0) {
                    return g0.q0(t02);
                }
                return g0.f37483y;
            } else if ((m10 >= 0 && m11 >= 0 && m12 >= 0 && m13 >= 0 && m10 == 24 && (m11 | m12 | m13) == 0) || (m10 < 24 && m11 <= 59 && m12 <= 59 && m13 <= 1000000000)) {
                return g0.K0(m10, m11, m12, m13, false);
            } else {
                e(qVar, "Time component out of range.");
                return null;
            }
        }

        @Override // bu.u
        public String j(bu.y yVar, Locale locale) {
            return cu.b.t(cu.e.d(yVar.a()), locale);
        }

        /* synthetic */ f(a aVar) {
            this();
        }

        @Override // bu.u
        /* renamed from: f */
        public bu.o m(g0 g0Var, bu.d dVar) {
            return g0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g implements bu.z {
        private g() {
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(g0 g0Var) {
            return g0.E;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(g0 g0Var) {
            return g0.E;
        }

        @Override // bu.z
        /* renamed from: d */
        public z m(g0 g0Var) {
            return z.PM;
        }

        @Override // bu.z
        /* renamed from: e */
        public z q(g0 g0Var) {
            return z.AM;
        }

        @Override // bu.z
        /* renamed from: f */
        public z y(g0 g0Var) {
            return z.e(g0Var.f37485d);
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(g0 g0Var, z zVar) {
            return zVar != null;
        }

        @Override // bu.z
        /* renamed from: i */
        public g0 x(g0 g0Var, z zVar, boolean z10) {
            int i10;
            if (g0Var.f37485d != 24) {
                i10 = g0Var.f37485d;
            } else {
                i10 = 0;
            }
            if (zVar != null) {
                if (zVar == z.AM) {
                    if (i10 >= 12) {
                        i10 -= 12;
                    }
                } else if (zVar == z.PM && i10 < 12) {
                    i10 += 12;
                }
                return g0.J0(i10, g0Var.f37486e, g0Var.f37487i, g0Var.f37488o);
            }
            throw new IllegalArgumentException("Missing am/pm-value.");
        }

        /* synthetic */ g(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class h implements bu.z {
        private h() {
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public net.time4j.g m(g0 g0Var) {
            return net.time4j.g.f37471q;
        }

        @Override // bu.z
        /* renamed from: e */
        public net.time4j.g q(g0 g0Var) {
            return net.time4j.g.f37466d;
        }

        @Override // bu.z
        /* renamed from: f */
        public net.time4j.g y(g0 g0Var) {
            if (g0Var.f37488o != 0) {
                if (g0Var.f37488o % 1000000 == 0) {
                    return net.time4j.g.f37469o;
                }
                if (g0Var.f37488o % 1000 == 0) {
                    return net.time4j.g.f37470p;
                }
                return net.time4j.g.f37471q;
            } else if (g0Var.f37487i != 0) {
                return net.time4j.g.f37468i;
            } else {
                if (g0Var.f37486e != 0) {
                    return net.time4j.g.f37467e;
                }
                return net.time4j.g.f37466d;
            }
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(g0 g0Var, net.time4j.g gVar) {
            return gVar != null;
        }

        @Override // bu.z
        /* renamed from: i */
        public g0 x(g0 g0Var, net.time4j.g gVar, boolean z10) {
            if (gVar != null) {
                if (gVar.ordinal() < y(g0Var).ordinal()) {
                    switch (a.f37489a[gVar.ordinal()]) {
                        case 1:
                            return g0.G0(g0Var.f37485d);
                        case 2:
                            return g0.H0(g0Var.f37485d, g0Var.f37486e);
                        case 3:
                            return g0.I0(g0Var.f37485d, g0Var.f37486e, g0Var.f37487i);
                        case 4:
                            return g0.J0(g0Var.f37485d, g0Var.f37486e, g0Var.f37487i, (g0Var.f37488o / 1000000) * 1000000);
                        case 5:
                            return g0.J0(g0Var.f37485d, g0Var.f37486e, g0Var.f37487i, (g0Var.f37488o / 1000) * 1000);
                        case 6:
                            break;
                        default:
                            throw new UnsupportedOperationException(gVar.name());
                    }
                }
                return g0Var;
            }
            throw new IllegalArgumentException("Missing precision value.");
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class i implements bu.z {
        private i() {
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(g0 g0Var) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public g0 m(g0 g0Var) {
            return g0.f37483y;
        }

        @Override // bu.z
        /* renamed from: e */
        public g0 q(g0 g0Var) {
            return g0.f37482x;
        }

        @Override // bu.z
        /* renamed from: f */
        public g0 y(g0 g0Var) {
            return g0Var;
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(g0 g0Var, g0 g0Var2) {
            return g0Var2 != null;
        }

        @Override // bu.z
        /* renamed from: i */
        public g0 x(g0 g0Var, g0 g0Var2, boolean z10) {
            if (g0Var2 != null) {
                return g0Var2;
            }
            throw new IllegalArgumentException("Missing time value.");
        }

        /* synthetic */ i(a aVar) {
            this();
        }
    }

    static {
        char c10;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        f37474p = c10;
        f37475q = new BigDecimal(60);
        f37476r = new BigDecimal(3600);
        f37477s = new BigDecimal(1000000000);
        f37478t = new BigDecimal("24");
        f37479u = new BigDecimal("23.999999999999999");
        f37480v = new BigDecimal("59.999999999999999");
        f37481w = new g0[25];
        for (int i10 = 0; i10 <= 24; i10++) {
            f37481w[i10] = new g0(i10, 0, 0, 0, false);
        }
        g0[] g0VarArr = f37481w;
        g0 g0Var = g0VarArr[0];
        f37482x = g0Var;
        g0 g0Var2 = g0VarArr[24];
        f37483y = g0Var2;
        r0 r0Var = r0.f37671d;
        f37484z = r0Var;
        A = r0Var;
        net.time4j.d dVar = net.time4j.d.AM_PM_OF_DAY;
        B = dVar;
        t G2 = t.G("CLOCK_HOUR_OF_AMPM", false);
        C = G2;
        t G3 = t.G("CLOCK_HOUR_OF_DAY", true);
        D = G3;
        t H2 = t.H("DIGITAL_HOUR_OF_AMPM", 3, 0, 11, 'K');
        E = H2;
        t H3 = t.H("DIGITAL_HOUR_OF_DAY", 4, 0, 23, 'H');
        F = H3;
        t H4 = t.H("HOUR_FROM_0_TO_24", 5, 0, 23, 'H');
        G = H4;
        t H5 = t.H("MINUTE_OF_HOUR", 6, 0, 59, 'm');
        H = H5;
        t H6 = t.H("MINUTE_OF_DAY", 7, 0, 1439, (char) 0);
        I = H6;
        t H7 = t.H("SECOND_OF_MINUTE", 8, 0, 59, 's');
        J = H7;
        t H8 = t.H("SECOND_OF_DAY", 9, 0, 86399, (char) 0);
        K = H8;
        t H9 = t.H("MILLI_OF_SECOND", 10, 0, 999, (char) 0);
        L = H9;
        t H10 = t.H("MICRO_OF_SECOND", 11, 0, 999999, (char) 0);
        M = H10;
        t H11 = t.H("NANO_OF_SECOND", 12, 0, 999999999, 'S');
        N = H11;
        t H12 = t.H("MILLI_OF_DAY", 13, 0, 86399999, 'A');
        O = H12;
        x G4 = x.G("MICRO_OF_DAY", 0L, 86399999999L);
        P = G4;
        x G5 = x.G("NANO_OF_DAY", 0L, 86399999999999L);
        Q = G5;
        l lVar = new l("DECIMAL_HOUR", f37479u);
        R = lVar;
        BigDecimal bigDecimal = f37480v;
        l lVar2 = new l("DECIMAL_MINUTE", bigDecimal);
        S = lVar2;
        l lVar3 = new l("DECIMAL_SECOND", bigDecimal);
        T = lVar3;
        bu.p pVar = j0.f37592o;
        U = pVar;
        HashMap hashMap = new HashMap();
        r0(hashMap, r0Var);
        r0(hashMap, dVar);
        r0(hashMap, G2);
        r0(hashMap, G3);
        r0(hashMap, H2);
        r0(hashMap, H3);
        r0(hashMap, H4);
        r0(hashMap, H5);
        r0(hashMap, H6);
        r0(hashMap, H7);
        r0(hashMap, H8);
        r0(hashMap, H9);
        r0(hashMap, H10);
        r0(hashMap, H11);
        r0(hashMap, H12);
        r0(hashMap, G4);
        r0(hashMap, G5);
        r0(hashMap, lVar);
        r0(hashMap, lVar2);
        r0(hashMap, lVar3);
        V = Collections.unmodifiableMap(hashMap);
        b bVar = new b(lVar, f37478t);
        W = bVar;
        b bVar2 = new b(lVar2, bigDecimal);
        X = bVar2;
        b bVar3 = new b(lVar3, bigDecimal);
        Y = bVar3;
        h0.b d10 = h0.b.k(v.class, g0.class, new f(null), g0Var, g0Var2).d(r0Var, new i(null)).d(dVar, new g(null));
        d dVar2 = new d(G2, 1, 12);
        net.time4j.g gVar = net.time4j.g.f37466d;
        h0.b e10 = d10.e(G2, dVar2, gVar).e(G3, new d(G3, 1, 24), gVar).e(H2, new d(H2, 0, 11), gVar).e(H3, new d(H3, 0, 23), gVar).e(H4, new d(H4, 0, 24), gVar);
        d dVar3 = new d(H5, 0, 59);
        net.time4j.g gVar2 = net.time4j.g.f37467e;
        h0.b e11 = e10.e(H5, dVar3, gVar2).e(H6, new d(H6, 0, 1440), gVar2);
        d dVar4 = new d(H7, 0, 59);
        net.time4j.g gVar3 = net.time4j.g.f37468i;
        h0.b e12 = e11.e(H7, dVar4, gVar3).e(H8, new d(H8, 0, 86400), gVar3);
        d dVar5 = new d(H9, 0, 999);
        net.time4j.g gVar4 = net.time4j.g.f37469o;
        h0.b e13 = e12.e(H9, dVar5, gVar4);
        d dVar6 = new d(H10, 0, 999999);
        net.time4j.g gVar5 = net.time4j.g.f37470p;
        h0.b e14 = e13.e(H10, dVar6, gVar5);
        d dVar7 = new d(H11, 0, 999999999);
        net.time4j.g gVar6 = net.time4j.g.f37471q;
        h0.b d11 = e14.e(H11, dVar7, gVar6).e(H12, new d(H12, 0, 86400000), gVar4).e(G4, new e(G4, 0L, 86400000000L), gVar5).e(G5, new e(G5, 0L, 86400000000000L), gVar6).d(lVar, bVar).d(lVar2, bVar2).d(lVar3, bVar3).d(pVar, new h(null));
        N0(d11);
        O0(d11);
        Z = d11.h();
    }

    private g0(int i10, int i11, int i12, int i13, boolean z10) {
        if (z10) {
            j0(i10);
            k0(i11);
            m0(i12);
            l0(i13);
            if (i10 == 24 && (i11 | i12 | i13) != 0) {
                throw new IllegalArgumentException("T24:00:00 exceeded.");
            }
        }
        this.f37485d = (byte) i10;
        this.f37486e = (byte) i11;
        this.f37487i = (byte) i12;
        this.f37488o = i13;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean A0() {
        if ((this.f37487i | this.f37488o) == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object D0(String str) {
        return V.get(str);
    }

    public static g0 E0() {
        return f37483y;
    }

    public static g0 F0() {
        return f37482x;
    }

    public static g0 G0(int i10) {
        j0(i10);
        return f37481w[i10];
    }

    public static g0 H0(int i10, int i11) {
        if (i11 == 0) {
            return G0(i10);
        }
        return new g0(i10, i11, 0, 0, true);
    }

    public static g0 I0(int i10, int i11, int i12) {
        if ((i11 | i12) == 0) {
            return G0(i10);
        }
        return new g0(i10, i11, i12, 0, true);
    }

    public static g0 J0(int i10, int i11, int i12, int i13) {
        return K0(i10, i11, i12, i13, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static g0 K0(int i10, int i11, int i12, int i13, boolean z10) {
        if ((i11 | i12 | i13) == 0) {
            if (z10) {
                return G0(i10);
            }
            return f37481w[i10];
        }
        return new g0(i10, i11, i12, i13, z10);
    }

    public static g0 L0(BigDecimal bigDecimal) {
        return (g0) W.x(null, bigDecimal, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void M0(StringBuilder sb2, int i10) {
        int i11;
        sb2.append(f37474p);
        String num = Integer.toString(i10);
        if (i10 % 1000000 == 0) {
            i11 = 3;
        } else if (i10 % 1000 == 0) {
            i11 = 6;
        } else {
            i11 = 9;
        }
        for (int length = num.length(); length < 9; length++) {
            sb2.append('0');
        }
        int length2 = (i11 + num.length()) - 9;
        for (int i12 = 0; i12 < length2; i12++) {
            sb2.append(num.charAt(i12));
        }
    }

    private static void N0(h0.b bVar) {
        for (bu.s sVar : zt.d.c().g(bu.s.class)) {
            if (sVar.d(g0.class)) {
                bVar.f(sVar);
            }
        }
        bVar.f(new k.c());
    }

    private static void O0(h0.b bVar) {
        net.time4j.g[] values;
        Set allOf = EnumSet.allOf(net.time4j.g.class);
        for (net.time4j.g gVar : net.time4j.g.values()) {
            bVar.g(gVar, new c(gVar, null), gVar.getLength(), allOf);
        }
    }

    private static void h0(int i10, StringBuilder sb2) {
        if (i10 < 10) {
            sb2.append('0');
        }
        sb2.append(i10);
    }

    public static bu.h0 i0() {
        return Z;
    }

    private static void j0(long j10) {
        if (j10 >= 0 && j10 <= 24) {
            return;
        }
        throw new IllegalArgumentException("HOUR_OF_DAY out of range: " + j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void k0(long j10) {
        if (j10 >= 0 && j10 <= 59) {
            return;
        }
        throw new IllegalArgumentException("MINUTE_OF_HOUR out of range: " + j10);
    }

    private static void l0(int i10) {
        if (i10 >= 0 && i10 < 1000000000) {
            return;
        }
        throw new IllegalArgumentException("NANO_OF_SECOND out of range: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void m0(long j10) {
        if (j10 >= 0 && j10 <= 59) {
            return;
        }
        throw new IllegalArgumentException("SECOND_OF_MINUTE out of range: " + j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static g0 o0(long j10, int i10) {
        int i11 = (((int) (j10 % 1000000)) * 1000) + i10;
        int i12 = (int) (j10 / 1000000);
        int i13 = i12 % 60;
        int i14 = i12 / 60;
        return J0(i14 / 60, i14 % 60, i13, i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static g0 p0(int i10, int i11) {
        int i12 = ((i10 % 1000) * 1000000) + i11;
        int i13 = i10 / 1000;
        int i14 = i13 % 60;
        int i15 = i13 / 60;
        return J0(i15 / 60, i15 % 60, i14, i12);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static g0 q0(long j10) {
        int i10 = (int) (j10 / 1000000000);
        int i11 = i10 % 60;
        int i12 = i10 / 60;
        int i13 = i12 % 60;
        return J0(i12 / 60, i13, i11, (int) (j10 % 1000000000));
    }

    private static void r0(Map map, bu.p pVar) {
        map.put(pVar.name(), pVar);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long s0(long j10, long j11) {
        if (j10 >= 0) {
            return j10 / j11;
        }
        return ((j10 + 1) / j11) - 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long t0(long j10, long j11) {
        long j12;
        if (j10 >= 0) {
            j12 = j10 / j11;
        } else {
            j12 = ((j10 + 1) / j11) - 1;
        }
        return j10 - (j11 * j12);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long v0() {
        return this.f37488o + (this.f37487i * 1000000000) + (this.f37486e * 60000000000L) + (this.f37485d * 3600000000000L);
    }

    private Object writeReplace() {
        return new SPX(this, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean z0() {
        if ((this.f37486e | this.f37487i | this.f37488o) == 0) {
            return true;
        }
        return false;
    }

    public boolean B0() {
        if (z0() && this.f37485d % 24 == 0) {
            return true;
        }
        return false;
    }

    public boolean C0(g0 g0Var) {
        if (compareTo(g0Var) == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.q
    /* renamed from: H */
    public bu.h0 w() {
        return Z;
    }

    public j P0(long j10, net.time4j.g gVar) {
        return c.e(this, j10, gVar);
    }

    @Override // zt.g
    public int a() {
        return this.f37488o;
    }

    @Override // zt.g
    public int d() {
        return this.f37487i;
    }

    @Override // zt.g
    public int e() {
        return this.f37486e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g0) {
            g0 g0Var = (g0) obj;
            if (this.f37485d == g0Var.f37485d && this.f37486e == g0Var.f37486e && this.f37487i == g0Var.f37487i && this.f37488o == g0Var.f37488o) {
                return true;
            }
        }
        return false;
    }

    @Override // zt.g
    public int h() {
        return this.f37485d;
    }

    public int hashCode() {
        return this.f37485d + (this.f37486e * 60) + (this.f37487i * 3600) + (this.f37488o * 37);
    }

    @Override // java.lang.Comparable
    /* renamed from: n0 */
    public int compareTo(g0 g0Var) {
        int i10 = this.f37485d - g0Var.f37485d;
        if (i10 == 0 && (i10 = this.f37486e - g0Var.f37486e) == 0 && (i10 = this.f37487i - g0Var.f37487i) == 0) {
            i10 = this.f37488o - g0Var.f37488o;
        }
        if (i10 < 0) {
            return -1;
        }
        if (i10 == 0) {
            return 0;
        }
        return 1;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(19);
        sb2.append('T');
        h0(this.f37485d, sb2);
        if ((this.f37486e | this.f37487i | this.f37488o) != 0) {
            sb2.append(':');
            h0(this.f37486e, sb2);
            if ((this.f37487i | this.f37488o) != 0) {
                sb2.append(':');
                h0(this.f37487i, sb2);
                int i10 = this.f37488o;
                if (i10 != 0) {
                    M0(sb2, i10);
                }
            }
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.q
    /* renamed from: u0 */
    public g0 x() {
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean w0(bu.p pVar) {
        if (pVar != O || this.f37488o % 1000000 == 0) {
            if (pVar != G || z0()) {
                if (pVar != I || A0()) {
                    if (pVar != K || this.f37488o == 0) {
                        if (pVar == P && this.f37488o % 1000 != 0) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    public boolean x0(g0 g0Var) {
        if (compareTo(g0Var) > 0) {
            return true;
        }
        return false;
    }

    public boolean y0(g0 g0Var) {
        if (compareTo(g0Var) < 0) {
            return true;
        }
        return false;
    }
}
