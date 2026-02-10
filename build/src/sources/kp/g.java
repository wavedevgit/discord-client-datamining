package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35145a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35146b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35145a = fVar;
        this.f35146b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) lr.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f35145a, (a0) this.f35146b.get());
    }
}
