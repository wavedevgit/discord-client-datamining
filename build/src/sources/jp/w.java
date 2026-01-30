package jp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32404a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32405b;

    public w(v vVar, tq.h hVar) {
        this.f32404a = vVar;
        this.f32405b = hVar;
    }

    public static w a(v vVar, tq.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) tq.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f32404a, (q) this.f32405b.get());
    }
}
