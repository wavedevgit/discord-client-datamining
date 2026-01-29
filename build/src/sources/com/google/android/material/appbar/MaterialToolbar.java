package com.google.android.material.appbar;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.util.Pair;
import android.view.Menu;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.h0;
import com.google.android.material.internal.m;
import oh.h;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialToolbar extends Toolbar {

    /* renamed from: n0  reason: collision with root package name */
    private static final int f15508n0 = j.A;

    /* renamed from: o0  reason: collision with root package name */
    private static final ImageView.ScaleType[] f15509o0 = {ImageView.ScaleType.MATRIX, ImageView.ScaleType.FIT_XY, ImageView.ScaleType.FIT_START, ImageView.ScaleType.FIT_CENTER, ImageView.ScaleType.FIT_END, ImageView.ScaleType.CENTER, ImageView.ScaleType.CENTER_CROP, ImageView.ScaleType.CENTER_INSIDE};

    /* renamed from: i0  reason: collision with root package name */
    private Integer f15510i0;

    /* renamed from: j0  reason: collision with root package name */
    private boolean f15511j0;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f15512k0;

    /* renamed from: l0  reason: collision with root package name */
    private ImageView.ScaleType f15513l0;

    /* renamed from: m0  reason: collision with root package name */
    private Boolean f15514m0;

    public MaterialToolbar(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54349j0);
    }

    private Pair S(TextView textView, TextView textView2) {
        int measuredWidth = getMeasuredWidth();
        int i10 = measuredWidth / 2;
        int paddingLeft = getPaddingLeft();
        int paddingRight = measuredWidth - getPaddingRight();
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            View childAt = getChildAt(i11);
            if (childAt.getVisibility() != 8 && childAt != textView && childAt != textView2) {
                if (childAt.getRight() < i10 && childAt.getRight() > paddingLeft) {
                    paddingLeft = childAt.getRight();
                }
                if (childAt.getLeft() > i10 && childAt.getLeft() < paddingRight) {
                    paddingRight = childAt.getLeft();
                }
            }
        }
        return new Pair(Integer.valueOf(paddingLeft), Integer.valueOf(paddingRight));
    }

    private void T(Context context) {
        ColorStateList g10;
        Drawable background = getBackground();
        if (background == null) {
            g10 = ColorStateList.valueOf(0);
        } else {
            g10 = com.google.android.material.drawable.c.g(background);
        }
        if (g10 != null) {
            oh.g gVar = new oh.g();
            gVar.X(g10);
            gVar.N(context);
            gVar.W(h0.u(this));
            h0.r0(this, gVar);
        }
    }

    private void U(View view, Pair pair) {
        int measuredWidth = getMeasuredWidth();
        int measuredWidth2 = view.getMeasuredWidth();
        int i10 = (measuredWidth / 2) - (measuredWidth2 / 2);
        int i11 = measuredWidth2 + i10;
        int max = Math.max(Math.max(((Integer) pair.first).intValue() - i10, 0), Math.max(i11 - ((Integer) pair.second).intValue(), 0));
        if (max > 0) {
            i10 += max;
            i11 -= max;
            view.measure(View.MeasureSpec.makeMeasureSpec(i11 - i10, 1073741824), view.getMeasuredHeightAndState());
        }
        view.layout(i10, view.getTop(), i11, view.getBottom());
    }

    private void V() {
        if (this.f15511j0 || this.f15512k0) {
            TextView e10 = m.e(this);
            TextView c10 = m.c(this);
            if (e10 != null || c10 != null) {
                Pair S = S(e10, c10);
                if (this.f15511j0 && e10 != null) {
                    U(e10, S);
                }
                if (this.f15512k0 && c10 != null) {
                    U(c10, S);
                }
            }
        }
    }

    private Drawable W(Drawable drawable) {
        if (drawable != null && this.f15510i0 != null) {
            Drawable r10 = s1.a.r(drawable.mutate());
            s1.a.n(r10, this.f15510i0.intValue());
            return r10;
        }
        return drawable;
    }

    private void X() {
        ImageView b10 = m.b(this);
        if (b10 != null) {
            Boolean bool = this.f15514m0;
            if (bool != null) {
                b10.setAdjustViewBounds(bool.booleanValue());
            }
            ImageView.ScaleType scaleType = this.f15513l0;
            if (scaleType != null) {
                b10.setScaleType(scaleType);
            }
        }
    }

    public ImageView.ScaleType getLogoScaleType() {
        return this.f15513l0;
    }

    public Integer getNavigationIconTint() {
        return this.f15510i0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.Toolbar, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        h.e(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.Toolbar, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        V();
        X();
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        h.d(this, f10);
    }

    public void setLogoAdjustViewBounds(boolean z10) {
        Boolean bool = this.f15514m0;
        if (bool != null && bool.booleanValue() == z10) {
            return;
        }
        this.f15514m0 = Boolean.valueOf(z10);
        requestLayout();
    }

    public void setLogoScaleType(@NonNull ImageView.ScaleType scaleType) {
        if (this.f15513l0 != scaleType) {
            this.f15513l0 = scaleType;
            requestLayout();
        }
    }

    @Override // androidx.appcompat.widget.Toolbar
    public void setNavigationIcon(Drawable drawable) {
        super.setNavigationIcon(W(drawable));
    }

    public void setNavigationIconTint(int i10) {
        this.f15510i0 = Integer.valueOf(i10);
        Drawable navigationIcon = getNavigationIcon();
        if (navigationIcon != null) {
            setNavigationIcon(navigationIcon);
        }
    }

    public void setSubtitleCentered(boolean z10) {
        if (this.f15512k0 != z10) {
            this.f15512k0 = z10;
            requestLayout();
        }
    }

    public void setTitleCentered(boolean z10) {
        if (this.f15511j0 != z10) {
            this.f15511j0 = z10;
            requestLayout();
        }
    }

    @Override // androidx.appcompat.widget.Toolbar
    public void x(int i10) {
        Menu menu = getMenu();
        boolean z10 = menu instanceof androidx.appcompat.view.menu.e;
        if (z10) {
            ((androidx.appcompat.view.menu.e) menu).e0();
        }
        super.x(i10);
        if (z10) {
            ((androidx.appcompat.view.menu.e) menu).d0();
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialToolbar(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.appbar.MaterialToolbar.f15508n0
            android.content.Context r7 = rh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.content.Context r0 = r6.getContext()
            int[] r2 = yg.k.I4
            r7 = 0
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = yg.k.L4
            boolean r9 = r8.hasValue(r9)
            r1 = -1
            if (r9 == 0) goto L2a
            int r9 = yg.k.L4
            int r9 = r8.getColor(r9, r1)
            r6.setNavigationIconTint(r9)
        L2a:
            int r9 = yg.k.N4
            boolean r9 = r8.getBoolean(r9, r7)
            r6.f15511j0 = r9
            int r9 = yg.k.M4
            boolean r9 = r8.getBoolean(r9, r7)
            r6.f15512k0 = r9
            int r9 = yg.k.K4
            int r9 = r8.getInt(r9, r1)
            if (r9 < 0) goto L4b
            android.widget.ImageView$ScaleType[] r1 = com.google.android.material.appbar.MaterialToolbar.f15509o0
            int r2 = r1.length
            if (r9 >= r2) goto L4b
            r9 = r1[r9]
            r6.f15513l0 = r9
        L4b:
            int r9 = yg.k.J4
            boolean r9 = r8.hasValue(r9)
            if (r9 == 0) goto L5f
            int r9 = yg.k.J4
            boolean r7 = r8.getBoolean(r9, r7)
            java.lang.Boolean r7 = java.lang.Boolean.valueOf(r7)
            r6.f15514m0 = r7
        L5f:
            r8.recycle()
            r6.T(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.appbar.MaterialToolbar.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
