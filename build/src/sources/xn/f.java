package xn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53484a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f53485b;

    public f(c cVar, wq.h hVar) {
        this.f53484a = cVar;
        this.f53485b = hVar;
    }

    public static f a(c cVar, wq.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) wq.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f53484a, (l) this.f53485b.get());
    }
}
