package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7199a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7200b;

    public o(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7199a = fVar;
        this.f7200b = hVar;
    }

    public static o a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new o(fVar, hVar);
    }

    public static sq.b c(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (sq.b) cr.g.d(fVar.k(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public sq.b get() {
        return c(this.f7199a, (a0) this.f7200b.get());
    }
}
