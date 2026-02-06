package com.google.android.material.carousel;

import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends d {

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f14792d = {1};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f14793e = {1, 0};

    /* renamed from: c  reason: collision with root package name */
    private int f14794c = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.carousel.d
    public f g(b bVar, View view) {
        float b10 = bVar.b();
        if (bVar.d()) {
            b10 = bVar.a();
        }
        float f10 = b10;
        RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
        float f11 = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        float measuredHeight = view.getMeasuredHeight();
        if (bVar.d()) {
            f11 = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            measuredHeight = view.getMeasuredWidth();
        }
        float f12 = f11;
        float d10 = d() + f12;
        float max = Math.max(c() + f12, d10);
        float min = Math.min(measuredHeight + f12, f10);
        float a10 = u1.a.a((measuredHeight / 3.0f) + f12, d10 + f12, max + f12);
        float f13 = (min + a10) / 2.0f;
        int[] iArr = f14792d;
        if (f10 < 2.0f * d10) {
            iArr = new int[]{0};
        }
        int[] iArr2 = f14793e;
        if (bVar.c() == 1) {
            iArr = d.a(iArr);
            iArr2 = d.a(iArr2);
        }
        int[] iArr3 = iArr2;
        int[] iArr4 = iArr;
        int ceil = (int) Math.ceil(f10 / min);
        int max2 = (ceil - ((int) Math.max(1.0d, Math.floor(((f10 - (e.i(iArr3) * f13)) - (e.i(iArr4) * max)) / min)))) + 1;
        int[] iArr5 = new int[max2];
        for (int i10 = 0; i10 < max2; i10++) {
            iArr5[i10] = ceil - i10;
        }
        a c10 = a.c(f10, a10, d10, max, iArr4, f13, iArr3, min, iArr5);
        this.f14794c = c10.e();
        if (i(c10, bVar.getItemCount())) {
            c10 = a.c(f10, a10, d10, max, new int[]{c10.f14753c}, f13, new int[]{c10.f14754d}, min, new int[]{c10.f14757g});
        }
        return e.d(view.getContext(), f12, f10, c10, bVar.c());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.carousel.d
    public boolean h(b bVar, int i10) {
        if (i10 >= this.f14794c || bVar.getItemCount() < this.f14794c) {
            if (i10 >= this.f14794c && bVar.getItemCount() < this.f14794c) {
                return true;
            }
            return false;
        }
        return true;
    }

    boolean i(a aVar, int i10) {
        boolean z10;
        int e10 = aVar.e() - i10;
        if (e10 > 0 && (aVar.f14753c > 0 || aVar.f14754d > 1)) {
            z10 = true;
        } else {
            z10 = false;
        }
        while (e10 > 0) {
            int i11 = aVar.f14753c;
            if (i11 > 0) {
                aVar.f14753c = i11 - 1;
            } else {
                int i12 = aVar.f14754d;
                if (i12 > 1) {
                    aVar.f14754d = i12 - 1;
                }
            }
            e10--;
        }
        return z10;
    }
}
