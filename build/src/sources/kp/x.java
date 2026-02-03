package kp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f36325a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f36326b;

    public x(v vVar, uq.h hVar) {
        this.f36325a = vVar;
        this.f36326b = hVar;
    }

    public static x a(v vVar, uq.h hVar) {
        return new x(vVar, hVar);
    }

    public static qp.a c(v vVar, qp.b bVar) {
        return (qp.a) uq.g.d(vVar.b(bVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public qp.a get() {
        return c(this.f36325a, (qp.b) this.f36326b.get());
    }
}
