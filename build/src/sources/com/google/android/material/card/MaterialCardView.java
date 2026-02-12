package com.google.android.material.card;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Checkable;
import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import bh.k;
import th.i;
import th.l;
import th.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialCardView extends CardView implements Checkable, o {

    /* renamed from: p  reason: collision with root package name */
    private static final int[] f15438p = {16842911};

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f15439q = {16842912};

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f15440r = {bh.b.f6736g0};

    /* renamed from: s  reason: collision with root package name */
    private static final int f15441s = k.f6946u;

    /* renamed from: d  reason: collision with root package name */
    private final b f15442d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15443e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f15444i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15445o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public MaterialCardView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.C);
    }

    private void b() {
        if (Build.VERSION.SDK_INT > 26) {
            this.f15442d.i();
        }
    }

    @NonNull
    private RectF getBoundsAsRectF() {
        RectF rectF = new RectF();
        rectF.set(this.f15442d.j().getBounds());
        return rectF;
    }

    public boolean c() {
        b bVar = this.f15442d;
        if (bVar != null && bVar.D()) {
            return true;
        }
        return false;
    }

    public boolean d() {
        return this.f15445o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        super.setContentPadding(i10, i11, i12, i13);
    }

    @Override // androidx.cardview.widget.CardView
    @NonNull
    public ColorStateList getCardBackgroundColor() {
        return this.f15442d.k();
    }

    @NonNull
    public ColorStateList getCardForegroundColor() {
        return this.f15442d.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float getCardViewRadius() {
        return super.getRadius();
    }

    public Drawable getCheckedIcon() {
        return this.f15442d.m();
    }

    public int getCheckedIconGravity() {
        return this.f15442d.n();
    }

    public int getCheckedIconMargin() {
        return this.f15442d.o();
    }

    public int getCheckedIconSize() {
        return this.f15442d.p();
    }

    public ColorStateList getCheckedIconTint() {
        return this.f15442d.q();
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingBottom() {
        return this.f15442d.A().bottom;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingLeft() {
        return this.f15442d.A().left;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingRight() {
        return this.f15442d.A().right;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingTop() {
        return this.f15442d.A().top;
    }

    public float getProgress() {
        return this.f15442d.u();
    }

    @Override // androidx.cardview.widget.CardView
    public float getRadius() {
        return this.f15442d.s();
    }

    public ColorStateList getRippleColor() {
        return this.f15442d.v();
    }

    @NonNull
    public l getShapeAppearanceModel() {
        return this.f15442d.w();
    }

    @Deprecated
    public int getStrokeColor() {
        return this.f15442d.x();
    }

    public ColorStateList getStrokeColorStateList() {
        return this.f15442d.y();
    }

    public int getStrokeWidth() {
        return this.f15442d.z();
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f15444i;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.f15442d.d0();
        i.f(this, this.f15442d.j());
    }

    @Override // android.view.ViewGroup, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 3);
        if (c()) {
            View.mergeDrawableStates(onCreateDrawableState, f15438p);
        }
        if (isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, f15439q);
        }
        if (d()) {
            View.mergeDrawableStates(onCreateDrawableState, f15440r);
        }
        return onCreateDrawableState;
    }

    @Override // android.view.View
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        accessibilityEvent.setClassName("androidx.cardview.widget.CardView");
        accessibilityEvent.setChecked(isChecked());
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        accessibilityNodeInfo.setClassName("androidx.cardview.widget.CardView");
        accessibilityNodeInfo.setCheckable(c());
        accessibilityNodeInfo.setClickable(isClickable());
        accessibilityNodeInfo.setChecked(isChecked());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.cardview.widget.CardView, android.widget.FrameLayout, android.view.View
    public void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        this.f15442d.H(getMeasuredWidth(), getMeasuredHeight());
    }

    @Override // android.view.View
    public void setBackground(Drawable drawable) {
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        if (this.f15443e) {
            if (!this.f15442d.C()) {
                Log.i("MaterialCardView", "Setting a custom background is not supported.");
                this.f15442d.I(true);
            }
            super.setBackgroundDrawable(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setBackgroundInternal(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
    }

    @Override // androidx.cardview.widget.CardView
    public void setCardBackgroundColor(int i10) {
        this.f15442d.J(ColorStateList.valueOf(i10));
    }

    @Override // androidx.cardview.widget.CardView
    public void setCardElevation(float f10) {
        super.setCardElevation(f10);
        this.f15442d.f0();
    }

    public void setCardForegroundColor(ColorStateList colorStateList) {
        this.f15442d.K(colorStateList);
    }

    public void setCheckable(boolean z10) {
        this.f15442d.L(z10);
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        if (this.f15444i != z10) {
            toggle();
        }
    }

    public void setCheckedIcon(Drawable drawable) {
        this.f15442d.O(drawable);
    }

    public void setCheckedIconGravity(int i10) {
        if (this.f15442d.n() != i10) {
            this.f15442d.P(i10);
        }
    }

    public void setCheckedIconMargin(int i10) {
        this.f15442d.Q(i10);
    }

    public void setCheckedIconMarginResource(int i10) {
        if (i10 != -1) {
            this.f15442d.Q(getResources().getDimensionPixelSize(i10));
        }
    }

    public void setCheckedIconResource(int i10) {
        this.f15442d.O(g.a.b(getContext(), i10));
    }

    public void setCheckedIconSize(int i10) {
        this.f15442d.R(i10);
    }

    public void setCheckedIconSizeResource(int i10) {
        if (i10 != 0) {
            this.f15442d.R(getResources().getDimensionPixelSize(i10));
        }
    }

    public void setCheckedIconTint(ColorStateList colorStateList) {
        this.f15442d.S(colorStateList);
    }

    @Override // android.view.View
    public void setClickable(boolean z10) {
        super.setClickable(z10);
        b bVar = this.f15442d;
        if (bVar != null) {
            bVar.d0();
        }
    }

    @Override // androidx.cardview.widget.CardView
    public void setContentPadding(int i10, int i11, int i12, int i13) {
        this.f15442d.Z(i10, i11, i12, i13);
    }

    public void setDragged(boolean z10) {
        if (this.f15445o != z10) {
            this.f15445o = z10;
            refreshDrawableState();
            b();
            invalidate();
        }
    }

    @Override // androidx.cardview.widget.CardView
    public void setMaxCardElevation(float f10) {
        super.setMaxCardElevation(f10);
        this.f15442d.h0();
    }

    public void setOnCheckedChangeListener(a aVar) {
    }

    @Override // androidx.cardview.widget.CardView
    public void setPreventCornerOverlap(boolean z10) {
        super.setPreventCornerOverlap(z10);
        this.f15442d.h0();
        this.f15442d.e0();
    }

    public void setProgress(float f10) {
        this.f15442d.U(f10);
    }

    @Override // androidx.cardview.widget.CardView
    public void setRadius(float f10) {
        super.setRadius(f10);
        this.f15442d.T(f10);
    }

    public void setRippleColor(ColorStateList colorStateList) {
        this.f15442d.V(colorStateList);
    }

    public void setRippleColorResource(int i10) {
        this.f15442d.V(g.a.a(getContext(), i10));
    }

    @Override // th.o
    public void setShapeAppearanceModel(@NonNull l lVar) {
        setClipToOutline(lVar.v(getBoundsAsRectF()));
        this.f15442d.W(lVar);
    }

    public void setStrokeColor(int i10) {
        setStrokeColor(ColorStateList.valueOf(i10));
    }

    public void setStrokeWidth(int i10) {
        this.f15442d.Y(i10);
        invalidate();
    }

    @Override // androidx.cardview.widget.CardView
    public void setUseCompatPadding(boolean z10) {
        super.setUseCompatPadding(z10);
        this.f15442d.h0();
        this.f15442d.e0();
    }

    @Override // android.widget.Checkable
    public void toggle() {
        if (c() && isEnabled()) {
            this.f15444i = !this.f15444i;
            refreshDrawableState();
            b();
            this.f15442d.N(this.f15444i, true);
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialCardView(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.card.MaterialCardView.f15441s
            android.content.Context r7 = wh.a.d(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            r7 = 0
            r6.f15444i = r7
            r6.f15445o = r7
            r0 = 1
            r6.f15443e = r0
            android.content.Context r0 = r6.getContext()
            int[] r2 = bh.l.N3
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r7 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            com.google.android.material.card.b r8 = new com.google.android.material.card.b
            r8.<init>(r6, r1, r3, r4)
            r6.f15442d = r8
            android.content.res.ColorStateList r9 = super.getCardBackgroundColor()
            r8.J(r9)
            int r9 = super.getContentPaddingLeft()
            int r0 = super.getContentPaddingTop()
            int r1 = super.getContentPaddingRight()
            int r2 = super.getContentPaddingBottom()
            r8.Z(r9, r0, r1, r2)
            r8.G(r7)
            r7.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.card.MaterialCardView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    @Override // androidx.cardview.widget.CardView
    public void setCardBackgroundColor(ColorStateList colorStateList) {
        this.f15442d.J(colorStateList);
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f15442d.X(colorStateList);
        invalidate();
    }
}
