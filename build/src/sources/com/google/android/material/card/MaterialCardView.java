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
import ph.h;
import ph.k;
import ph.n;
import zg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialCardView extends CardView implements Checkable, n {

    /* renamed from: p  reason: collision with root package name */
    private static final int[] f14711p = {16842911};

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f14712q = {16842912};

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f14713r = {zg.b.f55535a0};

    /* renamed from: s  reason: collision with root package name */
    private static final int f14714s = j.f55716o;

    /* renamed from: d  reason: collision with root package name */
    private final b f14715d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f14716e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f14717i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14718o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public MaterialCardView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, zg.b.A);
    }

    private void b() {
        if (Build.VERSION.SDK_INT > 26) {
            this.f14715d.k();
        }
    }

    @NonNull
    private RectF getBoundsAsRectF() {
        RectF rectF = new RectF();
        rectF.set(this.f14715d.l().getBounds());
        return rectF;
    }

    public boolean c() {
        b bVar = this.f14715d;
        if (bVar != null && bVar.F()) {
            return true;
        }
        return false;
    }

    public boolean d() {
        return this.f14718o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        super.setContentPadding(i10, i11, i12, i13);
    }

    @Override // androidx.cardview.widget.CardView
    @NonNull
    public ColorStateList getCardBackgroundColor() {
        return this.f14715d.m();
    }

    @NonNull
    public ColorStateList getCardForegroundColor() {
        return this.f14715d.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float getCardViewRadius() {
        return super.getRadius();
    }

    public Drawable getCheckedIcon() {
        return this.f14715d.o();
    }

    public int getCheckedIconGravity() {
        return this.f14715d.p();
    }

    public int getCheckedIconMargin() {
        return this.f14715d.q();
    }

    public int getCheckedIconSize() {
        return this.f14715d.r();
    }

    public ColorStateList getCheckedIconTint() {
        return this.f14715d.s();
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingBottom() {
        return this.f14715d.C().bottom;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingLeft() {
        return this.f14715d.C().left;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingRight() {
        return this.f14715d.C().right;
    }

    @Override // androidx.cardview.widget.CardView
    public int getContentPaddingTop() {
        return this.f14715d.C().top;
    }

    public float getProgress() {
        return this.f14715d.w();
    }

    @Override // androidx.cardview.widget.CardView
    public float getRadius() {
        return this.f14715d.u();
    }

    public ColorStateList getRippleColor() {
        return this.f14715d.x();
    }

    @NonNull
    public k getShapeAppearanceModel() {
        return this.f14715d.y();
    }

    @Deprecated
    public int getStrokeColor() {
        return this.f14715d.z();
    }

    public ColorStateList getStrokeColorStateList() {
        return this.f14715d.A();
    }

    public int getStrokeWidth() {
        return this.f14715d.B();
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f14717i;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.f14715d.f0();
        h.f(this, this.f14715d.l());
    }

    @Override // android.view.ViewGroup, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 3);
        if (c()) {
            View.mergeDrawableStates(onCreateDrawableState, f14711p);
        }
        if (isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, f14712q);
        }
        if (d()) {
            View.mergeDrawableStates(onCreateDrawableState, f14713r);
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
        this.f14715d.J(getMeasuredWidth(), getMeasuredHeight());
    }

    @Override // android.view.View
    public void setBackground(Drawable drawable) {
        setBackgroundDrawable(drawable);
    }

    @Override // android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        if (this.f14716e) {
            if (!this.f14715d.E()) {
                Log.i("MaterialCardView", "Setting a custom background is not supported.");
                this.f14715d.K(true);
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
        this.f14715d.L(ColorStateList.valueOf(i10));
    }

    @Override // androidx.cardview.widget.CardView
    public void setCardElevation(float f10) {
        super.setCardElevation(f10);
        this.f14715d.h0();
    }

    public void setCardForegroundColor(ColorStateList colorStateList) {
        this.f14715d.M(colorStateList);
    }

    public void setCheckable(boolean z10) {
        this.f14715d.N(z10);
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        if (this.f14717i != z10) {
            toggle();
        }
    }

    public void setCheckedIcon(Drawable drawable) {
        this.f14715d.Q(drawable);
    }

    public void setCheckedIconGravity(int i10) {
        if (this.f14715d.p() != i10) {
            this.f14715d.R(i10);
        }
    }

    public void setCheckedIconMargin(int i10) {
        this.f14715d.S(i10);
    }

    public void setCheckedIconMarginResource(int i10) {
        if (i10 != -1) {
            this.f14715d.S(getResources().getDimensionPixelSize(i10));
        }
    }

    public void setCheckedIconResource(int i10) {
        this.f14715d.Q(g.a.b(getContext(), i10));
    }

    public void setCheckedIconSize(int i10) {
        this.f14715d.T(i10);
    }

    public void setCheckedIconSizeResource(int i10) {
        if (i10 != 0) {
            this.f14715d.T(getResources().getDimensionPixelSize(i10));
        }
    }

    public void setCheckedIconTint(ColorStateList colorStateList) {
        this.f14715d.U(colorStateList);
    }

    @Override // android.view.View
    public void setClickable(boolean z10) {
        super.setClickable(z10);
        b bVar = this.f14715d;
        if (bVar != null) {
            bVar.f0();
        }
    }

    @Override // androidx.cardview.widget.CardView
    public void setContentPadding(int i10, int i11, int i12, int i13) {
        this.f14715d.b0(i10, i11, i12, i13);
    }

    public void setDragged(boolean z10) {
        if (this.f14718o != z10) {
            this.f14718o = z10;
            refreshDrawableState();
            b();
            invalidate();
        }
    }

    @Override // androidx.cardview.widget.CardView
    public void setMaxCardElevation(float f10) {
        super.setMaxCardElevation(f10);
        this.f14715d.j0();
    }

    public void setOnCheckedChangeListener(a aVar) {
    }

    @Override // androidx.cardview.widget.CardView
    public void setPreventCornerOverlap(boolean z10) {
        super.setPreventCornerOverlap(z10);
        this.f14715d.j0();
        this.f14715d.g0();
    }

    public void setProgress(float f10) {
        this.f14715d.W(f10);
    }

    @Override // androidx.cardview.widget.CardView
    public void setRadius(float f10) {
        super.setRadius(f10);
        this.f14715d.V(f10);
    }

    public void setRippleColor(ColorStateList colorStateList) {
        this.f14715d.X(colorStateList);
    }

    public void setRippleColorResource(int i10) {
        this.f14715d.X(g.a.a(getContext(), i10));
    }

    @Override // ph.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        setClipToOutline(kVar.u(getBoundsAsRectF()));
        this.f14715d.Y(kVar);
    }

    public void setStrokeColor(int i10) {
        setStrokeColor(ColorStateList.valueOf(i10));
    }

    public void setStrokeWidth(int i10) {
        this.f14715d.a0(i10);
        invalidate();
    }

    @Override // androidx.cardview.widget.CardView
    public void setUseCompatPadding(boolean z10) {
        super.setUseCompatPadding(z10);
        this.f14715d.j0();
        this.f14715d.g0();
    }

    @Override // android.widget.Checkable
    public void toggle() {
        if (c() && isEnabled()) {
            this.f14717i = !this.f14717i;
            refreshDrawableState();
            b();
            this.f14715d.P(this.f14717i, true);
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
            int r4 = com.google.android.material.card.MaterialCardView.f14714s
            android.content.Context r7 = sh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            r7 = 0
            r6.f14717i = r7
            r6.f14718o = r7
            r0 = 1
            r6.f14716e = r0
            android.content.Context r0 = r6.getContext()
            int[] r2 = zg.k.J3
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r7 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            com.google.android.material.card.b r8 = new com.google.android.material.card.b
            r8.<init>(r6, r1, r3, r4)
            r6.f14715d = r8
            android.content.res.ColorStateList r9 = super.getCardBackgroundColor()
            r8.L(r9)
            int r9 = super.getContentPaddingLeft()
            int r0 = super.getContentPaddingTop()
            int r1 = super.getContentPaddingRight()
            int r2 = super.getContentPaddingBottom()
            r8.b0(r9, r0, r1, r2)
            r8.I(r7)
            r7.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.card.MaterialCardView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    @Override // androidx.cardview.widget.CardView
    public void setCardBackgroundColor(ColorStateList colorStateList) {
        this.f14715d.L(colorStateList);
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f14715d.Z(colorStateList);
        invalidate();
    }
}
