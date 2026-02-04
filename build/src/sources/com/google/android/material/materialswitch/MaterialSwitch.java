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
    private static final int f14814y = j.f54254k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f14815z = {b.f54087f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f14816d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f14817e;

    /* renamed from: i  reason: collision with root package name */
    private int f14818i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f14819o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f14820p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f14821q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f14822r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f14823s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f14824t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f14825u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f14826v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f14827w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f14828x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f14816d = c.c(this.f14816d, this.f14821q, getThumbTintMode());
        this.f14817e = c.c(this.f14817e, this.f14822r, this.f14823s);
        r();
        Drawable drawable = this.f14816d;
        Drawable drawable2 = this.f14817e;
        int i10 = this.f14818i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f14819o = c.c(this.f14819o, this.f14824t, getTrackTintMode());
        this.f14820p = c.c(this.f14820p, this.f14825u, this.f14826v);
        r();
        Drawable drawable = this.f14819o;
        if (drawable != null && this.f14820p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f14819o, this.f14820p});
        } else if (drawable == null) {
            drawable = this.f14820p;
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
        if (this.f14821q != null || this.f14822r != null || this.f14824t != null || this.f14825u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f14821q;
            if (colorStateList != null) {
                q(this.f14816d, colorStateList, this.f14827w, this.f14828x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f14822r;
            if (colorStateList2 != null) {
                q(this.f14817e, colorStateList2, this.f14827w, this.f14828x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f14824t;
            if (colorStateList3 != null) {
                q(this.f14819o, colorStateList3, this.f14827w, this.f14828x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f14825u;
            if (colorStateList4 != null) {
                q(this.f14820p, colorStateList4, this.f14827w, this.f14828x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f14816d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f14817e;
    }

    public int getThumbIconSize() {
        return this.f14818i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f14822r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f14823s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f14821q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f14820p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f14825u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f14826v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f14819o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f14824t;
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
        if (this.f14817e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f14815z);
        }
        this.f14827w = c.j(onCreateDrawableState);
        this.f14828x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f14816d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f14817e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f14818i != i10) {
            this.f14818i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f14822r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f14823s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f14821q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f14820p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f14825u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f14826v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f14819o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f14824t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f14814y
            android.content.Context r8 = rh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f14818i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f14816d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f14821q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f14819o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f14824t = r2
            super.setTrackTintList(r1)
            int[] r2 = yg.k.f54440r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = yg.k.f54449s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f14817e = r10
            int r10 = yg.k.f54458t4
            int r10 = r9.f(r10, r8)
            r7.f14818i = r10
            int r10 = yg.k.f54467u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f14822r = r10
            int r10 = yg.k.f54476v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f14823s = r10
            int r10 = yg.k.f54485w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f14820p = r10
            int r10 = yg.k.f54494x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f14825u = r10
            int r10 = yg.k.f54503y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f14826v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
