package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f51445a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f51446b;

    public f(c cVar, uq.h hVar) {
        this.f51445a = cVar;
        this.f51446b = hVar;
    }

    public static f a(c cVar, uq.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) uq.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f51445a, (l) this.f51446b.get());
    }
}
