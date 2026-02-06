package co;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f7640a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f7641b;

    public d(c cVar, br.h hVar) {
        this.f7640a = cVar;
        this.f7641b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) br.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, br.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f7640a, (r) this.f7641b.get());
    }
}
