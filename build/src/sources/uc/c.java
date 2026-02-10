package uc;

import java.util.Arrays;
import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f51438a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f51439b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f51440c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f51441d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f51442e;

    /* renamed from: f  reason: collision with root package name */
    private final long f51443f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f51439b = iArr;
        this.f51440c = jArr;
        this.f51441d = jArr2;
        this.f51442e = jArr3;
        int length = iArr.length;
        this.f51438a = length;
        if (length > 0) {
            this.f51443f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f51443f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f51442e, j10, true, true);
    }

    @Override // uc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f51442e[a10], this.f51440c[a10]);
        if (a0Var.f51432a < j10 && a10 != this.f51438a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f51442e[i10], this.f51440c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f51443f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f51438a + ", sizes=" + Arrays.toString(this.f51439b) + ", offsets=" + Arrays.toString(this.f51440c) + ", timeUs=" + Arrays.toString(this.f51442e) + ", durationsUs=" + Arrays.toString(this.f51441d) + ")";
    }
}
