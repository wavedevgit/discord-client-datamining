package op;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f44604a;

    public d(uq.h hVar) {
        this.f44604a = hVar;
    }

    public static d a(uq.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f44604a.get());
    }
}
