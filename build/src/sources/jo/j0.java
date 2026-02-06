package jo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f30333a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f30334b;

    public j0(br.h hVar, br.h hVar2) {
        this.f30333a = hVar;
        this.f30334b = hVar2;
    }

    public static j0 a(br.h hVar, br.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(un.f0 f0Var, un.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((un.f0) this.f30333a.get(), (un.t) this.f30334b.get());
    }
}
