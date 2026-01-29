package com.google.android.material.radiobutton;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.q;
import androidx.core.widget.d;
import eh.a;
import yg.b;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialRadioButton extends q {

    /* renamed from: r  reason: collision with root package name */
    private static final int f16305r = j.f54516s;

    /* renamed from: s  reason: collision with root package name */
    private static final int[][] f16306s = {new int[]{16842910, 16842912}, new int[]{16842910, -16842912}, new int[]{-16842910, 16842912}, new int[]{-16842910, -16842912}};

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16307p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16308q;

    public MaterialRadioButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.U);
    }

    private ColorStateList getMaterialThemeColorsTintList() {
        if (this.f16307p == null) {
            int d10 = a.d(this, b.f54344h);
            int d11 = a.d(this, b.f54350k);
            int d12 = a.d(this, b.f54354o);
            int[][] iArr = f16306s;
            int[] iArr2 = new int[iArr.length];
            iArr2[0] = a.j(d12, d10, 1.0f);
            iArr2[1] = a.j(d12, d11, 0.54f);
            iArr2[2] = a.j(d12, d11, 0.38f);
            iArr2[3] = a.j(d12, d11, 0.38f);
            this.f16307p = new ColorStateList(iArr, iArr2);
        }
        return this.f16307p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.f16308q && d.b(this) == null) {
            setUseMaterialThemeColors(true);
        }
    }

    public void setUseMaterialThemeColors(boolean z10) {
        this.f16308q = z10;
        if (z10) {
            d.d(this, getMaterialThemeColorsTintList());
        } else {
            d.d(this, null);
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MaterialRadioButton(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.radiobutton.MaterialRadioButton.f16305r
            android.content.Context r7 = rh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.content.Context r0 = r6.getContext()
            int[] r2 = yg.k.f54639l4
            r7 = 0
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = yg.k.f54649m4
            boolean r9 = r8.hasValue(r9)
            if (r9 == 0) goto L29
            int r9 = yg.k.f54649m4
            android.content.res.ColorStateList r9 = lh.c.a(r0, r8, r9)
            androidx.core.widget.d.d(r6, r9)
        L29:
            int r9 = yg.k.f54658n4
            boolean r7 = r8.getBoolean(r9, r7)
            r6.f16308q = r7
            r8.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.radiobutton.MaterialRadioButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
