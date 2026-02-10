package wp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f53898a;

    public d(cr.h hVar) {
        this.f53898a = hVar;
    }

    public static d a(cr.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f53898a.get());
    }
}
