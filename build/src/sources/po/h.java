package po;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f46491a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f46492b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f46493c;

    public h(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f46491a = hVar;
        this.f46492b = hVar2;
        this.f46493c = hVar3;
    }

    public static h a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(vo.r rVar, com.squareup.moshi.w wVar, yo.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((vo.r) this.f46491a.get(), (com.squareup.moshi.w) this.f46492b.get(), (yo.b) this.f46493c.get());
    }
}
