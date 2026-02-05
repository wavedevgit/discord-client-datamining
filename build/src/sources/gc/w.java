package gc;

import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24671a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24672b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24673c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24674d;

    public w(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f24671a = provider;
        this.f24672b = provider2;
        this.f24673c = provider3;
        this.f24674d = provider4;
    }

    public static w a(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        return new w(provider, provider2, provider3, provider4);
    }

    public static v c(Executor executor, hc.d dVar, x xVar, ic.b bVar) {
        return new v(executor, dVar, xVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v get() {
        return c((Executor) this.f24671a.get(), (hc.d) this.f24672b.get(), (x) this.f24673c.get(), (ic.b) this.f24674d.get());
    }
}
