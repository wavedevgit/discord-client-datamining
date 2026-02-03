package dd;

import androidx.recyclerview.widget.RecyclerView;
import dd.i0;
import java.io.EOFException;
import lc.l0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements tc.k {

    /* renamed from: m  reason: collision with root package name */
    public static final tc.p f21391m = new tc.p() { // from class: dd.g
        @Override // tc.p
        public final tc.k[] b() {
            return h.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f21392a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21393b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f21394c;

    /* renamed from: d  reason: collision with root package name */
    private final ne.h0 f21395d;

    /* renamed from: e  reason: collision with root package name */
    private final ne.g0 f21396e;

    /* renamed from: f  reason: collision with root package name */
    private tc.m f21397f;

    /* renamed from: g  reason: collision with root package name */
    private long f21398g;

    /* renamed from: h  reason: collision with root package name */
    private long f21399h;

    /* renamed from: i  reason: collision with root package name */
    private int f21400i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21401j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21402k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21403l;

    public h() {
        this(0);
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new h()};
    }

    private void e(tc.l lVar) {
        int h10;
        if (this.f21401j) {
            return;
        }
        this.f21400i = -1;
        lVar.e();
        long j10 = 0;
        if (lVar.getPosition() == 0) {
            j(lVar);
        }
        int i10 = 0;
        int i11 = 0;
        do {
            try {
                if (!lVar.c(this.f21395d.e(), 0, 2, true)) {
                    break;
                }
                this.f21395d.U(0);
                if (!i.m(this.f21395d.N())) {
                    break;
                } else if (!lVar.c(this.f21395d.e(), 0, 4, true)) {
                    break;
                } else {
                    this.f21396e.p(14);
                    h10 = this.f21396e.h(13);
                    if (h10 > 6) {
                        j10 += h10;
                        i11++;
                        if (i11 == 1000) {
                            break;
                        }
                    } else {
                        this.f21401j = true;
                        throw l0.a("Malformed ADTS stream", null);
                    }
                }
            } catch (EOFException unused) {
            }
        } while (lVar.l(h10 - 6, true));
        i10 = i11;
        lVar.e();
        if (i10 > 0) {
            this.f21400i = (int) (j10 / i10);
        } else {
            this.f21400i = -1;
        }
        this.f21401j = true;
    }

    private static int g(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private tc.z h(long j10, boolean z10) {
        return new tc.d(j10, this.f21399h, g(this.f21400i, this.f21393b.k()), this.f21400i, z10);
    }

    private void i(long j10, boolean z10) {
        boolean z11;
        if (!this.f21403l) {
            boolean z12 = false;
            if ((this.f21392a & 1) != 0 && this.f21400i > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z11 && this.f21393b.k() == -9223372036854775807L && !z10) {
                return;
            }
            if (z11 && this.f21393b.k() != -9223372036854775807L) {
                tc.m mVar = this.f21397f;
                if ((this.f21392a & 2) != 0) {
                    z12 = true;
                }
                mVar.q(h(j10, z12));
            } else {
                this.f21397f.q(new z.b(-9223372036854775807L));
            }
            this.f21403l = true;
        }
    }

    private int j(tc.l lVar) {
        int i10 = 0;
        while (true) {
            lVar.n(this.f21395d.e(), 0, 10);
            this.f21395d.U(0);
            if (this.f21395d.K() != 4801587) {
                break;
            }
            this.f21395d.V(3);
            int G = this.f21395d.G();
            i10 += G + 10;
            lVar.h(G);
        }
        lVar.e();
        lVar.h(i10);
        if (this.f21399h == -1) {
            this.f21399h = i10;
        }
        return i10;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f21402k = false;
        this.f21393b.c();
        this.f21398g = j11;
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f21397f = mVar;
        this.f21393b.f(mVar, new i0.d(0, 1));
        mVar.s();
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        boolean z10;
        ne.a.i(this.f21397f);
        long length = lVar.getLength();
        int i10 = this.f21392a;
        if ((i10 & 2) != 0 || ((i10 & 1) != 0 && length != -1)) {
            e(lVar);
        }
        int read = lVar.read(this.f21394c.e(), 0, RecyclerView.ItemAnimator.FLAG_MOVED);
        if (read == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        i(length, z10);
        if (z10) {
            return -1;
        }
        this.f21394c.U(0);
        this.f21394c.T(read);
        if (!this.f21402k) {
            this.f21393b.e(this.f21398g, 4);
            this.f21402k = true;
        }
        this.f21393b.b(this.f21394c);
        return 0;
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        int j10 = j(lVar);
        int i10 = j10;
        int i11 = 0;
        int i12 = 0;
        do {
            lVar.n(this.f21395d.e(), 0, 2);
            this.f21395d.U(0);
            if (!i.m(this.f21395d.N())) {
                i10++;
                lVar.e();
                lVar.h(i10);
            } else {
                i11++;
                if (i11 >= 4 && i12 > 188) {
                    return true;
                }
                lVar.n(this.f21395d.e(), 0, 4);
                this.f21396e.p(14);
                int h10 = this.f21396e.h(13);
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
        this.f21392a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f21393b = new i(true);
        this.f21394c = new ne.h0((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        this.f21400i = -1;
        this.f21399h = -1L;
        ne.h0 h0Var = new ne.h0(10);
        this.f21395d = h0Var;
        this.f21396e = new ne.g0(h0Var.e());
    }

    @Override // tc.k
    public void release() {
    }
}
