package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f5897a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f5898b;

    public d(c cVar, zq.h hVar) {
        this.f5897a = cVar;
        this.f5898b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) zq.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, zq.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f5897a, (r) this.f5898b.get());
    }
}
