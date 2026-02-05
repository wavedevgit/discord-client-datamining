package io.sentry.android.core;

import android.content.Context;
import android.os.Build;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.i0;
import io.sentry.k7;
import io.sentry.l4;
import io.sentry.q3;
import io.sentry.r3;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l0 implements io.sentry.f1 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f28103a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f28104b;

    /* renamed from: c  reason: collision with root package name */
    private final String f28105c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f28106d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28107e;

    /* renamed from: f  reason: collision with root package name */
    private final io.sentry.z0 f28108f;

    /* renamed from: g  reason: collision with root package name */
    private final x0 f28109g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f28110h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28111i;

    /* renamed from: j  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f28112j;

    /* renamed from: k  reason: collision with root package name */
    private volatile r3 f28113k;

    /* renamed from: l  reason: collision with root package name */
    private volatile i0 f28114l;

    /* renamed from: m  reason: collision with root package name */
    private long f28115m;

    /* renamed from: n  reason: collision with root package name */
    private long f28116n;

    /* renamed from: o  reason: collision with root package name */
    private Date f28117o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f28118p;

    public l0(Context context, SentryAndroidOptions sentryAndroidOptions, x0 x0Var, io.sentry.android.core.internal.util.c0 c0Var) {
        this(context, x0Var, c0Var, sentryAndroidOptions.getLogger(), sentryAndroidOptions.getProfilingTracesDirPath(), sentryAndroidOptions.isProfilingEnabled(), sentryAndroidOptions.getProfilingTracesHz(), sentryAndroidOptions.getExecutorService());
    }

    private void d() {
        if (this.f28110h) {
            return;
        }
        this.f28110h = true;
        if (!this.f28106d) {
            this.f28104b.c(SentryLevel.INFO, "Profiling is disabled in options.", new Object[0]);
            return;
        }
        String str = this.f28105c;
        if (str == null) {
            this.f28104b.c(SentryLevel.WARNING, "Disabling profiling because no profiling traces dir path is defined in options.", new Object[0]);
            return;
        }
        int i10 = this.f28107e;
        if (i10 <= 0) {
            this.f28104b.c(SentryLevel.WARNING, "Disabling profiling because trace rate is set to %d", Integer.valueOf(i10));
        } else {
            this.f28114l = new i0(str, ((int) TimeUnit.SECONDS.toMicros(1L)) / this.f28107e, this.f28112j, this.f28108f, this.f28104b);
        }
    }

    private boolean e() {
        i0.c j10;
        if (this.f28114l == null || (j10 = this.f28114l.j()) == null) {
            return false;
        }
        this.f28115m = j10.f27943a;
        this.f28116n = j10.f27944b;
        this.f28117o = j10.f27945c;
        return true;
    }

    private q3 f(String str, String str2, String str3, boolean z10, List list, k7 k7Var) {
        Long l10;
        String str4;
        String str5;
        String str6;
        if (this.f28109g.d() < 22 || this.f28114l == null) {
            return null;
        }
        io.sentry.a1 a10 = this.f28118p.a();
        try {
            r3 r3Var = this.f28113k;
            if (r3Var != null && r3Var.h().equals(str2)) {
                this.f28113k = null;
                if (a10 != null) {
                    a10.close();
                }
                this.f28104b.c(SentryLevel.DEBUG, "Transaction %s (%s) finished.", str, str3);
                i0.b g10 = this.f28114l.g(false, list);
                this.f28111i.set(false);
                if (g10 == null) {
                    return null;
                }
                long j10 = g10.f27938a - this.f28115m;
                ArrayList arrayList = new ArrayList(1);
                arrayList.add(r3Var);
                r3Var.k(Long.valueOf(g10.f27938a), Long.valueOf(this.f28115m), Long.valueOf(g10.f27939b), Long.valueOf(this.f28116n));
                if (k7Var instanceof SentryAndroidOptions) {
                    l10 = m1.k(this.f28103a, (SentryAndroidOptions) k7Var).s();
                } else {
                    l10 = null;
                }
                if (l10 != null) {
                    str4 = Long.toString(l10.longValue());
                } else {
                    str4 = "0";
                }
                String str7 = str4;
                String[] strArr = Build.SUPPORTED_ABIS;
                File file = g10.f27940c;
                Date date = this.f28117o;
                String l11 = Long.toString(j10);
                int d10 = this.f28109g.d();
                if (strArr != null && strArr.length > 0) {
                    str5 = strArr[0];
                } else {
                    str5 = "";
                }
                String str8 = str5;
                Callable callable = new Callable() { // from class: io.sentry.android.core.k0
                    @Override // java.util.concurrent.Callable
                    public final Object call() {
                        List c10;
                        c10 = io.sentry.android.core.internal.util.m.a().c();
                        return c10;
                    }
                };
                String b10 = this.f28109g.b();
                String c10 = this.f28109g.c();
                String e10 = this.f28109g.e();
                Boolean f10 = this.f28109g.f();
                String proguardUuid = k7Var.getProguardUuid();
                String release = k7Var.getRelease();
                String environment = k7Var.getEnvironment();
                if (!g10.f27942e && !z10) {
                    str6 = "normal";
                } else {
                    str6 = "timeout";
                }
                return new q3(file, date, arrayList, str, str2, str3, l11, d10, str8, callable, b10, c10, e10, f10, str7, proguardUuid, release, environment, str6, g10.f27941d);
            }
            this.f28104b.c(SentryLevel.INFO, "Transaction %s (%s) finished, but was not currently being profiled. Skipping", str, str3);
            if (a10 != null) {
                a10.close();
            }
            return null;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.f1
    public void a(io.sentry.e1 e1Var) {
        if (this.f28111i.get() && this.f28113k == null) {
            io.sentry.a1 a10 = this.f28118p.a();
            try {
                if (this.f28111i.get() && this.f28113k == null) {
                    this.f28113k = new r3(e1Var, Long.valueOf(this.f28115m), Long.valueOf(this.f28116n));
                }
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
    }

    @Override // io.sentry.f1
    public q3 b(io.sentry.e1 e1Var, List list, k7 k7Var) {
        return f(e1Var.getName(), e1Var.f().toString(), e1Var.q().p().toString(), false, list, k7Var);
    }

    @Override // io.sentry.f1
    public void close() {
        l0 l0Var;
        r3 r3Var = this.f28113k;
        if (r3Var != null) {
            l0Var = this;
            l0Var.f(r3Var.i(), r3Var.h(), r3Var.j(), true, null, l4.f().b());
        } else {
            l0Var = this;
        }
        l0Var.f28111i.set(false);
        if (l0Var.f28114l != null) {
            l0Var.f28114l.f();
        }
    }

    @Override // io.sentry.f1
    public boolean isRunning() {
        return this.f28111i.get();
    }

    @Override // io.sentry.f1
    public void start() {
        if (this.f28109g.d() >= 22 && !this.f28111i.getAndSet(true)) {
            d();
            if (e()) {
                this.f28104b.c(SentryLevel.DEBUG, "Profiler started.", new Object[0]);
            } else if (this.f28114l != null && this.f28114l.h()) {
                this.f28104b.c(SentryLevel.WARNING, "A profile is already running. This profile will be ignored.", new Object[0]);
            } else {
                io.sentry.a1 a10 = this.f28118p.a();
                try {
                    this.f28113k = null;
                    if (a10 != null) {
                        a10.close();
                    }
                    this.f28111i.set(false);
                } catch (Throwable th2) {
                    if (a10 != null) {
                        try {
                            a10.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                    }
                    throw th2;
                }
            }
        }
    }

    public l0(Context context, x0 x0Var, io.sentry.android.core.internal.util.c0 c0Var, ILogger iLogger, String str, boolean z10, int i10, io.sentry.z0 z0Var) {
        this.f28110h = false;
        this.f28111i = new AtomicBoolean(false);
        this.f28114l = null;
        this.f28118p = new io.sentry.util.a();
        this.f28103a = (Context) io.sentry.util.y.c(e1.g(context), "The application context is required");
        this.f28104b = (ILogger) io.sentry.util.y.c(iLogger, "ILogger is required");
        this.f28112j = (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(c0Var, "SentryFrameMetricsCollector is required");
        this.f28109g = (x0) io.sentry.util.y.c(x0Var, "The BuildInfoProvider is required.");
        this.f28105c = str;
        this.f28106d = z10;
        this.f28107e = i10;
        this.f28108f = (io.sentry.z0) io.sentry.util.y.c(z0Var, "The ISentryExecutorService is required.");
        this.f28117o = io.sentry.k.d();
    }
}
