package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49135a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49136b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49135a = fVar;
        this.f49136b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) tq.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f49135a, (a0) this.f49136b.get());
    }
}
