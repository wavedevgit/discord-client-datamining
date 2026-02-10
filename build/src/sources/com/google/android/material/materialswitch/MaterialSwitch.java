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
import bh.j;
import com.google.android.material.drawable.c;
import s1.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialSwitch extends SwitchCompat {

    /* renamed from: y  reason: collision with root package name */
    private static final int f15328y = j.f6795k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15329z = {b.f6628f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15330d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15331e;

    /* renamed from: i  reason: collision with root package name */
    private int f15332i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15333o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15334p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15335q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15336r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15337s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15338t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15339u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15340v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15341w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15342x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f15330d = c.c(this.f15330d, this.f15335q, getThumbTintMode());
        this.f15331e = c.c(this.f15331e, this.f15336r, this.f15337s);
        r();
        Drawable drawable = this.f15330d;
        Drawable drawable2 = this.f15331e;
        int i10 = this.f15332i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15333o = c.c(this.f15333o, this.f15338t, getTrackTintMode());
        this.f15334p = c.c(this.f15334p, this.f15339u, this.f15340v);
        r();
        Drawable drawable = this.f15333o;
        if (drawable != null && this.f15334p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15333o, this.f15334p});
        } else if (drawable == null) {
            drawable = this.f15334p;
        }
        if (drawable != null) {
            setSwitchMinWidth(drawable.getIntrinsicWidth());
        }
        super.setTrackDrawable(drawable);
    }

    private static void q(Drawable drawable, ColorStateList colorStateList, int[] iArr, int[] iArr2, float f10) {
        if (drawable != null && colorStateList != null) {
            a.n(drawable, r1.c.c(colorStateList.getColorForState(iArr, 0), colorStateList.getColorForState(iArr2, 0), f10));
        }
    }

    private void r() {
        if (this.f15335q != null || this.f15336r != null || this.f15338t != null || this.f15339u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15335q;
            if (colorStateList != null) {
                q(this.f15330d, colorStateList, this.f15341w, this.f15342x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15336r;
            if (colorStateList2 != null) {
                q(this.f15331e, colorStateList2, this.f15341w, this.f15342x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15338t;
            if (colorStateList3 != null) {
                q(this.f15333o, colorStateList3, this.f15341w, this.f15342x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15339u;
            if (colorStateList4 != null) {
                q(this.f15334p, colorStateList4, this.f15341w, this.f15342x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15330d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15331e;
    }

    public int getThumbIconSize() {
        return this.f15332i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15336r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15337s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15335q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15334p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15339u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15340v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15333o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15338t;
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
        if (this.f15331e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15329z);
        }
        this.f15341w = c.j(onCreateDrawableState);
        this.f15342x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15330d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15331e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15332i != i10) {
            this.f15332i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15336r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15337s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15335q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15334p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15339u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15340v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15333o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15338t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15328y
            android.content.Context r8 = uh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15332i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15330d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15335q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15333o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15338t = r2
            super.setTrackTintList(r1)
            int[] r2 = bh.k.f6981r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = bh.k.f6990s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15331e = r10
            int r10 = bh.k.f6999t4
            int r10 = r9.f(r10, r8)
            r7.f15332i = r10
            int r10 = bh.k.f7008u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15336r = r10
            int r10 = bh.k.f7017v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f15337s = r10
            int r10 = bh.k.f7026w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15334p = r10
            int r10 = bh.k.f7035x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15339u = r10
            int r10 = bh.k.f7044y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f15340v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
