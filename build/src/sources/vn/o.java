package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final n f52666a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52667b;

    public o(n nVar, cr.h hVar) {
        this.f52666a = nVar;
        this.f52667b = hVar;
    }

    public static ao.a a(n nVar, br.a aVar) {
        return (ao.a) cr.g.d(nVar.a(aVar));
    }

    public static o b(n nVar, cr.h hVar) {
        return new o(nVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ao.a get() {
        return a(this.f52666a, cr.c.b(this.f52667b));
    }
}
