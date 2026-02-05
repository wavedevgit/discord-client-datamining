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
    public static final p f52741o = new p() { // from class: wc.c
        @Override // tc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f52742a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f52743b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52744c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f52745d;

    /* renamed from: e  reason: collision with root package name */
    private m f52746e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f52747f;

    /* renamed from: g  reason: collision with root package name */
    private int f52748g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f52749h;

    /* renamed from: i  reason: collision with root package name */
    private t f52750i;

    /* renamed from: j  reason: collision with root package name */
    private int f52751j;

    /* renamed from: k  reason: collision with root package name */
    private int f52752k;

    /* renamed from: l  reason: collision with root package name */
    private b f52753l;

    /* renamed from: m  reason: collision with root package name */
    private int f52754m;

    /* renamed from: n  reason: collision with root package name */
    private long f52755n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        ne.a.e(this.f52750i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f52750i, this.f52752k, this.f52745d)) {
                h0Var.U(f10);
                return this.f52745d.f50576a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f52751j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f52750i, this.f52752k, this.f52745d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f52745d.f50576a;
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
        this.f52752k = r.b(lVar);
        ((m) w0.j(this.f52746e)).q(h(lVar.getPosition(), lVar.getLength()));
        this.f52748g = 5;
    }

    private z h(long j10, long j11) {
        ne.a.e(this.f52750i);
        t tVar = this.f52750i;
        if (tVar.f50590k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f50589j > 0) {
            b bVar = new b(tVar, this.f52752k, j10, j11);
            this.f52753l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f52742a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f52748g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f52747f)).d((this.f52755n * 1000000) / ((t) w0.j(this.f52750i)).f50584e, 1, this.f52754m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        ne.a.e(this.f52747f);
        ne.a.e(this.f52750i);
        b bVar = this.f52753l;
        if (bVar != null && bVar.d()) {
            return this.f52753l.c(lVar, yVar);
        }
        if (this.f52755n == -1) {
            this.f52755n = q.i(lVar, this.f52750i);
            return 0;
        }
        int g10 = this.f52743b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f52743b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f52743b.T(g10 + read);
            } else if (this.f52743b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f52743b.f();
        int i10 = this.f52754m;
        int i11 = this.f52751j;
        if (i10 < i11) {
            h0 h0Var = this.f52743b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f52743b, z10);
        int f11 = this.f52743b.f() - f10;
        this.f52743b.U(f10);
        this.f52747f.f(this.f52743b, f11);
        this.f52754m += f11;
        if (e10 != -1) {
            j();
            this.f52754m = 0;
            this.f52755n = e10;
        }
        if (this.f52743b.a() < 16) {
            int a10 = this.f52743b.a();
            System.arraycopy(this.f52743b.e(), this.f52743b.f(), this.f52743b.e(), 0, a10);
            this.f52743b.U(0);
            this.f52743b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f52749h = r.d(lVar, !this.f52744c);
        this.f52748g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f52750i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f52750i = (t) w0.j(aVar.f50577a);
        }
        ne.a.e(this.f52750i);
        this.f52751j = Math.max(this.f52750i.f50582c, 6);
        ((b0) w0.j(this.f52747f)).b(this.f52750i.g(this.f52742a, this.f52749h));
        this.f52748g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f52748g = 3;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f52748g = 0;
        } else {
            b bVar = this.f52753l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f52755n = j12;
        this.f52754m = 0;
        this.f52743b.Q(0);
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f52746e = mVar;
        this.f52747f = mVar.c(0, 1);
        mVar.s();
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        int i10 = this.f52748g;
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
        this.f52742a = new byte[42];
        this.f52743b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f52744c = (i10 & 1) != 0;
        this.f52745d = new q.a();
        this.f52748g = 0;
    }

    @Override // tc.k
    public void release() {
    }
}
