package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.RippleDrawable;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f15623a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f15624b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorStateList f15625c;

    /* renamed from: d  reason: collision with root package name */
    private final ColorStateList f15626d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15627e;

    /* renamed from: f  reason: collision with root package name */
    private final th.l f15628f;

    private b(ColorStateList colorStateList, ColorStateList colorStateList2, ColorStateList colorStateList3, int i10, th.l lVar, Rect rect) {
        b2.e.d(rect.left);
        b2.e.d(rect.top);
        b2.e.d(rect.right);
        b2.e.d(rect.bottom);
        this.f15623a = rect;
        this.f15624b = colorStateList2;
        this.f15625c = colorStateList;
        this.f15626d = colorStateList3;
        this.f15627e = i10;
        this.f15628f = lVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b a(Context context, int i10) {
        boolean z10;
        if (i10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "Cannot create a CalendarItemStyle with a styleResId of 0");
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, bh.l.C3);
        Rect rect = new Rect(obtainStyledAttributes.getDimensionPixelOffset(bh.l.D3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.l.F3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.l.E3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.l.G3, 0));
        ColorStateList a10 = qh.c.a(context, obtainStyledAttributes, bh.l.H3);
        ColorStateList a11 = qh.c.a(context, obtainStyledAttributes, bh.l.M3);
        ColorStateList a12 = qh.c.a(context, obtainStyledAttributes, bh.l.K3);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(bh.l.L3, 0);
        th.l m10 = th.l.b(context, obtainStyledAttributes.getResourceId(bh.l.I3, 0), obtainStyledAttributes.getResourceId(bh.l.J3, 0)).m();
        obtainStyledAttributes.recycle();
        return new b(a10, a11, a12, dimensionPixelSize, m10, rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(TextView textView) {
        c(textView, null, null);
    }

    void c(TextView textView, ColorStateList colorStateList, ColorStateList colorStateList2) {
        th.h hVar = new th.h();
        th.h hVar2 = new th.h();
        hVar.setShapeAppearanceModel(this.f15628f);
        hVar2.setShapeAppearanceModel(this.f15628f);
        if (colorStateList == null) {
            colorStateList = this.f15625c;
        }
        hVar.f0(colorStateList);
        hVar.o0(this.f15627e, this.f15626d);
        if (colorStateList2 == null) {
            colorStateList2 = this.f15624b;
        }
        textView.setTextColor(colorStateList2);
        RippleDrawable rippleDrawable = new RippleDrawable(this.f15624b.withAlpha(30), hVar, hVar2);
        Rect rect = this.f15623a;
        textView.setBackground(new InsetDrawable((Drawable) rippleDrawable, rect.left, rect.top, rect.right, rect.bottom));
    }
}
