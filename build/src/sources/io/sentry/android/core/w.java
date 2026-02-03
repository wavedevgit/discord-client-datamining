package io.sentry.android.core;

import android.os.SystemClock;
import android.system.Os;
import android.system.OsConstants;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k3;
import java.io.File;
import java.io.IOException;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements io.sentry.t0 {

    /* renamed from: h  reason: collision with root package name */
    private final ILogger f28870h;

    /* renamed from: a  reason: collision with root package name */
    private long f28863a = 0;

    /* renamed from: b  reason: collision with root package name */
    private long f28864b = 0;

    /* renamed from: c  reason: collision with root package name */
    private long f28865c = 1;

    /* renamed from: d  reason: collision with root package name */
    private long f28866d = 1;

    /* renamed from: e  reason: collision with root package name */
    private final long f28867e = 1000000000;

    /* renamed from: f  reason: collision with root package name */
    private double f28868f = 1.0E9d / 1;

    /* renamed from: g  reason: collision with root package name */
    private final File f28869g = new File("/proc/self/stat");

    /* renamed from: i  reason: collision with root package name */
    private boolean f28871i = false;

    /* renamed from: j  reason: collision with root package name */
    private final Pattern f28872j = Pattern.compile("[\n\t\r ]");

    public w(ILogger iLogger) {
        this.f28870h = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
    }

    private long e() {
        String str;
        try {
            str = io.sentry.util.i.c(this.f28869g);
        } catch (IOException e10) {
            this.f28871i = false;
            this.f28870h.b(SentryLevel.WARNING, "Unable to read /proc/self/stat file. Disabling cpu collection.", e10);
            str = null;
        }
        if (str != null) {
            String[] split = this.f28872j.split(str.trim());
            try {
                long parseLong = Long.parseLong(split[13]);
                long parseLong2 = Long.parseLong(split[14]);
                return (long) ((parseLong + parseLong2 + Long.parseLong(split[15]) + Long.parseLong(split[16])) * this.f28868f);
            } catch (ArrayIndexOutOfBoundsException | NumberFormatException e11) {
                this.f28870h.b(SentryLevel.ERROR, "Error parsing /proc/self/stat file.", e11);
            }
        }
        return 0L;
    }

    @Override // io.sentry.t0
    public void c() {
        this.f28871i = true;
        this.f28865c = Os.sysconf(OsConstants._SC_CLK_TCK);
        this.f28866d = Os.sysconf(OsConstants._SC_NPROCESSORS_CONF);
        this.f28868f = 1.0E9d / this.f28865c;
        this.f28864b = e();
    }

    @Override // io.sentry.t0
    public void d(k3 k3Var) {
        if (!this.f28871i) {
            return;
        }
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos();
        long j10 = elapsedRealtimeNanos - this.f28863a;
        this.f28863a = elapsedRealtimeNanos;
        long e10 = e();
        this.f28864b = e10;
        k3Var.e(Double.valueOf((((e10 - this.f28864b) / j10) / this.f28866d) * 100.0d));
    }
}
