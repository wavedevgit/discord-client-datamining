package nq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f42139b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f42140a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f42140a == null) {
            this.f42140a = new OkHttpClient();
        }
        return this.f42140a;
    }
}
