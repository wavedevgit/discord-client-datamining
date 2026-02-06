package rp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f49148a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f49149b;

    public w(v vVar, br.h hVar) {
        this.f49148a = vVar;
        this.f49149b = hVar;
    }

    public static w a(v vVar, br.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) br.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f49148a, (q) this.f49149b.get());
    }
}
