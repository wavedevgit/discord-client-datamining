package gc;

import hc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25422a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25423b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25424c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25425d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f25426e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f25422a = provider;
        this.f25423b = provider2;
        this.f25424c = provider3;
        this.f25425d = provider4;
        this.f25426e = provider5;
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
        return c((Executor) this.f25422a.get(), (bc.e) this.f25423b.get(), (x) this.f25424c.get(), (ic.d) this.f25425d.get(), (jc.b) this.f25426e.get());
    }
}
