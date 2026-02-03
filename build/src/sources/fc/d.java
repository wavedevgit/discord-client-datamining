package fc;

import gc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f23710a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f23711b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f23712c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f23713d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f23714e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f23710a = provider;
        this.f23711b = provider2;
        this.f23712c = provider3;
        this.f23713d = provider4;
        this.f23714e = provider5;
    }

    public static d a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new d(provider, provider2, provider3, provider4, provider5);
    }

    public static c c(Executor executor, ac.e eVar, x xVar, hc.d dVar, ic.b bVar) {
        return new c(executor, eVar, xVar, dVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((Executor) this.f23710a.get(), (ac.e) this.f23711b.get(), (x) this.f23712c.get(), (hc.d) this.f23713d.get(), (ic.b) this.f23714e.get());
    }
}
