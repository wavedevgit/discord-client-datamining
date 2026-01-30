package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49144a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49145b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49144a = fVar;
        this.f49145b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new o(fVar, hVar);
    }

    public static jq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (jq.b) tq.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public jq.b get() {
        return c(this.f49144a, (a0) this.f49145b.get());
    }
}
