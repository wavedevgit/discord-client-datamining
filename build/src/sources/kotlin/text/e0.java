package kotlin.text;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e0 {
    public static final byte a(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.x b10 = b(str);
        if (b10 != null) {
            return b10.h();
        }
        StringsKt__StringNumberConversionsKt.r(str);
        throw new ir.h();
    }

    public static final ir.x b(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return c(str, 10);
    }

    public static final ir.x c(String str, int i10) {
        int compare;
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.z f10 = f(str, i10);
        if (f10 == null) {
            return null;
        }
        int h10 = f10.h();
        compare = Integer.compare(h10 ^ Integer.MIN_VALUE, ir.z.d(SetSpanOperation.SPAN_MAX_PRIORITY) ^ Integer.MIN_VALUE);
        if (compare > 0) {
            return null;
        }
        return ir.x.a(ir.x.d((byte) h10));
    }

    public static final int d(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.z e10 = e(str);
        if (e10 != null) {
            return e10.h();
        }
        StringsKt__StringNumberConversionsKt.r(str);
        throw new ir.h();
    }

    public static final ir.z e(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return f(str, 10);
    }

    public static final ir.z f(String str, int i10) {
        int i11;
        int compare;
        int compare2;
        int compare3;
        Intrinsics.checkNotNullParameter(str, "<this>");
        CharsKt__CharJVMKt.checkRadix(i10);
        int length = str.length();
        if (length == 0) {
            return null;
        }
        int i12 = 0;
        char charAt = str.charAt(0);
        if (Intrinsics.compare((int) charAt, 48) < 0) {
            i11 = 1;
            if (length == 1 || charAt != '+') {
                return null;
            }
        } else {
            i11 = 0;
        }
        int d10 = ir.z.d(i10);
        int i13 = 119304647;
        while (i11 < length) {
            int a10 = CharsKt__CharJVMKt.a(str.charAt(i11), i10);
            if (a10 >= 0) {
                compare = Integer.compare(i12 ^ Integer.MIN_VALUE, i13 ^ Integer.MIN_VALUE);
                if (compare > 0) {
                    if (i13 == 119304647) {
                        i13 = d0.a(-1, d10);
                        compare3 = Integer.compare(i12 ^ Integer.MIN_VALUE, i13 ^ Integer.MIN_VALUE);
                        if (compare3 > 0) {
                        }
                    }
                    return null;
                }
                int d11 = ir.z.d(i12 * d10);
                int d12 = ir.z.d(ir.z.d(a10) + d11);
                compare2 = Integer.compare(d12 ^ Integer.MIN_VALUE, d11 ^ Integer.MIN_VALUE);
                if (compare2 < 0) {
                    return null;
                }
                i11++;
                i12 = d12;
            } else {
                return null;
            }
        }
        return ir.z.a(i12);
    }

    public static final long g(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.b0 h10 = h(str);
        if (h10 != null) {
            return h10.h();
        }
        StringsKt__StringNumberConversionsKt.r(str);
        throw new ir.h();
    }

    public static final ir.b0 h(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return i(str, 10);
    }

    public static final ir.b0 i(String str, int i10) {
        int a10;
        int compare;
        int compare2;
        int compare3;
        Intrinsics.checkNotNullParameter(str, "<this>");
        CharsKt__CharJVMKt.checkRadix(i10);
        int length = str.length();
        if (length == 0) {
            return null;
        }
        int i11 = 0;
        char charAt = str.charAt(0);
        if (Intrinsics.compare((int) charAt, 48) < 0) {
            i11 = 1;
            if (length == 1 || charAt != '+') {
                return null;
            }
        }
        long d10 = ir.b0.d(i10);
        long j10 = 0;
        long j11 = 512409557603043100L;
        while (i11 < length) {
            if (CharsKt__CharJVMKt.a(str.charAt(i11), i10) >= 0) {
                compare = Long.compare(j10 ^ Long.MIN_VALUE, j11 ^ Long.MIN_VALUE);
                if (compare > 0) {
                    if (j11 == 512409557603043100L) {
                        j11 = b0.a(-1L, d10);
                        compare3 = Long.compare(j10 ^ Long.MIN_VALUE, j11 ^ Long.MIN_VALUE);
                        if (compare3 > 0) {
                        }
                    }
                    return null;
                }
                long d11 = ir.b0.d(j10 * d10);
                long d12 = ir.b0.d(ir.b0.d(ir.z.d(a10) & 4294967295L) + d11);
                compare2 = Long.compare(d12 ^ Long.MIN_VALUE, d11 ^ Long.MIN_VALUE);
                if (compare2 < 0) {
                    return null;
                }
                i11++;
                j10 = d12;
            } else {
                return null;
            }
        }
        return ir.b0.a(j10);
    }

    public static final short j(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.e0 k10 = k(str);
        if (k10 != null) {
            return k10.h();
        }
        StringsKt__StringNumberConversionsKt.r(str);
        throw new ir.h();
    }

    public static final ir.e0 k(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return l(str, 10);
    }

    public static final ir.e0 l(String str, int i10) {
        int compare;
        Intrinsics.checkNotNullParameter(str, "<this>");
        ir.z f10 = f(str, i10);
        if (f10 == null) {
            return null;
        }
        int h10 = f10.h();
        compare = Integer.compare(h10 ^ Integer.MIN_VALUE, ir.z.d(65535) ^ Integer.MIN_VALUE);
        if (compare > 0) {
            return null;
        }
        return ir.e0.a(ir.e0.d((short) h10));
    }
}
