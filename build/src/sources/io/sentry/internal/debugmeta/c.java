package io.sentry.internal.debugmeta;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.util.d;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements a {

    /* renamed from: a  reason: collision with root package name */
    private final ILogger f30071a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f30072b;

    public c(ILogger iLogger) {
        this(iLogger, c.class.getClassLoader());
    }

    @Override // io.sentry.internal.debugmeta.a
    public List a() {
        InputStream openStream;
        ArrayList arrayList = new ArrayList();
        try {
            Enumeration<URL> resources = this.f30072b.getResources(d.f30817a);
            while (resources.hasMoreElements()) {
                URL nextElement = resources.nextElement();
                try {
                    openStream = nextElement.openStream();
                } catch (RuntimeException e10) {
                    this.f30071a.a(SentryLevel.ERROR, e10, "%s file is malformed.", nextElement);
                }
                try {
                    Properties properties = new Properties();
                    properties.load(openStream);
                    arrayList.add(properties);
                    this.f30071a.c(SentryLevel.INFO, "Debug Meta Data Properties loaded from %s", nextElement);
                    if (openStream != null) {
                        openStream.close();
                    }
                } catch (Throwable th2) {
                    if (openStream != null) {
                        try {
                            openStream.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                    }
                    throw th2;
                    break;
                }
            }
        } catch (IOException e11) {
            this.f30071a.a(SentryLevel.ERROR, e11, "Failed to load %s", d.f30817a);
        }
        if (arrayList.isEmpty()) {
            this.f30071a.c(SentryLevel.INFO, "No %s file was found.", d.f30817a);
            return null;
        }
        return arrayList;
    }

    c(ILogger iLogger, ClassLoader classLoader) {
        this.f30071a = iLogger;
        this.f30072b = io.sentry.util.b.a(classLoader);
    }
}
