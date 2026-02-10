package fo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f24061a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f24062b;

    public o(n nVar, lr.h hVar) {
        this.f24061a = nVar;
        this.f24062b = hVar;
    }

    public static ko.a a(n nVar, kr.a aVar) {
        return (ko.a) lr.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, lr.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ko.a get() {
        return a(this.f24061a, lr.c.b(this.f24062b));
    }
}
