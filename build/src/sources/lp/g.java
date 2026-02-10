package lp;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f36290a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f36291b;

    public g(f fVar, cr.h hVar) {
        this.f36290a = fVar;
        this.f36291b = hVar;
    }

    public static g a(f fVar, cr.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) cr.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f36290a, (c) this.f36291b.get());
    }
}
