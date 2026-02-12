package io.sentry;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u6 {

    /* renamed from: c  reason: collision with root package name */
    private static volatile u6 f30116c;

    /* renamed from: d  reason: collision with root package name */
    private static final io.sentry.util.a f30117d = new io.sentry.util.a();

    /* renamed from: e  reason: collision with root package name */
    private static volatile Boolean f30118e = null;

    /* renamed from: f  reason: collision with root package name */
    private static final io.sentry.util.a f30119f = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private final Set f30120a = new CopyOnWriteArraySet();

    /* renamed from: b  reason: collision with root package name */
    private final Set f30121b = new CopyOnWriteArraySet();

    private u6() {
    }

    public static u6 d() {
        if (f30116c == null) {
            a1 a10 = f30117d.a();
            try {
                if (f30116c == null) {
                    f30116c = new u6();
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
        return f30116c;
    }

    public void a(String str) {
        io.sentry.util.y.c(str, "integration is required.");
        this.f30120a.add(str);
    }

    public void b(String str, String str2) {
        io.sentry.util.y.c(str, "name is required.");
        io.sentry.util.y.c(str2, "version is required.");
        this.f30121b.add(new io.sentry.protocol.y(str, str2));
        a1 a10 = f30119f.a();
        try {
            f30118e = null;
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
        Boolean bool = f30118e;
        if (bool != null) {
            return bool.booleanValue();
        }
        a1 a10 = f30119f.a();
        try {
            boolean z10 = false;
            for (io.sentry.protocol.y yVar : this.f30121b) {
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
            f30118e = Boolean.valueOf(z10);
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
        return this.f30120a;
    }

    public Set f() {
        return this.f30121b;
    }
}
