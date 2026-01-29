package jp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32388a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32389b;

    public w(v vVar, tq.h hVar) {
        this.f32388a = vVar;
        this.f32389b = hVar;
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
        return b(this.f32388a, (q) this.f32389b.get());
    }
}
