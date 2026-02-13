package up;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f51464a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f51465b;

    public g(f fVar, lr.h hVar) {
        this.f51464a = fVar;
        this.f51465b = hVar;
    }

    public static g a(f fVar, lr.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) lr.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f51464a, (c) this.f51465b.get());
    }
}
