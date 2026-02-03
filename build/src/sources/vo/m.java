package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51735a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51736b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51735a = fVar;
        this.f51736b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new m(fVar, hVar);
    }

    public static jp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (jp.a) wq.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public jp.a get() {
        return c(this.f51735a, (a0) this.f51736b.get());
    }
}
