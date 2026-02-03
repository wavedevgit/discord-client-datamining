package qq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f48136b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f48137a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f48137a == null) {
            this.f48137a = new OkHttpClient();
        }
        return this.f48137a;
    }
}
