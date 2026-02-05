package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50506a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f50507b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f50508c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f50509d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f50510e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50511f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f50507b = iArr;
        this.f50508c = jArr;
        this.f50509d = jArr2;
        this.f50510e = jArr3;
        int length = iArr.length;
        this.f50506a = length;
        if (length > 0) {
            this.f50511f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f50511f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f50510e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f50510e[a10], this.f50508c[a10]);
        if (a0Var.f50500a < j10 && a10 != this.f50506a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f50510e[i10], this.f50508c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f50511f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f50506a + ", sizes=" + Arrays.toString(this.f50507b) + ", offsets=" + Arrays.toString(this.f50508c) + ", timeUs=" + Arrays.toString(this.f50510e) + ", durationsUs=" + Arrays.toString(this.f50509d) + ")";
    }
}
