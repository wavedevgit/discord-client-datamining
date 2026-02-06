package lk;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Cloneable {

    /* renamed from: i  reason: collision with root package name */
    private static final int[] f36302i = new int[0];

    /* renamed from: d  reason: collision with root package name */
    private int[] f36303d;

    /* renamed from: e  reason: collision with root package name */
    private int f36304e;

    public a() {
        this.f36304e = 0;
        this.f36303d = f36302i;
    }

    private void f(int i10) {
        if (i10 > this.f36303d.length * 32) {
            int[] o10 = o((int) Math.ceil(i10 / 0.75f));
            int[] iArr = this.f36303d;
            System.arraycopy(iArr, 0, o10, 0, iArr.length);
            this.f36303d = o10;
        }
    }

    private static int[] o(int i10) {
        return new int[(i10 + 31) / 32];
    }

    public void a(boolean z10) {
        f(this.f36304e + 1);
        if (z10) {
            int[] iArr = this.f36303d;
            int i10 = this.f36304e;
            int i11 = i10 / 32;
            iArr[i11] = (1 << (i10 & 31)) | iArr[i11];
        }
        this.f36304e++;
    }

    public void b(a aVar) {
        int i10 = aVar.f36304e;
        f(this.f36304e + i10);
        for (int i11 = 0; i11 < i10; i11++) {
            a(aVar.h(i11));
        }
    }

    public void c(int i10, int i11) {
        if (i11 >= 0 && i11 <= 32) {
            int i12 = this.f36304e;
            f(i12 + i11);
            for (int i13 = i11 - 1; i13 >= 0; i13--) {
                if (((1 << i13) & i10) != 0) {
                    int[] iArr = this.f36303d;
                    int i14 = i12 / 32;
                    iArr[i14] = iArr[i14] | (1 << (i12 & 31));
                }
                i12++;
            }
            this.f36304e = i12;
            return;
        }
        throw new IllegalArgumentException("Num bits must be between 0 and 32");
    }

    public void d() {
        int length = this.f36303d.length;
        for (int i10 = 0; i10 < length; i10++) {
            this.f36303d[i10] = 0;
        }
    }

    /* renamed from: e */
    public a clone() {
        return new a((int[]) this.f36303d.clone(), this.f36304e);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f36304e != aVar.f36304e || !Arrays.equals(this.f36303d, aVar.f36303d)) {
            return false;
        }
        return true;
    }

    public boolean h(int i10) {
        if (((1 << (i10 & 31)) & this.f36303d[i10 / 32]) != 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36304e * 31) + Arrays.hashCode(this.f36303d);
    }

    public int[] i() {
        return this.f36303d;
    }

    public int j(int i10) {
        int i11 = this.f36304e;
        if (i10 >= i11) {
            return i11;
        }
        int i12 = i10 / 32;
        int i13 = (-(1 << (i10 & 31))) & this.f36303d[i12];
        while (i13 == 0) {
            i12++;
            int[] iArr = this.f36303d;
            if (i12 == iArr.length) {
                return this.f36304e;
            }
            i13 = iArr[i12];
        }
        return Math.min((i12 * 32) + Integer.numberOfTrailingZeros(i13), this.f36304e);
    }

    public int k(int i10) {
        int i11 = this.f36304e;
        if (i10 >= i11) {
            return i11;
        }
        int i12 = i10 / 32;
        int i13 = (-(1 << (i10 & 31))) & (~this.f36303d[i12]);
        while (i13 == 0) {
            i12++;
            int[] iArr = this.f36303d;
            if (i12 == iArr.length) {
                return this.f36304e;
            }
            i13 = ~iArr[i12];
        }
        return Math.min((i12 * 32) + Integer.numberOfTrailingZeros(i13), this.f36304e);
    }

    public int l() {
        return this.f36304e;
    }

    public int m() {
        return (this.f36304e + 7) / 8;
    }

    public boolean n(int i10, int i11, boolean z10) {
        int i12;
        if (i11 >= i10 && i10 >= 0 && i11 <= this.f36304e) {
            if (i11 == i10) {
                return true;
            }
            int i13 = i11 - 1;
            int i14 = i10 / 32;
            int i15 = i13 / 32;
            for (int i16 = i14; i16 <= i15; i16++) {
                int i17 = 31;
                if (i16 > i14) {
                    i12 = 0;
                } else {
                    i12 = i10 & 31;
                }
                if (i16 >= i15) {
                    i17 = 31 & i13;
                }
                int i18 = (2 << i17) - (1 << i12);
                int i19 = this.f36303d[i16] & i18;
                if (!z10) {
                    i18 = 0;
                }
                if (i19 != i18) {
                    return false;
                }
            }
            return true;
        }
        throw new IllegalArgumentException();
    }

    public void q() {
        int[] iArr = new int[this.f36303d.length];
        int i10 = (this.f36304e - 1) / 32;
        int i11 = i10 + 1;
        for (int i12 = 0; i12 < i11; i12++) {
            iArr[i10 - i12] = Integer.reverse(this.f36303d[i12]);
        }
        int i13 = this.f36304e;
        int i14 = i11 * 32;
        if (i13 != i14) {
            int i15 = i14 - i13;
            int i16 = iArr[0] >>> i15;
            for (int i17 = 1; i17 < i11; i17++) {
                int i18 = iArr[i17];
                iArr[i17 - 1] = i16 | (i18 << (32 - i15));
                i16 = i18 >>> i15;
            }
            iArr[i10] = i16;
        }
        this.f36303d = iArr;
    }

    public void r(int i10) {
        int[] iArr = this.f36303d;
        int i11 = i10 / 32;
        iArr[i11] = (1 << (i10 & 31)) | iArr[i11];
    }

    public void t(int i10, int i11) {
        this.f36303d[i10 / 32] = i11;
    }

    public String toString() {
        char c10;
        int i10 = this.f36304e;
        StringBuilder sb2 = new StringBuilder(i10 + (i10 / 8) + 1);
        for (int i11 = 0; i11 < this.f36304e; i11++) {
            if ((i11 & 7) == 0) {
                sb2.append(' ');
            }
            if (h(i11)) {
                c10 = 'X';
            } else {
                c10 = '.';
            }
            sb2.append(c10);
        }
        return sb2.toString();
    }

    public void u(int i10, byte[] bArr, int i11, int i12) {
        for (int i13 = 0; i13 < i12; i13++) {
            int i14 = 0;
            for (int i15 = 0; i15 < 8; i15++) {
                if (h(i10)) {
                    i14 |= 1 << (7 - i15);
                }
                i10++;
            }
            bArr[i11 + i13] = (byte) i14;
        }
    }

    public void v(a aVar) {
        if (this.f36304e == aVar.f36304e) {
            int i10 = 0;
            while (true) {
                int[] iArr = this.f36303d;
                if (i10 < iArr.length) {
                    iArr[i10] = iArr[i10] ^ aVar.f36303d[i10];
                    i10++;
                } else {
                    return;
                }
            }
        } else {
            throw new IllegalArgumentException("Sizes don't match");
        }
    }

    public a(int i10) {
        this.f36304e = i10;
        this.f36303d = o(i10);
    }

    a(int[] iArr, int i10) {
        this.f36303d = iArr;
        this.f36304e = i10;
    }
}
