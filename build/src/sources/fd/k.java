package fd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f24181a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f24182b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f24183c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f24184d;

    /* renamed from: e  reason: collision with root package name */
    private int f24185e;

    public k() {
        int[] iArr = new int[16];
        this.f24184d = iArr;
        this.f24185e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f24184d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f24181a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f24184d, 0, iArr2, i11, i10);
            this.f24181a = 0;
            this.f24182b = this.f24183c - 1;
            this.f24184d = iArr2;
            this.f24185e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f24183c == this.f24184d.length) {
            c();
        }
        int i11 = (this.f24182b + 1) & this.f24185e;
        this.f24182b = i11;
        this.f24184d[i11] = i10;
        this.f24183c++;
    }

    public void b() {
        this.f24181a = 0;
        this.f24182b = -1;
        this.f24183c = 0;
    }

    public boolean d() {
        if (this.f24183c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f24183c;
        if (i10 != 0) {
            int[] iArr = this.f24184d;
            int i11 = this.f24181a;
            int i12 = iArr[i11];
            this.f24181a = (i11 + 1) & this.f24185e;
            this.f24183c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
