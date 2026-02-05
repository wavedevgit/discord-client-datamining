package zb;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f55377a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f55378b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f55379c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f55380d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f55381e;

    public v(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f55377a = provider;
        this.f55378b = provider2;
        this.f55379c = provider3;
        this.f55380d = provider4;
        this.f55381e = provider5;
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
        return c((jc.a) this.f55377a.get(), (jc.a) this.f55378b.get(), (fc.e) this.f55379c.get(), (gc.r) this.f55380d.get(), (gc.v) this.f55381e.get());
    }
}
