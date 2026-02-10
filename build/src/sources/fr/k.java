package fr;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f24328b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f24329a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f24329a == null) {
            this.f24329a = new OkHttpClient();
        }
        return this.f24329a;
    }
}
