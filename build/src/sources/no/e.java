package no;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f38750a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f38751b;

    public e(c cVar, lr.h hVar) {
        this.f38750a = cVar;
        this.f38751b = hVar;
    }

    public static e a(c cVar, lr.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) lr.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f38750a, (j) this.f38751b.get());
    }
}
