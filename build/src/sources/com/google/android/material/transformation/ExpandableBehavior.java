package com.google.android.material.transformation;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import java.util.List;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class ExpandableBehavior extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private int f15637d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f15638d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f15639e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ih.a f15640i;

        a(View view, int i10, ih.a aVar) {
            this.f15638d = view;
            this.f15639e = i10;
            this.f15640i = aVar;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            this.f15638d.getViewTreeObserver().removeOnPreDrawListener(this);
            if (ExpandableBehavior.this.f15637d == this.f15639e) {
                ExpandableBehavior expandableBehavior = ExpandableBehavior.this;
                ih.a aVar = this.f15640i;
                expandableBehavior.L((View) aVar, this.f15638d, aVar.a(), false);
            }
            return false;
        }
    }

    public ExpandableBehavior() {
        this.f15637d = 0;
    }

    private boolean J(boolean z10) {
        if (z10) {
            int i10 = this.f15637d;
            if (i10 != 0 && i10 != 2) {
                return false;
            }
            return true;
        } else if (this.f15637d != 1) {
            return false;
        } else {
            return true;
        }
    }

    protected ih.a K(CoordinatorLayout coordinatorLayout, View view) {
        List m10 = coordinatorLayout.m(view);
        int size = m10.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) m10.get(i10);
            if (i(coordinatorLayout, view, view2)) {
                return (ih.a) view2;
            }
        }
        return null;
    }

    protected abstract boolean L(View view, View view2, boolean z10, boolean z11);

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public abstract boolean i(CoordinatorLayout coordinatorLayout, View view, View view2);

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean l(CoordinatorLayout coordinatorLayout, View view, View view2) {
        int i10;
        ih.a aVar = (ih.a) view2;
        if (J(aVar.a())) {
            if (aVar.a()) {
                i10 = 1;
            } else {
                i10 = 2;
            }
            this.f15637d = i10;
            return L((View) aVar, view, aVar.a(), true);
        }
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        ih.a K;
        int i11;
        if (!h0.S(view) && (K = K(coordinatorLayout, view)) != null && J(K.a())) {
            if (K.a()) {
                i11 = 1;
            } else {
                i11 = 2;
            }
            this.f15637d = i11;
            view.getViewTreeObserver().addOnPreDrawListener(new a(view, i11, K));
            return false;
        }
        return false;
    }

    public ExpandableBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15637d = 0;
    }
}
