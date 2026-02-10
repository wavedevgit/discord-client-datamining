package com.google.android.material.radiobutton;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.q;
import androidx.core.widget.d;
import bh.b;
import bh.k;
import f.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialRadioButton extends q {

    /* renamed from: r  reason: collision with root package name */
    private static final int f16167r = k.f6950y;

    /* renamed from: s  reason: collision with root package name */
    private static final int[][] f16168s = {new int[]{16842910, 16842912}, new int[]{16842910, -16842912}, new int[]{-16842910, 16842912}, new int[]{-16842910, -16842912}};

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16169p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f16170q;

    public MaterialRadioButton(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, a.F);
    }

    private ColorStateList getMaterialThemeColorsTintList() {
        if (this.f16169p == null) {
            int d10 = jh.a.d(this, a.f23294s);
            int d11 = jh.a.d(this, b.f6741j);
            int d12 = jh.a.d(this, b.f6751o);
            int[][] iArr = f16168s;
            int[] iArr2 = new int[iArr.length];
            iArr2[0] = jh.a.j(d12, d10, 1.0f);
            iArr2[1] = jh.a.j(d12, d11, 0.54f);
            iArr2[2] = jh.a.j(d12, d11, 0.38f);
            iArr2[3] = jh.a.j(d12, d11, 0.38f);
            this.f16169p = new ColorStateList(iArr, iArr2);
        }
        return this.f16169p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.f16170q && d.b(this) == null) {
            setUseMaterialThemeColors(true);
        }
    }

    public void setUseMaterialThemeColors(boolean z10) {
        this.f16170q = z10;
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
            int r4 = com.google.android.material.radiobutton.MaterialRadioButton.f16167r
            android.content.Context r7 = wh.a.d(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.content.Context r0 = r6.getContext()
            int[] r2 = bh.l.f7107p4
            r7 = 0
            int[] r5 = new int[r7]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.m.i(r0, r1, r2, r3, r4, r5)
            int r9 = bh.l.f7116q4
            boolean r9 = r8.hasValue(r9)
            if (r9 == 0) goto L29
            int r9 = bh.l.f7116q4
            android.content.res.ColorStateList r9 = qh.c.a(r0, r8, r9)
            androidx.core.widget.d.d(r6, r9)
        L29:
            int r9 = bh.l.f7125r4
            boolean r7 = r8.getBoolean(r9, r7)
            r6.f16170q = r7
            r8.recycle()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.radiobutton.MaterialRadioButton.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
