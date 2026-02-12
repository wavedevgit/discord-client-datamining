package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u extends Exception {

    /* renamed from: d  reason: collision with root package name */
    public final k f8820d;

    /* renamed from: e  reason: collision with root package name */
    private long f8821e;

    public u() {
        this.f8820d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(long j10) {
        this.f8821e = j10;
    }

    public u(k kVar) {
        this.f8820d = kVar;
    }

    public u(Throwable th2) {
        super(th2);
        this.f8820d = null;
    }
}
