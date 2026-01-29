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
    private final f f8231a;

    /* renamed from: b  reason: collision with root package name */
    private final long f8232b;

    /* renamed from: c  reason: collision with root package name */
    private final long f8233c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8234d;

    /* renamed from: e  reason: collision with root package name */
    private int f8235e;

    /* renamed from: f  reason: collision with root package name */
    private long f8236f;

    /* renamed from: g  reason: collision with root package name */
    private long f8237g;

    /* renamed from: h  reason: collision with root package name */
    private long f8238h;

    /* renamed from: i  reason: collision with root package name */
    private long f8239i;

    /* renamed from: j  reason: collision with root package name */
    private long f8240j;

    /* renamed from: k  reason: collision with root package name */
    private long f8241k;

    /* renamed from: l  reason: collision with root package name */
    private long f8242l;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class b implements z {
        private b() {
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, w0.r((a.this.f8232b + BigInteger.valueOf(a.this.f8234d.c(j10)).multiply(BigInteger.valueOf(a.this.f8233c - a.this.f8232b)).divide(BigInteger.valueOf(a.this.f8236f)).longValue()) - 30000, a.this.f8232b, a.this.f8233c - 1)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return a.this.f8234d.b(a.this.f8236f);
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
        this.f8234d = iVar;
        this.f8232b = j10;
        this.f8233c = j11;
        if (j12 != j11 - j10 && !z10) {
            this.f8235e = 0;
        } else {
            this.f8236f = j13;
            this.f8235e = 4;
        }
        this.f8231a = new f();
    }

    private long i(l lVar) {
        long j10;
        if (this.f8239i == this.f8240j) {
            return -1L;
        }
        long position = lVar.getPosition();
        if (!this.f8231a.d(lVar, this.f8240j)) {
            long j11 = this.f8239i;
            if (j11 != position) {
                return j11;
            }
            throw new IOException("No ogg page can be found.");
        }
        this.f8231a.a(lVar, false);
        lVar.e();
        long j12 = this.f8238h;
        f fVar = this.f8231a;
        long j13 = fVar.f8261c;
        long j14 = j12 - j13;
        int i10 = fVar.f8266h + fVar.f8267i;
        if (0 <= j14 && j14 < 72000) {
            return -1L;
        }
        int i11 = (j14 > 0L ? 1 : (j14 == 0L ? 0 : -1));
        if (i11 < 0) {
            this.f8240j = position;
            this.f8242l = j13;
        } else {
            this.f8239i = lVar.getPosition() + i10;
            this.f8241k = this.f8231a.f8261c;
        }
        long j15 = this.f8240j;
        long j16 = this.f8239i;
        if (j15 - j16 < 100000) {
            this.f8240j = j16;
            return j16;
        }
        long j17 = i10;
        if (i11 <= 0) {
            j10 = 2;
        } else {
            j10 = 1;
        }
        long position2 = lVar.getPosition() - (j17 * j10);
        long j18 = this.f8240j;
        long j19 = this.f8239i;
        return w0.r(position2 + ((j14 * (j18 - j19)) / (this.f8242l - this.f8241k)), j19, j18 - 1);
    }

    private void k(l lVar) {
        while (true) {
            this.f8231a.c(lVar);
            this.f8231a.a(lVar, false);
            f fVar = this.f8231a;
            if (fVar.f8261c > this.f8238h) {
                lVar.e();
                return;
            }
            lVar.k(fVar.f8266h + fVar.f8267i);
            this.f8239i = lVar.getPosition();
            this.f8241k = this.f8231a.f8261c;
        }
    }

    @Override // cd.g
    public long a(l lVar) {
        int i10 = this.f8235e;
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
                    this.f8235e = 3;
                }
                k(lVar);
                this.f8235e = 4;
                return -(this.f8241k + 2);
            }
        } else {
            long position = lVar.getPosition();
            this.f8237g = position;
            this.f8235e = 1;
            long j10 = this.f8233c - 65307;
            if (j10 > position) {
                return j10;
            }
        }
        this.f8236f = j(lVar);
        this.f8235e = 4;
        return this.f8237g;
    }

    @Override // cd.g
    public void c(long j10) {
        this.f8238h = w0.r(j10, 0L, this.f8236f - 1);
        this.f8235e = 2;
        this.f8239i = this.f8232b;
        this.f8240j = this.f8233c;
        this.f8241k = 0L;
        this.f8242l = this.f8236f;
    }

    @Override // cd.g
    /* renamed from: h */
    public b b() {
        if (this.f8236f == 0) {
            return null;
        }
        return new b();
    }

    long j(l lVar) {
        this.f8231a.b();
        if (this.f8231a.c(lVar)) {
            this.f8231a.a(lVar, false);
            f fVar = this.f8231a;
            lVar.k(fVar.f8266h + fVar.f8267i);
            long j10 = this.f8231a.f8261c;
            while (true) {
                f fVar2 = this.f8231a;
                if ((fVar2.f8260b & 4) == 4 || !fVar2.c(lVar) || lVar.getPosition() >= this.f8233c || !this.f8231a.a(lVar, true)) {
                    break;
                }
                f fVar3 = this.f8231a;
                if (!n.e(lVar, fVar3.f8266h + fVar3.f8267i)) {
                    break;
                }
                j10 = this.f8231a.f8261c;
            }
            return j10;
        }
        throw new EOFException();
    }
}
