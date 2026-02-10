package com.google.android.material.carousel;

import android.content.Context;
import com.google.android.material.carousel.e;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    static float a(float f10, float f11, int i10) {
        return f10 + (Math.max(0, i10 - 1) * f11);
    }

    static float b(float f10, float f11, int i10) {
        return i10 > 0 ? f10 + (f11 / 2.0f) : f10;
    }

    static e c(Context context, float f10, int i10, a aVar) {
        int i11;
        float f11;
        float f12;
        int i12;
        int i13;
        int i14;
        float min = Math.min(f(context) + f10, aVar.f15502f);
        float f13 = min / 2.0f;
        float f14 = 0.0f - f13;
        float b10 = b(0.0f, aVar.f15498b, aVar.f15499c);
        float j10 = j(0.0f, a(b10, aVar.f15498b, (int) Math.floor(aVar.f15499c / 2.0f)), aVar.f15498b, aVar.f15499c);
        float b11 = b(j10, aVar.f15501e, aVar.f15500d);
        float j11 = j(j10, a(b11, aVar.f15501e, (int) Math.floor(aVar.f15500d / 2.0f)), aVar.f15501e, aVar.f15500d);
        float b12 = b(j11, aVar.f15502f, aVar.f15503g);
        float j12 = j(j11, a(b12, aVar.f15502f, aVar.f15503g), aVar.f15502f, aVar.f15503g);
        float b13 = b(j12, aVar.f15501e, aVar.f15500d);
        float b14 = b(j(j12, a(b13, aVar.f15501e, (int) Math.ceil(aVar.f15500d / 2.0f)), aVar.f15501e, aVar.f15500d), aVar.f15498b, aVar.f15499c);
        float f15 = i10 + f13;
        float b15 = c.b(min, aVar.f15502f, f10);
        float b16 = c.b(aVar.f15498b, aVar.f15502f, f10);
        float b17 = c.b(aVar.f15501e, aVar.f15502f, f10);
        e.b a10 = new e.b(aVar.f15502f, i10).a(f14, b15, min);
        if (aVar.f15499c > 0) {
            f11 = 2.0f;
            f12 = b15;
            a10.g(b10, b16, aVar.f15498b, (int) Math.floor(i11 / 2.0f));
        } else {
            f11 = 2.0f;
            f12 = b15;
        }
        if (aVar.f15500d > 0) {
            a10.g(b11, b17, aVar.f15501e, (int) Math.floor(i12 / f11));
        }
        a10.h(b12, 0.0f, aVar.f15502f, aVar.f15503g, true);
        if (aVar.f15500d > 0) {
            a10.g(b13, b17, aVar.f15501e, (int) Math.ceil(i13 / f11));
        }
        if (aVar.f15499c > 0) {
            a10.g(b14, b16, aVar.f15498b, (int) Math.ceil(i14 / f11));
        }
        a10.a(f15, f12, min);
        return a10.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e d(Context context, float f10, int i10, a aVar, int i11) {
        if (i11 == 1) {
            return c(context, f10, i10, aVar);
        }
        return e(context, f10, i10, aVar);
    }

    static e e(Context context, float f10, int i10, a aVar) {
        float min = Math.min(f(context) + f10, aVar.f15502f);
        float f11 = min / 2.0f;
        float f12 = 0.0f - f11;
        float b10 = b(0.0f, aVar.f15502f, aVar.f15503g);
        float j10 = j(0.0f, a(b10, aVar.f15502f, aVar.f15503g), aVar.f15502f, aVar.f15503g);
        float b11 = b(j10, aVar.f15501e, aVar.f15500d);
        float b12 = b(j(j10, b11, aVar.f15501e, aVar.f15500d), aVar.f15498b, aVar.f15499c);
        float f13 = i10 + f11;
        float b13 = c.b(min, aVar.f15502f, f10);
        float b14 = c.b(aVar.f15498b, aVar.f15502f, f10);
        float b15 = c.b(aVar.f15501e, aVar.f15502f, f10);
        e.b h10 = new e.b(aVar.f15502f, i10).a(f12, b13, min).h(b10, 0.0f, aVar.f15502f, aVar.f15503g, true);
        if (aVar.f15500d > 0) {
            h10.b(b11, b15, aVar.f15501e);
        }
        int i11 = aVar.f15499c;
        if (i11 > 0) {
            h10.g(b12, b14, aVar.f15498b, i11);
        }
        h10.a(f13, b13, min);
        return h10.i();
    }

    static float f(Context context) {
        return context.getResources().getDimension(bh.d.f6824z);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float g(Context context) {
        return context.getResources().getDimension(bh.d.A);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float h(Context context) {
        return context.getResources().getDimension(bh.d.B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int i(int[] iArr) {
        int i10 = Integer.MIN_VALUE;
        for (int i11 : iArr) {
            if (i11 > i10) {
                i10 = i11;
            }
        }
        return i10;
    }

    static float j(float f10, float f11, float f12, int i10) {
        return i10 > 0 ? f11 + (f12 / 2.0f) : f10;
    }
}
