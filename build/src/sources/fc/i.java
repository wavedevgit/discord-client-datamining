package fc;

import android.content.Context;
import gc.x;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f23716a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f23717b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f23718c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f23719d;

    public i(Provider provider, Provider provider2, Provider provider3, Provider provider4) {
        this.f23716a = provider;
        this.f23717b = provider2;
        this.f23718c = provider3;
        this.f23719d = provider4;
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
        return c((Context) this.f23716a.get(), (hc.d) this.f23717b.get(), (gc.f) this.f23718c.get(), (jc.a) this.f23719d.get());
    }
}
