package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50482a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f50483b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f50484c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f50485d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f50486e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50487f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f50483b = iArr;
        this.f50484c = jArr;
        this.f50485d = jArr2;
        this.f50486e = jArr3;
        int length = iArr.length;
        this.f50482a = length;
        if (length > 0) {
            this.f50487f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f50487f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f50486e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f50486e[a10], this.f50484c[a10]);
        if (a0Var.f50476a < j10 && a10 != this.f50482a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f50486e[i10], this.f50484c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f50487f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f50482a + ", sizes=" + Arrays.toString(this.f50483b) + ", offsets=" + Arrays.toString(this.f50484c) + ", timeUs=" + Arrays.toString(this.f50486e) + ", durationsUs=" + Arrays.toString(this.f50485d) + ")";
    }
}
