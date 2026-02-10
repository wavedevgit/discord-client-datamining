package androidx.core.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.view.View;
import android.view.animation.Interpolator;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s0 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f3554a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ t0 f3555a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f3556b;

        a(t0 t0Var, View view) {
            this.f3555a = t0Var;
            this.f3556b = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f3555a.a(this.f3556b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f3555a.b(this.f3556b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            this.f3555a.c(this.f3556b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(View view) {
        this.f3554a = new WeakReference(view);
    }

    private void h(View view, t0 t0Var) {
        if (t0Var != null) {
            view.animate().setListener(new a(t0Var, view));
        } else {
            view.animate().setListener(null);
        }
    }

    public s0 b(float f10) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().alpha(f10);
        }
        return this;
    }

    public void c() {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().cancel();
        }
    }

    public long d() {
        View view = (View) this.f3554a.get();
        if (view != null) {
            return view.animate().getDuration();
        }
        return 0L;
    }

    public s0 e(long j10) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().setDuration(j10);
        }
        return this;
    }

    public s0 f(Interpolator interpolator) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().setInterpolator(interpolator);
        }
        return this;
    }

    public s0 g(t0 t0Var) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            h(view, t0Var);
        }
        return this;
    }

    public s0 i(long j10) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().setStartDelay(j10);
        }
        return this;
    }

    public s0 j(final v0 v0Var) {
        ValueAnimator.AnimatorUpdateListener animatorUpdateListener;
        final View view = (View) this.f3554a.get();
        if (view != null) {
            if (v0Var != null) {
                animatorUpdateListener = new ValueAnimator.AnimatorUpdateListener() { // from class: androidx.core.view.r0
                    @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                    public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                        v0.this.a(view);
                    }
                };
            } else {
                animatorUpdateListener = null;
            }
            view.animate().setUpdateListener(animatorUpdateListener);
        }
        return this;
    }

    public void k() {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().start();
        }
    }

    public s0 l(float f10) {
        View view = (View) this.f3554a.get();
        if (view != null) {
            view.animate().translationY(f10);
        }
        return this;
    }
}
