package xn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53481a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f53482b;

    public f(c cVar, wq.h hVar) {
        this.f53481a = cVar;
        this.f53482b = hVar;
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
        return b(this.f53481a, (l) this.f53482b.get());
    }
}
