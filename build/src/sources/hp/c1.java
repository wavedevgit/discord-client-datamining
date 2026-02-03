package hp;

import hp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f27196a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f27197b;

    public c1(wq.h hVar, wq.h hVar2) {
        this.f27196a = hVar;
        this.f27197b = hVar2;
    }

    public static c1 a(wq.h hVar, wq.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(pn.w0 w0Var, a1.b bVar, boolean z10, rp.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((pn.w0) this.f27196a.get(), bVar, z10, (rp.c) this.f27197b.get());
    }
}
