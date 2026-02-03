package kotlin.time;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Duration implements Comparable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f36073e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final long f36074i = l(0);

    /* renamed from: o  reason: collision with root package name */
    private static final long f36075o = b.b(4611686018427387903L);

    /* renamed from: p  reason: collision with root package name */
    private static final long f36076p = b.b(-4611686018427387903L);

    /* renamed from: d  reason: collision with root package name */
    private final long f36077d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a() {
            return Duration.f36075o;
        }

        public final long b() {
            return Duration.f36076p;
        }

        public final long c() {
            return Duration.f36074i;
        }

        public final long d(String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            try {
                return b.h(value, true);
            } catch (IllegalArgumentException e10) {
                throw new IllegalArgumentException("Invalid ISO duration string format: '" + value + "'.", e10);
            }
        }

        private a() {
        }
    }

    private /* synthetic */ Duration(long j10) {
        this.f36077d = j10;
    }

    private static final long A(long j10) {
        return j10 >> 1;
    }

    public static int B(long j10) {
        return Long.hashCode(j10);
    }

    public static final boolean C(long j10) {
        return !F(j10);
    }

    private static final boolean D(long j10) {
        return (((int) j10) & 1) == 1;
    }

    private static final boolean E(long j10) {
        return (((int) j10) & 1) == 0;
    }

    public static final boolean F(long j10) {
        if (j10 != f36075o && j10 != f36076p) {
            return false;
        }
        return true;
    }

    public static final boolean G(long j10) {
        return j10 < 0;
    }

    public static final boolean H(long j10) {
        return j10 > 0;
    }

    public static final long I(long j10, long j11) {
        if (F(j10)) {
            if (!C(j11) && (j11 ^ j10) < 0) {
                throw new IllegalArgumentException("Summing infinite durations of different signs yields an undefined result.");
            }
            return j10;
        } else if (F(j11)) {
            return j11;
        } else {
            if ((((int) j10) & 1) == (((int) j11) & 1)) {
                long A = A(j10) + A(j11);
                if (E(j10)) {
                    return b.e(A);
                }
                return b.c(A);
            } else if (D(j10)) {
                return f(j10, A(j10), A(j11));
            } else {
                return f(j10, A(j11), A(j10));
            }
        }
    }

    public static final double J(long j10, fs.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if (j10 == f36075o) {
            return Double.POSITIVE_INFINITY;
        }
        if (j10 == f36076p) {
            return Double.NEGATIVE_INFINITY;
        }
        return c.a(A(j10), z(j10), unit);
    }

    public static final String K(long j10) {
        long j11;
        boolean z10;
        boolean z11;
        StringBuilder sb2 = new StringBuilder();
        if (G(j10)) {
            sb2.append('-');
        }
        sb2.append("PT");
        long p10 = p(j10);
        long s10 = s(p10);
        int w10 = w(p10);
        int y10 = y(p10);
        int x10 = x(p10);
        if (F(j10)) {
            j11 = 9999999999999L;
        } else {
            j11 = s10;
        }
        boolean z12 = false;
        if (j11 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (y10 == 0 && x10 == 0) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (w10 != 0 || (z11 && z10)) {
            z12 = true;
        }
        if (z10) {
            sb2.append(j11);
            sb2.append('H');
        }
        if (z12) {
            sb2.append(w10);
            sb2.append('M');
        }
        if (z11 || (!z10 && !z12)) {
            g(j10, sb2, y10, x10, 9, "S", true);
        }
        return sb2.toString();
    }

    public static final long L(long j10, fs.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if (j10 == f36075o) {
            return LongCompanionObject.MAX_VALUE;
        }
        if (j10 == f36076p) {
            return Long.MIN_VALUE;
        }
        return c.b(A(j10), z(j10), unit);
    }

    public static String M(long j10) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        if (j10 == 0) {
            return "0s";
        }
        if (j10 == f36075o) {
            return "Infinity";
        }
        if (j10 == f36076p) {
            return "-Infinity";
        }
        boolean G = G(j10);
        StringBuilder sb2 = new StringBuilder();
        if (G) {
            sb2.append('-');
        }
        long p10 = p(j10);
        long r10 = r(p10);
        int q10 = q(p10);
        int w10 = w(p10);
        int y10 = y(p10);
        int x10 = x(p10);
        int i10 = 0;
        if (r10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (q10 != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (w10 != 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (y10 == 0 && x10 == 0) {
            z13 = false;
        } else {
            z13 = true;
        }
        if (z10) {
            sb2.append(r10);
            sb2.append('d');
            i10 = 1;
        }
        if (z11 || (z10 && (z12 || z13))) {
            int i11 = i10 + 1;
            if (i10 > 0) {
                sb2.append(' ');
            }
            sb2.append(q10);
            sb2.append('h');
            i10 = i11;
        }
        if (z12 || (z13 && (z11 || z10))) {
            int i12 = i10 + 1;
            if (i10 > 0) {
                sb2.append(' ');
            }
            sb2.append(w10);
            sb2.append('m');
            i10 = i12;
        }
        if (z13) {
            int i13 = i10 + 1;
            if (i10 > 0) {
                sb2.append(' ');
            }
            if (y10 == 0 && !z10 && !z11 && !z12) {
                if (x10 >= 1000000) {
                    g(j10, sb2, x10 / 1000000, x10 % 1000000, 6, "ms", false);
                } else if (x10 >= 1000) {
                    g(j10, sb2, x10 / 1000, x10 % 1000, 3, "us", false);
                } else {
                    sb2.append(x10);
                    sb2.append("ns");
                }
            } else {
                g(j10, sb2, y10, x10, 9, "s", false);
            }
            i10 = i13;
        }
        if (G && i10 > 1) {
            sb2.insert(1, '(').append(')');
        }
        return sb2.toString();
    }

    public static final long N(long j10) {
        return b.a(-A(j10), ((int) j10) & 1);
    }

    private static final long f(long j10, long j11, long j12) {
        long g10 = b.g(j12);
        long j13 = j11 + g10;
        if (-4611686018426L <= j13 && j13 < 4611686018427L) {
            return b.d(b.f(j13) + (j12 - b.f(g10)));
        }
        return b.b(kotlin.ranges.d.o(j13, -4611686018427387903L, 4611686018427387903L));
    }

    private static final void g(long j10, StringBuilder sb2, int i10, int i11, int i12, String str, boolean z10) {
        sb2.append(i10);
        if (i11 != 0) {
            sb2.append('.');
            String t02 = StringsKt.t0(String.valueOf(i11), i12, '0');
            int i13 = -1;
            int length = t02.length() - 1;
            if (length >= 0) {
                while (true) {
                    int i14 = length - 1;
                    if (t02.charAt(length) != '0') {
                        i13 = length;
                        break;
                    } else if (i14 < 0) {
                        break;
                    } else {
                        length = i14;
                    }
                }
            }
            int i15 = i13 + 1;
            if (!z10 && i15 < 3) {
                sb2.append((CharSequence) t02, 0, i15);
                Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            } else {
                sb2.append((CharSequence) t02, 0, ((i13 + 3) / 3) * 3);
                Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            }
        }
        sb2.append(str);
    }

    public static final /* synthetic */ Duration h(long j10) {
        return new Duration(j10);
    }

    public static int k(long j10, long j11) {
        long j12 = j10 ^ j11;
        if (j12 >= 0 && (((int) j12) & 1) != 0) {
            int i10 = (((int) j10) & 1) - (((int) j11) & 1);
            if (G(j10)) {
                return -i10;
            }
            return i10;
        }
        return Intrinsics.compare(j10, j11);
    }

    public static long l(long j10) {
        if (fs.a.a()) {
            if (E(j10)) {
                long A = A(j10);
                if (-4611686018426999999L <= A && A < 4611686018427000000L) {
                    return j10;
                }
                throw new AssertionError(A(j10) + " ns is out of nanoseconds range");
            }
            long A2 = A(j10);
            if (-4611686018427387903L <= A2 && A2 < 4611686018427387904L) {
                long A3 = A(j10);
                if (-4611686018426L <= A3) {
                    if (A3 >= 4611686018427L) {
                        return j10;
                    }
                    throw new AssertionError(A(j10) + " ms is denormalized");
                }
                return j10;
            }
            throw new AssertionError(A(j10) + " ms is out of milliseconds range");
        }
        return j10;
    }

    public static boolean m(long j10, Object obj) {
        return (obj instanceof Duration) && j10 == ((Duration) obj).O();
    }

    public static final boolean o(long j10, long j11) {
        return j10 == j11;
    }

    public static final long p(long j10) {
        if (G(j10)) {
            return N(j10);
        }
        return j10;
    }

    public static final int q(long j10) {
        if (F(j10)) {
            return 0;
        }
        return (int) (s(j10) % 24);
    }

    public static final long r(long j10) {
        return L(j10, fs.b.f25573s);
    }

    public static final long s(long j10) {
        return L(j10, fs.b.f25572r);
    }

    public static final long t(long j10) {
        if (D(j10) && C(j10)) {
            return A(j10);
        }
        return L(j10, fs.b.f25569o);
    }

    public static final long u(long j10) {
        return L(j10, fs.b.f25571q);
    }

    public static final long v(long j10) {
        return L(j10, fs.b.f25570p);
    }

    public static final int w(long j10) {
        if (F(j10)) {
            return 0;
        }
        return (int) (u(j10) % 60);
    }

    public static final int x(long j10) {
        long A;
        if (F(j10)) {
            return 0;
        }
        if (D(j10)) {
            A = b.f(A(j10) % 1000);
        } else {
            A = A(j10) % 1000000000;
        }
        return (int) A;
    }

    public static final int y(long j10) {
        if (F(j10)) {
            return 0;
        }
        return (int) (v(j10) % 60);
    }

    private static final fs.b z(long j10) {
        if (E(j10)) {
            return fs.b.f25567e;
        }
        return fs.b.f25569o;
    }

    public final /* synthetic */ long O() {
        return this.f36077d;
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return i(((Duration) obj).O());
    }

    public boolean equals(Object obj) {
        return m(this.f36077d, obj);
    }

    public int hashCode() {
        return B(this.f36077d);
    }

    public int i(long j10) {
        return k(this.f36077d, j10);
    }

    public String toString() {
        return M(this.f36077d);
    }
}
