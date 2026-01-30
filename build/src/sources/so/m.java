package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49141a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49142b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49141a = fVar;
        this.f49142b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new m(fVar, hVar);
    }

    public static gp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (gp.a) tq.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public gp.a get() {
        return c(this.f49141a, (a0) this.f49142b.get());
    }
}
