package gk;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    private int f27073d;

    /* renamed from: e  reason: collision with root package name */
    private int f27074e;

    /* renamed from: i  reason: collision with root package name */
    private int f27075i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f27076o;

    public b(int i10) {
        this(i10, i10);
    }

    private String a(String str, String str2, String str3) {
        String str4;
        StringBuilder sb2 = new StringBuilder(this.f27074e * (this.f27073d + 1));
        for (int i10 = 0; i10 < this.f27074e; i10++) {
            for (int i11 = 0; i11 < this.f27073d; i11++) {
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
        return new b(this.f27073d, this.f27074e, this.f27075i, (int[]) this.f27076o.clone());
    }

    public void c() {
        int length = this.f27076o.length;
        for (int i10 = 0; i10 < length; i10++) {
            int[] iArr = this.f27076o;
            iArr[i10] = ~iArr[i10];
        }
    }

    public void d(int i10, int i11) {
        int i12 = (i11 * this.f27075i) + (i10 / 32);
        int[] iArr = this.f27076o;
        iArr[i12] = (1 << (i10 & 31)) ^ iArr[i12];
    }

    public boolean e(int i10, int i11) {
        if (((this.f27076o[(i11 * this.f27075i) + (i10 / 32)] >>> (i10 & 31)) & 1) != 0) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f27073d != bVar.f27073d || this.f27074e != bVar.f27074e || this.f27075i != bVar.f27075i || !Arrays.equals(this.f27076o, bVar.f27076o)) {
            return false;
        }
        return true;
    }

    public int[] f() {
        int length = this.f27076o.length - 1;
        while (length >= 0 && this.f27076o[length] == 0) {
            length--;
        }
        if (length < 0) {
            return null;
        }
        int i10 = this.f27075i;
        int i11 = length / i10;
        int i12 = (length % i10) * 32;
        int i13 = 31;
        while ((this.f27076o[length] >>> i13) == 0) {
            i13--;
        }
        return new int[]{i12 + i13, i11};
    }

    public int[] g() {
        int i10 = this.f27073d;
        int i11 = this.f27074e;
        int i12 = -1;
        int i13 = -1;
        for (int i14 = 0; i14 < this.f27074e; i14++) {
            int i15 = 0;
            while (true) {
                int i16 = this.f27075i;
                if (i15 < i16) {
                    int i17 = this.f27076o[(i16 * i14) + i15];
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
        int i10 = this.f27073d;
        return (((((((i10 * 31) + i10) * 31) + this.f27074e) * 31) + this.f27075i) * 31) + Arrays.hashCode(this.f27076o);
    }

    public int i() {
        return this.f27074e;
    }

    public a j(int i10, a aVar) {
        if (aVar != null && aVar.l() >= this.f27073d) {
            aVar.d();
        } else {
            aVar = new a(this.f27073d);
        }
        int i11 = i10 * this.f27075i;
        for (int i12 = 0; i12 < this.f27075i; i12++) {
            aVar.s(i12 * 32, this.f27076o[i11 + i12]);
        }
        return aVar;
    }

    public int[] k() {
        int[] iArr;
        int i10 = 0;
        int i11 = 0;
        while (true) {
            iArr = this.f27076o;
            if (i11 >= iArr.length || iArr[i11] != 0) {
                break;
            }
            i11++;
        }
        if (i11 == iArr.length) {
            return null;
        }
        int i12 = this.f27075i;
        int i13 = i11 / i12;
        int i14 = (i11 % i12) * 32;
        while ((iArr[i11] << (31 - i10)) == 0) {
            i10++;
        }
        return new int[]{i14 + i10, i13};
    }

    public int l() {
        return this.f27073d;
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
        a aVar = new a(this.f27073d);
        a aVar2 = new a(this.f27073d);
        int i10 = (this.f27074e + 1) / 2;
        for (int i11 = 0; i11 < i10; i11++) {
            aVar = j(i11, aVar);
            int i12 = (this.f27074e - 1) - i11;
            aVar2 = j(i12, aVar2);
            aVar.q();
            aVar2.q();
            s(i11, aVar2);
            s(i12, aVar);
        }
    }

    public void p() {
        int i10 = this.f27074e;
        int i11 = this.f27073d;
        int i12 = (i10 + 31) / 32;
        int[] iArr = new int[i12 * i11];
        for (int i13 = 0; i13 < this.f27074e; i13++) {
            for (int i14 = 0; i14 < this.f27073d; i14++) {
                if (((this.f27076o[(this.f27075i * i13) + (i14 / 32)] >>> (i14 & 31)) & 1) != 0) {
                    int i15 = (((i11 - 1) - i14) * i12) + (i13 / 32);
                    iArr[i15] = (1 << (i13 & 31)) | iArr[i15];
                }
            }
        }
        this.f27073d = i10;
        this.f27074e = i11;
        this.f27075i = i12;
        this.f27076o = iArr;
    }

    public void q(int i10, int i11) {
        int i12 = (i11 * this.f27075i) + (i10 / 32);
        int[] iArr = this.f27076o;
        iArr[i12] = (1 << (i10 & 31)) | iArr[i12];
    }

    public void r(int i10, int i11, int i12, int i13) {
        if (i11 >= 0 && i10 >= 0) {
            if (i13 >= 1 && i12 >= 1) {
                int i14 = i12 + i10;
                int i15 = i13 + i11;
                if (i15 <= this.f27074e && i14 <= this.f27073d) {
                    while (i11 < i15) {
                        int i16 = this.f27075i * i11;
                        for (int i17 = i10; i17 < i14; i17++) {
                            int[] iArr = this.f27076o;
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
        int[] iArr = this.f27076o;
        int i12 = this.f27075i;
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
            this.f27073d = i10;
            this.f27074e = i11;
            int i12 = (i10 + 31) / 32;
            this.f27075i = i12;
            this.f27076o = new int[i12 * i11];
            return;
        }
        throw new IllegalArgumentException("Both dimensions must be greater than 0");
    }

    private b(int i10, int i11, int i12, int[] iArr) {
        this.f27073d = i10;
        this.f27074e = i11;
        this.f27075i = i12;
        this.f27076o = iArr;
    }
}
