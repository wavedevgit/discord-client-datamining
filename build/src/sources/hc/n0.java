package hc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27460a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27461b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27462c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27463d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f27464e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f27460a = provider;
        this.f27461b = provider2;
        this.f27462c = provider3;
        this.f27463d = provider4;
        this.f27464e = provider5;
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
        return c((jc.a) this.f27460a.get(), (jc.a) this.f27461b.get(), this.f27462c.get(), this.f27463d.get(), this.f27464e);
    }
}
