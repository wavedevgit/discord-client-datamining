package ed;

import androidx.recyclerview.widget.RecyclerView;
import ed.i0;
import java.io.EOFException;
import mc.l0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements uc.k {

    /* renamed from: m  reason: collision with root package name */
    public static final uc.p f22477m = new uc.p() { // from class: ed.g
        @Override // uc.p
        public final uc.k[] b() {
            return h.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f22478a;

    /* renamed from: b  reason: collision with root package name */
    private final i f22479b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f22480c;

    /* renamed from: d  reason: collision with root package name */
    private final oe.h0 f22481d;

    /* renamed from: e  reason: collision with root package name */
    private final oe.g0 f22482e;

    /* renamed from: f  reason: collision with root package name */
    private uc.m f22483f;

    /* renamed from: g  reason: collision with root package name */
    private long f22484g;

    /* renamed from: h  reason: collision with root package name */
    private long f22485h;

    /* renamed from: i  reason: collision with root package name */
    private int f22486i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f22487j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22488k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22489l;

    public h() {
        this(0);
    }

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new h()};
    }

    private void e(uc.l lVar) {
        int h10;
        if (this.f22487j) {
            return;
        }
        this.f22486i = -1;
        lVar.e();
        long j10 = 0;
        if (lVar.getPosition() == 0) {
            j(lVar);
        }
        int i10 = 0;
        int i11 = 0;
        do {
            try {
                if (!lVar.c(this.f22481d.e(), 0, 2, true)) {
                    break;
                }
                this.f22481d.U(0);
                if (!i.m(this.f22481d.N())) {
                    break;
                } else if (!lVar.c(this.f22481d.e(), 0, 4, true)) {
                    break;
                } else {
                    this.f22482e.p(14);
                    h10 = this.f22482e.h(13);
                    if (h10 > 6) {
                        j10 += h10;
                        i11++;
                        if (i11 == 1000) {
                            break;
                        }
                    } else {
                        this.f22487j = true;
                        throw l0.a("Malformed ADTS stream", null);
                    }
                }
            } catch (EOFException unused) {
            }
        } while (lVar.l(h10 - 6, true));
        i10 = i11;
        lVar.e();
        if (i10 > 0) {
            this.f22486i = (int) (j10 / i10);
        } else {
            this.f22486i = -1;
        }
        this.f22487j = true;
    }

    private static int f(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private uc.z g(long j10, boolean z10) {
        return new uc.d(j10, this.f22485h, f(this.f22486i, this.f22479b.k()), this.f22486i, z10);
    }

    private void i(long j10, boolean z10) {
        boolean z11;
        if (!this.f22489l) {
            boolean z12 = false;
            if ((this.f22478a & 1) != 0 && this.f22486i > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z11 && this.f22479b.k() == -9223372036854775807L && !z10) {
                return;
            }
            if (z11 && this.f22479b.k() != -9223372036854775807L) {
                uc.m mVar = this.f22483f;
                if ((this.f22478a & 2) != 0) {
                    z12 = true;
                }
                mVar.j(g(j10, z12));
            } else {
                this.f22483f.j(new z.b(-9223372036854775807L));
            }
            this.f22489l = true;
        }
    }

    private int j(uc.l lVar) {
        int i10 = 0;
        while (true) {
            lVar.n(this.f22481d.e(), 0, 10);
            this.f22481d.U(0);
            if (this.f22481d.K() != 4801587) {
                break;
            }
            this.f22481d.V(3);
            int G = this.f22481d.G();
            i10 += G + 10;
            lVar.h(G);
        }
        lVar.e();
        lVar.h(i10);
        if (this.f22485h == -1) {
            this.f22485h = i10;
        }
        return i10;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f22488k = false;
        this.f22479b.b();
        this.f22484g = j11;
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f22483f = mVar;
        this.f22479b.c(mVar, new i0.d(0, 1));
        mVar.q();
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        int j10 = j(lVar);
        int i10 = j10;
        int i11 = 0;
        int i12 = 0;
        do {
            lVar.n(this.f22481d.e(), 0, 2);
            this.f22481d.U(0);
            if (!i.m(this.f22481d.N())) {
                i10++;
                lVar.e();
                lVar.h(i10);
            } else {
                i11++;
                if (i11 >= 4 && i12 > 188) {
                    return true;
                }
                lVar.n(this.f22481d.e(), 0, 4);
                this.f22482e.p(14);
                int h10 = this.f22482e.h(13);
                if (h10 <= 6) {
                    i10++;
                    lVar.e();
                    lVar.h(i10);
                } else {
                    lVar.h(h10 - 6);
                    i12 += h10;
                }
            }
            i11 = 0;
            i12 = 0;
        } while (i10 - j10 < 8192);
        return false;
    }

    @Override // uc.k
    public int h(uc.l lVar, uc.y yVar) {
        boolean z10;
        oe.a.i(this.f22483f);
        long length = lVar.getLength();
        int i10 = this.f22478a;
        if ((i10 & 2) != 0 || ((i10 & 1) != 0 && length != -1)) {
            e(lVar);
        }
        int read = lVar.read(this.f22480c.e(), 0, RecyclerView.ItemAnimator.FLAG_MOVED);
        if (read == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        i(length, z10);
        if (z10) {
            return -1;
        }
        this.f22480c.U(0);
        this.f22480c.T(read);
        if (!this.f22488k) {
            this.f22479b.e(this.f22484g, 4);
            this.f22488k = true;
        }
        this.f22479b.a(this.f22480c);
        return 0;
    }

    public h(int i10) {
        this.f22478a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f22479b = new i(true);
        this.f22480c = new oe.h0((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        this.f22486i = -1;
        this.f22485h = -1L;
        oe.h0 h0Var = new oe.h0(10);
        this.f22481d = h0Var;
        this.f22482e = new oe.g0(h0Var.e());
    }

    @Override // uc.k
    public void release() {
    }
}
