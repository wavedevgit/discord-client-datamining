package tq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f51000b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f51001a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f51001a == null) {
            this.f51001a = new OkHttpClient();
        }
        return this.f51001a;
    }
}
