package ep;

import ep.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f23070a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f23071b;

    public c1(tq.h hVar, tq.h hVar2) {
        this.f23070a = hVar;
        this.f23071b = hVar2;
    }

    public static c1 a(tq.h hVar, tq.h hVar2) {
        return new c1(hVar, hVar2);
    }

    public static b1 c(mn.w0 w0Var, a1.b bVar, boolean z10, op.c cVar) {
        return new b1(w0Var, bVar, z10, cVar);
    }

    public b1 b(a1.b bVar, boolean z10) {
        return c((mn.w0) this.f23070a.get(), bVar, z10, (op.c) this.f23071b.get());
    }
}
