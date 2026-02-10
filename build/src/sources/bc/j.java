package bc;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f6559a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f6560b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f6561c;

    public j(Provider provider, Provider provider2, Provider provider3) {
        this.f6559a = provider;
        this.f6560b = provider2;
        this.f6561c = provider3;
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
        return c((Context) this.f6559a.get(), (kc.a) this.f6560b.get(), (kc.a) this.f6561c.get());
    }
}
