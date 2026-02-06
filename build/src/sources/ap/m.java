package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6261a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6262b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6261a = fVar;
        this.f6262b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new m(fVar, hVar);
    }

    public static op.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (op.a) br.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public op.a get() {
        return c(this.f6261a, (a0) this.f6262b.get());
    }
}
