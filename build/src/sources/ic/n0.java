package ic;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f28453a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f28454b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f28455c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f28456d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f28457e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f28453a = provider;
        this.f28454b = provider2;
        this.f28455c = provider3;
        this.f28456d = provider4;
        this.f28457e = provider5;
    }

    public static n0 a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new n0(provider, provider2, provider3, provider4, provider5);
    }

    public static m0 c(kc.a aVar, kc.a aVar2, Object obj, Object obj2, Provider provider) {
        return new m0(aVar, aVar2, (e) obj, (t0) obj2, provider);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public m0 get() {
        return c((kc.a) this.f28453a.get(), (kc.a) this.f28454b.get(), this.f28455c.get(), this.f28456d.get(), this.f28457e);
    }
}
