package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends Transition {

    /* renamed from: b0  reason: collision with root package name */
    private static final String[] f5222b0 = {"android:clipBounds:clip"};

    /* renamed from: c0  reason: collision with root package name */
    static final Rect f5223c0 = new Rect();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f5224a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f5225b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5226c;

        a(View view, Rect rect, Rect rect2) {
            this.f5226c = view;
            this.f5224a = rect;
            this.f5225b = rect2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            Rect clipBounds = this.f5226c.getClipBounds();
            if (clipBounds == null) {
                clipBounds = c.f5223c0;
            }
            this.f5226c.setTag(l.f5287b, clipBounds);
            this.f5226c.setClipBounds(this.f5225b);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5226c.setClipBounds((Rect) this.f5226c.getTag(l.f5287b));
            this.f5226c.setTag(l.f5287b, null);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (!z10) {
                this.f5226c.setClipBounds(this.f5225b);
            } else {
                this.f5226c.setClipBounds(this.f5224a);
            }
        }
    }

    private void t0(c0 c0Var, boolean z10) {
        Rect rect;
        View view = c0Var.f5228b;
        if (view.getVisibility() != 8) {
            Rect rect2 = null;
            if (z10) {
                rect = (Rect) view.getTag(l.f5287b);
            } else {
                rect = null;
            }
            if (rect == null) {
                rect = view.getClipBounds();
            }
            if (rect != f5223c0) {
                rect2 = rect;
            }
            c0Var.f5227a.put("android:clipBounds:clip", rect2);
            if (rect2 == null) {
                c0Var.f5227a.put("android:clipBounds:bounds", new Rect(0, 0, view.getWidth(), view.getHeight()));
            }
        }
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5222b0;
    }

    @Override // androidx.transition.Transition
    public boolean Q() {
        return true;
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        t0(c0Var, false);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        t0(c0Var, true);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        Rect rect;
        Rect rect2;
        if (c0Var == null || c0Var2 == null || !c0Var.f5227a.containsKey("android:clipBounds:clip") || !c0Var2.f5227a.containsKey("android:clipBounds:clip")) {
            return null;
        }
        Rect rect3 = (Rect) c0Var.f5227a.get("android:clipBounds:clip");
        Rect rect4 = (Rect) c0Var2.f5227a.get("android:clipBounds:clip");
        if (rect3 == null && rect4 == null) {
            return null;
        }
        if (rect3 == null) {
            rect = (Rect) c0Var.f5227a.get("android:clipBounds:bounds");
        } else {
            rect = rect3;
        }
        if (rect4 == null) {
            rect2 = (Rect) c0Var2.f5227a.get("android:clipBounds:bounds");
        } else {
            rect2 = rect4;
        }
        if (rect.equals(rect2)) {
            return null;
        }
        c0Var2.f5228b.setClipBounds(rect3);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(c0Var2.f5228b, h0.f5278c, new m(new Rect()), rect, rect2);
        a aVar = new a(c0Var2.f5228b, rect3, rect4);
        ofObject.addListener(aVar);
        c(aVar);
        return ofObject;
    }
}
