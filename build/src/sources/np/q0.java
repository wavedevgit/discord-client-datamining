package np;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f39350a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f39351b;

    public q0(cr.h hVar, cr.h hVar2) {
        this.f39350a = hVar;
        this.f39351b = hVar2;
    }

    public static q0 a(cr.h hVar, cr.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(vn.t tVar, vn.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((vn.t) this.f39350a.get(), (vn.w0) this.f39351b.get());
    }
}
