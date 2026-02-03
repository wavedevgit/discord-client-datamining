package to;

import jv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49982a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49983b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        this.f49982a = fVar;
        this.f49983b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        return new o(fVar, hVar);
    }

    public static kq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (kq.b) uq.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public kq.b get() {
        return c(this.f49982a, (a0) this.f49983b.get());
    }
}
