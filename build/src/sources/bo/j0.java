package bo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f6970a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f6971b;

    public j0(uq.h hVar, uq.h hVar2) {
        this.f6970a = hVar;
        this.f6971b = hVar2;
    }

    public static j0 a(uq.h hVar, uq.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(nn.f0 f0Var, nn.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((nn.f0) this.f6970a.get(), (nn.t) this.f6971b.get());
    }
}
