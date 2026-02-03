package fp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f24668a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f24669b;

    public g1(uq.h hVar, uq.h hVar2) {
        this.f24668a = hVar;
        this.f24669b = hVar2;
    }

    public static g1 a(uq.h hVar, uq.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(nn.t tVar, nn.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((nn.t) this.f24668a.get(), (nn.w0) this.f24669b.get());
    }
}
