package zb;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f56156a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f56157b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f56158c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f56159d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f56160e;

    public v(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f56156a = provider;
        this.f56157b = provider2;
        this.f56158c = provider3;
        this.f56159d = provider4;
        this.f56160e = provider5;
    }

    public static v a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new v(provider, provider2, provider3, provider4, provider5);
    }

    public static t c(jc.a aVar, jc.a aVar2, fc.e eVar, gc.r rVar, gc.v vVar) {
        return new t(aVar, aVar2, eVar, rVar, vVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public t get() {
        return c((jc.a) this.f56156a.get(), (jc.a) this.f56157b.get(), (fc.e) this.f56158c.get(), (gc.r) this.f56159d.get(), (gc.v) this.f56160e.get());
    }
}
