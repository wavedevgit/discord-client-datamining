package to;

import jv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49979a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49980b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        this.f49979a = fVar;
        this.f49980b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        return new m(fVar, hVar);
    }

    public static hp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (hp.a) uq.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public hp.a get() {
        return c(this.f49979a, (a0) this.f49980b.get());
    }
}
