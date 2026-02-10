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
    private b0 f21606b;

    /* renamed from: c  reason: collision with root package name */
    private m f21607c;

    /* renamed from: d  reason: collision with root package name */
    private g f21608d;

    /* renamed from: e  reason: collision with root package name */
    private long f21609e;

    /* renamed from: f  reason: collision with root package name */
    private long f21610f;

    /* renamed from: g  reason: collision with root package name */
    private long f21611g;

    /* renamed from: h  reason: collision with root package name */
    private int f21612h;

    /* renamed from: i  reason: collision with root package name */
    private int f21613i;

    /* renamed from: k  reason: collision with root package name */
    private long f21615k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21616l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f21617m;

    /* renamed from: a  reason: collision with root package name */
    private final e f21605a = new e();

    /* renamed from: j  reason: collision with root package name */
    private b f21614j = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        Format f21618a;

        /* renamed from: b  reason: collision with root package name */
        g f21619b;

        b() {
        }
    }

    private void a() {
        oe.a.i(this.f21606b);
        w0.j(this.f21607c);
    }

    private boolean i(l lVar) {
        while (this.f21605a.d(lVar)) {
            this.f21615k = lVar.getPosition() - this.f21610f;
            if (h(this.f21605a.c(), this.f21610f, this.f21614j)) {
                this.f21610f = lVar.getPosition();
            } else {
                return true;
            }
        }
        this.f21612h = 3;
        return false;
    }

    private int j(l lVar) {
        boolean z10;
        if (!i(lVar)) {
            return -1;
        }
        Format format = this.f21614j.f21618a;
        this.f21613i = format.K;
        if (!this.f21617m) {
            this.f21606b.c(format);
            this.f21617m = true;
        }
        g gVar = this.f21614j.f21619b;
        if (gVar != null) {
            this.f21608d = gVar;
        } else if (lVar.getLength() == -1) {
            this.f21608d = new c();
        } else {
            f b10 = this.f21605a.b();
            if ((b10.f21592b & 4) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f21608d = new dd.a(this, this.f21610f, lVar.getLength(), b10.f21598h + b10.f21599i, b10.f21593c, z10);
        }
        this.f21612h = 2;
        this.f21605a.f();
        return 0;
    }

    private int k(l lVar, y yVar) {
        long a10 = this.f21608d.a(lVar);
        if (a10 >= 0) {
            yVar.f50714a = a10;
            return 1;
        }
        if (a10 < -1) {
            e(-(a10 + 2));
        }
        if (!this.f21616l) {
            this.f21607c.j((z) oe.a.i(this.f21608d.b()));
            this.f21616l = true;
        }
        if (this.f21615k <= 0 && !this.f21605a.d(lVar)) {
            this.f21612h = 3;
            return -1;
        }
        this.f21615k = 0L;
        h0 c10 = this.f21605a.c();
        long f10 = f(c10);
        if (f10 >= 0) {
            long j10 = this.f21611g;
            if (j10 + f10 >= this.f21609e) {
                long b10 = b(j10);
                this.f21606b.e(c10, c10.g());
                this.f21606b.a(b10, 1, c10.g(), 0, null);
                this.f21609e = -1L;
            }
        }
        this.f21611g += f10;
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long b(long j10) {
        return (j10 * 1000000) / this.f21613i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long c(long j10) {
        return (this.f21613i * j10) / 1000000;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(m mVar, b0 b0Var) {
        this.f21607c = mVar;
        this.f21606b = b0Var;
        l(true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(long j10) {
        this.f21611g = j10;
    }

    protected abstract long f(h0 h0Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g(l lVar, y yVar) {
        a();
        int i10 = this.f21612h;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return -1;
                    }
                    throw new IllegalStateException();
                }
                w0.j(this.f21608d);
                return k(lVar, yVar);
            }
            lVar.k((int) this.f21610f);
            this.f21612h = 2;
            return 0;
        }
        return j(lVar);
    }

    protected abstract boolean h(h0 h0Var, long j10, b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l(boolean z10) {
        if (z10) {
            this.f21614j = new b();
            this.f21610f = 0L;
            this.f21612h = 0;
        } else {
            this.f21612h = 1;
        }
        this.f21609e = -1L;
        this.f21611g = 0L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(long j10, long j11) {
        this.f21605a.e();
        if (j10 == 0) {
            l(!this.f21616l);
        } else if (this.f21612h != 0) {
            this.f21609e = c(j11);
            ((g) w0.j(this.f21608d)).c(this.f21609e);
            this.f21612h = 2;
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
