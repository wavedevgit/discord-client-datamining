package qp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final f f48030a;

    public g(f fVar) {
        this.f48030a = fVar;
    }

    public static g a(f fVar) {
        return new g(fVar);
    }

    public static e b(f fVar) {
        return (e) wq.g.d(fVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public e get() {
        return b(this.f48030a);
    }
}
