package ac;

import android.content.Context;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f465a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f466b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f467c;

    public j(Provider provider, Provider provider2, Provider provider3) {
        this.f465a = provider;
        this.f466b = provider2;
        this.f467c = provider3;
    }

    public static j a(Provider provider, Provider provider2, Provider provider3) {
        return new j(provider, provider2, provider3);
    }

    public static i c(Context context, jc.a aVar, jc.a aVar2) {
        return new i(context, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((Context) this.f465a.get(), (jc.a) this.f466b.get(), (jc.a) this.f467c.get());
    }
}
