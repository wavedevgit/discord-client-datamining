package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.util.TypedValue;
import bh.l;
import com.google.android.material.internal.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public int f16070a;

    /* renamed from: b  reason: collision with root package name */
    public int f16071b;

    /* renamed from: c  reason: collision with root package name */
    public float f16072c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f16073d;

    /* renamed from: e  reason: collision with root package name */
    public int[] f16074e = new int[0];

    /* renamed from: f  reason: collision with root package name */
    public int f16075f;

    /* renamed from: g  reason: collision with root package name */
    public int f16076g;

    /* renamed from: h  reason: collision with root package name */
    public int f16077h;

    /* renamed from: i  reason: collision with root package name */
    public int f16078i;

    /* renamed from: j  reason: collision with root package name */
    public int f16079j;

    /* renamed from: k  reason: collision with root package name */
    public int f16080k;

    /* renamed from: l  reason: collision with root package name */
    public int f16081l;

    /* renamed from: m  reason: collision with root package name */
    public int f16082m;

    /* renamed from: n  reason: collision with root package name */
    public float f16083n;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Context context, AttributeSet attributeSet, int i10, int i11) {
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(bh.d.f6815u0);
        TypedArray i12 = m.i(context, attributeSet, l.S, i10, i11, new int[0]);
        this.f16070a = qh.c.d(context, i12, l.f6973c0, dimensionPixelSize);
        TypedValue peekValue = i12.peekValue(l.f6963b0);
        if (peekValue != null) {
            int i13 = peekValue.type;
            if (i13 == 5) {
                this.f16071b = Math.min(TypedValue.complexToDimensionPixelSize(peekValue.data, i12.getResources().getDisplayMetrics()), this.f16070a / 2);
                this.f16073d = false;
            } else if (i13 == 6) {
                this.f16072c = Math.min(peekValue.getFraction(1.0f, 1.0f), 0.5f);
                this.f16073d = true;
            }
        }
        this.f16076g = i12.getInt(l.Y, 0);
        this.f16077h = i12.getInt(l.T, 0);
        this.f16078i = i12.getDimensionPixelSize(l.W, 0);
        int abs = Math.abs(i12.getDimensionPixelSize(l.f7003f0, 0));
        this.f16079j = Math.abs(i12.getDimensionPixelSize(l.f7013g0, abs));
        this.f16080k = Math.abs(i12.getDimensionPixelSize(l.f7023h0, abs));
        this.f16081l = Math.abs(i12.getDimensionPixelSize(l.f6983d0, 0));
        this.f16082m = i12.getDimensionPixelSize(l.f6993e0, 0);
        this.f16083n = i12.getFloat(l.U, 1.0f);
        e(context, i12);
        f(context, i12);
        i12.recycle();
    }

    private void e(Context context, TypedArray typedArray) {
        if (!typedArray.hasValue(l.V)) {
            this.f16074e = new int[]{jh.a.b(context, f.a.f23298w, -1)};
        } else if (typedArray.peekValue(l.V).type != 1) {
            this.f16074e = new int[]{typedArray.getColor(l.V, -1)};
        } else {
            int[] intArray = context.getResources().getIntArray(typedArray.getResourceId(l.V, -1));
            this.f16074e = intArray;
            if (intArray.length != 0) {
                return;
            }
            throw new IllegalArgumentException("indicatorColors cannot be empty when indicatorColor is not used.");
        }
    }

    private void f(Context context, TypedArray typedArray) {
        if (typedArray.hasValue(l.f6953a0)) {
            this.f16075f = typedArray.getColor(l.f6953a0, -1);
            return;
        }
        this.f16075f = this.f16074e[0];
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16842803});
        float f10 = obtainStyledAttributes.getFloat(0, 0.2f);
        obtainStyledAttributes.recycle();
        this.f16075f = jh.a.a(this.f16075f, (int) (f10 * 255.0f));
    }

    public int a() {
        if (this.f16073d) {
            return (int) (this.f16070a * this.f16072c);
        }
        return this.f16071b;
    }

    public boolean b(boolean z10) {
        if (this.f16081l > 0) {
            if (z10 || this.f16080k <= 0) {
                if (z10 && this.f16079j > 0) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f16077h != 0) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f16076g != 0) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f16073d && this.f16072c == 0.5f) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        if (this.f16078i >= 0) {
            return;
        }
        throw new IllegalArgumentException("indicatorTrackGapSize must be >= 0.");
    }
}
