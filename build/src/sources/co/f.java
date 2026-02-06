package co;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f7644a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f7645b;

    public f(c cVar, br.h hVar) {
        this.f7644a = cVar;
        this.f7645b = hVar;
    }

    public static f a(c cVar, br.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) br.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f7644a, (l) this.f7645b.get());
    }
}
