package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.j3;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class EnvelopeFileObserverIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private o1 f28730d;

    /* renamed from: e  reason: collision with root package name */
    private ILogger f28731e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f28732i = false;

    /* renamed from: o  reason: collision with root package name */
    protected final io.sentry.util.a f28733o = new io.sentry.util.a();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class OutboxEnvelopeFileObserverIntegration extends EnvelopeFileObserverIntegration {
        private OutboxEnvelopeFileObserverIntegration() {
        }

        @Override // io.sentry.android.core.EnvelopeFileObserverIntegration
        protected String n(k7 k7Var) {
            return k7Var.getOutboxPath();
        }
    }

    public static /* synthetic */ void a(EnvelopeFileObserverIntegration envelopeFileObserverIntegration, io.sentry.w0 w0Var, k7 k7Var, String str) {
        io.sentry.a1 a10 = envelopeFileObserverIntegration.f28733o.a();
        try {
            if (!envelopeFileObserverIntegration.f28732i) {
                envelopeFileObserverIntegration.x(w0Var, k7Var, str);
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public static EnvelopeFileObserverIntegration l() {
        return new OutboxEnvelopeFileObserverIntegration();
    }

    private void x(io.sentry.w0 w0Var, k7 k7Var, String str) {
        o1 o1Var = new o1(str, new j3(w0Var, k7Var.getEnvelopeReader(), k7Var.getSerializer(), k7Var.getLogger(), k7Var.getFlushTimeoutMillis(), k7Var.getMaxQueueSize()), k7Var.getLogger(), k7Var.getFlushTimeoutMillis());
        this.f28730d = o1Var;
        try {
            o1Var.startWatching();
            k7Var.getLogger().c(SentryLevel.DEBUG, "EnvelopeFileObserverIntegration installed.", new Object[0]);
            io.sentry.util.p.a("EnvelopeFileObserver");
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Failed to initialize EnvelopeFileObserverIntegration.", th2);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f28733o.a();
        try {
            this.f28732i = true;
            if (a10 != null) {
                a10.close();
            }
            o1 o1Var = this.f28730d;
            if (o1Var != null) {
                o1Var.stopWatching();
                ILogger iLogger = this.f28731e;
                if (iLogger != null) {
                    iLogger.c(SentryLevel.DEBUG, "EnvelopeFileObserverIntegration removed.", new Object[0]);
                }
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.k1
    public final void h(final io.sentry.w0 w0Var, final k7 k7Var) {
        io.sentry.util.y.c(w0Var, "Scopes are required");
        io.sentry.util.y.c(k7Var, "SentryOptions is required");
        this.f28731e = k7Var.getLogger();
        final String n10 = n(k7Var);
        if (n10 == null) {
            this.f28731e.c(SentryLevel.WARNING, "Null given as a path to EnvelopeFileObserverIntegration. Nothing will be registered.", new Object[0]);
            return;
        }
        this.f28731e.c(SentryLevel.DEBUG, "Registering EnvelopeFileObserverIntegration for path: %s", n10);
        try {
            k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.p1
                @Override // java.lang.Runnable
                public final void run() {
                    EnvelopeFileObserverIntegration.a(EnvelopeFileObserverIntegration.this, w0Var, k7Var, n10);
                }
            });
        } catch (Throwable th2) {
            this.f28731e.b(SentryLevel.DEBUG, "Failed to start EnvelopeFileObserverIntegration on executor thread.", th2);
        }
    }

    abstract String n(k7 k7Var);
}
