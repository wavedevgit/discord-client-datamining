package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51735a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51736b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51735a = fVar;
        this.f51736b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new o(fVar, hVar);
    }

    public static mq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (mq.b) wq.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public mq.b get() {
        return c(this.f51735a, (a0) this.f51736b.get());
    }
}
