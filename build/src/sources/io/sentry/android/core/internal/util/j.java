package io.sentry.android.core.internal.util;

import android.os.Handler;
import android.os.Looper;
import android.os.Process;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements io.sentry.util.thread.a {

    /* renamed from: a  reason: collision with root package name */
    private static final j f29045a = new j();

    /* renamed from: b  reason: collision with root package name */
    public static volatile long f29046b = Process.myTid();

    private j() {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.internal.util.i
            @Override // java.lang.Runnable
            public final void run() {
                j.f29046b = Process.myTid();
            }
        });
    }

    public static j e() {
        return f29045a;
    }

    @Override // io.sentry.util.thread.a
    public boolean a() {
        return h(Thread.currentThread());
    }

    @Override // io.sentry.util.thread.a
    public String b() {
        if (a()) {
            return "main";
        }
        return Thread.currentThread().getName();
    }

    @Override // io.sentry.util.thread.a
    public long c() {
        return Process.myTid();
    }

    public boolean f(long j10) {
        if (Looper.getMainLooper().getThread().getId() == j10) {
            return true;
        }
        return false;
    }

    public boolean g(io.sentry.protocol.c0 c0Var) {
        Long l10 = c0Var.l();
        if (l10 != null && f(l10.longValue())) {
            return true;
        }
        return false;
    }

    public boolean h(Thread thread) {
        return f(thread.getId());
    }
}
