package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f49693a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f49694b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f49695c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f49696d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f49697e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49698f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f49694b = iArr;
        this.f49695c = jArr;
        this.f49696d = jArr2;
        this.f49697e = jArr3;
        int length = iArr.length;
        this.f49693a = length;
        if (length > 0) {
            this.f49698f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f49698f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f49697e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f49697e[a10], this.f49695c[a10]);
        if (a0Var.f49687a < j10 && a10 != this.f49693a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f49697e[i10], this.f49695c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49698f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f49693a + ", sizes=" + Arrays.toString(this.f49694b) + ", offsets=" + Arrays.toString(this.f49695c) + ", timeUs=" + Arrays.toString(this.f49697e) + ", durationsUs=" + Arrays.toString(this.f49696d) + ")";
    }
}
