package zb;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f55788a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f55789b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f55790c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f55791d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f55792e;

    public v(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f55788a = provider;
        this.f55789b = provider2;
        this.f55790c = provider3;
        this.f55791d = provider4;
        this.f55792e = provider5;
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
        return c((jc.a) this.f55788a.get(), (jc.a) this.f55789b.get(), (fc.e) this.f55790c.get(), (gc.r) this.f55791d.get(), (gc.v) this.f55792e.get());
    }
}
