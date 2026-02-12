package ip;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f30352a;

    public d(c cVar) {
        this.f30352a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static ep.f b(c cVar) {
        return (ep.f) lr.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ep.f get() {
        return b(this.f30352a);
    }
}
