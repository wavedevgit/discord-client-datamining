package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7190a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7191b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7190a = fVar;
        this.f7191b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) cr.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f7190a, (a0) this.f7191b.get());
    }
}
