package com.google.android.gms.internal.fido;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f4 extends q3 {

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f14003d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(ExecutorService executorService) {
        executorService.getClass();
        this.f14003d = executorService;
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean awaitTermination(long j10, TimeUnit timeUnit) {
        return this.f14003d.awaitTermination(j10, timeUnit);
    }

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        this.f14003d.execute(runnable);
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean isShutdown() {
        return this.f14003d.isShutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean isTerminated() {
        return this.f14003d.isTerminated();
    }

    @Override // java.util.concurrent.ExecutorService
    public final void shutdown() {
        this.f14003d.shutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public final List shutdownNow() {
        return this.f14003d.shutdownNow();
    }

    public final String toString() {
        ExecutorService executorService = this.f14003d;
        String obj = super.toString();
        String valueOf = String.valueOf(executorService);
        return obj + "[" + valueOf + "]";
    }
}
