package com.google.android.material.appbar;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.j;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d extends e {

    /* renamed from: o  reason: collision with root package name */
    final Rect f15161o;

    /* renamed from: p  reason: collision with root package name */
    final Rect f15162p;

    /* renamed from: q  reason: collision with root package name */
    private int f15163q;

    /* renamed from: r  reason: collision with root package name */
    private int f15164r;

    public d() {
        this.f15161o = new Rect();
        this.f15162p = new Rect();
        this.f15163q = 0;
    }

    private static int R(int i10) {
        if (i10 == 0) {
            return 8388659;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.material.appbar.e
    public void J(CoordinatorLayout coordinatorLayout, View view, int i10) {
        View L = L(coordinatorLayout.m(view));
        if (L != null) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) view.getLayoutParams();
            Rect rect = this.f15161o;
            rect.set(coordinatorLayout.getPaddingLeft() + ((ViewGroup.MarginLayoutParams) fVar).leftMargin, L.getBottom() + ((ViewGroup.MarginLayoutParams) fVar).topMargin, (coordinatorLayout.getWidth() - coordinatorLayout.getPaddingRight()) - ((ViewGroup.MarginLayoutParams) fVar).rightMargin, ((coordinatorLayout.getHeight() + L.getBottom()) - coordinatorLayout.getPaddingBottom()) - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin);
            WindowInsetsCompat lastWindowInsets = coordinatorLayout.getLastWindowInsets();
            if (lastWindowInsets != null && h0.w(coordinatorLayout) && !h0.w(view)) {
                rect.left += lastWindowInsets.o();
                rect.right -= lastWindowInsets.p();
            }
            Rect rect2 = this.f15162p;
            j.a(R(fVar.f2894c), view.getMeasuredWidth(), view.getMeasuredHeight(), rect, rect2, i10);
            int M = M(L);
            view.layout(rect2.left, rect2.top - M, rect2.right, rect2.bottom - M);
            this.f15163q = rect2.top - L.getBottom();
            return;
        }
        super.J(coordinatorLayout, view, i10);
        this.f15163q = 0;
    }

    abstract View L(List list);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int M(View view) {
        if (this.f15164r == 0) {
            return 0;
        }
        float N = N(view);
        int i10 = this.f15164r;
        return u1.a.b((int) (N * i10), 0, i10);
    }

    abstract float N(View view);

    public final int O() {
        return this.f15164r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int P(View view) {
        return view.getMeasuredHeight();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int Q() {
        return this.f15163q;
    }

    public final void S(int i10) {
        this.f15164r = i10;
    }

    protected boolean T() {
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean q(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12, int i13) {
        View L;
        int i14;
        WindowInsetsCompat lastWindowInsets;
        int i15 = view.getLayoutParams().height;
        if ((i15 == -1 || i15 == -2) && (L = L(coordinatorLayout.m(view))) != null) {
            int size = View.MeasureSpec.getSize(i12);
            if (size > 0) {
                if (h0.w(L) && (lastWindowInsets = coordinatorLayout.getLastWindowInsets()) != null) {
                    size += lastWindowInsets.q() + lastWindowInsets.n();
                }
            } else {
                size = coordinatorLayout.getHeight();
            }
            int P = size + P(L);
            int measuredHeight = L.getMeasuredHeight();
            if (T()) {
                view.setTranslationY(-measuredHeight);
            } else {
                view.setTranslationY(0.0f);
                P -= measuredHeight;
            }
            if (i15 == -1) {
                i14 = 1073741824;
            } else {
                i14 = Integer.MIN_VALUE;
            }
            coordinatorLayout.F(view, i10, i11, View.MeasureSpec.makeMeasureSpec(P, i14), i13);
            return true;
        }
        return false;
    }

    public d(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15161o = new Rect();
        this.f15162p = new Rect();
        this.f15163q = 0;
    }
}
