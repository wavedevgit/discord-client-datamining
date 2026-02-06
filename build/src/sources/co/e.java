package co;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f7642a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f7643b;

    public e(c cVar, br.h hVar) {
        this.f7642a = cVar;
        this.f7643b = hVar;
    }

    public static e a(c cVar, br.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) br.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f7642a, (j) this.f7643b.get());
    }
}
