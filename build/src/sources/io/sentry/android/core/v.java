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
    private final ILogger f27455d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27456e;

    /* renamed from: i  reason: collision with root package name */
    private final int f27457i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.z0 f27458o;

    /* renamed from: p  reason: collision with root package name */
    private final x0 f27459p;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f27461r;

    /* renamed from: u  reason: collision with root package name */
    private io.sentry.w0 f27464u;

    /* renamed from: v  reason: collision with root package name */
    private Future f27465v;

    /* renamed from: w  reason: collision with root package name */
    private io.sentry.h f27466w;

    /* renamed from: y  reason: collision with root package name */
    private io.sentry.protocol.x f27468y;

    /* renamed from: z  reason: collision with root package name */
    private io.sentry.protocol.x f27469z;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27460q = false;

    /* renamed from: s  reason: collision with root package name */
    private i0 f27462s = null;

    /* renamed from: t  reason: collision with root package name */
    private boolean f27463t = false;

    /* renamed from: x  reason: collision with root package name */
    private final List f27467x = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f27470a;

        static {
            int[] iArr = new int[o3.values().length];
            f27470a = iArr;
            try {
                iArr[o3.TRACE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f27470a[o3.MANUAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public v(x0 x0Var, io.sentry.android.core.internal.util.c0 c0Var, ILogger iLogger, String str, int i10, io.sentry.z0 z0Var) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28663e;
        this.f27468y = xVar;
        this.f27469z = xVar;
        this.A = new AtomicBoolean(false);
        this.B = new c7();
        this.C = true;
        this.D = false;
        this.E = false;
        this.F = 0;
        this.G = new io.sentry.util.a();
        this.H = new io.sentry.util.a();
        this.f27455d = iLogger;
        this.f27461r = c0Var;
        this.f27459p = x0Var;
        this.f27456e = str;
        this.f27457i = i10;
        this.f27458o = z0Var;
    }

    public static /* synthetic */ void b(v vVar, k7 k7Var, io.sentry.w0 w0Var) {
        if (!vVar.A.get()) {
            ArrayList arrayList = new ArrayList(vVar.f27467x.size());
            io.sentry.a1 a10 = vVar.H.a();
            try {
                for (m3.a aVar : vVar.f27467x) {
                    arrayList.add(aVar.a(k7Var));
                }
                vVar.f27467x.clear();
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
        if (this.f27460q) {
            return;
        }
        this.f27460q = true;
        String str = this.f27456e;
        if (str == null) {
            this.f27455d.c(SentryLevel.WARNING, "Disabling profiling because no profiling traces dir path is defined in options.", new Object[0]);
            return;
        }
        int i10 = this.f27457i;
        if (i10 <= 0) {
            this.f27455d.c(SentryLevel.WARNING, "Disabling profiling because trace rate is set to %d", Integer.valueOf(i10));
        } else {
            this.f27462s = new i0(str, ((int) TimeUnit.SECONDS.toMicros(1L)) / this.f27457i, this.f27461r, null, this.f27455d);
        }
    }

    private void j() {
        io.sentry.w0 w0Var = this.f27464u;
        if ((w0Var == null || w0Var == io.sentry.p2.I()) && b5.v() != io.sentry.p2.I()) {
            this.f27464u = b5.v();
            this.f27466w = b5.v().b().getCompositePerformanceCollector();
            io.sentry.transport.a0 i10 = this.f27464u.i();
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
        if (this.f27459p.d() >= 22) {
            i();
            if (this.f27462s != null) {
                io.sentry.w0 w0Var = this.f27464u;
                if (w0Var != null) {
                    io.sentry.transport.a0 i10 = w0Var.i();
                    if (i10 != null && (i10.z(io.sentry.j.All) || i10.z(io.sentry.j.ProfileChunkUi))) {
                        this.f27455d.c(SentryLevel.WARNING, "SDK is rate limited. Stopping profiler.", new Object[0]);
                        m(false);
                        return;
                    } else if (this.f27464u.b().getConnectionStatusProvider().A0() == k0.a.DISCONNECTED) {
                        this.f27455d.c(SentryLevel.WARNING, "Device is offline. Stopping profiler.", new Object[0]);
                        m(false);
                        return;
                    } else {
                        this.B = this.f27464u.b().getDateProvider().now();
                    }
                } else {
                    this.B = new c7();
                }
                if (this.f27462s.j() == null) {
                    return;
                }
                this.f27463t = true;
                io.sentry.protocol.x xVar = this.f27468y;
                io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28663e;
                if (xVar.equals(xVar2)) {
                    this.f27468y = new io.sentry.protocol.x();
                }
                if (this.f27469z.equals(xVar2)) {
                    this.f27469z = new io.sentry.protocol.x();
                }
                io.sentry.h hVar = this.f27466w;
                if (hVar != null) {
                    hVar.f(this.f27469z.toString());
                }
                try {
                    this.f27465v = this.f27458o.c(new Runnable() { // from class: io.sentry.android.core.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            v.this.m(true);
                        }
                    }, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
                } catch (RejectedExecutionException e10) {
                    this.f27455d.b(SentryLevel.ERROR, "Failed to schedule profiling chunk finish. Did you call Sentry.close()?", e10);
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
            Future future = this.f27465v;
            if (future != null) {
                future.cancel(true);
            }
            if (this.f27462s != null && this.f27463t) {
                if (this.f27459p.d() < 22) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                io.sentry.h hVar = this.f27466w;
                if (hVar != null) {
                    list = hVar.c(this.f27469z.toString());
                } else {
                    list = null;
                }
                i0.b g10 = this.f27462s.g(false, list);
                if (g10 == null) {
                    this.f27455d.c(SentryLevel.ERROR, "An error occurred while collecting a profile chunk, and it won't be sent.", new Object[0]);
                } else {
                    io.sentry.a1 a11 = this.H.a();
                    this.f27467x.add(new m3.a(this.f27468y, this.f27469z, g10.f27133d, g10.f27132c, this.B, "android"));
                    if (a11 != null) {
                        a11.close();
                    }
                }
                this.f27463t = false;
                io.sentry.protocol.x xVar = io.sentry.protocol.x.f28663e;
                this.f27469z = xVar;
                io.sentry.w0 w0Var = this.f27464u;
                if (w0Var != null) {
                    k(w0Var, w0Var.b());
                }
                if (z10 && !this.D) {
                    this.f27455d.c(SentryLevel.DEBUG, "Profile chunk finished. Starting a new one.", new Object[0]);
                    l();
                } else {
                    this.f27468y = xVar;
                    this.f27455d.c(SentryLevel.DEBUG, "Profile chunk finished.", new Object[0]);
                }
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28663e;
            this.f27468y = xVar2;
            this.f27469z = xVar2;
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
                this.f27455d.c(SentryLevel.DEBUG, "Profiler was not started due to sampling decision.", new Object[0]);
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            int i10 = a.f27470a[o3Var.ordinal()];
            if (i10 != 1) {
                if (i10 == 2 && isRunning()) {
                    this.f27455d.c(SentryLevel.DEBUG, "Profiler is already running.", new Object[0]);
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
                this.f27455d.c(SentryLevel.DEBUG, "Started Profiler.", new Object[0]);
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
        return this.f27469z;
    }

    @Override // io.sentry.l0
    public void g(o3 o3Var) {
        io.sentry.a1 a10 = this.G.a();
        try {
            int i10 = a.f27470a[o3Var.ordinal()];
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
        return this.f27468y;
    }

    @Override // io.sentry.l0
    public boolean isRunning() {
        return this.f27463t;
    }

    @Override // io.sentry.transport.a0.b
    public void s(io.sentry.transport.a0 a0Var) {
        if (!a0Var.z(io.sentry.j.All) && !a0Var.z(io.sentry.j.ProfileChunkUi)) {
            return;
        }
        this.f27455d.c(SentryLevel.WARNING, "SDK is rate limited. Stopping profiler.", new Object[0]);
        m(false);
    }
}
