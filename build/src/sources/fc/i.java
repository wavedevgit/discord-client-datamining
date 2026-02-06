package fc;

import android.content.Context;
import gc.x;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f23042a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f23043b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f23044c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f23045d;

    public i(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f23042a = provider;
        this.f23043b = provider2;
        this.f23044c = provider3;
        this.f23045d = provider4;
    }

    public static i a(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        return new i(provider, provider2, provider3, provider4);
    }

    public static x c(Context context, hc.d dVar, gc.f fVar, jc.a aVar) {
        return (x) bc.d.c(h.a(context, dVar, fVar, aVar), "Cannot return null from a non-@Nullable @Provides method");
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public x get() {
        return c((Context) this.f23042a.get(), (hc.d) this.f23043b.get(), (gc.f) this.f23044c.get(), (jc.a) this.f23045d.get());
    }
}
