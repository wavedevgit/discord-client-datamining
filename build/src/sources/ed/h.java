package ed;

import androidx.recyclerview.widget.RecyclerView;
import ed.i0;
import java.io.EOFException;
import mc.l0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements uc.k {

    /* renamed from: m  reason: collision with root package name */
    public static final uc.p f21310m = new uc.p() { // from class: ed.g
        @Override // uc.p
        public final uc.k[] b() {
            return h.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f21311a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21312b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f21313c;

    /* renamed from: d  reason: collision with root package name */
    private final oe.h0 f21314d;

    /* renamed from: e  reason: collision with root package name */
    private final oe.g0 f21315e;

    /* renamed from: f  reason: collision with root package name */
    private uc.m f21316f;

    /* renamed from: g  reason: collision with root package name */
    private long f21317g;

    /* renamed from: h  reason: collision with root package name */
    private long f21318h;

    /* renamed from: i  reason: collision with root package name */
    private int f21319i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21320j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21321k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21322l;

    public h() {
        this(0);
    }

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new h()};
    }

    private void e(uc.l lVar) {
        int h10;
        if (this.f21320j) {
            return;
        }
        this.f21319i = -1;
        lVar.e();
        long j10 = 0;
        if (lVar.getPosition() == 0) {
            j(lVar);
        }
        int i10 = 0;
        int i11 = 0;
        do {
            try {
                if (!lVar.c(this.f21314d.e(), 0, 2, true)) {
                    break;
                }
                this.f21314d.U(0);
                if (!i.m(this.f21314d.N())) {
                    break;
                } else if (!lVar.c(this.f21314d.e(), 0, 4, true)) {
                    break;
                } else {
                    this.f21315e.p(14);
                    h10 = this.f21315e.h(13);
                    if (h10 > 6) {
                        j10 += h10;
                        i11++;
                        if (i11 == 1000) {
                            break;
                        }
                    } else {
                        this.f21320j = true;
                        throw l0.a("Malformed ADTS stream", null);
                    }
                }
            } catch (EOFException unused) {
            }
        } while (lVar.l(h10 - 6, true));
        i10 = i11;
        lVar.e();
        if (i10 > 0) {
            this.f21319i = (int) (j10 / i10);
        } else {
            this.f21319i = -1;
        }
        this.f21320j = true;
    }

    private static int f(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private uc.z g(long j10, boolean z10) {
        return new uc.d(j10, this.f21318h, f(this.f21319i, this.f21312b.k()), this.f21319i, z10);
    }

    private void i(long j10, boolean z10) {
        boolean z11;
        if (!this.f21322l) {
            boolean z12 = false;
            if ((this.f21311a & 1) != 0 && this.f21319i > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z11 && this.f21312b.k() == -9223372036854775807L && !z10) {
                return;
            }
            if (z11 && this.f21312b.k() != -9223372036854775807L) {
                uc.m mVar = this.f21316f;
                if ((this.f21311a & 2) != 0) {
                    z12 = true;
                }
                mVar.j(g(j10, z12));
            } else {
                this.f21316f.j(new z.b(-9223372036854775807L));
            }
            this.f21322l = true;
        }
    }

    private int j(uc.l lVar) {
        int i10 = 0;
        while (true) {
            lVar.n(this.f21314d.e(), 0, 10);
            this.f21314d.U(0);
            if (this.f21314d.K() != 4801587) {
                break;
            }
            this.f21314d.V(3);
            int G = this.f21314d.G();
            i10 += G + 10;
            lVar.h(G);
        }
        lVar.e();
        lVar.h(i10);
        if (this.f21318h == -1) {
            this.f21318h = i10;
        }
        return i10;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f21321k = false;
        this.f21312b.b();
        this.f21317g = j11;
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f21316f = mVar;
        this.f21312b.c(mVar, new i0.d(0, 1));
        mVar.q();
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        int j10 = j(lVar);
        int i10 = j10;
        int i11 = 0;
        int i12 = 0;
        do {
            lVar.n(this.f21314d.e(), 0, 2);
            this.f21314d.U(0);
            if (!i.m(this.f21314d.N())) {
                i10++;
                lVar.e();
                lVar.h(i10);
            } else {
                i11++;
                if (i11 >= 4 && i12 > 188) {
                    return true;
                }
                lVar.n(this.f21314d.e(), 0, 4);
                this.f21315e.p(14);
                int h10 = this.f21315e.h(13);
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
        oe.a.i(this.f21316f);
        long length = lVar.getLength();
        int i10 = this.f21311a;
        if ((i10 & 2) != 0 || ((i10 & 1) != 0 && length != -1)) {
            e(lVar);
        }
        int read = lVar.read(this.f21313c.e(), 0, RecyclerView.ItemAnimator.FLAG_MOVED);
        if (read == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        i(length, z10);
        if (z10) {
            return -1;
        }
        this.f21313c.U(0);
        this.f21313c.T(read);
        if (!this.f21321k) {
            this.f21312b.e(this.f21317g, 4);
            this.f21321k = true;
        }
        this.f21312b.a(this.f21313c);
        return 0;
    }

    public h(int i10) {
        this.f21311a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f21312b = new i(true);
        this.f21313c = new oe.h0((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        this.f21319i = -1;
        this.f21318h = -1L;
        oe.h0 h0Var = new oe.h0(10);
        this.f21314d = h0Var;
        this.f21315e = new oe.g0(h0Var.e());
    }

    @Override // uc.k
    public void release() {
    }
}
