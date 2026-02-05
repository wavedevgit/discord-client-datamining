package fd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f22798a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f22799b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f22800c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f22801d;

    /* renamed from: e  reason: collision with root package name */
    private int f22802e;

    public k() {
        int[] iArr = new int[16];
        this.f22801d = iArr;
        this.f22802e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f22801d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f22798a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f22801d, 0, iArr2, i11, i10);
            this.f22798a = 0;
            this.f22799b = this.f22800c - 1;
            this.f22801d = iArr2;
            this.f22802e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f22800c == this.f22801d.length) {
            c();
        }
        int i11 = (this.f22799b + 1) & this.f22802e;
        this.f22799b = i11;
        this.f22801d[i11] = i10;
        this.f22800c++;
    }

    public void b() {
        this.f22798a = 0;
        this.f22799b = -1;
        this.f22800c = 0;
    }

    public boolean d() {
        if (this.f22800c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f22800c;
        if (i10 != 0) {
            int[] iArr = this.f22801d;
            int i11 = this.f22798a;
            int i12 = iArr[i11];
            this.f22798a = (i11 + 1) & this.f22802e;
            this.f22800c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
