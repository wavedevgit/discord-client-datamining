package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50487a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f50488b;

    public e(c cVar, tq.h hVar) {
        this.f50487a = cVar;
        this.f50488b = hVar;
    }

    public static e a(c cVar, tq.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) tq.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f50487a, (j) this.f50488b.get());
    }
}
