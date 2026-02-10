package bd;

import oc.u;
import oe.h0;
import oe.w0;
import oe.y;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f6598a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f6599b;

    /* renamed from: c  reason: collision with root package name */
    private final long f6600c;

    /* renamed from: d  reason: collision with root package name */
    private final long f6601d;

    private h(long[] jArr, long[] jArr2, long j10, long j11) {
        this.f6598a = jArr;
        this.f6599b = jArr2;
        this.f6600c = j10;
        this.f6601d = j11;
    }

    public static h a(long j10, long j11, u.a aVar, h0 h0Var) {
        int i10;
        int H;
        h0Var.V(10);
        int q10 = h0Var.q();
        h hVar = null;
        if (q10 <= 0) {
            return null;
        }
        int i11 = aVar.f38834d;
        long j12 = q10;
        if (i11 >= 32000) {
            i10 = 1152;
        } else {
            i10 = 576;
        }
        long X0 = w0.X0(j12, i10 * 1000000, i11);
        int N = h0Var.N();
        int N2 = h0Var.N();
        int N3 = h0Var.N();
        int i12 = 2;
        h0Var.V(2);
        long j13 = j11 + aVar.f38833c;
        long[] jArr = new long[N];
        long[] jArr2 = new long[N];
        int i13 = 0;
        long j14 = j11;
        while (i13 < N) {
            h hVar2 = hVar;
            int i14 = N2;
            long[] jArr3 = jArr;
            jArr3[i13] = (i13 * X0) / N;
            jArr2[i13] = Math.max(j14, j13);
            if (N3 != 1) {
                if (N3 != i12) {
                    if (N3 != 3) {
                        if (N3 != 4) {
                            return hVar2;
                        }
                        H = h0Var.L();
                    } else {
                        H = h0Var.K();
                    }
                } else {
                    H = h0Var.N();
                }
            } else {
                H = h0Var.H();
            }
            j14 += H * i14;
            i13++;
            hVar = hVar2;
            N2 = i14;
            jArr = jArr3;
            j13 = j13;
            i12 = 2;
        }
        long[] jArr4 = jArr;
        if (j10 != -1 && j10 != j14) {
            y.i("VbriSeeker", "VBRI data size mismatch: " + j10 + ", " + j14);
        }
        return new h(jArr4, jArr2, X0, j14);
    }

    @Override // bd.g
    public long b(long j10) {
        return this.f6598a[w0.i(this.f6599b, j10, true, true)];
    }

    @Override // uc.z
    public z.a e(long j10) {
        int i10 = w0.i(this.f6598a, j10, true, true);
        a0 a0Var = new a0(this.f6598a[i10], this.f6599b[i10]);
        if (a0Var.f50611a < j10 && i10 != this.f6598a.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a0Var, new a0(this.f6598a[i11], this.f6599b[i11]));
        }
        return new z.a(a0Var);
    }

    @Override // bd.g
    public long f() {
        return this.f6601d;
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f6600c;
    }
}
