package hc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25775a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25776b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25777c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25778d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f25779e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f25775a = provider;
        this.f25776b = provider2;
        this.f25777c = provider3;
        this.f25778d = provider4;
        this.f25779e = provider5;
    }

    public static n0 a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new n0(provider, provider2, provider3, provider4, provider5);
    }

    public static m0 c(jc.a aVar, jc.a aVar2, Object obj, Object obj2, Provider provider) {
        return new m0(aVar, aVar2, (e) obj, (t0) obj2, provider);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public m0 get() {
        return c((jc.a) this.f25775a.get(), (jc.a) this.f25776b.get(), this.f25777c.get(), this.f25778d.get(), this.f25779e);
    }
}
