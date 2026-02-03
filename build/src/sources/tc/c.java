package tc;

import java.util.Arrays;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f49904a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f49905b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f49906c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f49907d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f49908e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49909f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f49905b = iArr;
        this.f49906c = jArr;
        this.f49907d = jArr2;
        this.f49908e = jArr3;
        int length = iArr.length;
        this.f49904a = length;
        if (length > 0) {
            this.f49909f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f49909f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f49908e, j10, true, true);
    }

    @Override // tc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f49908e[a10], this.f49906c[a10]);
        if (a0Var.f49898a < j10 && a10 != this.f49904a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f49908e[i10], this.f49906c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49909f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f49904a + ", sizes=" + Arrays.toString(this.f49905b) + ", offsets=" + Arrays.toString(this.f49906c) + ", timeUs=" + Arrays.toString(this.f49908e) + ", durationsUs=" + Arrays.toString(this.f49907d) + ")";
    }
}
