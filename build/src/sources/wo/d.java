package wo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f53183a;

    public d(c cVar) {
        this.f53183a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static so.f b(c cVar) {
        return (so.f) zq.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public so.f get() {
        return b(this.f53183a);
    }
}
