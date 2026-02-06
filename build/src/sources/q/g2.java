package q;

import a0.i2;
import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g2 implements i2.e {

    /* renamed from: a  reason: collision with root package name */
    static final g2 f45891a = new g2();

    @Override // a0.i2.e
    public void a(Size size, a0.x2 x2Var, i2.b bVar) {
        a0.i2 j10 = x2Var.j(null);
        a0.r0 X = a0.w1.X();
        int o10 = a0.i2.b().o();
        if (j10 != null) {
            o10 = j10.o();
            bVar.b(j10.c());
            bVar.d(j10.k());
            bVar.c(j10.i());
            X = j10.f();
        }
        bVar.t(X);
        if (x2Var instanceof a0.x1) {
            u.p.b(size, bVar);
        }
        p.a aVar = new p.a(x2Var);
        bVar.x(aVar.Y(o10));
        bVar.f(aVar.Z(k2.b()));
        bVar.k(aVar.c0(j2.b()));
        bVar.e(q2.e(aVar.b0(t0.c())));
        bVar.y(x2Var.t());
        bVar.w(x2Var.y());
        a0.r1 Z = a0.r1.Z();
        Z.V(p.a.P, aVar.a0(null));
        Z.V(p.a.K, Long.valueOf(aVar.d0(-1L)));
        bVar.g(Z);
        bVar.g(aVar.X());
    }
}
