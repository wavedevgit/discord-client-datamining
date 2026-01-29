package ep;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f23137a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f23138b;

    public g1(tq.h hVar, tq.h hVar2) {
        this.f23137a = hVar;
        this.f23138b = hVar2;
    }

    public static g1 a(tq.h hVar, tq.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(mn.t tVar, mn.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((mn.t) this.f23137a.get(), (mn.w0) this.f23138b.get());
    }
}
