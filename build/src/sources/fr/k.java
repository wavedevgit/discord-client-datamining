package fr;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f24329b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f24330a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f24330a == null) {
            this.f24330a = new OkHttpClient();
        }
        return this.f24330a;
    }
}
