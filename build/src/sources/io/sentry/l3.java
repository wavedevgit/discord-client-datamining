package io.sentry;

import io.sentry.z7;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.Date;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l3 implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private static final Charset f29711i = Charset.forName("UTF-8");

    /* renamed from: d  reason: collision with root package name */
    private final k7 f29712d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f29713e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l3(k7 k7Var, w0 w0Var) {
        this.f29712d = k7Var;
        this.f29713e = w0Var;
    }

    private Date a(File file) {
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), f29711i));
            String readLine = bufferedReader.readLine();
            this.f29712d.getLogger().c(SentryLevel.DEBUG, "Crash marker file has %s timestamp.", readLine);
            Date f10 = k.f(readLine);
            bufferedReader.close();
            return f10;
        } catch (IOException e10) {
            this.f29712d.getLogger().b(SentryLevel.ERROR, "Error reading the crash marker file.", e10);
            return null;
        } catch (IllegalArgumentException e11) {
            this.f29712d.getLogger().a(SentryLevel.ERROR, e11, "Error converting the crash timestamp.", new Object[0]);
            return null;
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        String cacheDirPath = this.f29712d.getCacheDirPath();
        if (cacheDirPath == null) {
            this.f29712d.getLogger().c(SentryLevel.INFO, "Cache dir is not set, not finalizing the previous session.", new Object[0]);
        } else if (!this.f29712d.isEnableAutoSessionTracking()) {
            this.f29712d.getLogger().c(SentryLevel.DEBUG, "Session tracking is disabled, bailing from previous session finalizer.", new Object[0]);
        } else {
            io.sentry.cache.g envelopeDiskCache = this.f29712d.getEnvelopeDiskCache();
            if ((envelopeDiskCache instanceof io.sentry.cache.f) && !((io.sentry.cache.f) envelopeDiskCache).C()) {
                this.f29712d.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush previous session to its own file in session finalizer.", new Object[0]);
                return;
            }
            File w10 = io.sentry.cache.f.w(cacheDirPath);
            b1 serializer = this.f29712d.getSerializer();
            if (w10.exists()) {
                this.f29712d.getLogger().c(SentryLevel.WARNING, "Current session is not ended, we'd need to end it.", new Object[0]);
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(w10), f29711i));
                    z7 z7Var = (z7) serializer.c(bufferedReader, z7.class);
                    if (z7Var == null) {
                        this.f29712d.getLogger().c(SentryLevel.ERROR, "Stream from path %s resulted in a null envelope.", w10.getAbsolutePath());
                    } else {
                        File file = new File(this.f29712d.getCacheDirPath(), ".sentry-native/last_crash");
                        Date date = null;
                        if (file.exists()) {
                            this.f29712d.getLogger().c(SentryLevel.INFO, "Crash marker file exists, last Session is gonna be Crashed.", new Object[0]);
                            Date a10 = a(file);
                            if (!file.delete()) {
                                this.f29712d.getLogger().c(SentryLevel.ERROR, "Failed to delete the crash marker file. %s.", file.getAbsolutePath());
                            }
                            z7Var.p(z7.b.Crashed, null, true);
                            date = a10;
                        }
                        if (z7Var.f() == null) {
                            z7Var.d(date);
                        }
                        this.f29713e.w(l5.a(serializer, z7Var, this.f29712d.getSdkVersion()));
                    }
                    bufferedReader.close();
                } catch (Throwable th2) {
                    this.f29712d.getLogger().b(SentryLevel.ERROR, "Error processing previous session.", th2);
                }
                if (!w10.delete()) {
                    this.f29712d.getLogger().c(SentryLevel.WARNING, "Failed to delete the previous session file.", new Object[0]);
                }
            }
        }
    }
}
