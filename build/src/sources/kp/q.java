package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35159a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35160b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35159a = fVar;
        this.f35160b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new q(fVar, hVar);
    }

    public static cr.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (cr.a) lr.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public cr.a get() {
        return c(this.f35159a, (a0) this.f35160b.get());
    }
}
