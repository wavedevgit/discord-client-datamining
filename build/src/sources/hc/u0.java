package hc;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25931a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25932b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25933c;

    public u0(Provider provider, Provider provider2, Provider provider3) {
        this.f25931a = provider;
        this.f25932b = provider2;
        this.f25933c = provider3;
    }

    public static u0 a(Provider provider, Provider provider2, Provider provider3) {
        return new u0(provider, provider2, provider3);
    }

    public static t0 c(Context context, String str, int i10) {
        return new t0(context, str, i10);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public t0 get() {
        return c((Context) this.f25931a.get(), (String) this.f25932b.get(), ((Integer) this.f25933c.get()).intValue());
    }
}
