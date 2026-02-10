package androidx.core.view;

import android.view.View;
import android.view.ViewTreeObserver;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements ViewTreeObserver.OnPreDrawListener, View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f3591d;

    /* renamed from: e  reason: collision with root package name */
    private ViewTreeObserver f3592e;

    /* renamed from: i  reason: collision with root package name */
    private final Runnable f3593i;

    private z(View view, Runnable runnable) {
        this.f3591d = view;
        this.f3592e = view.getViewTreeObserver();
        this.f3593i = runnable;
    }

    public static z a(View view, Runnable runnable) {
        if (view != null) {
            if (runnable != null) {
                z zVar = new z(view, runnable);
                view.getViewTreeObserver().addOnPreDrawListener(zVar);
                view.addOnAttachStateChangeListener(zVar);
                return zVar;
            }
            throw new NullPointerException("runnable == null");
        }
        throw new NullPointerException("view == null");
    }

    public void b() {
        if (this.f3592e.isAlive()) {
            this.f3592e.removeOnPreDrawListener(this);
        } else {
            this.f3591d.getViewTreeObserver().removeOnPreDrawListener(this);
        }
        this.f3591d.removeOnAttachStateChangeListener(this);
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        b();
        this.f3593i.run();
        return true;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        this.f3592e = view.getViewTreeObserver();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        b();
    }
}
