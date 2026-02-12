package com.google.android.material.materialswitch;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.util.AttributeSet;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.SwitchCompat;
import bh.b;
import bh.k;
import com.google.android.material.drawable.c;
import g.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialSwitch extends SwitchCompat {

    /* renamed from: y  reason: collision with root package name */
    private static final int f15941y = k.f6940o;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15942z = {b.f6746l0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15943d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15944e;

    /* renamed from: i  reason: collision with root package name */
    private int f15945i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15946o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15947p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15948q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15949r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15950s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15951t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15952u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15953v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15954w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15955x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.G);
    }

    private void o() {
        this.f15943d = c.c(this.f15943d, this.f15948q, getThumbTintMode());
        this.f15944e = c.c(this.f15944e, this.f15949r, this.f15950s);
        r();
        Drawable drawable = this.f15943d;
        Drawable drawable2 = this.f15944e;
        int i10 = this.f15945i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15946o = c.c(this.f15946o, this.f15951t, getTrackTintMode());
        this.f15947p = c.c(this.f15947p, this.f15952u, this.f15953v);
        r();
        Drawable drawable = this.f15946o;
        if (drawable != null && this.f15947p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15946o, this.f15947p});
        } else if (drawable == null) {
            drawable = this.f15947p;
        }
        if (drawable != null) {
            setSwitchMinWidth(drawable.getIntrinsicWidth());
        }
        super.setTrackDrawable(drawable);
    }

    private static void q(Drawable drawable, ColorStateList colorStateList, int[] iArr, int[] iArr2, float f10) {
        if (drawable != null && colorStateList != null) {
            drawable.setTint(r1.c.c(colorStateList.getColorForState(iArr, 0), colorStateList.getColorForState(iArr2, 0), f10));
        }
    }

    private void r() {
        if (this.f15948q != null || this.f15949r != null || this.f15951t != null || this.f15952u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15948q;
            if (colorStateList != null) {
                q(this.f15943d, colorStateList, this.f15954w, this.f15955x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15949r;
            if (colorStateList2 != null) {
                q(this.f15944e, colorStateList2, this.f15954w, this.f15955x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15951t;
            if (colorStateList3 != null) {
                q(this.f15946o, colorStateList3, this.f15954w, this.f15955x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15952u;
            if (colorStateList4 != null) {
                q(this.f15947p, colorStateList4, this.f15954w, this.f15955x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15943d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15944e;
    }

    public int getThumbIconSize() {
        return this.f15945i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15949r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15950s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15948q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15947p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15952u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15953v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15946o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15951t;
    }

    @Override // android.view.View
    public void invalidate() {
        r();
        super.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.SwitchCompat, android.widget.CompoundButton, android.widget.TextView, android.view.View
    public int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 1);
        if (this.f15944e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15942z);
        }
        this.f15954w = c.j(onCreateDrawableState);
        this.f15955x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15943d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15944e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15945i != i10) {
            this.f15945i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15949r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15950s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15948q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15947p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15952u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15953v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15946o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15951t = colorStateList;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintMode(PorterDuff.Mode mode) {
        super.setTrackTintMode(mode);
        p();
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialSwitch(android.content.Context r8, android.util.AttributeSet r9, int r10) {
        /*
            r7 = this;
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15941y
            android.content.Context r8 = wh.a.d(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15945i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15943d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15948q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15946o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15951t = r2
            super.setTrackTintList(r1)
            int[] r2 = bh.l.f7188y4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.m.j(r0, r1, r2, r3, r4, r5)
            int r10 = bh.l.f7197z4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15944e = r10
            int r10 = bh.l.A4
            int r10 = r9.f(r10, r8)
            r7.f15945i = r10
            int r10 = bh.l.B4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15949r = r10
            int r10 = bh.l.C4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.p.i(r10, r0)
            r7.f15950s = r10
            int r10 = bh.l.D4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15947p = r10
            int r10 = bh.l.E4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15952u = r10
            int r10 = bh.l.F4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.p.i(r8, r0)
            r7.f15953v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
