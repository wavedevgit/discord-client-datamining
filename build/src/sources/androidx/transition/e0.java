package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.PropertyValuesHolder;
import android.animation.TimeInterpolator;
import android.view.View;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Animator a(View view, c0 c0Var, int i10, int i11, float f10, float f11, float f12, float f13, TimeInterpolator timeInterpolator, Transition transition) {
        float translationX = view.getTranslationX();
        float translationY = view.getTranslationY();
        int[] iArr = (int[]) c0Var.f5376b.getTag(l.f5439f);
        if (iArr != null) {
            f10 = (iArr[0] - i10) + translationX;
            f11 = (iArr[1] - i11) + translationY;
        }
        view.setTranslationX(f10);
        view.setTranslationY(f11);
        if (f10 == f12 && f11 == f13) {
            return null;
        }
        ObjectAnimator ofPropertyValuesHolder = ObjectAnimator.ofPropertyValuesHolder(view, PropertyValuesHolder.ofFloat(View.TRANSLATION_X, f10, f12), PropertyValuesHolder.ofFloat(View.TRANSLATION_Y, f11, f13));
        a aVar = new a(view, c0Var.f5376b, translationX, translationY);
        transition.c(aVar);
        ofPropertyValuesHolder.addListener(aVar);
        ofPropertyValuesHolder.setInterpolator(timeInterpolator);
        return ofPropertyValuesHolder;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends AnimatorListenerAdapter implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        private final View f5392a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5393b;

        /* renamed from: c  reason: collision with root package name */
        private int[] f5394c;

        /* renamed from: d  reason: collision with root package name */
        private float f5395d;

        /* renamed from: e  reason: collision with root package name */
        private float f5396e;

        /* renamed from: f  reason: collision with root package name */
        private final float f5397f;

        /* renamed from: g  reason: collision with root package name */
        private final float f5398g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f5399h;

        a(View view, View view2, float f10, float f11) {
            this.f5393b = view;
            this.f5392a = view2;
            this.f5397f = f10;
            this.f5398g = f11;
            int[] iArr = (int[]) view2.getTag(l.f5439f);
            this.f5394c = iArr;
            if (iArr != null) {
                view2.setTag(l.f5439f, null);
            }
        }

        private void a() {
            if (this.f5394c == null) {
                this.f5394c = new int[2];
            }
            this.f5393b.getLocationOnScreen(this.f5394c);
            this.f5392a.setTag(l.f5439f, this.f5394c);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5399h = true;
            this.f5393b.setTranslationX(this.f5397f);
            this.f5393b.setTranslationY(this.f5398g);
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (z10) {
                return;
            }
            this.f5393b.setTranslationX(this.f5397f);
            this.f5393b.setTranslationY(this.f5398g);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
            this.f5399h = true;
            this.f5393b.setTranslationX(this.f5397f);
            this.f5393b.setTranslationY(this.f5398g);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition, boolean z10) {
            if (this.f5399h) {
                return;
            }
            this.f5392a.setTag(l.f5439f, null);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
            a();
            this.f5395d = this.f5393b.getTranslationX();
            this.f5396e = this.f5393b.getTranslationY();
            this.f5393b.setTranslationX(this.f5397f);
            this.f5393b.setTranslationY(this.f5398g);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
            this.f5393b.setTranslationX(this.f5395d);
            this.f5393b.setTranslationY(this.f5396e);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            onTransitionEnd(transition, false);
        }
    }
}
