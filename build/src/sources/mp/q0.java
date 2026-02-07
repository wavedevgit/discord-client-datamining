package mp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f37665a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f37666b;

    public q0(br.h hVar, br.h hVar2) {
        this.f37665a = hVar;
        this.f37666b = hVar2;
    }

    public static q0 a(br.h hVar, br.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(un.t tVar, un.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((un.t) this.f37665a.get(), (un.w0) this.f37666b.get());
    }
}
