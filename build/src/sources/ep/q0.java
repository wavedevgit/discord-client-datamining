package ep;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f23342a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f23343b;

    public q0(tq.h hVar, tq.h hVar2) {
        this.f23342a = hVar;
        this.f23343b = hVar2;
    }

    public static q0 a(tq.h hVar, tq.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(mn.t tVar, mn.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((mn.t) this.f23342a.get(), (mn.w0) this.f23343b.get());
    }
}
