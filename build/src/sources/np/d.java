package np;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f42034a;

    public d(tq.h hVar) {
        this.f42034a = hVar;
    }

    public static d a(tq.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f42034a.get());
    }
}
