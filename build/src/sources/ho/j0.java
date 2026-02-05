package ho;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f26337a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f26338b;

    public j0(zq.h hVar, zq.h hVar2) {
        this.f26337a = hVar;
        this.f26338b = hVar2;
    }

    public static j0 a(zq.h hVar, zq.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(sn.f0 f0Var, sn.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((sn.f0) this.f26337a.get(), (sn.t) this.f26338b.get());
    }
}
