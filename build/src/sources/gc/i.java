package gc;

import android.content.Context;
import hc.x;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24127a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24128b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24129c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24130d;

    public i(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f24127a = provider;
        this.f24128b = provider2;
        this.f24129c = provider3;
        this.f24130d = provider4;
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
        return c((Context) this.f24127a.get(), (ic.d) this.f24128b.get(), (hc.f) this.f24129c.get(), (kc.a) this.f24130d.get());
    }
}
