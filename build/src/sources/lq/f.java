package lq;

import android.app.Application;
import br.h;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f36537a;

    /* renamed from: b  reason: collision with root package name */
    private final h f36538b;

    public f(h hVar, h hVar2) {
        this.f36537a = hVar;
        this.f36538b = hVar2;
    }

    public static f a(h hVar, h hVar2) {
        return new f(hVar, hVar2);
    }

    public static c c(OkHttpClient okHttpClient, Application application) {
        return new c(okHttpClient, application);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c((OkHttpClient) this.f36537a.get(), (Application) this.f36538b.get());
    }
}
