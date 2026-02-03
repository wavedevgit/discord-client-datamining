package mp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f39050a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f39051b;

    public w(v vVar, wq.h hVar) {
        this.f39050a = vVar;
        this.f39051b = hVar;
    }

    public static w a(v vVar, wq.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) wq.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f39050a, (q) this.f39051b.get());
    }
}
