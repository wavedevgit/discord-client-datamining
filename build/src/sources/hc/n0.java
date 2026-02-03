package hc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26934a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26935b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26936c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f26937d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f26938e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f26934a = provider;
        this.f26935b = provider2;
        this.f26936c = provider3;
        this.f26937d = provider4;
        this.f26938e = provider5;
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
        return c((jc.a) this.f26934a.get(), (jc.a) this.f26935b.get(), this.f26936c.get(), this.f26937d.get(), this.f26938e);
    }
}
