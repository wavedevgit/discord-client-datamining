package io.sentry.android.core;

import android.content.Context;
import io.sentry.ILogger;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.android.core.c;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AnrIntegration implements io.sentry.k1, Closeable {

    /* renamed from: p  reason: collision with root package name */
    private static c f28699p;

    /* renamed from: q  reason: collision with root package name */
    protected static final io.sentry.util.a f28700q = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private final Context f28701d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28702e = false;

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.util.a f28703i = new io.sentry.util.a();

    /* renamed from: o  reason: collision with root package name */
    private k7 f28704o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements io.sentry.hints.a, io.sentry.hints.q {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f28705a;

        a(boolean z10) {
            this.f28705a = z10;
        }

        @Override // io.sentry.hints.a
        public Long e() {
            return null;
        }

        @Override // io.sentry.hints.a
        public boolean f() {
            return true;
        }

        @Override // io.sentry.hints.a
        public String h() {
            if (this.f28705a) {
                return "anr_background";
            }
            return "anr_foreground";
        }
    }

    public AnrIntegration(Context context) {
        this.f28701d = e1.g(context);
    }

    private void E(final io.sentry.w0 w0Var, final SentryAndroidOptions sentryAndroidOptions) {
        io.sentry.a1 a10 = f28700q.a();
        try {
            if (f28699p == null) {
                ILogger logger = sentryAndroidOptions.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                logger.c(sentryLevel, "ANR timeout in milliseconds: %d", Long.valueOf(sentryAndroidOptions.getAnrTimeoutIntervalMillis()));
                c cVar = new c(sentryAndroidOptions.getAnrTimeoutIntervalMillis(), sentryAndroidOptions.isAnrReportInDebug(), new c.a() { // from class: io.sentry.android.core.o0
                    @Override // io.sentry.android.core.c.a
                    public final void a(ApplicationNotResponding applicationNotResponding) {
                        AnrIntegration.this.B(w0Var, sentryAndroidOptions, applicationNotResponding);
                    }
                }, sentryAndroidOptions.getLogger(), this.f28701d);
                f28699p = cVar;
                cVar.start();
                sentryAndroidOptions.getLogger().c(sentryLevel, "AnrIntegration installed.", new Object[0]);
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

    public static /* synthetic */ void a(AnrIntegration anrIntegration, io.sentry.w0 w0Var, SentryAndroidOptions sentryAndroidOptions) {
        io.sentry.a1 a10 = anrIntegration.f28703i.a();
        try {
            if (!anrIntegration.f28702e) {
                anrIntegration.E(w0Var, sentryAndroidOptions);
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

    private Throwable n(boolean z10, SentryAndroidOptions sentryAndroidOptions, ApplicationNotResponding applicationNotResponding) {
        String str = "ANR for at least " + sentryAndroidOptions.getAnrTimeoutIntervalMillis() + " ms.";
        if (z10) {
            str = "Background " + str;
        }
        ApplicationNotResponding applicationNotResponding2 = new ApplicationNotResponding(str, applicationNotResponding.a());
        io.sentry.protocol.l lVar = new io.sentry.protocol.l();
        lVar.p("ANR");
        return new io.sentry.exception.a(lVar, applicationNotResponding2, applicationNotResponding2.a(), true);
    }

    private void x(final io.sentry.w0 w0Var, final SentryAndroidOptions sentryAndroidOptions) {
        sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "AnrIntegration enabled: %s", Boolean.valueOf(sentryAndroidOptions.isAnrEnabled()));
        if (sentryAndroidOptions.isAnrEnabled()) {
            io.sentry.util.p.a("Anr");
            try {
                sentryAndroidOptions.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.n0
                    @Override // java.lang.Runnable
                    public final void run() {
                        AnrIntegration.a(AnrIntegration.this, w0Var, sentryAndroidOptions);
                    }
                });
            } catch (Throwable th2) {
                sentryAndroidOptions.getLogger().b(SentryLevel.DEBUG, "Failed to start AnrIntegration on executor thread.", th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(io.sentry.w0 w0Var, SentryAndroidOptions sentryAndroidOptions, ApplicationNotResponding applicationNotResponding) {
        sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "ANR triggered with message: %s", applicationNotResponding.getMessage());
        boolean equals = Boolean.TRUE.equals(w0.E().F());
        SentryEvent sentryEvent = new SentryEvent(n(equals, sentryAndroidOptions, applicationNotResponding));
        sentryEvent.E0(SentryLevel.ERROR);
        w0Var.x(sentryEvent, io.sentry.util.n.e(new a(equals)));
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f28703i.a();
        try {
            this.f28702e = true;
            if (a10 != null) {
                a10.close();
            }
            a10 = f28700q.a();
            try {
                c cVar = f28699p;
                if (cVar != null) {
                    cVar.interrupt();
                    f28699p = null;
                    k7 k7Var = this.f28704o;
                    if (k7Var != null) {
                        k7Var.getLogger().c(SentryLevel.DEBUG, "AnrIntegration removed.", new Object[0]);
                    }
                }
                if (a10 != null) {
                    a10.close();
                }
            } finally {
            }
        } finally {
        }
    }

    @Override // io.sentry.k1
    public final void h(io.sentry.w0 w0Var, k7 k7Var) {
        this.f28704o = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required");
        x(w0Var, (SentryAndroidOptions) k7Var);
    }
}
