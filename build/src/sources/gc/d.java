package gc;

import hc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25421a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25422b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25423c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25424d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f25425e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f25421a = provider;
        this.f25422b = provider2;
        this.f25423c = provider3;
        this.f25424d = provider4;
        this.f25425e = provider5;
    }

    public static d a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        return new d(provider, provider2, provider3, provider4, provider5);
    }

    public static c c(Executor executor, bc.e eVar, x xVar, ic.d dVar, jc.b bVar) {
        return new c(executor, eVar, xVar, dVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((Executor) this.f25421a.get(), (bc.e) this.f25422b.get(), (x) this.f25423c.get(), (ic.d) this.f25424d.get(), (jc.b) this.f25425e.get());
    }
}
