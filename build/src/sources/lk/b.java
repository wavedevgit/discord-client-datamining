package lk;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    private int f36353d;

    /* renamed from: e  reason: collision with root package name */
    private int f36354e;

    /* renamed from: i  reason: collision with root package name */
    private int f36355i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f36356o;

    public b(int i10) {
        this(i10, i10);
    }

    private String a(String str, String str2, String str3) {
        String str4;
        StringBuilder sb2 = new StringBuilder(this.f36354e * (this.f36353d + 1));
        for (int i10 = 0; i10 < this.f36354e; i10++) {
            for (int i11 = 0; i11 < this.f36353d; i11++) {
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
        return new b(this.f36353d, this.f36354e, this.f36355i, (int[]) this.f36356o.clone());
    }

    public void c() {
        int length = this.f36356o.length;
        for (int i10 = 0; i10 < length; i10++) {
            int[] iArr = this.f36356o;
            iArr[i10] = ~iArr[i10];
        }
    }

    public void d(int i10, int i11) {
        int i12 = (i11 * this.f36355i) + (i10 / 32);
        int[] iArr = this.f36356o;
        iArr[i12] = (1 << (i10 & 31)) ^ iArr[i12];
    }

    public boolean e(int i10, int i11) {
        if (((this.f36356o[(i11 * this.f36355i) + (i10 / 32)] >>> (i10 & 31)) & 1) != 0) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f36353d != bVar.f36353d || this.f36354e != bVar.f36354e || this.f36355i != bVar.f36355i || !Arrays.equals(this.f36356o, bVar.f36356o)) {
            return false;
        }
        return true;
    }

    public int[] f() {
        int length = this.f36356o.length - 1;
        while (length >= 0 && this.f36356o[length] == 0) {
            length--;
        }
        if (length < 0) {
            return null;
        }
        int i10 = this.f36355i;
        int i11 = length / i10;
        int i12 = (length % i10) * 32;
        int i13 = 31;
        while ((this.f36356o[length] >>> i13) == 0) {
            i13--;
        }
        return new int[]{i12 + i13, i11};
    }

    public int[] h() {
        int i10 = this.f36353d;
        int i11 = this.f36354e;
        int i12 = -1;
        int i13 = -1;
        for (int i14 = 0; i14 < this.f36354e; i14++) {
            int i15 = 0;
            while (true) {
                int i16 = this.f36355i;
                if (i15 < i16) {
                    int i17 = this.f36356o[(i16 * i14) + i15];
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
        int i10 = this.f36353d;
        return (((((((i10 * 31) + i10) * 31) + this.f36354e) * 31) + this.f36355i) * 31) + Arrays.hashCode(this.f36356o);
    }

    public int i() {
        return this.f36354e;
    }

    public a j(int i10, a aVar) {
        if (aVar != null && aVar.l() >= this.f36353d) {
            aVar.d();
        } else {
            aVar = new a(this.f36353d);
        }
        int i11 = i10 * this.f36355i;
        for (int i12 = 0; i12 < this.f36355i; i12++) {
            aVar.t(i12 * 32, this.f36356o[i11 + i12]);
        }
        return aVar;
    }

    public int[] k() {
        int[] iArr;
        int i10 = 0;
        int i11 = 0;
        while (true) {
            iArr = this.f36356o;
            if (i11 >= iArr.length || iArr[i11] != 0) {
                break;
            }
            i11++;
        }
        if (i11 == iArr.length) {
            return null;
        }
        int i12 = this.f36355i;
        int i13 = i11 / i12;
        int i14 = (i11 % i12) * 32;
        while ((iArr[i11] << (31 - i10)) == 0) {
            i10++;
        }
        return new int[]{i14 + i10, i13};
    }

    public int l() {
        return this.f36353d;
    }

    public void m(int i10) {
        int i11 = i10 % 360;
        if (i11 != 0) {
            if (i11 != 90) {
                if (i11 != 180) {
                    if (i11 == 270) {
                        o();
                        n();
                        return;
                    }
                    throw new IllegalArgumentException("degrees must be a multiple of 0, 90, 180, or 270");
                }
                n();
                return;
            }
            o();
        }
    }

    public void n() {
        a aVar = new a(this.f36353d);
        a aVar2 = new a(this.f36353d);
        int i10 = (this.f36354e + 1) / 2;
        for (int i11 = 0; i11 < i10; i11++) {
            aVar = j(i11, aVar);
            int i12 = (this.f36354e - 1) - i11;
            aVar2 = j(i12, aVar2);
            aVar.q();
            aVar2.q();
            t(i11, aVar2);
            t(i12, aVar);
        }
    }

    public void o() {
        int i10 = this.f36354e;
        int i11 = this.f36353d;
        int i12 = (i10 + 31) / 32;
        int[] iArr = new int[i12 * i11];
        for (int i13 = 0; i13 < this.f36354e; i13++) {
            for (int i14 = 0; i14 < this.f36353d; i14++) {
                if (((this.f36356o[(this.f36355i * i13) + (i14 / 32)] >>> (i14 & 31)) & 1) != 0) {
                    int i15 = (((i11 - 1) - i14) * i12) + (i13 / 32);
                    iArr[i15] = (1 << (i13 & 31)) | iArr[i15];
                }
            }
        }
        this.f36353d = i10;
        this.f36354e = i11;
        this.f36355i = i12;
        this.f36356o = iArr;
    }

    public void q(int i10, int i11) {
        int i12 = (i11 * this.f36355i) + (i10 / 32);
        int[] iArr = this.f36356o;
        iArr[i12] = (1 << (i10 & 31)) | iArr[i12];
    }

    public void r(int i10, int i11, int i12, int i13) {
        if (i11 >= 0 && i10 >= 0) {
            if (i13 >= 1 && i12 >= 1) {
                int i14 = i12 + i10;
                int i15 = i13 + i11;
                if (i15 <= this.f36354e && i14 <= this.f36353d) {
                    while (i11 < i15) {
                        int i16 = this.f36355i * i11;
                        for (int i17 = i10; i17 < i14; i17++) {
                            int[] iArr = this.f36356o;
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

    public void t(int i10, a aVar) {
        int[] i11 = aVar.i();
        int[] iArr = this.f36356o;
        int i12 = this.f36355i;
        System.arraycopy(i11, 0, iArr, i10 * i12, i12);
    }

    public String toString() {
        return u("X ", "  ");
    }

    public String u(String str, String str2) {
        return a(str, str2, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
    }

    public b(int i10, int i11) {
        if (i10 >= 1 && i11 >= 1) {
            this.f36353d = i10;
            this.f36354e = i11;
            int i12 = (i10 + 31) / 32;
            this.f36355i = i12;
            this.f36356o = new int[i12 * i11];
            return;
        }
        throw new IllegalArgumentException("Both dimensions must be greater than 0");
    }

    private b(int i10, int i11, int i12, int[] iArr) {
        this.f36353d = i10;
        this.f36354e = i11;
        this.f36355i = i12;
        this.f36356o = iArr;
    }
}
