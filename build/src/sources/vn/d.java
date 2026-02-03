package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f51441a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f51442b;

    public d(c cVar, uq.h hVar) {
        this.f51441a = cVar;
        this.f51442b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) uq.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, uq.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f51441a, (r) this.f51442b.get());
    }
}
