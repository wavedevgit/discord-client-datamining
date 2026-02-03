package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51729a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51730b;

    public h(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51729a = fVar;
        this.f51730b = hVar;
    }

    public static h a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new h(fVar, hVar);
    }

    public static r c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (r) wq.g.d(fVar.d(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c(this.f51729a, (a0) this.f51730b.get());
    }
}
