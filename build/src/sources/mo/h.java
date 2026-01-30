package mo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39456a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39457b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f39458c;

    public h(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f39456a = hVar;
        this.f39457b = hVar2;
        this.f39458c = hVar3;
    }

    public static h a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(so.r rVar, com.squareup.moshi.w wVar, vo.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((so.r) this.f39456a.get(), (com.squareup.moshi.w) this.f39457b.get(), (vo.b) this.f39458c.get());
    }
}
