package aq;

import cr.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f6008a;

    public c(h hVar) {
        this.f6008a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(wp.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((wp.e) this.f6008a.get());
    }
}
