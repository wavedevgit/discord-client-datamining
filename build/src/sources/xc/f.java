package xc;

import com.google.android.exoplayer2.Format;
import ne.d0;
import ne.h0;
import tc.b0;
import xc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends e {

    /* renamed from: b  reason: collision with root package name */
    private final h0 f53315b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f53316c;

    /* renamed from: d  reason: collision with root package name */
    private int f53317d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53318e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f53319f;

    /* renamed from: g  reason: collision with root package name */
    private int f53320g;

    public f(b0 b0Var) {
        super(b0Var);
        this.f53315b = new h0(d0.f40148a);
        this.f53316c = new h0(4);
    }

    @Override // xc.e
    protected boolean b(h0 h0Var) {
        int H = h0Var.H();
        int i10 = (H >> 4) & 15;
        int i11 = H & 15;
        if (i11 == 7) {
            this.f53320g = i10;
            if (i10 != 5) {
                return true;
            }
            return false;
        }
        throw new e.a("Video format not supported: " + i11);
    }

    @Override // xc.e
    protected boolean c(h0 h0Var, long j10) {
        int i10;
        int H = h0Var.H();
        long r10 = j10 + (h0Var.r() * 1000);
        if (H == 0 && !this.f53318e) {
            h0 h0Var2 = new h0(new byte[h0Var.a()]);
            h0Var.l(h0Var2.e(), 0, h0Var.a());
            oe.a b10 = oe.a.b(h0Var2);
            this.f53317d = b10.f42526b;
            this.f53314a.b(new Format.b().g0("video/avc").K(b10.f42533i).n0(b10.f42527c).S(b10.f42528d).c0(b10.f42532h).V(b10.f42525a).G());
            this.f53318e = true;
            return false;
        } else if (H != 1 || !this.f53318e) {
            return false;
        } else {
            if (this.f53320g == 1) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (!this.f53319f && i10 == 0) {
                return false;
            }
            byte[] e10 = this.f53316c.e();
            e10[0] = 0;
            e10[1] = 0;
            e10[2] = 0;
            int i11 = 4 - this.f53317d;
            int i12 = 0;
            while (h0Var.a() > 0) {
                h0Var.l(this.f53316c.e(), i11, this.f53317d);
                this.f53316c.U(0);
                int L = this.f53316c.L();
                this.f53315b.U(0);
                this.f53314a.f(this.f53315b, 4);
                this.f53314a.f(h0Var, L);
                i12 = i12 + 4 + L;
            }
            this.f53314a.d(r10, i10, i12, 0, null);
            this.f53319f = true;
            return true;
        }
    }
}
