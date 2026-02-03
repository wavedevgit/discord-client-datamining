package fp;

import fp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f24601a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f24602b;

    public c1(uq.h hVar, uq.h hVar2) {
        this.f24601a = hVar;
        this.f24602b = hVar2;
    }

    public static c1 a(uq.h hVar, uq.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(nn.w0 w0Var, a1.b bVar, boolean z10, pp.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((nn.w0) this.f24601a.get(), bVar, z10, (pp.c) this.f24602b.get());
    }
}
