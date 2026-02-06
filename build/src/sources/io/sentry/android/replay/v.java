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
    private final k7 f27814d;

    /* renamed from: e  reason: collision with root package name */
    private final r f27815e;

    /* renamed from: i  reason: collision with root package name */
    private final t f27816i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f27817o;

    /* renamed from: p  reason: collision with root package name */
    private final ScheduledExecutorService f27818p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicBoolean f27819q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f27820r;

    /* renamed from: s  reason: collision with root package name */
    private Point f27821s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.util.a f27822t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f27823u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f27824v;

    /* renamed from: w  reason: collision with root package name */
    private volatile a f27825w;

    /* renamed from: x  reason: collision with root package name */
    private volatile HandlerThread f27826x;

    /* renamed from: y  reason: collision with root package name */
    private volatile Handler f27827y;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final k7 f27828d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.android.replay.util.g f27829e;

        /* renamed from: i  reason: collision with root package name */
        private q f27830i;

        /* renamed from: o  reason: collision with root package name */
        private s f27831o;

        /* renamed from: p  reason: collision with root package name */
        private final AtomicBoolean f27832p;

        public a(k7 options, io.sentry.android.replay.util.g mainLooperHandler) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
            this.f27828d = options;
            this.f27829e = mainLooperHandler;
            this.f27832p = new AtomicBoolean(true);
        }

        public final q a() {
            return this.f27830i;
        }

        public final void b() {
            q qVar = this.f27830i;
            if (qVar != null) {
                qVar.d();
            }
            this.f27832p.getAndSet(false);
        }

        public final void c() {
            if (this.f27828d.getSessionReplay().u()) {
                this.f27828d.getLogger().c(SentryLevel.DEBUG, "Resuming the capture runnable.", new Object[0]);
            }
            q qVar = this.f27830i;
            if (qVar != null) {
                qVar.e();
            }
            this.f27832p.getAndSet(true);
            this.f27829e.d(this);
            if (!this.f27829e.b(this)) {
                this.f27828d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is not ready.", new Object[0]);
            }
        }

        public final void d(s sVar) {
            this.f27831o = sVar;
        }

        public final void e(q qVar) {
            this.f27830i = qVar;
        }

        public final void f() {
            q qVar = this.f27830i;
            if (qVar != null) {
                qVar.c();
            }
            this.f27830i = null;
            this.f27832p.getAndSet(false);
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10;
            if (!this.f27832p.get()) {
                if (this.f27828d.getSessionReplay().u()) {
                    this.f27828d.getLogger().c(SentryLevel.DEBUG, "Not capturing frames, recording is not running.", new Object[0]);
                    return;
                }
                return;
            }
            try {
                if (this.f27828d.getSessionReplay().u()) {
                    this.f27828d.getLogger().c(SentryLevel.DEBUG, "Capturing a frame.", new Object[0]);
                }
                q qVar = this.f27830i;
                if (qVar != null) {
                    qVar.b();
                }
            } catch (Throwable th2) {
                this.f27828d.getLogger().b(SentryLevel.ERROR, "Failed to capture a frame", th2);
            }
            int i11 = 1;
            if (this.f27828d.getSessionReplay().u()) {
                ILogger logger = this.f27828d.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Posting the capture runnable again, frame rate is ");
                s sVar = this.f27831o;
                if (sVar != null) {
                    i10 = sVar.b();
                } else {
                    i10 = 1;
                }
                sb2.append(i10);
                sb2.append(" fps.");
                logger.c(sentryLevel, sb2.toString(), new Object[0]);
            }
            io.sentry.android.replay.util.g gVar = this.f27829e;
            s sVar2 = this.f27831o;
            if (sVar2 != null) {
                i11 = sVar2.b();
            }
            if (!gVar.c(this, 1000 / i11)) {
                this.f27828d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f27834e;

        b(View view) {
            this.f27834e = view;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            View view;
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(v.this.f27820r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            } else {
                view = null;
            }
            if (!Intrinsics.areEqual(this.f27834e, view)) {
                io.sentry.android.replay.util.n.i(this.f27834e, this);
                return true;
            }
            if (io.sentry.android.replay.util.n.e(this.f27834e)) {
                io.sentry.android.replay.util.n.i(this.f27834e, this);
                if (this.f27834e.getWidth() != v.this.f27821s.x && this.f27834e.getHeight() != v.this.f27821s.y) {
                    v.this.f27821s.set(this.f27834e.getWidth(), this.f27834e.getHeight());
                    v.this.f27816i.k(this.f27834e.getWidth(), this.f27834e.getHeight());
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f27835d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view) {
            super(1);
            this.f27835d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f27835d));
        }
    }

    public v(k7 options, r rVar, t windowCallback, io.sentry.android.replay.util.g mainLooperHandler, ScheduledExecutorService replayExecutor) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(windowCallback, "windowCallback");
        Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f27814d = options;
        this.f27815e = rVar;
        this.f27816i = windowCallback;
        this.f27817o = mainLooperHandler;
        this.f27818p = replayExecutor;
        this.f27819q = new AtomicBoolean(false);
        this.f27820r = new ArrayList();
        this.f27821s = new Point();
        this.f27822t = new io.sentry.util.a();
        this.f27823u = new io.sentry.util.a();
        this.f27824v = new io.sentry.util.a();
    }

    @Override // io.sentry.android.replay.b
    public ScheduledExecutorService a() {
        return this.f27818p;
    }

    @Override // io.sentry.android.replay.g
    public void b() {
        a aVar = this.f27825w;
        if (aVar != null) {
            aVar.b();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        reset();
        this.f27817o.d(this.f27825w);
        a1 a10 = this.f27824v.a();
        try {
            Handler handler = this.f27827y;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            HandlerThread handlerThread = this.f27826x;
            if (handlerThread != null) {
                handlerThread.quitSafely();
            }
            cs.a.a(a10, null);
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
        a1 a13 = this.f27822t.a();
        try {
            if (z10) {
                if (x.a(root) == null) {
                    this.f27814d.getLogger().c(SentryLevel.WARNING, "Root view does not have a phone window, skipping.", new Object[0]);
                    cs.a.a(a13, null);
                    return;
                }
                this.f27820r.add(new WeakReference(root));
                a aVar = this.f27825w;
                if (aVar != null && (a12 = aVar.a()) != null) {
                    a12.a(root);
                }
                y(root);
            } else {
                a aVar2 = this.f27825w;
                if (aVar2 != null && (a11 = aVar2.a()) != null) {
                    a11.f(root);
                }
                CollectionsKt.J(this.f27820r, new c(root));
                WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f27820r);
                if (weakReference != null) {
                    view = (View) weakReference.get();
                } else {
                    view = null;
                }
                if (view != null && !Intrinsics.areEqual(root, view)) {
                    a aVar3 = this.f27825w;
                    if (aVar3 != null && (a10 = aVar3.a()) != null) {
                        a10.a(view);
                    }
                    y(view);
                }
            }
            Unit unit = Unit.f32008a;
            cs.a.a(a13, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                cs.a.a(a13, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void h() {
        a aVar = this.f27825w;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // io.sentry.android.replay.b
    public io.sentry.android.replay.util.g k() {
        return this.f27817o;
    }

    @Override // io.sentry.android.replay.b
    public Handler m() {
        if (this.f27827y == null) {
            a1 a10 = this.f27824v.a();
            try {
                if (this.f27827y == null) {
                    this.f27826x = new HandlerThread("SentryReplayBackgroundProcessing");
                    HandlerThread handlerThread = this.f27826x;
                    if (handlerThread != null) {
                        handlerThread.start();
                    }
                    HandlerThread handlerThread2 = this.f27826x;
                    Intrinsics.checkNotNull(handlerThread2);
                    this.f27827y = new Handler(handlerThread2.getLooper());
                }
                Unit unit = Unit.f32008a;
                cs.a.a(a10, null);
            } finally {
            }
        }
        Handler handler = this.f27827y;
        Intrinsics.checkNotNull(handler);
        return handler;
    }

    @Override // io.sentry.android.replay.g
    public void o(s config) {
        a aVar;
        q a10;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f27819q.get()) {
            View view = null;
            if (this.f27825w == null) {
                a1 a11 = this.f27823u.a();
                try {
                    if (this.f27825w == null) {
                        this.f27825w = new a(this.f27814d, this.f27817o);
                    }
                    Unit unit = Unit.f32008a;
                    cs.a.a(a11, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } catch (Throwable th3) {
                        cs.a.a(a11, th2);
                        throw th3;
                    }
                }
            }
            a aVar2 = this.f27825w;
            if (aVar2 != null) {
                aVar2.d(config);
            }
            a aVar3 = this.f27825w;
            if (aVar3 != null) {
                aVar3.e(new q(config, this.f27814d, this, this.f27815e));
            }
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f27820r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            }
            if (view != null && (aVar = this.f27825w) != null && (a10 = aVar.a()) != null) {
                a10.a(view);
            }
            this.f27817o.d(this.f27825w);
            if (!this.f27817o.c(this.f27825w, 100L)) {
                this.f27814d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void reset() {
        q a10;
        this.f27821s.set(0, 0);
        a1 a11 = this.f27822t.a();
        try {
            for (WeakReference weakReference : this.f27820r) {
                a aVar = this.f27825w;
                if (aVar != null && (a10 = aVar.a()) != null) {
                    a10.f((View) weakReference.get());
                }
            }
            this.f27820r.clear();
            Unit unit = Unit.f32008a;
            cs.a.a(a11, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.g
    public void start() {
        this.f27819q.getAndSet(true);
    }

    @Override // io.sentry.android.replay.g
    public void stop() {
        a aVar = this.f27825w;
        if (aVar != null) {
            aVar.f();
        }
        a1 a10 = this.f27823u.a();
        try {
            this.f27825w = null;
            Unit unit = Unit.f32008a;
            cs.a.a(a10, null);
            this.f27819q.set(false);
        } finally {
        }
    }

    public final void y(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (io.sentry.android.replay.util.n.e(root)) {
            if (root.getWidth() != this.f27821s.x) {
                int height = root.getHeight();
                Point point = this.f27821s;
                if (height != point.y) {
                    point.set(root.getWidth(), root.getHeight());
                    this.f27816i.k(root.getWidth(), root.getHeight());
                    return;
                }
                return;
            }
            return;
        }
        io.sentry.android.replay.util.n.b(root, new b(root));
    }
}
