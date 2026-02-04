package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51724a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51725b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51724a = fVar;
        this.f51725b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) wq.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f51724a, (a0) this.f51725b.get());
    }
}
