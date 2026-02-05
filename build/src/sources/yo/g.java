package yo;

import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54889a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54890b;

    public g(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54889a = fVar;
        this.f54890b = hVar;
    }

    public static g a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new g(fVar, hVar);
    }

    public static com.withpersona.sdk2.inquiry.governmentid.network.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) zq.g.d(fVar.c(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.governmentid.network.a get() {
        return c(this.f54889a, (a0) this.f54890b.get());
    }
}
