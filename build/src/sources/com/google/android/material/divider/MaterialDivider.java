package com.google.android.material.divider;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.core.content.a;
import androidx.core.view.h0;
import bh.b;
import bh.j;
import rh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialDivider extends View {

    /* renamed from: q  reason: collision with root package name */
    private static final int f15112q = j.f6807w;

    /* renamed from: d  reason: collision with root package name */
    private final g f15113d;

    /* renamed from: e  reason: collision with root package name */
    private int f15114e;

    /* renamed from: i  reason: collision with root package name */
    private int f15115i;

    /* renamed from: o  reason: collision with root package name */
    private int f15116o;

    /* renamed from: p  reason: collision with root package name */
    private int f15117p;

    public MaterialDivider(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.C);
    }

    public int getDividerColor() {
        return this.f15115i;
    }

    public int getDividerInsetEnd() {
        return this.f15117p;
    }

    public int getDividerInsetStart() {
        return this.f15116o;
    }

    public int getDividerThickness() {
        return this.f15114e;
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int width;
        int i11;
        super.onDraw(canvas);
        boolean z10 = true;
        if (h0.z(this) != 1) {
            z10 = false;
        }
        if (z10) {
            i10 = this.f15117p;
        } else {
            i10 = this.f15116o;
        }
        if (z10) {
            width = getWidth();
            i11 = this.f15116o;
        } else {
            width = getWidth();
            i11 = this.f15117p;
        }
        this.f15113d.setBounds(i10, 0, width - i11, getBottom() - getTop());
        this.f15113d.draw(canvas);
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        int mode = View.MeasureSpec.getMode(i11);
        int measuredHeight = getMeasuredHeight();
        if (mode != Integer.MIN_VALUE && mode != 0) {
            return;
        }
        int i12 = this.f15114e;
        if (i12 > 0 && measuredHeight != i12) {
            measuredHeight = i12;
        }
        setMeasuredDimension(getMeasuredWidth(), measuredHeight);
    }

    public void setDividerColor(int i10) {
        if (this.f15115i != i10) {
            this.f15115i = i10;
            this.f15113d.X(ColorStateList.valueOf(i10));
            invalidate();
        }
    }

    public void setDividerColorResource(int i10) {
        setDividerColor(a.c(getContext(), i10));
    }

    public void setDividerInsetEnd(int i10) {
        this.f15117p = i10;
    }

    public void setDividerInsetEndResource(int i10) {
        setDividerInsetEnd(getContext().getResources().getDimensionPixelOffset(i10));
    }

    public void setDividerInsetStart(int i10) {
        this.f15116o = i10;
    }

    public void setDividerInsetStartResource(int i10) {
        setDividerInsetStart(getContext().getResources().getDimensionPixelOffset(i10));
    }

    public void setDividerThickness(int i10) {
        if (this.f15114e != i10) {
            this.f15114e = i10;
            requestLayout();
        }
    }

    public void setDividerThicknessResource(int i10) {
        setDividerThickness(getContext().getResources().getDimensionPixelSize(i10));
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialDivider(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.divider.MaterialDivider.f15112q
            android.content.Context r7 = uh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.content.Context r0 = r6.getContext()
            rh.g r7 = new rh.g
            r7.<init>()
            r6.f15113d = r7
            int[] r2 = bh.k.f6876g4
            r7 = 0
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = bh.k.f6916k4
            android.content.res.Resources r1 = r6.getResources()
            int r2 = bh.d.f6693w
            int r1 = r1.getDimensionPixelSize(r2)
            int r9 = r8.getDimensionPixelSize(r9, r1)
            r6.f15114e = r9
            int r9 = bh.k.f6906j4
            int r9 = r8.getDimensionPixelOffset(r9, r7)
            r6.f15116o = r9
            int r9 = bh.k.f6896i4
            int r7 = r8.getDimensionPixelOffset(r9, r7)
            r6.f15117p = r7
            int r7 = bh.k.f6886h4
            android.content.res.ColorStateList r7 = oh.c.a(r0, r8, r7)
            int r7 = r7.getDefaultColor()
            r6.setDividerColor(r7)
            r8.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.divider.MaterialDivider.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
