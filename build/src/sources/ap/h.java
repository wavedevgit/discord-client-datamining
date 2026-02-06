package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6255a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6256b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6255a = fVar;
        this.f6256b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) br.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f6255a, (a0) this.f6256b.get());
    }
}
