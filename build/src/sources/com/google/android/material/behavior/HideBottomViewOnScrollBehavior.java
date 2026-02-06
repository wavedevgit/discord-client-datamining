package com.google.android.material.behavior;

import ah.b;
import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import java.util.Iterator;
import java.util.LinkedHashSet;
import lh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HideBottomViewOnScrollBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: u  reason: collision with root package name */
    private static final int f14518u = b.F;

    /* renamed from: v  reason: collision with root package name */
    private static final int f14519v = b.I;

    /* renamed from: w  reason: collision with root package name */
    private static final int f14520w = b.P;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f14521d;

    /* renamed from: e  reason: collision with root package name */
    private int f14522e;

    /* renamed from: i  reason: collision with root package name */
    private int f14523i;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f14524o;

    /* renamed from: p  reason: collision with root package name */
    private TimeInterpolator f14525p;

    /* renamed from: q  reason: collision with root package name */
    private int f14526q;

    /* renamed from: r  reason: collision with root package name */
    private int f14527r;

    /* renamed from: s  reason: collision with root package name */
    private int f14528s;

    /* renamed from: t  reason: collision with root package name */
    private ViewPropertyAnimator f14529t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            HideBottomViewOnScrollBehavior.this.f14529t = null;
        }
    }

    public HideBottomViewOnScrollBehavior() {
        this.f14521d = new LinkedHashSet();
        this.f14526q = 0;
        this.f14527r = 2;
        this.f14528s = 0;
    }

    private void J(View view, int i10, long j10, TimeInterpolator timeInterpolator) {
        this.f14529t = view.animate().translationY(i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new a());
    }

    private void Q(View view, int i10) {
        this.f14527r = i10;
        Iterator it = this.f14521d.iterator();
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

    public boolean K() {
        if (this.f14527r == 1) {
            return true;
        }
        return false;
    }

    public boolean L() {
        if (this.f14527r == 2) {
            return true;
        }
        return false;
    }

    public void M(View view) {
        N(view, true);
    }

    public void N(View view, boolean z10) {
        if (K()) {
            return;
        }
        ViewPropertyAnimator viewPropertyAnimator = this.f14529t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 1);
        int i10 = this.f14526q + this.f14528s;
        if (z10) {
            J(view, i10, this.f14523i, this.f14525p);
        } else {
            view.setTranslationY(i10);
        }
    }

    public void O(View view) {
        P(view, true);
    }

    public void P(View view, boolean z10) {
        if (L()) {
            return;
        }
        ViewPropertyAnimator viewPropertyAnimator = this.f14529t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 2);
        if (z10) {
            J(view, 0, this.f14522e, this.f14524o);
        } else {
            view.setTranslationY(0);
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        this.f14526q = view.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) view.getLayoutParams()).bottomMargin;
        this.f14522e = g.f(view.getContext(), f14518u, 225);
        this.f14523i = g.f(view.getContext(), f14519v, 175);
        Context context = view.getContext();
        int i11 = f14520w;
        this.f14524o = g.g(context, i11, bh.a.f6757d);
        this.f14525p = g.g(view.getContext(), i11, bh.a.f6756c);
        return super.p(coordinatorLayout, view, i10);
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void x(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        if (i11 > 0) {
            M(view);
        } else if (i11 < 0) {
            O(view);
        }
    }

    public HideBottomViewOnScrollBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14521d = new LinkedHashSet();
        this.f14526q = 0;
        this.f14527r = 2;
        this.f14528s = 0;
    }
}
