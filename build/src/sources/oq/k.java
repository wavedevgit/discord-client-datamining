package oq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f44709b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f44710a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f44710a == null) {
            this.f44710a = new OkHttpClient();
        }
        return this.f44710a;
    }
}
