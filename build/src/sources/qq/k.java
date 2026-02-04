package qq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f48133b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f48134a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f48134a == null) {
            this.f48134a = new OkHttpClient();
        }
        return this.f48134a;
    }
}
