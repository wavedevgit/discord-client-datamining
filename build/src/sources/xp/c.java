package xp;

import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f54069a;

    public c(h hVar) {
        this.f54069a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(tp.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((tp.e) this.f54069a.get());
    }
}
