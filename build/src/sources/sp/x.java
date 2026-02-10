package sp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f50023a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f50024b;

    public x(v vVar, cr.h hVar) {
        this.f50023a = vVar;
        this.f50024b = hVar;
    }

    public static x a(v vVar, cr.h hVar) {
        return new x(vVar, hVar);
    }

    public static yp.a c(v vVar, yp.b bVar) {
        return (yp.a) cr.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public yp.a get() {
        return c(this.f50023a, (yp.b) this.f50024b.get());
    }
}
