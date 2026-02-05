package kotlin.text;

import java.util.Comparator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends StringsKt__StringNumberConversionsKt {
    public static boolean A(String str, String str2, boolean z10) {
        if (str == null) {
            if (str2 == null) {
                return true;
            }
            return false;
        } else if (!z10) {
            return str.equals(str2);
        } else {
            return str.equalsIgnoreCase(str2);
        }
    }

    public static /* synthetic */ boolean B(String str, String str2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return A(str, str2, z10);
    }

    public static Comparator C(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        Comparator CASE_INSENSITIVE_ORDER = String.CASE_INSENSITIVE_ORDER;
        Intrinsics.checkNotNullExpressionValue(CASE_INSENSITIVE_ORDER, "CASE_INSENSITIVE_ORDER");
        return CASE_INSENSITIVE_ORDER;
    }

    public static boolean D(String str, int i10, String other, int i11, int i12, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        if (!z10) {
            return str.regionMatches(i10, other, i11, i12);
        }
        return str.regionMatches(z10, i10, other, i11, i12);
    }

    public static /* synthetic */ boolean E(String str, int i10, String str2, int i11, int i12, boolean z10, int i13, Object obj) {
        if ((i13 & 16) != 0) {
            z10 = false;
        }
        return D(str, i10, str2, i11, i12, z10);
    }

    public static String F(CharSequence charSequence, int i10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (i10 >= 0) {
            if (i10 == 0) {
                return "";
            }
            int i11 = 1;
            if (i10 != 1) {
                int length = charSequence.length();
                if (length == 0) {
                    return "";
                }
                if (length != 1) {
                    StringBuilder sb2 = new StringBuilder(charSequence.length() * i10);
                    if (1 <= i10) {
                        while (true) {
                            sb2.append(charSequence);
                            if (i11 == i10) {
                                break;
                            }
                            i11++;
                        }
                    }
                    String sb3 = sb2.toString();
                    Intrinsics.checkNotNull(sb3);
                    return sb3;
                }
                char charAt = charSequence.charAt(0);
                char[] cArr = new char[i10];
                for (int i12 = 0; i12 < i10; i12++) {
                    cArr[i12] = charAt;
                }
                return new String(cArr);
            }
            return charSequence.toString();
        }
        throw new IllegalArgumentException(("Count 'n' must be non-negative, but was " + i10 + '.').toString());
    }

    public static final String G(String str, char c10, char c11, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (!z10) {
            String replace = str.replace(c10, c11);
            Intrinsics.checkNotNullExpressionValue(replace, "replace(...)");
            return replace;
        }
        StringBuilder sb2 = new StringBuilder(str.length());
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (a.c(charAt, c10, z10)) {
                charAt = c11;
            }
            sb2.append(charAt);
        }
        return sb2.toString();
    }

    public static String H(String str, String oldValue, String newValue, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(oldValue, "oldValue");
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        int i10 = 0;
        int e02 = StringsKt__StringsKt.e0(str, oldValue, 0, z10);
        if (e02 < 0) {
            return str;
        }
        int length = oldValue.length();
        int d10 = kotlin.ranges.d.d(length, 1);
        int length2 = (str.length() - length) + newValue.length();
        if (length2 >= 0) {
            StringBuilder sb2 = new StringBuilder(length2);
            do {
                sb2.append((CharSequence) str, i10, e02);
                sb2.append(newValue);
                i10 = e02 + length;
                if (e02 >= str.length()) {
                    break;
                }
                e02 = StringsKt__StringsKt.e0(str, oldValue, e02 + d10, z10);
            } while (e02 > 0);
            sb2.append((CharSequence) str, i10, str.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
            return sb3;
        }
        throw new OutOfMemoryError();
    }

    public static /* synthetic */ String I(String str, char c10, char c11, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return G(str, c10, c11, z10);
    }

    public static /* synthetic */ String J(String str, String str2, String str3, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return H(str, str2, str3, z10);
    }

    public static final String K(String str, String oldValue, String newValue, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(oldValue, "oldValue");
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        int i02 = StringsKt__StringsKt.i0(str, oldValue, 0, z10, 2, null);
        if (i02 < 0) {
            return str;
        }
        return StringsKt__StringsKt.G0(str, i02, oldValue.length() + i02, newValue).toString();
    }

    public static /* synthetic */ String L(String str, String str2, String str3, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return K(str, str2, str3, z10);
    }

    public static boolean M(String str, String prefix, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        if (!z10) {
            return str.startsWith(prefix, i10);
        }
        return D(str, i10, prefix, 0, prefix.length(), z10);
    }

    public static boolean N(String str, String prefix, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        if (!z10) {
            return str.startsWith(prefix);
        }
        return D(str, 0, prefix, 0, prefix.length(), z10);
    }

    public static /* synthetic */ boolean O(String str, String str2, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return M(str, str2, i10, z10);
    }

    public static /* synthetic */ boolean P(String str, String str2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return N(str, str2, z10);
    }

    public static String v(char[] cArr) {
        Intrinsics.checkNotNullParameter(cArr, "<this>");
        return new String(cArr);
    }

    public static String w(char[] cArr, int i10, int i11) {
        Intrinsics.checkNotNullParameter(cArr, "<this>");
        kotlin.collections.d.f32022d.a(i10, i11, cArr.length);
        return new String(cArr, i10, i11 - i10);
    }

    public static String x(byte[] bArr) {
        Intrinsics.checkNotNullParameter(bArr, "<this>");
        return new String(bArr, Charsets.UTF_8);
    }

    public static boolean y(String str, String suffix, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        if (!z10) {
            return str.endsWith(suffix);
        }
        return D(str, str.length() - suffix.length(), suffix, 0, suffix.length(), true);
    }

    public static /* synthetic */ boolean z(String str, String str2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return y(str, str2, z10);
    }
}
