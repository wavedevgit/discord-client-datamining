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
    private static final int f15940y = k.f6940o;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15941z = {b.f6746l0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15942d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15943e;

    /* renamed from: i  reason: collision with root package name */
    private int f15944i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15945o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15946p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15947q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15948r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15949s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15950t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15951u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15952v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15953w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15954x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.G);
    }

    private void o() {
        this.f15942d = c.c(this.f15942d, this.f15947q, getThumbTintMode());
        this.f15943e = c.c(this.f15943e, this.f15948r, this.f15949s);
        r();
        Drawable drawable = this.f15942d;
        Drawable drawable2 = this.f15943e;
        int i10 = this.f15944i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15945o = c.c(this.f15945o, this.f15950t, getTrackTintMode());
        this.f15946p = c.c(this.f15946p, this.f15951u, this.f15952v);
        r();
        Drawable drawable = this.f15945o;
        if (drawable != null && this.f15946p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15945o, this.f15946p});
        } else if (drawable == null) {
            drawable = this.f15946p;
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
        if (this.f15947q != null || this.f15948r != null || this.f15950t != null || this.f15951u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15947q;
            if (colorStateList != null) {
                q(this.f15942d, colorStateList, this.f15953w, this.f15954x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15948r;
            if (colorStateList2 != null) {
                q(this.f15943e, colorStateList2, this.f15953w, this.f15954x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15950t;
            if (colorStateList3 != null) {
                q(this.f15945o, colorStateList3, this.f15953w, this.f15954x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15951u;
            if (colorStateList4 != null) {
                q(this.f15946p, colorStateList4, this.f15953w, this.f15954x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15942d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15943e;
    }

    public int getThumbIconSize() {
        return this.f15944i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15948r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15949s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15947q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15946p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15951u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15952v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15945o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15950t;
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
        if (this.f15943e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15941z);
        }
        this.f15953w = c.j(onCreateDrawableState);
        this.f15954x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15942d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15943e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15944i != i10) {
            this.f15944i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15948r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15949s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15947q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15946p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15951u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15952v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15945o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15950t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15940y
            android.content.Context r8 = wh.a.d(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15944i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15942d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15947q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15945o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15950t = r2
            super.setTrackTintList(r1)
            int[] r2 = bh.l.f7188y4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.m.j(r0, r1, r2, r3, r4, r5)
            int r10 = bh.l.f7197z4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15943e = r10
            int r10 = bh.l.A4
            int r10 = r9.f(r10, r8)
            r7.f15944i = r10
            int r10 = bh.l.B4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15948r = r10
            int r10 = bh.l.C4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.p.i(r10, r0)
            r7.f15949s = r10
            int r10 = bh.l.D4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15946p = r10
            int r10 = bh.l.E4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15951u = r10
            int r10 = bh.l.F4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.p.i(r8, r0)
            r7.f15952v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
