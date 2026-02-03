package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f15529a;

    /* renamed from: b  reason: collision with root package name */
    final b f15530b;

    /* renamed from: c  reason: collision with root package name */
    final b f15531c;

    /* renamed from: d  reason: collision with root package name */
    final b f15532d;

    /* renamed from: e  reason: collision with root package name */
    final b f15533e;

    /* renamed from: f  reason: collision with root package name */
    final b f15534f;

    /* renamed from: g  reason: collision with root package name */
    final b f15535g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f15536h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(lh.b.d(context, yg.b.f54356z, i.class.getCanonicalName()), yg.k.f54657o3);
        this.f15529a = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54693s3, 0));
        this.f15535g = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54675q3, 0));
        this.f15530b = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54684r3, 0));
        this.f15531c = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54702t3, 0));
        ColorStateList a10 = lh.c.a(context, obtainStyledAttributes, yg.k.f54711u3);
        this.f15532d = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54729w3, 0));
        this.f15533e = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54720v3, 0));
        this.f15534f = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54738x3, 0));
        Paint paint = new Paint();
        this.f15536h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
