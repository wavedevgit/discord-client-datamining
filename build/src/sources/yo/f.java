package yo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f55548a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f55549b;

    public f(c cVar, br.h hVar) {
        this.f55548a = cVar;
        this.f55549b = hVar;
    }

    public static f a(c cVar, br.h hVar) {
        return new f(cVar, hVar);
    }

    public static io.a b(c cVar, i iVar) {
        return (io.a) br.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public io.a get() {
        return b(this.f55548a, (i) this.f55549b.get());
    }
}
