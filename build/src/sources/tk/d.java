package tk;

import com.facebook.react.views.image.ReactImageView;
import com.google.zxing.Result;
import com.withpersona.sdk2.inquiry.network.core.HttpStatusCode;
import java.util.Arrays;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends k {

    /* renamed from: c  reason: collision with root package name */
    private static final char[] f50698c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*".toCharArray();

    /* renamed from: d  reason: collision with root package name */
    static final int[] f50699d;

    /* renamed from: e  reason: collision with root package name */
    static final int f50700e;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f50701a = new StringBuilder(20);

    /* renamed from: b  reason: collision with root package name */
    private final int[] f50702b = new int[6];

    static {
        int[] iArr = {276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, HttpStatusCode.NOT_FOUND_404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS, 278, 436, 434, 428, HttpStatusCode.UNPROCESSABLE_ENTITY_422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350};
        f50699d = iArr;
        f50700e = iArr[47];
    }

    private static void g(CharSequence charSequence) {
        int length = charSequence.length();
        h(charSequence, length - 2, 20);
        h(charSequence, length - 1, 15);
    }

    private static void h(CharSequence charSequence, int i10, int i11) {
        int i12 = 0;
        int i13 = 1;
        for (int i14 = i10 - 1; i14 >= 0; i14--) {
            i12 += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*".indexOf(charSequence.charAt(i14)) * i13;
            i13++;
            if (i13 > i11) {
                i13 = 1;
            }
        }
        if (charSequence.charAt(i10) == f50698c[i12 % 47]) {
            return;
        }
        throw hk.d.a();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private static String i(CharSequence charSequence) {
        int i10;
        char c10;
        int length = charSequence.length();
        StringBuilder sb2 = new StringBuilder(length);
        int i11 = 0;
        while (i11 < length) {
            char charAt = charSequence.charAt(i11);
            if (charAt >= 'a' && charAt <= 'd') {
                if (i11 < length - 1) {
                    i11++;
                    char charAt2 = charSequence.charAt(i11);
                    switch (charAt) {
                        case 'a':
                            if (charAt2 >= 'A' && charAt2 <= 'Z') {
                                i10 = charAt2 - '@';
                                c10 = (char) i10;
                                break;
                            } else {
                                throw hk.g.a();
                            }
                        case 'b':
                            if (charAt2 >= 'A' && charAt2 <= 'E') {
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
                                        break;
                                    } else if (charAt2 == 'W') {
                                        c10 = '`';
                                        break;
                                    } else if (charAt2 >= 'X' && charAt2 <= 'Z') {
                                        c10 = 127;
                                        break;
                                    } else {
                                        throw hk.g.a();
                                    }
                                }
                                c10 = 0;
                                break;
                            }
                            c10 = (char) i10;
                            break;
                        case 'c':
                            if (charAt2 >= 'A' && charAt2 <= 'O') {
                                i10 = charAt2 - ' ';
                                c10 = (char) i10;
                                break;
                            } else if (charAt2 == 'Z') {
                                c10 = ':';
                                break;
                            } else {
                                throw hk.g.a();
                            }
                        case 'd':
                            if (charAt2 >= 'A' && charAt2 <= 'Z') {
                                i10 = charAt2 + ' ';
                                c10 = (char) i10;
                                break;
                            } else {
                                throw hk.g.a();
                            }
                        default:
                            c10 = 0;
                            break;
                    }
                    sb2.append(c10);
                } else {
                    throw hk.g.a();
                }
            } else {
                sb2.append(charAt);
            }
            i11++;
        }
        return sb2.toString();
    }

    private int[] j(lk.a aVar) {
        int l10 = aVar.l();
        int j10 = aVar.j(0);
        Arrays.fill(this.f50702b, 0);
        int[] iArr = this.f50702b;
        int length = iArr.length;
        boolean z10 = false;
        int i10 = 0;
        int i11 = j10;
        while (j10 < l10) {
            if (aVar.h(j10) != z10) {
                iArr[i10] = iArr[i10] + 1;
            } else {
                if (i10 == length - 1) {
                    if (l(iArr) == f50700e) {
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

    private static char k(int i10) {
        int i11 = 0;
        while (true) {
            int[] iArr = f50699d;
            if (i11 < iArr.length) {
                if (iArr[i11] == i10) {
                    return f50698c[i11];
                }
                i11++;
            } else {
                throw hk.k.a();
            }
        }
    }

    private static int l(int[] iArr) {
        int i10 = 0;
        for (int i11 : iArr) {
            i10 += i11;
        }
        int length = iArr.length;
        int i12 = 0;
        for (int i13 = 0; i13 < length; i13++) {
            int round = Math.round((iArr[i13] * 9.0f) / i10);
            if (round >= 1 && round <= 4) {
                if ((i13 & 1) == 0) {
                    for (int i14 = 0; i14 < round; i14++) {
                        i12 = (i12 << 1) | 1;
                    }
                } else {
                    i12 <<= round;
                }
            } else {
                return -1;
            }
        }
        return i12;
    }

    @Override // tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        int[] j10;
        int j11 = aVar.j(j(aVar)[1]);
        int l10 = aVar.l();
        int[] iArr = this.f50702b;
        Arrays.fill(iArr, 0);
        StringBuilder sb2 = this.f50701a;
        sb2.setLength(0);
        while (true) {
            k.e(aVar, j11, iArr);
            int l11 = l(iArr);
            if (l11 >= 0) {
                char k10 = k(l11);
                sb2.append(k10);
                int i11 = j11;
                for (int i12 : iArr) {
                    i11 += i12;
                }
                int j12 = aVar.j(i11);
                if (k10 == '*') {
                    sb2.deleteCharAt(sb2.length() - 1);
                    int i13 = 0;
                    for (int i14 : iArr) {
                        i13 += i14;
                    }
                    if (j12 != l10 && aVar.h(j12)) {
                        if (sb2.length() >= 2) {
                            g(sb2);
                            sb2.setLength(sb2.length() - 2);
                            float f10 = i10;
                            Result result = new Result(i(sb2), null, new hk.p[]{new hk.p((j10[1] + j10[0]) / 2.0f, f10), new hk.p(j11 + (i13 / 2.0f), f10)}, hk.a.CODE_93);
                            result.h(hk.o.SYMBOLOGY_IDENTIFIER, "]G0");
                            return result;
                        }
                        throw hk.k.a();
                    }
                    throw hk.k.a();
                }
                j11 = j12;
            } else {
                throw hk.k.a();
            }
        }
    }
}
