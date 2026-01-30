package io.sentry.android.core;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 {

    /* renamed from: a  reason: collision with root package name */
    private final Handler f28870a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2() {
        this(Looper.getMainLooper());
    }

    public Thread a() {
        return this.f28870a.getLooper().getThread();
    }

    public void b(Runnable runnable) {
        this.f28870a.post(runnable);
    }

    a2(Looper looper) {
        this.f28870a = new Handler(looper);
    }
}
