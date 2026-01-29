package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50473a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f50474b;

    public f(c cVar, tq.h hVar) {
        this.f50473a = cVar;
        this.f50474b = hVar;
    }

    public static f a(c cVar, tq.h hVar) {
        return new f(cVar, hVar);
    }

    public static b b(c cVar, l lVar) {
        return (b) tq.g.d(cVar.c(lVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public b get() {
        return b(this.f50473a, (l) this.f50474b.get());
    }
}
