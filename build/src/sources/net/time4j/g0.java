package net.time4j;

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
import jt.h0;
import net.time4j.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 extends jt.k0 implements gt.g, kt.h {
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
    public static final jt.p U;
    private static final Map V;
    private static final jt.z W;
    private static final jt.z X;
    private static final jt.z Y;
    private static final jt.h0 Z;

    /* renamed from: p  reason: collision with root package name */
    static final char f40596p;

    /* renamed from: q  reason: collision with root package name */
    private static final BigDecimal f40597q;

    /* renamed from: r  reason: collision with root package name */
    private static final BigDecimal f40598r;

    /* renamed from: s  reason: collision with root package name */
    private static final BigDecimal f40599s;
    private static final long serialVersionUID = 2780881537313863339L;

    /* renamed from: t  reason: collision with root package name */
    private static final BigDecimal f40600t;

    /* renamed from: u  reason: collision with root package name */
    private static final BigDecimal f40601u;

    /* renamed from: v  reason: collision with root package name */
    private static final BigDecimal f40602v;

    /* renamed from: w  reason: collision with root package name */
    private static final g0[] f40603w;

    /* renamed from: x  reason: collision with root package name */
    static final g0 f40604x;

    /* renamed from: y  reason: collision with root package name */
    static final g0 f40605y;

    /* renamed from: z  reason: collision with root package name */
    static final jt.p f40606z;

    /* renamed from: d  reason: collision with root package name */
    private final transient byte f40607d;

    /* renamed from: e  reason: collision with root package name */
    private final transient byte f40608e;

    /* renamed from: i  reason: collision with root package name */
    private final transient byte f40609i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40610o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40611a;

        static {
            int[] iArr = new int[net.time4j.g.values().length];
            f40611a = iArr;
            try {
                iArr[net.time4j.g.f40588d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40611a[net.time4j.g.f40589e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40611a[net.time4j.g.f40590i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40611a[net.time4j.g.f40591o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40611a[net.time4j.g.f40592p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40611a[net.time4j.g.f40593q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40612d;

        /* renamed from: e  reason: collision with root package name */
        private final BigDecimal f40613e;

        b(jt.p pVar, BigDecimal bigDecimal) {
            this.f40612d = pVar;
            this.f40613e = bigDecimal;
        }

        private static BigDecimal b(BigDecimal bigDecimal, BigDecimal bigDecimal2) {
            return bigDecimal.divide(bigDecimal2, 16, RoundingMode.FLOOR);
        }

        private static int m(BigDecimal bigDecimal) {
            return Math.min(999999999, bigDecimal.movePointRight(9).setScale(0, RoundingMode.HALF_UP).intValue());
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: e */
        public BigDecimal j(g0 g0Var) {
            jt.p pVar;
            if (g0Var.f40607d == 24 && ((pVar = this.f40612d) == g0.S || pVar == g0.T)) {
                return BigDecimal.ZERO;
            }
            return this.f40613e;
        }

        @Override // jt.z
        /* renamed from: f */
        public BigDecimal p(g0 g0Var) {
            return BigDecimal.ZERO;
        }

        @Override // jt.z
        /* renamed from: g */
        public BigDecimal x(g0 g0Var) {
            BigDecimal add;
            jt.p pVar = this.f40612d;
            if (pVar == g0.R) {
                if (g0Var.equals(g0.f40604x)) {
                    return BigDecimal.ZERO;
                }
                if (g0Var.f40607d == 24) {
                    return g0.f40600t;
                }
                add = BigDecimal.valueOf(g0Var.f40607d).add(b(BigDecimal.valueOf(g0Var.f40608e), g0.f40597q)).add(b(BigDecimal.valueOf(g0Var.f40609i), g0.f40598r)).add(b(BigDecimal.valueOf(g0Var.f40610o), g0.f40598r.multiply(g0.f40599s)));
            } else if (pVar == g0.S) {
                if (g0Var.z0()) {
                    return BigDecimal.ZERO;
                }
                add = BigDecimal.valueOf(g0Var.f40608e).add(b(BigDecimal.valueOf(g0Var.f40609i), g0.f40597q)).add(b(BigDecimal.valueOf(g0Var.f40610o), g0.f40597q.multiply(g0.f40599s)));
            } else if (pVar == g0.T) {
                if (g0Var.A0()) {
                    return BigDecimal.ZERO;
                }
                add = BigDecimal.valueOf(g0Var.f40609i).add(b(BigDecimal.valueOf(g0Var.f40610o), g0.f40599s));
            } else {
                throw new UnsupportedOperationException(this.f40612d.name());
            }
            return h0.a(add.setScale(15, RoundingMode.FLOOR));
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(g0 g0Var, BigDecimal bigDecimal) {
            jt.p pVar;
            if (bigDecimal == null) {
                return false;
            }
            if (g0Var.f40607d == 24 && ((pVar = this.f40612d) == g0.S || pVar == g0.T)) {
                if (BigDecimal.ZERO.compareTo(bigDecimal) != 0) {
                    return false;
                }
                return true;
            } else if (BigDecimal.ZERO.compareTo(bigDecimal) > 0 || this.f40613e.compareTo(bigDecimal) < 0) {
                return false;
            } else {
                return true;
            }
        }

        @Override // jt.z
        /* renamed from: n */
        public g0 w(g0 g0Var, BigDecimal bigDecimal, boolean z10) {
            int i10;
            int i11;
            long j10;
            int i12;
            int i13;
            int i14;
            int i15;
            if (bigDecimal != null) {
                jt.p pVar = this.f40612d;
                if (pVar == g0.R) {
                    RoundingMode roundingMode = RoundingMode.FLOOR;
                    BigDecimal scale = bigDecimal.setScale(0, roundingMode);
                    BigDecimal multiply = bigDecimal.subtract(scale).multiply(g0.f40597q);
                    BigDecimal scale2 = multiply.setScale(0, roundingMode);
                    BigDecimal multiply2 = multiply.subtract(scale2).multiply(g0.f40597q);
                    BigDecimal scale3 = multiply2.setScale(0, roundingMode);
                    j10 = scale.longValueExact();
                    i12 = scale2.intValue();
                    i11 = scale3.intValue();
                    i13 = m(multiply2.subtract(scale3));
                } else if (pVar == g0.S) {
                    RoundingMode roundingMode2 = RoundingMode.FLOOR;
                    BigDecimal scale4 = bigDecimal.setScale(0, roundingMode2);
                    BigDecimal multiply3 = bigDecimal.subtract(scale4).multiply(g0.f40597q);
                    BigDecimal scale5 = multiply3.setScale(0, roundingMode2);
                    i11 = scale5.intValue();
                    int m10 = m(multiply3.subtract(scale5));
                    long longValueExact = scale4.longValueExact();
                    long j11 = g0Var.f40607d;
                    if (!z10) {
                        g0.k0(longValueExact);
                        i14 = (int) longValueExact;
                    } else {
                        j11 += gt.c.b(longValueExact, 60);
                        i14 = gt.c.d(longValueExact, 60);
                    }
                    j10 = j11;
                    i12 = i14;
                    i13 = m10;
                } else if (pVar == g0.T) {
                    BigDecimal scale6 = bigDecimal.setScale(0, RoundingMode.FLOOR);
                    int m11 = m(bigDecimal.subtract(scale6));
                    long longValueExact2 = scale6.longValueExact();
                    long j12 = g0Var.f40607d;
                    int i16 = g0Var.f40608e;
                    if (!z10) {
                        g0.m0(longValueExact2);
                        i10 = (int) longValueExact2;
                    } else {
                        i10 = gt.c.d(longValueExact2, 60);
                        long b10 = i16 + gt.c.b(longValueExact2, 60);
                        j12 += gt.c.b(b10, 60);
                        i16 = gt.c.d(b10, 60);
                    }
                    i11 = i10;
                    j10 = j12;
                    i12 = i16;
                    i13 = m11;
                } else {
                    throw new UnsupportedOperationException(this.f40612d.name());
                }
                if (z10) {
                    i15 = gt.c.d(j10, 24);
                    if (j10 > 0 && (i15 | i12 | i11 | i13) == 0) {
                        return g0.f40605y;
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
    public static class c implements jt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final net.time4j.g f40614a;

        /* synthetic */ c(net.time4j.g gVar, a aVar) {
            this(gVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static j e(g0 g0Var, long j10, net.time4j.g gVar) {
            if (j10 == 0 && g0Var.f40607d < 24) {
                return new j(0L, g0Var);
            }
            return (j) g(j.class, gVar, g0Var, j10);
        }

        private static Object g(Class cls, net.time4j.g gVar, g0 g0Var, long j10) {
            long f10;
            g0 J0;
            int i10 = g0Var.f40608e;
            int i11 = g0Var.f40609i;
            int i12 = g0Var.f40610o;
            switch (a.f40611a[gVar.ordinal()]) {
                case 1:
                    f10 = gt.c.f(g0Var.f40607d, j10);
                    break;
                case 2:
                    long f11 = gt.c.f(g0Var.f40608e, j10);
                    f10 = gt.c.f(g0Var.f40607d, gt.c.b(f11, 60));
                    i10 = gt.c.d(f11, 60);
                    break;
                case 3:
                    long f12 = gt.c.f(g0Var.f40609i, j10);
                    long f13 = gt.c.f(g0Var.f40608e, gt.c.b(f12, 60));
                    f10 = gt.c.f(g0Var.f40607d, gt.c.b(f13, 60));
                    int d10 = gt.c.d(f13, 60);
                    i11 = gt.c.d(f12, 60);
                    i10 = d10;
                    break;
                case 4:
                    return g(cls, net.time4j.g.f40593q, g0Var, gt.c.i(j10, 1000000L));
                case 5:
                    return g(cls, net.time4j.g.f40593q, g0Var, gt.c.i(j10, 1000L));
                case 6:
                    long f14 = gt.c.f(g0Var.f40610o, j10);
                    long f15 = gt.c.f(g0Var.f40609i, gt.c.b(f14, 1000000000));
                    long f16 = gt.c.f(g0Var.f40608e, gt.c.b(f15, 60));
                    f10 = gt.c.f(g0Var.f40607d, gt.c.b(f16, 60));
                    int d11 = gt.c.d(f16, 60);
                    int d12 = gt.c.d(f15, 60);
                    int d13 = gt.c.d(f14, 1000000000);
                    i10 = d11;
                    i11 = d12;
                    i12 = d13;
                    break;
                default:
                    throw new UnsupportedOperationException(gVar.name());
            }
            int d14 = gt.c.d(f10, 24);
            if ((d14 | i10 | i11 | i12) == 0) {
                if (j10 > 0 && cls == g0.class) {
                    J0 = g0.f40605y;
                } else {
                    J0 = g0.f40604x;
                }
            } else {
                J0 = g0.J0(d14, i10, i11, i12);
            }
            if (cls == g0.class) {
                return cls.cast(J0);
            }
            return cls.cast(new j(gt.c.b(f10, 24), J0));
        }

        @Override // jt.m0
        /* renamed from: d */
        public g0 b(g0 g0Var, long j10) {
            if (j10 == 0) {
                return g0Var;
            }
            return (g0) g(g0.class, this.f40614a, g0Var, j10);
        }

        @Override // jt.m0
        /* renamed from: f */
        public long a(g0 g0Var, g0 g0Var2) {
            long j10;
            long v02 = g0Var2.v0() - g0Var.v0();
            switch (a.f40611a[this.f40614a.ordinal()]) {
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
                    throw new UnsupportedOperationException(this.f40614a.name());
            }
            return v02 / j10;
        }

        private c(net.time4j.g gVar) {
            this.f40614a = gVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40615d;

        /* renamed from: e  reason: collision with root package name */
        private final int f40616e;

        /* renamed from: i  reason: collision with root package name */
        private final int f40617i;

        /* renamed from: o  reason: collision with root package name */
        private final int f40618o;

        d(jt.p pVar, int i10, int i11) {
            this.f40615d = pVar;
            if (pVar instanceof t) {
                this.f40616e = ((t) pVar).K();
            } else {
                this.f40616e = -1;
            }
            this.f40617i = i10;
            this.f40618o = i11;
        }

        private jt.p b(g0 g0Var) {
            switch (this.f40616e) {
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
            if (g0Var.f40607d >= 12 && g0Var.f40607d != 24) {
                return false;
            }
            return true;
        }

        private g0 o(g0 g0Var, int i10) {
            jt.p pVar = this.f40615d;
            if (pVar != g0.G && pVar != g0.F && pVar != g0.E) {
                if (pVar == g0.H) {
                    return (g0) g0Var.K(gt.c.l(i10, g0Var.f40608e), net.time4j.g.f40589e);
                }
                if (pVar == g0.J) {
                    return (g0) g0Var.K(gt.c.l(i10, g0Var.f40609i), net.time4j.g.f40590i);
                }
                l0 l0Var = g0.L;
                if (pVar == l0Var) {
                    return (g0) g0Var.K(gt.c.l(i10, ((Integer) g0Var.p(l0Var)).intValue()), net.time4j.g.f40591o);
                }
                l0 l0Var2 = g0.M;
                if (pVar == l0Var2) {
                    return (g0) g0Var.K(gt.c.l(i10, ((Integer) g0Var.p(l0Var2)).intValue()), net.time4j.g.f40592p);
                }
                if (pVar == g0.N) {
                    return (g0) g0Var.K(gt.c.l(i10, g0Var.f40610o), net.time4j.g.f40593q);
                }
                if (pVar == g0.O) {
                    int c10 = gt.c.c(i10, 86400000);
                    int i11 = g0Var.f40610o % 1000000;
                    if (c10 != 0 || i11 != 0) {
                        return g0.p0(c10, i11);
                    }
                    if (i10 > 0) {
                        return g0.f40605y;
                    }
                    return g0.f40604x;
                } else if (pVar == g0.I) {
                    int c11 = gt.c.c(i10, 1440);
                    if (c11 == 0 && g0Var.A0()) {
                        if (i10 > 0) {
                            return g0.f40605y;
                        }
                        return g0.f40604x;
                    }
                    return w(g0Var, Integer.valueOf(c11), false);
                } else if (pVar == g0.K) {
                    int c12 = gt.c.c(i10, 86400);
                    if (c12 == 0 && g0Var.f40610o == 0) {
                        if (i10 > 0) {
                            return g0.f40605y;
                        }
                        return g0.f40604x;
                    }
                    return w(g0Var, Integer.valueOf(c12), false);
                } else {
                    throw new UnsupportedOperationException(this.f40615d.name());
                }
            }
            return (g0) g0Var.K(gt.c.l(i10, ((Integer) g0Var.p(pVar)).intValue()), net.time4j.g.f40588d);
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(g0 g0Var) {
            return b(g0Var);
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(g0 g0Var) {
            return b(g0Var);
        }

        @Override // jt.z
        /* renamed from: e */
        public Integer j(g0 g0Var) {
            if (g0Var.f40607d == 24) {
                switch (this.f40616e) {
                    case 6:
                    case 8:
                    case 10:
                    case 11:
                    case 12:
                        return 0;
                }
            }
            if (g0Var.w0(this.f40615d)) {
                return Integer.valueOf(this.f40618o - 1);
            }
            return Integer.valueOf(this.f40618o);
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer p(g0 g0Var) {
            return Integer.valueOf(this.f40617i);
        }

        @Override // jt.z
        /* renamed from: g */
        public Integer x(g0 g0Var) {
            int i10;
            byte b10;
            int i11 = 12;
            switch (this.f40616e) {
                case 1:
                    int i12 = g0Var.f40607d % 12;
                    if (i12 != 0) {
                        i11 = i12;
                        break;
                    }
                    break;
                case 2:
                    i11 = g0Var.f40607d % 24;
                    if (i11 == 0) {
                        i11 = 24;
                        break;
                    }
                    break;
                case 3:
                    i11 = g0Var.f40607d % 12;
                    break;
                case 4:
                    i11 = g0Var.f40607d % 24;
                    break;
                case 5:
                    i11 = g0Var.f40607d;
                    break;
                case 6:
                    i11 = g0Var.f40608e;
                    break;
                case 7:
                    i10 = g0Var.f40607d * 60;
                    b10 = g0Var.f40608e;
                    i11 = i10 + b10;
                    break;
                case 8:
                    i11 = g0Var.f40609i;
                    break;
                case 9:
                    i10 = (g0Var.f40607d * 3600) + (g0Var.f40608e * 60);
                    b10 = g0Var.f40609i;
                    i11 = i10 + b10;
                    break;
                case 10:
                    i11 = g0Var.f40610o / 1000000;
                    break;
                case 11:
                    i11 = g0Var.f40610o / 1000;
                    break;
                case 12:
                    i11 = g0Var.f40610o;
                    break;
                case 13:
                    i11 = (int) (g0Var.v0() / 1000000);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f40615d.name());
            }
            return Integer.valueOf(i11);
        }

        @Override // jt.z
        /* renamed from: m */
        public boolean l(g0 g0Var, Integer num) {
            int intValue;
            int i10;
            if (num == null || (intValue = num.intValue()) < this.f40617i || intValue > (i10 = this.f40618o)) {
                return false;
            }
            if (intValue == i10) {
                int i11 = this.f40616e;
                if (i11 == 5) {
                    return g0Var.z0();
                }
                if (i11 == 7) {
                    return g0Var.A0();
                }
                if (i11 != 9) {
                    if (i11 == 13) {
                        if (g0Var.f40610o % 1000000 != 0) {
                            return false;
                        }
                        return true;
                    }
                } else if (g0Var.f40610o != 0) {
                    return false;
                } else {
                    return true;
                }
            }
            if (g0Var.f40607d == 24) {
                switch (this.f40616e) {
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
        @Override // jt.z
        /* renamed from: n */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public net.time4j.g0 w(net.time4j.g0 r7, java.lang.Integer r8, boolean r9) {
            /*
                r6 = this;
                if (r8 == 0) goto La6
                if (r9 == 0) goto Ld
                int r8 = r8.intValue()
                net.time4j.g0 r7 = r6.o(r7, r8)
                return r7
            Ld:
                boolean r9 = r6.l(r7, r8)
                if (r9 == 0) goto L8f
                byte r9 = net.time4j.g0.e0(r7)
                byte r0 = net.time4j.g0.f0(r7)
                byte r1 = net.time4j.g0.g0(r7)
                int r2 = net.time4j.g0.M(r7)
                int r8 = r8.intValue()
                int r3 = r6.f40616e
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
                jt.p r8 = r6.f40615d
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
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.g0.d.w(net.time4j.g0, java.lang.Integer, boolean):net.time4j.g0");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40619d;

        /* renamed from: e  reason: collision with root package name */
        private final long f40620e;

        /* renamed from: i  reason: collision with root package name */
        private final long f40621i;

        e(jt.p pVar, long j10, long j11) {
            this.f40619d = pVar;
            this.f40620e = j10;
            this.f40621i = j11;
        }

        private g0 m(g0 g0Var, long j10) {
            if (this.f40619d == g0.P) {
                long t02 = g0.t0(j10, 86400000000L);
                int i10 = g0Var.f40610o % 1000;
                if (t02 != 0 || i10 != 0 || j10 <= 0) {
                    return g0.o0(t02, i10);
                }
                return g0.f40605y;
            }
            long t03 = g0.t0(j10, 86400000000000L);
            if (t03 != 0 || j10 <= 0) {
                return g0.q0(t03);
            }
            return g0.f40605y;
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public Long j(g0 g0Var) {
            if (this.f40619d == g0.P && g0Var.f40610o % 1000 != 0) {
                return Long.valueOf(this.f40621i - 1);
            }
            return Long.valueOf(this.f40621i);
        }

        @Override // jt.z
        /* renamed from: e */
        public Long p(g0 g0Var) {
            return Long.valueOf(this.f40620e);
        }

        @Override // jt.z
        /* renamed from: f */
        public Long x(g0 g0Var) {
            long v02;
            if (this.f40619d != g0.P) {
                v02 = g0Var.v0();
            } else {
                v02 = g0Var.v0() / 1000;
            }
            return Long.valueOf(v02);
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(g0 g0Var, Long l10) {
            if (l10 == null) {
                return false;
            }
            if (this.f40619d == g0.P && l10.longValue() == this.f40621i) {
                if (g0Var.f40610o % 1000 != 0) {
                    return false;
                }
                return true;
            } else if (this.f40620e > l10.longValue() || l10.longValue() > this.f40621i) {
                return false;
            } else {
                return true;
            }
        }

        @Override // jt.z
        /* renamed from: i */
        public g0 w(g0 g0Var, Long l10, boolean z10) {
            if (l10 != null) {
                if (z10) {
                    return m(g0Var, l10.longValue());
                }
                if (l(g0Var, l10)) {
                    long longValue = l10.longValue();
                    return this.f40619d == g0.P ? g0.o0(longValue, g0Var.f40610o % 1000) : g0.q0(longValue);
                }
                throw new IllegalArgumentException("Value out of range: " + l10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements jt.u {
        private f() {
        }

        private static void e(jt.q qVar, String str) {
            jt.n0 n0Var = jt.n0.ERROR_MESSAGE;
            if (qVar.B(n0Var, str)) {
                qVar.E(n0Var, str);
            }
        }

        private static int g(jt.q qVar) {
            int q10 = qVar.q(g0.F);
            if (q10 != Integer.MIN_VALUE) {
                return q10;
            }
            int q11 = qVar.q(g0.D);
            if (q11 == 0) {
                return -1;
            }
            int i10 = 0;
            if (q11 == 24) {
                return 0;
            }
            if (q11 != Integer.MIN_VALUE) {
                return q11;
            }
            d1 d1Var = g0.B;
            if (qVar.o(d1Var)) {
                z zVar = (z) qVar.p(d1Var);
                int q12 = qVar.q(g0.C);
                if (q12 != Integer.MIN_VALUE) {
                    if (q12 == 0) {
                        if (zVar == z.AM) {
                            return -1;
                        }
                        return -2;
                    }
                    if (q12 != 12) {
                        i10 = q12;
                    }
                    if (zVar == z.AM) {
                        return i10;
                    }
                    return i10 + 12;
                }
                int q13 = qVar.q(g0.E);
                if (q13 != Integer.MIN_VALUE) {
                    if (zVar == z.AM) {
                        return q13;
                    }
                    return q13 + 12;
                }
            }
            return Integer.MIN_VALUE;
        }

        private static g0 i(jt.q qVar) {
            int i10;
            int i11;
            int i12;
            l0 l0Var = g0.Q;
            if (qVar.o(l0Var)) {
                long longValue = ((Long) qVar.p(l0Var)).longValue();
                if (longValue >= 0 && longValue <= 86400000000000L) {
                    return g0.q0(longValue);
                }
                e(qVar, "NANO_OF_DAY out of range: " + longValue);
                return null;
            }
            l0 l0Var2 = g0.P;
            int i13 = 0;
            if (qVar.o(l0Var2)) {
                l0 l0Var3 = g0.N;
                if (qVar.o(l0Var3)) {
                    i13 = ((Integer) qVar.p(l0Var3)).intValue() % 1000;
                }
                return g0.o0(((Long) qVar.p(l0Var2)).longValue(), i13);
            }
            l0 l0Var4 = g0.O;
            if (qVar.o(l0Var4)) {
                l0 l0Var5 = g0.N;
                if (qVar.o(l0Var5)) {
                    int intValue = ((Integer) qVar.p(l0Var5)).intValue();
                    if (intValue >= 0 && intValue < 1000000000) {
                        i13 = intValue % 1000000;
                    } else {
                        e(qVar, "NANO_OF_SECOND out of range: " + intValue);
                        return null;
                    }
                } else {
                    l0 l0Var6 = g0.M;
                    if (qVar.o(l0Var6)) {
                        int intValue2 = ((Integer) qVar.p(l0Var6)).intValue();
                        if (intValue2 >= 0 && intValue2 < 1000000) {
                            i13 = intValue2 % 1000;
                        } else {
                            e(qVar, "MICRO_OF_SECOND out of range: " + intValue2);
                            return null;
                        }
                    }
                }
                int intValue3 = ((Integer) qVar.p(l0Var4)).intValue();
                if (intValue3 >= 0 && intValue3 <= 86400000) {
                    return g0.p0(intValue3, i13);
                }
                e(qVar, "MILLI_OF_DAY out of range: " + intValue3);
                return null;
            }
            l0 l0Var7 = g0.K;
            if (qVar.o(l0Var7)) {
                l0 l0Var8 = g0.N;
                if (qVar.o(l0Var8)) {
                    i12 = ((Integer) qVar.p(l0Var8)).intValue();
                } else {
                    l0 l0Var9 = g0.M;
                    if (qVar.o(l0Var9)) {
                        i12 = ((Integer) qVar.p(l0Var9)).intValue() * 1000;
                    } else {
                        l0 l0Var10 = g0.L;
                        if (qVar.o(l0Var10)) {
                            i12 = ((Integer) qVar.p(l0Var10)).intValue() * 1000000;
                        } else {
                            i12 = 0;
                        }
                    }
                }
                return (g0) g0.J0(0, 0, 0, i12).E(l0Var7, qVar.p(l0Var7));
            }
            l0 l0Var11 = g0.I;
            if (!qVar.o(l0Var11)) {
                return null;
            }
            l0 l0Var12 = g0.N;
            if (qVar.o(l0Var12)) {
                i10 = ((Integer) qVar.p(l0Var12)).intValue();
            } else {
                l0 l0Var13 = g0.M;
                if (qVar.o(l0Var13)) {
                    i10 = ((Integer) qVar.p(l0Var13)).intValue() * 1000;
                } else {
                    l0 l0Var14 = g0.L;
                    if (qVar.o(l0Var14)) {
                        i10 = ((Integer) qVar.p(l0Var14)).intValue() * 1000000;
                    } else {
                        i10 = 0;
                    }
                }
            }
            l0 l0Var15 = g0.J;
            if (qVar.o(l0Var15)) {
                i11 = ((Integer) qVar.p(l0Var15)).intValue();
            } else {
                i11 = 0;
            }
            return (g0) g0.J0(0, 0, i11, i10).E(l0Var11, qVar.p(l0Var11));
        }

        @Override // jt.u
        public jt.f0 a() {
            return jt.f0.f32742a;
        }

        @Override // jt.u
        public jt.x b() {
            return null;
        }

        @Override // jt.u
        /* renamed from: d */
        public g0 j(jt.q qVar, jt.d dVar, boolean z10, boolean z11) {
            if (qVar instanceof gt.f) {
                return ((i0) i0.S().j(qVar, dVar, z10, z11)).X();
            }
            jt.p pVar = g0.f40606z;
            if (qVar.o(pVar)) {
                return (g0) qVar.p(pVar);
            }
            d1 d1Var = g0.R;
            if (qVar.o(d1Var)) {
                return g0.L0((BigDecimal) qVar.p(d1Var));
            }
            int q10 = qVar.q(g0.G);
            if (q10 == Integer.MIN_VALUE) {
                q10 = g(qVar);
                if (q10 == Integer.MIN_VALUE) {
                    return i(qVar);
                }
                if (q10 != -1 && q10 != -2) {
                    if (q10 == 24 && !z10) {
                        e(qVar, "Time 24:00 not allowed, use lax mode or element HOUR_FROM_0_TO_24 instead.");
                        return null;
                    }
                } else if (z10) {
                    q10 = q10 == -1 ? 0 : 12;
                } else {
                    e(qVar, "Clock hour cannot be zero.");
                    return null;
                }
            }
            d1 d1Var2 = g0.S;
            if (qVar.o(d1Var2)) {
                return (g0) g0.X.w(g0.G0(q10), qVar.p(d1Var2), false);
            }
            int q11 = qVar.q(g0.H);
            if (q11 == Integer.MIN_VALUE) {
                q11 = 0;
            }
            d1 d1Var3 = g0.T;
            if (qVar.o(d1Var3)) {
                return (g0) g0.Y.w(g0.H0(q10, q11), qVar.p(d1Var3), false);
            }
            int q12 = qVar.q(g0.J);
            if (q12 == Integer.MIN_VALUE) {
                q12 = 0;
            }
            int q13 = qVar.q(g0.N);
            if (q13 == Integer.MIN_VALUE) {
                int q14 = qVar.q(g0.M);
                if (q14 == Integer.MIN_VALUE) {
                    int q15 = qVar.q(g0.L);
                    if (q15 == Integer.MIN_VALUE) {
                        q13 = 0;
                    } else {
                        q13 = gt.c.h(q15, 1000000);
                    }
                } else {
                    q13 = gt.c.h(q14, 1000);
                }
            }
            if (z10) {
                long f10 = gt.c.f(gt.c.i(gt.c.f(gt.c.f(gt.c.i(q10, 3600L), gt.c.i(q11, 60L)), q12), 1000000000L), q13);
                long t02 = g0.t0(f10, 86400000000000L);
                long s02 = g0.s0(f10, 86400000000000L);
                int i10 = (s02 > 0L ? 1 : (s02 == 0L ? 0 : -1));
                if (i10 != 0) {
                    jt.p pVar2 = x.f40914r;
                    if (qVar.A(pVar2, s02)) {
                        qVar.D(pVar2, s02);
                    }
                }
                if (t02 != 0 || i10 <= 0) {
                    return g0.q0(t02);
                }
                return g0.f40605y;
            } else if ((q10 >= 0 && q11 >= 0 && q12 >= 0 && q13 >= 0 && q10 == 24 && (q11 | q12 | q13) == 0) || (q10 < 24 && q11 <= 59 && q12 <= 59 && q13 <= 1000000000)) {
                return g0.K0(q10, q11, q12, q13, false);
            } else {
                e(qVar, "Time component out of range.");
                return null;
            }
        }

        @Override // jt.u
        public int h() {
            return f0.r0().h();
        }

        @Override // jt.u
        public String k(jt.y yVar, Locale locale) {
            return kt.b.t(kt.e.d(yVar.a()), locale);
        }

        /* synthetic */ f(a aVar) {
            this();
        }

        @Override // jt.u
        /* renamed from: f */
        public jt.o c(g0 g0Var, jt.d dVar) {
            return g0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g implements jt.z {
        private g() {
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(g0 g0Var) {
            return g0.E;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(g0 g0Var) {
            return g0.E;
        }

        @Override // jt.z
        /* renamed from: d */
        public z j(g0 g0Var) {
            return z.PM;
        }

        @Override // jt.z
        /* renamed from: e */
        public z p(g0 g0Var) {
            return z.AM;
        }

        @Override // jt.z
        /* renamed from: f */
        public z x(g0 g0Var) {
            return z.e(g0Var.f40607d);
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(g0 g0Var, z zVar) {
            return zVar != null;
        }

        @Override // jt.z
        /* renamed from: i */
        public g0 w(g0 g0Var, z zVar, boolean z10) {
            int i10;
            if (g0Var.f40607d != 24) {
                i10 = g0Var.f40607d;
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
                return g0.J0(i10, g0Var.f40608e, g0Var.f40609i, g0Var.f40610o);
            }
            throw new IllegalArgumentException("Missing am/pm-value.");
        }

        /* synthetic */ g(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class h implements jt.z {
        private h() {
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public net.time4j.g j(g0 g0Var) {
            return net.time4j.g.f40593q;
        }

        @Override // jt.z
        /* renamed from: e */
        public net.time4j.g p(g0 g0Var) {
            return net.time4j.g.f40588d;
        }

        @Override // jt.z
        /* renamed from: f */
        public net.time4j.g x(g0 g0Var) {
            if (g0Var.f40610o != 0) {
                if (g0Var.f40610o % 1000000 == 0) {
                    return net.time4j.g.f40591o;
                }
                if (g0Var.f40610o % 1000 == 0) {
                    return net.time4j.g.f40592p;
                }
                return net.time4j.g.f40593q;
            } else if (g0Var.f40609i != 0) {
                return net.time4j.g.f40590i;
            } else {
                if (g0Var.f40608e != 0) {
                    return net.time4j.g.f40589e;
                }
                return net.time4j.g.f40588d;
            }
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(g0 g0Var, net.time4j.g gVar) {
            return gVar != null;
        }

        @Override // jt.z
        /* renamed from: i */
        public g0 w(g0 g0Var, net.time4j.g gVar, boolean z10) {
            if (gVar != null) {
                if (gVar.ordinal() < x(g0Var).ordinal()) {
                    switch (a.f40611a[gVar.ordinal()]) {
                        case 1:
                            return g0.G0(g0Var.f40607d);
                        case 2:
                            return g0.H0(g0Var.f40607d, g0Var.f40608e);
                        case 3:
                            return g0.I0(g0Var.f40607d, g0Var.f40608e, g0Var.f40609i);
                        case 4:
                            return g0.J0(g0Var.f40607d, g0Var.f40608e, g0Var.f40609i, (g0Var.f40610o / 1000000) * 1000000);
                        case 5:
                            return g0.J0(g0Var.f40607d, g0Var.f40608e, g0Var.f40609i, (g0Var.f40610o / 1000) * 1000);
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
    private static class i implements jt.z {
        private i() {
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(g0 g0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public g0 j(g0 g0Var) {
            return g0.f40605y;
        }

        @Override // jt.z
        /* renamed from: e */
        public g0 p(g0 g0Var) {
            return g0.f40604x;
        }

        @Override // jt.z
        /* renamed from: f */
        public g0 x(g0 g0Var) {
            return g0Var;
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(g0 g0Var, g0 g0Var2) {
            return g0Var2 != null;
        }

        @Override // jt.z
        /* renamed from: i */
        public g0 w(g0 g0Var, g0 g0Var2, boolean z10) {
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
        f40596p = c10;
        f40597q = new BigDecimal(60);
        f40598r = new BigDecimal(3600);
        f40599s = new BigDecimal(1000000000);
        f40600t = new BigDecimal("24");
        f40601u = new BigDecimal("23.999999999999999");
        f40602v = new BigDecimal("59.999999999999999");
        f40603w = new g0[25];
        for (int i10 = 0; i10 <= 24; i10++) {
            f40603w[i10] = new g0(i10, 0, 0, 0, false);
        }
        g0[] g0VarArr = f40603w;
        g0 g0Var = g0VarArr[0];
        f40604x = g0Var;
        g0 g0Var2 = g0VarArr[24];
        f40605y = g0Var2;
        r0 r0Var = r0.f40793d;
        f40606z = r0Var;
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
        l lVar = new l("DECIMAL_HOUR", f40601u);
        R = lVar;
        BigDecimal bigDecimal = f40602v;
        l lVar2 = new l("DECIMAL_MINUTE", bigDecimal);
        S = lVar2;
        l lVar3 = new l("DECIMAL_SECOND", bigDecimal);
        T = lVar3;
        jt.p pVar = j0.f40714o;
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
        b bVar = new b(lVar, f40600t);
        W = bVar;
        b bVar2 = new b(lVar2, bigDecimal);
        X = bVar2;
        b bVar3 = new b(lVar3, bigDecimal);
        Y = bVar3;
        h0.b d10 = h0.b.k(v.class, g0.class, new f(null), g0Var, g0Var2).d(r0Var, new i(null)).d(dVar, new g(null));
        d dVar2 = new d(G2, 1, 12);
        net.time4j.g gVar = net.time4j.g.f40588d;
        h0.b e10 = d10.e(G2, dVar2, gVar).e(G3, new d(G3, 1, 24), gVar).e(H2, new d(H2, 0, 11), gVar).e(H3, new d(H3, 0, 23), gVar).e(H4, new d(H4, 0, 24), gVar);
        d dVar3 = new d(H5, 0, 59);
        net.time4j.g gVar2 = net.time4j.g.f40589e;
        h0.b e11 = e10.e(H5, dVar3, gVar2).e(H6, new d(H6, 0, 1440), gVar2);
        d dVar4 = new d(H7, 0, 59);
        net.time4j.g gVar3 = net.time4j.g.f40590i;
        h0.b e12 = e11.e(H7, dVar4, gVar3).e(H8, new d(H8, 0, 86400), gVar3);
        d dVar5 = new d(H9, 0, 999);
        net.time4j.g gVar4 = net.time4j.g.f40591o;
        h0.b e13 = e12.e(H9, dVar5, gVar4);
        d dVar6 = new d(H10, 0, 999999);
        net.time4j.g gVar5 = net.time4j.g.f40592p;
        h0.b e14 = e13.e(H10, dVar6, gVar5);
        d dVar7 = new d(H11, 0, 999999999);
        net.time4j.g gVar6 = net.time4j.g.f40593q;
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
        this.f40607d = (byte) i10;
        this.f40608e = (byte) i11;
        this.f40609i = (byte) i12;
        this.f40610o = i13;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean A0() {
        if ((this.f40609i | this.f40610o) == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object D0(String str) {
        return V.get(str);
    }

    public static g0 E0() {
        return f40605y;
    }

    public static g0 F0() {
        return f40604x;
    }

    public static g0 G0(int i10) {
        j0(i10);
        return f40603w[i10];
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
            return f40603w[i10];
        }
        return new g0(i10, i11, i12, i13, z10);
    }

    public static g0 L0(BigDecimal bigDecimal) {
        return (g0) W.w(null, bigDecimal, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void M0(StringBuilder sb2, int i10) {
        int i11;
        sb2.append(f40596p);
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
        for (jt.s sVar : gt.d.c().g(jt.s.class)) {
            if (sVar.b(g0.class)) {
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

    public static jt.h0 i0() {
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

    private static void r0(Map map, jt.p pVar) {
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
        return this.f40610o + (this.f40609i * 1000000000) + (this.f40608e * 60000000000L) + (this.f40607d * 3600000000000L);
    }

    private Object writeReplace() {
        return new SPX(this, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean z0() {
        if ((this.f40608e | this.f40609i | this.f40610o) == 0) {
            return true;
        }
        return false;
    }

    public boolean B0() {
        if (z0() && this.f40607d % 24 == 0) {
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
    @Override // jt.q
    /* renamed from: H */
    public jt.h0 w() {
        return Z;
    }

    public j P0(long j10, net.time4j.g gVar) {
        return c.e(this, j10, gVar);
    }

    @Override // gt.g
    public int a() {
        return this.f40610o;
    }

    @Override // gt.g
    public int d() {
        return this.f40609i;
    }

    @Override // gt.g
    public int e() {
        return this.f40608e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g0) {
            g0 g0Var = (g0) obj;
            if (this.f40607d == g0Var.f40607d && this.f40608e == g0Var.f40608e && this.f40609i == g0Var.f40609i && this.f40610o == g0Var.f40610o) {
                return true;
            }
        }
        return false;
    }

    @Override // gt.g
    public int h() {
        return this.f40607d;
    }

    public int hashCode() {
        return this.f40607d + (this.f40608e * 60) + (this.f40609i * 3600) + (this.f40610o * 37);
    }

    @Override // java.lang.Comparable
    /* renamed from: n0 */
    public int compareTo(g0 g0Var) {
        int i10 = this.f40607d - g0Var.f40607d;
        if (i10 == 0 && (i10 = this.f40608e - g0Var.f40608e) == 0 && (i10 = this.f40609i - g0Var.f40609i) == 0) {
            i10 = this.f40610o - g0Var.f40610o;
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
        h0(this.f40607d, sb2);
        if ((this.f40608e | this.f40609i | this.f40610o) != 0) {
            sb2.append(':');
            h0(this.f40608e, sb2);
            if ((this.f40609i | this.f40610o) != 0) {
                sb2.append(':');
                h0(this.f40609i, sb2);
                int i10 = this.f40610o;
                if (i10 != 0) {
                    M0(sb2, i10);
                }
            }
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.q
    /* renamed from: u0 */
    public g0 x() {
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean w0(jt.p pVar) {
        if (pVar != O || this.f40610o % 1000000 == 0) {
            if (pVar != G || z0()) {
                if (pVar != I || A0()) {
                    if (pVar != K || this.f40610o == 0) {
                        if (pVar == P && this.f40610o % 1000 != 0) {
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
