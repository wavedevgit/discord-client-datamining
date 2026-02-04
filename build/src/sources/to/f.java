package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50164a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f50165b;

    public f(c cVar, wq.h hVar) {
        this.f50164a = cVar;
        this.f50165b = hVar;
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
        return b(this.f50164a, (i) this.f50165b.get());
    }
}
