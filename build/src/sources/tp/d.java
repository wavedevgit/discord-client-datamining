package tp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50895a;

    public d(zq.h hVar) {
        this.f50895a = hVar;
    }

    public static d a(zq.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f50895a.get());
    }
}
