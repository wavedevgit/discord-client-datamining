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
    private final String f28019a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f28020b;

    public e(String str, ILogger iLogger) {
        this.f28019a = str;
        this.f28020b = iLogger;
    }

    public Properties a() {
        try {
            File file = new File(this.f28019a.trim());
            if (file.isFile() && file.canRead()) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
                Properties properties = new Properties();
                properties.load(bufferedInputStream);
                bufferedInputStream.close();
                return properties;
            }
            if (!file.isFile()) {
                this.f28020b.c(SentryLevel.ERROR, "Failed to load Sentry configuration since it is not a file or does not exist: %s", this.f28019a);
            } else if (!file.canRead()) {
                this.f28020b.c(SentryLevel.ERROR, "Failed to load Sentry configuration since it is not readable: %s", this.f28019a);
            }
            return null;
        } catch (Throwable th2) {
            this.f28020b.a(SentryLevel.ERROR, th2, "Failed to load Sentry configuration from file: %s", this.f28019a);
            return null;
        }
    }
}
