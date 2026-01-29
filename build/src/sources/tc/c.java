package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f49405a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f49406b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f49407c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f49408d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f49409e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49410f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f49406b = iArr;
        this.f49407c = jArr;
        this.f49408d = jArr2;
        this.f49409e = jArr3;
        int length = iArr.length;
        this.f49405a = length;
        if (length > 0) {
            this.f49410f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f49410f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f49409e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f49409e[a10], this.f49407c[a10]);
        if (a0Var.f49399a < j10 && a10 != this.f49405a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f49409e[i10], this.f49407c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49410f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f49405a + ", sizes=" + Arrays.toString(this.f49406b) + ", offsets=" + Arrays.toString(this.f49407c) + ", timeUs=" + Arrays.toString(this.f49409e) + ", durationsUs=" + Arrays.toString(this.f49408d) + ")";
    }
}
