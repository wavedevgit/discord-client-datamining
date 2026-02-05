package io.sentry.android.core;

import io.sentry.SentryLevel;
import io.sentry.k0;
import io.sentry.k7;
import io.sentry.o4;
import io.sentry.r4;
import java.io.Closeable;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SendCachedEnvelopeIntegration implements io.sentry.k1, k0.b, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final r4 f27813d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.util.r f27814e;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.k0 f27816o;

    /* renamed from: p  reason: collision with root package name */
    private io.sentry.w0 f27817p;

    /* renamed from: q  reason: collision with root package name */
    private SentryAndroidOptions f27818q;

    /* renamed from: r  reason: collision with root package name */
    private o4 f27819r;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27815i = new AtomicBoolean(false);

    /* renamed from: s  reason: collision with root package name */
    private final AtomicBoolean f27820s = new AtomicBoolean(false);

    /* renamed from: t  reason: collision with root package name */
    private final AtomicBoolean f27821t = new AtomicBoolean(false);

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f27822u = new io.sentry.util.a();

    public SendCachedEnvelopeIntegration(r4 r4Var, io.sentry.util.r rVar) {
        this.f27813d = (r4) io.sentry.util.y.c(r4Var, "SendFireAndForgetFactory is required");
        this.f27814e = rVar;
    }

    public static /* synthetic */ void k(SendCachedEnvelopeIntegration sendCachedEnvelopeIntegration, SentryAndroidOptions sentryAndroidOptions, io.sentry.w0 w0Var) {
        sendCachedEnvelopeIntegration.getClass();
        try {
            if (sendCachedEnvelopeIntegration.f27821t.get()) {
                sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "SendCachedEnvelopeIntegration, not trying to send after closing.", new Object[0]);
                return;
            }
            if (!sendCachedEnvelopeIntegration.f27820s.getAndSet(true)) {
                io.sentry.k0 connectionStatusProvider = sentryAndroidOptions.getConnectionStatusProvider();
                sendCachedEnvelopeIntegration.f27816o = connectionStatusProvider;
                connectionStatusProvider.M1(sendCachedEnvelopeIntegration);
                sendCachedEnvelopeIntegration.f27819r = sendCachedEnvelopeIntegration.f27813d.c(w0Var, sentryAndroidOptions);
            }
            io.sentry.k0 k0Var = sendCachedEnvelopeIntegration.f27816o;
            if (k0Var != null && k0Var.y0() == k0.a.DISCONNECTED) {
                sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "SendCachedEnvelopeIntegration, no connection.", new Object[0]);
                return;
            }
            io.sentry.transport.a0 j10 = w0Var.j();
            if (j10 != null && j10.L(io.sentry.j.All)) {
                sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "SendCachedEnvelopeIntegration, rate limiting active.", new Object[0]);
                return;
            }
            o4 o4Var = sendCachedEnvelopeIntegration.f27819r;
            if (o4Var == null) {
                sentryAndroidOptions.getLogger().c(SentryLevel.ERROR, "SendCachedEnvelopeIntegration factory is null.", new Object[0]);
            } else {
                o4Var.a();
            }
        } catch (Throwable th2) {
            sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Failed trying to send cached events.", th2);
        }
    }

    private void m(final io.sentry.w0 w0Var, final SentryAndroidOptions sentryAndroidOptions) {
        try {
            io.sentry.a1 a10 = this.f27822u.a();
            Future submit = sentryAndroidOptions.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.g2
                @Override // java.lang.Runnable
                public final void run() {
                    SendCachedEnvelopeIntegration.k(SendCachedEnvelopeIntegration.this, sentryAndroidOptions, w0Var);
                }
            });
            if (((Boolean) this.f27814e.a()).booleanValue() && this.f27815i.compareAndSet(false, true)) {
                sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Startup Crash marker exists, blocking flush.", new Object[0]);
                try {
                    submit.get(sentryAndroidOptions.getStartupCrashFlushTimeoutMillis(), TimeUnit.MILLISECONDS);
                } catch (TimeoutException unused) {
                    sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Synchronous send timed out, continuing in the background.", new Object[0]);
                }
            }
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "SendCachedEnvelopeIntegration installed.", new Object[0]);
            if (a10 != null) {
                a10.close();
            }
        } catch (RejectedExecutionException e10) {
            sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Cached events will not be sent. Did you call Sentry.close()?", e10);
        } catch (Throwable th2) {
            sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Cached events will not be sent", th2);
        }
    }

    @Override // io.sentry.k0.b
    public void a(k0.a aVar) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.w0 w0Var = this.f27817p;
        if (w0Var != null && (sentryAndroidOptions = this.f27818q) != null && aVar != k0.a.DISCONNECTED) {
            m(w0Var, sentryAndroidOptions);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27821t.set(true);
        io.sentry.k0 k0Var = this.f27816o;
        if (k0Var != null) {
            k0Var.Z1(this);
        }
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        this.f27817p = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        this.f27818q = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        if (!this.f27813d.d(k7Var.getCacheDirPath(), k7Var.getLogger())) {
            k7Var.getLogger().c(SentryLevel.ERROR, "No cache dir path is defined in options.", new Object[0]);
            return;
        }
        io.sentry.util.p.a("SendCachedEnvelope");
        m(w0Var, this.f27818q);
    }
}
