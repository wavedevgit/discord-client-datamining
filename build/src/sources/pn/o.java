package pn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f46296a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f46297b;

    public o(n nVar, wq.h hVar) {
        this.f46296a = nVar;
        this.f46297b = hVar;
    }

    public static un.a a(n nVar, vq.a aVar) {
        return (un.a) wq.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, wq.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public un.a get() {
        return a(this.f46296a, wq.c.b(this.f46297b));
    }
}
