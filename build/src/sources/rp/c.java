package rp;

import tq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f48456a;

    public c(h hVar) {
        this.f48456a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(np.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((np.e) this.f48456a.get());
    }
}
