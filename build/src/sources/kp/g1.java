package kp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f35256a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f35257b;

    public g1(zq.h hVar, zq.h hVar2) {
        this.f35256a = hVar;
        this.f35257b = hVar2;
    }

    public static g1 a(zq.h hVar, zq.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(sn.t tVar, sn.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((sn.t) this.f35256a.get(), (sn.w0) this.f35257b.get());
    }
}
