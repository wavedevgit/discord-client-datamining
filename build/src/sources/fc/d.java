package fc;

import gc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f22735a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f22736b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f22737c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f22738d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f22739e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f22735a = provider;
        this.f22736b = provider2;
        this.f22737c = provider3;
        this.f22738d = provider4;
        this.f22739e = provider5;
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
        return c((Executor) this.f22735a.get(), (ac.e) this.f22736b.get(), (x) this.f22737c.get(), (hc.d) this.f22738d.get(), (ic.b) this.f22739e.get());
    }
}
