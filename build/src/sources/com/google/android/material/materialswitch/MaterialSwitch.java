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
import com.google.android.material.drawable.c;
import s1.a;
import yg.b;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialSwitch extends SwitchCompat {

    /* renamed from: y  reason: collision with root package name */
    private static final int f16217y = j.f54524k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f16218z = {b.f54357f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f16219d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f16220e;

    /* renamed from: i  reason: collision with root package name */
    private int f16221i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f16222o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f16223p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f16224q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f16225r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f16226s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f16227t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f16228u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f16229v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f16230w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f16231x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f16219d = c.c(this.f16219d, this.f16224q, getThumbTintMode());
        this.f16220e = c.c(this.f16220e, this.f16225r, this.f16226s);
        r();
        Drawable drawable = this.f16219d;
        Drawable drawable2 = this.f16220e;
        int i10 = this.f16221i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f16222o = c.c(this.f16222o, this.f16227t, getTrackTintMode());
        this.f16223p = c.c(this.f16223p, this.f16228u, this.f16229v);
        r();
        Drawable drawable = this.f16222o;
        if (drawable != null && this.f16223p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f16222o, this.f16223p});
        } else if (drawable == null) {
            drawable = this.f16223p;
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
        if (this.f16224q != null || this.f16225r != null || this.f16227t != null || this.f16228u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f16224q;
            if (colorStateList != null) {
                q(this.f16219d, colorStateList, this.f16230w, this.f16231x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f16225r;
            if (colorStateList2 != null) {
                q(this.f16220e, colorStateList2, this.f16230w, this.f16231x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f16227t;
            if (colorStateList3 != null) {
                q(this.f16222o, colorStateList3, this.f16230w, this.f16231x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f16228u;
            if (colorStateList4 != null) {
                q(this.f16223p, colorStateList4, this.f16230w, this.f16231x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f16219d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f16220e;
    }

    public int getThumbIconSize() {
        return this.f16221i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f16225r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f16226s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f16224q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f16223p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f16228u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f16229v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f16222o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f16227t;
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
        if (this.f16220e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f16218z);
        }
        this.f16230w = c.j(onCreateDrawableState);
        this.f16231x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f16219d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f16220e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f16221i != i10) {
            this.f16221i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f16225r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f16226s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f16224q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f16223p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f16228u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f16229v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f16222o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f16227t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f16217y
            android.content.Context r8 = rh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f16221i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f16219d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f16224q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f16222o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f16227t = r2
            super.setTrackTintList(r1)
            int[] r2 = yg.k.f54710r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = yg.k.f54719s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f16220e = r10
            int r10 = yg.k.f54728t4
            int r10 = r9.f(r10, r8)
            r7.f16221i = r10
            int r10 = yg.k.f54737u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f16225r = r10
            int r10 = yg.k.f54746v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f16226s = r10
            int r10 = yg.k.f54755w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f16223p = r10
            int r10 = yg.k.f54764x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f16228u = r10
            int r10 = yg.k.f54773y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f16229v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
