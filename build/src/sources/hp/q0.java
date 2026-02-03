package hp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f27468a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f27469b;

    public q0(wq.h hVar, wq.h hVar2) {
        this.f27468a = hVar;
        this.f27469b = hVar2;
    }

    public static q0 a(wq.h hVar, wq.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(pn.t tVar, pn.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((pn.t) this.f27468a.get(), (pn.w0) this.f27469b.get());
    }
}
