package sp;

import uq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f49237a;

    public c(h hVar) {
        this.f49237a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(op.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((op.e) this.f49237a.get());
    }
}
