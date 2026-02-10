package no;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f38179a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f38180b;

    public d(c cVar, lr.h hVar) {
        this.f38179a = cVar;
        this.f38180b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) lr.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, lr.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f38179a, (r) this.f38180b.get());
    }
}
