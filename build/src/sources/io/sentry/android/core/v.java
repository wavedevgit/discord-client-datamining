package io.sentry.android.core;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.i0;
import io.sentry.b5;
import io.sentry.c7;
import io.sentry.j5;
import io.sentry.k0;
import io.sentry.k7;
import io.sentry.m3;
import io.sentry.o3;
import io.sentry.r8;
import io.sentry.transport.a0;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class v implements io.sentry.l0, a0.b {
    private final AtomicBoolean A;
    private j5 B;
    private volatile boolean C;
    private boolean D;
    private boolean E;
    private int F;
    private final io.sentry.util.a G;
    private final io.sentry.util.a H;

    /* renamed from: d  reason: collision with root package name */
    private final ILogger f27407d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27408e;

    /* renamed from: i  reason: collision with root package name */
    private final int f27409i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.z0 f27410o;

    /* renamed from: p  reason: collision with root package name */
    private final x0 f27411p;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f27413r;

    /* renamed from: u  reason: collision with root package name */
    private io.sentry.w0 f27416u;

    /* renamed from: v  reason: collision with root package name */
    private Future f27417v;

    /* renamed from: w  reason: collision with root package name */
    private io.sentry.h f27418w;

    /* renamed from: y  reason: collision with root package name */
    private io.sentry.protocol.x f27420y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f27421z;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27412q = false;

    /* renamed from: s  reason: collision with root package name */
    private i0 f27414s = null;

    /* renamed from: t  reason: collision with root package name */
    private boolean f27415t = false;

    /* renamed from: x  reason: collision with root package name */
    private final List f27419x = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f27422a;

        static {
            int[] iArr = new int[o3.values().length];
            f27422a = iArr;
            try {
                iArr[o3.TRACE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f27422a[o3.MANUAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public v(x0 x0Var, io.sentry.android.core.internal.util.c0 c0Var, ILogger iLogger, String str, int i10, io.sentry.z0 z0Var) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28615e;
        this.f27420y = xVar;
        this.f27421z = xVar;
        this.A = new AtomicBoolean(false);
        this.B = new c7();
        this.C = true;
        this.D = false;
        this.E = false;
        this.F = 0;
        this.G = new io.sentry.util.a();
        this.H = new io.sentry.util.a();
        this.f27407d = iLogger;
        this.f27413r = c0Var;
        this.f27411p = x0Var;
        this.f27408e = str;
        this.f27409i = i10;
        this.f27410o = z0Var;
    }

    public static /* synthetic */ void b(v vVar, k7 k7Var, io.sentry.w0 w0Var) {
        if (!vVar.A.get()) {
            ArrayList arrayList = new ArrayList(vVar.f27419x.size());
            io.sentry.a1 a10 = vVar.H.a();
            try {
                for (m3.a aVar : vVar.f27419x) {
                    arrayList.add(aVar.a(k7Var));
                }
                vVar.f27419x.clear();
                if (a10 != null) {
                    a10.close();
                }
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    w0Var.v((m3) it.next());
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

    private void i() {
        if (this.f27412q) {
            return;
        }
        this.f27412q = true;
        String str = this.f27408e;
        if (str == null) {
            this.f27407d.c(SentryLevel.WARNING, "Disabling profiling because no profiling traces dir path is defined in options.", new Object[0]);
            return;
        }
        int i10 = this.f27409i;
        if (i10 <= 0) {
            this.f27407d.c(SentryLevel.WARNING, "Disabling profiling because trace rate is set to %d", Integer.valueOf(i10));
        } else {
            this.f27414s = new i0(str, ((int) TimeUnit.SECONDS.toMicros(1L)) / this.f27409i, this.f27413r, null, this.f27407d);
        }
    }

    private void j() {
        io.sentry.w0 w0Var = this.f27416u;
        if ((w0Var == null || w0Var == io.sentry.p2.I()) && b5.v() != io.sentry.p2.I()) {
            this.f27416u = b5.v();
            this.f27418w = b5.v().b().getCompositePerformanceCollector();
            io.sentry.transport.a0 i10 = this.f27416u.i();
            if (i10 != null) {
                i10.n(this);
            }
        }
    }

    private void k(final io.sentry.w0 w0Var, final k7 k7Var) {
        try {
            k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.u
                @Override // java.lang.Runnable
                public final void run() {
                    v.b(v.this, k7Var, w0Var);
                }
            });
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to send profile chunks.", th2);
        }
    }

    private void l() {
        j();
        if (this.f27411p.d() >= 22) {
            i();
            if (this.f27414s != null) {
                io.sentry.w0 w0Var = this.f27416u;
                if (w0Var != null) {
                    io.sentry.transport.a0 i10 = w0Var.i();
                    if (i10 != null && (i10.z(io.sentry.j.All) || i10.z(io.sentry.j.ProfileChunkUi))) {
                        this.f27407d.c(SentryLevel.WARNING, "SDK is rate limited. Stopping profiler.", new Object[0]);
                        m(false);
                        return;
                    } else if (this.f27416u.b().getConnectionStatusProvider().A0() == k0.a.DISCONNECTED) {
                        this.f27407d.c(SentryLevel.WARNING, "Device is offline. Stopping profiler.", new Object[0]);
                        m(false);
                        return;
                    } else {
                        this.B = this.f27416u.b().getDateProvider().now();
                    }
                } else {
                    this.B = new c7();
                }
                if (this.f27414s.j() == null) {
                    return;
                }
                this.f27415t = true;
                io.sentry.protocol.x xVar = this.f27420y;
                io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28615e;
                if (xVar.equals(xVar2)) {
                    this.f27420y = new io.sentry.protocol.x();
                }
                if (this.f27421z.equals(xVar2)) {
                    this.f27421z = new io.sentry.protocol.x();
                }
                io.sentry.h hVar = this.f27418w;
                if (hVar != null) {
                    hVar.f(this.f27421z.toString());
                }
                try {
                    this.f27417v = this.f27410o.c(new Runnable() { // from class: io.sentry.android.core.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            v.this.m(true);
                        }
                    }, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
                } catch (RejectedExecutionException e10) {
                    this.f27407d.b(SentryLevel.ERROR, "Failed to schedule profiling chunk finish. Did you call Sentry.close()?", e10);
                    this.D = true;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m(boolean z10) {
        List list;
        j();
        io.sentry.a1 a10 = this.G.a();
        try {
            Future future = this.f27417v;
            if (future != null) {
                future.cancel(true);
            }
            if (this.f27414s != null && this.f27415t) {
                if (this.f27411p.d() < 22) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                io.sentry.h hVar = this.f27418w;
                if (hVar != null) {
                    list = hVar.c(this.f27421z.toString());
                } else {
                    list = null;
                }
                i0.b g10 = this.f27414s.g(false, list);
                if (g10 == null) {
                    this.f27407d.c(SentryLevel.ERROR, "An error occurred while collecting a profile chunk, and it won't be sent.", new Object[0]);
                } else {
                    io.sentry.a1 a11 = this.H.a();
                    this.f27419x.add(new m3.a(this.f27420y, this.f27421z, g10.f27085d, g10.f27084c, this.B, "android"));
                    if (a11 != null) {
                        a11.close();
                    }
                }
                this.f27415t = false;
                io.sentry.protocol.x xVar = io.sentry.protocol.x.f28615e;
                this.f27421z = xVar;
                io.sentry.w0 w0Var = this.f27416u;
                if (w0Var != null) {
                    k(w0Var, w0Var.b());
                }
                if (z10 && !this.D) {
                    this.f27407d.c(SentryLevel.DEBUG, "Profile chunk finished. Starting a new one.", new Object[0]);
                    l();
                } else {
                    this.f27420y = xVar;
                    this.f27407d.c(SentryLevel.DEBUG, "Profile chunk finished.", new Object[0]);
                }
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28615e;
            this.f27420y = xVar2;
            this.f27421z = xVar2;
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

    @Override // io.sentry.l0
    public void c(boolean z10) {
        io.sentry.a1 a10 = this.G.a();
        try {
            this.F = 0;
            this.D = true;
            if (z10) {
                m(false);
                this.A.set(true);
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

    @Override // io.sentry.l0
    public void d(o3 o3Var, r8 r8Var) {
        io.sentry.a1 a10 = this.G.a();
        try {
            if (this.C) {
                this.E = r8Var.c(io.sentry.util.d0.a().c());
                this.C = false;
            }
            if (!this.E) {
                this.f27407d.c(SentryLevel.DEBUG, "Profiler was not started due to sampling decision.", new Object[0]);
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            int i10 = a.f27422a[o3Var.ordinal()];
            if (i10 != 1) {
                if (i10 == 2 && isRunning()) {
                    this.f27407d.c(SentryLevel.DEBUG, "Profiler is already running.", new Object[0]);
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
            } else {
                if (this.F < 0) {
                    this.F = 0;
                }
                this.F++;
            }
            if (!isRunning()) {
                this.f27407d.c(SentryLevel.DEBUG, "Started Profiler.", new Object[0]);
                l();
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

    @Override // io.sentry.l0
    public void e() {
        this.C = true;
    }

    @Override // io.sentry.l0
    public io.sentry.protocol.x f() {
        return this.f27421z;
    }

    @Override // io.sentry.l0
    public void g(o3 o3Var) {
        io.sentry.a1 a10 = this.G.a();
        try {
            int i10 = a.f27422a[o3Var.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    this.D = true;
                }
            } else {
                int i11 = this.F - 1;
                this.F = i11;
                if (i11 > 0) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                if (i11 < 0) {
                    this.F = 0;
                }
                this.D = true;
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

    @Override // io.sentry.l0
    public io.sentry.protocol.x h() {
        return this.f27420y;
    }

    @Override // io.sentry.l0
    public boolean isRunning() {
        return this.f27415t;
    }

    @Override // io.sentry.transport.a0.b
    public void s(io.sentry.transport.a0 a0Var) {
        if (!a0Var.z(io.sentry.j.All) && !a0Var.z(io.sentry.j.ProfileChunkUi)) {
            return;
        }
        this.f27407d.c(SentryLevel.WARNING, "SDK is rate limited. Stopping profiler.", new Object[0]);
        m(false);
    }
}
