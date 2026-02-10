package ed;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f22735a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f22736b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22737c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f22738d;

    /* renamed from: e  reason: collision with root package name */
    public int f22739e;

    public u(int i10, int i11) {
        this.f22735a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f22738d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f22736b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f22738d;
        int length = bArr2.length;
        int i13 = this.f22739e;
        if (length < i13 + i12) {
            this.f22738d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f22738d, this.f22739e, i12);
        this.f22739e += i12;
    }

    public boolean b(int i10) {
        if (!this.f22736b) {
            return false;
        }
        this.f22739e -= i10;
        this.f22736b = false;
        this.f22737c = true;
        return true;
    }

    public boolean c() {
        return this.f22737c;
    }

    public void d() {
        this.f22736b = false;
        this.f22737c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        oe.a.g(!this.f22736b);
        if (i10 != this.f22735a) {
            z10 = false;
        }
        this.f22736b = z10;
        if (z10) {
            this.f22739e = 3;
            this.f22737c = false;
        }
    }
}
