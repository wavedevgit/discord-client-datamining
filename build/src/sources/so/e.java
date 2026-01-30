package so;

import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49129a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49130b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49129a = fVar;
        this.f49130b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new e(fVar, hVar);
    }

    public static xn.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (xn.b) tq.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public xn.b get() {
        return b(this.f49129a, (a0) this.f49130b.get());
    }
}
