package ep;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23133a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f23134b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f23135c;

    public h(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f23133a = hVar;
        this.f23134b = hVar2;
        this.f23135c = hVar3;
    }

    public static h a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(kp.r rVar, com.squareup.moshi.w wVar, np.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((kp.r) this.f23133a.get(), (com.squareup.moshi.w) this.f23134b.get(), (np.b) this.f23135c.get());
    }
}
