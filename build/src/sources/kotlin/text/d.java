package kotlin.text;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f35401a;

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f35402b;

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f35403c;

    /* renamed from: d  reason: collision with root package name */
    private static final long[] f35404d;

    static {
        int[] iArr = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        int i10 = 0;
        for (int i11 = 0; i11 < 256; i11++) {
            iArr[i11] = "0123456789abcdef".charAt(i11 & 15) | ("0123456789abcdef".charAt(i11 >> 4) << '\b');
        }
        f35401a = iArr;
        int[] iArr2 = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        for (int i12 = 0; i12 < 256; i12++) {
            iArr2[i12] = "0123456789ABCDEF".charAt(i12 & 15) | ("0123456789ABCDEF".charAt(i12 >> 4) << '\b');
        }
        f35402b = iArr2;
        int[] iArr3 = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        for (int i13 = 0; i13 < 256; i13++) {
            iArr3[i13] = -1;
        }
        int i14 = 0;
        int i15 = 0;
        while (i14 < "0123456789abcdef".length()) {
            iArr3["0123456789abcdef".charAt(i14)] = i15;
            i14++;
            i15++;
        }
        int i16 = 0;
        int i17 = 0;
        while (i16 < "0123456789ABCDEF".length()) {
            iArr3["0123456789ABCDEF".charAt(i16)] = i17;
            i16++;
            i17++;
        }
        f35403c = iArr3;
        long[] jArr = new long[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        for (int i18 = 0; i18 < 256; i18++) {
            jArr[i18] = -1;
        }
        int i19 = 0;
        int i20 = 0;
        while (i19 < "0123456789abcdef".length()) {
            jArr["0123456789abcdef".charAt(i19)] = i20;
            i19++;
            i20++;
        }
        int i21 = 0;
        while (i10 < "0123456789ABCDEF".length()) {
            jArr["0123456789ABCDEF".charAt(i10)] = i21;
            i10++;
            i21++;
        }
        f35404d = jArr;
    }

    private static final int a(long j10) {
        if (0 <= j10 && j10 <= 2147483647L) {
            return (int) j10;
        }
        throw new IllegalArgumentException("The resulting string length is too big: " + ((Object) lr.b0.g(lr.b0.d(j10))));
    }

    private static final void b(String str, int i10, int i11, int i12) {
        int i13 = i11 - i10;
        if (i13 < 1) {
            o(str, i10, i11, "at least", 1);
        } else if (i13 > i12) {
            d(str, i10, (i13 + i10) - i12);
        }
    }

    private static final void c(String str, int i10, int i11, String str2, String str3, boolean z10, int i12) {
        if ((i11 - i10) - str2.length() <= str3.length()) {
            p(str, i10, i11, str2, str3);
        }
        if (str2.length() != 0) {
            int length = str2.length();
            for (int i13 = 0; i13 < length; i13++) {
                if (!a.c(str2.charAt(i13), str.charAt(i10 + i13), z10)) {
                    q(str, i10, i11, str2, "prefix");
                }
            }
            i10 += str2.length();
        }
        int length2 = i11 - str3.length();
        if (str3.length() != 0) {
            int length3 = str3.length();
            for (int i14 = 0; i14 < length3; i14++) {
                if (!a.c(str3.charAt(i14), str.charAt(length2 + i14), z10)) {
                    q(str, length2, i11, str3, "suffix");
                }
            }
        }
        b(str, i10, length2, i12);
    }

    private static final void d(String str, int i10, int i11) {
        while (i10 < i11) {
            if (str.charAt(i10) == '0') {
                i10++;
            } else {
                throw new NumberFormatException("Expected the hexadecimal digit '0' at index " + i10 + ", but was '" + str.charAt(i10) + "'.\nThe result won't fit the type being parsed.");
            }
        }
    }

    private static final int e(byte[] bArr, int i10, String str, String str2, int[] iArr, char[] cArr, int i11) {
        return r(str2, cArr, f(bArr, i10, iArr, cArr, r(str, cArr, i11)));
    }

    private static final int f(byte[] bArr, int i10, int[] iArr, char[] cArr, int i11) {
        int i12 = iArr[bArr[i10] & 255];
        cArr[i11] = (char) (i12 >> 8);
        cArr[i11 + 1] = (char) (i12 & SetSpanOperation.SPAN_MAX_PRIORITY);
        return i11 + 2;
    }

    private static final int g(int i10, int i11, int i12, int i13) {
        if (i10 > 0) {
            long j10 = i11;
            return a((i10 * (((i12 + 2) + i13) + j10)) - j10);
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public static final int h(int i10, int i11, int i12, int i13, int i14, int i15, int i16) {
        int i17;
        int i18;
        if (i10 > 0) {
            int i19 = (i10 - 1) / i11;
            int i20 = (i11 - 1) / i12;
            int i21 = i10 % i11;
            if (i21 != 0) {
                i11 = i21;
            }
            return a(i19 + (((i20 * i19) + ((i11 - 1) / i12)) * i13) + (((i17 - i19) - i18) * i14) + (i10 * (i15 + 2 + i16)));
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public static final int[] i() {
        return f35401a;
    }

    public static final long j(String str, int i10, int i11, e format) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(format, "format");
        return l(str, i10, i11, format, 16);
    }

    public static /* synthetic */ long k(String str, int i10, int i11, e eVar, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = 0;
        }
        if ((i12 & 2) != 0) {
            i11 = str.length();
        }
        if ((i12 & 4) != 0) {
            eVar = e.f35405d.a();
        }
        return j(str, i10, i11, eVar);
    }

    private static final long l(String str, int i10, int i11, e eVar, int i12) {
        kotlin.collections.d.f32498d.a(i10, i11, str.length());
        e.c c10 = eVar.c();
        if (c10.f()) {
            b(str, i10, i11, i12);
            return m(str, i10, i11);
        }
        String d10 = c10.d();
        String e10 = c10.e();
        c(str, i10, i11, d10, e10, c10.c(), i12);
        return m(str, i10 + d10.length(), i11 - e10.length());
    }

    private static final long m(String str, int i10, int i11) {
        long j10 = 0;
        while (i10 < i11) {
            long j11 = j10 << 4;
            char charAt = str.charAt(i10);
            if ((charAt >>> '\b') == 0) {
                long j12 = f35404d[charAt];
                if (j12 >= 0) {
                    j10 = j11 | j12;
                    i10++;
                }
            }
            n(str, i10);
            throw new lr.h();
        }
        return j10;
    }

    private static final Void n(String str, int i10) {
        throw new NumberFormatException("Expected a hexadecimal digit at index " + i10 + ", but was " + str.charAt(i10));
    }

    private static final void o(String str, int i10, int i11, String str2, int i12) {
        Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
        String substring = str.substring(i10, i11);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        throw new NumberFormatException("Expected " + str2 + ' ' + i12 + " hexadecimal digits at index " + i10 + ", but was \"" + substring + "\" of length " + (i11 - i10));
    }

    private static final void p(String str, int i10, int i11, String str2, String str3) {
        Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
        String substring = str.substring(i10, i11);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        throw new NumberFormatException("Expected a hexadecimal number with prefix \"" + str2 + "\" and suffix \"" + str3 + "\", but was " + substring);
    }

    private static final void q(String str, int i10, int i11, String str2, String str3) {
        int i12 = kotlin.ranges.d.i(str2.length() + i10, i11);
        Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
        String substring = str.substring(i10, i12);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        throw new NumberFormatException("Expected " + str3 + " \"" + str2 + "\" at index " + i10 + ", but was " + substring);
    }

    private static final int r(String str, char[] cArr, int i10) {
        int length = str.length();
        if (length != 0) {
            if (length != 1) {
                int length2 = str.length();
                Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
                str.getChars(0, length2, cArr, i10);
            } else {
                cArr[i10] = str.charAt(0);
            }
        }
        return i10 + str.length();
    }

    public static final String s(byte[] bArr, int i10, int i11, e format) {
        int[] iArr;
        Intrinsics.checkNotNullParameter(bArr, "<this>");
        Intrinsics.checkNotNullParameter(format, "format");
        kotlin.collections.d.f32498d.a(i10, i11, bArr.length);
        if (i10 == i11) {
            return "";
        }
        if (format.d()) {
            iArr = f35402b;
        } else {
            iArr = f35401a;
        }
        e.a b10 = format.b();
        if (b10.i()) {
            return v(bArr, i10, i11, b10, iArr);
        }
        return y(bArr, i10, i11, b10, iArr);
    }

    public static final String t(byte[] bArr, e format) {
        Intrinsics.checkNotNullParameter(bArr, "<this>");
        Intrinsics.checkNotNullParameter(format, "format");
        return s(bArr, 0, bArr.length, format);
    }

    public static /* synthetic */ String u(byte[] bArr, e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            eVar = e.f35405d.a();
        }
        return t(bArr, eVar);
    }

    private static final String v(byte[] bArr, int i10, int i11, e.a aVar, int[] iArr) {
        if (aVar.j()) {
            return x(bArr, i10, i11, aVar, iArr);
        }
        return w(bArr, i10, i11, aVar, iArr);
    }

    private static final String w(byte[] bArr, int i10, int i11, e.a aVar, int[] iArr) {
        String c10 = aVar.c();
        String e10 = aVar.e();
        String d10 = aVar.d();
        char[] cArr = new char[g(i11 - i10, d10.length(), c10.length(), e10.length())];
        int e11 = e(bArr, i10, c10, e10, iArr, cArr, 0);
        for (int i12 = i10 + 1; i12 < i11; i12++) {
            e11 = e(bArr, i12, c10, e10, iArr, cArr, r(d10, cArr, e11));
        }
        return w.v(cArr);
    }

    private static final String x(byte[] bArr, int i10, int i11, e.a aVar, int[] iArr) {
        int length = aVar.d().length();
        if (length <= 1) {
            int i12 = i11 - i10;
            int i13 = 0;
            if (length == 0) {
                char[] cArr = new char[a(i12 * 2)];
                while (i10 < i11) {
                    i13 = f(bArr, i10, iArr, cArr, i13);
                    i10++;
                }
                return w.v(cArr);
            }
            char[] cArr2 = new char[a((i12 * 3) - 1)];
            char charAt = aVar.d().charAt(0);
            int f10 = f(bArr, i10, iArr, cArr2, 0);
            for (int i14 = i10 + 1; i14 < i11; i14++) {
                cArr2[f10] = charAt;
                f10 = f(bArr, i14, iArr, cArr2, f10 + 1);
            }
            return w.v(cArr2);
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    private static final String y(byte[] bArr, int i10, int i11, e.a aVar, int[] iArr) {
        int i12;
        int i13;
        int g10 = aVar.g();
        int f10 = aVar.f();
        String c10 = aVar.c();
        String e10 = aVar.e();
        String d10 = aVar.d();
        String h10 = aVar.h();
        int h11 = h(i11 - i10, g10, f10, h10.length(), d10.length(), c10.length(), e10.length());
        char[] cArr = new char[h11];
        int i14 = i10;
        int i15 = 0;
        int i16 = 0;
        int i17 = 0;
        while (i14 < i11) {
            if (i16 == g10) {
                cArr[i15] = '\n';
                i15++;
                i12 = 0;
                i13 = 0;
            } else if (i17 == f10) {
                i15 = r(h10, cArr, i15);
                i12 = i16;
                i13 = 0;
            } else {
                i12 = i16;
                i13 = i17;
            }
            if (i13 != 0) {
                i15 = r(d10, cArr, i15);
            }
            String str = c10;
            int e11 = e(bArr, i14, str, e10, iArr, cArr, i15);
            i14++;
            i17 = i13 + 1;
            i15 = e11;
            c10 = str;
            i16 = i12 + 1;
        }
        if (i15 == h11) {
            return w.v(cArr);
        }
        throw new IllegalStateException("Check failed.");
    }
}
