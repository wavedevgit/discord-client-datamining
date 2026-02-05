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
    private final k7 f28670d;

    /* renamed from: e  reason: collision with root package name */
    private final r f28671e;

    /* renamed from: i  reason: collision with root package name */
    private final t f28672i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f28673o;

    /* renamed from: p  reason: collision with root package name */
    private final ScheduledExecutorService f28674p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicBoolean f28675q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f28676r;

    /* renamed from: s  reason: collision with root package name */
    private Point f28677s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.util.a f28678t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f28679u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f28680v;

    /* renamed from: w  reason: collision with root package name */
    private volatile a f28681w;

    /* renamed from: x  reason: collision with root package name */
    private volatile HandlerThread f28682x;

    /* renamed from: y  reason: collision with root package name */
    private volatile Handler f28683y;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final k7 f28684d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.android.replay.util.g f28685e;

        /* renamed from: i  reason: collision with root package name */
        private q f28686i;

        /* renamed from: o  reason: collision with root package name */
        private s f28687o;

        /* renamed from: p  reason: collision with root package name */
        private final AtomicBoolean f28688p;

        public a(k7 options, io.sentry.android.replay.util.g mainLooperHandler) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
            this.f28684d = options;
            this.f28685e = mainLooperHandler;
            this.f28688p = new AtomicBoolean(true);
        }

        public final q a() {
            return this.f28686i;
        }

        public final void b() {
            q qVar = this.f28686i;
            if (qVar != null) {
                qVar.d();
            }
            this.f28688p.getAndSet(false);
        }

        public final void c() {
            if (this.f28684d.getSessionReplay().u()) {
                this.f28684d.getLogger().c(SentryLevel.DEBUG, "Resuming the capture runnable.", new Object[0]);
            }
            q qVar = this.f28686i;
            if (qVar != null) {
                qVar.e();
            }
            this.f28688p.getAndSet(true);
            this.f28685e.d(this);
            if (!this.f28685e.b(this)) {
                this.f28684d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is not ready.", new Object[0]);
            }
        }

        public final void d(s sVar) {
            this.f28687o = sVar;
        }

        public final void e(q qVar) {
            this.f28686i = qVar;
        }

        public final void f() {
            q qVar = this.f28686i;
            if (qVar != null) {
                qVar.c();
            }
            this.f28686i = null;
            this.f28688p.getAndSet(false);
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10;
            if (!this.f28688p.get()) {
                if (this.f28684d.getSessionReplay().u()) {
                    this.f28684d.getLogger().c(SentryLevel.DEBUG, "Not capturing frames, recording is not running.", new Object[0]);
                    return;
                }
                return;
            }
            try {
                if (this.f28684d.getSessionReplay().u()) {
                    this.f28684d.getLogger().c(SentryLevel.DEBUG, "Capturing a frame.", new Object[0]);
                }
                q qVar = this.f28686i;
                if (qVar != null) {
                    qVar.b();
                }
            } catch (Throwable th2) {
                this.f28684d.getLogger().b(SentryLevel.ERROR, "Failed to capture a frame", th2);
            }
            int i11 = 1;
            if (this.f28684d.getSessionReplay().u()) {
                ILogger logger = this.f28684d.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Posting the capture runnable again, frame rate is ");
                s sVar = this.f28687o;
                if (sVar != null) {
                    i10 = sVar.b();
                } else {
                    i10 = 1;
                }
                sb2.append(i10);
                sb2.append(" fps.");
                logger.c(sentryLevel, sb2.toString(), new Object[0]);
            }
            io.sentry.android.replay.util.g gVar = this.f28685e;
            s sVar2 = this.f28687o;
            if (sVar2 != null) {
                i11 = sVar2.b();
            }
            if (!gVar.c(this, 1000 / i11)) {
                this.f28684d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f28690e;

        b(View view) {
            this.f28690e = view;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            View view;
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(v.this.f28676r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            } else {
                view = null;
            }
            if (!Intrinsics.areEqual(this.f28690e, view)) {
                io.sentry.android.replay.util.n.i(this.f28690e, this);
                return true;
            }
            if (io.sentry.android.replay.util.n.e(this.f28690e)) {
                io.sentry.android.replay.util.n.i(this.f28690e, this);
                if (this.f28690e.getWidth() != v.this.f28677s.x && this.f28690e.getHeight() != v.this.f28677s.y) {
                    v.this.f28677s.set(this.f28690e.getWidth(), this.f28690e.getHeight());
                    v.this.f28672i.k(this.f28690e.getWidth(), this.f28690e.getHeight());
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f28691d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view) {
            super(1);
            this.f28691d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f28691d));
        }
    }

    public v(k7 options, r rVar, t windowCallback, io.sentry.android.replay.util.g mainLooperHandler, ScheduledExecutorService replayExecutor) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(windowCallback, "windowCallback");
        Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28670d = options;
        this.f28671e = rVar;
        this.f28672i = windowCallback;
        this.f28673o = mainLooperHandler;
        this.f28674p = replayExecutor;
        this.f28675q = new AtomicBoolean(false);
        this.f28676r = new ArrayList();
        this.f28677s = new Point();
        this.f28678t = new io.sentry.util.a();
        this.f28679u = new io.sentry.util.a();
        this.f28680v = new io.sentry.util.a();
    }

    public final void F(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (io.sentry.android.replay.util.n.e(root)) {
            if (root.getWidth() != this.f28677s.x) {
                int height = root.getHeight();
                Point point = this.f28677s;
                if (height != point.y) {
                    point.set(root.getWidth(), root.getHeight());
                    this.f28672i.k(root.getWidth(), root.getHeight());
                    return;
                }
                return;
            }
            return;
        }
        io.sentry.android.replay.util.n.b(root, new b(root));
    }

    @Override // io.sentry.android.replay.b
    public ScheduledExecutorService a() {
        return this.f28674p;
    }

    @Override // io.sentry.android.replay.g
    public void b() {
        a aVar = this.f28681w;
        if (aVar != null) {
            aVar.b();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        reset();
        this.f28673o.d(this.f28681w);
        a1 a10 = this.f28680v.a();
        try {
            Handler handler = this.f28683y;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            HandlerThread handlerThread = this.f28682x;
            if (handlerThread != null) {
                handlerThread.quitSafely();
            }
            as.a.a(a10, null);
            stop();
        } finally {
        }
    }

    @Override // io.sentry.android.replay.e
    public void h(View root, boolean z10) {
        View view;
        q a10;
        q a11;
        q a12;
        Intrinsics.checkNotNullParameter(root, "root");
        a1 a13 = this.f28678t.a();
        try {
            if (z10) {
                if (x.a(root) == null) {
                    this.f28670d.getLogger().c(SentryLevel.WARNING, "Root view does not have a phone window, skipping.", new Object[0]);
                    as.a.a(a13, null);
                    return;
                }
                this.f28676r.add(new WeakReference(root));
                a aVar = this.f28681w;
                if (aVar != null && (a12 = aVar.a()) != null) {
                    a12.a(root);
                }
                F(root);
            } else {
                a aVar2 = this.f28681w;
                if (aVar2 != null && (a11 = aVar2.a()) != null) {
                    a11.f(root);
                }
                CollectionsKt.J(this.f28676r, new c(root));
                WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f28676r);
                if (weakReference != null) {
                    view = (View) weakReference.get();
                } else {
                    view = null;
                }
                if (view != null && !Intrinsics.areEqual(root, view)) {
                    a aVar3 = this.f28681w;
                    if (aVar3 != null && (a10 = aVar3.a()) != null) {
                        a10.a(view);
                    }
                    F(view);
                }
            }
            Unit unit = Unit.f31988a;
            as.a.a(a13, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                as.a.a(a13, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void i() {
        a aVar = this.f28681w;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // io.sentry.android.replay.b
    public io.sentry.android.replay.util.g k() {
        return this.f28673o;
    }

    @Override // io.sentry.android.replay.b
    public Handler m() {
        if (this.f28683y == null) {
            a1 a10 = this.f28680v.a();
            try {
                if (this.f28683y == null) {
                    this.f28682x = new HandlerThread("SentryReplayBackgroundProcessing");
                    HandlerThread handlerThread = this.f28682x;
                    if (handlerThread != null) {
                        handlerThread.start();
                    }
                    HandlerThread handlerThread2 = this.f28682x;
                    Intrinsics.checkNotNull(handlerThread2);
                    this.f28683y = new Handler(handlerThread2.getLooper());
                }
                Unit unit = Unit.f31988a;
                as.a.a(a10, null);
            } finally {
            }
        }
        Handler handler = this.f28683y;
        Intrinsics.checkNotNull(handler);
        return handler;
    }

    @Override // io.sentry.android.replay.g
    public void n(s config) {
        a aVar;
        q a10;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f28675q.get()) {
            View view = null;
            if (this.f28681w == null) {
                a1 a11 = this.f28679u.a();
                try {
                    if (this.f28681w == null) {
                        this.f28681w = new a(this.f28670d, this.f28673o);
                    }
                    Unit unit = Unit.f31988a;
                    as.a.a(a11, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } catch (Throwable th3) {
                        as.a.a(a11, th2);
                        throw th3;
                    }
                }
            }
            a aVar2 = this.f28681w;
            if (aVar2 != null) {
                aVar2.d(config);
            }
            a aVar3 = this.f28681w;
            if (aVar3 != null) {
                aVar3.e(new q(config, this.f28670d, this, this.f28671e));
            }
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f28676r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            }
            if (view != null && (aVar = this.f28681w) != null && (a10 = aVar.a()) != null) {
                a10.a(view);
            }
            this.f28673o.d(this.f28681w);
            if (!this.f28673o.c(this.f28681w, 100L)) {
                this.f28670d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void reset() {
        q a10;
        this.f28677s.set(0, 0);
        a1 a11 = this.f28678t.a();
        try {
            for (WeakReference weakReference : this.f28676r) {
                a aVar = this.f28681w;
                if (aVar != null && (a10 = aVar.a()) != null) {
                    a10.f((View) weakReference.get());
                }
            }
            this.f28676r.clear();
            Unit unit = Unit.f31988a;
            as.a.a(a11, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.g
    public void start() {
        this.f28675q.getAndSet(true);
    }

    @Override // io.sentry.android.replay.g
    public void stop() {
        a aVar = this.f28681w;
        if (aVar != null) {
            aVar.f();
        }
        a1 a10 = this.f28679u.a();
        try {
            this.f28681w = null;
            Unit unit = Unit.f31988a;
            as.a.a(a10, null);
            this.f28675q.set(false);
        } finally {
        }
    }
}
