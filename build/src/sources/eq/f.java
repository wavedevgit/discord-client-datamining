package eq;

import android.app.Application;
import okhttp3.OkHttpClient;
import uq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f23115a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23116b;

    public f(h hVar, h hVar2) {
        this.f23115a = hVar;
        this.f23116b = hVar2;
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
        return c((OkHttpClient) this.f23115a.get(), (Application) this.f23116b.get());
    }
}
