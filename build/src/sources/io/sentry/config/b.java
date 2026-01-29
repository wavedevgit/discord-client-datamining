package io.sentry.config;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final String f29870a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f29871b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f29872c;

    public b(String str, ClassLoader classLoader, ILogger iLogger) {
        this.f29870a = str;
        this.f29871b = io.sentry.util.b.a(classLoader);
        this.f29872c = iLogger;
    }

    public Properties a() {
        try {
            InputStream resourceAsStream = this.f29871b.getResourceAsStream(this.f29870a);
            if (resourceAsStream != null) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(resourceAsStream);
                Properties properties = new Properties();
                properties.load(bufferedInputStream);
                bufferedInputStream.close();
                resourceAsStream.close();
                return properties;
            }
            if (resourceAsStream != null) {
                resourceAsStream.close();
            }
            return null;
        } catch (IOException e10) {
            this.f29872c.a(SentryLevel.ERROR, e10, "Failed to load Sentry configuration from classpath resource: %s", this.f29870a);
            return null;
        }
    }

    public b(ILogger iLogger) {
        this("sentry.properties", b.class.getClassLoader(), iLogger);
    }
}
