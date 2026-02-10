package com.google.android.material.transformation;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import java.util.List;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class ExpandableBehavior extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private int f16506d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f16507d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f16508e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ mh.a f16509i;

        a(View view, int i10, mh.a aVar) {
            this.f16507d = view;
            this.f16508e = i10;
            this.f16509i = aVar;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            this.f16507d.getViewTreeObserver().removeOnPreDrawListener(this);
            if (ExpandableBehavior.this.f16506d == this.f16508e) {
                ExpandableBehavior expandableBehavior = ExpandableBehavior.this;
                mh.a aVar = this.f16509i;
                expandableBehavior.L((View) aVar, this.f16507d, aVar.a(), false);
            }
            return false;
        }
    }

    public ExpandableBehavior() {
        this.f16506d = 0;
    }

    private boolean J(boolean z10) {
        if (z10) {
            int i10 = this.f16506d;
            if (i10 != 0 && i10 != 2) {
                return false;
            }
            return true;
        } else if (this.f16506d != 1) {
            return false;
        } else {
            return true;
        }
    }

    protected mh.a K(CoordinatorLayout coordinatorLayout, View view) {
        List q10 = coordinatorLayout.q(view);
        int size = q10.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) q10.get(i10);
            if (i(coordinatorLayout, view, view2)) {
                return (mh.a) view2;
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
        mh.a aVar = (mh.a) view2;
        if (J(aVar.a())) {
            if (aVar.a()) {
                i10 = 1;
            } else {
                i10 = 2;
            }
            this.f16506d = i10;
            return L((View) aVar, view, aVar.a(), true);
        }
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        mh.a K;
        int i11;
        if (!view.isLaidOut() && (K = K(coordinatorLayout, view)) != null && J(K.a())) {
            if (K.a()) {
                i11 = 1;
            } else {
                i11 = 2;
            }
            this.f16506d = i11;
            view.getViewTreeObserver().addOnPreDrawListener(new a(view, i11, K));
            return false;
        }
        return false;
    }

    public ExpandableBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16506d = 0;
    }
}
