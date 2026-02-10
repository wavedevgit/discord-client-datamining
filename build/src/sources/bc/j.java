package bc;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f6453a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f6454b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f6455c;

    public j(Provider provider, Provider provider2, Provider provider3) {
        this.f6453a = provider;
        this.f6454b = provider2;
        this.f6455c = provider3;
    }

    public static j a(Provider provider, Provider provider2, Provider provider3) {
        return new j(provider, provider2, provider3);
    }

    public static i c(Context context, kc.a aVar, kc.a aVar2) {
        return new i(context, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((Context) this.f6453a.get(), (kc.a) this.f6454b.get(), (kc.a) this.f6455c.get());
    }
}
