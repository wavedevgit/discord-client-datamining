package jq;

import android.app.Application;
import okhttp3.OkHttpClient;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f31201a;

    /* renamed from: b  reason: collision with root package name */
    private final h f31202b;

    public f(h hVar, h hVar2) {
        this.f31201a = hVar;
        this.f31202b = hVar2;
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
        return c((OkHttpClient) this.f31201a.get(), (Application) this.f31202b.get());
    }
}
