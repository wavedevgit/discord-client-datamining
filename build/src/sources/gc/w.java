package gc;

import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26648a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26649b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26650c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f26651d;

    public w(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f26648a = provider;
        this.f26649b = provider2;
        this.f26650c = provider3;
        this.f26651d = provider4;
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
        return c((Executor) this.f26648a.get(), (hc.d) this.f26649b.get(), (x) this.f26650c.get(), (ic.b) this.f26651d.get());
    }
}
