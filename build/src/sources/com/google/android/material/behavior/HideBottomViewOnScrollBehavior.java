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
import java.util.Iterator;
import java.util.LinkedHashSet;
import jh.g;
import yg.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HideBottomViewOnScrollBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: u  reason: collision with root package name */
    private static final int f14144u = b.F;

    /* renamed from: v  reason: collision with root package name */
    private static final int f14145v = b.I;

    /* renamed from: w  reason: collision with root package name */
    private static final int f14146w = b.P;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f14147d;

    /* renamed from: e  reason: collision with root package name */
    private int f14148e;

    /* renamed from: i  reason: collision with root package name */
    private int f14149i;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f14150o;

    /* renamed from: p  reason: collision with root package name */
    private TimeInterpolator f14151p;

    /* renamed from: q  reason: collision with root package name */
    private int f14152q;

    /* renamed from: r  reason: collision with root package name */
    private int f14153r;

    /* renamed from: s  reason: collision with root package name */
    private int f14154s;

    /* renamed from: t  reason: collision with root package name */
    private ViewPropertyAnimator f14155t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            HideBottomViewOnScrollBehavior.this.f14155t = null;
        }
    }

    public HideBottomViewOnScrollBehavior() {
        this.f14147d = new LinkedHashSet();
        this.f14152q = 0;
        this.f14153r = 2;
        this.f14154s = 0;
    }

    private void J(View view, int i10, long j10, TimeInterpolator timeInterpolator) {
        this.f14155t = view.animate().translationY(i10).setInterpolator(timeInterpolator).setDuration(j10).setListener(new a());
    }

    private void Q(View view, int i10) {
        this.f14153r = i10;
        Iterator it = this.f14147d.iterator();
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
        if (this.f14153r == 1) {
            return true;
        }
        return false;
    }

    public boolean L() {
        if (this.f14153r == 2) {
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
        ViewPropertyAnimator viewPropertyAnimator = this.f14155t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 1);
        int i10 = this.f14152q + this.f14154s;
        if (z10) {
            J(view, i10, this.f14149i, this.f14151p);
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
        ViewPropertyAnimator viewPropertyAnimator = this.f14155t;
        if (viewPropertyAnimator != null) {
            viewPropertyAnimator.cancel();
            view.clearAnimation();
        }
        Q(view, 2);
        if (z10) {
            J(view, 0, this.f14148e, this.f14150o);
        } else {
            view.setTranslationY(0);
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        this.f14152q = view.getMeasuredHeight() + ((ViewGroup.MarginLayoutParams) view.getLayoutParams()).bottomMargin;
        this.f14148e = g.f(view.getContext(), f14144u, 225);
        this.f14149i = g.f(view.getContext(), f14145v, 175);
        Context context = view.getContext();
        int i11 = f14146w;
        this.f14150o = g.g(context, i11, zg.a.f55944d);
        this.f14151p = g.g(view.getContext(), i11, zg.a.f55943c);
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
        this.f14147d = new LinkedHashSet();
        this.f14152q = 0;
        this.f14153r = 2;
        this.f14154s = 0;
    }
}
