package com.google.android.material.behavior;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import bh.b;
import java.util.Iterator;
import java.util.LinkedHashSet;
import mh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HideBottomViewOnScrollBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: u  reason: collision with root package name */
    private static final int f14658u = b.F;

    /* renamed from: v  reason: collision with root package name */
    private static final int f14659v = b.I;

    /* renamed from: w  reason: collision with root package name */
    private static final int f14660w = b.P;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f14661d;

    /* renamed from: e  reason: collision with root package name */
    private int f14662e;

    /* renamed from: i  reason: collision with root package name */
    private int f14663i;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f14664o;

    /* renamed from: p  reason: collision with root package name */
    private TimeInterpolator f14665p;

    /* renamed from: q  reason: collision with root package name */
    private int f14666q;

    /* renamed from: r  reason: collision with root package name */
    private int f14667r;

    /* renamed from: s  reason: collision with root package name */
    private int f14668s;

    /* renamed from: t  reason: collision with root package name */
    private ViewPropertyAnimator f14669t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            HideBottomViewOnScrollBehavior.this.f14669t = null;
        }
    }

    public HideBottomViewOnScrollBehavior() {
        this.f14661d = new LinkedHashSet();
        this.f14666q = 0;
        this.f14667r = 2;
        this.f14668s = 0;
    }

    private void J(View view, int i10, long j10, TimeInterpolator timeInterpolator) {
        this.f14669t = view.animate().translationY(i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new a());
    }

    private void Q(View view, int i10) {
        this.f14667r = i10;
        Iterator it = this.f14661d.iterator();
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
        if (this.f14667r == 1) {
            return true;
        }
        return false;
    }

    public boolean L() {
        if (this.f14667r == 2) {
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
        ViewPropertyAnimator viewPropertyAnimator = this.f14669t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 1);
        int i10 = this.f14666q + this.f14668s;
        if (z10) {
            J(view, i10, this.f14663i, this.f14665p);
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
        ViewPropertyAnimator viewPropertyAnimator = this.f14669t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 2);
        if (z10) {
            J(view, 0, this.f14662e, this.f14664o);
        } else {
            view.setTranslationY(0);
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        this.f14666q = view.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) view.getLayoutParams()).bottomMargin;
        this.f14662e = g.f(view.getContext(), f14658u, 225);
        this.f14663i = g.f(view.getContext(), f14659v, 175);
        Context context = view.getContext();
        int i11 = f14660w;
        this.f14664o = g.g(context, i11, ch.a.f7598d);
        this.f14665p = g.g(view.getContext(), i11, ch.a.f7597c);
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
        this.f14661d = new LinkedHashSet();
        this.f14666q = 0;
        this.f14667r = 2;
        this.f14668s = 0;
    }
}
