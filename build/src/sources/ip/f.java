package ip;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f30354a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f30355b;

    public f(c cVar, lr.h hVar) {
        this.f30354a = cVar;
        this.f30355b = hVar;
    }

    public static f a(c cVar, lr.h hVar) {
        return new f(cVar, hVar);
    }

    public static so.a b(c cVar, i iVar) {
        return (so.a) lr.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public so.a get() {
        return b(this.f30354a, (i) this.f30355b.get());
    }
}
