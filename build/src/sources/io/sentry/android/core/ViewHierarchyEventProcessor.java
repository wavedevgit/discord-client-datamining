package io.sentry.android.core;

import android.app.Activity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import com.facebook.react.uimanager.ViewProps;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ViewHierarchyEventProcessor implements io.sentry.b0 {

    /* renamed from: d  reason: collision with root package name */
    private final SentryAndroidOptions f27045d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.n f27046e = new io.sentry.android.core.internal.util.n(io.sentry.android.core.internal.util.f.b(), 2000, 3);

    public ViewHierarchyEventProcessor(SentryAndroidOptions sentryAndroidOptions) {
        this.f27045d = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        if (sentryAndroidOptions.isAttachViewHierarchy()) {
            io.sentry.util.p.a("ViewHierarchy");
        }
    }

    public static /* synthetic */ void b(AtomicReference atomicReference, View view, List list, CountDownLatch countDownLatch, ILogger iLogger) {
        try {
            atomicReference.set(f(view, list));
            countDownLatch.countDown();
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Failed to process view hierarchy.", th2);
        }
    }

    private static void c(View view, io.sentry.protocol.j0 j0Var, List list) {
        if (view instanceof ViewGroup) {
            Iterator it = list.iterator();
            if (!it.hasNext()) {
                ViewGroup viewGroup = (ViewGroup) view;
                int childCount = viewGroup.getChildCount();
                if (childCount == 0) {
                    return;
                }
                ArrayList arrayList = new ArrayList(childCount);
                for (int i10 = 0; i10 < childCount; i10++) {
                    View childAt = viewGroup.getChildAt(i10);
                    if (childAt != null) {
                        io.sentry.protocol.j0 h10 = h(childAt);
                        arrayList.add(h10);
                        c(childAt, h10, list);
                    }
                }
                j0Var.m(arrayList);
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public static io.sentry.protocol.i0 d(Activity activity, ILogger iLogger) {
        return e(activity, new ArrayList(0), io.sentry.android.core.internal.util.j.e(), iLogger);
    }

    public static io.sentry.protocol.i0 e(Activity activity, final List list, io.sentry.util.thread.a aVar, ILogger iLogger) {
        final ILogger iLogger2;
        Throwable th2;
        if (activity == null) {
            iLogger.c(SentryLevel.INFO, "Missing activity for view hierarchy snapshot.", new Object[0]);
            return null;
        }
        Window window = activity.getWindow();
        if (window == null) {
            iLogger.c(SentryLevel.INFO, "Missing window for view hierarchy snapshot.", new Object[0]);
            return null;
        }
        final View peekDecorView = window.peekDecorView();
        if (peekDecorView == null) {
            iLogger.c(SentryLevel.INFO, "Missing decor view for view hierarchy snapshot.", new Object[0]);
            return null;
        }
        try {
        } catch (Throwable th3) {
            th = th3;
            iLogger2 = iLogger;
        }
        if (aVar.a()) {
            try {
                return f(peekDecorView, list);
            } catch (Throwable th4) {
                th2 = th4;
                iLogger2 = iLogger;
                iLogger2.b(SentryLevel.ERROR, "Failed to process view hierarchy.", th2);
                return null;
            }
        }
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        final AtomicReference atomicReference = new AtomicReference(null);
        iLogger2 = iLogger;
        try {
            activity.runOnUiThread(new Runnable() { // from class: io.sentry.android.core.s2
                @Override // java.lang.Runnable
                public final void run() {
                    ViewHierarchyEventProcessor.b(atomicReference, peekDecorView, list, countDownLatch, iLogger2);
                }
            });
            if (countDownLatch.await(1000L, TimeUnit.MILLISECONDS)) {
                return (io.sentry.protocol.i0) atomicReference.get();
            }
        } catch (Throwable th5) {
            th = th5;
            th2 = th;
            iLogger2.b(SentryLevel.ERROR, "Failed to process view hierarchy.", th2);
            return null;
        }
        return null;
    }

    public static io.sentry.protocol.i0 f(View view, List list) {
        ArrayList arrayList = new ArrayList(1);
        io.sentry.protocol.i0 i0Var = new io.sentry.protocol.i0("android_view_system", arrayList);
        io.sentry.protocol.j0 h10 = h(view);
        arrayList.add(h10);
        c(view, h10, list);
        return i0Var;
    }

    private static io.sentry.protocol.j0 h(View view) {
        io.sentry.protocol.j0 j0Var = new io.sentry.protocol.j0();
        j0Var.p(io.sentry.android.core.internal.util.k.a(view));
        try {
            j0Var.o(io.sentry.android.core.internal.gestures.i.b(view));
        } catch (Throwable unused) {
        }
        j0Var.t(Double.valueOf(view.getX()));
        j0Var.u(Double.valueOf(view.getY()));
        j0Var.s(Double.valueOf(view.getWidth()));
        j0Var.n(Double.valueOf(view.getHeight()));
        j0Var.l(Double.valueOf(view.getAlpha()));
        int visibility = view.getVisibility();
        if (visibility != 0) {
            if (visibility != 4) {
                if (visibility == 8) {
                    j0Var.r("gone");
                }
            } else {
                j0Var.r("invisible");
            }
        } else {
            j0Var.r(ViewProps.VISIBLE);
        }
        return j0Var;
    }

    @Override // io.sentry.b0
    public SentryEvent g(SentryEvent sentryEvent, Hint hint) {
        io.sentry.protocol.i0 e10;
        if (sentryEvent.B0()) {
            if (!this.f27045d.isAttachViewHierarchy()) {
                this.f27045d.getLogger().c(SentryLevel.DEBUG, "attachViewHierarchy is disabled.", new Object[0]);
                return sentryEvent;
            } else if (!io.sentry.util.n.i(hint)) {
                boolean a10 = this.f27046e.a();
                this.f27045d.getBeforeViewHierarchyCaptureCallback();
                if (!a10 && (e10 = e(f1.c().b(), this.f27045d.getViewHierarchyExporters(), this.f27045d.getThreadChecker(), this.f27045d.getLogger())) != null) {
                    hint.o(io.sentry.b.c(e10));
                }
            }
        }
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 k(io.sentry.protocol.d0 d0Var, Hint hint) {
        return d0Var;
    }
}
