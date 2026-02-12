package uc;

import java.util.Arrays;
import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50618a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f50619b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f50620c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f50621d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f50622e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50623f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f50619b = iArr;
        this.f50620c = jArr;
        this.f50621d = jArr2;
        this.f50622e = jArr3;
        int length = iArr.length;
        this.f50618a = length;
        if (length > 0) {
            this.f50623f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f50623f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f50622e, j10, true, true);
    }

    @Override // uc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f50622e[a10], this.f50620c[a10]);
        if (a0Var.f50612a < j10 && a10 != this.f50618a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f50622e[i10], this.f50620c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f50623f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f50618a + ", sizes=" + Arrays.toString(this.f50619b) + ", offsets=" + Arrays.toString(this.f50620c) + ", timeUs=" + Arrays.toString(this.f50622e) + ", durationsUs=" + Arrays.toString(this.f50621d) + ")";
    }
}
