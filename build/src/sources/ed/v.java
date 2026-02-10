package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private Format f21573a;

    /* renamed from: b  reason: collision with root package name */
    private s0 f21574b;

    /* renamed from: c  reason: collision with root package name */
    private uc.b0 f21575c;

    public v(String str) {
        this.f21573a = new Format.b().g0(str).G();
    }

    private void b() {
        oe.a.i(this.f21574b);
        w0.j(this.f21575c);
    }

    @Override // ed.b0
    public void a(oe.h0 h0Var) {
        b();
        long d10 = this.f21574b.d();
        long e10 = this.f21574b.e();
        if (d10 != -9223372036854775807L && e10 != -9223372036854775807L) {
            Format format = this.f21573a;
            if (e10 != format.A) {
                Format G = format.b().k0(e10).G();
                this.f21573a = G;
                this.f21575c.c(G);
            }
            int a10 = h0Var.a();
            this.f21575c.e(h0Var, a10);
            this.f21575c.a(d10, 1, a10, 0, null);
        }
    }

    @Override // ed.b0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f21574b = s0Var;
        dVar.a();
        uc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f21575c = c10;
        c10.c(this.f21573a);
    }
}
