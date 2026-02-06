package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f14871a;

    /* renamed from: b  reason: collision with root package name */
    final b f14872b;

    /* renamed from: c  reason: collision with root package name */
    final b f14873c;

    /* renamed from: d  reason: collision with root package name */
    final b f14874d;

    /* renamed from: e  reason: collision with root package name */
    final b f14875e;

    /* renamed from: f  reason: collision with root package name */
    final b f14876f;

    /* renamed from: g  reason: collision with root package name */
    final b f14877g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f14878h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(nh.b.d(context, ah.b.f664z, i.class.getCanonicalName()), ah.k.f965o3);
        this.f14871a = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f1001s3, 0));
        this.f14877g = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f983q3, 0));
        this.f14872b = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f992r3, 0));
        this.f14873c = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f1010t3, 0));
        ColorStateList a10 = nh.c.a(context, obtainStyledAttributes, ah.k.f1019u3);
        this.f14874d = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f1037w3, 0));
        this.f14875e = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f1028v3, 0));
        this.f14876f = b.a(context, obtainStyledAttributes.getResourceId(ah.k.f1046x3, 0));
        Paint paint = new Paint();
        this.f14878h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
