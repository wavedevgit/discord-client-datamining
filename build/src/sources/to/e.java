package to;

import jv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49967a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49968b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        this.f49967a = fVar;
        this.f49968b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, uq.h hVar) {
        return new e(fVar, hVar);
    }

    public static yn.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (yn.b) uq.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public yn.b get() {
        return b(this.f49967a, (a0) this.f49968b.get());
    }
}
