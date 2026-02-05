package io.sentry.android.replay;

import android.view.View;
import android.view.ViewOverlay;
import android.view.ViewTreeObserver;
import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.n4;
import java.lang.ref.WeakReference;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements ViewTreeObserver.OnDrawListener {

    /* renamed from: d  reason: collision with root package name */
    private final s f28568d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f28569e;

    /* renamed from: i  reason: collision with root package name */
    private final b f28570i;

    /* renamed from: o  reason: collision with root package name */
    private WeakReference f28571o;

    /* renamed from: p  reason: collision with root package name */
    private final AtomicBoolean f28572p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.android.replay.util.c f28573q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f28574r;

    /* renamed from: s  reason: collision with root package name */
    private final io.sentry.android.replay.screenshot.k f28575s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f28576a;

        static {
            int[] iArr = new int[n4.values().length];
            try {
                iArr[n4.CANVAS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[n4.PIXEL_COPY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f28576a = iArr;
        }
    }

    public q(s config, k7 options, b executorProvider, r rVar) {
        io.sentry.android.replay.screenshot.k eVar;
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(executorProvider, "executorProvider");
        this.f28568d = config;
        this.f28569e = options;
        this.f28570i = executorProvider;
        this.f28572p = new AtomicBoolean(true);
        io.sentry.android.replay.util.c cVar = new io.sentry.android.replay.util.c();
        this.f28573q = cVar;
        this.f28574r = new AtomicBoolean(false);
        int i10 = a.f28576a[options.getSessionReplay().n().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                eVar = new io.sentry.android.replay.screenshot.j(executorProvider, rVar, options, config, cVar);
            } else {
                throw new or.p();
            }
        } else {
            eVar = new io.sentry.android.replay.screenshot.e(executorProvider, rVar, options, config);
        }
        this.f28575s = eVar;
    }

    public final void a(View root) {
        View view;
        Intrinsics.checkNotNullParameter(root, "root");
        WeakReference weakReference = this.f28571o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
        WeakReference weakReference2 = this.f28571o;
        if (weakReference2 != null) {
            weakReference2.clear();
        }
        this.f28571o = new WeakReference(root);
        io.sentry.android.replay.util.n.a(root, this);
        this.f28574r.set(true);
        this.f28575s.onContentChanged();
    }

    public final void b() {
        View view;
        if (this.f28569e.getSessionReplay().u()) {
            this.f28569e.getLogger().c(SentryLevel.DEBUG, "Capturing screenshot, isCapturing: %s", Boolean.valueOf(this.f28572p.get()));
        }
        if (!this.f28572p.get()) {
            if (this.f28569e.getSessionReplay().u()) {
                this.f28569e.getLogger().c(SentryLevel.DEBUG, "ScreenshotRecorder is paused, not capturing screenshot", new Object[0]);
                return;
            }
            return;
        }
        if (this.f28569e.getSessionReplay().u()) {
            this.f28569e.getLogger().c(SentryLevel.DEBUG, "Capturing screenshot, contentChanged: %s, lastCaptureSuccessful: %s", Boolean.valueOf(this.f28574r.get()), Boolean.valueOf(this.f28575s.a()));
        }
        if (!this.f28574r.get()) {
            this.f28575s.b();
            return;
        }
        WeakReference weakReference = this.f28571o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && view.getWidth() > 0 && view.getHeight() > 0 && view.isShown()) {
            if (x.a(view) == null) {
                this.f28569e.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not capturing screenshot", new Object[0]);
                return;
            }
            try {
                this.f28574r.set(false);
                this.f28575s.c(view);
                return;
            } catch (Throwable th2) {
                this.f28569e.getLogger().b(SentryLevel.WARNING, "Failed to capture replay recording", th2);
                return;
            }
        }
        this.f28569e.getLogger().c(SentryLevel.DEBUG, "Root view is invalid, not capturing screenshot", new Object[0]);
    }

    public final void c() {
        View view;
        this.f28572p.set(false);
        WeakReference weakReference = this.f28571o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
        WeakReference weakReference2 = this.f28571o;
        if (weakReference2 != null) {
            weakReference2.clear();
        }
        this.f28575s.close();
    }

    public final void d() {
        View view;
        this.f28572p.set(false);
        WeakReference weakReference = this.f28571o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
    }

    public final void e() {
        View view;
        WeakReference weakReference = this.f28571o;
        if (weakReference != null && (view = (View) weakReference.get()) != null) {
            io.sentry.android.replay.util.n.a(view, this);
        }
        this.f28572p.set(true);
    }

    public final void f(View view) {
        ViewOverlay overlay;
        if (this.f28569e.getReplayController().F() && view != null && (overlay = view.getOverlay()) != null) {
            overlay.remove(this.f28573q);
        }
        if (view != null) {
            io.sentry.android.replay.util.n.h(view, this);
        }
    }

    @Override // android.view.ViewTreeObserver.OnDrawListener
    public void onDraw() {
        View view;
        if (!this.f28572p.get()) {
            return;
        }
        WeakReference weakReference = this.f28571o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && view.getWidth() > 0 && view.getHeight() > 0 && view.isShown()) {
            this.f28574r.set(true);
            this.f28575s.onContentChanged();
            return;
        }
        this.f28569e.getLogger().c(SentryLevel.DEBUG, "Root view is invalid, not capturing screenshot", new Object[0]);
    }
}
