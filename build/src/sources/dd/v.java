package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import ne.s0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private Format f20684a;

    /* renamed from: b  reason: collision with root package name */
    private s0 f20685b;

    /* renamed from: c  reason: collision with root package name */
    private tc.b0 f20686c;

    public v(String str) {
        this.f20684a = new Format.b().g0(str).G();
    }

    private void c() {
        ne.a.i(this.f20685b);
        w0.j(this.f20686c);
    }

    @Override // dd.b0
    public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        this.f20685b = s0Var;
        dVar.a();
        tc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f20686c = c10;
        c10.b(this.f20684a);
    }

    @Override // dd.b0
    public void b(ne.h0 h0Var) {
        c();
        long d10 = this.f20685b.d();
        long e10 = this.f20685b.e();
        if (d10 != -9223372036854775807L && e10 != -9223372036854775807L) {
            Format format = this.f20684a;
            if (e10 != format.A) {
                Format G = format.b().k0(e10).G();
                this.f20684a = G;
                this.f20686c.b(G);
            }
            int a10 = h0Var.a();
            this.f20686c.f(h0Var, a10);
            this.f20686c.d(d10, 1, a10, 0, null);
        }
    }
}
