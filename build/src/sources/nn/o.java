package nn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f42004a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f42005b;

    public o(n nVar, uq.h hVar) {
        this.f42004a = nVar;
        this.f42005b = hVar;
    }

    public static sn.a a(n nVar, tq.a aVar) {
        return (sn.a) uq.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, uq.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public sn.a get() {
        return a(this.f42004a, uq.c.b(this.f42005b));
    }
}
