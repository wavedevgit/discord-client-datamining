package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35722a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35723b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35722a = fVar;
        this.f35723b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new m(fVar, hVar);
    }

    public static yp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (yp.a) lr.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public yp.a get() {
        return c(this.f35722a, (a0) this.f35723b.get());
    }
}
