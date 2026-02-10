package gd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f24184a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f24185b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f24186c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f24187d;

    /* renamed from: e  reason: collision with root package name */
    private int f24188e;

    public k() {
        int[] iArr = new int[16];
        this.f24187d = iArr;
        this.f24188e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f24187d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f24184a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f24187d, 0, iArr2, i11, i10);
            this.f24184a = 0;
            this.f24185b = this.f24186c - 1;
            this.f24187d = iArr2;
            this.f24188e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f24186c == this.f24187d.length) {
            c();
        }
        int i11 = (this.f24185b + 1) & this.f24188e;
        this.f24185b = i11;
        this.f24187d[i11] = i10;
        this.f24186c++;
    }

    public void b() {
        this.f24184a = 0;
        this.f24185b = -1;
        this.f24186c = 0;
    }

    public boolean d() {
        if (this.f24186c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f24186c;
        if (i10 != 0) {
            int[] iArr = this.f24187d;
            int i11 = this.f24184a;
            int i12 = iArr[i11];
            this.f24184a = (i11 + 1) & this.f24188e;
            this.f24186c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
