package ro;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f48585a;

    public d(c cVar) {
        this.f48585a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static no.f b(c cVar) {
        return (no.f) uq.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public no.f get() {
        return b(this.f48585a);
    }
}
