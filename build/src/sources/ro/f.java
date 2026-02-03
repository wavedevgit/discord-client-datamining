package ro;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f48587a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f48588b;

    public f(c cVar, uq.h hVar) {
        this.f48587a = cVar;
        this.f48588b = hVar;
    }

    public static f a(c cVar, uq.h hVar) {
        return new f(cVar, hVar);
    }

    public static ao.a b(c cVar, i iVar) {
        return (ao.a) uq.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ao.a get() {
        return b(this.f48587a, (i) this.f48588b.get());
    }
}
