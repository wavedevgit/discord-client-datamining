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
    private final f f7337a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7338b;

    /* renamed from: c  reason: collision with root package name */
    private final long f7339c;

    /* renamed from: d  reason: collision with root package name */
    private final i f7340d;

    /* renamed from: e  reason: collision with root package name */
    private int f7341e;

    /* renamed from: f  reason: collision with root package name */
    private long f7342f;

    /* renamed from: g  reason: collision with root package name */
    private long f7343g;

    /* renamed from: h  reason: collision with root package name */
    private long f7344h;

    /* renamed from: i  reason: collision with root package name */
    private long f7345i;

    /* renamed from: j  reason: collision with root package name */
    private long f7346j;

    /* renamed from: k  reason: collision with root package name */
    private long f7347k;

    /* renamed from: l  reason: collision with root package name */
    private long f7348l;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class b implements z {
        private b() {
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, w0.r((a.this.f7338b + BigInteger.valueOf(a.this.f7340d.c(j10)).multiply(BigInteger.valueOf(a.this.f7339c - a.this.f7338b)).divide(BigInteger.valueOf(a.this.f7342f)).longValue()) - 30000, a.this.f7338b, a.this.f7339c - 1)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return a.this.f7340d.b(a.this.f7342f);
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
        this.f7340d = iVar;
        this.f7338b = j10;
        this.f7339c = j11;
        if (j12 != j11 - j10 && !z10) {
            this.f7341e = 0;
        } else {
            this.f7342f = j13;
            this.f7341e = 4;
        }
        this.f7337a = new f();
    }

    private long i(l lVar) {
        long j10;
        if (this.f7345i == this.f7346j) {
            return -1L;
        }
        long position = lVar.getPosition();
        if (!this.f7337a.d(lVar, this.f7346j)) {
            long j11 = this.f7345i;
            if (j11 != position) {
                return j11;
            }
            throw new IOException("No ogg page can be found.");
        }
        this.f7337a.a(lVar, false);
        lVar.e();
        long j12 = this.f7344h;
        f fVar = this.f7337a;
        long j13 = fVar.f7367c;
        long j14 = j12 - j13;
        int i10 = fVar.f7372h + fVar.f7373i;
        if (0 <= j14 && j14 < 72000) {
            return -1L;
        }
        int i11 = (j14 > 0L ? 1 : (j14 == 0L ? 0 : -1));
        if (i11 < 0) {
            this.f7346j = position;
            this.f7348l = j13;
        } else {
            this.f7345i = lVar.getPosition() + i10;
            this.f7347k = this.f7337a.f7367c;
        }
        long j15 = this.f7346j;
        long j16 = this.f7345i;
        if (j15 - j16 < 100000) {
            this.f7346j = j16;
            return j16;
        }
        long j17 = i10;
        if (i11 <= 0) {
            j10 = 2;
        } else {
            j10 = 1;
        }
        long position2 = lVar.getPosition() - (j17 * j10);
        long j18 = this.f7346j;
        long j19 = this.f7345i;
        return w0.r(position2 + ((j14 * (j18 - j19)) / (this.f7348l - this.f7347k)), j19, j18 - 1);
    }

    private void k(l lVar) {
        while (true) {
            this.f7337a.c(lVar);
            this.f7337a.a(lVar, false);
            f fVar = this.f7337a;
            if (fVar.f7367c > this.f7344h) {
                lVar.e();
                return;
            }
            lVar.k(fVar.f7372h + fVar.f7373i);
            this.f7345i = lVar.getPosition();
            this.f7347k = this.f7337a.f7367c;
        }
    }

    @Override // cd.g
    public long a(l lVar) {
        int i10 = this.f7341e;
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
                    this.f7341e = 3;
                }
                k(lVar);
                this.f7341e = 4;
                return -(this.f7347k + 2);
            }
        } else {
            long position = lVar.getPosition();
            this.f7343g = position;
            this.f7341e = 1;
            long j10 = this.f7339c - 65307;
            if (j10 > position) {
                return j10;
            }
        }
        this.f7342f = j(lVar);
        this.f7341e = 4;
        return this.f7343g;
    }

    @Override // cd.g
    public void c(long j10) {
        this.f7344h = w0.r(j10, 0L, this.f7342f - 1);
        this.f7341e = 2;
        this.f7345i = this.f7338b;
        this.f7346j = this.f7339c;
        this.f7347k = 0L;
        this.f7348l = this.f7342f;
    }

    @Override // cd.g
    /* renamed from: h */
    public b b() {
        if (this.f7342f == 0) {
            return null;
        }
        return new b();
    }

    long j(l lVar) {
        this.f7337a.b();
        if (this.f7337a.c(lVar)) {
            this.f7337a.a(lVar, false);
            f fVar = this.f7337a;
            lVar.k(fVar.f7372h + fVar.f7373i);
            long j10 = this.f7337a.f7367c;
            while (true) {
                f fVar2 = this.f7337a;
                if ((fVar2.f7366b & 4) == 4 || !fVar2.c(lVar) || lVar.getPosition() >= this.f7339c || !this.f7337a.a(lVar, true)) {
                    break;
                }
                f fVar3 = this.f7337a;
                if (!n.e(lVar, fVar3.f7372h + fVar3.f7373i)) {
                    break;
                }
                j10 = this.f7337a.f7367c;
            }
            return j10;
        }
        throw new EOFException();
    }
}
