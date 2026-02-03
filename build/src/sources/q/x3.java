package q;

import a0.p0;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class x3 extends u0 {

    /* renamed from: c  reason: collision with root package name */
    static final x3 f47108c = new x3(new u.k());

    /* renamed from: b  reason: collision with root package name */
    private final u.k f47109b;

    private x3(u.k kVar) {
        this.f47109b = kVar;
    }

    @Override // q.u0, a0.p0.b
    public void a(a0.x2 x2Var, p0.a aVar) {
        super.a(x2Var, aVar);
        if (x2Var instanceof a0.g1) {
            a0.g1 g1Var = (a0.g1) x2Var;
            a.C0555a c0555a = new a.C0555a();
            if (g1Var.e0()) {
                this.f47109b.a(g1Var.X(), c0555a);
            }
            aVar.e(c0555a.c());
            return;
        }
        throw new IllegalArgumentException("config is not ImageCaptureConfig");
    }
}
