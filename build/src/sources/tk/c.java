package tk;

import com.facebook.react.views.text.ReactFontManager;
import com.google.zxing.Result;
import java.util.Arrays;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends k {

    /* renamed from: e  reason: collision with root package name */
    static final int[] f50693e = {52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, ReactFontManager.TypefaceStyle.NORMAL, 208, 133, 388, 196, 168, 162, 138, 42};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50694a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50695b;

    /* renamed from: c  reason: collision with root package name */
    private final StringBuilder f50696c;

    /* renamed from: d  reason: collision with root package name */
    private final int[] f50697d;

    public c() {
        this(false);
    }

    private static String g(CharSequence charSequence) {
        int i10;
        char c10;
        int length = charSequence.length();
        StringBuilder sb2 = new StringBuilder(length);
        int i11 = 0;
        while (i11 < length) {
            char charAt = charSequence.charAt(i11);
            if (charAt != '+' && charAt != '$' && charAt != '%' && charAt != '/') {
                sb2.append(charAt);
            } else {
                i11++;
                char charAt2 = charSequence.charAt(i11);
                if (charAt != '$') {
                    if (charAt != '%') {
                        if (charAt != '+') {
                            if (charAt == '/') {
                                if (charAt2 >= 'A' && charAt2 <= 'O') {
                                    i10 = charAt2 - ' ';
                                } else if (charAt2 == 'Z') {
                                    c10 = ':';
                                    sb2.append(c10);
                                } else {
                                    throw hk.g.a();
                                }
                            }
                            c10 = 0;
                            sb2.append(c10);
                        } else if (charAt2 >= 'A' && charAt2 <= 'Z') {
                            i10 = charAt2 + ' ';
                        } else {
                            throw hk.g.a();
                        }
                    } else if (charAt2 >= 'A' && charAt2 <= 'E') {
                        i10 = charAt2 - '&';
                    } else if (charAt2 >= 'F' && charAt2 <= 'J') {
                        i10 = charAt2 - 11;
                    } else if (charAt2 >= 'K' && charAt2 <= 'O') {
                        i10 = charAt2 + 16;
                    } else if (charAt2 >= 'P' && charAt2 <= 'T') {
                        i10 = charAt2 + '+';
                    } else {
                        if (charAt2 != 'U') {
                            if (charAt2 == 'V') {
                                c10 = '@';
                            } else if (charAt2 == 'W') {
                                c10 = '`';
                            } else if (charAt2 != 'X' && charAt2 != 'Y' && charAt2 != 'Z') {
                                throw hk.g.a();
                            } else {
                                c10 = 127;
                            }
                            sb2.append(c10);
                        }
                        c10 = 0;
                        sb2.append(c10);
                    }
                } else if (charAt2 >= 'A' && charAt2 <= 'Z') {
                    i10 = charAt2 - '@';
                } else {
                    throw hk.g.a();
                }
                c10 = (char) i10;
                sb2.append(c10);
            }
            i11++;
        }
        return sb2.toString();
    }

    private static int[] h(lk.a aVar, int[] iArr) {
        int l10 = aVar.l();
        int j10 = aVar.j(0);
        int length = iArr.length;
        boolean z10 = false;
        int i10 = 0;
        int i11 = j10;
        while (j10 < l10) {
            if (aVar.h(j10) != z10) {
                iArr[i10] = iArr[i10] + 1;
            } else {
                if (i10 == length - 1) {
                    if (j(iArr) == 148 && aVar.n(Math.max(0, i11 - ((j10 - i11) / 2)), i11, false)) {
                        return new int[]{i11, j10};
                    }
                    i11 += iArr[0] + iArr[1];
                    int i12 = i10 - 1;
                    System.arraycopy(iArr, 2, iArr, 0, i12);
                    iArr[i12] = 0;
                    iArr[i10] = 0;
                    i10--;
                } else {
                    i10++;
                }
                iArr[i10] = 1;
                z10 = !z10;
            }
            j10++;
        }
        throw hk.k.a();
    }

    private static char i(int i10) {
        int i11 = 0;
        while (true) {
            int[] iArr = f50693e;
            if (i11 < iArr.length) {
                if (iArr[i11] == i10) {
                    return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%".charAt(i11);
                }
                i11++;
            } else if (i10 == 148) {
                return '*';
            } else {
                throw hk.k.a();
            }
        }
    }

    private static int j(int[] iArr) {
        int length = iArr.length;
        int i10 = 0;
        while (true) {
            int i11 = Integer.MAX_VALUE;
            for (int i12 : iArr) {
                if (i12 < i11 && i12 > i10) {
                    i11 = i12;
                }
            }
            int i13 = 0;
            int i14 = 0;
            int i15 = 0;
            for (int i16 = 0; i16 < length; i16++) {
                int i17 = iArr[i16];
                if (i17 > i11) {
                    i14 |= 1 << ((length - 1) - i16);
                    i13++;
                    i15 += i17;
                }
            }
            if (i13 == 3) {
                for (int i18 = 0; i18 < length && i13 > 0; i18++) {
                    int i19 = iArr[i18];
                    if (i19 > i11) {
                        i13--;
                        if (i19 * 2 >= i15) {
                            return -1;
                        }
                    }
                }
                return i14;
            } else if (i13 <= 3) {
                return -1;
            } else {
                i10 = i11;
            }
        }
    }

    @Override // tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        int[] h10;
        String sb2;
        int[] iArr = this.f50697d;
        Arrays.fill(iArr, 0);
        StringBuilder sb3 = this.f50696c;
        sb3.setLength(0);
        int j10 = aVar.j(h(aVar, iArr)[1]);
        int l10 = aVar.l();
        while (true) {
            k.e(aVar, j10, iArr);
            int j11 = j(iArr);
            if (j11 >= 0) {
                char i11 = i(j11);
                sb3.append(i11);
                int i12 = j10;
                for (int i13 : iArr) {
                    i12 += i13;
                }
                int j12 = aVar.j(i12);
                if (i11 == '*') {
                    sb3.setLength(sb3.length() - 1);
                    int i14 = 0;
                    for (int i15 : iArr) {
                        i14 += i15;
                    }
                    int i16 = (j12 - j10) - i14;
                    if (j12 != l10 && i16 * 2 < i14) {
                        throw hk.k.a();
                    }
                    if (this.f50694a) {
                        int length = sb3.length() - 1;
                        int i17 = 0;
                        for (int i18 = 0; i18 < length; i18++) {
                            i17 += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%".indexOf(this.f50696c.charAt(i18));
                        }
                        if (sb3.charAt(length) == "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%".charAt(i17 % 43)) {
                            sb3.setLength(length);
                        } else {
                            throw hk.d.a();
                        }
                    }
                    if (sb3.length() != 0) {
                        if (this.f50695b) {
                            sb2 = g(sb3);
                        } else {
                            sb2 = sb3.toString();
                        }
                        float f10 = i10;
                        Result result = new Result(sb2, null, new hk.p[]{new hk.p((h10[1] + h10[0]) / 2.0f, f10), new hk.p(j10 + (i14 / 2.0f), f10)}, hk.a.CODE_39);
                        result.h(hk.o.SYMBOLOGY_IDENTIFIER, "]A0");
                        return result;
                    }
                    throw hk.k.a();
                }
                j10 = j12;
            } else {
                throw hk.k.a();
            }
        }
    }

    public c(boolean z10) {
        this(z10, false);
    }

    public c(boolean z10, boolean z11) {
        this.f50694a = z10;
        this.f50695b = z11;
        this.f50696c = new StringBuilder(20);
        this.f50697d = new int[9];
    }
}
