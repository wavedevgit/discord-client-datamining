package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f49325a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f49326b;

    public j0(lr.h hVar, lr.h hVar2) {
        this.f49325a = hVar;
        this.f49326b = hVar2;
    }

    public static j0 a(lr.h hVar, lr.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(fo.f0 f0Var, fo.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((fo.f0) this.f49325a.get(), (fo.t) this.f49326b.get());
    }
}
