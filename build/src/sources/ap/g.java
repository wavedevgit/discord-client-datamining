package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6253a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6254b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6253a = fVar;
        this.f6254b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) br.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f6253a, (a0) this.f6254b.get());
    }
}
