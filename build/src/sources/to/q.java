package to;

import jv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49985a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49986b;

    public q(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        this.f49985a = fVar;
        this.f49986b = hVar;
    }

    public static q a(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        return new q(fVar, hVar);
    }

    public static lq.a c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (lq.a) uq.g.d(fVar.m(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public lq.a get() {
        return c(this.f49985a, (a0) this.f49986b.get());
    }
}
