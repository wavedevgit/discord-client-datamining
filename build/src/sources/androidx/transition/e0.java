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
        int[] iArr = (int[]) c0Var.f5259b.getTag(l.f5322f);
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
        a aVar = new a(view, c0Var.f5259b, translationX, translationY);
        transition.c(aVar);
        ofPropertyValuesHolder.addListener(aVar);
        ofPropertyValuesHolder.setInterpolator(timeInterpolator);
        return ofPropertyValuesHolder;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5275a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5276b;

        /* renamed from: c  reason: collision with root package name */
        private int[] f5277c;

        /* renamed from: d  reason: collision with root package name */
        private float f5278d;

        /* renamed from: e  reason: collision with root package name */
        private float f5279e;

        /* renamed from: f  reason: collision with root package name */
        private final float f5280f;

        /* renamed from: g  reason: collision with root package name */
        private final float f5281g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f5282h;

        a(View view, View view2, float f10, float f11) {
            this.f5276b = view;
            this.f5275a = view2;
            this.f5280f = f10;
            this.f5281g = f11;
            int[] iArr = (int[]) view2.getTag(l.f5322f);
            this.f5277c = iArr;
            if (iArr != null) {
                view2.setTag(l.f5322f, null);
            }
        }

        private void a() {
            if (this.f5277c == null) {
                this.f5277c = new int[2];
            }
            this.f5276b.getLocationOnScreen(this.f5277c);
            this.f5275a.setTag(l.f5322f, this.f5277c);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5282h = true;
            this.f5276b.setTranslationX(this.f5280f);
            this.f5276b.setTranslationY(this.f5281g);
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (z10) {
                return;
            }
            this.f5276b.setTranslationX(this.f5280f);
            this.f5276b.setTranslationY(this.f5281g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            this.f5282h = true;
            this.f5276b.setTranslationX(this.f5280f);
            this.f5276b.setTranslationY(this.f5281g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition, boolean z10) {
            if (this.f5282h) {
                return;
            }
            this.f5275a.setTag(l.f5322f, null);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            a();
            this.f5278d = this.f5276b.getTranslationX();
            this.f5279e = this.f5276b.getTranslationY();
            this.f5276b.setTranslationX(this.f5280f);
            this.f5276b.setTranslationY(this.f5281g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5276b.setTranslationX(this.f5278d);
            this.f5276b.setTranslationY(this.f5279e);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            onTransitionEnd(transition, false);
        }
    }
}
