package vo;

import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51723a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51724b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51723a = fVar;
        this.f51724b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new e(fVar, hVar);
    }

    public static ao.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (ao.b) wq.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ao.b get() {
        return b(this.f51723a, (a0) this.f51724b.get());
    }
}
