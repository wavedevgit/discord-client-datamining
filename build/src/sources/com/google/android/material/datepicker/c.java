package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f14891a;

    /* renamed from: b  reason: collision with root package name */
    final b f14892b;

    /* renamed from: c  reason: collision with root package name */
    final b f14893c;

    /* renamed from: d  reason: collision with root package name */
    final b f14894d;

    /* renamed from: e  reason: collision with root package name */
    final b f14895e;

    /* renamed from: f  reason: collision with root package name */
    final b f14896f;

    /* renamed from: g  reason: collision with root package name */
    final b f14897g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f14898h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(mh.b.d(context, zg.b.f55569z, i.class.getCanonicalName()), zg.k.f55870o3);
        this.f14891a = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55906s3, 0));
        this.f14897g = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55888q3, 0));
        this.f14892b = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55897r3, 0));
        this.f14893c = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55915t3, 0));
        ColorStateList a10 = mh.c.a(context, obtainStyledAttributes, zg.k.f55924u3);
        this.f14894d = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55942w3, 0));
        this.f14895e = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55933v3, 0));
        this.f14896f = b.a(context, obtainStyledAttributes.getResourceId(zg.k.f55951x3, 0));
        Paint paint = new Paint();
        this.f14898h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
