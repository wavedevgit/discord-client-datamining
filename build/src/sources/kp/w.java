package kp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f36323a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f36324b;

    public w(v vVar, uq.h hVar) {
        this.f36323a = vVar;
        this.f36324b = hVar;
    }

    public static w a(v vVar, uq.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) uq.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f36323a, (q) this.f36324b.get());
    }
}
