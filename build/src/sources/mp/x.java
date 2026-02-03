package mp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f39052a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f39053b;

    public x(v vVar, wq.h hVar) {
        this.f39052a = vVar;
        this.f39053b = hVar;
    }

    public static x a(v vVar, wq.h hVar) {
        return new x(vVar, hVar);
    }

    public static sp.a c(v vVar, sp.b bVar) {
        return (sp.a) wq.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public sp.a get() {
        return c(this.f39052a, (sp.b) this.f39053b.get());
    }
}
