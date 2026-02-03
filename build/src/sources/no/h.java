package no;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f42199a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f42200b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f42201c;

    public h(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f42199a = hVar;
        this.f42200b = hVar2;
        this.f42201c = hVar3;
    }

    public static h a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(to.r rVar, com.squareup.moshi.w wVar, wo.b bVar) {
        return new g(rVar, wVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public g get() {
        return c((to.r) this.f42199a.get(), (com.squareup.moshi.w) this.f42200b.get(), (wo.b) this.f42201c.get());
    }
}
