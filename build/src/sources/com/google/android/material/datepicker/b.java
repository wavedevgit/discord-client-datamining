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
    private final Rect f14885a;

    /* renamed from: b  reason: collision with root package name */
    private final ColorStateList f14886b;

    /* renamed from: c  reason: collision with root package name */
    private final ColorStateList f14887c;

    /* renamed from: d  reason: collision with root package name */
    private final ColorStateList f14888d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14889e;

    /* renamed from: f  reason: collision with root package name */
    private final ph.k f14890f;

    private b(ColorStateList colorStateList, ColorStateList colorStateList2, ColorStateList colorStateList3, int i10, ph.k kVar, Rect rect) {
        b2.e.d(rect.left);
        b2.e.d(rect.top);
        b2.e.d(rect.right);
        b2.e.d(rect.bottom);
        this.f14885a = rect;
        this.f14886b = colorStateList2;
        this.f14887c = colorStateList;
        this.f14888d = colorStateList3;
        this.f14889e = i10;
        this.f14890f = kVar;
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, zg.k.f55960y3);
        Rect rect = new Rect(obtainStyledAttributes.getDimensionPixelOffset(zg.k.f55969z3, 0), obtainStyledAttributes.getDimensionPixelOffset(zg.k.B3, 0), obtainStyledAttributes.getDimensionPixelOffset(zg.k.A3, 0), obtainStyledAttributes.getDimensionPixelOffset(zg.k.C3, 0));
        ColorStateList a10 = mh.c.a(context, obtainStyledAttributes, zg.k.D3);
        ColorStateList a11 = mh.c.a(context, obtainStyledAttributes, zg.k.I3);
        ColorStateList a12 = mh.c.a(context, obtainStyledAttributes, zg.k.G3);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(zg.k.H3, 0);
        ph.k m10 = ph.k.b(context, obtainStyledAttributes.getResourceId(zg.k.E3, 0), obtainStyledAttributes.getResourceId(zg.k.F3, 0)).m();
        obtainStyledAttributes.recycle();
        return new b(a10, a11, a12, dimensionPixelSize, m10, rect);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(TextView textView) {
        c(textView, null, null);
    }

    void c(TextView textView, ColorStateList colorStateList, ColorStateList colorStateList2) {
        ph.g gVar = new ph.g();
        ph.g gVar2 = new ph.g();
        gVar.setShapeAppearanceModel(this.f14890f);
        gVar2.setShapeAppearanceModel(this.f14890f);
        if (colorStateList == null) {
            colorStateList = this.f14887c;
        }
        gVar.X(colorStateList);
        gVar.e0(this.f14889e, this.f14888d);
        if (colorStateList2 == null) {
            colorStateList2 = this.f14886b;
        }
        textView.setTextColor(colorStateList2);
        RippleDrawable rippleDrawable = new RippleDrawable(this.f14886b.withAlpha(30), gVar, gVar2);
        Rect rect = this.f14885a;
        h0.r0(textView, new InsetDrawable((Drawable) rippleDrawable, rect.left, rect.top, rect.right, rect.bottom));
    }
}
