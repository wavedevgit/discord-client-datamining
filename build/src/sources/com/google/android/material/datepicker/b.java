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
    private final Rect f15005a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f15006b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorStateList f15007c;

    /* renamed from: d  reason: collision with root package name */
    private final ColorStateList f15008d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15009e;

    /* renamed from: f  reason: collision with root package name */
    private final rh.k f15010f;

    private b(ColorStateList colorStateList, ColorStateList colorStateList2, ColorStateList colorStateList3, int i10, rh.k kVar, Rect rect) {
        b2.e.d(rect.left);
        b2.e.d(rect.top);
        b2.e.d(rect.right);
        b2.e.d(rect.bottom);
        this.f15005a = rect;
        this.f15006b = colorStateList2;
        this.f15007c = colorStateList;
        this.f15008d = colorStateList3;
        this.f15009e = i10;
        this.f15010f = kVar;
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, bh.k.f7043y3);
        Rect rect = new Rect(obtainStyledAttributes.getDimensionPixelOffset(bh.k.f7052z3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.k.B3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.k.A3, 0), obtainStyledAttributes.getDimensionPixelOffset(bh.k.C3, 0));
        ColorStateList a10 = oh.c.a(context, obtainStyledAttributes, bh.k.D3);
        ColorStateList a11 = oh.c.a(context, obtainStyledAttributes, bh.k.I3);
        ColorStateList a12 = oh.c.a(context, obtainStyledAttributes, bh.k.G3);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(bh.k.H3, 0);
        rh.k m10 = rh.k.b(context, obtainStyledAttributes.getResourceId(bh.k.E3, 0), obtainStyledAttributes.getResourceId(bh.k.F3, 0)).m();
        obtainStyledAttributes.recycle();
        return new b(a10, a11, a12, dimensionPixelSize, m10, rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(TextView textView) {
        c(textView, null, null);
    }

    void c(TextView textView, ColorStateList colorStateList, ColorStateList colorStateList2) {
        rh.g gVar = new rh.g();
        rh.g gVar2 = new rh.g();
        gVar.setShapeAppearanceModel(this.f15010f);
        gVar2.setShapeAppearanceModel(this.f15010f);
        if (colorStateList == null) {
            colorStateList = this.f15007c;
        }
        gVar.X(colorStateList);
        gVar.e0(this.f15009e, this.f15008d);
        if (colorStateList2 == null) {
            colorStateList2 = this.f15006b;
        }
        textView.setTextColor(colorStateList2);
        RippleDrawable rippleDrawable = new RippleDrawable(this.f15006b.withAlpha(30), gVar, gVar2);
        Rect rect = this.f15005a;
        h0.r0(textView, new InsetDrawable((Drawable) rippleDrawable, rect.left, rect.top, rect.right, rect.bottom));
    }
}
