package io.sentry.android.core.internal.util;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.Window;
import io.sentry.android.core.x0;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r implements ViewTreeObserver.OnDrawListener {

    /* renamed from: d  reason: collision with root package name */
    private final Handler f29062d = new Handler(Looper.getMainLooper());

    /* renamed from: e  reason: collision with root package name */
    private final AtomicReference f29063e;

    /* renamed from: i  reason: collision with root package name */
    private final Runnable f29064i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements View.OnAttachStateChangeListener {
        a() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            view.getViewTreeObserver().addOnDrawListener(r.this);
            view.removeOnAttachStateChangeListener(this);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            view.removeOnAttachStateChangeListener(this);
        }
    }

    private r(View view, Runnable runnable) {
        this.f29063e = new AtomicReference(view);
        this.f29064i = runnable;
    }

    public static /* synthetic */ void a(r rVar, View view) {
        rVar.getClass();
        view.getViewTreeObserver().removeOnDrawListener(rVar);
    }

    public static /* synthetic */ void b(Window window, Window.Callback callback, Runnable runnable, x0 x0Var) {
        View peekDecorView = window.peekDecorView();
        if (peekDecorView != null) {
            window.setCallback(callback);
            e(peekDecorView, runnable, x0Var);
        }
    }

    private static boolean c(View view) {
        if (view.getViewTreeObserver().isAlive() && view.isAttachedToWindow()) {
            return true;
        }
        return false;
    }

    public static void d(Activity activity, final Runnable runnable, final x0 x0Var) {
        Window.Callback bVar;
        final Window window = activity.getWindow();
        if (window != null) {
            View peekDecorView = window.peekDecorView();
            if (peekDecorView != null) {
                e(peekDecorView, runnable, x0Var);
                return;
            }
            final Window.Callback callback = window.getCallback();
            if (callback != null) {
                bVar = callback;
            } else {
                bVar = new io.sentry.android.core.internal.gestures.b();
            }
            window.setCallback(new io.sentry.android.core.performance.j(bVar, new Runnable() { // from class: io.sentry.android.core.internal.util.q
                @Override // java.lang.Runnable
                public final void run() {
                    r.b(window, callback, runnable, x0Var);
                }
            }));
        }
    }

    public static void e(View view, Runnable runnable, x0 x0Var) {
        r rVar = new r(view, runnable);
        if (x0Var.d() < 26 && !c(view)) {
            view.addOnAttachStateChangeListener(new a());
        } else {
            view.getViewTreeObserver().addOnDrawListener(rVar);
        }
    }

    @Override // android.view.ViewTreeObserver.OnDrawListener
    public void onDraw() {
        final View view = (View) this.f29063e.getAndSet(null);
        if (view == null) {
            return;
        }
        view.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() { // from class: io.sentry.android.core.internal.util.p
            @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
            public final void onGlobalLayout() {
                r.a(r.this, view);
            }
        });
        this.f29062d.postAtFrontOfQueue(this.f29064i);
    }
}
