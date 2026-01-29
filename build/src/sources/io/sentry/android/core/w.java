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
    private final ILogger f29288h;

    /* renamed from: a  reason: collision with root package name */
    private long f29281a = 0;

    /* renamed from: b  reason: collision with root package name */
    private long f29282b = 0;

    /* renamed from: c  reason: collision with root package name */
    private long f29283c = 1;

    /* renamed from: d  reason: collision with root package name */
    private long f29284d = 1;

    /* renamed from: e  reason: collision with root package name */
    private final long f29285e = 1000000000;

    /* renamed from: f  reason: collision with root package name */
    private double f29286f = 1.0E9d / 1;

    /* renamed from: g  reason: collision with root package name */
    private final File f29287g = new File("/proc/self/stat");

    /* renamed from: i  reason: collision with root package name */
    private boolean f29289i = false;

    /* renamed from: j  reason: collision with root package name */
    private final Pattern f29290j = Pattern.compile("[\n\t\r ]");

    public w(ILogger iLogger) {
        this.f29288h = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
    }

    private long e() {
        String str;
        try {
            str = io.sentry.util.i.c(this.f29287g);
        } catch (IOException e10) {
            this.f29289i = false;
            this.f29288h.b(SentryLevel.WARNING, "Unable to read /proc/self/stat file. Disabling cpu collection.", e10);
            str = null;
        }
        if (str != null) {
            String[] split = this.f29290j.split(str.trim());
            try {
                long parseLong = Long.parseLong(split[13]);
                long parseLong2 = Long.parseLong(split[14]);
                return (long) ((parseLong + parseLong2 + Long.parseLong(split[15]) + Long.parseLong(split[16])) * this.f29286f);
            } catch (ArrayIndexOutOfBoundsException | NumberFormatException e11) {
                this.f29288h.b(SentryLevel.ERROR, "Error parsing /proc/self/stat file.", e11);
            }
        }
        return 0L;
    }

    @Override // io.sentry.t0
    public void c() {
        this.f29289i = true;
        this.f29283c = Os.sysconf(OsConstants._SC_CLK_TCK);
        this.f29284d = Os.sysconf(OsConstants._SC_NPROCESSORS_CONF);
        this.f29286f = 1.0E9d / this.f29283c;
        this.f29282b = e();
    }

    @Override // io.sentry.t0
    public void d(k3 k3Var) {
        if (!this.f29289i) {
            return;
        }
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos();
        long j10 = elapsedRealtimeNanos - this.f29281a;
        this.f29281a = elapsedRealtimeNanos;
        long e10 = e();
        this.f29282b = e10;
        k3Var.e(Double.valueOf((((e10 - this.f29282b) / j10) / this.f29284d) * 100.0d));
    }
}
