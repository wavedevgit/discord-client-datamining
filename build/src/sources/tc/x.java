package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f50623a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f50624b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50625c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50626d;

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
        this.f50626d = z11;
        if (z11 && jArr2[0] > 0) {
            int i10 = length + 1;
            long[] jArr3 = new long[i10];
            this.f50623a = jArr3;
            long[] jArr4 = new long[i10];
            this.f50624b = jArr4;
            System.arraycopy(jArr, 0, jArr3, 1, length);
            System.arraycopy(jArr2, 0, jArr4, 1, length);
        } else {
            this.f50623a = jArr;
            this.f50624b = jArr2;
        }
        this.f50625c = j10;
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (!this.f50626d) {
            return new z.a(a0.f50523c);
        }
        int i10 = w0.i(this.f50624b, j10, true, true);
        a0 a0Var = new a0(this.f50624b[i10], this.f50623a[i10]);
        if (a0Var.f50524a != j10 && i10 != this.f50624b.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a0Var, new a0(this.f50624b[i11], this.f50623a[i11]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return this.f50626d;
    }

    @Override // tc.z
    public long i() {
        return this.f50625c;
    }
}
