package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f15900a;

    /* renamed from: b  reason: collision with root package name */
    final b f15901b;

    /* renamed from: c  reason: collision with root package name */
    final b f15902c;

    /* renamed from: d  reason: collision with root package name */
    final b f15903d;

    /* renamed from: e  reason: collision with root package name */
    final b f15904e;

    /* renamed from: f  reason: collision with root package name */
    final b f15905f;

    /* renamed from: g  reason: collision with root package name */
    final b f15906g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f15907h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(lh.b.d(context, yg.b.f54381z, i.class.getCanonicalName()), yg.k.f54682o3);
        this.f15900a = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54718s3, 0));
        this.f15906g = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54700q3, 0));
        this.f15901b = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54709r3, 0));
        this.f15902c = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54727t3, 0));
        ColorStateList a10 = lh.c.a(context, obtainStyledAttributes, yg.k.f54736u3);
        this.f15903d = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54754w3, 0));
        this.f15904e = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54745v3, 0));
        this.f15905f = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54763x3, 0));
        Paint paint = new Paint();
        this.f15907h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
