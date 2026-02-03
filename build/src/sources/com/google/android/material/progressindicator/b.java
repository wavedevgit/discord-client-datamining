package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import com.google.android.material.internal.l;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public int f14848a;

    /* renamed from: b  reason: collision with root package name */
    public int f14849b;

    /* renamed from: c  reason: collision with root package name */
    public int[] f14850c = new int[0];

    /* renamed from: d  reason: collision with root package name */
    public int f14851d;

    /* renamed from: e  reason: collision with root package name */
    public int f14852e;

    /* renamed from: f  reason: collision with root package name */
    public int f14853f;

    /* renamed from: g  reason: collision with root package name */
    public int f14854g;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Context context, AttributeSet attributeSet, int i10, int i11) {
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(yg.d.f54128b0);
        TypedArray i12 = l.i(context, attributeSet, k.G, i10, i11, new int[0]);
        this.f14848a = lh.c.c(context, i12, k.P, dimensionPixelSize);
        this.f14849b = Math.min(lh.c.c(context, i12, k.O, 0), this.f14848a / 2);
        this.f14852e = i12.getInt(k.L, 0);
        this.f14853f = i12.getInt(k.H, 0);
        this.f14854g = i12.getDimensionPixelSize(k.J, 0);
        c(context, i12);
        d(context, i12);
        i12.recycle();
    }

    private void c(Context context, TypedArray typedArray) {
        if (!typedArray.hasValue(k.I)) {
            this.f14850c = new int[]{eh.a.b(context, yg.b.f54100l, -1)};
        } else if (typedArray.peekValue(k.I).type != 1) {
            this.f14850c = new int[]{typedArray.getColor(k.I, -1)};
        } else {
            int[] intArray = context.getResources().getIntArray(typedArray.getResourceId(k.I, -1));
            this.f14850c = intArray;
            if (intArray.length != 0) {
                return;
            }
            throw new IllegalArgumentException("indicatorColors cannot be empty when indicatorColor is not used.");
        }
    }

    private void d(Context context, TypedArray typedArray) {
        if (typedArray.hasValue(k.N)) {
            this.f14851d = typedArray.getColor(k.N, -1);
            return;
        }
        this.f14851d = this.f14850c[0];
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16842803});
        float f10 = obtainStyledAttributes.getFloat(0, 0.2f);
        obtainStyledAttributes.recycle();
        this.f14851d = eh.a.a(this.f14851d, (int) (f10 * 255.0f));
    }

    public boolean a() {
        if (this.f14853f != 0) {
            return true;
        }
        return false;
    }

    public boolean b() {
        if (this.f14852e != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        if (this.f14854g >= 0) {
            return;
        }
        throw new IllegalArgumentException("indicatorTrackGapSize must be >= 0.");
    }
}
