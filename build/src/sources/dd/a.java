package dd;

import java.io.EOFException;
import java.io.IOException;
import java.math.BigInteger;
import oe.w0;
import uc.a0;
import uc.l;
import uc.n;
import uc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements g {

    /* renamed from: a  reason: collision with root package name */
    private final f f21564a;

    /* renamed from: b  reason: collision with root package name */
    private final long f21565b;

    /* renamed from: c  reason: collision with root package name */
    private final long f21566c;

    /* renamed from: d  reason: collision with root package name */
    private final i f21567d;

    /* renamed from: e  reason: collision with root package name */
    private int f21568e;

    /* renamed from: f  reason: collision with root package name */
    private long f21569f;

    /* renamed from: g  reason: collision with root package name */
    private long f21570g;

    /* renamed from: h  reason: collision with root package name */
    private long f21571h;

    /* renamed from: i  reason: collision with root package name */
    private long f21572i;

    /* renamed from: j  reason: collision with root package name */
    private long f21573j;

    /* renamed from: k  reason: collision with root package name */
    private long f21574k;

    /* renamed from: l  reason: collision with root package name */
    private long f21575l;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class b implements z {
        private b() {
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, w0.r((a.this.f21565b + BigInteger.valueOf(a.this.f21567d.c(j10)).multiply(BigInteger.valueOf(a.this.f21566c - a.this.f21565b)).divide(BigInteger.valueOf(a.this.f21569f)).longValue()) - 30000, a.this.f21565b, a.this.f21566c - 1)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return a.this.f21567d.b(a.this.f21569f);
        }
    }

    public a(i iVar, long j10, long j11, long j12, long j13, boolean z10) {
        boolean z11;
        if (j10 >= 0 && j11 > j10) {
            z11 = true;
        } else {
            z11 = false;
        }
        oe.a.a(z11);
        this.f21567d = iVar;
        this.f21565b = j10;
        this.f21566c = j11;
        if (j12 != j11 - j10 && !z10) {
            this.f21568e = 0;
        } else {
            this.f21569f = j13;
            this.f21568e = 4;
        }
        this.f21564a = new f();
    }

    private long i(l lVar) {
        long j10;
        if (this.f21572i == this.f21573j) {
            return -1L;
        }
        long position = lVar.getPosition();
        if (!this.f21564a.d(lVar, this.f21573j)) {
            long j11 = this.f21572i;
            if (j11 != position) {
                return j11;
            }
            throw new IOException("No ogg page can be found.");
        }
        this.f21564a.a(lVar, false);
        lVar.e();
        long j12 = this.f21571h;
        f fVar = this.f21564a;
        long j13 = fVar.f21594c;
        long j14 = j12 - j13;
        int i10 = fVar.f21599h + fVar.f21600i;
        if (0 <= j14 && j14 < 72000) {
            return -1L;
        }
        int i11 = (j14 > 0L ? 1 : (j14 == 0L ? 0 : -1));
        if (i11 < 0) {
            this.f21573j = position;
            this.f21575l = j13;
        } else {
            this.f21572i = lVar.getPosition() + i10;
            this.f21574k = this.f21564a.f21594c;
        }
        long j15 = this.f21573j;
        long j16 = this.f21572i;
        if (j15 - j16 < 100000) {
            this.f21573j = j16;
            return j16;
        }
        long j17 = i10;
        if (i11 <= 0) {
            j10 = 2;
        } else {
            j10 = 1;
        }
        long position2 = lVar.getPosition() - (j17 * j10);
        long j18 = this.f21573j;
        long j19 = this.f21572i;
        return w0.r(position2 + ((j14 * (j18 - j19)) / (this.f21575l - this.f21574k)), j19, j18 - 1);
    }

    private void k(l lVar) {
        while (true) {
            this.f21564a.c(lVar);
            this.f21564a.a(lVar, false);
            f fVar = this.f21564a;
            if (fVar.f21594c > this.f21571h) {
                lVar.e();
                return;
            }
            lVar.k(fVar.f21599h + fVar.f21600i);
            this.f21572i = lVar.getPosition();
            this.f21574k = this.f21564a.f21594c;
        }
    }

    @Override // dd.g
    public long a(l lVar) {
        int i10 = this.f21568e;
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
                    this.f21568e = 3;
                }
                k(lVar);
                this.f21568e = 4;
                return -(this.f21574k + 2);
            }
        } else {
            long position = lVar.getPosition();
            this.f21570g = position;
            this.f21568e = 1;
            long j10 = this.f21566c - 65307;
            if (j10 > position) {
                return j10;
            }
        }
        this.f21569f = j(lVar);
        this.f21568e = 4;
        return this.f21570g;
    }

    @Override // dd.g
    public void c(long j10) {
        this.f21571h = w0.r(j10, 0L, this.f21569f - 1);
        this.f21568e = 2;
        this.f21572i = this.f21565b;
        this.f21573j = this.f21566c;
        this.f21574k = 0L;
        this.f21575l = this.f21569f;
    }

    @Override // dd.g
    /* renamed from: h */
    public b b() {
        if (this.f21569f == 0) {
            return null;
        }
        return new b();
    }

    long j(l lVar) {
        this.f21564a.b();
        if (this.f21564a.c(lVar)) {
            this.f21564a.a(lVar, false);
            f fVar = this.f21564a;
            lVar.k(fVar.f21599h + fVar.f21600i);
            long j10 = this.f21564a.f21594c;
            while (true) {
                f fVar2 = this.f21564a;
                if ((fVar2.f21593b & 4) == 4 || !fVar2.c(lVar) || lVar.getPosition() >= this.f21566c || !this.f21564a.a(lVar, true)) {
                    break;
                }
                f fVar3 = this.f21564a;
                if (!n.e(lVar, fVar3.f21599h + fVar3.f21600i)) {
                    break;
                }
                j10 = this.f21564a.f21594c;
            }
            return j10;
        }
        throw new EOFException();
    }
}
