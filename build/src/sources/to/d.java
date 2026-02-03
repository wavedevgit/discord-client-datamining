package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50165a;

    public d(c cVar) {
        this.f50165a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static po.f b(c cVar) {
        return (po.f) wq.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public po.f get() {
        return b(this.f50165a);
    }
}
