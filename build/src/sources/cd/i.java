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
    private b0 f8130b;

    /* renamed from: c  reason: collision with root package name */
    private m f8131c;

    /* renamed from: d  reason: collision with root package name */
    private g f8132d;

    /* renamed from: e  reason: collision with root package name */
    private long f8133e;

    /* renamed from: f  reason: collision with root package name */
    private long f8134f;

    /* renamed from: g  reason: collision with root package name */
    private long f8135g;

    /* renamed from: h  reason: collision with root package name */
    private int f8136h;

    /* renamed from: i  reason: collision with root package name */
    private int f8137i;

    /* renamed from: k  reason: collision with root package name */
    private long f8139k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f8140l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f8141m;

    /* renamed from: a  reason: collision with root package name */
    private final e f8129a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f8138j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f8142a;

        /* renamed from: b  reason: collision with root package name */
        g f8143b;

        b() {
        }
    }

    private void a() {
        ne.a.i(this.f8130b);
        w0.j(this.f8131c);
    }

    private boolean i(l lVar) {
        while (this.f8129a.d(lVar)) {
            this.f8139k = lVar.getPosition() - this.f8134f;
            if (h(this.f8129a.c(), this.f8134f, this.f8138j)) {
                this.f8134f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f8136h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f8138j.f8142a;
        this.f8137i = format.K;
        if (!this.f8141m) {
            this.f8130b.b(format);
            this.f8141m = true;
        }
        g gVar = this.f8138j.f8143b;
        if (gVar != null) {
            this.f8132d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f8132d = new c();
        } else {
            f b10 = this.f8129a.b();
            if ((b10.f8116b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f8132d = new cd.a(this, this.f8134f, lVar.getLength(), b10.f8122h + b10.f8123i, b10.f8117c, z10);
        }
        this.f8136h = 2;
        this.f8129a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f8132d.a(lVar);
        if (a10 >= 0) {
            yVar.f49790a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f8140l) {
            this.f8131c.q((z) ne.a.i(this.f8132d.b()));
            this.f8140l = true;
        }
        if (this.f8139k <= 0 && !this.f8129a.d(lVar)) {
            this.f8136h = 3;
            return -1;
        }
        this.f8139k = 0L;
        h0 c10 = this.f8129a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f8135g;
            if (j10 + f10 >= this.f8133e) {
                long b10 = b(j10);
                this.f8130b.f(c10, c10.g());
                this.f8130b.d(b10, 1, c10.g(), 0, null);
                this.f8133e = -1L;
            }
        }
        this.f8135g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f8137i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f8137i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f8131c = mVar;
        this.f8130b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f8135g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f8136h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f8132d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f8134f);
            this.f8136h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f8138j = new b();
            this.f8134f = 0L;
            this.f8136h = 0;
        } else {
            this.f8136h = 1;
        }
        this.f8133e = -1L;
        this.f8135g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f8129a.e();
        if (j10 == 0) {
            l(!this.f8140l);
        } else if (this.f8136h != 0) {
            this.f8133e = c(j11);
            ((g) w0.j(this.f8132d)).c(this.f8133e);
            this.f8136h = 2;
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
