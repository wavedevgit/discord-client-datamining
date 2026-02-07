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
    public static final p f53568o = new p() { // from class: wc.c
        @Override // tc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f53569a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f53570b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f53571c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f53572d;

    /* renamed from: e  reason: collision with root package name */
    private m f53573e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f53574f;

    /* renamed from: g  reason: collision with root package name */
    private int f53575g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f53576h;

    /* renamed from: i  reason: collision with root package name */
    private t f53577i;

    /* renamed from: j  reason: collision with root package name */
    private int f53578j;

    /* renamed from: k  reason: collision with root package name */
    private int f53579k;

    /* renamed from: l  reason: collision with root package name */
    private b f53580l;

    /* renamed from: m  reason: collision with root package name */
    private int f53581m;

    /* renamed from: n  reason: collision with root package name */
    private long f53582n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        ne.a.e(this.f53577i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f53577i, this.f53579k, this.f53572d)) {
                h0Var.U(f10);
                return this.f53572d.f50600a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f53578j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f53577i, this.f53579k, this.f53572d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f53572d.f50600a;
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
        this.f53579k = r.b(lVar);
        ((m) w0.j(this.f53573e)).q(h(lVar.getPosition(), lVar.getLength()));
        this.f53575g = 5;
    }

    private z h(long j10, long j11) {
        ne.a.e(this.f53577i);
        t tVar = this.f53577i;
        if (tVar.f50614k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f50613j > 0) {
            b bVar = new b(tVar, this.f53579k, j10, j11);
            this.f53580l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f53569a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f53575g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f53574f)).d((this.f53582n * 1000000) / ((t) w0.j(this.f53577i)).f50608e, 1, this.f53581m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        ne.a.e(this.f53574f);
        ne.a.e(this.f53577i);
        b bVar = this.f53580l;
        if (bVar != null && bVar.d()) {
            return this.f53580l.c(lVar, yVar);
        }
        if (this.f53582n == -1) {
            this.f53582n = q.i(lVar, this.f53577i);
            return 0;
        }
        int g10 = this.f53570b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f53570b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f53570b.T(g10 + read);
            } else if (this.f53570b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f53570b.f();
        int i10 = this.f53581m;
        int i11 = this.f53578j;
        if (i10 < i11) {
            h0 h0Var = this.f53570b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f53570b, z10);
        int f11 = this.f53570b.f() - f10;
        this.f53570b.U(f10);
        this.f53574f.f(this.f53570b, f11);
        this.f53581m += f11;
        if (e10 != -1) {
            j();
            this.f53581m = 0;
            this.f53582n = e10;
        }
        if (this.f53570b.a() < 16) {
            int a10 = this.f53570b.a();
            System.arraycopy(this.f53570b.e(), this.f53570b.f(), this.f53570b.e(), 0, a10);
            this.f53570b.U(0);
            this.f53570b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f53576h = r.d(lVar, !this.f53571c);
        this.f53575g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f53577i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f53577i = (t) w0.j(aVar.f50601a);
        }
        ne.a.e(this.f53577i);
        this.f53578j = Math.max(this.f53577i.f50606c, 6);
        ((b0) w0.j(this.f53574f)).b(this.f53577i.g(this.f53569a, this.f53576h));
        this.f53575g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f53575g = 3;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f53575g = 0;
        } else {
            b bVar = this.f53580l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f53582n = j12;
        this.f53581m = 0;
        this.f53570b.Q(0);
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f53573e = mVar;
        this.f53574f = mVar.c(0, 1);
        mVar.s();
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        int i10 = this.f53575g;
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
        this.f53569a = new byte[42];
        this.f53570b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f53571c = (i10 & 1) != 0;
        this.f53572d = new q.a();
        this.f53575g = 0;
    }

    @Override // tc.k
    public void release() {
    }
}
