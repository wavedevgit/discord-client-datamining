package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.StringsKt;
import kotlin.time.Duration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static final /* synthetic */ long a(long j10, int i10) {
        return i(j10, i10);
    }

    public static final /* synthetic */ long b(long j10) {
        return j(j10);
    }

    public static final /* synthetic */ long c(long j10) {
        return k(j10);
    }

    public static final /* synthetic */ long d(long j10) {
        return l(j10);
    }

    public static final /* synthetic */ long e(long j10) {
        return m(j10);
    }

    public static final /* synthetic */ long f(long j10) {
        return n(j10);
    }

    public static final /* synthetic */ long g(long j10) {
        return o(j10);
    }

    public static final /* synthetic */ long h(String str, boolean z10) {
        return p(str, z10);
    }

    public static final long i(long j10, int i10) {
        return Duration.k((j10 << 1) + i10);
    }

    public static final long j(long j10) {
        return Duration.k((j10 << 1) + 1);
    }

    public static final long k(long j10) {
        if (-4611686018426L <= j10 && j10 < 4611686018427L) {
            return l(n(j10));
        }
        return j(kotlin.ranges.d.o(j10, -4611686018427387903L, 4611686018427387903L));
    }

    public static final long l(long j10) {
        return Duration.k(j10 << 1);
    }

    public static final long m(long j10) {
        if (-4611686018426999999L <= j10 && j10 < 4611686018427000000L) {
            return l(j10);
        }
        return j(o(j10));
    }

    public static final long n(long j10) {
        return j10 * 1000000;
    }

    public static final long o(long j10) {
        return j10 / 1000000;
    }

    public static final long p(String str, boolean z10) {
        int i10;
        char charAt;
        char charAt2;
        int i11;
        boolean z11;
        int length = str.length();
        if (length != 0) {
            Duration.a aVar = Duration.f36297e;
            long c10 = aVar.c();
            char charAt3 = str.charAt(0);
            int i12 = (charAt3 == '+' || charAt3 == '-') ? 1 : 0;
            boolean z12 = i12 > 0;
            boolean z13 = z12 && StringsKt.P0(str, '-', false, 2, null);
            if (length > i12) {
                char c11 = ':';
                char c12 = '0';
                if (str.charAt(i12) == 'P') {
                    int i13 = i12 + 1;
                    if (i13 == length) {
                        throw new IllegalArgumentException();
                    }
                    boolean z14 = false;
                    es.b bVar = null;
                    while (i13 < length) {
                        if (str.charAt(i13) != 'T') {
                            int i14 = i13;
                            while (true) {
                                if (i14 >= str.length()) {
                                    i11 = length;
                                    break;
                                }
                                char charAt4 = str.charAt(i14);
                                if (c12 > charAt4 || charAt4 >= c11) {
                                    i11 = length;
                                    if (!StringsKt.U("+-.", charAt4, false, 2, null)) {
                                        break;
                                    }
                                } else {
                                    i11 = length;
                                }
                                i14++;
                                length = i11;
                                c12 = '0';
                                c11 = ':';
                            }
                            Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
                            String substring = str.substring(i13, i14);
                            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                            if (substring.length() != 0) {
                                int length2 = i13 + substring.length();
                                if (length2 >= 0 && length2 < str.length()) {
                                    char charAt5 = str.charAt(length2);
                                    i13 = length2 + 1;
                                    es.b d10 = d.d(charAt5, z14);
                                    if (bVar != null && bVar.compareTo(d10) <= 0) {
                                        throw new IllegalArgumentException("Unexpected order of duration components");
                                    }
                                    int h02 = StringsKt.h0(substring, '.', 0, false, 6, null);
                                    if (d10 == es.b.f24009p && h02 > 0) {
                                        Intrinsics.checkNotNull(substring, "null cannot be cast to non-null type java.lang.String");
                                        String substring2 = substring.substring(0, h02);
                                        Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                                        z11 = z14;
                                        long I = Duration.I(c10, t(q(substring2), d10));
                                        Intrinsics.checkNotNull(substring, "null cannot be cast to non-null type java.lang.String");
                                        String substring3 = substring.substring(h02);
                                        Intrinsics.checkNotNullExpressionValue(substring3, "substring(...)");
                                        c10 = Duration.I(I, r(Double.parseDouble(substring3), d10));
                                    } else {
                                        z11 = z14;
                                        c10 = Duration.I(c10, t(q(substring), d10));
                                    }
                                    z14 = z11;
                                    bVar = d10;
                                    length = i11;
                                    c12 = '0';
                                    c11 = ':';
                                } else {
                                    throw new IllegalArgumentException("Missing unit for value " + substring);
                                }
                            } else {
                                throw new IllegalArgumentException();
                            }
                        } else if (z14 || (i13 = i13 + 1) == length) {
                            throw new IllegalArgumentException();
                        } else {
                            z14 = true;
                        }
                    }
                } else if (!z10) {
                    char c13 = '0';
                    if (StringsKt.D(str, i12, "Infinity", 0, Math.max(length - i12, 8), true)) {
                        c10 = aVar.a();
                    } else {
                        boolean z15 = !z12;
                        if (z12 && str.charAt(i12) == '(' && StringsKt.t1(str) == ')') {
                            i12++;
                            int i15 = length - 1;
                            if (i12 == i15) {
                                throw new IllegalArgumentException("No components");
                            }
                            i10 = i15;
                            z15 = true;
                        } else {
                            i10 = length;
                        }
                        boolean z16 = false;
                        es.b bVar2 = null;
                        while (i12 < i10) {
                            if (z16 && z15) {
                                while (i12 < str.length() && str.charAt(i12) == ' ') {
                                    i12++;
                                }
                            }
                            int i16 = i12;
                            while (i16 < str.length() && ((c13 <= (charAt2 = str.charAt(i16)) && charAt2 < ':') || charAt2 == '.')) {
                                i16++;
                            }
                            Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
                            String substring4 = str.substring(i12, i16);
                            Intrinsics.checkNotNullExpressionValue(substring4, "substring(...)");
                            if (substring4.length() != 0) {
                                int length3 = i12 + substring4.length();
                                int i17 = length3;
                                while (i17 < str.length() && 'a' <= (charAt = str.charAt(i17)) && charAt < '{') {
                                    i17++;
                                }
                                Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
                                String substring5 = str.substring(length3, i17);
                                Intrinsics.checkNotNullExpressionValue(substring5, "substring(...)");
                                i12 = length3 + substring5.length();
                                es.b e10 = d.e(substring5);
                                if (bVar2 != null && bVar2.compareTo(e10) <= 0) {
                                    throw new IllegalArgumentException("Unexpected order of duration components");
                                }
                                int h03 = StringsKt.h0(substring4, '.', 0, false, 6, null);
                                if (h03 > 0) {
                                    Intrinsics.checkNotNull(substring4, "null cannot be cast to non-null type java.lang.String");
                                    String substring6 = substring4.substring(0, h03);
                                    Intrinsics.checkNotNullExpressionValue(substring6, "substring(...)");
                                    long I2 = Duration.I(c10, t(Long.parseLong(substring6), e10));
                                    Intrinsics.checkNotNull(substring4, "null cannot be cast to non-null type java.lang.String");
                                    String substring7 = substring4.substring(h03);
                                    Intrinsics.checkNotNullExpressionValue(substring7, "substring(...)");
                                    c10 = Duration.I(I2, r(Double.parseDouble(substring7), e10));
                                    if (i12 < i10) {
                                        throw new IllegalArgumentException("Fractional component must be last");
                                    }
                                } else {
                                    c10 = Duration.I(c10, t(Long.parseLong(substring4), e10));
                                }
                                bVar2 = e10;
                                z16 = true;
                                c13 = '0';
                            } else {
                                throw new IllegalArgumentException();
                            }
                        }
                    }
                } else {
                    throw new IllegalArgumentException();
                }
                return z13 ? Duration.N(c10) : c10;
            }
            throw new IllegalArgumentException("No components");
        }
        throw new IllegalArgumentException("The string is empty");
    }

    private static final long q(String str) {
        int i10;
        char charAt;
        int length = str.length();
        if (length > 0 && StringsKt.U("+-", str.charAt(0), false, 2, null)) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (length - i10 > 16) {
            int i11 = i10;
            while (true) {
                if (i10 < length) {
                    char charAt2 = str.charAt(i10);
                    if (charAt2 == '0') {
                        if (i11 == i10) {
                            i11++;
                        }
                    } else if ('1' > charAt2 || charAt2 >= ':') {
                        break;
                    }
                    i10++;
                } else if (length - i11 > 16) {
                    if (str.charAt(0) == '-') {
                        return Long.MIN_VALUE;
                    }
                    return LongCompanionObject.MAX_VALUE;
                }
            }
        }
        if (StringsKt.P(str, "+", false, 2, null) && length > 1 && '0' <= (charAt = str.charAt(1)) && charAt < ':') {
            return Long.parseLong(StringsKt.p1(str, 1));
        }
        return Long.parseLong(str);
    }

    public static final long r(double d10, es.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        double a10 = c.a(d10, unit, es.b.f24006e);
        if (!Double.isNaN(a10)) {
            long d11 = xr.a.d(a10);
            if (-4611686018426999999L <= d11 && d11 < 4611686018427000000L) {
                return l(d11);
            }
            return k(xr.a.d(c.a(d10, unit, es.b.f24008o)));
        }
        throw new IllegalArgumentException("Duration value cannot be NaN.");
    }

    public static final long s(int i10, es.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if (unit.compareTo(es.b.f24009p) <= 0) {
            return l(c.c(i10, unit, es.b.f24006e));
        }
        return t(i10, unit);
    }

    public static final long t(long j10, es.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        es.b bVar = es.b.f24006e;
        long c10 = c.c(4611686018426999999L, bVar, unit);
        if ((-c10) <= j10 && j10 <= c10) {
            return l(c.c(j10, unit, bVar));
        }
        return j(kotlin.ranges.d.o(c.b(j10, unit, es.b.f24008o), -4611686018427387903L, 4611686018427387903L));
    }
}
