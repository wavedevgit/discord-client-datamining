package cd;

import java.io.EOFException;
import java.io.IOException;
import java.math.BigInteger;
import ne.w0;
import tc.a0;
import tc.l;
import tc.n;
import tc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements g {

    /* renamed from: a  reason: collision with root package name */
    private final f f7492a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7493b;

    /* renamed from: c  reason: collision with root package name */
    private final long f7494c;

    /* renamed from: d  reason: collision with root package name */
    private final i f7495d;

    /* renamed from: e  reason: collision with root package name */
    private int f7496e;

    /* renamed from: f  reason: collision with root package name */
    private long f7497f;

    /* renamed from: g  reason: collision with root package name */
    private long f7498g;

    /* renamed from: h  reason: collision with root package name */
    private long f7499h;

    /* renamed from: i  reason: collision with root package name */
    private long f7500i;

    /* renamed from: j  reason: collision with root package name */
    private long f7501j;

    /* renamed from: k  reason: collision with root package name */
    private long f7502k;

    /* renamed from: l  reason: collision with root package name */
    private long f7503l;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class b implements z {
        private b() {
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, w0.r((a.this.f7493b + BigInteger.valueOf(a.this.f7495d.c(j10)).multiply(BigInteger.valueOf(a.this.f7494c - a.this.f7493b)).divide(BigInteger.valueOf(a.this.f7497f)).longValue()) - 30000, a.this.f7493b, a.this.f7494c - 1)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return a.this.f7495d.b(a.this.f7497f);
        }
    }

    public a(i iVar, long j10, long j11, long j12, long j13, boolean z10) {
        boolean z11;
        if (j10 >= 0 && j11 > j10) {
            z11 = true;
        } else {
            z11 = false;
        }
        ne.a.a(z11);
        this.f7495d = iVar;
        this.f7493b = j10;
        this.f7494c = j11;
        if (j12 != j11 - j10 && !z10) {
            this.f7496e = 0;
        } else {
            this.f7497f = j13;
            this.f7496e = 4;
        }
        this.f7492a = new f();
    }

    private long i(l lVar) {
        long j10;
        if (this.f7500i == this.f7501j) {
            return -1L;
        }
        long position = lVar.getPosition();
        if (!this.f7492a.d(lVar, this.f7501j)) {
            long j11 = this.f7500i;
            if (j11 != position) {
                return j11;
            }
            throw new IOException("No ogg page can be found.");
        }
        this.f7492a.a(lVar, false);
        lVar.e();
        long j12 = this.f7499h;
        f fVar = this.f7492a;
        long j13 = fVar.f7522c;
        long j14 = j12 - j13;
        int i10 = fVar.f7527h + fVar.f7528i;
        if (0 <= j14 && j14 < 72000) {
            return -1L;
        }
        int i11 = (j14 > 0L ? 1 : (j14 == 0L ? 0 : -1));
        if (i11 < 0) {
            this.f7501j = position;
            this.f7503l = j13;
        } else {
            this.f7500i = lVar.getPosition() + i10;
            this.f7502k = this.f7492a.f7522c;
        }
        long j15 = this.f7501j;
        long j16 = this.f7500i;
        if (j15 - j16 < 100000) {
            this.f7501j = j16;
            return j16;
        }
        long j17 = i10;
        if (i11 <= 0) {
            j10 = 2;
        } else {
            j10 = 1;
        }
        long position2 = lVar.getPosition() - (j17 * j10);
        long j18 = this.f7501j;
        long j19 = this.f7500i;
        return w0.r(position2 + ((j14 * (j18 - j19)) / (this.f7503l - this.f7502k)), j19, j18 - 1);
    }

    private void k(l lVar) {
        while (true) {
            this.f7492a.c(lVar);
            this.f7492a.a(lVar, false);
            f fVar = this.f7492a;
            if (fVar.f7522c > this.f7499h) {
                lVar.e();
                return;
            }
            lVar.k(fVar.f7527h + fVar.f7528i);
            this.f7500i = lVar.getPosition();
            this.f7502k = this.f7492a.f7522c;
        }
    }

    @Override // cd.g
    public long a(l lVar) {
        int i10 = this.f7496e;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return -1L;
                        }
                        throw new IllegalStateException();
                    }
                } else {
                    long i11 = i(lVar);
                    if (i11 != -1) {
                        return i11;
                    }
                    this.f7496e = 3;
                }
                k(lVar);
                this.f7496e = 4;
                return -(this.f7502k + 2);
            }
        } else {
            long position = lVar.getPosition();
            this.f7498g = position;
            this.f7496e = 1;
            long j10 = this.f7494c - 65307;
            if (j10 > position) {
                return j10;
            }
        }
        this.f7497f = j(lVar);
        this.f7496e = 4;
        return this.f7498g;
    }

    @Override // cd.g
    public void c(long j10) {
        this.f7499h = w0.r(j10, 0L, this.f7497f - 1);
        this.f7496e = 2;
        this.f7500i = this.f7493b;
        this.f7501j = this.f7494c;
        this.f7502k = 0L;
        this.f7503l = this.f7497f;
    }

    @Override // cd.g
    /* renamed from: h */
    public b b() {
        if (this.f7497f == 0) {
            return null;
        }
        return new b();
    }

    long j(l lVar) {
        this.f7492a.b();
        if (this.f7492a.c(lVar)) {
            this.f7492a.a(lVar, false);
            f fVar = this.f7492a;
            lVar.k(fVar.f7527h + fVar.f7528i);
            long j10 = this.f7492a.f7522c;
            while (true) {
                f fVar2 = this.f7492a;
                if ((fVar2.f7521b & 4) == 4 || !fVar2.c(lVar) || lVar.getPosition() >= this.f7494c || !this.f7492a.a(lVar, true)) {
                    break;
                }
                f fVar3 = this.f7492a;
                if (!n.e(lVar, fVar3.f7527h + fVar3.f7528i)) {
                    break;
                }
                j10 = this.f7492a.f7522c;
            }
            return j10;
        }
        throw new EOFException();
    }
}
