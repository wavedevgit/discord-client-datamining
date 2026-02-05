package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f5901a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f5902b;

    public f(c cVar, zq.h hVar) {
        this.f5901a = cVar;
        this.f5902b = hVar;
    }

    public static f a(c cVar, zq.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) zq.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f5901a, (l) this.f5902b.get());
    }
}
