package gd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f25484a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f25485b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f25486c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f25487d;

    /* renamed from: e  reason: collision with root package name */
    private int f25488e;

    public k() {
        int[] iArr = new int[16];
        this.f25487d = iArr;
        this.f25488e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f25487d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f25484a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f25487d, 0, iArr2, i11, i10);
            this.f25484a = 0;
            this.f25485b = this.f25486c - 1;
            this.f25487d = iArr2;
            this.f25488e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f25486c == this.f25487d.length) {
            c();
        }
        int i11 = (this.f25485b + 1) & this.f25488e;
        this.f25485b = i11;
        this.f25487d[i11] = i10;
        this.f25486c++;
    }

    public void b() {
        this.f25484a = 0;
        this.f25485b = -1;
        this.f25486c = 0;
    }

    public boolean d() {
        if (this.f25486c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f25486c;
        if (i10 != 0) {
            int[] iArr = this.f25487d;
            int i11 = this.f25484a;
            int i12 = iArr[i11];
            this.f25484a = (i11 + 1) & this.f25488e;
            this.f25486c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
