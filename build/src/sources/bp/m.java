package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7196a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7197b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7196a = fVar;
        this.f7197b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new m(fVar, hVar);
    }

    public static pp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (pp.a) cr.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public pp.a get() {
        return c(this.f7196a, (a0) this.f7197b.get());
    }
}
