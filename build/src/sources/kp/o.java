package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35725a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35726b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35725a = fVar;
        this.f35726b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new o(fVar, hVar);
    }

    public static br.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (br.b) lr.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public br.b get() {
        return c(this.f35725a, (a0) this.f35726b.get());
    }
}
