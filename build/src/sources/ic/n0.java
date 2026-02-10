package ic;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26765a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26766b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26767c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f26768d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f26769e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f26765a = provider;
        this.f26766b = provider2;
        this.f26767c = provider3;
        this.f26768d = provider4;
        this.f26769e = provider5;
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
        return c((kc.a) this.f26765a.get(), (kc.a) this.f26766b.get(), this.f26767c.get(), this.f26768d.get(), this.f26769e);
    }
}
