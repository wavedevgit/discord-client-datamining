package wo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53185a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f53186b;

    public f(c cVar, zq.h hVar) {
        this.f53185a = cVar;
        this.f53186b = hVar;
    }

    public static f a(c cVar, zq.h hVar) {
        return new f(cVar, hVar);
    }

    public static go.a b(c cVar, i iVar) {
        return (go.a) zq.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public go.a get() {
        return b(this.f53185a, (i) this.f53186b.get());
    }
}
