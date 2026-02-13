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
    public static final p f55032o = new p() { // from class: xc.c
        @Override // uc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f55033a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f55034b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f55035c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f55036d;

    /* renamed from: e  reason: collision with root package name */
    private m f55037e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f55038f;

    /* renamed from: g  reason: collision with root package name */
    private int f55039g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f55040h;

    /* renamed from: i  reason: collision with root package name */
    private t f55041i;

    /* renamed from: j  reason: collision with root package name */
    private int f55042j;

    /* renamed from: k  reason: collision with root package name */
    private int f55043k;

    /* renamed from: l  reason: collision with root package name */
    private b f55044l;

    /* renamed from: m  reason: collision with root package name */
    private int f55045m;

    /* renamed from: n  reason: collision with root package name */
    private long f55046n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        oe.a.e(this.f55041i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f55041i, this.f55043k, this.f55036d)) {
                h0Var.U(f10);
                return this.f55036d.f51256a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f55042j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f55041i, this.f55043k, this.f55036d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f55036d.f51256a;
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
        this.f55043k = r.b(lVar);
        ((m) w0.j(this.f55037e)).j(g(lVar.getPosition(), lVar.getLength()));
        this.f55039g = 5;
    }

    private z g(long j10, long j11) {
        oe.a.e(this.f55041i);
        t tVar = this.f55041i;
        if (tVar.f51270k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f51269j > 0) {
            b bVar = new b(tVar, this.f55043k, j10, j11);
            this.f55044l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f55033a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f55039g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f55038f)).a((this.f55046n * 1000000) / ((t) w0.j(this.f55041i)).f51264e, 1, this.f55045m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        oe.a.e(this.f55038f);
        oe.a.e(this.f55041i);
        b bVar = this.f55044l;
        if (bVar != null && bVar.d()) {
            return this.f55044l.c(lVar, yVar);
        }
        if (this.f55046n == -1) {
            this.f55046n = q.i(lVar, this.f55041i);
            return 0;
        }
        int g10 = this.f55034b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f55034b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f55034b.T(g10 + read);
            } else if (this.f55034b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f55034b.f();
        int i10 = this.f55045m;
        int i11 = this.f55042j;
        if (i10 < i11) {
            h0 h0Var = this.f55034b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f55034b, z10);
        int f11 = this.f55034b.f() - f10;
        this.f55034b.U(f10);
        this.f55038f.e(this.f55034b, f11);
        this.f55045m += f11;
        if (e10 != -1) {
            j();
            this.f55045m = 0;
            this.f55046n = e10;
        }
        if (this.f55034b.a() < 16) {
            int a10 = this.f55034b.a();
            System.arraycopy(this.f55034b.e(), this.f55034b.f(), this.f55034b.e(), 0, a10);
            this.f55034b.U(0);
            this.f55034b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f55040h = r.d(lVar, !this.f55035c);
        this.f55039g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f55041i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f55041i = (t) w0.j(aVar.f51257a);
        }
        oe.a.e(this.f55041i);
        this.f55042j = Math.max(this.f55041i.f51262c, 6);
        ((b0) w0.j(this.f55038f)).c(this.f55041i.g(this.f55033a, this.f55040h));
        this.f55039g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f55039g = 3;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f55039g = 0;
        } else {
            b bVar = this.f55044l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f55046n = j12;
        this.f55045m = 0;
        this.f55034b.Q(0);
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f55037e = mVar;
        this.f55038f = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        r.c(lVar, false);
        return r.a(lVar);
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        int i10 = this.f55039g;
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
        this.f55033a = new byte[42];
        this.f55034b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f55035c = (i10 & 1) != 0;
        this.f55036d = new q.a();
        this.f55039g = 0;
    }

    @Override // uc.k
    public void release() {
    }
}
