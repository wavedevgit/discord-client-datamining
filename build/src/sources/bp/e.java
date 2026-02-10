package bp;

import wv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f7184a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7185b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        this.f7184a = fVar;
        this.f7185b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, cr.h hVar) {
        return new e(fVar, hVar);
    }

    public static ho.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (ho.b) cr.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ho.b get() {
        return b(this.f7184a, (a0) this.f7185b.get());
    }
}
