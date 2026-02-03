package fc;

import gc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24118a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24119b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24120c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24121d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f24122e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f24118a = provider;
        this.f24119b = provider2;
        this.f24120c = provider3;
        this.f24121d = provider4;
        this.f24122e = provider5;
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
        return c((Executor) this.f24118a.get(), (ac.e) this.f24119b.get(), (x) this.f24120c.get(), (hc.d) this.f24121d.get(), (ic.b) this.f24122e.get());
    }
}
