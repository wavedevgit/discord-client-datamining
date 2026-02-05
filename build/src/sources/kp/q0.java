package kp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f35461a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f35462b;

    public q0(zq.h hVar, zq.h hVar2) {
        this.f35461a = hVar;
        this.f35462b = hVar2;
    }

    public static q0 a(zq.h hVar, zq.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(sn.t tVar, sn.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((sn.t) this.f35461a.get(), (sn.w0) this.f35462b.get());
    }
}
