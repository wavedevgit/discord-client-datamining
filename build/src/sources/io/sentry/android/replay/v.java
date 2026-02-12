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
    private final k7 f28998d;

    /* renamed from: e  reason: collision with root package name */
    private final r f28999e;

    /* renamed from: i  reason: collision with root package name */
    private final t f29000i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f29001o;

    /* renamed from: p  reason: collision with root package name */
    private final ScheduledExecutorService f29002p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicBoolean f29003q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f29004r;

    /* renamed from: s  reason: collision with root package name */
    private Point f29005s;

    /* renamed from: t  reason: collision with root package name */
    private final io.sentry.util.a f29006t;

    /* renamed from: u  reason: collision with root package name */
    private final io.sentry.util.a f29007u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f29008v;

    /* renamed from: w  reason: collision with root package name */
    private volatile a f29009w;

    /* renamed from: x  reason: collision with root package name */
    private volatile HandlerThread f29010x;

    /* renamed from: y  reason: collision with root package name */
    private volatile Handler f29011y;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final k7 f29012d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.android.replay.util.g f29013e;

        /* renamed from: i  reason: collision with root package name */
        private q f29014i;

        /* renamed from: o  reason: collision with root package name */
        private s f29015o;

        /* renamed from: p  reason: collision with root package name */
        private final AtomicBoolean f29016p;

        public a(k7 options, io.sentry.android.replay.util.g mainLooperHandler) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
            this.f29012d = options;
            this.f29013e = mainLooperHandler;
            this.f29016p = new AtomicBoolean(true);
        }

        public final q a() {
            return this.f29014i;
        }

        public final void b() {
            q qVar = this.f29014i;
            if (qVar != null) {
                qVar.d();
            }
            this.f29016p.getAndSet(false);
        }

        public final void c() {
            if (this.f29012d.getSessionReplay().u()) {
                this.f29012d.getLogger().c(SentryLevel.DEBUG, "Resuming the capture runnable.", new Object[0]);
            }
            q qVar = this.f29014i;
            if (qVar != null) {
                qVar.e();
            }
            this.f29016p.getAndSet(true);
            this.f29013e.d(this);
            if (!this.f29013e.b(this)) {
                this.f29012d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is not ready.", new Object[0]);
            }
        }

        public final void d(s sVar) {
            this.f29015o = sVar;
        }

        public final void e(q qVar) {
            this.f29014i = qVar;
        }

        public final void f() {
            q qVar = this.f29014i;
            if (qVar != null) {
                qVar.c();
            }
            this.f29014i = null;
            this.f29016p.getAndSet(false);
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10;
            if (!this.f29016p.get()) {
                if (this.f29012d.getSessionReplay().u()) {
                    this.f29012d.getLogger().c(SentryLevel.DEBUG, "Not capturing frames, recording is not running.", new Object[0]);
                    return;
                }
                return;
            }
            try {
                if (this.f29012d.getSessionReplay().u()) {
                    this.f29012d.getLogger().c(SentryLevel.DEBUG, "Capturing a frame.", new Object[0]);
                }
                q qVar = this.f29014i;
                if (qVar != null) {
                    qVar.b();
                }
            } catch (Throwable th2) {
                this.f29012d.getLogger().b(SentryLevel.ERROR, "Failed to capture a frame", th2);
            }
            int i11 = 1;
            if (this.f29012d.getSessionReplay().u()) {
                ILogger logger = this.f29012d.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Posting the capture runnable again, frame rate is ");
                s sVar = this.f29015o;
                if (sVar != null) {
                    i10 = sVar.b();
                } else {
                    i10 = 1;
                }
                sb2.append(i10);
                sb2.append(" fps.");
                logger.c(sentryLevel, sb2.toString(), new Object[0]);
            }
            io.sentry.android.replay.util.g gVar = this.f29013e;
            s sVar2 = this.f29015o;
            if (sVar2 != null) {
                i11 = sVar2.b();
            }
            if (!gVar.c(this, 1000 / i11)) {
                this.f29012d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f29018e;

        b(View view) {
            this.f29018e = view;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            View view;
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(v.this.f29004r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            } else {
                view = null;
            }
            if (!Intrinsics.areEqual(this.f29018e, view)) {
                io.sentry.android.replay.util.n.i(this.f29018e, this);
                return true;
            }
            if (io.sentry.android.replay.util.n.e(this.f29018e)) {
                io.sentry.android.replay.util.n.i(this.f29018e, this);
                if (this.f29018e.getWidth() != v.this.f29005s.x && this.f29018e.getHeight() != v.this.f29005s.y) {
                    v.this.f29005s.set(this.f29018e.getWidth(), this.f29018e.getHeight());
                    v.this.f29000i.i(this.f29018e.getWidth(), this.f29018e.getHeight());
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f29019d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view) {
            super(1);
            this.f29019d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f29019d));
        }
    }

    public v(k7 options, r rVar, t windowCallback, io.sentry.android.replay.util.g mainLooperHandler, ScheduledExecutorService replayExecutor) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(windowCallback, "windowCallback");
        Intrinsics.checkNotNullParameter(mainLooperHandler, "mainLooperHandler");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28998d = options;
        this.f28999e = rVar;
        this.f29000i = windowCallback;
        this.f29001o = mainLooperHandler;
        this.f29002p = replayExecutor;
        this.f29003q = new AtomicBoolean(false);
        this.f29004r = new ArrayList();
        this.f29005s = new Point();
        this.f29006t = new io.sentry.util.a();
        this.f29007u = new io.sentry.util.a();
        this.f29008v = new io.sentry.util.a();
    }

    @Override // io.sentry.android.replay.b
    public ScheduledExecutorService a() {
        return this.f29002p;
    }

    @Override // io.sentry.android.replay.g
    public void b() {
        a aVar = this.f29009w;
        if (aVar != null) {
            aVar.b();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        reset();
        this.f29001o.d(this.f29009w);
        a1 a10 = this.f29008v.a();
        try {
            Handler handler = this.f29011y;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            HandlerThread handlerThread = this.f29010x;
            if (handlerThread != null) {
                handlerThread.quitSafely();
            }
            ms.a.a(a10, null);
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
        a1 a13 = this.f29006t.a();
        try {
            if (z10) {
                if (x.a(root) == null) {
                    this.f28998d.getLogger().c(SentryLevel.WARNING, "Root view does not have a phone window, skipping.", new Object[0]);
                    ms.a.a(a13, null);
                    return;
                }
                this.f29004r.add(new WeakReference(root));
                a aVar = this.f29009w;
                if (aVar != null && (a12 = aVar.a()) != null) {
                    a12.a(root);
                }
                y(root);
            } else {
                a aVar2 = this.f29009w;
                if (aVar2 != null && (a11 = aVar2.a()) != null) {
                    a11.f(root);
                }
                CollectionsKt.J(this.f29004r, new c(root));
                WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f29004r);
                if (weakReference != null) {
                    view = (View) weakReference.get();
                } else {
                    view = null;
                }
                if (view != null && !Intrinsics.areEqual(root, view)) {
                    a aVar3 = this.f29009w;
                    if (aVar3 != null && (a10 = aVar3.a()) != null) {
                        a10.a(view);
                    }
                    y(view);
                }
            }
            Unit unit = Unit.f31988a;
            ms.a.a(a13, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ms.a.a(a13, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.android.replay.b
    public io.sentry.android.replay.util.g i() {
        return this.f29001o;
    }

    @Override // io.sentry.android.replay.g
    public void j() {
        a aVar = this.f29009w;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // io.sentry.android.replay.b
    public Handler m() {
        if (this.f29011y == null) {
            a1 a10 = this.f29008v.a();
            try {
                if (this.f29011y == null) {
                    this.f29010x = new HandlerThread("SentryReplayBackgroundProcessing");
                    HandlerThread handlerThread = this.f29010x;
                    if (handlerThread != null) {
                        handlerThread.start();
                    }
                    HandlerThread handlerThread2 = this.f29010x;
                    Intrinsics.checkNotNull(handlerThread2);
                    this.f29011y = new Handler(handlerThread2.getLooper());
                }
                Unit unit = Unit.f31988a;
                ms.a.a(a10, null);
            } finally {
            }
        }
        Handler handler = this.f29011y;
        Intrinsics.checkNotNull(handler);
        return handler;
    }

    @Override // io.sentry.android.replay.g
    public void o(s config) {
        a aVar;
        q a10;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f29003q.get()) {
            View view = null;
            if (this.f29009w == null) {
                a1 a11 = this.f29007u.a();
                try {
                    if (this.f29009w == null) {
                        this.f29009w = new a(this.f28998d, this.f29001o);
                    }
                    Unit unit = Unit.f31988a;
                    ms.a.a(a11, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } catch (Throwable th3) {
                        ms.a.a(a11, th2);
                        throw th3;
                    }
                }
            }
            a aVar2 = this.f29009w;
            if (aVar2 != null) {
                aVar2.d(config);
            }
            a aVar3 = this.f29009w;
            if (aVar3 != null) {
                aVar3.e(new q(config, this.f28998d, this, this.f28999e));
            }
            WeakReference weakReference = (WeakReference) CollectionsKt.B0(this.f29004r);
            if (weakReference != null) {
                view = (View) weakReference.get();
            }
            if (view != null && (aVar = this.f29009w) != null && (a10 = aVar.a()) != null) {
                a10.a(view);
            }
            this.f29001o.d(this.f29009w);
            if (!this.f29001o.c(this.f29009w, 100L)) {
                this.f28998d.getLogger().c(SentryLevel.WARNING, "Failed to post the capture runnable, main looper is shutting down.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.android.replay.g
    public void reset() {
        q a10;
        this.f29005s.set(0, 0);
        a1 a11 = this.f29006t.a();
        try {
            for (WeakReference weakReference : this.f29004r) {
                a aVar = this.f29009w;
                if (aVar != null && (a10 = aVar.a()) != null) {
                    a10.f((View) weakReference.get());
                }
            }
            this.f29004r.clear();
            Unit unit = Unit.f31988a;
            ms.a.a(a11, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.g
    public void start() {
        this.f29003q.getAndSet(true);
    }

    @Override // io.sentry.android.replay.g
    public void stop() {
        a aVar = this.f29009w;
        if (aVar != null) {
            aVar.f();
        }
        a1 a10 = this.f29007u.a();
        try {
            this.f29009w = null;
            Unit unit = Unit.f31988a;
            ms.a.a(a10, null);
            this.f29003q.set(false);
        } finally {
        }
    }

    public final void y(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (io.sentry.android.replay.util.n.e(root)) {
            if (root.getWidth() != this.f29005s.x) {
                int height = root.getHeight();
                Point point = this.f29005s;
                if (height != point.y) {
                    point.set(root.getWidth(), root.getHeight());
                    this.f29000i.i(root.getWidth(), root.getHeight());
                    return;
                }
                return;
            }
            return;
        }
        io.sentry.android.replay.util.n.b(root, new b(root));
    }
}
