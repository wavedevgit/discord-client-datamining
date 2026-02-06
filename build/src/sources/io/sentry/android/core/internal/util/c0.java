package io.sentry.android.core.internal.util;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.view.Choreographer;
import android.view.FrameMetrics;
import android.view.Window;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.android.core.x0;
import io.sentry.x7;
import java.lang.Thread;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 implements Application.ActivityLifecycleCallbacks {

    /* renamed from: y  reason: collision with root package name */
    private static final long f27156y = TimeUnit.SECONDS.toNanos(1);

    /* renamed from: z  reason: collision with root package name */
    private static final long f27157z = TimeUnit.MILLISECONDS.toNanos(700);

    /* renamed from: d  reason: collision with root package name */
    private final x0 f27158d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f27159e;

    /* renamed from: i  reason: collision with root package name */
    private final ILogger f27160i;

    /* renamed from: o  reason: collision with root package name */
    private Handler f27161o;

    /* renamed from: p  reason: collision with root package name */
    private WeakReference f27162p;

    /* renamed from: q  reason: collision with root package name */
    private final Map f27163q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f27164r;

    /* renamed from: s  reason: collision with root package name */
    private final c f27165s;

    /* renamed from: t  reason: collision with root package name */
    private Window.OnFrameMetricsAvailableListener f27166t;

    /* renamed from: u  reason: collision with root package name */
    private Choreographer f27167u;

    /* renamed from: v  reason: collision with root package name */
    private Field f27168v;

    /* renamed from: w  reason: collision with root package name */
    private long f27169w;

    /* renamed from: x  reason: collision with root package name */
    private long f27170x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements c {
        a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void e(long j10, long j11, long j12, long j13, boolean z10, boolean z11, float f10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        default void a(Window window, Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener, Handler handler) {
            if (onFrameMetricsAvailableListener == null) {
                return;
            }
            window.addOnFrameMetricsAvailableListener(onFrameMetricsAvailableListener, handler);
        }

        default void b(Window window, Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener) {
            if (onFrameMetricsAvailableListener == null) {
                return;
            }
            window.removeOnFrameMetricsAvailableListener(onFrameMetricsAvailableListener);
        }
    }

    public c0(Context context, ILogger iLogger, x0 x0Var) {
        this(context, iLogger, x0Var, new a());
    }

    public static /* synthetic */ void a(c0 c0Var, ILogger iLogger) {
        c0Var.getClass();
        try {
            c0Var.f27167u = Choreographer.getInstance();
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Error retrieving Choreographer instance. Slow and frozen frames will not be reported.", th2);
        }
    }

    public static /* synthetic */ void b(c0 c0Var, Window window) {
        if (c0Var.f27159e.add(window)) {
            try {
                c0Var.f27165s.a(window, c0Var.f27166t, c0Var.f27161o);
            } catch (Throwable th2) {
                c0Var.f27160i.b(SentryLevel.ERROR, "Failed to add frameMetricsAvailableListener", th2);
            }
        }
    }

    public static /* synthetic */ void c(c0 c0Var, Window window) {
        c0Var.getClass();
        try {
            if (c0Var.f27159e.remove(window)) {
                c0Var.f27165s.b(window, c0Var.f27166t);
            }
        } catch (Throwable th2) {
            c0Var.f27160i.b(SentryLevel.ERROR, "Failed to remove frameMetricsAvailableListener", th2);
        }
    }

    public static /* synthetic */ void e(c0 c0Var, x0 x0Var, Window window, FrameMetrics frameMetrics, int i10) {
        float refreshRate;
        boolean z10;
        c0Var.getClass();
        long nanoTime = System.nanoTime();
        if (x0Var.d() >= 30) {
            refreshRate = window.getContext().getDisplay().getRefreshRate();
        } else {
            refreshRate = window.getWindowManager().getDefaultDisplay().getRefreshRate();
        }
        float f10 = refreshRate;
        float f11 = (float) f27156y;
        long f12 = c0Var.f(frameMetrics);
        long max = Math.max(0L, f12 - (f11 / f10));
        long g10 = c0Var.g(frameMetrics);
        if (g10 < 0) {
            g10 = nanoTime - f12;
        }
        long max2 = Math.max(g10, c0Var.f27170x);
        if (max2 != c0Var.f27169w) {
            c0Var.f27169w = max2;
            c0Var.f27170x = max2 + f12;
            boolean j10 = j(f12, f11 / (f10 - 1.0f));
            if (j10 && i(f12)) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean z11 = z10;
            for (b bVar : c0Var.f27163q.values()) {
                bVar.e(max2, c0Var.f27170x, f12, max, j10, z11, f10);
            }
        }
    }

    private long f(FrameMetrics frameMetrics) {
        return frameMetrics.getMetric(0) + frameMetrics.getMetric(1) + frameMetrics.getMetric(2) + frameMetrics.getMetric(3) + frameMetrics.getMetric(4) + frameMetrics.getMetric(5);
    }

    private long g(FrameMetrics frameMetrics) {
        if (this.f27158d.d() >= 26) {
            return frameMetrics.getMetric(10);
        }
        return h();
    }

    public static boolean i(long j10) {
        if (j10 > f27157z) {
            return true;
        }
        return false;
    }

    public static boolean j(long j10, long j11) {
        return j10 > j11;
    }

    private void k(Window window) {
        WeakReference weakReference = this.f27162p;
        if (weakReference != null && weakReference.get() == window) {
            return;
        }
        this.f27162p = new WeakReference(window);
        o();
    }

    private void n(final Window window) {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.internal.util.y
            @Override // java.lang.Runnable
            public final void run() {
                c0.c(c0.this, window);
            }
        });
    }

    private void o() {
        final Window window;
        WeakReference weakReference = this.f27162p;
        if (weakReference != null) {
            window = (Window) weakReference.get();
        } else {
            window = null;
        }
        if (window != null && this.f27164r && !this.f27163q.isEmpty() && this.f27161o != null) {
            new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.internal.util.x
                @Override // java.lang.Runnable
                public final void run() {
                    c0.b(c0.this, window);
                }
            });
        }
    }

    public long h() {
        Field field;
        Choreographer choreographer = this.f27167u;
        if (choreographer != null && (field = this.f27168v) != null) {
            try {
                Long l10 = (Long) field.get(choreographer);
                if (l10 != null) {
                    return l10.longValue();
                }
                return -1L;
            } catch (IllegalAccessException unused) {
                return -1L;
            }
        }
        return -1L;
    }

    public String l(b bVar) {
        if (!this.f27164r) {
            return null;
        }
        String a10 = x7.a();
        this.f27163q.put(a10, bVar);
        o();
        return a10;
    }

    public void m(String str) {
        Window window;
        if (this.f27164r) {
            if (str != null) {
                this.f27163q.remove(str);
            }
            WeakReference weakReference = this.f27162p;
            if (weakReference != null) {
                window = (Window) weakReference.get();
            } else {
                window = null;
            }
            if (window != null && this.f27163q.isEmpty()) {
                n(window);
            }
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPaused(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityResumed(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStarted(Activity activity) {
        k(activity.getWindow());
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStopped(Activity activity) {
        n(activity.getWindow());
        WeakReference weakReference = this.f27162p;
        if (weakReference != null && weakReference.get() == activity.getWindow()) {
            this.f27162p = null;
        }
    }

    public c0(Context context, final ILogger iLogger, final x0 x0Var, c cVar) {
        this.f27159e = new CopyOnWriteArraySet();
        this.f27163q = new ConcurrentHashMap();
        this.f27164r = false;
        this.f27169w = 0L;
        this.f27170x = 0L;
        Context context2 = (Context) io.sentry.util.y.c(e1.g(context), "The context is required");
        this.f27160i = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required");
        this.f27158d = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
        this.f27165s = (c) io.sentry.util.y.c(cVar, "WindowFrameMetricsManager is required");
        if ((context2 instanceof Application) && x0Var.d() >= 24) {
            this.f27164r = true;
            HandlerThread handlerThread = new HandlerThread("io.sentry.android.core.internal.util.SentryFrameMetricsCollector");
            handlerThread.setUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() { // from class: io.sentry.android.core.internal.util.z
                @Override // java.lang.Thread.UncaughtExceptionHandler
                public final void uncaughtException(Thread thread, Throwable th2) {
                    ILogger.this.b(SentryLevel.ERROR, "Error during frames measurements.", th2);
                }
            });
            handlerThread.start();
            this.f27161o = new Handler(handlerThread.getLooper());
            ((Application) context2).registerActivityLifecycleCallbacks(this);
            new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.internal.util.a0
                @Override // java.lang.Runnable
                public final void run() {
                    c0.a(c0.this, iLogger);
                }
            });
            try {
                Field declaredField = Choreographer.class.getDeclaredField("mLastFrameTimeNanos");
                this.f27168v = declaredField;
                declaredField.setAccessible(true);
            } catch (NoSuchFieldException e10) {
                iLogger.b(SentryLevel.ERROR, "Unable to get the frame timestamp from the choreographer: ", e10);
            }
            this.f27166t = new Window.OnFrameMetricsAvailableListener() { // from class: io.sentry.android.core.internal.util.b0
                @Override // android.view.Window.OnFrameMetricsAvailableListener
                public final void onFrameMetricsAvailable(Window window, FrameMetrics frameMetrics, int i10) {
                    c0.e(c0.this, x0Var, window, frameMetrics, i10);
                }
            };
        }
    }
}
