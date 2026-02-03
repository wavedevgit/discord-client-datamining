package io.sentry.android.replay.util;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final String f29608d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ Runnable f29609e;

    public j(String taskName, Runnable delegate) {
        Intrinsics.checkNotNullParameter(taskName, "taskName");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f29608d = taskName;
        this.f29609e = delegate;
    }

    public final String a() {
        return this.f29608d;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f29609e.run();
    }
}
