package dd;

import com.google.android.exoplayer2.Format;
import oe.h0;
import oe.w0;
import uc.b0;
import uc.l;
import uc.m;
import uc.y;
import uc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {

    /* renamed from: b  reason: collision with root package name */
    private b0 f20659b;

    /* renamed from: c  reason: collision with root package name */
    private m f20660c;

    /* renamed from: d  reason: collision with root package name */
    private g f20661d;

    /* renamed from: e  reason: collision with root package name */
    private long f20662e;

    /* renamed from: f  reason: collision with root package name */
    private long f20663f;

    /* renamed from: g  reason: collision with root package name */
    private long f20664g;

    /* renamed from: h  reason: collision with root package name */
    private int f20665h;

    /* renamed from: i  reason: collision with root package name */
    private int f20666i;

    /* renamed from: k  reason: collision with root package name */
    private long f20668k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20669l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f20670m;

    /* renamed from: a  reason: collision with root package name */
    private final e f20658a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f20667j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f20671a;

        /* renamed from: b  reason: collision with root package name */
        g f20672b;

        b() {
        }
    }

    private void a() {
        oe.a.i(this.f20659b);
        w0.j(this.f20660c);
    }

    private boolean i(l lVar) {
        while (this.f20658a.d(lVar)) {
            this.f20668k = lVar.getPosition() - this.f20663f;
            if (h(this.f20658a.c(), this.f20663f, this.f20667j)) {
                this.f20663f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f20665h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f20667j.f20671a;
        this.f20666i = format.K;
        if (!this.f20670m) {
            this.f20659b.c(format);
            this.f20670m = true;
        }
        g gVar = this.f20667j.f20672b;
        if (gVar != null) {
            this.f20661d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f20661d = new c();
        } else {
            f b10 = this.f20658a.b();
            if ((b10.f20645b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f20661d = new dd.a(this, this.f20663f, lVar.getLength(), b10.f20651h + b10.f20652i, b10.f20646c, z10);
        }
        this.f20665h = 2;
        this.f20658a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f20661d.a(lVar);
        if (a10 >= 0) {
            yVar.f51535a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f20669l) {
            this.f20660c.j((z) oe.a.i(this.f20661d.b()));
            this.f20669l = true;
        }
        if (this.f20668k <= 0 && !this.f20658a.d(lVar)) {
            this.f20665h = 3;
            return -1;
        }
        this.f20668k = 0L;
        h0 c10 = this.f20658a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f20664g;
            if (j10 + f10 >= this.f20662e) {
                long b10 = b(j10);
                this.f20659b.e(c10, c10.g());
                this.f20659b.a(b10, 1, c10.g(), 0, null);
                this.f20662e = -1L;
            }
        }
        this.f20664g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f20666i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f20666i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f20660c = mVar;
        this.f20659b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f20664g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f20665h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f20661d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f20663f);
            this.f20665h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f20667j = new b();
            this.f20663f = 0L;
            this.f20665h = 0;
        } else {
            this.f20665h = 1;
        }
        this.f20662e = -1L;
        this.f20664g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f20658a.e();
        if (j10 == 0) {
            l(!this.f20669l);
        } else if (this.f20665h != 0) {
            this.f20662e = c(j11);
            ((g) w0.j(this.f20661d)).c(this.f20662e);
            this.f20665h = 2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements g {
        private c() {
        }

        @Override // dd.g
        public long a(l lVar) {
            return -1L;
        }

        @Override // dd.g
        public z b() {
            return new z.b(-9223372036854775807L);
        }

        @Override // dd.g
        public void c(long j10) {
        }
    }
}
