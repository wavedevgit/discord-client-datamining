package io.sentry.android.core;

import android.os.Debug;
import android.os.Process;
import android.os.SystemClock;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.internal.util.c0;
import io.sentry.c7;
import io.sentry.k3;
import io.sentry.x7;
import java.io.File;
import java.util.ArrayDeque;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i0 {

    /* renamed from: b  reason: collision with root package name */
    private final File f28503b;

    /* renamed from: c  reason: collision with root package name */
    private final int f28504c;

    /* renamed from: f  reason: collision with root package name */
    private String f28507f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f28508g;

    /* renamed from: l  reason: collision with root package name */
    private final io.sentry.z0 f28513l;

    /* renamed from: m  reason: collision with root package name */
    private final ILogger f28514m;

    /* renamed from: a  reason: collision with root package name */
    private long f28502a = 0;

    /* renamed from: d  reason: collision with root package name */
    private Future f28505d = null;

    /* renamed from: e  reason: collision with root package name */
    private File f28506e = null;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayDeque f28509h = new ArrayDeque();

    /* renamed from: i  reason: collision with root package name */
    private final ArrayDeque f28510i = new ArrayDeque();

    /* renamed from: j  reason: collision with root package name */
    private final ArrayDeque f28511j = new ArrayDeque();

    /* renamed from: k  reason: collision with root package name */
    private final Map f28512k = new HashMap();

    /* renamed from: n  reason: collision with root package name */
    private volatile boolean f28515n = false;

    /* renamed from: o  reason: collision with root package name */
    protected final io.sentry.util.a f28516o = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements c0.b {

        /* renamed from: a  reason: collision with root package name */
        float f28517a = 0.0f;

        a() {
        }

        @Override // io.sentry.android.core.internal.util.c0.b
        public void e(long j10, long j11, long j12, long j13, boolean z10, boolean z11, float f10) {
            long h10 = new c7().h();
            long nanoTime = ((j11 - System.nanoTime()) + SystemClock.elapsedRealtimeNanos()) - i0.this.f28502a;
            if (nanoTime >= 0) {
                if (z11) {
                    i0.this.f28511j.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Long.valueOf(j12), h10));
                } else if (z10) {
                    i0.this.f28510i.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Long.valueOf(j12), h10));
                }
                if (f10 != this.f28517a) {
                    this.f28517a = f10;
                    i0.this.f28509h.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Float.valueOf(f10), h10));
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final long f28519a;

        /* renamed from: b  reason: collision with root package name */
        public final long f28520b;

        /* renamed from: c  reason: collision with root package name */
        public final File f28521c;

        /* renamed from: d  reason: collision with root package name */
        public final Map f28522d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f28523e;

        public b(long j10, long j11, boolean z10, File file, Map map) {
            this.f28519a = j10;
            this.f28521c = file;
            this.f28520b = j11;
            this.f28522d = map;
            this.f28523e = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f28524a;

        /* renamed from: b  reason: collision with root package name */
        public final long f28525b;

        /* renamed from: c  reason: collision with root package name */
        public final Date f28526c;

        public c(long j10, long j11, Date date) {
            this.f28524a = j10;
            this.f28525b = j11;
            this.f28526c = date;
        }
    }

    public i0(String str, int i10, io.sentry.android.core.internal.util.c0 c0Var, io.sentry.z0 z0Var, ILogger iLogger) {
        this.f28503b = new File((String) io.sentry.util.y.c(str, "TracesFilesDirPath is required"));
        this.f28504c = i10;
        this.f28514m = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required");
        this.f28513l = z0Var;
        this.f28508g = (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(c0Var, "SentryFrameMetricsCollector is required");
    }

    private void i(List list) {
        long elapsedRealtimeNanos = (SystemClock.elapsedRealtimeNanos() - this.f28502a) - TimeUnit.MILLISECONDS.toNanos(System.currentTimeMillis());
        if (list != null) {
            ArrayDeque arrayDeque = new ArrayDeque(list.size());
            ArrayDeque arrayDeque2 = new ArrayDeque(list.size());
            ArrayDeque arrayDeque3 = new ArrayDeque(list.size());
            synchronized (list) {
                try {
                    Iterator it = list.iterator();
                    while (it.hasNext()) {
                        k3 k3Var = (k3) it.next();
                        long b10 = k3Var.b();
                        long j10 = b10 + elapsedRealtimeNanos;
                        Double a10 = k3Var.a();
                        Long c10 = k3Var.c();
                        Long d10 = k3Var.d();
                        if (a10 != null) {
                            arrayDeque3.add(new io.sentry.profilemeasurements.b(Long.valueOf(j10), a10, b10));
                        }
                        if (c10 != null) {
                            arrayDeque.add(new io.sentry.profilemeasurements.b(Long.valueOf(j10), c10, b10));
                        }
                        if (d10 != null) {
                            arrayDeque2.add(new io.sentry.profilemeasurements.b(Long.valueOf(j10), d10, b10));
                        }
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            if (!arrayDeque3.isEmpty()) {
                this.f28512k.put("cpu_usage", new io.sentry.profilemeasurements.a("percent", arrayDeque3));
            }
            if (!arrayDeque.isEmpty()) {
                this.f28512k.put("memory_footprint", new io.sentry.profilemeasurements.a("byte", arrayDeque));
            }
            if (!arrayDeque2.isEmpty()) {
                this.f28512k.put("memory_native_footprint", new io.sentry.profilemeasurements.a("byte", arrayDeque2));
            }
        }
    }

    public void f() {
        io.sentry.a1 a10 = this.f28516o.a();
        try {
            Future future = this.f28505d;
            if (future != null) {
                future.cancel(true);
                this.f28505d = null;
            }
            if (this.f28515n) {
                g(true, null);
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

    public b g(boolean z10, List list) {
        io.sentry.a1 a10 = this.f28516o.a();
        try {
            if (!this.f28515n) {
                this.f28514m.c(SentryLevel.WARNING, "Profiler not running", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            Debug.stopMethodTracing();
            this.f28515n = false;
            this.f28508g.m(this.f28507f);
            long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos();
            long elapsedCpuTime = Process.getElapsedCpuTime();
            if (this.f28506e == null) {
                this.f28514m.c(SentryLevel.ERROR, "Trace file does not exists", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            if (!this.f28510i.isEmpty()) {
                this.f28512k.put("slow_frame_renders", new io.sentry.profilemeasurements.a("nanosecond", this.f28510i));
            }
            if (!this.f28511j.isEmpty()) {
                this.f28512k.put("frozen_frame_renders", new io.sentry.profilemeasurements.a("nanosecond", this.f28511j));
            }
            if (!this.f28509h.isEmpty()) {
                this.f28512k.put("screen_frame_rates", new io.sentry.profilemeasurements.a("hz", this.f28509h));
            }
            i(list);
            Future future = this.f28505d;
            if (future != null) {
                future.cancel(true);
                this.f28505d = null;
            }
            b bVar = new b(elapsedRealtimeNanos, elapsedCpuTime, z10, this.f28506e, this.f28512k);
            if (a10 != null) {
                a10.close();
            }
            return bVar;
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h() {
        return this.f28515n;
    }

    public c j() {
        io.sentry.a1 a10 = this.f28516o.a();
        try {
            int i10 = this.f28504c;
            if (i10 == 0) {
                this.f28514m.c(SentryLevel.WARNING, "Disabling profiling because intervaUs is set to %d", Integer.valueOf(i10));
                if (a10 != null) {
                    a10.close();
                }
                return null;
            } else if (this.f28515n) {
                this.f28514m.c(SentryLevel.WARNING, "Profiling has already started...", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            } else {
                File file = this.f28503b;
                this.f28506e = new File(file, x7.a() + ".trace");
                this.f28512k.clear();
                this.f28509h.clear();
                this.f28510i.clear();
                this.f28511j.clear();
                this.f28507f = this.f28508g.l(new a());
                try {
                    io.sentry.z0 z0Var = this.f28513l;
                    if (z0Var != null) {
                        this.f28505d = z0Var.c(new Runnable() { // from class: io.sentry.android.core.h0
                            @Override // java.lang.Runnable
                            public final void run() {
                                i0.this.g(true, null);
                            }
                        }, 30000L);
                    }
                } catch (RejectedExecutionException e10) {
                    this.f28514m.b(SentryLevel.ERROR, "Failed to call the executor. Profiling will not be automatically finished. Did you call Sentry.close()?", e10);
                }
                this.f28502a = SystemClock.elapsedRealtimeNanos();
                Date d10 = io.sentry.k.d();
                long elapsedCpuTime = Process.getElapsedCpuTime();
                Debug.startMethodTracingSampling(this.f28506e.getPath(), 3000000, this.f28504c);
                this.f28515n = true;
                c cVar = new c(this.f28502a, elapsedCpuTime, d10);
                if (a10 != null) {
                    a10.close();
                }
                return cVar;
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
