package mp;

import mp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f37393a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f37394b;

    public c1(br.h hVar, br.h hVar2) {
        this.f37393a = hVar;
        this.f37394b = hVar2;
    }

    public static c1 a(br.h hVar, br.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(un.w0 w0Var, a1.b bVar, boolean z10, wp.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((un.w0) this.f37393a.get(), bVar, z10, (wp.c) this.f37394b.get());
    }
}
