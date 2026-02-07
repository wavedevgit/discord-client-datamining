package cd;

import com.google.android.exoplayer2.Format;
import ne.h0;
import ne.w0;
import tc.b0;
import tc.l;
import tc.m;
import tc.y;
import tc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {

    /* renamed from: b  reason: collision with root package name */
    private b0 f7380b;

    /* renamed from: c  reason: collision with root package name */
    private m f7381c;

    /* renamed from: d  reason: collision with root package name */
    private g f7382d;

    /* renamed from: e  reason: collision with root package name */
    private long f7383e;

    /* renamed from: f  reason: collision with root package name */
    private long f7384f;

    /* renamed from: g  reason: collision with root package name */
    private long f7385g;

    /* renamed from: h  reason: collision with root package name */
    private int f7386h;

    /* renamed from: i  reason: collision with root package name */
    private int f7387i;

    /* renamed from: k  reason: collision with root package name */
    private long f7389k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f7390l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f7391m;

    /* renamed from: a  reason: collision with root package name */
    private final e f7379a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f7388j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f7392a;

        /* renamed from: b  reason: collision with root package name */
        g f7393b;

        b() {
        }
    }

    private void a() {
        ne.a.i(this.f7380b);
        w0.j(this.f7381c);
    }

    private boolean i(l lVar) {
        while (this.f7379a.d(lVar)) {
            this.f7389k = lVar.getPosition() - this.f7384f;
            if (h(this.f7379a.c(), this.f7384f, this.f7388j)) {
                this.f7384f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f7386h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f7388j.f7392a;
        this.f7387i = format.K;
        if (!this.f7391m) {
            this.f7380b.b(format);
            this.f7391m = true;
        }
        g gVar = this.f7388j.f7393b;
        if (gVar != null) {
            this.f7382d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f7382d = new c();
        } else {
            f b10 = this.f7379a.b();
            if ((b10.f7366b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f7382d = new cd.a(this, this.f7384f, lVar.getLength(), b10.f7372h + b10.f7373i, b10.f7367c, z10);
        }
        this.f7386h = 2;
        this.f7379a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f7382d.a(lVar);
        if (a10 >= 0) {
            yVar.f50627a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f7390l) {
            this.f7381c.q((z) ne.a.i(this.f7382d.b()));
            this.f7390l = true;
        }
        if (this.f7389k <= 0 && !this.f7379a.d(lVar)) {
            this.f7386h = 3;
            return -1;
        }
        this.f7389k = 0L;
        h0 c10 = this.f7379a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f7385g;
            if (j10 + f10 >= this.f7383e) {
                long b10 = b(j10);
                this.f7380b.f(c10, c10.g());
                this.f7380b.d(b10, 1, c10.g(), 0, null);
                this.f7383e = -1L;
            }
        }
        this.f7385g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f7387i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f7387i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f7381c = mVar;
        this.f7380b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f7385g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f7386h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f7382d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f7384f);
            this.f7386h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f7388j = new b();
            this.f7384f = 0L;
            this.f7386h = 0;
        } else {
            this.f7386h = 1;
        }
        this.f7383e = -1L;
        this.f7385g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f7379a.e();
        if (j10 == 0) {
            l(!this.f7390l);
        } else if (this.f7386h != 0) {
            this.f7383e = c(j11);
            ((g) w0.j(this.f7382d)).c(this.f7383e);
            this.f7386h = 2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements g {
        private c() {
        }

        @Override // cd.g
        public long a(l lVar) {
            return -1L;
        }

        @Override // cd.g
        public z b() {
            return new z.b(-9223372036854775807L);
        }

        @Override // cd.g
        public void c(long j10) {
        }
    }
}
