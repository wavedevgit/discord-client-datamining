package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.RippleDrawable;
import android.widget.TextView;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f15894a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f15895b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorStateList f15896c;

    /* renamed from: d  reason: collision with root package name */
    private final ColorStateList f15897d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15898e;

    /* renamed from: f  reason: collision with root package name */
    private final oh.k f15899f;

    private b(ColorStateList colorStateList, ColorStateList colorStateList2, ColorStateList colorStateList3, int i10, oh.k kVar, Rect rect) {
        b2.e.d(rect.left);
        b2.e.d(rect.top);
        b2.e.d(rect.right);
        b2.e.d(rect.bottom);
        this.f15894a = rect;
        this.f15895b = colorStateList2;
        this.f15896c = colorStateList;
        this.f15897d = colorStateList3;
        this.f15898e = i10;
        this.f15899f = kVar;
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, yg.k.f54756y3);
        Rect rect = new Rect(obtainStyledAttributes.getDimensionPixelOffset(yg.k.f54765z3, 0), obtainStyledAttributes.getDimensionPixelOffset(yg.k.B3, 0), obtainStyledAttributes.getDimensionPixelOffset(yg.k.A3, 0), obtainStyledAttributes.getDimensionPixelOffset(yg.k.C3, 0));
        ColorStateList a10 = lh.c.a(context, obtainStyledAttributes, yg.k.D3);
        ColorStateList a11 = lh.c.a(context, obtainStyledAttributes, yg.k.I3);
        ColorStateList a12 = lh.c.a(context, obtainStyledAttributes, yg.k.G3);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(yg.k.H3, 0);
        oh.k m10 = oh.k.b(context, obtainStyledAttributes.getResourceId(yg.k.E3, 0), obtainStyledAttributes.getResourceId(yg.k.F3, 0)).m();
        obtainStyledAttributes.recycle();
        return new b(a10, a11, a12, dimensionPixelSize, m10, rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(TextView textView) {
        c(textView, null, null);
    }

    void c(TextView textView, ColorStateList colorStateList, ColorStateList colorStateList2) {
        oh.g gVar = new oh.g();
        oh.g gVar2 = new oh.g();
        gVar.setShapeAppearanceModel(this.f15899f);
        gVar2.setShapeAppearanceModel(this.f15899f);
        if (colorStateList == null) {
            colorStateList = this.f15896c;
        }
        gVar.X(colorStateList);
        gVar.e0(this.f15898e, this.f15897d);
        if (colorStateList2 == null) {
            colorStateList2 = this.f15895b;
        }
        textView.setTextColor(colorStateList2);
        RippleDrawable rippleDrawable = new RippleDrawable(this.f15895b.withAlpha(30), gVar, gVar2);
        Rect rect = this.f15894a;
        h0.r0(textView, new InsetDrawable((Drawable) rippleDrawable, rect.left, rect.top, rect.right, rect.bottom));
    }
}
