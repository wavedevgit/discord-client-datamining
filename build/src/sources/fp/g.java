package fp;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f24340a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f24341b;

    public g(f fVar, wq.h hVar) {
        this.f24340a = fVar;
        this.f24341b = hVar;
    }

    public static g a(f fVar, wq.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) wq.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f24340a, (c) this.f24341b.get());
    }
}
