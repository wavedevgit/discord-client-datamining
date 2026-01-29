package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u extends Exception {

    /* renamed from: d  reason: collision with root package name */
    public final k f9221d;

    /* renamed from: e  reason: collision with root package name */
    private long f9222e;

    public u() {
        this.f9221d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(long j10) {
        this.f9222e = j10;
    }

    public u(k kVar) {
        this.f9221d = kVar;
    }

    public u(Throwable th2) {
        super(th2);
        this.f9221d = null;
    }
}
