package gd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f25485a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f25486b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f25487c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f25488d;

    /* renamed from: e  reason: collision with root package name */
    private int f25489e;

    public k() {
        int[] iArr = new int[16];
        this.f25488d = iArr;
        this.f25489e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f25488d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f25485a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f25488d, 0, iArr2, i11, i10);
            this.f25485a = 0;
            this.f25486b = this.f25487c - 1;
            this.f25488d = iArr2;
            this.f25489e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f25487c == this.f25488d.length) {
            c();
        }
        int i11 = (this.f25486b + 1) & this.f25489e;
        this.f25486b = i11;
        this.f25488d[i11] = i10;
        this.f25487c++;
    }

    public void b() {
        this.f25485a = 0;
        this.f25486b = -1;
        this.f25487c = 0;
    }

    public boolean d() {
        if (this.f25487c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f25487c;
        if (i10 != 0) {
            int[] iArr = this.f25488d;
            int i11 = this.f25485a;
            int i12 = iArr[i11];
            this.f25485a = (i11 + 1) & this.f25489e;
            this.f25487c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
