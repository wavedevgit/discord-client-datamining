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
    private final boolean f27859d;

    /* renamed from: e  reason: collision with root package name */
    private final a f27860e;

    /* renamed from: i  reason: collision with root package name */
    private final a2 f27861i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.transport.p f27862o;

    /* renamed from: p  reason: collision with root package name */
    private long f27863p;

    /* renamed from: q  reason: collision with root package name */
    private final long f27864q;

    /* renamed from: r  reason: collision with root package name */
    private final ILogger f27865r;

    /* renamed from: s  reason: collision with root package name */
    private volatile long f27866s;

    /* renamed from: t  reason: collision with root package name */
    private final AtomicBoolean f27867t;

    /* renamed from: u  reason: collision with root package name */
    private final Context f27868u;

    /* renamed from: v  reason: collision with root package name */
    private final Runnable f27869v;

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
        cVar.f27866s = pVar.a();
        cVar.f27867t.set(false);
    }

    private boolean c() {
        List<ActivityManager.ProcessErrorStateInfo> list;
        ActivityManager activityManager = (ActivityManager) this.f27868u.getSystemService("activity");
        if (activityManager == null) {
            return true;
        }
        try {
            list = activityManager.getProcessesInErrorState();
        } catch (Throwable th2) {
            this.f27865r.b(SentryLevel.ERROR, "Error getting ActivityManager#getProcessesInErrorState.", th2);
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
        this.f27869v.run();
        while (!isInterrupted()) {
            this.f27861i.b(this.f27869v);
            try {
                Thread.sleep(this.f27863p);
                if (this.f27862o.a() - this.f27866s > this.f27864q) {
                    if (!this.f27859d && (Debug.isDebuggerConnected() || Debug.waitingForDebugger())) {
                        this.f27865r.c(SentryLevel.DEBUG, "An ANR was detected but ignored because the debugger is connected.", new Object[0]);
                        this.f27867t.set(true);
                    } else if (c() && this.f27867t.compareAndSet(false, true)) {
                        this.f27860e.a(new ApplicationNotResponding("Application Not Responding for at least " + this.f27864q + " ms.", this.f27861i.a()));
                    }
                }
            } catch (InterruptedException e10) {
                try {
                    Thread.currentThread().interrupt();
                    this.f27865r.c(SentryLevel.WARNING, "Interrupted: %s", e10.getMessage());
                    return;
                } catch (SecurityException unused) {
                    this.f27865r.c(SentryLevel.WARNING, "Failed to interrupt due to SecurityException: %s", e10.getMessage());
                    return;
                }
            }
        }
    }

    c(final io.sentry.transport.p pVar, long j10, long j11, boolean z10, a aVar, ILogger iLogger, a2 a2Var, Context context) {
        super("|ANR-WatchDog|");
        this.f27866s = 0L;
        this.f27867t = new AtomicBoolean(false);
        this.f27862o = pVar;
        this.f27864q = j10;
        this.f27863p = j11;
        this.f27859d = z10;
        this.f27860e = aVar;
        this.f27865r = iLogger;
        this.f27861i = a2Var;
        this.f27868u = context;
        this.f27869v = new Runnable() { // from class: io.sentry.android.core.b
            @Override // java.lang.Runnable
            public final void run() {
                c.a(c.this, pVar);
            }
        };
        if (j10 < this.f27863p * 2) {
            throw new IllegalArgumentException(String.format("ANRWatchDog: timeoutIntervalMillis has to be at least %d ms", Long.valueOf(this.f27863p * 2)));
        }
    }
}
