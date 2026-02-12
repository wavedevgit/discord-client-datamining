package ed;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f22736a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f22737b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22738c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f22739d;

    /* renamed from: e  reason: collision with root package name */
    public int f22740e;

    public u(int i10, int i11) {
        this.f22736a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f22739d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f22737b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f22739d;
        int length = bArr2.length;
        int i13 = this.f22740e;
        if (length < i13 + i12) {
            this.f22739d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f22739d, this.f22740e, i12);
        this.f22740e += i12;
    }

    public boolean b(int i10) {
        if (!this.f22737b) {
            return false;
        }
        this.f22740e -= i10;
        this.f22737b = false;
        this.f22738c = true;
        return true;
    }

    public boolean c() {
        return this.f22738c;
    }

    public void d() {
        this.f22737b = false;
        this.f22738c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        oe.a.g(!this.f22737b);
        if (i10 != this.f22736a) {
            z10 = false;
        }
        this.f22737b = z10;
        if (z10) {
            this.f22740e = 3;
            this.f22738c = false;
        }
    }
}
