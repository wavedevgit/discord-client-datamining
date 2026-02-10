package com.google.android.material.internal;

import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextDirectionHeuristic;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h {

    /* renamed from: n  reason: collision with root package name */
    static final int f15294n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15295a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15296b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15297c;

    /* renamed from: e  reason: collision with root package name */
    private int f15299e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15306l;

    /* renamed from: d  reason: collision with root package name */
    private int f15298d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15300f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15301g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15302h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15303i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15304j = f15294n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15305k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15307m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15295a = charSequence;
        this.f15296b = textPaint;
        this.f15297c = i10;
        this.f15299e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15295a == null) {
            this.f15295a = "";
        }
        int max = Math.max(0, this.f15297c);
        CharSequence charSequence = this.f15295a;
        if (this.f15301g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15296b, max, this.f15307m);
        }
        int min = Math.min(charSequence.length(), this.f15299e);
        this.f15299e = min;
        if (this.f15306l && this.f15301g == 1) {
            this.f15300f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15298d, min, this.f15296b, max);
        obtain.setAlignment(this.f15300f);
        obtain.setIncludePad(this.f15305k);
        if (this.f15306l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15307m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15301g);
        float f10 = this.f15302h;
        if (f10 != 0.0f || this.f15303i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15303i);
        }
        if (this.f15301g > 1) {
            obtain.setHyphenationFrequency(this.f15304j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15300f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15307m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15304j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15305k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15306l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15302h = f10;
        this.f15303i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15301g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
