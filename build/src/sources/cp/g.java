package cp;

import okhttp3.Interceptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f20993a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f20994b;

    public g(f fVar, tq.h hVar) {
        this.f20993a = fVar;
        this.f20994b = hVar;
    }

    public static g a(f fVar, tq.h hVar) {
        return new g(fVar, hVar);
    }

    public static Interceptor c(f fVar, c cVar) {
        return (Interceptor) tq.g.d(fVar.b(cVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Interceptor get() {
        return c(this.f20993a, (c) this.f20994b.get());
    }
}
