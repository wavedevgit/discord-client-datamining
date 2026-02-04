package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51738a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51739b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51738a = fVar;
        this.f51739b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new q(fVar, hVar);
    }

    public static nq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (nq.a) wq.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public nq.a get() {
        return c(this.f51738a, (a0) this.f51739b.get());
    }
}
