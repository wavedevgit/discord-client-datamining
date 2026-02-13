package uc;

import java.util.Arrays;
import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements z {

    /* renamed from: a  reason: collision with root package name */
    public final int f51186a;

    /* renamed from: b  reason: collision with root package name */
    public final int[] f51187b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f51188c;

    /* renamed from: d  reason: collision with root package name */
    public final long[] f51189d;

    /* renamed from: e  reason: collision with root package name */
    public final long[] f51190e;

    /* renamed from: f  reason: collision with root package name */
    private final long f51191f;

    public c(int[] iArr, long[] jArr, long[] jArr2, long[] jArr3) {
        this.f51187b = iArr;
        this.f51188c = jArr;
        this.f51189d = jArr2;
        this.f51190e = jArr3;
        int length = iArr.length;
        this.f51186a = length;
        if (length > 0) {
            this.f51191f = jArr2[length - 1] + jArr3[length - 1];
        } else {
            this.f51191f = 0L;
        }
    }

    public int a(long j10) {
        return w0.i(this.f51190e, j10, true, true);
    }

    @Override // uc.z
    public z.a e(long j10) {
        int a10 = a(j10);
        a0 a0Var = new a0(this.f51190e[a10], this.f51188c[a10]);
        if (a0Var.f51180a < j10 && a10 != this.f51186a - 1) {
            int i10 = a10 + 1;
            return new z.a(a0Var, new a0(this.f51190e[i10], this.f51188c[i10]));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f51191f;
    }

    public String toString() {
        return "ChunkIndex(length=" + this.f51186a + ", sizes=" + Arrays.toString(this.f51187b) + ", offsets=" + Arrays.toString(this.f51188c) + ", timeUs=" + Arrays.toString(this.f51190e) + ", durationsUs=" + Arrays.toString(this.f51189d) + ")";
    }
}
