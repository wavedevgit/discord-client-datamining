package ko;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f31332a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f31333b;

    public j0(cr.h hVar, cr.h hVar2) {
        this.f31332a = hVar;
        this.f31333b = hVar2;
    }

    public static j0 a(cr.h hVar, cr.h hVar2) {
        return new j0(hVar, hVar2);
    }

    public static i0 c(vn.f0 f0Var, vn.t tVar) {
        return new i0(f0Var, tVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i0 get() {
        return c((vn.f0) this.f31332a.get(), (vn.t) this.f31333b.get());
    }
}
