package xc;

import com.google.android.exoplayer2.metadata.Metadata;
import oe.h0;
import oe.w0;
import org.webrtc.PeerConnection;
import uc.b0;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
import uc.q;
import uc.r;
import uc.s;
import uc.t;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements k {

    /* renamed from: o  reason: collision with root package name */
    public static final p f54463o = new p() { // from class: xc.c
        @Override // uc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f54464a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f54465b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f54466c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f54467d;

    /* renamed from: e  reason: collision with root package name */
    private m f54468e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f54469f;

    /* renamed from: g  reason: collision with root package name */
    private int f54470g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f54471h;

    /* renamed from: i  reason: collision with root package name */
    private t f54472i;

    /* renamed from: j  reason: collision with root package name */
    private int f54473j;

    /* renamed from: k  reason: collision with root package name */
    private int f54474k;

    /* renamed from: l  reason: collision with root package name */
    private b f54475l;

    /* renamed from: m  reason: collision with root package name */
    private int f54476m;

    /* renamed from: n  reason: collision with root package name */
    private long f54477n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        oe.a.e(this.f54472i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f54472i, this.f54474k, this.f54467d)) {
                h0Var.U(f10);
                return this.f54467d.f50687a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f54473j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f54472i, this.f54474k, this.f54467d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f54467d.f50687a;
                }
                f10++;
            }
            h0Var.U(h0Var.g());
            return -1L;
        }
        h0Var.U(f10);
        return -1L;
    }

    private void f(l lVar) {
        this.f54474k = r.b(lVar);
        ((m) w0.j(this.f54468e)).j(g(lVar.getPosition(), lVar.getLength()));
        this.f54470g = 5;
    }

    private z g(long j10, long j11) {
        oe.a.e(this.f54472i);
        t tVar = this.f54472i;
        if (tVar.f50701k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f50700j > 0) {
            b bVar = new b(tVar, this.f54474k, j10, j11);
            this.f54475l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f54464a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f54470g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f54469f)).a((this.f54477n * 1000000) / ((t) w0.j(this.f54472i)).f50695e, 1, this.f54476m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        oe.a.e(this.f54469f);
        oe.a.e(this.f54472i);
        b bVar = this.f54475l;
        if (bVar != null && bVar.d()) {
            return this.f54475l.c(lVar, yVar);
        }
        if (this.f54477n == -1) {
            this.f54477n = q.i(lVar, this.f54472i);
            return 0;
        }
        int g10 = this.f54465b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f54465b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f54465b.T(g10 + read);
            } else if (this.f54465b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f54465b.f();
        int i10 = this.f54476m;
        int i11 = this.f54473j;
        if (i10 < i11) {
            h0 h0Var = this.f54465b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f54465b, z10);
        int f11 = this.f54465b.f() - f10;
        this.f54465b.U(f10);
        this.f54469f.e(this.f54465b, f11);
        this.f54476m += f11;
        if (e10 != -1) {
            j();
            this.f54476m = 0;
            this.f54477n = e10;
        }
        if (this.f54465b.a() < 16) {
            int a10 = this.f54465b.a();
            System.arraycopy(this.f54465b.e(), this.f54465b.f(), this.f54465b.e(), 0, a10);
            this.f54465b.U(0);
            this.f54465b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f54471h = r.d(lVar, !this.f54466c);
        this.f54470g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f54472i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f54472i = (t) w0.j(aVar.f50688a);
        }
        oe.a.e(this.f54472i);
        this.f54473j = Math.max(this.f54472i.f50693c, 6);
        ((b0) w0.j(this.f54469f)).c(this.f54472i.g(this.f54464a, this.f54471h));
        this.f54470g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f54470g = 3;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f54470g = 0;
        } else {
            b bVar = this.f54475l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f54477n = j12;
        this.f54476m = 0;
        this.f54465b.Q(0);
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f54468e = mVar;
        this.f54469f = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        r.c(lVar, false);
        return r.a(lVar);
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        int i10 = this.f54470g;
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
                        f(lVar);
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

    public d(int i10) {
        this.f54464a = new byte[42];
        this.f54465b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f54466c = (i10 & 1) != 0;
        this.f54467d = new q.a();
        this.f54470g = 0;
    }

    @Override // uc.k
    public void release() {
    }
}
