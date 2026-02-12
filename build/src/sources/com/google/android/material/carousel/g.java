package com.google.android.material.carousel;

import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends c {

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f15545d = {1};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f15546e = {1, 0};

    /* renamed from: c  reason: collision with root package name */
    private int f15547c = 0;

    @Override // com.google.android.material.carousel.c
    public e g(gh.a aVar, View view) {
        boolean z10;
        int b10 = aVar.b();
        if (aVar.d()) {
            b10 = aVar.a();
        }
        RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
        float f10 = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        float measuredHeight = view.getMeasuredHeight();
        if (aVar.d()) {
            f10 = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            measuredHeight = view.getMeasuredWidth();
        }
        float d10 = d() + f10;
        float max = Math.max(c() + f10, d10);
        float f11 = b10;
        float min = Math.min(measuredHeight + f10, f11);
        float a10 = u1.a.a((measuredHeight / 3.0f) + f10, d10 + f10, max + f10);
        float f12 = (min + a10) / 2.0f;
        int[] iArr = f15545d;
        float f13 = 2.0f * d10;
        if (f11 <= f13) {
            iArr = new int[]{0};
        }
        int[] iArr2 = f15546e;
        if (aVar.c() == 1) {
            iArr = c.a(iArr);
            iArr2 = c.a(iArr2);
        }
        int[] iArr3 = iArr2;
        int[] iArr4 = iArr;
        float f14 = f10;
        int ceil = (int) Math.ceil(f11 / min);
        int max2 = (ceil - ((int) Math.max(1.0d, Math.floor(((f11 - (d.i(iArr3) * f12)) - (d.i(iArr4) * max)) / min)))) + 1;
        int[] iArr5 = new int[max2];
        for (int i10 = 0; i10 < max2; i10++) {
            iArr5[i10] = ceil - i10;
        }
        a c10 = a.c(f11, a10, d10, max, iArr4, f12, iArr3, min, iArr5);
        this.f15547c = c10.e();
        boolean i11 = i(c10, aVar.getItemCount());
        int i12 = c10.f15501d;
        if (i12 == 0 && c10.f15500c == 0 && f11 > f13) {
            c10.f15500c = 1;
            z10 = true;
        } else {
            z10 = i11;
        }
        if (z10) {
            c10 = a.c(f11, a10, d10, max, new int[]{c10.f15500c}, f12, new int[]{i12}, min, new int[]{c10.f15504g});
        }
        return d.d(view.getContext(), f14, b10, c10, aVar.c());
    }

    @Override // com.google.android.material.carousel.c
    public boolean h(gh.a aVar, int i10) {
        if (i10 >= this.f15547c || aVar.getItemCount() < this.f15547c) {
            if (i10 >= this.f15547c && aVar.getItemCount() < this.f15547c) {
                return true;
            }
            return false;
        }
        return true;
    }

    boolean i(a aVar, int i10) {
        boolean z10;
        int e10 = aVar.e() - i10;
        if (e10 > 0 && (aVar.f15500c > 0 || aVar.f15501d > 1)) {
            z10 = true;
        } else {
            z10 = false;
        }
        while (e10 > 0) {
            int i11 = aVar.f15500c;
            if (i11 > 0) {
                aVar.f15500c = i11 - 1;
            } else {
                int i12 = aVar.f15501d;
                if (i12 > 1) {
                    aVar.f15501d = i12 - 1;
                }
            }
            e10--;
        }
        return z10;
    }
}
