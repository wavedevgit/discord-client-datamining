package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35148a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35149b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35148a = fVar;
        this.f35149b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) lr.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f35148a, (a0) this.f35149b.get());
    }
}
