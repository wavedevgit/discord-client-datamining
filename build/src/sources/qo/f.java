package qo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f47561a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f47562b;

    public f(c cVar, tq.h hVar) {
        this.f47561a = cVar;
        this.f47562b = hVar;
    }

    public static f a(c cVar, tq.h hVar) {
        return new f(cVar, hVar);
    }

    public static zn.a b(c cVar, i iVar) {
        return (zn.a) tq.g.d(cVar.c(iVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public zn.a get() {
        return b(this.f47561a, (i) this.f47562b.get());
    }
}
