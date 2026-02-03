package q;

import a0.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class u0 implements p0.b {

    /* renamed from: a  reason: collision with root package name */
    static final u0 f46890a = new u0();

    @Override // a0.p0.b
    public void a(a0.x2 x2Var, p0.a aVar) {
        a0.p0 R = x2Var.R(null);
        a0.r0 X = a0.w1.X();
        int k10 = a0.p0.b().k();
        if (R != null) {
            k10 = R.k();
            aVar.a(R.c());
            X = R.g();
        }
        aVar.q(X);
        p.a aVar2 = new p.a(x2Var);
        aVar.t(aVar2.Y(k10));
        aVar.c(q2.e(aVar2.b0(t0.c())));
        aVar.e(aVar2.X());
    }
}
