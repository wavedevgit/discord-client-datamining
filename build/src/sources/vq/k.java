package vq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f52928b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f52929a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f52929a == null) {
            this.f52929a = new OkHttpClient();
        }
        return this.f52929a;
    }
}
