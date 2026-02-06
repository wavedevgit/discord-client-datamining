package ap;

import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f6249a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6250b;

    public e(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        this.f6249a = fVar;
        this.f6250b = hVar;
    }

    public static e a(com.withpersona.sdk2.inquiry.internal.network.f fVar, br.h hVar) {
        return new e(fVar, hVar);
    }

    public static go.b b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (go.b) br.g.d(fVar.a(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public go.b get() {
        return b(this.f6249a, (a0) this.f6250b.get());
    }
}
