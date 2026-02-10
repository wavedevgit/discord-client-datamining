package zo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f56573a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f56574b;

    public f(c cVar, cr.h hVar) {
        this.f56573a = cVar;
        this.f56574b = hVar;
    }

    public static f a(c cVar, cr.h hVar) {
        return new f(cVar, hVar);
    }

    public static jo.a b(c cVar, i iVar) {
        return (jo.a) cr.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public jo.a get() {
        return b(this.f56573a, (i) this.f56574b.get());
    }
}
