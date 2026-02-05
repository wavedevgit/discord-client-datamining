package ip;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f30057a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f30058b;

    public g(f fVar, zq.h hVar) {
        this.f30057a = fVar;
        this.f30058b = hVar;
    }

    public static g a(f fVar, zq.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) zq.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f30057a, (c) this.f30058b.get());
    }
}
