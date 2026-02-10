package ic;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27884a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27885b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27886c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27887d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f27888e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f27884a = provider;
        this.f27885b = provider2;
        this.f27886c = provider3;
        this.f27887d = provider4;
        this.f27888e = provider5;
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
        return c((kc.a) this.f27884a.get(), (kc.a) this.f27885b.get(), this.f27886c.get(), this.f27887d.get(), this.f27888e);
    }
}
