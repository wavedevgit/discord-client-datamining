package com.google.android.material.behavior;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import android.view.accessibility.AccessibilityManager;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.behavior.HideViewOnScrollBehavior;
import java.util.Iterator;
import java.util.LinkedHashSet;
import oh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HideViewOnScrollBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private d f15252d;

    /* renamed from: e  reason: collision with root package name */
    private AccessibilityManager f15253e;

    /* renamed from: i  reason: collision with root package name */
    private AccessibilityManager.TouchExplorationStateChangeListener f15254i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15255o;

    /* renamed from: p  reason: collision with root package name */
    private final LinkedHashSet f15256p;

    /* renamed from: q  reason: collision with root package name */
    private int f15257q;

    /* renamed from: r  reason: collision with root package name */
    private int f15258r;

    /* renamed from: s  reason: collision with root package name */
    private TimeInterpolator f15259s;

    /* renamed from: t  reason: collision with root package name */
    private TimeInterpolator f15260t;

    /* renamed from: u  reason: collision with root package name */
    private int f15261u;

    /* renamed from: v  reason: collision with root package name */
    private int f15262v;

    /* renamed from: w  reason: collision with root package name */
    private int f15263w;

    /* renamed from: x  reason: collision with root package name */
    private ViewPropertyAnimator f15264x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f15265y;

    /* renamed from: z  reason: collision with root package name */
    private static final int f15251z = bh.b.J;
    private static final int A = bh.b.M;
    private static final int B = bh.b.T;

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
            if (HideViewOnScrollBehavior.this.f15254i != null && HideViewOnScrollBehavior.this.f15253e != null) {
                HideViewOnScrollBehavior.this.f15253e.removeTouchExplorationStateChangeListener(HideViewOnScrollBehavior.this.f15254i);
                HideViewOnScrollBehavior.this.f15254i = null;
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
            HideViewOnScrollBehavior.this.f15264x = null;
        }
    }

    public HideViewOnScrollBehavior() {
        this.f15255o = true;
        this.f15256p = new LinkedHashSet();
        this.f15261u = 0;
        this.f15262v = 2;
        this.f15263w = 0;
        this.f15265y = false;
    }

    public static /* synthetic */ void I(HideViewOnScrollBehavior hideViewOnScrollBehavior, View view, boolean z10) {
        if (hideViewOnScrollBehavior.f15255o && z10 && hideViewOnScrollBehavior.S()) {
            hideViewOnScrollBehavior.V(view);
        }
    }

    private void N(View view, int i10, long j10, TimeInterpolator timeInterpolator) {
        this.f15264x = this.f15252d.d(view, i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new b());
    }

    private void O(final View view) {
        if (this.f15253e == null) {
            this.f15253e = (AccessibilityManager) androidx.core.content.a.j(view.getContext(), AccessibilityManager.class);
        }
        if (this.f15253e != null && this.f15254i == null) {
            AccessibilityManager.TouchExplorationStateChangeListener touchExplorationStateChangeListener = new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: eh.b
                @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
                public final void onTouchExplorationStateChanged(boolean z10) {
                    HideViewOnScrollBehavior.I(HideViewOnScrollBehavior.this, view, z10);
                }
            };
            this.f15254i = touchExplorationStateChangeListener;
            this.f15253e.addTouchExplorationStateChangeListener(touchExplorationStateChangeListener);
            view.addOnAttachStateChangeListener(new a());
        }
    }

    private boolean P(int i10) {
        return i10 == 80 || i10 == 81;
    }

    private boolean Q(int i10) {
        return i10 == 3 || i10 == 19;
    }

    private void T(View view, int i10) {
        int i11;
        if (this.f15265y) {
            return;
        }
        int i12 = ((CoordinatorLayout.f) view.getLayoutParams()).f3004c;
        if (P(i12)) {
            U(1);
            return;
        }
        if (Q(Gravity.getAbsoluteGravity(i12, i10))) {
            i11 = 2;
        } else {
            i11 = 0;
        }
        U(i11);
    }

    private void U(int i10) {
        d dVar = this.f15252d;
        if (dVar != null && dVar.c() == i10) {
            return;
        }
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    this.f15252d = new com.google.android.material.behavior.b();
                    return;
                }
                throw new IllegalArgumentException("Invalid view edge position value: " + i10 + ". Must be 0, 1 or 2.");
            }
            this.f15252d = new com.google.android.material.behavior.a();
            return;
        }
        this.f15252d = new c();
    }

    private void Z(View view, int i10) {
        this.f15262v = i10;
        Iterator it = this.f15256p.iterator();
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

    public boolean R() {
        if (this.f15262v == 2) {
            return true;
        }
        return false;
    }

    public boolean S() {
        if (this.f15262v == 1) {
            return true;
        }
        return false;
    }

    public void V(View view) {
        W(view, true);
    }

    public void W(View view, boolean z10) {
        if (R()) {
            return;
        }
        ViewPropertyAnimator viewPropertyAnimator = this.f15264x;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Z(view, 2);
        int b10 = this.f15252d.b();
        if (z10) {
            N(view, b10, this.f15257q, this.f15259s);
        } else {
            this.f15252d.e(view, b10);
        }
    }

    public void X(View view) {
        Y(view, true);
    }

    public void Y(View view, boolean z10) {
        AccessibilityManager accessibilityManager;
        if (!S()) {
            if (this.f15255o && (accessibilityManager = this.f15253e) != null && accessibilityManager.isTouchExplorationEnabled()) {
                return;
            }
            ViewPropertyAnimator viewPropertyAnimator = this.f15264x;
            if (viewPropertyAnimator != null) {
                viewPropertyAnimator.cancel();
                view.clearAnimation();
            }
            Z(view, 1);
            int i10 = this.f15261u + this.f15263w;
            if (z10) {
                N(view, i10, this.f15258r, this.f15260t);
            } else {
                this.f15252d.e(view, i10);
            }
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        O(view);
        T(view, i10);
        this.f15261u = this.f15252d.a(view, (ViewGroup.MarginLayoutParams) view.getLayoutParams());
        this.f15257q = g.f(view.getContext(), f15251z, 225);
        this.f15258r = g.f(view.getContext(), A, 175);
        Context context = view.getContext();
        int i11 = B;
        this.f15259s = g.g(context, i11, ch.a.f8279d);
        this.f15260t = g.g(view.getContext(), i11, ch.a.f8278c);
        return super.p(coordinatorLayout, view, i10);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void x(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        if (i11 > 0) {
            X(view);
        } else if (i11 < 0) {
            V(view);
        }
    }

    public HideViewOnScrollBehavior(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15255o = true;
        this.f15256p = new LinkedHashSet();
        this.f15261u = 0;
        this.f15262v = 2;
        this.f15263w = 0;
        this.f15265y = false;
    }
}
