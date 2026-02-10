package com.google.android.material.carousel;

import android.content.Context;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private float f15508a;

    /* renamed from: b  reason: collision with root package name */
    private float f15509b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    enum a {
        CONTAINED,
        UNCONTAINED
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int[] a(int[] iArr) {
        int length = iArr.length;
        int[] iArr2 = new int[length];
        for (int i10 = 0; i10 < length; i10++) {
            iArr2[i10] = iArr[i10] * 2;
        }
        return iArr2;
    }

    public static float b(float f10, float f11, float f12) {
        return 1.0f - ((f10 - f12) / (f11 - f12));
    }

    public float c() {
        return this.f15509b;
    }

    public float d() {
        return this.f15508a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a e() {
        return a.CONTAINED;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        float f10 = this.f15508a;
        if (f10 <= 0.0f) {
            f10 = d.h(context);
        }
        this.f15508a = f10;
        float f11 = this.f15509b;
        if (f11 <= 0.0f) {
            f11 = d.g(context);
        }
        this.f15509b = f11;
    }

    public abstract e g(gh.a aVar, View view);

    public abstract boolean h(gh.a aVar, int i10);
}
