package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f15630a;

    /* renamed from: b  reason: collision with root package name */
    final b f15631b;

    /* renamed from: c  reason: collision with root package name */
    final b f15632c;

    /* renamed from: d  reason: collision with root package name */
    final b f15633d;

    /* renamed from: e  reason: collision with root package name */
    final b f15634e;

    /* renamed from: f  reason: collision with root package name */
    final b f15635f;

    /* renamed from: g  reason: collision with root package name */
    final b f15636g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f15637h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(qh.b.f(context, bh.b.B, i.class.getCanonicalName()), bh.l.f7133s3);
        this.f15630a = b.a(context, obtainStyledAttributes.getResourceId(bh.l.f7169w3, 0));
        this.f15636g = b.a(context, obtainStyledAttributes.getResourceId(bh.l.f7151u3, 0));
        this.f15631b = b.a(context, obtainStyledAttributes.getResourceId(bh.l.f7160v3, 0));
        this.f15632c = b.a(context, obtainStyledAttributes.getResourceId(bh.l.f7178x3, 0));
        ColorStateList a10 = qh.c.a(context, obtainStyledAttributes, bh.l.f7187y3);
        this.f15633d = b.a(context, obtainStyledAttributes.getResourceId(bh.l.A3, 0));
        this.f15634e = b.a(context, obtainStyledAttributes.getResourceId(bh.l.f7196z3, 0));
        this.f15635f = b.a(context, obtainStyledAttributes.getResourceId(bh.l.B3, 0));
        Paint paint = new Paint();
        this.f15637h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
