package com.google.android.material.behavior;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import android.view.accessibility.AccessibilityManager;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.behavior.HideBottomViewOnScrollBehavior;
import java.util.Iterator;
import java.util.LinkedHashSet;
import oh.g;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HideBottomViewOnScrollBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: x  reason: collision with root package name */
    private static final int f15234x = bh.b.J;

    /* renamed from: y  reason: collision with root package name */
    private static final int f15235y = bh.b.M;

    /* renamed from: z  reason: collision with root package name */
    private static final int f15236z = bh.b.T;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f15237d;

    /* renamed from: e  reason: collision with root package name */
    private int f15238e;

    /* renamed from: i  reason: collision with root package name */
    private int f15239i;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f15240o;

    /* renamed from: p  reason: collision with root package name */
    private TimeInterpolator f15241p;

    /* renamed from: q  reason: collision with root package name */
    private int f15242q;

    /* renamed from: r  reason: collision with root package name */
    private AccessibilityManager f15243r;

    /* renamed from: s  reason: collision with root package name */
    private AccessibilityManager.TouchExplorationStateChangeListener f15244s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15245t;

    /* renamed from: u  reason: collision with root package name */
    private int f15246u;

    /* renamed from: v  reason: collision with root package name */
    private int f15247v;

    /* renamed from: w  reason: collision with root package name */
    private ViewPropertyAnimator f15248w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements View.OnAttachStateChangeListener {
        a() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            if (HideBottomViewOnScrollBehavior.this.f15244s != null && HideBottomViewOnScrollBehavior.this.f15243r != null) {
                HideBottomViewOnScrollBehavior.this.f15243r.removeTouchExplorationStateChangeListener(HideBottomViewOnScrollBehavior.this.f15244s);
                HideBottomViewOnScrollBehavior.this.f15244s = null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            HideBottomViewOnScrollBehavior.this.f15248w = null;
        }
    }

    public HideBottomViewOnScrollBehavior() {
        this.f15237d = new LinkedHashSet();
        this.f15242q = 0;
        this.f15245t = true;
        this.f15246u = 2;
        this.f15247v = 0;
    }

    public static /* synthetic */ void I(HideBottomViewOnScrollBehavior hideBottomViewOnScrollBehavior, View view, boolean z10) {
        if (z10) {
            if (hideBottomViewOnScrollBehavior.P()) {
                hideBottomViewOnScrollBehavior.T(view);
                return;
            }
            return;
        }
        hideBottomViewOnScrollBehavior.getClass();
    }

    private void N(View view, int i10, long j10, TimeInterpolator timeInterpolator) {
        this.f15248w = view.animate().translationY(i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new b());
    }

    private void O(final View view) {
        if (this.f15243r == null) {
            this.f15243r = (AccessibilityManager) androidx.core.content.a.j(view.getContext(), AccessibilityManager.class);
        }
        if (this.f15243r != null && this.f15244s == null) {
            AccessibilityManager.TouchExplorationStateChangeListener touchExplorationStateChangeListener = new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: eh.a
                @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
                public final void onTouchExplorationStateChanged(boolean z10) {
                    HideBottomViewOnScrollBehavior.I(HideBottomViewOnScrollBehavior.this, view, z10);
                }
            };
            this.f15244s = touchExplorationStateChangeListener;
            this.f15243r.addTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
            view.addOnAttachStateChangeListener(new a());
        }
    }

    private void V(View view, int i10) {
        this.f15246u = i10;
        Iterator it = this.f15237d.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean E(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
        return i10 == 2;
    }

    public boolean P() {
        if (this.f15246u == 1) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        if (this.f15246u == 2) {
            return true;
        }
        return false;
    }

    public void R(View view) {
        S(view, true);
    }

    public void S(View view, boolean z10) {
        AccessibilityManager accessibilityManager;
        if (!P()) {
            if (this.f15245t && (accessibilityManager = this.f15243r) != null && accessibilityManager.isTouchExplorationEnabled()) {
                return;
            }
            ViewPropertyAnimator viewPropertyAnimator = this.f15248w;
            if (viewPropertyAnimator != null) {
                viewPropertyAnimator.cancel();
                view.clearAnimation();
            }
            V(view, 1);
            int i10 = this.f15242q + this.f15247v;
            if (z10) {
                N(view, i10, this.f15239i, this.f15241p);
            } else {
                view.setTranslationY(i10);
            }
        }
    }

    public void T(View view) {
        U(view, true);
    }

    public void U(View view, boolean z10) {
        if (Q()) {
            return;
        }
        ViewPropertyAnimator viewPropertyAnimator = this.f15248w;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        V(view, 2);
        if (z10) {
            N(view, 0, this.f15238e, this.f15240o);
        } else {
            view.setTranslationY(0);
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        this.f15242q = view.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) view.getLayoutParams()).bottomMargin;
        this.f15238e = g.f(view.getContext(), f15234x, 225);
        this.f15239i = g.f(view.getContext(), f15235y, 175);
        Context context = view.getContext();
        int i11 = f15236z;
        this.f15240o = g.g(context, i11, ch.a.f8279d);
        this.f15241p = g.g(view.getContext(), i11, ch.a.f8278c);
        O(view);
        return super.p(coordinatorLayout, view, i10);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void x(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        if (i11 > 0) {
            R(view);
        } else if (i11 < 0) {
            T(view);
        }
    }

    public HideBottomViewOnScrollBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15237d = new LinkedHashSet();
        this.f15242q = 0;
        this.f15245t = true;
        this.f15246u = 2;
        this.f15247v = 0;
    }
}
