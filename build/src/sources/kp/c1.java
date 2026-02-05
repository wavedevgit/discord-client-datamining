package kp;

import kp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f35189a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f35190b;

    public c1(zq.h hVar, zq.h hVar2) {
        this.f35189a = hVar;
        this.f35190b = hVar2;
    }

    public static c1 a(zq.h hVar, zq.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(sn.w0 w0Var, a1.b bVar, boolean z10, up.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((sn.w0) this.f35189a.get(), bVar, z10, (up.c) this.f35190b.get());
    }
}
