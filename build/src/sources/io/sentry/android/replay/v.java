package io.sentry.android.replay;

import android.graphics.Point;
import android.os.Handler;
import android.os.HandlerThread;
import android.view.View;
import android.view.ViewTreeObserver;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.k7;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v implements g, e, io.sentry.android.replay.b {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f28062d;

    /* renamed from: e  reason: collision with root package name */
    private final r f28063e;

    /* renamed from: i  reason: collision with root package name */
    private final t f28064i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f28065o;

    /* renamed from: p  reason: collision with root package name */
    private final ScheduledExecutorService f28066p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicBoolean f28067q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f28068r;

    /* renamed from: s  reason: collision with root package name */
    private Point f28069s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.util.a f28070t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f28071u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f28072v;

    /* renamed from: w  reason: collision with root package name */
    private volatile a f28073w;

    /* renamed from: x  reason: collision with root package name */
    private volatile HandlerThread f28074x;

    /* renamed from: y  reason: collision with root package name */
    private volatile Handler f28075y;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final k7 f28076d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.android.replay.util.g f28077e;

        /* renamed from: i  reason: collision with root package name */
        private q f28078i;

        /* renamed from: o  reason: collision with root package name */
        private s f28079o;

        /* renamed from: p  reason: collision with root package name */
        private final AtomicBoolean f28080p;

        public a(k7 options, io.sentry.android.replay.util.g mainLooperHandler) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
            this.f28076d = options;
            this.f28077e = mainLooperHandler;
            this.f28080p = new AtomicBoolean(true);
        }

        public final q a() {
            return this.f28078i;
        }

        public final void b() {
            q qVar = this.f28078i;
            if (qVar != null) {
                qVar.d();
            }
            this.f28080p.getAndSet(false);
        }

        public final void c() {
            if (this.f28076d.getSessionReplay().u()) {
                this.f28076d.getLogger().c(SentryLevel.DEBUG, "Resuming the capture runnable.", new Object[0]);
            }
            q qVar = this.f28078i;
            if (qVar != null) {
                qVar.e();
            }
            this.f28080p.getAndSet(true);
            this.f28077e.d(this);
            if (!this.f28077e.b(this)) {
                this.f28076d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is not ready.", new Object[0]);
            }
        }

        public final void d(s sVar) {
            this.f28079o = sVar;
        }

        public final void e(q qVar) {
            this.f28078i = qVar;
        }

        public final void f() {
            q qVar = this.f28078i;
            if (qVar != null) {
                qVar.c();
            }
            this.f28078i = null;
            this.f28080p.getAndSet(false);
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10;
            if (!this.f28080p.get()) {
                if (this.f28076d.getSessionReplay().u()) {
                    this.f28076d.getLogger().c(SentryLevel.DEBUG, "Not capturing frames, recording is not running.", new Object[0]);
                    return;
                }
                return;
            }
            try {
                if (this.f28076d.getSessionReplay().u()) {
                    this.f28076d.getLogger().c(SentryLevel.DEBUG, "Capturing a frame.", new Object[0]);
                }
                q qVar = this.f28078i;
                if (qVar != null) {
                    qVar.b();
                }
            } catch (Throwable th2) {
                this.f28076d.getLogger().b(SentryLevel.ERROR, "Failed to capture a frame", th2);
            }
            int i11 = 1;
            if (this.f28076d.getSessionReplay().u()) {
                ILogger logger = this.f28076d.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Posting the capture runnable again, frame rate is ");
                s sVar = this.f28079o;
                if (sVar != null) {
                    i10 = sVar.b();
                } else {
                    i10 = 1;
                }
                sb2.append(i10);
                sb2.append(" fps.");
                logger.c(sentryLevel, sb2.toString(), new Object[0]);
            }
            io.sentry.android.replay.util.g gVar = this.f28077e;
            s sVar2 = this.f28079o;
            if (sVar2 != null) {
                i11 = sVar2.b();
            }
            if (!gVar.c(this, 1000 / i11)) {
                this.f28076d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f28082e;

        b(View view) {
            this.f28082e = view;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            View view;
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(v.this.f28068r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            } else {
                view = null;
            }
            if (!Intrinsics.areEqual(this.f28082e, view)) {
                io.sentry.android.replay.util.n.i(this.f28082e, this);
                return true;
            }
            if (io.sentry.android.replay.util.n.e(this.f28082e)) {
                io.sentry.android.replay.util.n.i(this.f28082e, this);
                if (this.f28082e.getWidth() != v.this.f28069s.x && this.f28082e.getHeight() != v.this.f28069s.y) {
                    v.this.f28069s.set(this.f28082e.getWidth(), this.f28082e.getHeight());
                    v.this.f28064i.k(this.f28082e.getWidth(), this.f28082e.getHeight());
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f28083d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view) {
            super(1);
            this.f28083d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f28083d));
        }
    }

    public v(k7 options, r rVar, t windowCallback, io.sentry.android.replay.util.g mainLooperHandler, ScheduledExecutorService replayExecutor) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(windowCallback, "windowCallback");
        Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28062d = options;
        this.f28063e = rVar;
        this.f28064i = windowCallback;
        this.f28065o = mainLooperHandler;
        this.f28066p = replayExecutor;
        this.f28067q = new AtomicBoolean(false);
        this.f28068r = new ArrayList();
        this.f28069s = new Point();
        this.f28070t = new io.sentry.util.a();
        this.f28071u = new io.sentry.util.a();
        this.f28072v = new io.sentry.util.a();
    }

    @Override // io.sentry.android.replay.b
    public ScheduledExecutorService a() {
        return this.f28066p;
    }

    @Override // io.sentry.android.replay.g
    public void b() {
        a aVar = this.f28073w;
        if (aVar != null) {
            aVar.b();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        reset();
        this.f28065o.d(this.f28073w);
        a1 a10 = this.f28072v.a();
        try {
            Handler handler = this.f28075y;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            HandlerThread handlerThread = this.f28074x;
            if (handlerThread != null) {
                handlerThread.quitSafely();
            }
            ds.a.a(a10, null);
            stop();
        } finally {
        }
    }

    @Override // io.sentry.android.replay.e
    public void g(View root, boolean z10) {
        View view;
        q a10;
        q a11;
        q a12;
        Intrinsics.checkNotNullParameter(root, "root");
        a1 a13 = this.f28070t.a();
        try {
            if (z10) {
                if (x.a(root) == null) {
                    this.f28062d.getLogger().c(SentryLevel.WARNING, "Root view does not have a phone window, skipping.", new Object[0]);
                    ds.a.a(a13, null);
                    return;
                }
                this.f28068r.add(new WeakReference(root));
                a aVar = this.f28073w;
                if (aVar != null && (a12 = aVar.a()) != null) {
                    a12.a(root);
                }
                y(root);
            } else {
                a aVar2 = this.f28073w;
                if (aVar2 != null && (a11 = aVar2.a()) != null) {
                    a11.f(root);
                }
                CollectionsKt.J(this.f28068r, new c(root));
                WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f28068r);
                if (weakReference != null) {
                    view = (View) weakReference.get();
                } else {
                    view = null;
                }
                if (view != null && !Intrinsics.areEqual(root, view)) {
                    a aVar3 = this.f28073w;
                    if (aVar3 != null && (a10 = aVar3.a()) != null) {
                        a10.a(view);
                    }
                    y(view);
                }
            }
            Unit unit = Unit.f31765a;
            ds.a.a(a13, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ds.a.a(a13, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void i() {
        a aVar = this.f28073w;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // io.sentry.android.replay.b
    public io.sentry.android.replay.util.g k() {
        return this.f28065o;
    }

    @Override // io.sentry.android.replay.b
    public Handler m() {
        if (this.f28075y == null) {
            a1 a10 = this.f28072v.a();
            try {
                if (this.f28075y == null) {
                    this.f28074x = new HandlerThread("SentryReplayBackgroundProcessing");
                    HandlerThread handlerThread = this.f28074x;
                    if (handlerThread != null) {
                        handlerThread.start();
                    }
                    HandlerThread handlerThread2 = this.f28074x;
                    Intrinsics.checkNotNull(handlerThread2);
                    this.f28075y = new Handler(handlerThread2.getLooper());
                }
                Unit unit = Unit.f31765a;
                ds.a.a(a10, null);
            } finally {
            }
        }
        Handler handler = this.f28075y;
        Intrinsics.checkNotNull(handler);
        return handler;
    }

    @Override // io.sentry.android.replay.g
    public void o(s config) {
        a aVar;
        q a10;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f28067q.get()) {
            View view = null;
            if (this.f28073w == null) {
                a1 a11 = this.f28071u.a();
                try {
                    if (this.f28073w == null) {
                        this.f28073w = new a(this.f28062d, this.f28065o);
                    }
                    Unit unit = Unit.f31765a;
                    ds.a.a(a11, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } catch (Throwable th3) {
                        ds.a.a(a11, th2);
                        throw th3;
                    }
                }
            }
            a aVar2 = this.f28073w;
            if (aVar2 != null) {
                aVar2.d(config);
            }
            a aVar3 = this.f28073w;
            if (aVar3 != null) {
                aVar3.e(new q(config, this.f28062d, this, this.f28063e));
            }
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f28068r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            }
            if (view != null && (aVar = this.f28073w) != null && (a10 = aVar.a()) != null) {
                a10.a(view);
            }
            this.f28065o.d(this.f28073w);
            if (!this.f28065o.c(this.f28073w, 100L)) {
                this.f28062d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void reset() {
        q a10;
        this.f28069s.set(0, 0);
        a1 a11 = this.f28070t.a();
        try {
            for (WeakReference weakReference : this.f28068r) {
                a aVar = this.f28073w;
                if (aVar != null && (a10 = aVar.a()) != null) {
                    a10.f((View) weakReference.get());
                }
            }
            this.f28068r.clear();
            Unit unit = Unit.f31765a;
            ds.a.a(a11, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.g
    public void start() {
        this.f28067q.getAndSet(true);
    }

    @Override // io.sentry.android.replay.g
    public void stop() {
        a aVar = this.f28073w;
        if (aVar != null) {
            aVar.f();
        }
        a1 a10 = this.f28071u.a();
        try {
            this.f28073w = null;
            Unit unit = Unit.f31765a;
            ds.a.a(a10, null);
            this.f28067q.set(false);
        } finally {
        }
    }

    public final void y(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (io.sentry.android.replay.util.n.e(root)) {
            if (root.getWidth() != this.f28069s.x) {
                int height = root.getHeight();
                Point point = this.f28069s;
                if (height != point.y) {
                    point.set(root.getWidth(), root.getHeight());
                    this.f28064i.k(root.getWidth(), root.getHeight());
                    return;
                }
                return;
            }
            return;
        }
        io.sentry.android.replay.util.n.b(root, new b(root));
    }
}
