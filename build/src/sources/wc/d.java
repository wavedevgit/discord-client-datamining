package wc;

import com.google.android.exoplayer2.metadata.Metadata;
import ne.h0;
import ne.w0;
import org.webrtc.PeerConnection;
import tc.b0;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.q;
import tc.r;
import tc.s;
import tc.t;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements k {

    /* renamed from: o  reason: collision with root package name */
    public static final p f51865o = new p() { // from class: wc.c
        @Override // tc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f51866a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f51867b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51868c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f51869d;

    /* renamed from: e  reason: collision with root package name */
    private m f51870e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f51871f;

    /* renamed from: g  reason: collision with root package name */
    private int f51872g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f51873h;

    /* renamed from: i  reason: collision with root package name */
    private t f51874i;

    /* renamed from: j  reason: collision with root package name */
    private int f51875j;

    /* renamed from: k  reason: collision with root package name */
    private int f51876k;

    /* renamed from: l  reason: collision with root package name */
    private b f51877l;

    /* renamed from: m  reason: collision with root package name */
    private int f51878m;

    /* renamed from: n  reason: collision with root package name */
    private long f51879n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        ne.a.e(this.f51874i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f51874i, this.f51876k, this.f51869d)) {
                h0Var.U(f10);
                return this.f51869d.f49763a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f51875j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f51874i, this.f51876k, this.f51869d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f51869d.f49763a;
                }
                f10++;
            }
            h0Var.U(h0Var.g());
            return -1L;
        }
        h0Var.U(f10);
        return -1L;
    }

    private void g(l lVar) {
        this.f51876k = r.b(lVar);
        ((m) w0.j(this.f51870e)).q(h(lVar.getPosition(), lVar.getLength()));
        this.f51872g = 5;
    }

    private z h(long j10, long j11) {
        ne.a.e(this.f51874i);
        t tVar = this.f51874i;
        if (tVar.f49777k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f49776j > 0) {
            b bVar = new b(tVar, this.f51876k, j10, j11);
            this.f51877l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f51866a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f51872g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f51871f)).d((this.f51879n * 1000000) / ((t) w0.j(this.f51874i)).f49771e, 1, this.f51878m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        ne.a.e(this.f51871f);
        ne.a.e(this.f51874i);
        b bVar = this.f51877l;
        if (bVar != null && bVar.d()) {
            return this.f51877l.c(lVar, yVar);
        }
        if (this.f51879n == -1) {
            this.f51879n = q.i(lVar, this.f51874i);
            return 0;
        }
        int g10 = this.f51867b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f51867b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f51867b.T(g10 + read);
            } else if (this.f51867b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f51867b.f();
        int i10 = this.f51878m;
        int i11 = this.f51875j;
        if (i10 < i11) {
            h0 h0Var = this.f51867b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f51867b, z10);
        int f11 = this.f51867b.f() - f10;
        this.f51867b.U(f10);
        this.f51871f.f(this.f51867b, f11);
        this.f51878m += f11;
        if (e10 != -1) {
            j();
            this.f51878m = 0;
            this.f51879n = e10;
        }
        if (this.f51867b.a() < 16) {
            int a10 = this.f51867b.a();
            System.arraycopy(this.f51867b.e(), this.f51867b.f(), this.f51867b.e(), 0, a10);
            this.f51867b.U(0);
            this.f51867b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f51873h = r.d(lVar, !this.f51868c);
        this.f51872g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f51874i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f51874i = (t) w0.j(aVar.f49764a);
        }
        ne.a.e(this.f51874i);
        this.f51875j = Math.max(this.f51874i.f49769c, 6);
        ((b0) w0.j(this.f51871f)).b(this.f51874i.g(this.f51866a, this.f51873h));
        this.f51872g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f51872g = 3;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f51872g = 0;
        } else {
            b bVar = this.f51877l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f51879n = j12;
        this.f51878m = 0;
        this.f51867b.Q(0);
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f51870e = mVar;
        this.f51871f = mVar.c(0, 1);
        mVar.s();
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        int i10 = this.f51872g;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return k(lVar, yVar);
                            }
                            throw new IllegalStateException();
                        }
                        g(lVar);
                        return 0;
                    }
                    m(lVar);
                    return 0;
                }
                n(lVar);
                return 0;
            }
            i(lVar);
            return 0;
        }
        l(lVar);
        return 0;
    }

    @Override // tc.k
    public boolean f(l lVar) {
        r.c(lVar, false);
        return r.a(lVar);
    }

    public d(int i10) {
        this.f51866a = new byte[42];
        this.f51867b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f51868c = (i10 & 1) != 0;
        this.f51869d = new q.a();
        this.f51872g = 0;
    }

    @Override // tc.k
    public void release() {
    }
}
