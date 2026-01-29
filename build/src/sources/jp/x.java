package jp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32390a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32391b;

    public x(v vVar, tq.h hVar) {
        this.f32390a = vVar;
        this.f32391b = hVar;
    }

    public static x a(v vVar, tq.h hVar) {
        return new x(vVar, hVar);
    }

    public static pp.a c(v vVar, pp.b bVar) {
        return (pp.a) tq.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public pp.a get() {
        return c(this.f32390a, (pp.b) this.f32391b.get());
    }
}
