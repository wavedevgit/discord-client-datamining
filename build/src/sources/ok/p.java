package ok;

import com.google.zxing.Result;
import java.util.Arrays;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p extends k {

    /* renamed from: d  reason: collision with root package name */
    static final int[] f44121d = {1, 1, 1};

    /* renamed from: e  reason: collision with root package name */
    static final int[] f44122e = {1, 1, 1, 1, 1};

    /* renamed from: f  reason: collision with root package name */
    static final int[] f44123f = {1, 1, 1, 1, 1, 1};

    /* renamed from: g  reason: collision with root package name */
    static final int[][] f44124g;

    /* renamed from: h  reason: collision with root package name */
    static final int[][] f44125h;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f44126a = new StringBuilder(20);

    /* renamed from: b  reason: collision with root package name */
    private final o f44127b = new o();

    /* renamed from: c  reason: collision with root package name */
    private final g f44128c = new g();

    static {
        int[][] iArr = {new int[]{3, 2, 1, 1}, new int[]{2, 2, 2, 1}, new int[]{2, 1, 2, 2}, new int[]{1, 4, 1, 1}, new int[]{1, 1, 3, 2}, new int[]{1, 2, 3, 1}, new int[]{1, 1, 1, 4}, new int[]{1, 3, 1, 2}, new int[]{1, 2, 1, 3}, new int[]{3, 1, 1, 2}};
        f44124g = iArr;
        int[][] iArr2 = new int[20];
        f44125h = iArr2;
        System.arraycopy(iArr, 0, iArr2, 0, 10);
        for (int i10 = 10; i10 < 20; i10++) {
            int[] iArr3 = f44124g[i10 - 10];
            int[] iArr4 = new int[iArr3.length];
            for (int i11 = 0; i11 < iArr3.length; i11++) {
                iArr4[i11] = iArr3[(iArr3.length - i11) - 1];
            }
            f44125h[i10] = iArr4;
        }
    }

    static boolean h(CharSequence charSequence) {
        int length = charSequence.length();
        if (length == 0) {
            return false;
        }
        int i10 = length - 1;
        if (q(charSequence.subSequence(0, i10)) != Character.digit(charSequence.charAt(i10), 10)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int i(gk.a aVar, int[] iArr, int i10, int[][] iArr2) {
        k.e(aVar, i10, iArr);
        int length = iArr2.length;
        float f10 = 0.48f;
        int i11 = -1;
        for (int i12 = 0; i12 < length; i12++) {
            float d10 = k.d(iArr, iArr2[i12], 0.7f);
            if (d10 < f10) {
                i11 = i12;
                f10 = d10;
            }
        }
        if (i11 >= 0) {
            return i11;
        }
        throw ck.k.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int[] m(gk.a aVar, int i10, boolean z10, int[] iArr) {
        return n(aVar, i10, z10, iArr, new int[iArr.length]);
    }

    private static int[] n(gk.a aVar, int i10, boolean z10, int[] iArr, int[] iArr2) {
        int j10;
        int l10 = aVar.l();
        if (z10) {
            j10 = aVar.k(i10);
        } else {
            j10 = aVar.j(i10);
        }
        int length = iArr.length;
        boolean z11 = z10;
        int i11 = 0;
        int i12 = j10;
        while (j10 < l10) {
            if (aVar.g(j10) != z11) {
                iArr2[i11] = iArr2[i11] + 1;
            } else {
                if (i11 == length - 1) {
                    if (k.d(iArr2, iArr, 0.7f) < 0.48f) {
                        return new int[]{i12, j10};
                    }
                    i12 += iArr2[0] + iArr2[1];
                    int i13 = i11 - 1;
                    System.arraycopy(iArr2, 2, iArr2, 0, i13);
                    iArr2[i13] = 0;
                    iArr2[i11] = 0;
                    i11--;
                } else {
                    i11++;
                }
                iArr2[i11] = 1;
                z11 = !z11;
            }
            j10++;
        }
        throw ck.k.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int[] o(gk.a aVar) {
        int[] iArr = new int[f44121d.length];
        int[] iArr2 = null;
        boolean z10 = false;
        int i10 = 0;
        while (!z10) {
            int[] iArr3 = f44121d;
            Arrays.fill(iArr, 0, iArr3.length, 0);
            iArr2 = n(aVar, i10, false, iArr3, iArr);
            int i11 = iArr2[0];
            int i12 = iArr2[1];
            int i13 = i11 - (i12 - i11);
            if (i13 >= 0) {
                z10 = aVar.o(i13, i11, false);
            }
            i10 = i12;
        }
        return iArr2;
    }

    static int q(CharSequence charSequence) {
        int length = charSequence.length();
        int i10 = 0;
        for (int i11 = length - 1; i11 >= 0; i11 -= 2) {
            int charAt = charSequence.charAt(i11) - '0';
            if (charAt >= 0 && charAt <= 9) {
                i10 += charAt;
            } else {
                throw ck.g.a();
            }
        }
        int i12 = i10 * 3;
        for (int i13 = length - 2; i13 >= 0; i13 -= 2) {
            int charAt2 = charSequence.charAt(i13) - '0';
            if (charAt2 >= 0 && charAt2 <= 9) {
                i12 += charAt2;
            } else {
                throw ck.g.a();
            }
        }
        return (1000 - i12) % 10;
    }

    @Override // ok.k
    public Result b(int i10, gk.a aVar, Map map) {
        return l(i10, aVar, o(aVar), map);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g(String str) {
        return h(str);
    }

    int[] j(gk.a aVar, int i10) {
        return m(aVar, i10, false, f44121d);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int k(gk.a aVar, int[] iArr, StringBuilder sb2);

    public Result l(int i10, gk.a aVar, int[] iArr, Map map) {
        int i11;
        String c10;
        if (map != null) {
            android.support.v4.media.session.b.a(map.get(ck.e.NEED_RESULT_POINT_CALLBACK));
        }
        StringBuilder sb2 = this.f44126a;
        int i12 = 0;
        sb2.setLength(0);
        int[] j10 = j(aVar, k(aVar, iArr, sb2));
        int i13 = j10[1];
        int i14 = (i13 - j10[0]) + i13;
        if (i14 < aVar.l() && aVar.o(i13, i14, false)) {
            String sb3 = sb2.toString();
            if (sb3.length() >= 8) {
                if (g(sb3)) {
                    ck.a p10 = p();
                    float f10 = i10;
                    int[] iArr2 = null;
                    Result result = new Result(sb3, null, new ck.p[]{new ck.p((iArr[1] + iArr[0]) / 2.0f, f10), new ck.p((j10[1] + j10[0]) / 2.0f, f10)}, p10);
                    try {
                        Result a10 = this.f44127b.a(i10, aVar, j10[1]);
                        result.h(ck.o.UPC_EAN_EXTENSION, a10.f());
                        result.g(a10.d());
                        result.a(a10.e());
                        i11 = a10.f().length();
                    } catch (ck.n unused) {
                        i11 = 0;
                    }
                    if (map != null) {
                        iArr2 = (int[]) map.get(ck.e.ALLOWED_EAN_EXTENSIONS);
                    }
                    if (iArr2 != null) {
                        for (int i15 : iArr2) {
                            if (i11 != i15) {
                            }
                        }
                        throw ck.k.a();
                    }
                    if ((p10 == ck.a.EAN_13 || p10 == ck.a.UPC_A) && (c10 = this.f44128c.c(sb3)) != null) {
                        result.h(ck.o.POSSIBLE_COUNTRY, c10);
                    }
                    if (p10 == ck.a.EAN_8) {
                        i12 = 4;
                    }
                    result.h(ck.o.SYMBOLOGY_IDENTIFIER, "]E" + i12);
                    return result;
                }
                throw ck.d.a();
            }
            throw ck.g.a();
        }
        throw ck.k.a();
    }

    abstract ck.a p();
}
