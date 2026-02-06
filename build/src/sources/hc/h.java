package hc;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25881a;

    public h(Provider provider) {
        this.f25881a = provider;
    }

    public static h a(Provider provider) {
        return new h(provider);
    }

    public static String c(Context context) {
        return (String) bc.d.c(f.b(context), "Cannot return null from a non-@Nullable @Provides method");
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public String get() {
        return c((Context) this.f25881a.get());
    }
}
