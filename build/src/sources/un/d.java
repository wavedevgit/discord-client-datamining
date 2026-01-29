package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50469a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f50470b;

    public d(c cVar, tq.h hVar) {
        this.f50469a = cVar;
        this.f50470b = hVar;
    }

    public static g a(c cVar, r rVar) {
        return (g) tq.g.d(cVar.a(rVar));
    }

    public static d b(c cVar, tq.h hVar) {
        return new d(cVar, hVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public g get() {
        return a(this.f50469a, (r) this.f50470b.get());
    }
}
