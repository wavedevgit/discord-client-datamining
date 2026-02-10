package kp;

import fw.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f35141a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35142b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        this.f35141a = fVar;
        this.f35142b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, lr.h hVar) {
        return new e(fVar, hVar);
    }

    public static qo.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (qo.b) lr.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public qo.b get() {
        return b(this.f35141a, (a0) this.f35142b.get());
    }
}
