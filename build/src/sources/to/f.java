package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50167a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f50168b;

    public f(c cVar, wq.h hVar) {
        this.f50167a = cVar;
        this.f50168b = hVar;
    }

    public static f a(c cVar, wq.h hVar) {
        return new f(cVar, hVar);
    }

    public static co.a b(c cVar, i iVar) {
        return (co.a) wq.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public co.a get() {
        return b(this.f50167a, (i) this.f50168b.get());
    }
}
