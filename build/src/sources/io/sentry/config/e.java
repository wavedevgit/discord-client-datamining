package io.sentry.config;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f29456a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f29457b;

    public e(String str, ILogger iLogger) {
        this.f29456a = str;
        this.f29457b = iLogger;
    }

    public Properties a() {
        try {
            File file = new File(this.f29456a.trim());
            if (file.isFile() && file.canRead()) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
                Properties properties = new Properties();
                properties.load(bufferedInputStream);
                bufferedInputStream.close();
                return properties;
            }
            if (!file.isFile()) {
                this.f29457b.c(SentryLevel.ERROR, "Failed to load Sentry configuration since it is not a file or does not exist: %s", this.f29456a);
            } else if (!file.canRead()) {
                this.f29457b.c(SentryLevel.ERROR, "Failed to load Sentry configuration since it is not readable: %s", this.f29456a);
            }
            return null;
        } catch (Throwable th2) {
            this.f29457b.a(SentryLevel.ERROR, th2, "Failed to load Sentry configuration from file: %s", this.f29456a);
            return null;
        }
    }
}
