package fd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private int f23773a = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f23774b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f23775c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int[] f23776d;

    /* renamed from: e  reason: collision with root package name */
    private int f23777e;

    public k() {
        int[] iArr = new int[16];
        this.f23776d = iArr;
        this.f23777e = iArr.length - 1;
    }

    private void c() {
        int[] iArr = this.f23776d;
        int length = iArr.length << 1;
        if (length >= 0) {
            int[] iArr2 = new int[length];
            int length2 = iArr.length;
            int i10 = this.f23773a;
            int i11 = length2 - i10;
            System.arraycopy(iArr, i10, iArr2, 0, i11);
            System.arraycopy(this.f23776d, 0, iArr2, i11, i10);
            this.f23773a = 0;
            this.f23774b = this.f23775c - 1;
            this.f23776d = iArr2;
            this.f23777e = iArr2.length - 1;
            return;
        }
        throw new IllegalStateException();
    }

    public void a(int i10) {
        if (this.f23775c == this.f23776d.length) {
            c();
        }
        int i11 = (this.f23774b + 1) & this.f23777e;
        this.f23774b = i11;
        this.f23776d[i11] = i10;
        this.f23775c++;
    }

    public void b() {
        this.f23773a = 0;
        this.f23774b = -1;
        this.f23775c = 0;
    }

    public boolean d() {
        if (this.f23775c == 0) {
            return true;
        }
        return false;
    }

    public int e() {
        int i10 = this.f23775c;
        if (i10 != 0) {
            int[] iArr = this.f23776d;
            int i11 = this.f23773a;
            int i12 = iArr[i11];
            this.f23773a = (i11 + 1) & this.f23777e;
            this.f23775c = i10 - 1;
            return i12;
        }
        throw new NoSuchElementException();
    }
}
