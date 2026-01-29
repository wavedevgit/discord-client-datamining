package ac;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f473a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f474b;

    public l(Provider provider, Provider provider2) {
        this.f473a = provider;
        this.f474b = provider2;
    }

    public static l a(Provider provider, Provider provider2) {
        return new l(provider, provider2);
    }

    public static k c(Context context, Object obj) {
        return new k(context, (i) obj);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public k get() {
        return c((Context) this.f473a.get(), this.f474b.get());
    }
}
