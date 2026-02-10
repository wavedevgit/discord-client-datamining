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
    public static class a extends AnimatorListenerAdapter implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        private final View f5390a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f5391b = false;

        a(View view) {
            this.f5390a = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            h0.e(this.f5390a, 1.0f);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            if (this.f5390a.hasOverlappingRendering() && this.f5390a.getLayerType() == 0) {
                this.f5391b = true;
                this.f5390a.setLayerType(2, null);
            }
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
            float f10;
            if (this.f5390a.getVisibility() == 0) {
                f10 = h0.b(this.f5390a);
            } else {
                f10 = 0.0f;
            }
            this.f5390a.setTag(l.f5438e, Float.valueOf(f10));
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
            this.f5390a.setTag(l.f5438e, null);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (this.f5391b) {
                this.f5390a.setLayerType(0, null);
            }
            if (z10) {
                return;
            }
            h0.e(this.f5390a, 1.0f);
            h0.a(this.f5390a);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionStart(Transition transition, boolean z10) {
        }
    }

    public e(int i10) {
        C0(i10);
    }

    private Animator D0(View view, float f10, float f11) {
        if (f10 == f11) {
            return null;
        }
        h0.e(view, f10);
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(view, h0.f5425b, f11);
        a aVar = new a(view);
        ofFloat.addListener(aVar);
        H().c(aVar);
        return ofFloat;
    }

    private static float E0(c0 c0Var, float f10) {
        Float f11;
        if (c0Var != null && (f11 = (Float) c0Var.f5375a.get("android:fade:transitionAlpha")) != null) {
            return f11.floatValue();
        }
        return f10;
    }

    @Override // androidx.transition.n0
    public Animator A0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        h0.c(view);
        Animator D0 = D0(view, E0(c0Var, 1.0f), 0.0f);
        if (D0 == null) {
            h0.e(view, E0(c0Var2, 1.0f));
        }
        return D0;
    }

    @Override // androidx.transition.Transition
    public boolean T() {
        return true;
    }

    @Override // androidx.transition.n0, androidx.transition.Transition
    public void l(c0 c0Var) {
        super.l(c0Var);
        Float f10 = (Float) c0Var.f5376b.getTag(l.f5438e);
        if (f10 == null) {
            if (c0Var.f5376b.getVisibility() == 0) {
                f10 = Float.valueOf(h0.b(c0Var.f5376b));
            } else {
                f10 = Float.valueOf(0.0f);
            }
        }
        c0Var.f5375a.put("android:fade:transitionAlpha", f10);
    }

    @Override // androidx.transition.n0
    public Animator y0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        h0.c(view);
        return D0(view, E0(c0Var, 0.0f), 1.0f);
    }

    public e() {
    }
}
