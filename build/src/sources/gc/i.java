package gc;

import android.content.Context;
import hc.x;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25428a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25429b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25430c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25431d;

    public i(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f25428a = provider;
        this.f25429b = provider2;
        this.f25430c = provider3;
        this.f25431d = provider4;
    }

    public static i a(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        return new i(provider, provider2, provider3, provider4);
    }

    public static x c(Context context, ic.d dVar, hc.f fVar, kc.a aVar) {
        return (x) cc.d.c(h.a(context, dVar, fVar, aVar), "Cannot return null from a non-@Nullable @Provides method");
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public x get() {
        return c((Context) this.f25428a.get(), (ic.d) this.f25429b.get(), (hc.f) this.f25430c.get(), (kc.a) this.f25431d.get());
    }
}
