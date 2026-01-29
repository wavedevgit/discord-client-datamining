package io.sentry.android.core;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Debug;
import android.os.SystemClock;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends Thread {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f28858d;

    /* renamed from: e  reason: collision with root package name */
    private final a f28859e;

    /* renamed from: i  reason: collision with root package name */
    private final a2 f28860i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.transport.p f28861o;

    /* renamed from: p  reason: collision with root package name */
    private long f28862p;

    /* renamed from: q  reason: collision with root package name */
    private final long f28863q;

    /* renamed from: r  reason: collision with root package name */
    private final ILogger f28864r;

    /* renamed from: s  reason: collision with root package name */
    private volatile long f28865s;

    /* renamed from: t  reason: collision with root package name */
    private final AtomicBoolean f28866t;

    /* renamed from: u  reason: collision with root package name */
    private final Context f28867u;

    /* renamed from: v  reason: collision with root package name */
    private final Runnable f28868v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(ApplicationNotResponding applicationNotResponding);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(long j10, boolean z10, a aVar, ILogger iLogger, Context context) {
        this(new io.sentry.transport.p() { // from class: io.sentry.android.core.a
            @Override // io.sentry.transport.p
            public final long a() {
                long uptimeMillis;
                uptimeMillis = SystemClock.uptimeMillis();
                return uptimeMillis;
            }
        }, j10, 500L, z10, aVar, iLogger, new a2(), context);
    }

    public static /* synthetic */ void a(c cVar, io.sentry.transport.p pVar) {
        cVar.getClass();
        cVar.f28865s = pVar.a();
        cVar.f28866t.set(false);
    }

    private boolean c() {
        List<ActivityManager.ProcessErrorStateInfo> list;
        ActivityManager activityManager = (ActivityManager) this.f28867u.getSystemService("activity");
        if (activityManager == null) {
            return true;
        }
        try {
            list = activityManager.getProcessesInErrorState();
        } catch (Throwable th2) {
            this.f28864r.b(SentryLevel.ERROR, "Error getting ActivityManager#getProcessesInErrorState.", th2);
            list = null;
        }
        if (list != null) {
            for (ActivityManager.ProcessErrorStateInfo processErrorStateInfo : list) {
                if (processErrorStateInfo.condition == 2) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        this.f28868v.run();
        while (!isInterrupted()) {
            this.f28860i.b(this.f28868v);
            try {
                Thread.sleep(this.f28862p);
                if (this.f28861o.a() - this.f28865s > this.f28863q) {
                    if (!this.f28858d && (Debug.isDebuggerConnected() || Debug.waitingForDebugger())) {
                        this.f28864r.c(SentryLevel.DEBUG, "An ANR was detected but ignored because the debugger is connected.", new Object[0]);
                        this.f28866t.set(true);
                    } else if (c() && this.f28866t.compareAndSet(false, true)) {
                        this.f28859e.a(new ApplicationNotResponding("Application Not Responding for at least " + this.f28863q + " ms.", this.f28860i.a()));
                    }
                }
            } catch (InterruptedException e10) {
                try {
                    Thread.currentThread().interrupt();
                    this.f28864r.c(SentryLevel.WARNING, "Interrupted: %s", e10.getMessage());
                    return;
                } catch (SecurityException unused) {
                    this.f28864r.c(SentryLevel.WARNING, "Failed to interrupt due to SecurityException: %s", e10.getMessage());
                    return;
                }
            }
        }
    }

    c(final io.sentry.transport.p pVar, long j10, long j11, boolean z10, a aVar, ILogger iLogger, a2 a2Var, Context context) {
        super("|ANR-WatchDog|");
        this.f28865s = 0L;
        this.f28866t = new AtomicBoolean(false);
        this.f28861o = pVar;
        this.f28863q = j10;
        this.f28862p = j11;
        this.f28858d = z10;
        this.f28859e = aVar;
        this.f28864r = iLogger;
        this.f28860i = a2Var;
        this.f28867u = context;
        this.f28868v = new Runnable() { // from class: io.sentry.android.core.b
            @Override // java.lang.Runnable
            public final void run() {
                c.a(c.this, pVar);
            }
        };
        if (j10 < this.f28862p * 2) {
            throw new IllegalArgumentException(String.format("ANRWatchDog: timeoutIntervalMillis has to be at least %d ms", Long.valueOf(this.f28862p * 2)));
        }
    }
}
