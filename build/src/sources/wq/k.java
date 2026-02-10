package wq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f54003b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f54004a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f54004a == null) {
            this.f54004a = new OkHttpClient();
        }
        return this.f54004a;
    }
}
