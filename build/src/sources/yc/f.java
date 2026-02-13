package yc;

import com.google.android.exoplayer2.Format;
import oe.d0;
import oe.h0;
import uc.b0;
import yc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends e {

    /* renamed from: b  reason: collision with root package name */
    private final h0 f56087b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f56088c;

    /* renamed from: d  reason: collision with root package name */
    private int f56089d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56090e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f56091f;

    /* renamed from: g  reason: collision with root package name */
    private int f56092g;

    public f(b0 b0Var) {
        super(b0Var);
        this.f56087b = new h0(d0.f39459a);
        this.f56088c = new h0(4);
    }

    @Override // yc.e
    protected boolean b(h0 h0Var) {
        int H = h0Var.H();
        int i10 = (H >> 4) & 15;
        int i11 = H & 15;
        if (i11 == 7) {
            this.f56092g = i10;
            if (i10 != 5) {
                return true;
            }
            return false;
        }
        throw new e.a("Video format not supported: " + i11);
    }

    @Override // yc.e
    protected boolean c(h0 h0Var, long j10) {
        int i10;
        int H = h0Var.H();
        long r10 = j10 + (h0Var.r() * 1000);
        if (H == 0 && !this.f56090e) {
            h0 h0Var2 = new h0(new byte[h0Var.a()]);
            h0Var.l(h0Var2.e(), 0, h0Var.a());
            pe.a b10 = pe.a.b(h0Var2);
            this.f56089d = b10.f42118b;
            this.f56086a.c(new Format.b().g0("video/avc").K(b10.f42125i).n0(b10.f42119c).S(b10.f42120d).c0(b10.f42124h).V(b10.f42117a).G());
            this.f56090e = true;
            return false;
        } else if (H != 1 || !this.f56090e) {
            return false;
        } else {
            if (this.f56092g == 1) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (!this.f56091f && i10 == 0) {
                return false;
            }
            byte[] e10 = this.f56088c.e();
            e10[0] = 0;
            e10[1] = 0;
            e10[2] = 0;
            int i11 = 4 - this.f56089d;
            int i12 = 0;
            while (h0Var.a() > 0) {
                h0Var.l(this.f56088c.e(), i11, this.f56089d);
                this.f56088c.U(0);
                int L = this.f56088c.L();
                this.f56087b.U(0);
                this.f56086a.e(this.f56087b, 4);
                this.f56086a.e(h0Var, L);
                i12 = i12 + 4 + L;
            }
            this.f56086a.a(r10, i10, i12, 0, null);
            this.f56091f = true;
            return true;
        }
    }
}
