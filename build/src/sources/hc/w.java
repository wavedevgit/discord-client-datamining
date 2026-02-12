package hc;

import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27102a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27103b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27104c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27105d;

    public w(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f27102a = provider;
        this.f27103b = provider2;
        this.f27104c = provider3;
        this.f27105d = provider4;
    }

    public static w a(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        return new w(provider, provider2, provider3, provider4);
    }

    public static v c(Executor executor, ic.d dVar, x xVar, jc.b bVar) {
        return new v(executor, dVar, xVar, bVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v get() {
        return c((Executor) this.f27102a.get(), (ic.d) this.f27103b.get(), (x) this.f27104c.get(), (jc.b) this.f27105d.get());
    }
}
