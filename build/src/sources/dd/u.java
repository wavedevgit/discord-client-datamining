package dd;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f20679a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f20680b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20681c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f20682d;

    /* renamed from: e  reason: collision with root package name */
    public int f20683e;

    public u(int i10, int i11) {
        this.f20679a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f20682d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f20680b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f20682d;
        int length = bArr2.length;
        int i13 = this.f20683e;
        if (length < i13 + i12) {
            this.f20682d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f20682d, this.f20683e, i12);
        this.f20683e += i12;
    }

    public boolean b(int i10) {
        if (!this.f20680b) {
            return false;
        }
        this.f20683e -= i10;
        this.f20680b = false;
        this.f20681c = true;
        return true;
    }

    public boolean c() {
        return this.f20681c;
    }

    public void d() {
        this.f20680b = false;
        this.f20681c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        ne.a.g(!this.f20680b);
        if (i10 != this.f20679a) {
            z10 = false;
        }
        this.f20680b = z10;
        if (z10) {
            this.f20683e = 3;
            this.f20681c = false;
        }
    }
}
