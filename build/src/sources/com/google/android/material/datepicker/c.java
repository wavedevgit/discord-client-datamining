package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Paint;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    final b f14497a;

    /* renamed from: b  reason: collision with root package name */
    final b f14498b;

    /* renamed from: c  reason: collision with root package name */
    final b f14499c;

    /* renamed from: d  reason: collision with root package name */
    final b f14500d;

    /* renamed from: e  reason: collision with root package name */
    final b f14501e;

    /* renamed from: f  reason: collision with root package name */
    final b f14502f;

    /* renamed from: g  reason: collision with root package name */
    final b f14503g;

    /* renamed from: h  reason: collision with root package name */
    final Paint f14504h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(lh.b.d(context, yg.b.f54114z, i.class.getCanonicalName()), yg.k.f54415o3);
        this.f14497a = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54451s3, 0));
        this.f14503g = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54433q3, 0));
        this.f14498b = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54442r3, 0));
        this.f14499c = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54460t3, 0));
        ColorStateList a10 = lh.c.a(context, obtainStyledAttributes, yg.k.f54469u3);
        this.f14500d = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54487w3, 0));
        this.f14501e = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54478v3, 0));
        this.f14502f = b.a(context, obtainStyledAttributes.getResourceId(yg.k.f54496x3, 0));
        Paint paint = new Paint();
        this.f14504h = paint;
        paint.setColor(a10.getDefaultColor());
        obtainStyledAttributes.recycle();
    }
}
