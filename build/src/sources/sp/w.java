package sp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f50021a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f50022b;

    public w(v vVar, cr.h hVar) {
        this.f50021a = vVar;
        this.f50022b = hVar;
    }

    public static w a(v vVar, cr.h hVar) {
        return new w(vVar, hVar);
    }

    public static i b(v vVar, q qVar) {
        return (i) cr.g.d(vVar.a(qVar));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public i get() {
        return b(this.f50021a, (q) this.f50022b.get());
    }
}
