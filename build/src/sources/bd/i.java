package bd;

import oc.u;
import oe.h0;
import oe.w0;
import oe.y;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long f6496a;

    /* renamed from: b  reason: collision with root package name */
    private final int f6497b;

    /* renamed from: c  reason: collision with root package name */
    private final long f6498c;

    /* renamed from: d  reason: collision with root package name */
    private final long f6499d;

    /* renamed from: e  reason: collision with root package name */
    private final long f6500e;

    /* renamed from: f  reason: collision with root package name */
    private final long[] f6501f;

    private i(long j10, int i10, long j11) {
        this(j10, i10, j11, -1L, null);
    }

    public static i a(long j10, long j11, u.a aVar, h0 h0Var) {
        int L;
        int i10 = aVar.f40511g;
        int i11 = aVar.f40508d;
        int q10 = h0Var.q();
        if ((q10 & 1) == 1 && (L = h0Var.L()) != 0) {
            long X0 = w0.X0(L, i10 * 1000000, i11);
            if ((q10 & 6) != 6) {
                return new i(j11, aVar.f40507c, X0);
            }
            long J = h0Var.J();
            long[] jArr = new long[100];
            for (int i12 = 0; i12 < 100; i12++) {
                jArr[i12] = h0Var.H();
            }
            if (j10 != -1) {
                long j12 = j11 + J;
                if (j10 != j12) {
                    y.i("XingSeeker", "XING data size mismatch: " + j10 + ", " + j12);
                }
            }
            return new i(j11, aVar.f40507c, X0, J, jArr);
        }
        return null;
    }

    private long c(int i10) {
        return (this.f6498c * i10) / 100;
    }

    @Override // bd.g
    public long b(long j10) {
        long j11;
        double d10;
        long j12 = j10 - this.f6496a;
        if (g() && j12 > this.f6497b) {
            long[] jArr = (long[]) oe.a.i(this.f6501f);
            double d11 = (j12 * 256.0d) / this.f6499d;
            int i10 = w0.i(jArr, (long) d11, true, true);
            long c10 = c(i10);
            long j13 = jArr[i10];
            int i11 = i10 + 1;
            long c11 = c(i11);
            if (i10 == 99) {
                j11 = 256;
            } else {
                j11 = jArr[i11];
            }
            if (j13 == j11) {
                d10 = 0.0d;
            } else {
                d10 = (d11 - j13) / (j11 - j13);
            }
            return c10 + Math.round(d10 * (c11 - c10));
        }
        return 0L;
    }

    @Override // uc.z
    public z.a e(long j10) {
        double d10;
        if (!g()) {
            return new z.a(new a0(0L, this.f6496a + this.f6497b));
        }
        long r10 = w0.r(j10, 0L, this.f6498c);
        double d11 = (r10 * 100.0d) / this.f6498c;
        double d12 = 0.0d;
        if (d11 > 0.0d) {
            if (d11 >= 100.0d) {
                d12 = 256.0d;
            } else {
                int i10 = (int) d11;
                long[] jArr = (long[]) oe.a.i(this.f6501f);
                double d13 = jArr[i10];
                if (i10 == 99) {
                    d10 = 256.0d;
                } else {
                    d10 = jArr[i10 + 1];
                }
                d12 = d13 + ((d11 - i10) * (d10 - d13));
            }
        }
        return new z.a(new a0(r10, this.f6496a + w0.r(Math.round((d12 / 256.0d) * this.f6499d), this.f6497b, this.f6499d - 1)));
    }

    @Override // bd.g
    public long f() {
        return this.f6500e;
    }

    @Override // uc.z
    public boolean g() {
        if (this.f6501f != null) {
            return true;
        }
        return false;
    }

    @Override // uc.z
    public long i() {
        return this.f6498c;
    }

    private i(long j10, int i10, long j11, long j12, long[] jArr) {
        this.f6496a = j10;
        this.f6497b = i10;
        this.f6498c = j11;
        this.f6501f = jArr;
        this.f6499d = j12;
        this.f6500e = j12 != -1 ? j10 + j12 : -1L;
    }
}
