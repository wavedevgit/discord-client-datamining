package xc;

import com.google.android.exoplayer2.Format;
import ne.d0;
import ne.h0;
import tc.b0;
import xc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends e {

    /* renamed from: b  reason: collision with root package name */
    private final h0 f54652b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f54653c;

    /* renamed from: d  reason: collision with root package name */
    private int f54654d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54655e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f54656f;

    /* renamed from: g  reason: collision with root package name */
    private int f54657g;

    public f(b0 b0Var) {
        super(b0Var);
        this.f54652b = new h0(d0.f38913a);
        this.f54653c = new h0(4);
    }

    @Override // xc.e
    protected boolean b(h0 h0Var) {
        int H = h0Var.H();
        int i10 = (H >> 4) & 15;
        int i11 = H & 15;
        if (i11 == 7) {
            this.f54657g = i10;
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
        if (H == 0 && !this.f54655e) {
            h0 h0Var2 = new h0(new byte[h0Var.a()]);
            h0Var.l(h0Var2.e(), 0, h0Var.a());
            oe.a b10 = oe.a.b(h0Var2);
            this.f54654d = b10.f41631b;
            this.f54651a.b(new Format.b().g0("video/avc").K(b10.f41638i).n0(b10.f41632c).S(b10.f41633d).c0(b10.f41637h).V(b10.f41630a).G());
            this.f54655e = true;
            return false;
        } else if (H != 1 || !this.f54655e) {
            return false;
        } else {
            if (this.f54657g == 1) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (!this.f54656f && i10 == 0) {
                return false;
            }
            byte[] e10 = this.f54653c.e();
            e10[0] = 0;
            e10[1] = 0;
            e10[2] = 0;
            int i11 = 4 - this.f54654d;
            int i12 = 0;
            while (h0Var.a() > 0) {
                h0Var.l(this.f54653c.e(), i11, this.f54654d);
                this.f54653c.U(0);
                int L = this.f54653c.L();
                this.f54652b.U(0);
                this.f54651a.f(this.f54652b, 4);
                this.f54651a.f(h0Var, L);
                i12 = i12 + 4 + L;
            }
            this.f54651a.d(r10, i10, i12, 0, null);
            this.f54656f = true;
            return true;
        }
    }
}
