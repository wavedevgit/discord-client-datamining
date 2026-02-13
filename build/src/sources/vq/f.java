package vq;

import android.app.Application;
import lr.h;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f52344a;

    /* renamed from: b  reason: collision with root package name */
    private final h f52345b;

    public f(h hVar, h hVar2) {
        this.f52344a = hVar;
        this.f52345b = hVar2;
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
        return c((OkHttpClient) this.f52344a.get(), (Application) this.f52345b.get());
    }
}
