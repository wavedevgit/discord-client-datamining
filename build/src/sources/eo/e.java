package eo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f21905a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f21906b;

    public e(c cVar, cr.h hVar) {
        this.f21905a = cVar;
        this.f21906b = hVar;
    }

    public static e a(c cVar, cr.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) cr.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f21905a, (j) this.f21906b.get());
    }
}
