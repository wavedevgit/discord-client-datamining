package gc;

import hc.x;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24121a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24122b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24123c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24124d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f24125e;

    public d(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5) {
        this.f24121a = provider;
        this.f24122b = provider2;
        this.f24123c = provider3;
        this.f24124d = provider4;
        this.f24125e = provider5;
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
        return c((Executor) this.f24121a.get(), (bc.e) this.f24122b.get(), (x) this.f24123c.get(), (ic.d) this.f24124d.get(), (jc.b) this.f24125e.get());
    }
}
