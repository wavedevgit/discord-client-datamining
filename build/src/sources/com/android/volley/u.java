package com.android.volley;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u extends Exception {

    /* renamed from: d  reason: collision with root package name */
    public final k f8203d;

    /* renamed from: e  reason: collision with root package name */
    private long f8204e;

    public u() {
        this.f8203d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(long j10) {
        this.f8204e = j10;
    }

    public u(k kVar) {
        this.f8203d = kVar;
    }

    public u(Throwable th2) {
        super(th2);
        this.f8203d = null;
    }
}
