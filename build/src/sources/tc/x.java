package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f49498a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f49499b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49500c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49501d;

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
        this.f49501d = z11;
        if (z11 && jArr2[0] > 0) {
            int i10 = length + 1;
            long[] jArr3 = new long[i10];
            this.f49498a = jArr3;
            long[] jArr4 = new long[i10];
            this.f49499b = jArr4;
            System.arraycopy(jArr, 0, jArr3, 1, length);
            System.arraycopy(jArr2, 0, jArr4, 1, length);
        } else {
            this.f49498a = jArr;
            this.f49499b = jArr2;
        }
        this.f49500c = j10;
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (!this.f49501d) {
            return new z.a(a0.f49398c);
        }
        int i10 = w0.i(this.f49499b, j10, true, true);
        a0 a0Var = new a0(this.f49499b[i10], this.f49498a[i10]);
        if (a0Var.f49399a != j10 && i10 != this.f49499b.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a0Var, new a0(this.f49499b[i11], this.f49498a[i11]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return this.f49501d;
    }

    @Override // tc.z
    public long i() {
        return this.f49500c;
    }
}
