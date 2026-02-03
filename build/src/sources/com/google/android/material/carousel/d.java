package com.google.android.material.carousel;

import android.content.Context;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private float f14388a;

    /* renamed from: b  reason: collision with root package name */
    private float f14389b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int[] a(int[] iArr) {
        int length = iArr.length;
        int[] iArr2 = new int[length];
        for (int i10 = 0; i10 < length; i10++) {
            iArr2[i10] = iArr[i10] * 2;
        }
        return iArr2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float b(float f10, float f11, float f12) {
        return 1.0f - ((f10 - f12) / (f11 - f12));
    }

    public float c() {
        return this.f14389b;
    }

    public float d() {
        return this.f14388a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(Context context) {
        float f10 = this.f14388a;
        if (f10 <= 0.0f) {
            f10 = e.h(context);
        }
        this.f14388a = f10;
        float f11 = this.f14389b;
        if (f11 <= 0.0f) {
            f11 = e.g(context);
        }
        this.f14389b = f11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract f g(b bVar, View view);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean h(b bVar, int i10);
}
