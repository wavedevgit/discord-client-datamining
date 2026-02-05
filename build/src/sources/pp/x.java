package pp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f46249a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f46250b;

    public x(v vVar, zq.h hVar) {
        this.f46249a = vVar;
        this.f46250b = hVar;
    }

    public static x a(v vVar, zq.h hVar) {
        return new x(vVar, hVar);
    }

    public static vp.a c(v vVar, vp.b bVar) {
        return (vp.a) zq.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public vp.a get() {
        return c(this.f46249a, (vp.b) this.f46250b.get());
    }
}
