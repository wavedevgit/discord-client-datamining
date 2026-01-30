package com.google.android.material.carousel;

import android.content.Context;
import com.google.android.material.carousel.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    static float a(float f10, float f11, int i10) {
        return f10 + (Math.max(0, i10 - 1) * f11);
    }

    static float b(float f10, float f11, int i10) {
        return i10 > 0 ? f10 + (f11 / 2.0f) : f10;
    }

    static f c(Context context, float f10, float f11, a aVar) {
        int i10;
        float f12;
        float f13;
        int i11;
        int i12;
        int i13;
        float min = Math.min(f(context) + f10, aVar.f15785f);
        float f14 = min / 2.0f;
        float f15 = 0.0f - f14;
        float b10 = b(0.0f, aVar.f15781b, aVar.f15782c);
        float j10 = j(0.0f, a(b10, aVar.f15781b, (int) Math.floor(aVar.f15782c / 2.0f)), aVar.f15781b, aVar.f15782c);
        float b11 = b(j10, aVar.f15784e, aVar.f15783d);
        float j11 = j(j10, a(b11, aVar.f15784e, (int) Math.floor(aVar.f15783d / 2.0f)), aVar.f15784e, aVar.f15783d);
        float b12 = b(j11, aVar.f15785f, aVar.f15786g);
        float j12 = j(j11, a(b12, aVar.f15785f, aVar.f15786g), aVar.f15785f, aVar.f15786g);
        float b13 = b(j12, aVar.f15784e, aVar.f15783d);
        float b14 = b(j(j12, a(b13, aVar.f15784e, (int) Math.ceil(aVar.f15783d / 2.0f)), aVar.f15784e, aVar.f15783d), aVar.f15781b, aVar.f15782c);
        float f16 = f14 + f11;
        float b15 = d.b(min, aVar.f15785f, f10);
        float b16 = d.b(aVar.f15781b, aVar.f15785f, f10);
        float b17 = d.b(aVar.f15784e, aVar.f15785f, f10);
        f.b a10 = new f.b(aVar.f15785f, f11).a(f15, b15, min);
        if (aVar.f15782c > 0) {
            f12 = 2.0f;
            f13 = f16;
            a10.g(b10, b16, aVar.f15781b, (int) Math.floor(i10 / 2.0f));
        } else {
            f12 = 2.0f;
            f13 = f16;
        }
        if (aVar.f15783d > 0) {
            a10.g(b11, b17, aVar.f15784e, (int) Math.floor(i11 / f12));
        }
        a10.h(b12, 0.0f, aVar.f15785f, aVar.f15786g, true);
        if (aVar.f15783d > 0) {
            a10.g(b13, b17, aVar.f15784e, (int) Math.ceil(i12 / f12));
        }
        if (aVar.f15782c > 0) {
            a10.g(b14, b16, aVar.f15781b, (int) Math.ceil(i13 / f12));
        }
        a10.a(f13, b15, min);
        return a10.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f d(Context context, float f10, float f11, a aVar, int i10) {
        if (i10 == 1) {
            return c(context, f10, f11, aVar);
        }
        return e(context, f10, f11, aVar);
    }

    static f e(Context context, float f10, float f11, a aVar) {
        float min = Math.min(f(context) + f10, aVar.f15785f);
        float f12 = min / 2.0f;
        float f13 = 0.0f - f12;
        float b10 = b(0.0f, aVar.f15785f, aVar.f15786g);
        float j10 = j(0.0f, a(b10, aVar.f15785f, aVar.f15786g), aVar.f15785f, aVar.f15786g);
        float b11 = b(j10, aVar.f15784e, aVar.f15783d);
        float b12 = b(j(j10, b11, aVar.f15784e, aVar.f15783d), aVar.f15781b, aVar.f15782c);
        float f14 = f12 + f11;
        float b13 = d.b(min, aVar.f15785f, f10);
        float b14 = d.b(aVar.f15781b, aVar.f15785f, f10);
        float b15 = d.b(aVar.f15784e, aVar.f15785f, f10);
        f.b h10 = new f.b(aVar.f15785f, f11).a(f13, b13, min).h(b10, 0.0f, aVar.f15785f, aVar.f15786g, true);
        if (aVar.f15783d > 0) {
            h10.b(b11, b15, aVar.f15784e);
        }
        int i10 = aVar.f15782c;
        if (i10 > 0) {
            h10.g(b12, b14, aVar.f15781b, i10);
        }
        h10.a(f14, b13, min);
        return h10.i();
    }

    static float f(Context context) {
        return context.getResources().getDimension(yg.d.f54414o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float g(Context context) {
        return context.getResources().getDimension(yg.d.f54415p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float h(Context context) {
        return context.getResources().getDimension(yg.d.f54416q);
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
