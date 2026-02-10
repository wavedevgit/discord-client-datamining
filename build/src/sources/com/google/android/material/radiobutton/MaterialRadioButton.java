package com.google.android.material.radiobutton;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.q;
import androidx.core.widget.d;
import bh.b;
import bh.j;
import hh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialRadioButton extends q {

    /* renamed from: r  reason: collision with root package name */
    private static final int f15416r = j.f6803s;

    /* renamed from: s  reason: collision with root package name */
    private static final int[][] f15417s = {new int[]{16842910, 16842912}, new int[]{16842910, -16842912}, new int[]{-16842910, 16842912}, new int[]{-16842910, -16842912}};

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15418p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15419q;

    public MaterialRadioButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, b.U);
    }

    private ColorStateList getMaterialThemeColorsTintList() {
        if (this.f15418p == null) {
            int d10 = a.d(this, b.f6631h);
            int d11 = a.d(this, b.f6637k);
            int d12 = a.d(this, b.f6641o);
            int[][] iArr = f15417s;
            int[] iArr2 = new int[iArr.length];
            iArr2[0] = a.j(d12, d10, 1.0f);
            iArr2[1] = a.j(d12, d11, 0.54f);
            iArr2[2] = a.j(d12, d11, 0.38f);
            iArr2[3] = a.j(d12, d11, 0.38f);
            this.f15418p = new ColorStateList(iArr, iArr2);
        }
        return this.f15418p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.f15419q && d.b(this) == null) {
            setUseMaterialThemeColors(true);
        }
    }

    public void setUseMaterialThemeColors(boolean z10) {
        this.f15419q = z10;
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
            int r4 = com.google.android.material.radiobutton.MaterialRadioButton.f15416r
            android.content.Context r7 = uh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.content.Context r0 = r6.getContext()
            int[] r2 = bh.k.f6926l4
            r7 = 0
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = bh.k.f6936m4
            boolean r9 = r8.hasValue(r9)
            if (r9 == 0) goto L29
            int r9 = bh.k.f6936m4
            android.content.res.ColorStateList r9 = oh.c.a(r0, r8, r9)
            androidx.core.widget.d.d(r6, r9)
        L29:
            int r9 = bh.k.f6945n4
            boolean r7 = r8.getBoolean(r9, r7)
            r6.f15419q = r7
            r8.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.radiobutton.MaterialRadioButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
