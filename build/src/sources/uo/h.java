package uo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52001a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f52002b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f52003c;

    public h(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f52001a = hVar;
        this.f52002b = hVar2;
        this.f52003c = hVar3;
    }

    public static h a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(ap.r rVar, com.squareup.moshi.w wVar, dp.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((ap.r) this.f52001a.get(), (com.squareup.moshi.w) this.f52002b.get(), (dp.b) this.f52003c.get());
    }
}
