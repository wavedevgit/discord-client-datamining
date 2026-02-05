package yo;

import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54897a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54898b;

    public m(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54897a = fVar;
        this.f54898b = hVar;
    }

    public static m a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new m(fVar, hVar);
    }

    public static mp.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (mp.a) zq.g.d(fVar.i(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public mp.a get() {
        return c(this.f54897a, (a0) this.f54898b.get());
    }
}
