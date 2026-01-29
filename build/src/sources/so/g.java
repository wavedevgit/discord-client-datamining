package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49117a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49118b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49117a = fVar;
        this.f49118b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) tq.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f49117a, (a0) this.f49118b.get());
    }
}
