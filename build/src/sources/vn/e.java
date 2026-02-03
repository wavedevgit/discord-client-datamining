package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f51443a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f51444b;

    public e(c cVar, uq.h hVar) {
        this.f51443a = cVar;
        this.f51444b = hVar;
    }

    public static e a(c cVar, uq.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) uq.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f51443a, (j) this.f51444b.get());
    }
}
