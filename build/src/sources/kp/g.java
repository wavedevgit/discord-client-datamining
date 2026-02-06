package kp;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f35163a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f35164b;

    public g(f fVar, br.h hVar) {
        this.f35163a = fVar;
        this.f35164b = hVar;
    }

    public static g a(f fVar, br.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) br.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f35163a, (c) this.f35164b.get());
    }
}
