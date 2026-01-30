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
    private final k7 f29685d;

    /* renamed from: e  reason: collision with root package name */
    private final r f29686e;

    /* renamed from: i  reason: collision with root package name */
    private final t f29687i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f29688o;

    /* renamed from: p  reason: collision with root package name */
    private final ScheduledExecutorService f29689p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicBoolean f29690q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f29691r;

    /* renamed from: s  reason: collision with root package name */
    private Point f29692s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.util.a f29693t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f29694u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f29695v;

    /* renamed from: w  reason: collision with root package name */
    private volatile a f29696w;

    /* renamed from: x  reason: collision with root package name */
    private volatile HandlerThread f29697x;

    /* renamed from: y  reason: collision with root package name */
    private volatile Handler f29698y;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final k7 f29699d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.android.replay.util.g f29700e;

        /* renamed from: i  reason: collision with root package name */
        private q f29701i;

        /* renamed from: o  reason: collision with root package name */
        private s f29702o;

        /* renamed from: p  reason: collision with root package name */
        private final AtomicBoolean f29703p;

        public a(k7 options, io.sentry.android.replay.util.g mainLooperHandler) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
            this.f29699d = options;
            this.f29700e = mainLooperHandler;
            this.f29703p = new AtomicBoolean(true);
        }

        public final q a() {
            return this.f29701i;
        }

        public final void b() {
            q qVar = this.f29701i;
            if (qVar != null) {
                qVar.d();
            }
            this.f29703p.getAndSet(false);
        }

        public final void c() {
            if (this.f29699d.getSessionReplay().u()) {
                this.f29699d.getLogger().c(SentryLevel.DEBUG, "Resuming the capture runnable.", new Object[0]);
            }
            q qVar = this.f29701i;
            if (qVar != null) {
                qVar.e();
            }
            this.f29703p.getAndSet(true);
            this.f29700e.d(this);
            if (!this.f29700e.b(this)) {
                this.f29699d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is not ready.", new Object[0]);
            }
        }

        public final void d(s sVar) {
            this.f29702o = sVar;
        }

        public final void e(q qVar) {
            this.f29701i = qVar;
        }

        public final void f() {
            q qVar = this.f29701i;
            if (qVar != null) {
                qVar.c();
            }
            this.f29701i = null;
            this.f29703p.getAndSet(false);
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10;
            if (!this.f29703p.get()) {
                if (this.f29699d.getSessionReplay().u()) {
                    this.f29699d.getLogger().c(SentryLevel.DEBUG, "Not capturing frames, recording is not running.", new Object[0]);
                    return;
                }
                return;
            }
            try {
                if (this.f29699d.getSessionReplay().u()) {
                    this.f29699d.getLogger().c(SentryLevel.DEBUG, "Capturing a frame.", new Object[0]);
                }
                q qVar = this.f29701i;
                if (qVar != null) {
                    qVar.b();
                }
            } catch (Throwable th2) {
                this.f29699d.getLogger().b(SentryLevel.ERROR, "Failed to capture a frame", th2);
            }
            int i11 = 1;
            if (this.f29699d.getSessionReplay().u()) {
                ILogger logger = this.f29699d.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Posting the capture runnable again, frame rate is ");
                s sVar = this.f29702o;
                if (sVar != null) {
                    i10 = sVar.b();
                } else {
                    i10 = 1;
                }
                sb2.append(i10);
                sb2.append(" fps.");
                logger.c(sentryLevel, sb2.toString(), new Object[0]);
            }
            io.sentry.android.replay.util.g gVar = this.f29700e;
            s sVar2 = this.f29702o;
            if (sVar2 != null) {
                i11 = sVar2.b();
            }
            if (!gVar.c(this, 1000 / i11)) {
                this.f29699d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f29705e;

        b(View view) {
            this.f29705e = view;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            View view;
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(v.this.f29691r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            } else {
                view = null;
            }
            if (!Intrinsics.areEqual(this.f29705e, view)) {
                io.sentry.android.replay.util.n.i(this.f29705e, this);
                return true;
            }
            if (io.sentry.android.replay.util.n.e(this.f29705e)) {
                io.sentry.android.replay.util.n.i(this.f29705e, this);
                if (this.f29705e.getWidth() != v.this.f29692s.x && this.f29705e.getHeight() != v.this.f29692s.y) {
                    v.this.f29692s.set(this.f29705e.getWidth(), this.f29705e.getHeight());
                    v.this.f29687i.l(this.f29705e.getWidth(), this.f29705e.getHeight());
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f29706d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view) {
            super(1);
            this.f29706d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f29706d));
        }
    }

    public v(k7 options, r rVar, t windowCallback, io.sentry.android.replay.util.g mainLooperHandler, ScheduledExecutorService replayExecutor) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(windowCallback, "windowCallback");
        Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f29685d = options;
        this.f29686e = rVar;
        this.f29687i = windowCallback;
        this.f29688o = mainLooperHandler;
        this.f29689p = replayExecutor;
        this.f29690q = new AtomicBoolean(false);
        this.f29691r = new ArrayList();
        this.f29692s = new Point();
        this.f29693t = new io.sentry.util.a();
        this.f29694u = new io.sentry.util.a();
        this.f29695v = new io.sentry.util.a();
    }

    public final void F(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (io.sentry.android.replay.util.n.e(root)) {
            if (root.getWidth() != this.f29692s.x) {
                int height = root.getHeight();
                Point point = this.f29692s;
                if (height != point.y) {
                    point.set(root.getWidth(), root.getHeight());
                    this.f29687i.l(root.getWidth(), root.getHeight());
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
        return this.f29689p;
    }

    @Override // io.sentry.android.replay.g
    public void b() {
        a aVar = this.f29696w;
        if (aVar != null) {
            aVar.b();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        reset();
        this.f29688o.d(this.f29696w);
        a1 a10 = this.f29695v.a();
        try {
            Handler handler = this.f29698y;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            HandlerThread handlerThread = this.f29697x;
            if (handlerThread != null) {
                handlerThread.quitSafely();
            }
            ur.a.a(a10, null);
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
        a1 a13 = this.f29693t.a();
        try {
            if (z10) {
                if (x.a(root) == null) {
                    this.f29685d.getLogger().c(SentryLevel.WARNING, "Root view does not have a phone window, skipping.", new Object[0]);
                    ur.a.a(a13, null);
                    return;
                }
                this.f29691r.add(new WeakReference(root));
                a aVar = this.f29696w;
                if (aVar != null && (a12 = aVar.a()) != null) {
                    a12.a(root);
                }
                F(root);
            } else {
                a aVar2 = this.f29696w;
                if (aVar2 != null && (a11 = aVar2.a()) != null) {
                    a11.f(root);
                }
                CollectionsKt.J(this.f29691r, new c(root));
                WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f29691r);
                if (weakReference != null) {
                    view = (View) weakReference.get();
                } else {
                    view = null;
                }
                if (view != null && !Intrinsics.areEqual(root, view)) {
                    a aVar3 = this.f29696w;
                    if (aVar3 != null && (a10 = aVar3.a()) != null) {
                        a10.a(view);
                    }
                    F(view);
                }
            }
            Unit unit = Unit.f33298a;
            ur.a.a(a13, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ur.a.a(a13, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void i() {
        a aVar = this.f29696w;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // io.sentry.android.replay.b
    public io.sentry.android.replay.util.g l() {
        return this.f29688o;
    }

    @Override // io.sentry.android.replay.g
    public void m(s config) {
        a aVar;
        q a10;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f29690q.get()) {
            View view = null;
            if (this.f29696w == null) {
                a1 a11 = this.f29694u.a();
                try {
                    if (this.f29696w == null) {
                        this.f29696w = new a(this.f29685d, this.f29688o);
                    }
                    Unit unit = Unit.f33298a;
                    ur.a.a(a11, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } catch (Throwable th3) {
                        ur.a.a(a11, th2);
                        throw th3;
                    }
                }
            }
            a aVar2 = this.f29696w;
            if (aVar2 != null) {
                aVar2.d(config);
            }
            a aVar3 = this.f29696w;
            if (aVar3 != null) {
                aVar3.e(new q(config, this.f29685d, this, this.f29686e));
            }
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f29691r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            }
            if (view != null && (aVar = this.f29696w) != null && (a10 = aVar.a()) != null) {
                a10.a(view);
            }
            this.f29688o.d(this.f29696w);
            if (!this.f29688o.c(this.f29696w, 100L)) {
                this.f29685d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.android.replay.b
    public Handler n() {
        if (this.f29698y == null) {
            a1 a10 = this.f29695v.a();
            try {
                if (this.f29698y == null) {
                    this.f29697x = new HandlerThread("SentryReplayBackgroundProcessing");
                    HandlerThread handlerThread = this.f29697x;
                    if (handlerThread != null) {
                        handlerThread.start();
                    }
                    HandlerThread handlerThread2 = this.f29697x;
                    Intrinsics.checkNotNull(handlerThread2);
                    this.f29698y = new Handler(handlerThread2.getLooper());
                }
                Unit unit = Unit.f33298a;
                ur.a.a(a10, null);
            } finally {
            }
        }
        Handler handler = this.f29698y;
        Intrinsics.checkNotNull(handler);
        return handler;
    }

    @Override // io.sentry.android.replay.g
    public void reset() {
        q a10;
        this.f29692s.set(0, 0);
        a1 a11 = this.f29693t.a();
        try {
            for (WeakReference weakReference : this.f29691r) {
                a aVar = this.f29696w;
                if (aVar != null && (a10 = aVar.a()) != null) {
                    a10.f((View) weakReference.get());
                }
            }
            this.f29691r.clear();
            Unit unit = Unit.f33298a;
            ur.a.a(a11, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.g
    public void start() {
        this.f29690q.getAndSet(true);
    }

    @Override // io.sentry.android.replay.g
    public void stop() {
        a aVar = this.f29696w;
        if (aVar != null) {
            aVar.f();
        }
        a1 a10 = this.f29694u.a();
        try {
            this.f29696w = null;
            Unit unit = Unit.f33298a;
            ur.a.a(a10, null);
            this.f29690q.set(false);
        } finally {
        }
    }
}
