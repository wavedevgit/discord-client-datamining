package hc;

import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27670a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27671b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27672c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27673d;

    public w(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f27670a = provider;
        this.f27671b = provider2;
        this.f27672c = provider3;
        this.f27673d = provider4;
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
        return c((Executor) this.f27670a.get(), (ic.d) this.f27671b.get(), (x) this.f27672c.get(), (jc.b) this.f27673d.get());
    }
}
