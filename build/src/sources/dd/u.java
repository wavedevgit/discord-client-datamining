package dd;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f20724a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f20725b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20726c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f20727d;

    /* renamed from: e  reason: collision with root package name */
    public int f20728e;

    public u(int i10, int i11) {
        this.f20724a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f20727d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f20725b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f20727d;
        int length = bArr2.length;
        int i13 = this.f20728e;
        if (length < i13 + i12) {
            this.f20727d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f20727d, this.f20728e, i12);
        this.f20728e += i12;
    }

    public boolean b(int i10) {
        if (!this.f20725b) {
            return false;
        }
        this.f20728e -= i10;
        this.f20725b = false;
        this.f20726c = true;
        return true;
    }

    public boolean c() {
        return this.f20726c;
    }

    public void d() {
        this.f20725b = false;
        this.f20726c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        ne.a.g(!this.f20725b);
        if (i10 != this.f20724a) {
            z10 = false;
        }
        this.f20725b = z10;
        if (z10) {
            this.f20728e = 3;
            this.f20726c = false;
        }
    }
}
