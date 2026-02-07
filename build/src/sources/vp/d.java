package vp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52871a;

    public d(br.h hVar) {
        this.f52871a = hVar;
    }

    public static d a(br.h hVar) {
        return new d(hVar);
    }

    public static c c(e eVar) {
        return new c(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((e) this.f52871a.get());
    }
}
