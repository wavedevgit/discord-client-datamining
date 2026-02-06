package com.google.android.material.progressindicator;

import ah.k;
import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import com.google.android.material.internal.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends b {

    /* renamed from: h  reason: collision with root package name */
    public int f15249h;

    /* renamed from: i  reason: collision with root package name */
    public int f15250i;

    /* renamed from: j  reason: collision with root package name */
    public int f15251j;

    public e(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, ah.b.f641g);
    }

    public e(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.A);
    }

    public e(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(ah.d.f676a0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(ah.d.Z);
        TypedArray i12 = l.i(context, attributeSet, k.f954n1, i10, i11, new int[0]);
        this.f15249h = Math.max(nh.c.c(context, i12, k.f981q1, dimensionPixelSize), this.f15222a * 2);
        this.f15250i = nh.c.c(context, i12, k.f972p1, dimensionPixelSize2);
        this.f15251j = i12.getInt(k.f963o1, 0);
        i12.recycle();
        e();
    }
}
