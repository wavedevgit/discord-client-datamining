package zb;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f55521a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f55522b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f55523c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f55524d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f55525e;

    public v(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f55521a = provider;
        this.f55522b = provider2;
        this.f55523c = provider3;
        this.f55524d = provider4;
        this.f55525e = provider5;
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
        return c((jc.a) this.f55521a.get(), (jc.a) this.f55522b.get(), (fc.e) this.f55523c.get(), (gc.r) this.f55524d.get(), (gc.v) this.f55525e.get());
    }
}
