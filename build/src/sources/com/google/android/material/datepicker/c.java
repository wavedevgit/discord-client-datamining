package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f15011a;

    /* renamed from: b  reason: collision with root package name */
    final b f15012b;

    /* renamed from: c  reason: collision with root package name */
    final b f15013c;

    /* renamed from: d  reason: collision with root package name */
    final b f15014d;

    /* renamed from: e  reason: collision with root package name */
    final b f15015e;

    /* renamed from: f  reason: collision with root package name */
    final b f15016f;

    /* renamed from: g  reason: collision with root package name */
    final b f15017g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f15018h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(oh.b.d(context, bh.b.f6652z, i.class.getCanonicalName()), bh.k.f6953o3);
        this.f15011a = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f6989s3, 0));
        this.f15017g = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f6971q3, 0));
        this.f15012b = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f6980r3, 0));
        this.f15013c = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f6998t3, 0));
        ColorStateList a10 = oh.c.a(context, obtainStyledAttributes, bh.k.f7007u3);
        this.f15014d = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f7025w3, 0));
        this.f15015e = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f7016v3, 0));
        this.f15016f = b.a(context, obtainStyledAttributes.getResourceId(bh.k.f7034x3, 0));
        Paint paint = new Paint();
        this.f15018h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
