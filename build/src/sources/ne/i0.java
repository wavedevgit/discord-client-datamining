package ne;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f40200a;

    /* renamed from: b  reason: collision with root package name */
    private int f40201b;

    /* renamed from: c  reason: collision with root package name */
    private int f40202c;

    /* renamed from: d  reason: collision with root package name */
    private int f40203d;

    public i0(byte[] bArr, int i10, int i11) {
        i(bArr, i10, i11);
    }

    private void a() {
        boolean z10;
        int i10;
        int i11 = this.f40202c;
        if (i11 >= 0 && (i11 < (i10 = this.f40201b) || (i11 == i10 && this.f40203d == 0))) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.g(z10);
    }

    private int f() {
        int i10 = 0;
        int i11 = 0;
        while (!d()) {
            i11++;
        }
        int i12 = (1 << i11) - 1;
        if (i11 > 0) {
            i10 = e(i11);
        }
        return i12 + i10;
    }

    private boolean j(int i10) {
        if (2 <= i10 && i10 < this.f40201b) {
            byte[] bArr = this.f40200a;
            if (bArr[i10] == 3 && bArr[i10 - 2] == 0 && bArr[i10 - 1] == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    public boolean b(int i10) {
        int i11 = this.f40202c;
        int i12 = i10 / 8;
        int i13 = i11 + i12;
        int i14 = (this.f40203d + i10) - (i12 * 8);
        if (i14 > 7) {
            i13++;
            i14 -= 8;
        }
        while (true) {
            i11++;
            if (i11 > i13 || i13 >= this.f40201b) {
                break;
            } else if (j(i11)) {
                i13++;
                i11 += 2;
            }
        }
        int i15 = this.f40201b;
        if (i13 < i15) {
            return true;
        }
        if (i13 == i15 && i14 == 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        boolean z10;
        int i10 = this.f40202c;
        int i11 = this.f40203d;
        int i12 = 0;
        while (this.f40202c < this.f40201b && !d()) {
            i12++;
        }
        if (this.f40202c == this.f40201b) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f40202c = i10;
        this.f40203d = i11;
        if (z10 || !b((i12 * 2) + 1)) {
            return false;
        }
        return true;
    }

    public boolean d() {
        boolean z10;
        if ((this.f40200a[this.f40202c] & (IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT >> this.f40203d)) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        k();
        return z10;
    }

    public int e(int i10) {
        int i11;
        int i12;
        this.f40203d += i10;
        int i13 = 0;
        while (true) {
            i11 = this.f40203d;
            i12 = 2;
            if (i11 <= 8) {
                break;
            }
            int i14 = i11 - 8;
            this.f40203d = i14;
            byte[] bArr = this.f40200a;
            int i15 = this.f40202c;
            i13 |= (bArr[i15] & 255) << i14;
            if (!j(i15 + 1)) {
                i12 = 1;
            }
            this.f40202c = i15 + i12;
        }
        byte[] bArr2 = this.f40200a;
        int i16 = this.f40202c;
        int i17 = ((-1) >>> (32 - i10)) & (i13 | ((bArr2[i16] & 255) >> (8 - i11)));
        if (i11 == 8) {
            this.f40203d = 0;
            if (!j(i16 + 1)) {
                i12 = 1;
            }
            this.f40202c = i16 + i12;
        }
        a();
        return i17;
    }

    public int g() {
        int i10;
        int f10 = f();
        if (f10 % 2 == 0) {
            i10 = -1;
        } else {
            i10 = 1;
        }
        return i10 * ((f10 + 1) / 2);
    }

    public int h() {
        return f();
    }

    public void i(byte[] bArr, int i10, int i11) {
        this.f40200a = bArr;
        this.f40202c = i10;
        this.f40201b = i11;
        this.f40203d = 0;
        a();
    }

    public void k() {
        int i10 = 1;
        int i11 = this.f40203d + 1;
        this.f40203d = i11;
        if (i11 == 8) {
            this.f40203d = 0;
            int i12 = this.f40202c;
            if (j(i12 + 1)) {
                i10 = 2;
            }
            this.f40202c = i12 + i10;
        }
        a();
    }

    public void l(int i10) {
        int i11 = this.f40202c;
        int i12 = i10 / 8;
        int i13 = i11 + i12;
        this.f40202c = i13;
        int i14 = this.f40203d + (i10 - (i12 * 8));
        this.f40203d = i14;
        if (i14 > 7) {
            this.f40202c = i13 + 1;
            this.f40203d = i14 - 8;
        }
        while (true) {
            i11++;
            if (i11 <= this.f40202c) {
                if (j(i11)) {
                    this.f40202c++;
                    i11 += 2;
                }
            } else {
                a();
                return;
            }
        }
    }
}
