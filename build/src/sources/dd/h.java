package dd;

import androidx.recyclerview.widget.RecyclerView;
import dd.i0;
import java.io.EOFException;
import lc.l0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements tc.k {

    /* renamed from: m  reason: collision with root package name */
    public static final tc.p f20250m = new tc.p() { // from class: dd.g
        @Override // tc.p
        public final tc.k[] b() {
            return h.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f20251a;

    /* renamed from: b  reason: collision with root package name */
    private final i f20252b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f20253c;

    /* renamed from: d  reason: collision with root package name */
    private final ne.h0 f20254d;

    /* renamed from: e  reason: collision with root package name */
    private final ne.g0 f20255e;

    /* renamed from: f  reason: collision with root package name */
    private tc.m f20256f;

    /* renamed from: g  reason: collision with root package name */
    private long f20257g;

    /* renamed from: h  reason: collision with root package name */
    private long f20258h;

    /* renamed from: i  reason: collision with root package name */
    private int f20259i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f20260j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f20261k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20262l;

    public h() {
        this(0);
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new h()};
    }

    private void e(tc.l lVar) {
        int h10;
        if (this.f20260j) {
            return;
        }
        this.f20259i = -1;
        lVar.e();
        long j10 = 0;
        if (lVar.getPosition() == 0) {
            j(lVar);
        }
        int i10 = 0;
        int i11 = 0;
        do {
            try {
                if (!lVar.c(this.f20254d.e(), 0, 2, true)) {
                    break;
                }
                this.f20254d.U(0);
                if (!i.m(this.f20254d.N())) {
                    break;
                } else if (!lVar.c(this.f20254d.e(), 0, 4, true)) {
                    break;
                } else {
                    this.f20255e.p(14);
                    h10 = this.f20255e.h(13);
                    if (h10 > 6) {
                        j10 += h10;
                        i11++;
                        if (i11 == 1000) {
                            break;
                        }
                    } else {
                        this.f20260j = true;
                        throw l0.a("Malformed ADTS stream", null);
                    }
                }
            } catch (EOFException unused) {
            }
        } while (lVar.l(h10 - 6, true));
        i10 = i11;
        lVar.e();
        if (i10 > 0) {
            this.f20259i = (int) (j10 / i10);
        } else {
            this.f20259i = -1;
        }
        this.f20260j = true;
    }

    private static int g(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private tc.z h(long j10, boolean z10) {
        return new tc.d(j10, this.f20258h, g(this.f20259i, this.f20252b.k()), this.f20259i, z10);
    }

    private void i(long j10, boolean z10) {
        boolean z11;
        if (!this.f20262l) {
            boolean z12 = false;
            if ((this.f20251a & 1) != 0 && this.f20259i > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z11 && this.f20252b.k() == -9223372036854775807L && !z10) {
                return;
            }
            if (z11 && this.f20252b.k() != -9223372036854775807L) {
                tc.m mVar = this.f20256f;
                if ((this.f20251a & 2) != 0) {
                    z12 = true;
                }
                mVar.q(h(j10, z12));
            } else {
                this.f20256f.q(new z.b(-9223372036854775807L));
            }
            this.f20262l = true;
        }
    }

    private int j(tc.l lVar) {
        int i10 = 0;
        while (true) {
            lVar.n(this.f20254d.e(), 0, 10);
            this.f20254d.U(0);
            if (this.f20254d.K() != 4801587) {
                break;
            }
            this.f20254d.V(3);
            int G = this.f20254d.G();
            i10 += G + 10;
            lVar.h(G);
        }
        lVar.e();
        lVar.h(i10);
        if (this.f20258h == -1) {
            this.f20258h = i10;
        }
        return i10;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f20261k = false;
        this.f20252b.c();
        this.f20257g = j11;
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f20256f = mVar;
        this.f20252b.f(mVar, new i0.d(0, 1));
        mVar.s();
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        boolean z10;
        ne.a.i(this.f20256f);
        long length = lVar.getLength();
        int i10 = this.f20251a;
        if ((i10 & 2) != 0 || ((i10 & 1) != 0 && length != -1)) {
            e(lVar);
        }
        int read = lVar.read(this.f20253c.e(), 0, RecyclerView.ItemAnimator.FLAG_MOVED);
        if (read == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        i(length, z10);
        if (z10) {
            return -1;
        }
        this.f20253c.U(0);
        this.f20253c.T(read);
        if (!this.f20261k) {
            this.f20252b.e(this.f20257g, 4);
            this.f20261k = true;
        }
        this.f20252b.b(this.f20253c);
        return 0;
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        int j10 = j(lVar);
        int i10 = j10;
        int i11 = 0;
        int i12 = 0;
        do {
            lVar.n(this.f20254d.e(), 0, 2);
            this.f20254d.U(0);
            if (!i.m(this.f20254d.N())) {
                i10++;
                lVar.e();
                lVar.h(i10);
            } else {
                i11++;
                if (i11 >= 4 && i12 > 188) {
                    return true;
                }
                lVar.n(this.f20254d.e(), 0, 4);
                this.f20255e.p(14);
                int h10 = this.f20255e.h(13);
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

    public h(int i10) {
        this.f20251a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f20252b = new i(true);
        this.f20253c = new ne.h0((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        this.f20259i = -1;
        this.f20258h = -1L;
        ne.h0 h0Var = new ne.h0(10);
        this.f20254d = h0Var;
        this.f20255e = new ne.g0(h0Var.e());
    }

    @Override // tc.k
    public void release() {
    }
}
