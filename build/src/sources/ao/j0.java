package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f6147a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f6148b;

    public j0(tq.h hVar, tq.h hVar2) {
        this.f6147a = hVar;
        this.f6148b = hVar2;
    }

    public static j0 a(tq.h hVar, tq.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(mn.f0 f0Var, mn.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((mn.f0) this.f6147a.get(), (mn.t) this.f6148b.get());
    }
}
