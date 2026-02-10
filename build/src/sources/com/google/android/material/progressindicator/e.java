package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import bh.k;
import com.google.android.material.internal.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends b {

    /* renamed from: h  reason: collision with root package name */
    public int f15389h;

    /* renamed from: i  reason: collision with root package name */
    public int f15390i;

    /* renamed from: j  reason: collision with root package name */
    public int f15391j;

    public e(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6629g);
    }

    public e(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.A);
    }

    public e(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(bh.d.f6664a0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(bh.d.Z);
        TypedArray i12 = l.i(context, attributeSet, k.f6942n1, i10, i11, new int[0]);
        this.f15389h = Math.max(oh.c.c(context, i12, k.f6969q1, dimensionPixelSize), this.f15362a * 2);
        this.f15390i = oh.c.c(context, i12, k.f6960p1, dimensionPixelSize2);
        this.f15391j = i12.getInt(k.f6951o1, 0);
        i12.recycle();
        e();
    }
}
