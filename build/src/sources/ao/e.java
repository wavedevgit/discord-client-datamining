package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f5899a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f5900b;

    public e(c cVar, zq.h hVar) {
        this.f5899a = cVar;
        this.f5900b = hVar;
    }

    public static e a(c cVar, zq.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) zq.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f5899a, (j) this.f5900b.get());
    }
}
