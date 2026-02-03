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
    private static final int f15846y = j.f54499k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15847z = {b.f54332f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15848d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15849e;

    /* renamed from: i  reason: collision with root package name */
    private int f15850i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15851o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15852p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15853q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15854r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15855s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15856t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15857u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15858v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15859w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15860x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f15848d = c.c(this.f15848d, this.f15853q, getThumbTintMode());
        this.f15849e = c.c(this.f15849e, this.f15854r, this.f15855s);
        r();
        Drawable drawable = this.f15848d;
        Drawable drawable2 = this.f15849e;
        int i10 = this.f15850i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15851o = c.c(this.f15851o, this.f15856t, getTrackTintMode());
        this.f15852p = c.c(this.f15852p, this.f15857u, this.f15858v);
        r();
        Drawable drawable = this.f15851o;
        if (drawable != null && this.f15852p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15851o, this.f15852p});
        } else if (drawable == null) {
            drawable = this.f15852p;
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
        if (this.f15853q != null || this.f15854r != null || this.f15856t != null || this.f15857u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15853q;
            if (colorStateList != null) {
                q(this.f15848d, colorStateList, this.f15859w, this.f15860x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15854r;
            if (colorStateList2 != null) {
                q(this.f15849e, colorStateList2, this.f15859w, this.f15860x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15856t;
            if (colorStateList3 != null) {
                q(this.f15851o, colorStateList3, this.f15859w, this.f15860x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15857u;
            if (colorStateList4 != null) {
                q(this.f15852p, colorStateList4, this.f15859w, this.f15860x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15848d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15849e;
    }

    public int getThumbIconSize() {
        return this.f15850i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15854r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15855s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15853q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15852p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15857u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15858v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15851o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15856t;
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
        if (this.f15849e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15847z);
        }
        this.f15859w = c.j(onCreateDrawableState);
        this.f15860x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15848d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15849e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15850i != i10) {
            this.f15850i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15854r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15855s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15853q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15852p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15857u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15858v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15851o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15856t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15846y
            android.content.Context r8 = rh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15850i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15848d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15853q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15851o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15856t = r2
            super.setTrackTintList(r1)
            int[] r2 = yg.k.f54685r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = yg.k.f54694s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15849e = r10
            int r10 = yg.k.f54703t4
            int r10 = r9.f(r10, r8)
            r7.f15850i = r10
            int r10 = yg.k.f54712u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15854r = r10
            int r10 = yg.k.f54721v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f15855s = r10
            int r10 = yg.k.f54730w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15852p = r10
            int r10 = yg.k.f54739x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15857u = r10
            int r10 = yg.k.f54748y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f15858v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
