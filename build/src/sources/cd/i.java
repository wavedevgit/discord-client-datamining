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
    private b0 f8274b;

    /* renamed from: c  reason: collision with root package name */
    private m f8275c;

    /* renamed from: d  reason: collision with root package name */
    private g f8276d;

    /* renamed from: e  reason: collision with root package name */
    private long f8277e;

    /* renamed from: f  reason: collision with root package name */
    private long f8278f;

    /* renamed from: g  reason: collision with root package name */
    private long f8279g;

    /* renamed from: h  reason: collision with root package name */
    private int f8280h;

    /* renamed from: i  reason: collision with root package name */
    private int f8281i;

    /* renamed from: k  reason: collision with root package name */
    private long f8283k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f8284l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f8285m;

    /* renamed from: a  reason: collision with root package name */
    private final e f8273a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f8282j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f8286a;

        /* renamed from: b  reason: collision with root package name */
        g f8287b;

        b() {
        }
    }

    private void a() {
        ne.a.i(this.f8274b);
        w0.j(this.f8275c);
    }

    private boolean i(l lVar) {
        while (this.f8273a.d(lVar)) {
            this.f8283k = lVar.getPosition() - this.f8278f;
            if (h(this.f8273a.c(), this.f8278f, this.f8282j)) {
                this.f8278f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f8280h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f8282j.f8286a;
        this.f8281i = format.K;
        if (!this.f8285m) {
            this.f8274b.b(format);
            this.f8285m = true;
        }
        g gVar = this.f8282j.f8287b;
        if (gVar != null) {
            this.f8276d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f8276d = new c();
        } else {
            f b10 = this.f8273a.b();
            if ((b10.f8260b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f8276d = new cd.a(this, this.f8278f, lVar.getLength(), b10.f8266h + b10.f8267i, b10.f8261c, z10);
        }
        this.f8280h = 2;
        this.f8273a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f8276d.a(lVar);
        if (a10 >= 0) {
            yVar.f49502a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f8284l) {
            this.f8275c.q((z) ne.a.i(this.f8276d.b()));
            this.f8284l = true;
        }
        if (this.f8283k <= 0 && !this.f8273a.d(lVar)) {
            this.f8280h = 3;
            return -1;
        }
        this.f8283k = 0L;
        h0 c10 = this.f8273a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f8279g;
            if (j10 + f10 >= this.f8277e) {
                long b10 = b(j10);
                this.f8274b.f(c10, c10.g());
                this.f8274b.d(b10, 1, c10.g(), 0, null);
                this.f8277e = -1L;
            }
        }
        this.f8279g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f8281i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f8281i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f8275c = mVar;
        this.f8274b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f8279g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f8280h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f8276d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f8278f);
            this.f8280h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f8282j = new b();
            this.f8278f = 0L;
            this.f8280h = 0;
        } else {
            this.f8280h = 1;
        }
        this.f8277e = -1L;
        this.f8279g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f8273a.e();
        if (j10 == 0) {
            l(!this.f8284l);
        } else if (this.f8280h != 0) {
            this.f8277e = c(j11);
            ((g) w0.j(this.f8276d)).c(this.f8277e);
            this.f8280h = 2;
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
