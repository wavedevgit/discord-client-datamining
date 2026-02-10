package ed;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f21568a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f21569b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21570c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f21571d;

    /* renamed from: e  reason: collision with root package name */
    public int f21572e;

    public u(int i10, int i11) {
        this.f21568a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f21571d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f21569b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f21571d;
        int length = bArr2.length;
        int i13 = this.f21572e;
        if (length < i13 + i12) {
            this.f21571d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f21571d, this.f21572e, i12);
        this.f21572e += i12;
    }

    public boolean b(int i10) {
        if (!this.f21569b) {
            return false;
        }
        this.f21572e -= i10;
        this.f21569b = false;
        this.f21570c = true;
        return true;
    }

    public boolean c() {
        return this.f21570c;
    }

    public void d() {
        this.f21569b = false;
        this.f21570c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        oe.a.g(!this.f21569b);
        if (i10 != this.f21568a) {
            z10 = false;
        }
        this.f21569b = z10;
        if (z10) {
            this.f21572e = 3;
            this.f21570c = false;
        }
    }
}
