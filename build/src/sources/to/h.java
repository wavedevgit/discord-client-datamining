package to;

import jv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49973a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49974b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        this.f49973a = fVar;
        this.f49974b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) uq.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f49973a, (a0) this.f49974b.get());
    }
}
