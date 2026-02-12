package up;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f50896a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f50897b;

    public g(f fVar, lr.h hVar) {
        this.f50896a = fVar;
        this.f50897b = hVar;
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
        return c(this.f50896a, (c) this.f50897b.get());
    }
}
