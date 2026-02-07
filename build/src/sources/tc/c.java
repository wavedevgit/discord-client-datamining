package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50530a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f50531b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f50532c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f50533d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f50534e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50535f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f50531b = iArr;
        this.f50532c = jArr;
        this.f50533d = jArr2;
        this.f50534e = jArr3;
        int length = iArr.length;
        this.f50530a = length;
        if (length > 0) {
            this.f50535f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f50535f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f50534e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f50534e[a10], this.f50532c[a10]);
        if (a0Var.f50524a < j10 && a10 != this.f50530a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f50534e[i10], this.f50532c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f50535f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f50530a + ", sizes=" + Arrays.toString(this.f50531b) + ", offsets=" + Arrays.toString(this.f50532c) + ", timeUs=" + Arrays.toString(this.f50534e) + ", durationsUs=" + Arrays.toString(this.f50533d) + ")";
    }
}
