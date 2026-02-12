package ic;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27885a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27886b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27887c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27888d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f27889e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f27885a = provider;
        this.f27886b = provider2;
        this.f27887c = provider3;
        this.f27888d = provider4;
        this.f27889e = provider5;
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
        return c((kc.a) this.f27885a.get(), (kc.a) this.f27886b.get(), this.f27887c.get(), this.f27888d.get(), this.f27889e);
    }
}
