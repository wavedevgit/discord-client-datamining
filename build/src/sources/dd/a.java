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
    private final f f20616a;

    /* renamed from: b  reason: collision with root package name */
    private final long f20617b;

    /* renamed from: c  reason: collision with root package name */
    private final long f20618c;

    /* renamed from: d  reason: collision with root package name */
    private final i f20619d;

    /* renamed from: e  reason: collision with root package name */
    private int f20620e;

    /* renamed from: f  reason: collision with root package name */
    private long f20621f;

    /* renamed from: g  reason: collision with root package name */
    private long f20622g;

    /* renamed from: h  reason: collision with root package name */
    private long f20623h;

    /* renamed from: i  reason: collision with root package name */
    private long f20624i;

    /* renamed from: j  reason: collision with root package name */
    private long f20625j;

    /* renamed from: k  reason: collision with root package name */
    private long f20626k;

    /* renamed from: l  reason: collision with root package name */
    private long f20627l;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class b implements z {
        private b() {
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, w0.r((a.this.f20617b + BigInteger.valueOf(a.this.f20619d.c(j10)).multiply(BigInteger.valueOf(a.this.f20618c - a.this.f20617b)).divide(BigInteger.valueOf(a.this.f20621f)).longValue()) - 30000, a.this.f20617b, a.this.f20618c - 1)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return a.this.f20619d.b(a.this.f20621f);
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
        this.f20619d = iVar;
        this.f20617b = j10;
        this.f20618c = j11;
        if (j12 != j11 - j10 && !z10) {
            this.f20620e = 0;
        } else {
            this.f20621f = j13;
            this.f20620e = 4;
        }
        this.f20616a = new f();
    }

    private long i(l lVar) {
        long j10;
        if (this.f20624i == this.f20625j) {
            return -1L;
        }
        long position = lVar.getPosition();
        if (!this.f20616a.d(lVar, this.f20625j)) {
            long j11 = this.f20624i;
            if (j11 != position) {
                return j11;
            }
            throw new IOException("No ogg page can be found.");
        }
        this.f20616a.a(lVar, false);
        lVar.e();
        long j12 = this.f20623h;
        f fVar = this.f20616a;
        long j13 = fVar.f20646c;
        long j14 = j12 - j13;
        int i10 = fVar.f20651h + fVar.f20652i;
        if (0 <= j14 && j14 < 72000) {
            return -1L;
        }
        int i11 = (j14 > 0L ? 1 : (j14 == 0L ? 0 : -1));
        if (i11 < 0) {
            this.f20625j = position;
            this.f20627l = j13;
        } else {
            this.f20624i = lVar.getPosition() + i10;
            this.f20626k = this.f20616a.f20646c;
        }
        long j15 = this.f20625j;
        long j16 = this.f20624i;
        if (j15 - j16 < 100000) {
            this.f20625j = j16;
            return j16;
        }
        long j17 = i10;
        if (i11 <= 0) {
            j10 = 2;
        } else {
            j10 = 1;
        }
        long position2 = lVar.getPosition() - (j17 * j10);
        long j18 = this.f20625j;
        long j19 = this.f20624i;
        return w0.r(position2 + ((j14 * (j18 - j19)) / (this.f20627l - this.f20626k)), j19, j18 - 1);
    }

    private void k(l lVar) {
        while (true) {
            this.f20616a.c(lVar);
            this.f20616a.a(lVar, false);
            f fVar = this.f20616a;
            if (fVar.f20646c > this.f20623h) {
                lVar.e();
                return;
            }
            lVar.k(fVar.f20651h + fVar.f20652i);
            this.f20624i = lVar.getPosition();
            this.f20626k = this.f20616a.f20646c;
        }
    }

    @Override // dd.g
    public long a(l lVar) {
        int i10 = this.f20620e;
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
                    this.f20620e = 3;
                }
                k(lVar);
                this.f20620e = 4;
                return -(this.f20626k + 2);
            }
        } else {
            long position = lVar.getPosition();
            this.f20622g = position;
            this.f20620e = 1;
            long j10 = this.f20618c - 65307;
            if (j10 > position) {
                return j10;
            }
        }
        this.f20621f = j(lVar);
        this.f20620e = 4;
        return this.f20622g;
    }

    @Override // dd.g
    public void c(long j10) {
        this.f20623h = w0.r(j10, 0L, this.f20621f - 1);
        this.f20620e = 2;
        this.f20624i = this.f20617b;
        this.f20625j = this.f20618c;
        this.f20626k = 0L;
        this.f20627l = this.f20621f;
    }

    @Override // dd.g
    /* renamed from: h */
    public b b() {
        if (this.f20621f == 0) {
            return null;
        }
        return new b();
    }

    long j(l lVar) {
        this.f20616a.b();
        if (this.f20616a.c(lVar)) {
            this.f20616a.a(lVar, false);
            f fVar = this.f20616a;
            lVar.k(fVar.f20651h + fVar.f20652i);
            long j10 = this.f20616a.f20646c;
            while (true) {
                f fVar2 = this.f20616a;
                if ((fVar2.f20645b & 4) == 4 || !fVar2.c(lVar) || lVar.getPosition() >= this.f20618c || !this.f20616a.a(lVar, true)) {
                    break;
                }
                f fVar3 = this.f20616a;
                if (!n.e(lVar, fVar3.f20651h + fVar3.f20652i)) {
                    break;
                }
                j10 = this.f20616a.f20646c;
            }
            return j10;
        }
        throw new EOFException();
    }
}
