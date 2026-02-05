package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import com.google.android.material.internal.l;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends b {

    /* renamed from: h  reason: collision with root package name */
    public int f15269h;

    /* renamed from: i  reason: collision with root package name */
    public int f15270i;

    /* renamed from: j  reason: collision with root package name */
    public int f15271j;

    public e(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, zg.b.f55546g);
    }

    public e(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.A);
    }

    public e(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(zg.d.f55581a0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(zg.d.Z);
        TypedArray i12 = l.i(context, attributeSet, k.f55859n1, i10, i11, new int[0]);
        this.f15269h = Math.max(mh.c.c(context, i12, k.f55886q1, dimensionPixelSize), this.f15242a * 2);
        this.f15270i = mh.c.c(context, i12, k.f55877p1, dimensionPixelSize2);
        this.f15271j = i12.getInt(k.f55868o1, 0);
        i12.recycle();
        e();
    }
}
