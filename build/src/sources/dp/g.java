package dp;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f22052a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f22053b;

    public g(f fVar, uq.h hVar) {
        this.f22052a = fVar;
        this.f22053b = hVar;
    }

    public static g a(f fVar, uq.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) uq.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f22052a, (c) this.f22053b.get());
    }
}
