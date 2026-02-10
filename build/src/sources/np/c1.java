package np;

import np.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f39078a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f39079b;

    public c1(cr.h hVar, cr.h hVar2) {
        this.f39078a = hVar;
        this.f39079b = hVar2;
    }

    public static c1 a(cr.h hVar, cr.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(vn.w0 w0Var, a1.b bVar, boolean z10, xp.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((vn.w0) this.f39078a.get(), bVar, z10, (xp.c) this.f39079b.get());
    }
}
