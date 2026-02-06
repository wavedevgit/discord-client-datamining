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
    private final Rect f14865a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f14866b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorStateList f14867c;

    /* renamed from: d  reason: collision with root package name */
    private final ColorStateList f14868d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14869e;

    /* renamed from: f  reason: collision with root package name */
    private final qh.k f14870f;

    private b(ColorStateList colorStateList, ColorStateList colorStateList2, ColorStateList colorStateList3, int i10, qh.k kVar, Rect rect) {
        b2.e.d(rect.left);
        b2.e.d(rect.top);
        b2.e.d(rect.right);
        b2.e.d(rect.bottom);
        this.f14865a = rect;
        this.f14866b = colorStateList2;
        this.f14867c = colorStateList;
        this.f14868d = colorStateList3;
        this.f14869e = i10;
        this.f14870f = kVar;
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, ah.k.f1055y3);
        Rect rect = new Rect(obtainStyledAttributes.getDimensionPixelOffset(ah.k.f1064z3, 0), obtainStyledAttributes.getDimensionPixelOffset(ah.k.B3, 0), obtainStyledAttributes.getDimensionPixelOffset(ah.k.A3, 0), obtainStyledAttributes.getDimensionPixelOffset(ah.k.C3, 0));
        ColorStateList a10 = nh.c.a(context, obtainStyledAttributes, ah.k.D3);
        ColorStateList a11 = nh.c.a(context, obtainStyledAttributes, ah.k.I3);
        ColorStateList a12 = nh.c.a(context, obtainStyledAttributes, ah.k.G3);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(ah.k.H3, 0);
        qh.k m10 = qh.k.b(context, obtainStyledAttributes.getResourceId(ah.k.E3, 0), obtainStyledAttributes.getResourceId(ah.k.F3, 0)).m();
        obtainStyledAttributes.recycle();
        return new b(a10, a11, a12, dimensionPixelSize, m10, rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(TextView textView) {
        c(textView, null, null);
    }

    void c(TextView textView, ColorStateList colorStateList, ColorStateList colorStateList2) {
        qh.g gVar = new qh.g();
        qh.g gVar2 = new qh.g();
        gVar.setShapeAppearanceModel(this.f14870f);
        gVar2.setShapeAppearanceModel(this.f14870f);
        if (colorStateList == null) {
            colorStateList = this.f14867c;
        }
        gVar.X(colorStateList);
        gVar.e0(this.f14869e, this.f14868d);
        if (colorStateList2 == null) {
            colorStateList2 = this.f14866b;
        }
        textView.setTextColor(colorStateList2);
        RippleDrawable rippleDrawable = new RippleDrawable(this.f14866b.withAlpha(30), gVar, gVar2);
        Rect rect = this.f14865a;
        h0.r0(textView, new InsetDrawable((Drawable) rippleDrawable, rect.left, rect.top, rect.right, rect.bottom));
    }
}
