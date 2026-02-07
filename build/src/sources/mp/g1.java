package mp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f37460a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f37461b;

    public g1(br.h hVar, br.h hVar2) {
        this.f37460a = hVar;
        this.f37461b = hVar2;
    }

    public static g1 a(br.h hVar, br.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(un.t tVar, un.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((un.t) this.f37460a.get(), (un.w0) this.f37461b.get());
    }
}
