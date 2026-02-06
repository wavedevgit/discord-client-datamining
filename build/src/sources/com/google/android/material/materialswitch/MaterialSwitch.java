package com.google.android.material.materialswitch;

import ah.b;
import ah.j;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.util.AttributeSet;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.SwitchCompat;
import com.google.android.material.drawable.c;
import s1.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialSwitch extends SwitchCompat {

    /* renamed from: y  reason: collision with root package name */
    private static final int f15188y = j.f807k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15189z = {b.f640f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15190d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15191e;

    /* renamed from: i  reason: collision with root package name */
    private int f15192i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15193o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15194p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15195q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15196r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15197s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15198t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15199u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15200v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15201w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15202x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f15190d = c.c(this.f15190d, this.f15195q, getThumbTintMode());
        this.f15191e = c.c(this.f15191e, this.f15196r, this.f15197s);
        r();
        Drawable drawable = this.f15190d;
        Drawable drawable2 = this.f15191e;
        int i10 = this.f15192i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15193o = c.c(this.f15193o, this.f15198t, getTrackTintMode());
        this.f15194p = c.c(this.f15194p, this.f15199u, this.f15200v);
        r();
        Drawable drawable = this.f15193o;
        if (drawable != null && this.f15194p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15193o, this.f15194p});
        } else if (drawable == null) {
            drawable = this.f15194p;
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
        if (this.f15195q != null || this.f15196r != null || this.f15198t != null || this.f15199u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15195q;
            if (colorStateList != null) {
                q(this.f15190d, colorStateList, this.f15201w, this.f15202x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15196r;
            if (colorStateList2 != null) {
                q(this.f15191e, colorStateList2, this.f15201w, this.f15202x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15198t;
            if (colorStateList3 != null) {
                q(this.f15193o, colorStateList3, this.f15201w, this.f15202x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15199u;
            if (colorStateList4 != null) {
                q(this.f15194p, colorStateList4, this.f15201w, this.f15202x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15190d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15191e;
    }

    public int getThumbIconSize() {
        return this.f15192i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15196r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15197s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15195q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15194p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15199u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15200v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15193o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15198t;
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
        if (this.f15191e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15189z);
        }
        this.f15201w = c.j(onCreateDrawableState);
        this.f15202x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15190d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15191e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15192i != i10) {
            this.f15192i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15196r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15197s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15195q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15194p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15199u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15200v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15193o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15198t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15188y
            android.content.Context r8 = th.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15192i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15190d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15195q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15193o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15198t = r2
            super.setTrackTintList(r1)
            int[] r2 = ah.k.f993r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = ah.k.f1002s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15191e = r10
            int r10 = ah.k.f1011t4
            int r10 = r9.f(r10, r8)
            r7.f15192i = r10
            int r10 = ah.k.f1020u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15196r = r10
            int r10 = ah.k.f1029v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f15197s = r10
            int r10 = ah.k.f1038w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15194p = r10
            int r10 = ah.k.f1047x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15199u = r10
            int r10 = ah.k.f1056y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f15200v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
