package io.sentry;

import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ShutdownHookIntegration implements k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Runtime f26906d;

    /* renamed from: e  reason: collision with root package name */
    private Thread f26907e;

    public ShutdownHookIntegration(Runtime runtime) {
        this.f26906d = (Runtime) io.sentry.util.y.c(runtime, "Runtime is required");
    }

    public static /* synthetic */ void a(ShutdownHookIntegration shutdownHookIntegration, k7 k7Var) {
        shutdownHookIntegration.f26906d.addShutdownHook(shutdownHookIntegration.f26907e);
        k7Var.getLogger().c(SentryLevel.DEBUG, "ShutdownHookIntegration installed.", new Object[0]);
        io.sentry.util.p.a("ShutdownHook");
    }

    private void n(Runnable runnable) {
        try {
            runnable.run();
        } catch (IllegalStateException e10) {
            String message = e10.getMessage();
            if (message != null && (message.equals("Shutdown in progress") || message.equals("VM already shutting down"))) {
                return;
            }
            throw e10;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f26907e != null) {
            n(new Runnable() { // from class: io.sentry.a8
                @Override // java.lang.Runnable
                public final void run() {
                    r0.f26906d.removeShutdownHook(ShutdownHookIntegration.this.f26907e);
                }
            });
        }
    }

    @Override // io.sentry.k1
    public void g(final w0 w0Var, final k7 k7Var) {
        io.sentry.util.y.c(w0Var, "Scopes are required");
        io.sentry.util.y.c(k7Var, "SentryOptions is required");
        if (k7Var.isEnableShutdownHook()) {
            this.f26907e = new Thread(new Runnable() { // from class: io.sentry.b8
                @Override // java.lang.Runnable
                public final void run() {
                    w0.this.d(k7Var.getFlushTimeoutMillis());
                }
            }, "sentry-shutdownhook");
            n(new Runnable() { // from class: io.sentry.c8
                @Override // java.lang.Runnable
                public final void run() {
                    ShutdownHookIntegration.a(ShutdownHookIntegration.this, k7Var);
                }
            });
            return;
        }
        k7Var.getLogger().c(SentryLevel.INFO, "enableShutdownHook is disabled.", new Object[0]);
    }

    public ShutdownHookIntegration() {
        this(Runtime.getRuntime());
    }
}
