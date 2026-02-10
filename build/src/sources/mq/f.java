package mq;

import android.app.Application;
import cr.h;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f37415a;

    /* renamed from: b  reason: collision with root package name */
    private final h f37416b;

    public f(h hVar, h hVar2) {
        this.f37415a = hVar;
        this.f37416b = hVar2;
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
        return c((OkHttpClient) this.f37415a.get(), (Application) this.f37416b.get());
    }
}
