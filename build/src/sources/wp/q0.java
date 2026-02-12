package wp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f53301a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f53302b;

    public q0(lr.h hVar, lr.h hVar2) {
        this.f53301a = hVar;
        this.f53302b = hVar2;
    }

    public static q0 a(lr.h hVar, lr.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(fo.t tVar, fo.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((fo.t) this.f53301a.get(), (fo.w0) this.f53302b.get());
    }
}
