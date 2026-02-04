package xn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53477a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f53478b;

    public d(c cVar, wq.h hVar) {
        this.f53477a = cVar;
        this.f53478b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) wq.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, wq.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f53477a, (r) this.f53478b.get());
    }
}
