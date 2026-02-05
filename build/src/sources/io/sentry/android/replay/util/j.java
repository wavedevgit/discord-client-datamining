package io.sentry.android.replay.util;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final String f28666d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ Runnable f28667e;

    public j(String taskName, Runnable delegate) {
        Intrinsics.checkNotNullParameter(taskName, "taskName");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f28666d = taskName;
        this.f28667e = delegate;
    }

    public final String a() {
        return this.f28666d;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f28667e.run();
    }
}
