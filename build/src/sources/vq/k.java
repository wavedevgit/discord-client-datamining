package vq;

import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    public static final k f52976b = new k();

    /* renamed from: a  reason: collision with root package name */
    private OkHttpClient f52977a;

    private k() {
    }

    public OkHttpClient a() {
        if (this.f52977a == null) {
            this.f52977a = new OkHttpClient();
        }
        return this.f52977a;
    }
}
