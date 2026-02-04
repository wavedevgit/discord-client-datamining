package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import com.google.android.material.internal.l;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends b {

    /* renamed from: h  reason: collision with root package name */
    public int f14875h;

    /* renamed from: i  reason: collision with root package name */
    public int f14876i;

    /* renamed from: j  reason: collision with root package name */
    public int f14877j;

    public e(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54088g);
    }

    public e(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.A);
    }

    public e(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(yg.d.f54123a0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(yg.d.Z);
        TypedArray i12 = l.i(context, attributeSet, k.f54401n1, i10, i11, new int[0]);
        this.f14875h = Math.max(lh.c.c(context, i12, k.f54428q1, dimensionPixelSize), this.f14848a * 2);
        this.f14876i = lh.c.c(context, i12, k.f54419p1, dimensionPixelSize2);
        this.f14877j = i12.getInt(k.f54410o1, 0);
        i12.recycle();
        e();
    }
}
