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
    private final String f28015a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f28016b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f28017c;

    public b(String str, ClassLoader classLoader, ILogger iLogger) {
        this.f28015a = str;
        this.f28016b = io.sentry.util.b.a(classLoader);
        this.f28017c = iLogger;
    }

    public Properties a() {
        try {
            InputStream resourceAsStream = this.f28016b.getResourceAsStream(this.f28015a);
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
            this.f28017c.a(SentryLevel.ERROR, e10, "Failed to load Sentry configuration from classpath resource: %s", this.f28015a);
            return null;
        }
    }

    public b(ILogger iLogger) {
        this("sentry.properties", b.class.getClassLoader(), iLogger);
    }
}
