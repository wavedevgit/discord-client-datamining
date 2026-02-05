package yo;

import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54885a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54886b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54885a = fVar;
        this.f54886b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new e(fVar, hVar);
    }

    public static eo.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (eo.b) zq.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public eo.b get() {
        return b(this.f54885a, (a0) this.f54886b.get());
    }
}
