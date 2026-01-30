package ad;

import nc.u;
import ne.h0;
import ne.w0;
import ne.y;
import tc.a0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long f508a;

    /* renamed from: b  reason: collision with root package name */
    private final int f509b;

    /* renamed from: c  reason: collision with root package name */
    private final long f510c;

    /* renamed from: d  reason: collision with root package name */
    private final long f511d;

    /* renamed from: e  reason: collision with root package name */
    private final long f512e;

    /* renamed from: f  reason: collision with root package name */
    private final long[] f513f;

    private i(long j10, int i10, long j11) {
        this(j10, i10, j11, -1L, null);
    }

    public static i a(long j10, long j11, u.a aVar, h0 h0Var) {
        int L;
        int i10 = aVar.f40095g;
        int i11 = aVar.f40092d;
        int q10 = h0Var.q();
        if ((q10 & 1) == 1 && (L = h0Var.L()) != 0) {
            long X0 = w0.X0(L, i10 * 1000000, i11);
            if ((q10 & 6) != 6) {
                return new i(j11, aVar.f40091c, X0);
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
            return new i(j11, aVar.f40091c, X0, J, jArr);
        }
        return null;
    }

    private long c(int i10) {
        return (this.f510c * i10) / 100;
    }

    @Override // ad.g
    public long b(long j10) {
        long j11;
        double d10;
        long j12 = j10 - this.f508a;
        if (h() && j12 > this.f509b) {
            long[] jArr = (long[]) ne.a.i(this.f513f);
            double d11 = (j12 * 256.0d) / this.f511d;
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

    @Override // tc.z
    public z.a e(long j10) {
        double d10;
        if (!h()) {
            return new z.a(new a0(0L, this.f508a + this.f509b));
        }
        long r10 = w0.r(j10, 0L, this.f510c);
        double d11 = (r10 * 100.0d) / this.f510c;
        double d12 = 0.0d;
        if (d11 > 0.0d) {
            if (d11 >= 100.0d) {
                d12 = 256.0d;
            } else {
                int i10 = (int) d11;
                long[] jArr = (long[]) ne.a.i(this.f513f);
                double d13 = jArr[i10];
                if (i10 == 99) {
                    d10 = 256.0d;
                } else {
                    d10 = jArr[i10 + 1];
                }
                d12 = d13 + ((d11 - i10) * (d10 - d13));
            }
        }
        return new z.a(new a0(r10, this.f508a + w0.r(Math.round((d12 / 256.0d) * this.f511d), this.f509b, this.f511d - 1)));
    }

    @Override // ad.g
    public long g() {
        return this.f512e;
    }

    @Override // tc.z
    public boolean h() {
        if (this.f513f != null) {
            return true;
        }
        return false;
    }

    @Override // tc.z
    public long i() {
        return this.f510c;
    }

    private i(long j10, int i10, long j11, long j12, long[] jArr) {
        this.f508a = j10;
        this.f509b = i10;
        this.f510c = j11;
        this.f513f = jArr;
        this.f511d = j12;
        this.f512e = j12 != -1 ? j10 + j12 : -1L;
    }
}
