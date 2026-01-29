package gk;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    private int f26962d;

    /* renamed from: e  reason: collision with root package name */
    private int f26963e;

    /* renamed from: i  reason: collision with root package name */
    private int f26964i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f26965o;

    public b(int i10) {
        this(i10, i10);
    }

    private String a(String str, String str2, String str3) {
        String str4;
        StringBuilder sb2 = new StringBuilder(this.f26963e * (this.f26962d + 1));
        for (int i10 = 0; i10 < this.f26963e; i10++) {
            for (int i11 = 0; i11 < this.f26962d; i11++) {
                if (e(i11, i10)) {
                    str4 = str;
                } else {
                    str4 = str2;
                }
                sb2.append(str4);
            }
            sb2.append(str3);
        }
        return sb2.toString();
    }

    /* renamed from: b */
    public b clone() {
        return new b(this.f26962d, this.f26963e, this.f26964i, (int[]) this.f26965o.clone());
    }

    public void c() {
        int length = this.f26965o.length;
        for (int i10 = 0; i10 < length; i10++) {
            int[] iArr = this.f26965o;
            iArr[i10] = ~iArr[i10];
        }
    }

    public void d(int i10, int i11) {
        int i12 = (i11 * this.f26964i) + (i10 / 32);
        int[] iArr = this.f26965o;
        iArr[i12] = (1 << (i10 & 31)) ^ iArr[i12];
    }

    public boolean e(int i10, int i11) {
        if (((this.f26965o[(i11 * this.f26964i) + (i10 / 32)] >>> (i10 & 31)) & 1) != 0) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f26962d != bVar.f26962d || this.f26963e != bVar.f26963e || this.f26964i != bVar.f26964i || !Arrays.equals(this.f26965o, bVar.f26965o)) {
            return false;
        }
        return true;
    }

    public int[] f() {
        int length = this.f26965o.length - 1;
        while (length >= 0 && this.f26965o[length] == 0) {
            length--;
        }
        if (length < 0) {
            return null;
        }
        int i10 = this.f26964i;
        int i11 = length / i10;
        int i12 = (length % i10) * 32;
        int i13 = 31;
        while ((this.f26965o[length] >>> i13) == 0) {
            i13--;
        }
        return new int[]{i12 + i13, i11};
    }

    public int[] g() {
        int i10 = this.f26962d;
        int i11 = this.f26963e;
        int i12 = -1;
        int i13 = -1;
        for (int i14 = 0; i14 < this.f26963e; i14++) {
            int i15 = 0;
            while (true) {
                int i16 = this.f26964i;
                if (i15 < i16) {
                    int i17 = this.f26965o[(i16 * i14) + i15];
                    if (i17 != 0) {
                        if (i14 < i11) {
                            i11 = i14;
                        }
                        if (i14 > i13) {
                            i13 = i14;
                        }
                        int i18 = i15 * 32;
                        if (i18 < i10) {
                            int i19 = 0;
                            while ((i17 << (31 - i19)) == 0) {
                                i19++;
                            }
                            int i20 = i19 + i18;
                            if (i20 < i10) {
                                i10 = i20;
                            }
                        }
                        if (i18 + 31 > i12) {
                            int i21 = 31;
                            while ((i17 >>> i21) == 0) {
                                i21--;
                            }
                            int i22 = i18 + i21;
                            if (i22 > i12) {
                                i12 = i22;
                            }
                        }
                    }
                    i15++;
                }
            }
        }
        if (i12 >= i10 && i13 >= i11) {
            return new int[]{i10, i11, (i12 - i10) + 1, (i13 - i11) + 1};
        }
        return null;
    }

    public int hashCode() {
        int i10 = this.f26962d;
        return (((((((i10 * 31) + i10) * 31) + this.f26963e) * 31) + this.f26964i) * 31) + Arrays.hashCode(this.f26965o);
    }

    public int i() {
        return this.f26963e;
    }

    public a j(int i10, a aVar) {
        if (aVar != null && aVar.l() >= this.f26962d) {
            aVar.d();
        } else {
            aVar = new a(this.f26962d);
        }
        int i11 = i10 * this.f26964i;
        for (int i12 = 0; i12 < this.f26964i; i12++) {
            aVar.s(i12 * 32, this.f26965o[i11 + i12]);
        }
        return aVar;
    }

    public int[] k() {
        int[] iArr;
        int i10 = 0;
        int i11 = 0;
        while (true) {
            iArr = this.f26965o;
            if (i11 >= iArr.length || iArr[i11] != 0) {
                break;
            }
            i11++;
        }
        if (i11 == iArr.length) {
            return null;
        }
        int i12 = this.f26964i;
        int i13 = i11 / i12;
        int i14 = (i11 % i12) * 32;
        while ((iArr[i11] << (31 - i10)) == 0) {
            i10++;
        }
        return new int[]{i14 + i10, i13};
    }

    public int l() {
        return this.f26962d;
    }

    public void m(int i10) {
        int i11 = i10 % 360;
        if (i11 != 0) {
            if (i11 != 90) {
                if (i11 != 180) {
                    if (i11 == 270) {
                        p();
                        o();
                        return;
                    }
                    throw new IllegalArgumentException("degrees must be a multiple of 0, 90, 180, or 270");
                }
                o();
                return;
            }
            p();
        }
    }

    public void o() {
        a aVar = new a(this.f26962d);
        a aVar2 = new a(this.f26962d);
        int i10 = (this.f26963e + 1) / 2;
        for (int i11 = 0; i11 < i10; i11++) {
            aVar = j(i11, aVar);
            int i12 = (this.f26963e - 1) - i11;
            aVar2 = j(i12, aVar2);
            aVar.q();
            aVar2.q();
            s(i11, aVar2);
            s(i12, aVar);
        }
    }

    public void p() {
        int i10 = this.f26963e;
        int i11 = this.f26962d;
        int i12 = (i10 + 31) / 32;
        int[] iArr = new int[i12 * i11];
        for (int i13 = 0; i13 < this.f26963e; i13++) {
            for (int i14 = 0; i14 < this.f26962d; i14++) {
                if (((this.f26965o[(this.f26964i * i13) + (i14 / 32)] >>> (i14 & 31)) & 1) != 0) {
                    int i15 = (((i11 - 1) - i14) * i12) + (i13 / 32);
                    iArr[i15] = (1 << (i13 & 31)) | iArr[i15];
                }
            }
        }
        this.f26962d = i10;
        this.f26963e = i11;
        this.f26964i = i12;
        this.f26965o = iArr;
    }

    public void q(int i10, int i11) {
        int i12 = (i11 * this.f26964i) + (i10 / 32);
        int[] iArr = this.f26965o;
        iArr[i12] = (1 << (i10 & 31)) | iArr[i12];
    }

    public void r(int i10, int i11, int i12, int i13) {
        if (i11 >= 0 && i10 >= 0) {
            if (i13 >= 1 && i12 >= 1) {
                int i14 = i12 + i10;
                int i15 = i13 + i11;
                if (i15 <= this.f26963e && i14 <= this.f26962d) {
                    while (i11 < i15) {
                        int i16 = this.f26964i * i11;
                        for (int i17 = i10; i17 < i14; i17++) {
                            int[] iArr = this.f26965o;
                            int i18 = (i17 / 32) + i16;
                            iArr[i18] = iArr[i18] | (1 << (i17 & 31));
                        }
                        i11++;
                    }
                    return;
                }
                throw new IllegalArgumentException("The region must fit inside the matrix");
            }
            throw new IllegalArgumentException("Height and width must be at least 1");
        }
        throw new IllegalArgumentException("Left and top must be nonnegative");
    }

    public void s(int i10, a aVar) {
        int[] i11 = aVar.i();
        int[] iArr = this.f26965o;
        int i12 = this.f26964i;
        System.arraycopy(i11, 0, iArr, i10 * i12, i12);
    }

    public String t(String str, String str2) {
        return a(str, str2, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
    }

    public String toString() {
        return t("X ", "  ");
    }

    public b(int i10, int i11) {
        if (i10 >= 1 && i11 >= 1) {
            this.f26962d = i10;
            this.f26963e = i11;
            int i12 = (i10 + 31) / 32;
            this.f26964i = i12;
            this.f26965o = new int[i12 * i11];
            return;
        }
        throw new IllegalArgumentException("Both dimensions must be greater than 0");
    }

    private b(int i10, int i11, int i12, int[] iArr) {
        this.f26962d = i10;
        this.f26963e = i11;
        this.f26964i = i12;
        this.f26965o = iArr;
    }
}
