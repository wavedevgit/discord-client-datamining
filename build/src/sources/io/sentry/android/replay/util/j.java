package io.sentry.android.replay.util;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final String f27810d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ Runnable f27811e;

    public j(String taskName, Runnable delegate) {
        Intrinsics.checkNotNullParameter(taskName, "taskName");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f27810d = taskName;
        this.f27811e = delegate;
    }

    public final String a() {
        return this.f27810d;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f27811e.run();
    }
}
