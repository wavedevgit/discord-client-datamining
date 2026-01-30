package hc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27476a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27477b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27478c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27479d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f27480e;

    public n0(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f27476a = provider;
        this.f27477b = provider2;
        this.f27478c = provider3;
        this.f27479d = provider4;
        this.f27480e = provider5;
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
        return c((jc.a) this.f27476a.get(), (jc.a) this.f27477b.get(), this.f27478c.get(), this.f27479d.get(), this.f27480e);
    }
}
