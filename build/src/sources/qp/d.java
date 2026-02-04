package qp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f48028a;

    public d(wq.h hVar) {
        this.f48028a = hVar;
    }

    public static d a(wq.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f48028a.get());
    }
}
