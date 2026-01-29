package dd;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u {

    /* renamed from: a  reason: collision with root package name */
    private final int f22073a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f22074b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22075c;

    /* renamed from: d  reason: collision with root package name */
    public byte[] f22076d;

    /* renamed from: e  reason: collision with root package name */
    public int f22077e;

    public u(int i10, int i11) {
        this.f22073a = i10;
        byte[] bArr = new byte[i11 + 3];
        this.f22076d = bArr;
        bArr[2] = 1;
    }

    public void a(byte[] bArr, int i10, int i11) {
        if (!this.f22074b) {
            return;
        }
        int i12 = i11 - i10;
        byte[] bArr2 = this.f22076d;
        int length = bArr2.length;
        int i13 = this.f22077e;
        if (length < i13 + i12) {
            this.f22076d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
        }
        System.arraycopy(bArr, i10, this.f22076d, this.f22077e, i12);
        this.f22077e += i12;
    }

    public boolean b(int i10) {
        if (!this.f22074b) {
            return false;
        }
        this.f22077e -= i10;
        this.f22074b = false;
        this.f22075c = true;
        return true;
    }

    public boolean c() {
        return this.f22075c;
    }

    public void d() {
        this.f22074b = false;
        this.f22075c = false;
    }

    public void e(int i10) {
        boolean z10 = true;
        ne.a.g(!this.f22074b);
        if (i10 != this.f22073a) {
            z10 = false;
        }
        this.f22074b = z10;
        if (z10) {
            this.f22077e = 3;
            this.f22075c = false;
        }
    }
}
