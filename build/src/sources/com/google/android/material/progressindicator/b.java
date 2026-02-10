package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import bh.k;
import com.google.android.material.internal.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public int f15362a;

    /* renamed from: b  reason: collision with root package name */
    public int f15363b;

    /* renamed from: c  reason: collision with root package name */
    public int[] f15364c = new int[0];

    /* renamed from: d  reason: collision with root package name */
    public int f15365d;

    /* renamed from: e  reason: collision with root package name */
    public int f15366e;

    /* renamed from: f  reason: collision with root package name */
    public int f15367f;

    /* renamed from: g  reason: collision with root package name */
    public int f15368g;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Context context, AttributeSet attributeSet, int i10, int i11) {
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(bh.d.f6666b0);
        TypedArray i12 = l.i(context, attributeSet, k.G, i10, i11, new int[0]);
        this.f15362a = oh.c.c(context, i12, k.P, dimensionPixelSize);
        this.f15363b = Math.min(oh.c.c(context, i12, k.O, 0), this.f15362a / 2);
        this.f15366e = i12.getInt(k.L, 0);
        this.f15367f = i12.getInt(k.H, 0);
        this.f15368g = i12.getDimensionPixelSize(k.J, 0);
        c(context, i12);
        d(context, i12);
        i12.recycle();
    }

    private void c(Context context, TypedArray typedArray) {
        if (!typedArray.hasValue(k.I)) {
            this.f15364c = new int[]{hh.a.b(context, bh.b.f6638l, -1)};
        } else if (typedArray.peekValue(k.I).type != 1) {
            this.f15364c = new int[]{typedArray.getColor(k.I, -1)};
        } else {
            int[] intArray = context.getResources().getIntArray(typedArray.getResourceId(k.I, -1));
            this.f15364c = intArray;
            if (intArray.length != 0) {
                return;
            }
            throw new IllegalArgumentException("indicatorColors cannot be empty when indicatorColor is not used.");
        }
    }

    private void d(Context context, TypedArray typedArray) {
        if (typedArray.hasValue(k.N)) {
            this.f15365d = typedArray.getColor(k.N, -1);
            return;
        }
        this.f15365d = this.f15364c[0];
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16842803});
        float f10 = obtainStyledAttributes.getFloat(0, 0.2f);
        obtainStyledAttributes.recycle();
        this.f15365d = hh.a.a(this.f15365d, (int) (f10 * 255.0f));
    }

    public boolean a() {
        if (this.f15367f != 0) {
            return true;
        }
        return false;
    }

    public boolean b() {
        if (this.f15366e != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        if (this.f15368g >= 0) {
            return;
        }
        throw new IllegalArgumentException("indicatorTrackGapSize must be >= 0.");
    }
}
