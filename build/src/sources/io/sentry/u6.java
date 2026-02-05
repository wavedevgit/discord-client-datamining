package io.sentry;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u6 {

    /* renamed from: c  reason: collision with root package name */
    private static volatile u6 f29788c;

    /* renamed from: d  reason: collision with root package name */
    private static final io.sentry.util.a f29789d = new io.sentry.util.a();

    /* renamed from: e  reason: collision with root package name */
    private static volatile Boolean f29790e = null;

    /* renamed from: f  reason: collision with root package name */
    private static final io.sentry.util.a f29791f = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private final Set f29792a = new CopyOnWriteArraySet();

    /* renamed from: b  reason: collision with root package name */
    private final Set f29793b = new CopyOnWriteArraySet();

    private u6() {
    }

    public static u6 d() {
        if (f29788c == null) {
            a1 a10 = f29789d.a();
            try {
                if (f29788c == null) {
                    f29788c = new u6();
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
        return f29788c;
    }

    public void a(String str) {
        io.sentry.util.y.c(str, "integration is required.");
        this.f29792a.add(str);
    }

    public void b(String str, String str2) {
        io.sentry.util.y.c(str, "name is required.");
        io.sentry.util.y.c(str2, "version is required.");
        this.f29793b.add(new io.sentry.protocol.y(str, str2));
        a1 a10 = f29791f.a();
        try {
            f29790e = null;
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

    public boolean c(ILogger iLogger) {
        Boolean bool = f29790e;
        if (bool != null) {
            return bool.booleanValue();
        }
        a1 a10 = f29791f.a();
        try {
            boolean z10 = false;
            for (io.sentry.protocol.y yVar : this.f29793b) {
                if (yVar.a().startsWith("maven:io.sentry:") && !"8.27.0".equalsIgnoreCase(yVar.b())) {
                    iLogger.c(SentryLevel.ERROR, "The Sentry SDK has been configured with mixed versions. Expected %s to match core SDK version %s but was %s", yVar.a(), "8.27.0", yVar.b());
                    z10 = true;
                }
            }
            if (z10) {
                SentryLevel sentryLevel = SentryLevel.ERROR;
                iLogger.c(sentryLevel, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^", new Object[0]);
                iLogger.c(sentryLevel, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^", new Object[0]);
                iLogger.c(sentryLevel, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^", new Object[0]);
                iLogger.c(sentryLevel, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^", new Object[0]);
            }
            f29790e = Boolean.valueOf(z10);
            if (a10 != null) {
                a10.close();
            }
            return z10;
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

    public Set e() {
        return this.f29792a;
    }

    public Set f() {
        return this.f29793b;
    }
}
