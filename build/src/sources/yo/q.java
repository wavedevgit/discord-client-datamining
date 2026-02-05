package yo;

import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54903a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54904b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54903a = fVar;
        this.f54904b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new q(fVar, hVar);
    }

    public static qq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (qq.a) zq.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public qq.a get() {
        return c(this.f54903a, (a0) this.f54904b.get());
    }
}
