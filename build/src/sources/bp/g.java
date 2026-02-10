package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7188a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7189b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7188a = fVar;
        this.f7189b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) cr.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f7188a, (a0) this.f7189b.get());
    }
}
