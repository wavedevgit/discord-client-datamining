package io.sentry.android.core.internal.util;

import android.content.Context;
import android.content.pm.PackageManager;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.x0;
import java.io.File;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t {

    /* renamed from: g  reason: collision with root package name */
    private static final Charset f29009g = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final Context f29010a;

    /* renamed from: b  reason: collision with root package name */
    private final x0 f29011b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f29012c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f29013d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f29014e;

    /* renamed from: f  reason: collision with root package name */
    private final Runtime f29015f;

    public t(Context context, x0 x0Var, ILogger iLogger) {
        this(context, x0Var, iLogger, new String[]{"/sbin/su", "/data/local/xbin/su", "/system/bin/su", "/system/xbin/su", "/data/local/bin/su", "/system/app/Superuser.apk", "/system/sd/xbin/su", "/system/bin/failsafe/su", "/data/local/su", "/su/bin/su", "/su/bin", "/system/xbin/daemonsu"}, new String[]{"com.devadvance.rootcloak", "com.devadvance.rootcloakplus", "com.koushikdutta.superuser", "com.thirdparty.superuser", "eu.chainfire.supersu", "com.noshufou.android.su"}, Runtime.getRuntime());
    }

    private boolean a() {
        String a10 = this.f29011b.a();
        if (a10 != null && a10.contains("test-keys")) {
            return true;
        }
        return false;
    }

    private boolean b() {
        String[] strArr;
        for (String str : this.f29013d) {
            try {
            } catch (RuntimeException e10) {
                this.f29012c.a(SentryLevel.ERROR, e10, "Error when trying to check if root file %s exists.", str);
            }
            if (new File(str).exists()) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x0058, code lost:
        if (r2 == null) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x005b, code lost:
        return false;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean c() {
        /*
            r6 = this;
            java.lang.String r0 = "/system/xbin/which"
            java.lang.String r1 = "su"
            java.lang.String[] r0 = new java.lang.String[]{r0, r1}
            r1 = 0
            r2 = 0
            java.lang.Runtime r3 = r6.f29015f     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.lang.Process r2 = r3.exec(r0)     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.io.BufferedReader r0 = new java.io.BufferedReader     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.io.InputStreamReader r3 = new java.io.InputStreamReader     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.io.InputStream r4 = r2.getInputStream()     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.nio.charset.Charset r5 = io.sentry.android.core.internal.util.t.f29009g     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            r3.<init>(r4, r5)     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            r0.<init>(r3)     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            java.lang.String r3 = r0.readLine()     // Catch: java.lang.Throwable -> L32
            if (r3 == 0) goto L28
            r3 = 1
            goto L29
        L28:
            r3 = r1
        L29:
            r0.close()     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
            r2.destroy()
            return r3
        L30:
            r0 = move-exception
            goto L3c
        L32:
            r3 = move-exception
            r0.close()     // Catch: java.lang.Throwable -> L37
            goto L3b
        L37:
            r0 = move-exception
            r3.addSuppressed(r0)     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
        L3b:
            throw r3     // Catch: java.lang.Throwable -> L30 java.io.IOException -> L4d
        L3c:
            io.sentry.ILogger r3 = r6.f29012c     // Catch: java.lang.Throwable -> L4b
            io.sentry.SentryLevel r4 = io.sentry.SentryLevel.DEBUG     // Catch: java.lang.Throwable -> L4b
            java.lang.String r5 = "Error when trying to check if SU exists."
            r3.b(r4, r5, r0)     // Catch: java.lang.Throwable -> L4b
            if (r2 == 0) goto L5b
        L47:
            r2.destroy()
            goto L5b
        L4b:
            r0 = move-exception
            goto L5c
        L4d:
            io.sentry.ILogger r0 = r6.f29012c     // Catch: java.lang.Throwable -> L4b
            io.sentry.SentryLevel r3 = io.sentry.SentryLevel.DEBUG     // Catch: java.lang.Throwable -> L4b
            java.lang.String r4 = "SU isn't found on this Device."
            java.lang.Object[] r5 = new java.lang.Object[r1]     // Catch: java.lang.Throwable -> L4b
            r0.c(r3, r4, r5)     // Catch: java.lang.Throwable -> L4b
            if (r2 == 0) goto L5b
            goto L47
        L5b:
            return r1
        L5c:
            if (r2 == 0) goto L61
            r2.destroy()
        L61:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.core.internal.util.t.c():boolean");
    }

    private boolean d(ILogger iLogger) {
        String[] strArr;
        x0 x0Var = new x0(iLogger);
        PackageManager packageManager = this.f29010a.getPackageManager();
        if (packageManager != null) {
            for (String str : this.f29014e) {
                try {
                    if (x0Var.d() >= 33) {
                        packageManager.getPackageInfo(str, PackageManager.PackageInfoFlags.of(0L));
                        return true;
                    }
                    packageManager.getPackageInfo(str, 0);
                    return true;
                } catch (PackageManager.NameNotFoundException unused) {
                }
            }
        }
        return false;
    }

    public boolean e() {
        if (!a() && !b() && !c() && !d(this.f29012c)) {
            return false;
        }
        return true;
    }

    t(Context context, x0 x0Var, ILogger iLogger, String[] strArr, String[] strArr2, Runtime runtime) {
        this.f29010a = (Context) io.sentry.util.y.c(context, "The application context is required.");
        this.f29011b = (x0) io.sentry.util.y.c(x0Var, "The BuildInfoProvider is required.");
        this.f29012c = (ILogger) io.sentry.util.y.c(iLogger, "The Logger is required.");
        this.f29013d = (String[]) io.sentry.util.y.c(strArr, "The root Files are required.");
        this.f29014e = (String[]) io.sentry.util.y.c(strArr2, "The root packages are required.");
        this.f29015f = (Runtime) io.sentry.util.y.c(runtime, "The Runtime is required.");
    }
}
