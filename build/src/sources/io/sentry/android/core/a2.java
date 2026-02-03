package io.sentry.android.core;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 {

    /* renamed from: a  reason: collision with root package name */
    private final Handler f28797a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2() {
        this(Looper.getMainLooper());
    }

    public Thread a() {
        return this.f28797a.getLooper().getThread();
    }

    public void b(Runnable runnable) {
        this.f28797a.post(runnable);
    }

    a2(Looper looper) {
        this.f28797a = new Handler(looper);
    }
}
