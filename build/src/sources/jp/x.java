package jp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32406a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32407b;

    public x(v vVar, tq.h hVar) {
        this.f32406a = vVar;
        this.f32407b = hVar;
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
        return c(this.f32406a, (pp.b) this.f32407b.get());
    }
}
