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
    static final int f15812n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15813a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15814b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15815c;

    /* renamed from: e  reason: collision with root package name */
    private int f15817e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15824l;

    /* renamed from: d  reason: collision with root package name */
    private int f15816d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15818f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15819g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15820h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15821i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15822j = f15812n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15823k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15825m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15813a = charSequence;
        this.f15814b = textPaint;
        this.f15815c = i10;
        this.f15817e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15813a == null) {
            this.f15813a = "";
        }
        int max = Math.max(0, this.f15815c);
        CharSequence charSequence = this.f15813a;
        if (this.f15819g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15814b, max, this.f15825m);
        }
        int min = Math.min(charSequence.length(), this.f15817e);
        this.f15817e = min;
        if (this.f15824l && this.f15819g == 1) {
            this.f15818f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15816d, min, this.f15814b, max);
        obtain.setAlignment(this.f15818f);
        obtain.setIncludePad(this.f15823k);
        if (this.f15824l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15825m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15819g);
        float f10 = this.f15820h;
        if (f10 != 0.0f || this.f15821i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15821i);
        }
        if (this.f15819g > 1) {
            obtain.setHyphenationFrequency(this.f15822j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15818f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15825m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15822j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15823k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15824l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15820h = f10;
        this.f15821i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15819g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
