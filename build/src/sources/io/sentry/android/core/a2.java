package io.sentry.android.core;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 {

    /* renamed from: a  reason: collision with root package name */
    private final Handler f26999a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2() {
        this(Looper.getMainLooper());
    }

    public Thread a() {
        return this.f26999a.getLooper().getThread();
    }

    public void b(Runnable runnable) {
        this.f26999a.post(runnable);
    }

    a2(Looper looper) {
        this.f26999a = new Handler(looper);
    }
}
