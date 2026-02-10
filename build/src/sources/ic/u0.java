package ic;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26793a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26794b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26795c;

    public u0(Provider provider, Provider provider2, Provider provider3) {
        this.f26793a = provider;
        this.f26794b = provider2;
        this.f26795c = provider3;
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
        return c((Context) this.f26793a.get(), (String) this.f26794b.get(), ((Integer) this.f26795c.get()).intValue());
    }
}
