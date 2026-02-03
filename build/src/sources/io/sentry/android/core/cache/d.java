package io.sentry.android.core.cache;

import io.sentry.Hint;
import io.sentry.SentryLevel;
import io.sentry.UncaughtExceptionHandlerIntegration;
import io.sentry.android.core.AnrV2Integration;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.performance.h;
import io.sentry.cache.f;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.transport.p;
import io.sentry.util.i;
import io.sentry.util.n;
import io.sentry.util.runtime.a;
import io.sentry.util.y;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends f {

    /* renamed from: u  reason: collision with root package name */
    private final p f28456u;

    public d(SentryAndroidOptions sentryAndroidOptions) {
        this(sentryAndroidOptions, io.sentry.android.core.internal.util.f.b());
    }

    public static /* synthetic */ void J(d dVar, SentryAndroidOptions sentryAndroidOptions, AnrV2Integration.b bVar) {
        dVar.getClass();
        Long e10 = bVar.e();
        sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Writing last reported ANR marker with timestamp %d", e10);
        dVar.P(e10);
    }

    public static boolean L(k7 k7Var) {
        String outboxPath = k7Var.getOutboxPath();
        if (outboxPath == null) {
            k7Var.getLogger().c(SentryLevel.DEBUG, "Outbox path is null, the startup crash marker file does not exist", new Object[0]);
            return false;
        }
        final File file = new File(outboxPath, "startup_crash");
        try {
            boolean booleanValue = ((Boolean) k7Var.getRuntimeManager().a(new a.InterfaceC0408a() { // from class: io.sentry.android.core.cache.a
                @Override // io.sentry.util.runtime.a.InterfaceC0408a
                public final Object run() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(file.exists());
                    return valueOf;
                }
            })).booleanValue();
            if (booleanValue && !((Boolean) k7Var.getRuntimeManager().a(new a.InterfaceC0408a() { // from class: io.sentry.android.core.cache.b
                @Override // io.sentry.util.runtime.a.InterfaceC0408a
                public final Object run() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(file.delete());
                    return valueOf;
                }
            })).booleanValue()) {
                k7Var.getLogger().c(SentryLevel.ERROR, "Failed to delete the startup crash marker file. %s.", file.getAbsolutePath());
                return booleanValue;
            }
            return booleanValue;
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Error reading/deleting the startup crash marker file on the disk", th2);
            return false;
        }
    }

    public static Long M(k7 k7Var) {
        File file = new File((String) y.c(k7Var.getCacheDirPath(), "Cache dir path should be set for getting ANRs reported"), "last_anr_report");
        try {
            String c10 = i.c(file);
            if (c10.equals("null")) {
                return null;
            }
            return Long.valueOf(Long.parseLong(c10.trim()));
        } catch (Throwable th2) {
            if (th2 instanceof FileNotFoundException) {
                k7Var.getLogger().c(SentryLevel.DEBUG, "Last ANR marker does not exist. %s.", file.getAbsolutePath());
            } else {
                k7Var.getLogger().b(SentryLevel.ERROR, "Error reading last ANR marker", th2);
            }
            return null;
        }
    }

    private boolean O(l5 l5Var, Hint hint) {
        boolean L0 = super.L0(l5Var, hint);
        final SentryAndroidOptions sentryAndroidOptions = (SentryAndroidOptions) this.f29373d;
        io.sentry.android.core.performance.i r10 = h.q().r();
        if (n.h(hint, UncaughtExceptionHandlerIntegration.a.class) && r10.q()) {
            long a10 = this.f28456u.a() - r10.m();
            if (a10 <= sentryAndroidOptions.getStartupCrashDurationThresholdMillis()) {
                sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Startup Crash detected %d milliseconds after SDK init. Writing a startup crash marker file to disk.", Long.valueOf(a10));
                Q();
            }
        }
        n.k(hint, AnrV2Integration.b.class, new n.a() { // from class: io.sentry.android.core.cache.c
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                d.J(d.this, sentryAndroidOptions, (AnrV2Integration.b) obj);
            }
        });
        return L0;
    }

    private void P(Long l10) {
        String cacheDirPath = this.f29373d.getCacheDirPath();
        if (cacheDirPath == null) {
            this.f29373d.getLogger().c(SentryLevel.DEBUG, "Cache dir path is null, the ANR marker will not be written", new Object[0]);
            return;
        }
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(cacheDirPath, "last_anr_report"));
            fileOutputStream.write(String.valueOf(l10).getBytes(f29372p));
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (Throwable th2) {
            this.f29373d.getLogger().b(SentryLevel.ERROR, "Error writing the ANR marker to the disk", th2);
        }
    }

    private void Q() {
        String outboxPath = this.f29373d.getOutboxPath();
        if (outboxPath == null) {
            this.f29373d.getLogger().c(SentryLevel.DEBUG, "Outbox path is null, the startup crash marker file will not be written", new Object[0]);
            return;
        }
        try {
            new File(outboxPath, "startup_crash").createNewFile();
        } catch (Throwable th2) {
            this.f29373d.getLogger().b(SentryLevel.ERROR, "Error writing the startup crash marker file to the disk", th2);
        }
    }

    @Override // io.sentry.cache.f, io.sentry.cache.g
    public boolean L0(l5 l5Var, Hint hint) {
        return O(l5Var, hint);
    }

    d(SentryAndroidOptions sentryAndroidOptions, p pVar) {
        super(sentryAndroidOptions, (String) y.c(sentryAndroidOptions.getCacheDirPath(), "cacheDirPath must not be null"), sentryAndroidOptions.getMaxCacheItems());
        this.f28456u = pVar;
    }
}
