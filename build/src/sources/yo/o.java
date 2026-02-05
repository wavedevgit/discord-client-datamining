package yo;

import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54900a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54901b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54900a = fVar;
        this.f54901b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new o(fVar, hVar);
    }

    public static pq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (pq.b) zq.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public pq.b get() {
        return c(this.f54900a, (a0) this.f54901b.get());
    }
}
