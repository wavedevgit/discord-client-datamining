package fq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f24194a;

    public d(lr.h hVar) {
        this.f24194a = hVar;
    }

    public static d a(lr.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f24194a.get());
    }
}
