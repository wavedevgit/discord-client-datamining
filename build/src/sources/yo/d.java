package yo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f55498a;

    public d(c cVar) {
        this.f55498a = cVar;
    }

    public static d a(c cVar) {
        return new d(cVar);
    }

    public static uo.f b(c cVar) {
        return (uo.f) br.g.d(cVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public uo.f get() {
        return b(this.f55498a);
    }
}
