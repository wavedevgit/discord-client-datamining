package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import ne.s0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private Format f21654a;

    /* renamed from: b  reason: collision with root package name */
    private s0 f21655b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f21656c;

    public v(String str) {
        this.f21654a = new Format.b().g0(str).G();
    }

    private void c() {
        ne.a.i(this.f21655b);
        w0.j(this.f21656c);
    }

    @Override // dd.b0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f21655b = s0Var;
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f21656c = c10;
        c10.b(this.f21654a);
    }

    @Override // dd.b0
    public void b(ne.h0 h0Var) {
        c();
        long d10 = this.f21655b.d();
        long e10 = this.f21655b.e();
        if (d10 != -9223372036854775807L && e10 != -9223372036854775807L) {
            Format format = this.f21654a;
            if (e10 != format.A) {
                Format G = format.b().k0(e10).G();
                this.f21654a = G;
                this.f21656c.b(G);
            }
            int a10 = h0Var.a();
            this.f21656c.f(h0Var, a10);
            this.f21656c.d(d10, 1, a10, 0, null);
        }
    }
}
