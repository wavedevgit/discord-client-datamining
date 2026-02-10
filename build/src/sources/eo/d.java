package eo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f21903a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f21904b;

    public d(c cVar, cr.h hVar) {
        this.f21903a = cVar;
        this.f21904b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) cr.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, cr.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f21903a, (r) this.f21904b.get());
    }
}
