package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7202a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7203b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7202a = fVar;
        this.f7203b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new q(fVar, hVar);
    }

    public static tq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (tq.a) cr.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public tq.a get() {
        return c(this.f7202a, (a0) this.f7203b.get());
    }
}
