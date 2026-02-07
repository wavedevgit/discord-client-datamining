package ns;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.d;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c extends b {
    public static final void e(String str, int i10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (str.charAt(i10) == '-') {
            return;
        }
        throw new IllegalArgumentException(("Expected '-' (hyphen) at index " + i10 + ", but was '" + str.charAt(i10) + '\'').toString());
    }

    public static final void f(long j10, byte[] dst, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(dst, "dst");
        int i13 = 7 - i11;
        int i14 = 8 - i12;
        if (i14 > i13) {
            return;
        }
        while (true) {
            int i15 = d.i()[(int) ((j10 >> (i13 << 3)) & 255)];
            int i16 = i10 + 1;
            dst[i10] = (byte) (i15 >> 8);
            i10 += 2;
            dst[i16] = (byte) i15;
            if (i13 != i14) {
                i13--;
            } else {
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String g(String str, int i10) {
        if (str.length() <= i10) {
            return str;
        }
        StringBuilder sb2 = new StringBuilder();
        Intrinsics.checkNotNull(str, "null cannot be cast to non-null type java.lang.String");
        String substring = str.substring(0, i10);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        sb2.append(substring);
        sb2.append("...");
        return sb2.toString();
    }

    public static final a h(String hexString) {
        Intrinsics.checkNotNullParameter(hexString, "hexString");
        return a.f41198i.a(d.k(hexString, 0, 16, null, 4, null), d.k(hexString, 16, 32, null, 4, null));
    }

    public static final a i(String hexDashString) {
        Intrinsics.checkNotNullParameter(hexDashString, "hexDashString");
        long k10 = d.k(hexDashString, 0, 8, null, 4, null);
        e(hexDashString, 8);
        long k11 = d.k(hexDashString, 9, 13, null, 4, null);
        e(hexDashString, 13);
        long k12 = d.k(hexDashString, 14, 18, null, 4, null);
        e(hexDashString, 18);
        long k13 = d.k(hexDashString, 19, 23, null, 4, null);
        e(hexDashString, 23);
        long j10 = k11 << 16;
        long j11 = k13 << 48;
        return a.f41198i.a(j10 | (k10 << 32) | k12, j11 | d.k(hexDashString, 24, 36, null, 4, null));
    }
}
