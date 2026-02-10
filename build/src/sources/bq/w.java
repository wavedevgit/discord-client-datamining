package bq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f7450a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f7451b;

    public w(v vVar, lr.h hVar) {
        this.f7450a = vVar;
        this.f7451b = hVar;
    }

    public static w a(v vVar, lr.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) lr.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f7450a, (q) this.f7451b.get());
    }
}
