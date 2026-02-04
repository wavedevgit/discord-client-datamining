package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f49901a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f49902b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f49903c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f49904d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f49905e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49906f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f49902b = iArr;
        this.f49903c = jArr;
        this.f49904d = jArr2;
        this.f49905e = jArr3;
        int length = iArr.length;
        this.f49901a = length;
        if (length > 0) {
            this.f49906f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f49906f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f49905e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f49905e[a10], this.f49903c[a10]);
        if (a0Var.f49895a < j10 && a10 != this.f49901a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f49905e[i10], this.f49903c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49906f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f49901a + ", sizes=" + Arrays.toString(this.f49902b) + ", offsets=" + Arrays.toString(this.f49903c) + ", timeUs=" + Arrays.toString(this.f49905e) + ", durationsUs=" + Arrays.toString(this.f49904d) + ")";
    }
}
