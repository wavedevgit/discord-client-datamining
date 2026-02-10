package wp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f53095a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f53096b;

    public g1(lr.h hVar, lr.h hVar2) {
        this.f53095a = hVar;
        this.f53096b = hVar2;
    }

    public static g1 a(lr.h hVar, lr.h hVar2) {
        return new g1(hVar, hVar2);
    }

    public static f1 c(fo.t tVar, fo.w0 w0Var) {
        return new f1(tVar, w0Var);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public f1 get() {
        return c((fo.t) this.f53095a.get(), (fo.w0) this.f53096b.get());
    }
}
