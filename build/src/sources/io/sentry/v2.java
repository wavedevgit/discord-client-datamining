package io.sentry;

import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v2 implements z0 {

    /* renamed from: a  reason: collision with root package name */
    private static final v2 f30779a = new v2();

    private v2() {
    }

    public static /* synthetic */ Object d() {
        return null;
    }

    public static /* synthetic */ Object e() {
        return null;
    }

    public static z0 f() {
        return f30779a;
    }

    @Override // io.sentry.z0
    public void a(long j10) {
    }

    @Override // io.sentry.z0
    public void b() {
    }

    @Override // io.sentry.z0
    public Future c(Runnable runnable, long j10) {
        return new FutureTask(new Callable() { // from class: io.sentry.t2
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return v2.e();
            }
        });
    }

    @Override // io.sentry.z0
    public boolean isClosed() {
        return false;
    }

    @Override // io.sentry.z0
    public Future submit(Runnable runnable) {
        return new FutureTask(new Callable() { // from class: io.sentry.u2
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return v2.d();
            }
        });
    }
}
