package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends n0 {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5354a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f5355b = false;

        a(View view) {
            this.f5354a = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            h0.e(this.f5354a, 1.0f);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            if (this.f5354a.hasOverlappingRendering() && this.f5354a.getLayerType() == 0) {
                this.f5355b = true;
                this.f5354a.setLayerType(2, null);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            float f10;
            if (this.f5354a.getVisibility() == 0) {
                f10 = h0.b(this.f5354a);
            } else {
                f10 = 0.0f;
            }
            this.f5354a.setTag(l.f5402e, Float.valueOf(f10));
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5354a.setTag(l.f5402e, null);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (this.f5355b) {
                this.f5354a.setLayerType(0, null);
            }
            if (z10) {
                return;
            }
            h0.e(this.f5354a, 1.0f);
            h0.a(this.f5354a);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition, boolean z10) {
        }
    }

    public e(int i10) {
        A0(i10);
    }

    private Animator B0(View view, float f10, float f11) {
        if (f10 == f11) {
            return null;
        }
        h0.e(view, f10);
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(view, h0.f5389b, f11);
        a aVar = new a(view);
        ofFloat.addListener(aVar);
        E().c(aVar);
        return ofFloat;
    }

    private static float E0(c0 c0Var, float f10) {
        Float f11;
        if (c0Var != null && (f11 = (Float) c0Var.f5339a.get("android:fade:transitionAlpha")) != null) {
            return f11.floatValue();
        }
        return f10;
    }

    @Override // androidx.transition.Transition
    public boolean Q() {
        return true;
    }

    @Override // androidx.transition.n0, androidx.transition.Transition
    public void l(c0 c0Var) {
        super.l(c0Var);
        Float f10 = (Float) c0Var.f5340b.getTag(l.f5402e);
        if (f10 == null) {
            if (c0Var.f5340b.getVisibility() == 0) {
                f10 = Float.valueOf(h0.b(c0Var.f5340b));
            } else {
                f10 = Float.valueOf(0.0f);
            }
        }
        c0Var.f5339a.put("android:fade:transitionAlpha", f10);
    }

    @Override // androidx.transition.n0
    public Animator w0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        h0.c(view);
        return B0(view, E0(c0Var, 0.0f), 1.0f);
    }

    @Override // androidx.transition.n0
    public Animator y0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        h0.c(view);
        Animator B0 = B0(view, E0(c0Var, 1.0f), 0.0f);
        if (B0 == null) {
            h0.e(view, E0(c0Var2, 1.0f));
        }
        return B0;
    }

    public e() {
    }
}
