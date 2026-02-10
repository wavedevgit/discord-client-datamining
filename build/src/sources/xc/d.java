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
    public static final p f54731o = new p() { // from class: xc.c
        @Override // uc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f54732a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f54733b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f54734c;

    /* renamed from: d  reason: collision with root package name */
    private final q.a f54735d;

    /* renamed from: e  reason: collision with root package name */
    private m f54736e;

    /* renamed from: f  reason: collision with root package name */
    private b0 f54737f;

    /* renamed from: g  reason: collision with root package name */
    private int f54738g;

    /* renamed from: h  reason: collision with root package name */
    private Metadata f54739h;

    /* renamed from: i  reason: collision with root package name */
    private t f54740i;

    /* renamed from: j  reason: collision with root package name */
    private int f54741j;

    /* renamed from: k  reason: collision with root package name */
    private int f54742k;

    /* renamed from: l  reason: collision with root package name */
    private b f54743l;

    /* renamed from: m  reason: collision with root package name */
    private int f54744m;

    /* renamed from: n  reason: collision with root package name */
    private long f54745n;

    public d() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private long e(h0 h0Var, boolean z10) {
        boolean z11;
        oe.a.e(this.f54740i);
        int f10 = h0Var.f();
        while (f10 <= h0Var.g() - 16) {
            h0Var.U(f10);
            if (q.d(h0Var, this.f54740i, this.f54742k, this.f54735d)) {
                h0Var.U(f10);
                return this.f54735d.f51508a;
            }
            f10++;
        }
        if (z10) {
            while (f10 <= h0Var.g() - this.f54741j) {
                h0Var.U(f10);
                boolean z12 = false;
                try {
                    z11 = q.d(h0Var, this.f54740i, this.f54742k, this.f54735d);
                } catch (IndexOutOfBoundsException unused) {
                    z11 = false;
                }
                if (h0Var.f() <= h0Var.g()) {
                    z12 = z11;
                }
                if (z12) {
                    h0Var.U(f10);
                    return this.f54735d.f51508a;
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
        this.f54742k = r.b(lVar);
        ((m) w0.j(this.f54736e)).j(g(lVar.getPosition(), lVar.getLength()));
        this.f54738g = 5;
    }

    private z g(long j10, long j11) {
        oe.a.e(this.f54740i);
        t tVar = this.f54740i;
        if (tVar.f51522k != null) {
            return new s(tVar, j10);
        }
        if (j11 != -1 && tVar.f51521j > 0) {
            b bVar = new b(tVar, this.f54742k, j10, j11);
            this.f54743l = bVar;
            return bVar.b();
        }
        return new z.b(tVar.f());
    }

    private void i(l lVar) {
        byte[] bArr = this.f54732a;
        lVar.n(bArr, 0, bArr.length);
        lVar.e();
        this.f54738g = 2;
    }

    private void j() {
        ((b0) w0.j(this.f54737f)).a((this.f54745n * 1000000) / ((t) w0.j(this.f54740i)).f51516e, 1, this.f54744m, 0, null);
    }

    private int k(l lVar, y yVar) {
        boolean z10;
        oe.a.e(this.f54737f);
        oe.a.e(this.f54740i);
        b bVar = this.f54743l;
        if (bVar != null && bVar.d()) {
            return this.f54743l.c(lVar, yVar);
        }
        if (this.f54745n == -1) {
            this.f54745n = q.i(lVar, this.f54740i);
            return 0;
        }
        int g10 = this.f54733b.g();
        if (g10 < 32768) {
            int read = lVar.read(this.f54733b.e(), g10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS - g10);
            if (read == -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                this.f54733b.T(g10 + read);
            } else if (this.f54733b.a() == 0) {
                j();
                return -1;
            }
        } else {
            z10 = false;
        }
        int f10 = this.f54733b.f();
        int i10 = this.f54744m;
        int i11 = this.f54741j;
        if (i10 < i11) {
            h0 h0Var = this.f54733b;
            h0Var.V(Math.min(i11 - i10, h0Var.a()));
        }
        long e10 = e(this.f54733b, z10);
        int f11 = this.f54733b.f() - f10;
        this.f54733b.U(f10);
        this.f54737f.e(this.f54733b, f11);
        this.f54744m += f11;
        if (e10 != -1) {
            j();
            this.f54744m = 0;
            this.f54745n = e10;
        }
        if (this.f54733b.a() < 16) {
            int a10 = this.f54733b.a();
            System.arraycopy(this.f54733b.e(), this.f54733b.f(), this.f54733b.e(), 0, a10);
            this.f54733b.U(0);
            this.f54733b.T(a10);
        }
        return 0;
    }

    private void l(l lVar) {
        this.f54739h = r.d(lVar, !this.f54734c);
        this.f54738g = 1;
    }

    private void m(l lVar) {
        r.a aVar = new r.a(this.f54740i);
        boolean z10 = false;
        while (!z10) {
            z10 = r.e(lVar, aVar);
            this.f54740i = (t) w0.j(aVar.f51509a);
        }
        oe.a.e(this.f54740i);
        this.f54741j = Math.max(this.f54740i.f51514c, 6);
        ((b0) w0.j(this.f54737f)).c(this.f54740i.g(this.f54732a, this.f54739h));
        this.f54738g = 4;
    }

    private void n(l lVar) {
        r.i(lVar);
        this.f54738g = 3;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        long j12 = 0;
        if (j10 == 0) {
            this.f54738g = 0;
        } else {
            b bVar = this.f54743l;
            if (bVar != null) {
                bVar.h(j11);
            }
        }
        if (j11 != 0) {
            j12 = -1;
        }
        this.f54745n = j12;
        this.f54744m = 0;
        this.f54733b.Q(0);
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f54736e = mVar;
        this.f54737f = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        r.c(lVar, false);
        return r.a(lVar);
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        int i10 = this.f54738g;
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
        this.f54732a = new byte[42];
        this.f54733b = new h0(new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS], 0);
        this.f54734c = (i10 & 1) != 0;
        this.f54735d = new q.a();
        this.f54738g = 0;
    }

    @Override // uc.k
    public void release() {
    }
}
