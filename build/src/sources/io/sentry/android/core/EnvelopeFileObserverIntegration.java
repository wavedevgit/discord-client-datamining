package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.j3;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class EnvelopeFileObserverIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private o1 f26980d;

    /* renamed from: e  reason: collision with root package name */
    private ILogger f26981e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26982i = false;

    /* renamed from: o  reason: collision with root package name */
    protected final io.sentry.util.a f26983o = new io.sentry.util.a();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class OutboxEnvelopeFileObserverIntegration extends EnvelopeFileObserverIntegration {
        private OutboxEnvelopeFileObserverIntegration() {
        }

        @Override // io.sentry.android.core.EnvelopeFileObserverIntegration
        protected String m(k7 k7Var) {
            return k7Var.getOutboxPath();
        }
    }

    public static /* synthetic */ void a(EnvelopeFileObserverIntegration envelopeFileObserverIntegration, io.sentry.w0 w0Var, k7 k7Var, String str) {
        io.sentry.a1 a10 = envelopeFileObserverIntegration.f26983o.a();
        try {
            if (!envelopeFileObserverIntegration.f26982i) {
                envelopeFileObserverIntegration.n(w0Var, k7Var, str);
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

    public static EnvelopeFileObserverIntegration k() {
        return new OutboxEnvelopeFileObserverIntegration();
    }

    private void n(io.sentry.w0 w0Var, k7 k7Var, String str) {
        o1 o1Var = new o1(str, new j3(w0Var, k7Var.getEnvelopeReader(), k7Var.getSerializer(), k7Var.getLogger(), k7Var.getFlushTimeoutMillis(), k7Var.getMaxQueueSize()), k7Var.getLogger(), k7Var.getFlushTimeoutMillis());
        this.f26980d = o1Var;
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
        io.sentry.a1 a10 = this.f26983o.a();
        try {
            this.f26982i = true;
            if (a10 != null) {
                a10.close();
            }
            o1 o1Var = this.f26980d;
            if (o1Var != null) {
                o1Var.stopWatching();
                ILogger iLogger = this.f26981e;
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
    public final void g(final io.sentry.w0 w0Var, final k7 k7Var) {
        io.sentry.util.y.c(w0Var, "Scopes are required");
        io.sentry.util.y.c(k7Var, "SentryOptions is required");
        this.f26981e = k7Var.getLogger();
        final String m10 = m(k7Var);
        if (m10 == null) {
            this.f26981e.c(SentryLevel.WARNING, "Null given as a path to EnvelopeFileObserverIntegration. Nothing will be registered.", new Object[0]);
            return;
        }
        this.f26981e.c(SentryLevel.DEBUG, "Registering EnvelopeFileObserverIntegration for path: %s", m10);
        try {
            k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.p1
                @Override // java.lang.Runnable
                public final void run() {
                    EnvelopeFileObserverIntegration.a(EnvelopeFileObserverIntegration.this, w0Var, k7Var, m10);
                }
            });
        } catch (Throwable th2) {
            this.f26981e.b(SentryLevel.DEBUG, "Failed to start EnvelopeFileObserverIntegration on executor thread.", th2);
        }
    }

    abstract String m(k7 k7Var);
}
