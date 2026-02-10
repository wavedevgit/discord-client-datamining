package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import bh.l;
import com.google.android.material.internal.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends b {

    /* renamed from: o  reason: collision with root package name */
    public int f16126o;

    /* renamed from: p  reason: collision with root package name */
    public int f16127p;

    /* renamed from: q  reason: collision with root package name */
    public int f16128q;

    /* renamed from: r  reason: collision with root package name */
    public int f16129r;

    /* renamed from: s  reason: collision with root package name */
    public boolean f16130s;

    public f(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6735g);
    }

    public f(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, CircularProgressIndicator.B);
    }

    public f(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(bh.d.f6813t0);
        int dimensionPixelSize2 = context.getResources().getDimensionPixelSize(bh.d.f6811s0);
        TypedArray i12 = m.i(context, attributeSet, l.D1, i10, i11, new int[0]);
        this.f16126o = i12.getInt(l.E1, 0);
        this.f16127p = Math.max(qh.c.d(context, i12, l.I1, dimensionPixelSize), this.f16070a * 2);
        this.f16128q = qh.c.d(context, i12, l.H1, dimensionPixelSize2);
        this.f16129r = i12.getInt(l.G1, 0);
        this.f16130s = i12.getBoolean(l.F1, true);
        i12.recycle();
        h();
    }
}
