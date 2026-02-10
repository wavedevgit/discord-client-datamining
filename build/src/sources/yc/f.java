package yc;

import com.google.android.exoplayer2.Format;
import oe.d0;
import oe.h0;
import uc.b0;
import yc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends e {

    /* renamed from: b  reason: collision with root package name */
    private final h0 f55518b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f55519c;

    /* renamed from: d  reason: collision with root package name */
    private int f55520d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f55521e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f55522f;

    /* renamed from: g  reason: collision with root package name */
    private int f55523g;

    public f(b0 b0Var) {
        super(b0Var);
        this.f55518b = new h0(d0.f38890a);
        this.f55519c = new h0(4);
    }

    @Override // yc.e
    protected boolean b(h0 h0Var) {
        int H = h0Var.H();
        int i10 = (H >> 4) & 15;
        int i11 = H & 15;
        if (i11 == 7) {
            this.f55523g = i10;
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
        if (H == 0 && !this.f55521e) {
            h0 h0Var2 = new h0(new byte[h0Var.a()]);
            h0Var.l(h0Var2.e(), 0, h0Var.a());
            pe.a b10 = pe.a.b(h0Var2);
            this.f55520d = b10.f41549b;
            this.f55517a.c(new Format.b().g0("video/avc").K(b10.f41556i).n0(b10.f41550c).S(b10.f41551d).c0(b10.f41555h).V(b10.f41548a).G());
            this.f55521e = true;
            return false;
        } else if (H != 1 || !this.f55521e) {
            return false;
        } else {
            if (this.f55523g == 1) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (!this.f55522f && i10 == 0) {
                return false;
            }
            byte[] e10 = this.f55519c.e();
            e10[0] = 0;
            e10[1] = 0;
            e10[2] = 0;
            int i11 = 4 - this.f55520d;
            int i12 = 0;
            while (h0Var.a() > 0) {
                h0Var.l(this.f55519c.e(), i11, this.f55520d);
                this.f55519c.U(0);
                int L = this.f55519c.L();
                this.f55518b.U(0);
                this.f55517a.e(this.f55518b, 4);
                this.f55517a.e(h0Var, L);
                i12 = i12 + 4 + L;
            }
            this.f55517a.a(r10, i10, i12, 0, null);
            this.f55522f = true;
            return true;
        }
    }
}
