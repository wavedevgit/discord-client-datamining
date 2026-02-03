package kotlin.ranges;

import java.util.NoSuchElementException;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.a;
import kotlin.ranges.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends e {
    public static double b(double d10, double d11) {
        return d10 < d11 ? d11 : d10;
    }

    public static float c(float f10, float f11) {
        return f10 < f11 ? f11 : f10;
    }

    public static int d(int i10, int i11) {
        return i10 < i11 ? i11 : i10;
    }

    public static long e(long j10, long j11) {
        return j10 < j11 ? j11 : j10;
    }

    public static Comparable f(Comparable comparable, Comparable minimumValue) {
        Intrinsics.checkNotNullParameter(comparable, "<this>");
        Intrinsics.checkNotNullParameter(minimumValue, "minimumValue");
        if (comparable.compareTo(minimumValue) < 0) {
            return minimumValue;
        }
        return comparable;
    }

    public static double g(double d10, double d11) {
        return d10 > d11 ? d11 : d10;
    }

    public static float h(float f10, float f11) {
        return f10 > f11 ? f11 : f10;
    }

    public static int i(int i10, int i11) {
        return i10 > i11 ? i11 : i10;
    }

    public static long j(long j10, long j11) {
        return j10 > j11 ? j11 : j10;
    }

    public static double k(double d10, double d11, double d12) {
        if (d11 <= d12) {
            if (d10 < d11) {
                return d11;
            }
            if (d10 > d12) {
                return d12;
            }
            return d10;
        }
        throw new IllegalArgumentException("Cannot coerce value to an empty range: maximum " + d12 + " is less than minimum " + d11 + '.');
    }

    public static float l(float f10, float f11, float f12) {
        if (f11 <= f12) {
            if (f10 < f11) {
                return f11;
            }
            if (f10 > f12) {
                return f12;
            }
            return f10;
        }
        throw new IllegalArgumentException("Cannot coerce value to an empty range: maximum " + f12 + " is less than minimum " + f11 + '.');
    }

    public static int m(int i10, int i11, int i12) {
        if (i11 <= i12) {
            if (i10 < i11) {
                return i11;
            }
            if (i10 > i12) {
                return i12;
            }
            return i10;
        }
        throw new IllegalArgumentException("Cannot coerce value to an empty range: maximum " + i12 + " is less than minimum " + i11 + '.');
    }

    public static int n(int i10, as.a range) {
        Intrinsics.checkNotNullParameter(range, "range");
        if (!range.isEmpty()) {
            if (i10 < ((Number) range.b()).intValue()) {
                return ((Number) range.b()).intValue();
            }
            if (i10 > ((Number) range.c()).intValue()) {
                return ((Number) range.c()).intValue();
            }
            return i10;
        }
        throw new IllegalArgumentException("Cannot coerce value to an empty range: " + range + '.');
    }

    public static long o(long j10, long j11, long j12) {
        if (j11 <= j12) {
            if (j10 < j11) {
                return j11;
            }
            if (j10 > j12) {
                return j12;
            }
            return j10;
        }
        throw new IllegalArgumentException("Cannot coerce value to an empty range: maximum " + j12 + " is less than minimum " + j11 + '.');
    }

    public static a p(int i10, int i11) {
        return a.f33168o.a(i10, i11, -1);
    }

    public static int q(IntRange intRange, kotlin.random.c random) {
        Intrinsics.checkNotNullParameter(intRange, "<this>");
        Intrinsics.checkNotNullParameter(random, "random");
        try {
            return kotlin.random.d.d(random, intRange);
        } catch (IllegalArgumentException e10) {
            throw new NoSuchElementException(e10.getMessage());
        }
    }

    public static a r(a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a.f33168o.a(aVar.e(), aVar.d(), -aVar.f());
    }

    public static a s(a aVar, int i10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        e.a(z10, Integer.valueOf(i10));
        a.C0442a c0442a = a.f33168o;
        int d10 = aVar.d();
        int e10 = aVar.e();
        if (aVar.f() <= 0) {
            i10 = -i10;
        }
        return c0442a.a(d10, e10, i10);
    }

    public static b t(b bVar, long j10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        if (j10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        e.a(z10, Long.valueOf(j10));
        b.a aVar = b.f33172o;
        long d10 = bVar.d();
        long e10 = bVar.e();
        if (bVar.f() <= 0) {
            j10 = -j10;
        }
        return aVar.a(d10, e10, j10);
    }

    public static IntRange u(int i10, int i11) {
        if (i11 <= Integer.MIN_VALUE) {
            return IntRange.f33166p.a();
        }
        return new IntRange(i10, i11 - 1);
    }

    public static c v(int i10, long j10) {
        if (j10 <= Long.MIN_VALUE) {
            return c.f33176p.a();
        }
        return new c(i10, j10 - 1);
    }

    public static c w(long j10, long j11) {
        if (j11 <= Long.MIN_VALUE) {
            return c.f33176p.a();
        }
        return new c(j10, j11 - 1);
    }
}
