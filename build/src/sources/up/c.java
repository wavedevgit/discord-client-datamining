package up;

import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f50830a;

    public c(h hVar) {
        this.f50830a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(qp.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((qp.e) this.f50830a.get());
    }
}
