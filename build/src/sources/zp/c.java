package zp;

import br.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f56430a;

    public c(h hVar) {
        this.f56430a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(vp.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((vp.e) this.f56430a.get());
    }
}
