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
    static final int f14780n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f14781a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f14782b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14783c;

    /* renamed from: e  reason: collision with root package name */
    private int f14785e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f14792l;

    /* renamed from: d  reason: collision with root package name */
    private int f14784d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f14786f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f14787g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f14788h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f14789i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f14790j = f14780n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f14791k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f14793m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f14781a = charSequence;
        this.f14782b = textPaint;
        this.f14783c = i10;
        this.f14785e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f14781a == null) {
            this.f14781a = "";
        }
        int max = Math.max(0, this.f14783c);
        CharSequence charSequence = this.f14781a;
        if (this.f14787g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f14782b, max, this.f14793m);
        }
        int min = Math.min(charSequence.length(), this.f14785e);
        this.f14785e = min;
        if (this.f14792l && this.f14787g == 1) {
            this.f14786f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f14784d, min, this.f14782b, max);
        obtain.setAlignment(this.f14786f);
        obtain.setIncludePad(this.f14791k);
        if (this.f14792l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f14793m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f14787g);
        float f10 = this.f14788h;
        if (f10 != 0.0f || this.f14789i != 1.0f) {
            obtain.setLineSpacing(f10, this.f14789i);
        }
        if (this.f14787g > 1) {
            obtain.setHyphenationFrequency(this.f14790j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f14786f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f14793m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f14790j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f14791k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f14792l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f14788h = f10;
        this.f14789i = f11;
        return this;
    }

    public h i(int i10) {
        this.f14787g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
