package androidx.core.view;

import android.view.View;
import android.view.ViewTreeObserver;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y implements ViewTreeObserver.OnPreDrawListener, View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f3886d;

    /* renamed from: e  reason: collision with root package name */
    private ViewTreeObserver f3887e;

    /* renamed from: i  reason: collision with root package name */
    private final Runnable f3888i;

    private y(View view, Runnable runnable) {
        this.f3886d = view;
        this.f3887e = view.getViewTreeObserver();
        this.f3888i = runnable;
    }

    public static y a(View view, Runnable runnable) {
        if (view != null) {
            if (runnable != null) {
                y yVar = new y(view, runnable);
                view.getViewTreeObserver().addOnPreDrawListener(yVar);
                view.addOnAttachStateChangeListener(yVar);
                return yVar;
            }
            throw new NullPointerException("runnable == null");
        }
        throw new NullPointerException("view == null");
    }

    public void b() {
        if (this.f3887e.isAlive()) {
            this.f3887e.removeOnPreDrawListener(this);
        } else {
            this.f3886d.getViewTreeObserver().removeOnPreDrawListener(this);
        }
        this.f3886d.removeOnAttachStateChangeListener(this);
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        b();
        this.f3888i.run();
        return true;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        this.f3887e = view.getViewTreeObserver();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        b();
    }
}
