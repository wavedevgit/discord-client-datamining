package gc;

import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25972a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25973b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25974c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25975d;

    public w(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f25972a = provider;
        this.f25973b = provider2;
        this.f25974c = provider3;
        this.f25975d = provider4;
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
        return c((Executor) this.f25972a.get(), (hc.d) this.f25973b.get(), (x) this.f25974c.get(), (ic.b) this.f25975d.get());
    }
}
