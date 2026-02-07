package rp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f49198a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f49199b;

    public x(v vVar, br.h hVar) {
        this.f49198a = vVar;
        this.f49199b = hVar;
    }

    public static x a(v vVar, br.h hVar) {
        return new x(vVar, hVar);
    }

    public static xp.a c(v vVar, xp.b bVar) {
        return (xp.a) br.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public xp.a get() {
        return c(this.f49198a, (xp.b) this.f49199b.get());
    }
}
