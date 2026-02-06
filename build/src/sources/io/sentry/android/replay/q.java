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
    private final s f27712d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f27713e;

    /* renamed from: i  reason: collision with root package name */
    private final b f27714i;

    /* renamed from: o  reason: collision with root package name */
    private WeakReference f27715o;

    /* renamed from: p  reason: collision with root package name */
    private final AtomicBoolean f27716p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.android.replay.util.c f27717q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicBoolean f27718r;

    /* renamed from: s  reason: collision with root package name */
    private final io.sentry.android.replay.screenshot.k f27719s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27720a;

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
            f27720a = iArr;
        }
    }

    public q(s config, k7 options, b executorProvider, r rVar) {
        io.sentry.android.replay.screenshot.k eVar;
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(executorProvider, "executorProvider");
        this.f27712d = config;
        this.f27713e = options;
        this.f27714i = executorProvider;
        this.f27716p = new AtomicBoolean(true);
        io.sentry.android.replay.util.c cVar = new io.sentry.android.replay.util.c();
        this.f27717q = cVar;
        this.f27718r = new AtomicBoolean(false);
        int i10 = a.f27720a[options.getSessionReplay().n().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                eVar = new io.sentry.android.replay.screenshot.j(executorProvider, rVar, options, config, cVar);
            } else {
                throw new qr.p();
            }
        } else {
            eVar = new io.sentry.android.replay.screenshot.e(executorProvider, rVar, options, config);
        }
        this.f27719s = eVar;
    }

    public final void a(View root) {
        View view;
        Intrinsics.checkNotNullParameter(root, "root");
        WeakReference weakReference = this.f27715o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
        WeakReference weakReference2 = this.f27715o;
        if (weakReference2 != null) {
            weakReference2.clear();
        }
        this.f27715o = new WeakReference(root);
        io.sentry.android.replay.util.n.a(root, this);
        this.f27718r.set(true);
        this.f27719s.onContentChanged();
    }

    public final void b() {
        View view;
        if (this.f27713e.getSessionReplay().u()) {
            this.f27713e.getLogger().c(SentryLevel.DEBUG, "Capturing screenshot, isCapturing: %s", Boolean.valueOf(this.f27716p.get()));
        }
        if (!this.f27716p.get()) {
            if (this.f27713e.getSessionReplay().u()) {
                this.f27713e.getLogger().c(SentryLevel.DEBUG, "ScreenshotRecorder is paused, not capturing screenshot", new Object[0]);
                return;
            }
            return;
        }
        if (this.f27713e.getSessionReplay().u()) {
            this.f27713e.getLogger().c(SentryLevel.DEBUG, "Capturing screenshot, contentChanged: %s, lastCaptureSuccessful: %s", Boolean.valueOf(this.f27718r.get()), Boolean.valueOf(this.f27719s.a()));
        }
        if (!this.f27718r.get()) {
            this.f27719s.b();
            return;
        }
        WeakReference weakReference = this.f27715o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && view.getWidth() > 0 && view.getHeight() > 0 && view.isShown()) {
            if (x.a(view) == null) {
                this.f27713e.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not capturing screenshot", new Object[0]);
                return;
            }
            try {
                this.f27718r.set(false);
                this.f27719s.c(view);
                return;
            } catch (Throwable th2) {
                this.f27713e.getLogger().b(SentryLevel.WARNING, "Failed to capture replay recording", th2);
                return;
            }
        }
        this.f27713e.getLogger().c(SentryLevel.DEBUG, "Root view is invalid, not capturing screenshot", new Object[0]);
    }

    public final void c() {
        View view;
        this.f27716p.set(false);
        WeakReference weakReference = this.f27715o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
        WeakReference weakReference2 = this.f27715o;
        if (weakReference2 != null) {
            weakReference2.clear();
        }
        this.f27719s.close();
    }

    public final void d() {
        View view;
        this.f27716p.set(false);
        WeakReference weakReference = this.f27715o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        f(view);
    }

    public final void e() {
        View view;
        WeakReference weakReference = this.f27715o;
        if (weakReference != null && (view = (View) weakReference.get()) != null) {
            io.sentry.android.replay.util.n.a(view, this);
        }
        this.f27716p.set(true);
    }

    public final void f(View view) {
        ViewOverlay overlay;
        if (this.f27713e.getReplayController().y() && view != null && (overlay = view.getOverlay()) != null) {
            overlay.remove(this.f27717q);
        }
        if (view != null) {
            io.sentry.android.replay.util.n.h(view, this);
        }
    }

    @Override // android.view.ViewTreeObserver.OnDrawListener
    public void onDraw() {
        View view;
        if (!this.f27716p.get()) {
            return;
        }
        WeakReference weakReference = this.f27715o;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && view.getWidth() > 0 && view.getHeight() > 0 && view.isShown()) {
            this.f27718r.set(true);
            this.f27719s.onContentChanged();
            return;
        }
        this.f27713e.getLogger().c(SentryLevel.DEBUG, "Root view is invalid, not capturing screenshot", new Object[0]);
    }
}
