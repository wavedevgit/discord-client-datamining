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
    private b0 f21607b;

    /* renamed from: c  reason: collision with root package name */
    private m f21608c;

    /* renamed from: d  reason: collision with root package name */
    private g f21609d;

    /* renamed from: e  reason: collision with root package name */
    private long f21610e;

    /* renamed from: f  reason: collision with root package name */
    private long f21611f;

    /* renamed from: g  reason: collision with root package name */
    private long f21612g;

    /* renamed from: h  reason: collision with root package name */
    private int f21613h;

    /* renamed from: i  reason: collision with root package name */
    private int f21614i;

    /* renamed from: k  reason: collision with root package name */
    private long f21616k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21617l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f21618m;

    /* renamed from: a  reason: collision with root package name */
    private final e f21606a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f21615j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f21619a;

        /* renamed from: b  reason: collision with root package name */
        g f21620b;

        b() {
        }
    }

    private void a() {
        oe.a.i(this.f21607b);
        w0.j(this.f21608c);
    }

    private boolean i(l lVar) {
        while (this.f21606a.d(lVar)) {
            this.f21616k = lVar.getPosition() - this.f21611f;
            if (h(this.f21606a.c(), this.f21611f, this.f21615j)) {
                this.f21611f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f21613h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f21615j.f21619a;
        this.f21614i = format.K;
        if (!this.f21618m) {
            this.f21607b.c(format);
            this.f21618m = true;
        }
        g gVar = this.f21615j.f21620b;
        if (gVar != null) {
            this.f21609d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f21609d = new c();
        } else {
            f b10 = this.f21606a.b();
            if ((b10.f21593b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f21609d = new dd.a(this, this.f21611f, lVar.getLength(), b10.f21599h + b10.f21600i, b10.f21594c, z10);
        }
        this.f21613h = 2;
        this.f21606a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f21609d.a(lVar);
        if (a10 >= 0) {
            yVar.f51283a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f21617l) {
            this.f21608c.j((z) oe.a.i(this.f21609d.b()));
            this.f21617l = true;
        }
        if (this.f21616k <= 0 && !this.f21606a.d(lVar)) {
            this.f21613h = 3;
            return -1;
        }
        this.f21616k = 0L;
        h0 c10 = this.f21606a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f21612g;
            if (j10 + f10 >= this.f21610e) {
                long b10 = b(j10);
                this.f21607b.e(c10, c10.g());
                this.f21607b.a(b10, 1, c10.g(), 0, null);
                this.f21610e = -1L;
            }
        }
        this.f21612g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f21614i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f21614i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f21608c = mVar;
        this.f21607b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f21612g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f21613h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f21609d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f21611f);
            this.f21613h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f21615j = new b();
            this.f21611f = 0L;
            this.f21613h = 0;
        } else {
            this.f21613h = 1;
        }
        this.f21610e = -1L;
        this.f21612g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f21606a.e();
        if (j10 == 0) {
            l(!this.f21617l);
        } else if (this.f21613h != 0) {
            this.f21610e = c(j11);
            ((g) w0.j(this.f21609d)).c(this.f21610e);
            this.f21613h = 2;
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
