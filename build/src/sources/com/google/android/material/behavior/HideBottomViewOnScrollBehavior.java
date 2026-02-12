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
    private static final int f15235x = bh.b.J;

    /* renamed from: y  reason: collision with root package name */
    private static final int f15236y = bh.b.M;

    /* renamed from: z  reason: collision with root package name */
    private static final int f15237z = bh.b.T;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f15238d;

    /* renamed from: e  reason: collision with root package name */
    private int f15239e;

    /* renamed from: i  reason: collision with root package name */
    private int f15240i;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f15241o;

    /* renamed from: p  reason: collision with root package name */
    private TimeInterpolator f15242p;

    /* renamed from: q  reason: collision with root package name */
    private int f15243q;

    /* renamed from: r  reason: collision with root package name */
    private AccessibilityManager f15244r;

    /* renamed from: s  reason: collision with root package name */
    private AccessibilityManager.TouchExplorationStateChangeListener f15245s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15246t;

    /* renamed from: u  reason: collision with root package name */
    private int f15247u;

    /* renamed from: v  reason: collision with root package name */
    private int f15248v;

    /* renamed from: w  reason: collision with root package name */
    private ViewPropertyAnimator f15249w;

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
            if (HideBottomViewOnScrollBehavior.this.f15245s != null && HideBottomViewOnScrollBehavior.this.f15244r != null) {
                HideBottomViewOnScrollBehavior.this.f15244r.removeTouchExplorationStateChangeListener(HideBottomViewOnScrollBehavior.this.f15245s);
                HideBottomViewOnScrollBehavior.this.f15245s = null;
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
            HideBottomViewOnScrollBehavior.this.f15249w = null;
        }
    }

    public HideBottomViewOnScrollBehavior() {
        this.f15238d = new LinkedHashSet();
        this.f15243q = 0;
        this.f15246t = true;
        this.f15247u = 2;
        this.f15248v = 0;
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
        this.f15249w = view.animate().translationY(i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new b());
    }

    private void O(final View view) {
        if (this.f15244r == null) {
            this.f15244r = (AccessibilityManager) androidx.core.content.a.j(view.getContext(), AccessibilityManager.class);
        }
        if (this.f15244r != null && this.f15245s == null) {
            AccessibilityManager.TouchExplorationStateChangeListener touchExplorationStateChangeListener = new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: eh.a
                @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
                public final void onTouchExplorationStateChanged(boolean z10) {
                    HideBottomViewOnScrollBehavior.I(HideBottomViewOnScrollBehavior.this, view, z10);
                }
            };
            this.f15245s = touchExplorationStateChangeListener;
            this.f15244r.addTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
            view.addOnAttachStateChangeListener(new a());
        }
    }

    private void V(View view, int i10) {
        this.f15247u = i10;
        Iterator it = this.f15238d.iterator();
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
        if (this.f15247u == 1) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        if (this.f15247u == 2) {
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
            if (this.f15246t && (accessibilityManager = this.f15244r) != null && accessibilityManager.isTouchExplorationEnabled()) {
                return;
            }
            ViewPropertyAnimator viewPropertyAnimator = this.f15249w;
            if (viewPropertyAnimator != null) {
                viewPropertyAnimator.cancel();
                view.clearAnimation();
            }
            V(view, 1);
            int i10 = this.f15243q + this.f15248v;
            if (z10) {
                N(view, i10, this.f15240i, this.f15242p);
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
        ViewPropertyAnimator viewPropertyAnimator = this.f15249w;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        V(view, 2);
        if (z10) {
            N(view, 0, this.f15239e, this.f15241o);
        } else {
            view.setTranslationY(0);
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        this.f15243q = view.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) view.getLayoutParams()).bottomMargin;
        this.f15239e = g.f(view.getContext(), f15235x, 225);
        this.f15240i = g.f(view.getContext(), f15236y, 175);
        Context context = view.getContext();
        int i11 = f15237z;
        this.f15241o = g.g(context, i11, ch.a.f8279d);
        this.f15242p = g.g(view.getContext(), i11, ch.a.f8278c);
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
        this.f15238d = new LinkedHashSet();
        this.f15243q = 0;
        this.f15246t = true;
        this.f15247u = 2;
        this.f15248v = 0;
    }
}
