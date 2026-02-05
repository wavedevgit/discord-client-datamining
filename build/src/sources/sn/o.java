package sn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f49912a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f49913b;

    public o(n nVar, zq.h hVar) {
        this.f49912a = nVar;
        this.f49913b = hVar;
    }

    public static xn.a a(n nVar, yq.a aVar) {
        return (xn.a) zq.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, zq.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public xn.a get() {
        return a(this.f49912a, zq.c.b(this.f49913b));
    }
}
