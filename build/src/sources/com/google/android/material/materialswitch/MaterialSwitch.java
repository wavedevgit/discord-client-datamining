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
import zg.b;
import zg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialSwitch extends SwitchCompat {

    /* renamed from: y  reason: collision with root package name */
    private static final int f15208y = j.f55712k;

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f15209z = {b.f55545f0};

    /* renamed from: d  reason: collision with root package name */
    private Drawable f15210d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f15211e;

    /* renamed from: i  reason: collision with root package name */
    private int f15212i;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15213o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15214p;

    /* renamed from: q  reason: collision with root package name */
    private ColorStateList f15215q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15216r;

    /* renamed from: s  reason: collision with root package name */
    private PorterDuff.Mode f15217s;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f15218t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f15219u;

    /* renamed from: v  reason: collision with root package name */
    private PorterDuff.Mode f15220v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f15221w;

    /* renamed from: x  reason: collision with root package name */
    private int[] f15222x;

    public MaterialSwitch(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.D);
    }

    private void o() {
        this.f15210d = c.c(this.f15210d, this.f15215q, getThumbTintMode());
        this.f15211e = c.c(this.f15211e, this.f15216r, this.f15217s);
        r();
        Drawable drawable = this.f15210d;
        Drawable drawable2 = this.f15211e;
        int i10 = this.f15212i;
        super.setThumbDrawable(c.b(drawable, drawable2, i10, i10));
        refreshDrawableState();
    }

    private void p() {
        this.f15213o = c.c(this.f15213o, this.f15218t, getTrackTintMode());
        this.f15214p = c.c(this.f15214p, this.f15219u, this.f15220v);
        r();
        Drawable drawable = this.f15213o;
        if (drawable != null && this.f15214p != null) {
            drawable = new LayerDrawable(new Drawable[]{this.f15213o, this.f15214p});
        } else if (drawable == null) {
            drawable = this.f15214p;
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
        if (this.f15215q != null || this.f15216r != null || this.f15218t != null || this.f15219u != null) {
            float thumbPosition = getThumbPosition();
            ColorStateList colorStateList = this.f15215q;
            if (colorStateList != null) {
                q(this.f15210d, colorStateList, this.f15221w, this.f15222x, thumbPosition);
            }
            ColorStateList colorStateList2 = this.f15216r;
            if (colorStateList2 != null) {
                q(this.f15211e, colorStateList2, this.f15221w, this.f15222x, thumbPosition);
            }
            ColorStateList colorStateList3 = this.f15218t;
            if (colorStateList3 != null) {
                q(this.f15213o, colorStateList3, this.f15221w, this.f15222x, thumbPosition);
            }
            ColorStateList colorStateList4 = this.f15219u;
            if (colorStateList4 != null) {
                q(this.f15214p, colorStateList4, this.f15221w, this.f15222x, thumbPosition);
            }
        }
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getThumbDrawable() {
        return this.f15210d;
    }

    public Drawable getThumbIconDrawable() {
        return this.f15211e;
    }

    public int getThumbIconSize() {
        return this.f15212i;
    }

    public ColorStateList getThumbIconTintList() {
        return this.f15216r;
    }

    @NonNull
    public PorterDuff.Mode getThumbIconTintMode() {
        return this.f15217s;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getThumbTintList() {
        return this.f15215q;
    }

    public Drawable getTrackDecorationDrawable() {
        return this.f15214p;
    }

    public ColorStateList getTrackDecorationTintList() {
        return this.f15219u;
    }

    @NonNull
    public PorterDuff.Mode getTrackDecorationTintMode() {
        return this.f15220v;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public Drawable getTrackDrawable() {
        return this.f15213o;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public ColorStateList getTrackTintList() {
        return this.f15218t;
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
        if (this.f15211e != null) {
            View.mergeDrawableStates(onCreateDrawableState, f15209z);
        }
        this.f15221w = c.j(onCreateDrawableState);
        this.f15222x = c.f(onCreateDrawableState);
        return onCreateDrawableState;
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbDrawable(Drawable drawable) {
        this.f15210d = drawable;
        o();
    }

    public void setThumbIconDrawable(Drawable drawable) {
        this.f15211e = drawable;
        o();
    }

    public void setThumbIconResource(int i10) {
        setThumbIconDrawable(g.a.b(getContext(), i10));
    }

    public void setThumbIconSize(int i10) {
        if (this.f15212i != i10) {
            this.f15212i = i10;
            o();
        }
    }

    public void setThumbIconTintList(ColorStateList colorStateList) {
        this.f15216r = colorStateList;
        o();
    }

    public void setThumbIconTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15217s = mode;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintList(ColorStateList colorStateList) {
        this.f15215q = colorStateList;
        o();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setThumbTintMode(PorterDuff.Mode mode) {
        super.setThumbTintMode(mode);
        o();
    }

    public void setTrackDecorationDrawable(Drawable drawable) {
        this.f15214p = drawable;
        p();
    }

    public void setTrackDecorationResource(int i10) {
        setTrackDecorationDrawable(g.a.b(getContext(), i10));
    }

    public void setTrackDecorationTintList(ColorStateList colorStateList) {
        this.f15219u = colorStateList;
        p();
    }

    public void setTrackDecorationTintMode(@NonNull PorterDuff.Mode mode) {
        this.f15220v = mode;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackDrawable(Drawable drawable) {
        this.f15213o = drawable;
        p();
    }

    @Override // androidx.appcompat.widget.SwitchCompat
    public void setTrackTintList(ColorStateList colorStateList) {
        this.f15218t = colorStateList;
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
            int r4 = com.google.android.material.materialswitch.MaterialSwitch.f15208y
            android.content.Context r8 = sh.a.c(r8, r9, r10, r4)
            r7.<init>(r8, r9, r10)
            r8 = -1
            r7.f15212i = r8
            android.content.Context r0 = r7.getContext()
            android.graphics.drawable.Drawable r1 = super.getThumbDrawable()
            r7.f15210d = r1
            android.content.res.ColorStateList r1 = super.getThumbTintList()
            r7.f15215q = r1
            r1 = 0
            super.setThumbTintList(r1)
            android.graphics.drawable.Drawable r2 = super.getTrackDrawable()
            r7.f15213o = r2
            android.content.res.ColorStateList r2 = super.getTrackTintList()
            r7.f15218t = r2
            super.setTrackTintList(r1)
            int[] r2 = zg.k.f55898r4
            r6 = 0
            int[] r5 = new int[r6]
            r1 = r9
            r3 = r10
            androidx.appcompat.widget.v0 r9 = com.google.android.material.internal.l.j(r0, r1, r2, r3, r4, r5)
            int r10 = zg.k.f55907s4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15211e = r10
            int r10 = zg.k.f55916t4
            int r10 = r9.f(r10, r8)
            r7.f15212i = r10
            int r10 = zg.k.f55925u4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15216r = r10
            int r10 = zg.k.f55934v4
            int r10 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.SRC_IN
            android.graphics.PorterDuff$Mode r10 = com.google.android.material.internal.o.i(r10, r0)
            r7.f15217s = r10
            int r10 = zg.k.f55943w4
            android.graphics.drawable.Drawable r10 = r9.g(r10)
            r7.f15214p = r10
            int r10 = zg.k.f55952x4
            android.content.res.ColorStateList r10 = r9.c(r10)
            r7.f15219u = r10
            int r10 = zg.k.f55961y4
            int r8 = r9.k(r10, r8)
            android.graphics.PorterDuff$Mode r8 = com.google.android.material.internal.o.i(r8, r0)
            r7.f15220v = r8
            r9.x()
            r7.setEnforceSwitchWidth(r6)
            r7.o()
            r7.p()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.materialswitch.MaterialSwitch.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
