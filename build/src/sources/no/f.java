package no;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f38752a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f38753b;

    public f(c cVar, lr.h hVar) {
        this.f38752a = cVar;
        this.f38753b = hVar;
    }

    public static f a(c cVar, lr.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) lr.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f38752a, (l) this.f38753b.get());
    }
}
