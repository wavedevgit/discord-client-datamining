package np;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f39145a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f39146b;

    public g1(cr.h hVar, cr.h hVar2) {
        this.f39145a = hVar;
        this.f39146b = hVar2;
    }

    public static g1 a(cr.h hVar, cr.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(vn.t tVar, vn.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((vn.t) this.f39145a.get(), (vn.w0) this.f39146b.get());
    }
}
