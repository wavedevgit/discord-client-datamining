package vo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f52861a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52862b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f52863c;

    public h(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f52861a = hVar;
        this.f52862b = hVar2;
        this.f52863c = hVar3;
    }

    public static h a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(bp.r rVar, com.squareup.moshi.w wVar, ep.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((bp.r) this.f52861a.get(), (com.squareup.moshi.w) this.f52862b.get(), (ep.b) this.f52863c.get());
    }
}
