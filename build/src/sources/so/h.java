package so;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50107a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f50108b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f50109c;

    public h(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f50107a = hVar;
        this.f50108b = hVar2;
        this.f50109c = hVar3;
    }

    public static h a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(yo.r rVar, com.squareup.moshi.w wVar, bp.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((yo.r) this.f50107a.get(), (com.squareup.moshi.w) this.f50108b.get(), (bp.b) this.f50109c.get());
    }
}
