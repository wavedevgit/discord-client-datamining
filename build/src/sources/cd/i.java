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
    private b0 f7117b;

    /* renamed from: c  reason: collision with root package name */
    private m f7118c;

    /* renamed from: d  reason: collision with root package name */
    private g f7119d;

    /* renamed from: e  reason: collision with root package name */
    private long f7120e;

    /* renamed from: f  reason: collision with root package name */
    private long f7121f;

    /* renamed from: g  reason: collision with root package name */
    private long f7122g;

    /* renamed from: h  reason: collision with root package name */
    private int f7123h;

    /* renamed from: i  reason: collision with root package name */
    private int f7124i;

    /* renamed from: k  reason: collision with root package name */
    private long f7126k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f7127l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f7128m;

    /* renamed from: a  reason: collision with root package name */
    private final e f7116a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f7125j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f7129a;

        /* renamed from: b  reason: collision with root package name */
        g f7130b;

        b() {
        }
    }

    private void a() {
        ne.a.i(this.f7117b);
        w0.j(this.f7118c);
    }

    private boolean i(l lVar) {
        while (this.f7116a.d(lVar)) {
            this.f7126k = lVar.getPosition() - this.f7121f;
            if (h(this.f7116a.c(), this.f7121f, this.f7125j)) {
                this.f7121f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f7123h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f7125j.f7129a;
        this.f7124i = format.K;
        if (!this.f7128m) {
            this.f7117b.b(format);
            this.f7128m = true;
        }
        g gVar = this.f7125j.f7130b;
        if (gVar != null) {
            this.f7119d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f7119d = new c();
        } else {
            f b10 = this.f7116a.b();
            if ((b10.f7103b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f7119d = new cd.a(this, this.f7121f, lVar.getLength(), b10.f7109h + b10.f7110i, b10.f7104c, z10);
        }
        this.f7123h = 2;
        this.f7116a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f7119d.a(lVar);
        if (a10 >= 0) {
            yVar.f50001a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f7127l) {
            this.f7118c.q((z) ne.a.i(this.f7119d.b()));
            this.f7127l = true;
        }
        if (this.f7126k <= 0 && !this.f7116a.d(lVar)) {
            this.f7123h = 3;
            return -1;
        }
        this.f7126k = 0L;
        h0 c10 = this.f7116a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f7122g;
            if (j10 + f10 >= this.f7120e) {
                long b10 = b(j10);
                this.f7117b.f(c10, c10.g());
                this.f7117b.d(b10, 1, c10.g(), 0, null);
                this.f7120e = -1L;
            }
        }
        this.f7122g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f7124i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f7124i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f7118c = mVar;
        this.f7117b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f7122g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f7123h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f7119d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f7121f);
            this.f7123h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f7125j = new b();
            this.f7121f = 0L;
            this.f7123h = 0;
        } else {
            this.f7123h = 1;
        }
        this.f7120e = -1L;
        this.f7122g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f7116a.e();
        if (j10 == 0) {
            l(!this.f7127l);
        } else if (this.f7123h != 0) {
            this.f7120e = c(j11);
            ((g) w0.j(this.f7119d)).c(this.f7120e);
            this.f7123h = 2;
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
