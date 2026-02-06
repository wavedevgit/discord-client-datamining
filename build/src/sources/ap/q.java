package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6267a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6268b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6267a = fVar;
        this.f6268b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new q(fVar, hVar);
    }

    public static sq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (sq.a) br.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public sq.a get() {
        return c(this.f6267a, (a0) this.f6268b.get());
    }
}
