package bq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f7452a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f7453b;

    public x(v vVar, lr.h hVar) {
        this.f7452a = vVar;
        this.f7453b = hVar;
    }

    public static x a(v vVar, lr.h hVar) {
        return new x(vVar, hVar);
    }

    public static hq.a c(v vVar, hq.b bVar) {
        return (hq.a) lr.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public hq.a get() {
        return c(this.f7452a, (hq.b) this.f7453b.get());
    }
}
