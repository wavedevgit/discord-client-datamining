package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f51758a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f51759b;

    public o(n nVar, br.h hVar) {
        this.f51758a = nVar;
        this.f51759b = hVar;
    }

    public static zn.a a(n nVar, ar.a aVar) {
        return (zn.a) br.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, br.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public zn.a get() {
        return a(this.f51758a, br.c.b(this.f51759b));
    }
}
