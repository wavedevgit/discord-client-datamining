package com.google.android.gms.internal.fido;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f4 extends q3 {

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f13966d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(ExecutorService executorService) {
        executorService.getClass();
        this.f13966d = executorService;
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean awaitTermination(long j10, TimeUnit timeUnit) {
        return this.f13966d.awaitTermination(j10, timeUnit);
    }

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        this.f13966d.execute(runnable);
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean isShutdown() {
        return this.f13966d.isShutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public final boolean isTerminated() {
        return this.f13966d.isTerminated();
    }

    @Override // java.util.concurrent.ExecutorService
    public final void shutdown() {
        this.f13966d.shutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public final List shutdownNow() {
        return this.f13966d.shutdownNow();
    }

    public final String toString() {
        ExecutorService executorService = this.f13966d;
        String obj = super.toString();
        String valueOf = String.valueOf(executorService);
        return obj + "[" + valueOf + "]";
    }
}
