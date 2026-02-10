package ac;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f624a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f625b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f626c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f627d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f628e;

    public v(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f624a = provider;
        this.f625b = provider2;
        this.f626c = provider3;
        this.f627d = provider4;
        this.f628e = provider5;
    }

    public static v a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new v(provider, provider2, provider3, provider4, provider5);
    }

    public static t c(kc.a aVar, kc.a aVar2, gc.e eVar, hc.r rVar, hc.v vVar) {
        return new t(aVar, aVar2, eVar, rVar, vVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public t get() {
        return c((kc.a) this.f624a.get(), (kc.a) this.f625b.get(), (gc.e) this.f626c.get(), (hc.r) this.f627d.get(), (hc.v) this.f628e.get());
    }
}
