package com.google.firebase.concurrent;

import com.google.firebase.concurrent.p;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class o implements ScheduledExecutorService, AutoCloseable {

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f16339d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f16340e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(ExecutorService executorService, ScheduledExecutorService scheduledExecutorService) {
        this.f16339d = executorService;
        this.f16340e = scheduledExecutorService;
    }

    public static /* synthetic */ void L(Runnable runnable, p.b bVar) {
        try {
            runnable.run();
        } catch (Exception e10) {
            bVar.a(e10);
        }
    }

    public static /* synthetic */ void V(Runnable runnable, p.b bVar) {
        try {
            runnable.run();
            bVar.set(null);
        } catch (Exception e10) {
            bVar.a(e10);
        }
    }

    public static /* synthetic */ void o(Callable callable, p.b bVar) {
        try {
            bVar.set(callable.call());
        } catch (Exception e10) {
            bVar.a(e10);
        }
    }

    public static /* synthetic */ void y(Runnable runnable, p.b bVar) {
        try {
            runnable.run();
        } catch (Exception e10) {
            bVar.a(e10);
            throw e10;
        }
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean awaitTermination(long j10, TimeUnit timeUnit) {
        return this.f16339d.awaitTermination(j10, timeUnit);
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f16339d.execute(runnable);
    }

    @Override // java.util.concurrent.ExecutorService
    public List invokeAll(Collection collection) {
        return this.f16339d.invokeAll(collection);
    }

    @Override // java.util.concurrent.ExecutorService
    public Object invokeAny(Collection collection) {
        return this.f16339d.invokeAny(collection);
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isShutdown() {
        return this.f16339d.isShutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isTerminated() {
        return this.f16339d.isTerminated();
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(final Runnable runnable, final long j10, final TimeUnit timeUnit) {
        return new p(new p.c() { // from class: com.google.firebase.concurrent.c
            @Override // com.google.firebase.concurrent.p.c
            public final ScheduledFuture a(p.b bVar) {
                ScheduledFuture schedule;
                schedule = r0.f16340e.schedule(new Runnable() { // from class: com.google.firebase.concurrent.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        o.this.f16339d.execute(new Runnable() { // from class: com.google.firebase.concurrent.m
                            @Override // java.lang.Runnable
                            public final void run() {
                                o.V(r1, r2);
                            }
                        });
                    }
                }, j10, timeUnit);
                return schedule;
            }
        });
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleAtFixedRate(final Runnable runnable, final long j10, final long j11, final TimeUnit timeUnit) {
        return new p(new p.c() { // from class: com.google.firebase.concurrent.f
            @Override // com.google.firebase.concurrent.p.c
            public final ScheduledFuture a(p.b bVar) {
                ScheduledFuture scheduleAtFixedRate;
                scheduleAtFixedRate = r0.f16340e.scheduleAtFixedRate(new Runnable() { // from class: com.google.firebase.concurrent.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        o.this.f16339d.execute(new Runnable() { // from class: com.google.firebase.concurrent.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                o.y(r1, r2);
                            }
                        });
                    }
                }, j10, j11, timeUnit);
                return scheduleAtFixedRate;
            }
        });
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleWithFixedDelay(final Runnable runnable, final long j10, final long j11, final TimeUnit timeUnit) {
        return new p(new p.c() { // from class: com.google.firebase.concurrent.g
            @Override // com.google.firebase.concurrent.p.c
            public final ScheduledFuture a(p.b bVar) {
                ScheduledFuture scheduleWithFixedDelay;
                scheduleWithFixedDelay = r0.f16340e.scheduleWithFixedDelay(new Runnable() { // from class: com.google.firebase.concurrent.l
                    @Override // java.lang.Runnable
                    public final void run() {
                        o.this.f16339d.execute(new Runnable() { // from class: com.google.firebase.concurrent.e
                            @Override // java.lang.Runnable
                            public final void run() {
                                o.L(r1, r2);
                            }
                        });
                    }
                }, j10, j11, timeUnit);
                return scheduleWithFixedDelay;
            }
        });
    }

    @Override // java.util.concurrent.ExecutorService
    public void shutdown() {
        throw new UnsupportedOperationException("Shutting down is not allowed.");
    }

    @Override // java.util.concurrent.ExecutorService
    public List shutdownNow() {
        throw new UnsupportedOperationException("Shutting down is not allowed.");
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(Callable callable) {
        return this.f16339d.submit(callable);
    }

    @Override // java.util.concurrent.ExecutorService
    public List invokeAll(Collection collection, long j10, TimeUnit timeUnit) {
        return this.f16339d.invokeAll(collection, j10, timeUnit);
    }

    @Override // java.util.concurrent.ExecutorService
    public Object invokeAny(Collection collection, long j10, TimeUnit timeUnit) {
        return this.f16339d.invokeAny(collection, j10, timeUnit);
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(final Callable callable, final long j10, final TimeUnit timeUnit) {
        return new p(new p.c() { // from class: com.google.firebase.concurrent.h
            @Override // com.google.firebase.concurrent.p.c
            public final ScheduledFuture a(p.b bVar) {
                ScheduledFuture schedule;
                schedule = r0.f16340e.schedule(new Callable() { // from class: com.google.firebase.concurrent.k
                    @Override // java.util.concurrent.Callable
                    public final Object call() {
                        Future submit;
                        submit = o.this.f16339d.submit(new Runnable() { // from class: com.google.firebase.concurrent.n
                            @Override // java.lang.Runnable
                            public final void run() {
                                o.o(r1, r2);
                            }
                        });
                        return submit;
                    }
                }, j10, timeUnit);
                return schedule;
            }
        });
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(Runnable runnable, Object obj) {
        return this.f16339d.submit(runnable, obj);
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(Runnable runnable) {
        return this.f16339d.submit(runnable);
    }
}
