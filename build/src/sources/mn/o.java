package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f39245a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39246b;

    public o(n nVar, tq.h hVar) {
        this.f39245a = nVar;
        this.f39246b = hVar;
    }

    public static rn.a a(n nVar, sq.a aVar) {
        return (rn.a) tq.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, tq.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public rn.a get() {
        return a(this.f39245a, tq.c.b(this.f39246b));
    }
}
