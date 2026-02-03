package gq;

import android.app.Application;
import okhttp3.OkHttpClient;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f26518a;

    /* renamed from: b  reason: collision with root package name */
    private final h f26519b;

    public f(h hVar, h hVar2) {
        this.f26518a = hVar;
        this.f26519b = hVar2;
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
        return c((OkHttpClient) this.f26518a.get(), (Application) this.f26519b.get());
    }
}
