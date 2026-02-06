package com.google.android.gms.internal.fido;

import java.util.concurrent.Callable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i4 extends f4 implements d4 {

    /* renamed from: e  reason: collision with root package name */
    final ScheduledExecutorService f13985e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i4(ScheduledExecutorService scheduledExecutorService) {
        super(scheduledExecutorService);
        scheduledExecutorService.getClass();
        this.f13985e = scheduledExecutorService;
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public final /* bridge */ /* synthetic */ ScheduledFuture schedule(Runnable runnable, long j10, TimeUnit timeUnit) {
        ScheduledExecutorService scheduledExecutorService = this.f13985e;
        l4 t10 = l4.t(runnable, null);
        return new g4(t10, scheduledExecutorService.schedule(t10, j10, timeUnit));
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public final /* bridge */ /* synthetic */ ScheduledFuture scheduleAtFixedRate(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        h4 h4Var = new h4(runnable);
        return new g4(h4Var, this.f13985e.scheduleAtFixedRate(h4Var, j10, j11, timeUnit));
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public final /* bridge */ /* synthetic */ ScheduledFuture scheduleWithFixedDelay(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        h4 h4Var = new h4(runnable);
        return new g4(h4Var, this.f13985e.scheduleWithFixedDelay(h4Var, j10, j11, timeUnit));
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public final /* bridge */ /* synthetic */ ScheduledFuture schedule(Callable callable, long j10, TimeUnit timeUnit) {
        l4 l4Var = new l4(callable);
        return new g4(l4Var, this.f13985e.schedule(l4Var, j10, timeUnit));
    }
}
