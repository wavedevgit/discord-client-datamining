package io.sentry.internal.modules;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends d {

    /* renamed from: e  reason: collision with root package name */
    private final ClassLoader f30016e;

    public f(ILogger iLogger) {
        this(iLogger, f.class.getClassLoader());
    }

    @Override // io.sentry.internal.modules.d
    protected Map b() {
        InputStream resourceAsStream;
        TreeMap treeMap = new TreeMap();
        try {
            resourceAsStream = this.f30016e.getResourceAsStream("sentry-external-modules.txt");
            try {
            } catch (Throwable th2) {
                if (resourceAsStream != null) {
                    try {
                        resourceAsStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        } catch (IOException e10) {
            this.f30012a.b(SentryLevel.INFO, "Access to resources failed.", e10);
        } catch (SecurityException e11) {
            this.f30012a.b(SentryLevel.INFO, "Access to resources denied.", e11);
        }
        if (resourceAsStream == null) {
            this.f30012a.c(SentryLevel.INFO, "%s file was not found.", "sentry-external-modules.txt");
            if (resourceAsStream != null) {
                resourceAsStream.close();
                return treeMap;
            }
            return treeMap;
        }
        Map c10 = c(resourceAsStream);
        resourceAsStream.close();
        return c10;
    }

    f(ILogger iLogger, ClassLoader classLoader) {
        super(iLogger);
        this.f30016e = io.sentry.util.b.a(classLoader);
    }
}
