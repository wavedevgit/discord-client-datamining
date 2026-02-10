package bc;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f6461a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f6462b;

    public l(Provider provider, Provider provider2) {
        this.f6461a = provider;
        this.f6462b = provider2;
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
        return c((Context) this.f6461a.get(), this.f6462b.get());
    }
}
