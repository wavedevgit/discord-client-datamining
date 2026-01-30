package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49147a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49148b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49147a = fVar;
        this.f49148b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new q(fVar, hVar);
    }

    public static kq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (kq.a) tq.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public kq.a get() {
        return c(this.f49147a, (a0) this.f49148b.get());
    }
}
