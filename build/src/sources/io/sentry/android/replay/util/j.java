package io.sentry.android.replay.util;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final String f29665d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ Runnable f29666e;

    public j(String taskName, Runnable delegate) {
        Intrinsics.checkNotNullParameter(taskName, "taskName");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f29665d = taskName;
        this.f29666e = delegate;
    }

    public final String a() {
        return this.f29665d;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f29666e.run();
    }
}
