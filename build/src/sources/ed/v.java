package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private Format f22741a;

    /* renamed from: b  reason: collision with root package name */
    private s0 f22742b;

    /* renamed from: c  reason: collision with root package name */
    private uc.b0 f22743c;

    public v(String str) {
        this.f22741a = new Format.b().g0(str).G();
    }

    private void b() {
        oe.a.i(this.f22742b);
        w0.j(this.f22743c);
    }

    @Override // ed.b0
    public void a(oe.h0 h0Var) {
        b();
        long d10 = this.f22742b.d();
        long e10 = this.f22742b.e();
        if (d10 != -9223372036854775807L && e10 != -9223372036854775807L) {
            Format format = this.f22741a;
            if (e10 != format.A) {
                Format G = format.b().k0(e10).G();
                this.f22741a = G;
                this.f22743c.c(G);
            }
            int a10 = h0Var.a();
            this.f22743c.e(h0Var, a10);
            this.f22743c.a(d10, 1, a10, 0, null);
        }
    }

    @Override // ed.b0
    public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        this.f22742b = s0Var;
        dVar.a();
        uc.b0 c10 = mVar.c(dVar.c(), 5);
        this.f22743c = c10;
        c10.c(this.f22741a);
    }
}
