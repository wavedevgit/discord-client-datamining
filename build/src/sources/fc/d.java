package fc;

import gc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24907a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24908b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24909c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24910d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f24911e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f24907a = provider;
        this.f24908b = provider2;
        this.f24909c = provider3;
        this.f24910d = provider4;
        this.f24911e = provider5;
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
        return c((Executor) this.f24907a.get(), (ac.e) this.f24908b.get(), (x) this.f24909c.get(), (hc.d) this.f24910d.get(), (ic.b) this.f24911e.get());
    }
}
