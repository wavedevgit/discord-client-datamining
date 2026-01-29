package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import com.google.android.material.internal.l;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends b {

    /* renamed from: h  reason: collision with root package name */
    public int f16278h;

    /* renamed from: i  reason: collision with root package name */
    public int f16279i;

    /* renamed from: j  reason: collision with root package name */
    public int f16280j;

    public e(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54342g);
    }

    public e(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.A);
    }

    public e(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(yg.d.f54377a0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(yg.d.Z);
        TypedArray i12 = l.i(context, attributeSet, k.f54655n1, i10, i11, new int[0]);
        this.f16278h = Math.max(lh.c.c(context, i12, k.f54682q1, dimensionPixelSize), this.f16251a * 2);
        this.f16279i = lh.c.c(context, i12, k.f54673p1, dimensionPixelSize2);
        this.f16280j = i12.getInt(k.f54664o1, 0);
        i12.recycle();
        e();
    }
}
