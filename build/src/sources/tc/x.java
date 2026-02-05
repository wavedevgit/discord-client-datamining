package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f50599a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f50600b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50601c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50602d;

    public x(long[] jArr, long[] jArr2, long j10) {
        boolean z10;
        boolean z11;
        if (jArr.length == jArr2.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        int length = jArr2.length;
        if (length > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f50602d = z11;
        if (z11 && jArr2[0] > 0) {
            int i10 = length + 1;
            long[] jArr3 = new long[i10];
            this.f50599a = jArr3;
            long[] jArr4 = new long[i10];
            this.f50600b = jArr4;
            System.arraycopy(jArr, 0, jArr3, 1, length);
            System.arraycopy(jArr2, 0, jArr4, 1, length);
        } else {
            this.f50599a = jArr;
            this.f50600b = jArr2;
        }
        this.f50601c = j10;
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (!this.f50602d) {
            return new z.a(a0.f50499c);
        }
        int i10 = w0.i(this.f50600b, j10, true, true);
        a0 a0Var = new a0(this.f50600b[i10], this.f50599a[i10]);
        if (a0Var.f50500a != j10 && i10 != this.f50600b.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a0Var, new a0(this.f50600b[i11], this.f50599a[i11]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return this.f50602d;
    }

    @Override // tc.z
    public long i() {
        return this.f50601c;
    }
}
