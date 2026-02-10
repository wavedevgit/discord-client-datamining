package zo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f56571a;

    public d(c cVar) {
        this.f56571a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static vo.f b(c cVar) {
        return (vo.f) cr.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public vo.f get() {
        return b(this.f56571a);
    }
}
