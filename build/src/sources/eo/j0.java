package eo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f22025a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f22026b;

    public j0(wq.h hVar, wq.h hVar2) {
        this.f22025a = hVar;
        this.f22026b = hVar2;
    }

    public static j0 a(wq.h hVar, wq.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(pn.f0 f0Var, pn.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((pn.f0) this.f22025a.get(), (pn.t) this.f22026b.get());
    }
}
