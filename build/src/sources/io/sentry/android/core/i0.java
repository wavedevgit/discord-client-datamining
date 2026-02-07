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
    private final File f27114b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27115c;

    /* renamed from: f  reason: collision with root package name */
    private String f27118f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f27119g;

    /* renamed from: l  reason: collision with root package name */
    private final io.sentry.z0 f27124l;

    /* renamed from: m  reason: collision with root package name */
    private final ILogger f27125m;

    /* renamed from: a  reason: collision with root package name */
    private long f27113a = 0;

    /* renamed from: d  reason: collision with root package name */
    private Future f27116d = null;

    /* renamed from: e  reason: collision with root package name */
    private File f27117e = null;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayDeque f27120h = new ArrayDeque();

    /* renamed from: i  reason: collision with root package name */
    private final ArrayDeque f27121i = new ArrayDeque();

    /* renamed from: j  reason: collision with root package name */
    private final ArrayDeque f27122j = new ArrayDeque();

    /* renamed from: k  reason: collision with root package name */
    private final Map f27123k = new HashMap();

    /* renamed from: n  reason: collision with root package name */
    private volatile boolean f27126n = false;

    /* renamed from: o  reason: collision with root package name */
    protected final io.sentry.util.a f27127o = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements c0.b {

        /* renamed from: a  reason: collision with root package name */
        float f27128a = 0.0f;

        a() {
        }

        @Override // io.sentry.android.core.internal.util.c0.b
        public void e(long j10, long j11, long j12, long j13, boolean z10, boolean z11, float f10) {
            long h10 = new c7().h();
            long nanoTime = ((j11 - System.nanoTime()) + SystemClock.elapsedRealtimeNanos()) - i0.this.f27113a;
            if (nanoTime >= 0) {
                if (z11) {
                    i0.this.f27122j.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Long.valueOf(j12), h10));
                } else if (z10) {
                    i0.this.f27121i.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Long.valueOf(j12), h10));
                }
                if (f10 != this.f27128a) {
                    this.f27128a = f10;
                    i0.this.f27120h.addLast(new io.sentry.profilemeasurements.b(Long.valueOf(nanoTime), Float.valueOf(f10), h10));
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final long f27130a;

        /* renamed from: b  reason: collision with root package name */
        public final long f27131b;

        /* renamed from: c  reason: collision with root package name */
        public final File f27132c;

        /* renamed from: d  reason: collision with root package name */
        public final Map f27133d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f27134e;

        public b(long j10, long j11, boolean z10, File file, Map map) {
            this.f27130a = j10;
            this.f27132c = file;
            this.f27131b = j11;
            this.f27133d = map;
            this.f27134e = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f27135a;

        /* renamed from: b  reason: collision with root package name */
        public final long f27136b;

        /* renamed from: c  reason: collision with root package name */
        public final Date f27137c;

        public c(long j10, long j11, Date date) {
            this.f27135a = j10;
            this.f27136b = j11;
            this.f27137c = date;
        }
    }

    public i0(String str, int i10, io.sentry.android.core.internal.util.c0 c0Var, io.sentry.z0 z0Var, ILogger iLogger) {
        this.f27114b = new File((String) io.sentry.util.y.c(str, "TracesFilesDirPath is required"));
        this.f27115c = i10;
        this.f27125m = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required");
        this.f27124l = z0Var;
        this.f27119g = (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(c0Var, "SentryFrameMetricsCollector is required");
    }

    private void i(List list) {
        long elapsedRealtimeNanos = (SystemClock.elapsedRealtimeNanos() - this.f27113a) - TimeUnit.MILLISECONDS.toNanos(System.currentTimeMillis());
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
                this.f27123k.put("cpu_usage", new io.sentry.profilemeasurements.a("percent", arrayDeque3));
            }
            if (!arrayDeque.isEmpty()) {
                this.f27123k.put("memory_footprint", new io.sentry.profilemeasurements.a("byte", arrayDeque));
            }
            if (!arrayDeque2.isEmpty()) {
                this.f27123k.put("memory_native_footprint", new io.sentry.profilemeasurements.a("byte", arrayDeque2));
            }
        }
    }

    public void f() {
        io.sentry.a1 a10 = this.f27127o.a();
        try {
            Future future = this.f27116d;
            if (future != null) {
                future.cancel(true);
                this.f27116d = null;
            }
            if (this.f27126n) {
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
        io.sentry.a1 a10 = this.f27127o.a();
        try {
            if (!this.f27126n) {
                this.f27125m.c(SentryLevel.WARNING, "Profiler not running", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            Debug.stopMethodTracing();
            this.f27126n = false;
            this.f27119g.m(this.f27118f);
            long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos();
            long elapsedCpuTime = Process.getElapsedCpuTime();
            if (this.f27117e == null) {
                this.f27125m.c(SentryLevel.ERROR, "Trace file does not exists", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            if (!this.f27121i.isEmpty()) {
                this.f27123k.put("slow_frame_renders", new io.sentry.profilemeasurements.a("nanosecond", this.f27121i));
            }
            if (!this.f27122j.isEmpty()) {
                this.f27123k.put("frozen_frame_renders", new io.sentry.profilemeasurements.a("nanosecond", this.f27122j));
            }
            if (!this.f27120h.isEmpty()) {
                this.f27123k.put("screen_frame_rates", new io.sentry.profilemeasurements.a("hz", this.f27120h));
            }
            i(list);
            Future future = this.f27116d;
            if (future != null) {
                future.cancel(true);
                this.f27116d = null;
            }
            b bVar = new b(elapsedRealtimeNanos, elapsedCpuTime, z10, this.f27117e, this.f27123k);
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
        return this.f27126n;
    }

    public c j() {
        io.sentry.a1 a10 = this.f27127o.a();
        try {
            int i10 = this.f27115c;
            if (i10 == 0) {
                this.f27125m.c(SentryLevel.WARNING, "Disabling profiling because intervaUs is set to %d", Integer.valueOf(i10));
                if (a10 != null) {
                    a10.close();
                }
                return null;
            } else if (this.f27126n) {
                this.f27125m.c(SentryLevel.WARNING, "Profiling has already started...", new Object[0]);
                if (a10 != null) {
                    a10.close();
                }
                return null;
            } else {
                File file = this.f27114b;
                this.f27117e = new File(file, x7.a() + ".trace");
                this.f27123k.clear();
                this.f27120h.clear();
                this.f27121i.clear();
                this.f27122j.clear();
                this.f27118f = this.f27119g.l(new a());
                try {
                    io.sentry.z0 z0Var = this.f27124l;
                    if (z0Var != null) {
                        this.f27116d = z0Var.c(new Runnable() { // from class: io.sentry.android.core.h0
                            @Override // java.lang.Runnable
                            public final void run() {
                                i0.this.g(true, null);
                            }
                        }, 30000L);
                    }
                } catch (RejectedExecutionException e10) {
                    this.f27125m.b(SentryLevel.ERROR, "Failed to call the executor. Profiling will not be automatically finished. Did you call Sentry.close()?", e10);
                }
                this.f27113a = SystemClock.elapsedRealtimeNanos();
                Date d10 = io.sentry.k.d();
                long elapsedCpuTime = Process.getElapsedCpuTime();
                Debug.startMethodTracingSampling(this.f27117e.getPath(), 3000000, this.f27115c);
                this.f27126n = true;
                c cVar = new c(this.f27113a, elapsedCpuTime, d10);
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
