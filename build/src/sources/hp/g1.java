package hp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f27263a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f27264b;

    public g1(wq.h hVar, wq.h hVar2) {
        this.f27263a = hVar;
        this.f27264b = hVar2;
    }

    public static g1 a(wq.h hVar, wq.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(pn.t tVar, pn.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((pn.t) this.f27263a.get(), (pn.w0) this.f27264b.get());
    }
}
