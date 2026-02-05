package pp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f46247a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f46248b;

    public w(v vVar, zq.h hVar) {
        this.f46247a = vVar;
        this.f46248b = hVar;
    }

    public static w a(v vVar, zq.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) zq.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f46247a, (q) this.f46248b.get());
    }
}
