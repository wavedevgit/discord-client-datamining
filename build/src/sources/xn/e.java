package xn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53479a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f53480b;

    public e(c cVar, wq.h hVar) {
        this.f53479a = cVar;
        this.f53480b = hVar;
    }

    public static e a(c cVar, wq.h hVar) {
        return new e(cVar, hVar);
    }

    public static a b(c cVar, j jVar) {
        return (a) wq.g.d(cVar.b(jVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f53479a, (j) this.f53480b.get());
    }
}
