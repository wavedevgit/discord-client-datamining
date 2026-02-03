package fp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f24873a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f24874b;

    public q0(uq.h hVar, uq.h hVar2) {
        this.f24873a = hVar;
        this.f24874b = hVar2;
    }

    public static q0 a(uq.h hVar, uq.h hVar2) {
        return new q0(hVar, hVar2);
    }

    public static o0 c(nn.t tVar, nn.w0 w0Var) {
        return new o0(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public o0 get() {
        return c((nn.t) this.f24873a.get(), (nn.w0) this.f24874b.get());
    }
}
