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
        int[] iArr = (int[]) c0Var.f5366b.getTag(l.f5429f);
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
        a aVar = new a(view, c0Var.f5366b, translationX, translationY);
        transition.c(aVar);
        ofPropertyValuesHolder.addListener(aVar);
        ofPropertyValuesHolder.setInterpolator(timeInterpolator);
        return ofPropertyValuesHolder;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5382a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5383b;

        /* renamed from: c  reason: collision with root package name */
        private int[] f5384c;

        /* renamed from: d  reason: collision with root package name */
        private float f5385d;

        /* renamed from: e  reason: collision with root package name */
        private float f5386e;

        /* renamed from: f  reason: collision with root package name */
        private final float f5387f;

        /* renamed from: g  reason: collision with root package name */
        private final float f5388g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f5389h;

        a(View view, View view2, float f10, float f11) {
            this.f5383b = view;
            this.f5382a = view2;
            this.f5387f = f10;
            this.f5388g = f11;
            int[] iArr = (int[]) view2.getTag(l.f5429f);
            this.f5384c = iArr;
            if (iArr != null) {
                view2.setTag(l.f5429f, null);
            }
        }

        private void a() {
            if (this.f5384c == null) {
                this.f5384c = new int[2];
            }
            this.f5383b.getLocationOnScreen(this.f5384c);
            this.f5382a.setTag(l.f5429f, this.f5384c);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5389h = true;
            this.f5383b.setTranslationX(this.f5387f);
            this.f5383b.setTranslationY(this.f5388g);
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (z10) {
                return;
            }
            this.f5383b.setTranslationX(this.f5387f);
            this.f5383b.setTranslationY(this.f5388g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            this.f5389h = true;
            this.f5383b.setTranslationX(this.f5387f);
            this.f5383b.setTranslationY(this.f5388g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition, boolean z10) {
            if (this.f5389h) {
                return;
            }
            this.f5382a.setTag(l.f5429f, null);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            a();
            this.f5385d = this.f5383b.getTranslationX();
            this.f5386e = this.f5383b.getTranslationY();
            this.f5383b.setTranslationX(this.f5387f);
            this.f5383b.setTranslationY(this.f5388g);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5383b.setTranslationX(this.f5385d);
            this.f5383b.setTranslationY(this.f5386e);
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
