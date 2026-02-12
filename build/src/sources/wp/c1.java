package wp;

import wp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f53029a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f53030b;

    public c1(lr.h hVar, lr.h hVar2) {
        this.f53029a = hVar;
        this.f53030b = hVar2;
    }

    public static c1 a(lr.h hVar, lr.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(fo.w0 w0Var, a1.b bVar, boolean z10, gq.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((fo.w0) this.f53029a.get(), bVar, z10, (gq.c) this.f53030b.get());
    }
}
