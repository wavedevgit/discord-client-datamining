package qo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f47559a;

    public d(c cVar) {
        this.f47559a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static mo.f b(c cVar) {
        return (mo.f) tq.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public mo.f get() {
        return b(this.f47559a);
    }
}
