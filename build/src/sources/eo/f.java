package eo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f21907a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f21908b;

    public f(c cVar, cr.h hVar) {
        this.f21907a = cVar;
        this.f21908b = hVar;
    }

    public static f a(c cVar, cr.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) cr.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f21907a, (l) this.f21908b.get());
    }
}
