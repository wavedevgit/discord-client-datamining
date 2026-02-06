package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6264a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6265b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6264a = fVar;
        this.f6265b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new o(fVar, hVar);
    }

    public static rq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (rq.b) br.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public rq.b get() {
        return c(this.f6264a, (a0) this.f6265b.get());
    }
}
