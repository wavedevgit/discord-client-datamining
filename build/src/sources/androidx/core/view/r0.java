package androidx.core.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.view.View;
import android.view.animation.Interpolator;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r0 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f3849a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ s0 f3850a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f3851b;

        a(s0 s0Var, View view) {
            this.f3850a = s0Var;
            this.f3851b = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f3850a.a(this.f3851b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f3850a.b(this.f3851b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            this.f3850a.c(this.f3851b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(View view) {
        this.f3849a = new WeakReference(view);
    }

    private void h(View view, s0 s0Var) {
        if (s0Var != null) {
            view.animate().setListener(new a(s0Var, view));
        } else {
            view.animate().setListener(null);
        }
    }

    public r0 b(float f10) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().alpha(f10);
        }
        return this;
    }

    public void c() {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().cancel();
        }
    }

    public long d() {
        View view = (View) this.f3849a.get();
        if (view != null) {
            return view.animate().getDuration();
        }
        return 0L;
    }

    public r0 e(long j10) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().setDuration(j10);
        }
        return this;
    }

    public r0 f(Interpolator interpolator) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().setInterpolator(interpolator);
        }
        return this;
    }

    public r0 g(s0 s0Var) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            h(view, s0Var);
        }
        return this;
    }

    public r0 i(long j10) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().setStartDelay(j10);
        }
        return this;
    }

    public r0 j(final u0 u0Var) {
        ValueAnimator.AnimatorUpdateListener animatorUpdateListener;
        final View view = (View) this.f3849a.get();
        if (view != null) {
            if (u0Var != null) {
                animatorUpdateListener = new ValueAnimator.AnimatorUpdateListener() { // from class: androidx.core.view.q0
                    @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                    public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                        u0.this.a(view);
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
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().start();
        }
    }

    public r0 l(float f10) {
        View view = (View) this.f3849a.get();
        if (view != null) {
            view.animate().translationY(f10);
        }
        return this;
    }
}
