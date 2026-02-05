package rk;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.zxing.Result;
import java.util.Arrays;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends k {

    /* renamed from: d  reason: collision with root package name */
    static final char[] f48823d = "0123456789-$:/.+ABCD".toCharArray();

    /* renamed from: e  reason: collision with root package name */
    static final int[] f48824e = {3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14};

    /* renamed from: f  reason: collision with root package name */
    private static final char[] f48825f = {'A', 'B', 'C', 'D'};

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f48826a = new StringBuilder(20);

    /* renamed from: b  reason: collision with root package name */
    private int[] f48827b = new int[80];

    /* renamed from: c  reason: collision with root package name */
    private int f48828c = 0;

    static boolean g(char[] cArr, char c10) {
        if (cArr != null) {
            for (char c11 : cArr) {
                if (c11 == c10) {
                    return true;
                }
            }
        }
        return false;
    }

    private void h(int i10) {
        int[] iArr = this.f48827b;
        int i11 = this.f48828c;
        iArr[i11] = i10;
        int i12 = i11 + 1;
        this.f48828c = i12;
        if (i12 >= iArr.length) {
            int[] iArr2 = new int[i12 * 2];
            System.arraycopy(iArr, 0, iArr2, 0, i12);
            this.f48827b = iArr2;
        }
    }

    private int i() {
        for (int i10 = 1; i10 < this.f48828c; i10 += 2) {
            int k10 = k(i10);
            if (k10 != -1 && g(f48825f, f48823d[k10])) {
                int i11 = 0;
                for (int i12 = i10; i12 < i10 + 7; i12++) {
                    i11 += this.f48827b[i12];
                }
                if (i10 == 1 || this.f48827b[i10 - 1] >= i11 / 2) {
                    return i10;
                }
            }
        }
        throw fk.k.a();
    }

    private void j(jk.a aVar) {
        int i10 = 0;
        this.f48828c = 0;
        int k10 = aVar.k(0);
        int l10 = aVar.l();
        if (k10 < l10) {
            boolean z10 = true;
            while (k10 < l10) {
                if (aVar.g(k10) != z10) {
                    i10++;
                } else {
                    h(i10);
                    z10 = !z10;
                    i10 = 1;
                }
                k10++;
            }
            h(i10);
            return;
        }
        throw fk.k.a();
    }

    private int k(int i10) {
        int i11;
        int i12 = i10 + 7;
        if (i12 >= this.f48828c) {
            return -1;
        }
        int[] iArr = this.f48827b;
        int i13 = Integer.MAX_VALUE;
        int i14 = 0;
        int i15 = Integer.MAX_VALUE;
        int i16 = 0;
        for (int i17 = i10; i17 < i12; i17 += 2) {
            int i18 = iArr[i17];
            if (i18 < i15) {
                i15 = i18;
            }
            if (i18 > i16) {
                i16 = i18;
            }
        }
        int i19 = (i15 + i16) / 2;
        int i20 = 0;
        for (int i21 = i10 + 1; i21 < i12; i21 += 2) {
            int i22 = iArr[i21];
            if (i22 < i13) {
                i13 = i22;
            }
            if (i22 > i20) {
                i20 = i22;
            }
        }
        int i23 = (i13 + i20) / 2;
        int i24 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i25 = 0;
        for (int i26 = 0; i26 < 7; i26++) {
            if ((i26 & 1) == 0) {
                i11 = i19;
            } else {
                i11 = i23;
            }
            i24 >>= 1;
            if (iArr[i10 + i26] > i11) {
                i25 |= i24;
            }
        }
        while (true) {
            int[] iArr2 = f48824e;
            if (i14 >= iArr2.length) {
                return -1;
            }
            if (iArr2[i14] == i25) {
                return i14;
            }
            i14++;
        }
    }

    private void l(int i10) {
        int[] iArr = new int[4];
        iArr[0] = 0;
        iArr[1] = 0;
        iArr[2] = 0;
        iArr[3] = 0;
        int[] iArr2 = new int[4];
        iArr2[0] = 0;
        iArr2[1] = 0;
        iArr2[2] = 0;
        iArr2[3] = 0;
        int length = this.f48826a.length() - 1;
        int i11 = i10;
        int i12 = 0;
        while (true) {
            if (i12 > length) {
                break;
            }
            int i13 = f48824e[this.f48826a.charAt(i12)];
            for (int i14 = 6; i14 >= 0; i14--) {
                int i15 = (i14 & 1) + ((i13 & 1) * 2);
                iArr[i15] = iArr[i15] + this.f48827b[i11 + i14];
                iArr2[i15] = iArr2[i15] + 1;
                i13 >>= 1;
            }
            i11 += 8;
            i12++;
        }
        float[] fArr = new float[4];
        float[] fArr2 = new float[4];
        for (int i16 = 0; i16 < 2; i16++) {
            fArr2[i16] = 0.0f;
            int i17 = i16 + 2;
            int i18 = iArr[i17];
            int i19 = iArr2[i17];
            float f10 = ((iArr[i16] / iArr2[i16]) + (i18 / i19)) / 2.0f;
            fArr2[i17] = f10;
            fArr[i16] = f10;
            fArr[i17] = ((i18 * 2.0f) + 1.5f) / i19;
        }
        int i20 = i10;
        for (int i21 = 0; i21 <= length; i21++) {
            int i22 = f48824e[this.f48826a.charAt(i21)];
            for (int i23 = 6; i23 >= 0; i23--) {
                int i24 = (i23 & 1) + ((i22 & 1) * 2);
                float f11 = this.f48827b[i20 + i23];
                if (f11 >= fArr2[i24] && f11 <= fArr[i24]) {
                    i22 >>= 1;
                } else {
                    throw fk.k.a();
                }
            }
            i20 += 8;
        }
    }

    @Override // rk.k
    public Result b(int i10, jk.a aVar, Map map) {
        int i11;
        Arrays.fill(this.f48827b, 0);
        j(aVar);
        int i12 = i();
        this.f48826a.setLength(0);
        int i13 = i12;
        while (true) {
            int k10 = k(i13);
            if (k10 != -1) {
                this.f48826a.append((char) k10);
                i11 = i13 + 8;
                if ((this.f48826a.length() <= 1 || !g(f48825f, f48823d[k10])) && i11 < this.f48828c) {
                    i13 = i11;
                }
            } else {
                throw fk.k.a();
            }
        }
        int i14 = i13 + 7;
        int i15 = this.f48827b[i14];
        int i16 = 0;
        for (int i17 = -8; i17 < -1; i17++) {
            i16 += this.f48827b[i11 + i17];
        }
        if (i11 < this.f48828c && i15 < i16 / 2) {
            throw fk.k.a();
        }
        l(i12);
        for (int i18 = 0; i18 < this.f48826a.length(); i18++) {
            StringBuilder sb2 = this.f48826a;
            sb2.setCharAt(i18, f48823d[sb2.charAt(i18)]);
        }
        char charAt = this.f48826a.charAt(0);
        char[] cArr = f48825f;
        if (g(cArr, charAt)) {
            StringBuilder sb3 = this.f48826a;
            if (g(cArr, sb3.charAt(sb3.length() - 1))) {
                if (this.f48826a.length() > 3) {
                    if (map == null || !map.containsKey(fk.e.RETURN_CODABAR_START_END)) {
                        StringBuilder sb4 = this.f48826a;
                        sb4.deleteCharAt(sb4.length() - 1);
                        this.f48826a.deleteCharAt(0);
                    }
                    int i19 = 0;
                    for (int i20 = 0; i20 < i12; i20++) {
                        i19 += this.f48827b[i20];
                    }
                    float f10 = i19;
                    while (i12 < i14) {
                        i19 += this.f48827b[i12];
                        i12++;
                    }
                    float f11 = i10;
                    Result result = new Result(this.f48826a.toString(), null, new fk.p[]{new fk.p(f10, f11), new fk.p(i19, f11)}, fk.a.CODABAR);
                    result.h(fk.o.SYMBOLOGY_IDENTIFIER, "]F0");
                    return result;
                }
                throw fk.k.a();
            }
            throw fk.k.a();
        }
        throw fk.k.a();
    }
}
