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
    static final int f15154n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15155a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15156b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15157c;

    /* renamed from: e  reason: collision with root package name */
    private int f15159e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15166l;

    /* renamed from: d  reason: collision with root package name */
    private int f15158d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15160f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15161g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15162h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15163i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15164j = f15154n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15165k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15167m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15155a = charSequence;
        this.f15156b = textPaint;
        this.f15157c = i10;
        this.f15159e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15155a == null) {
            this.f15155a = "";
        }
        int max = Math.max(0, this.f15157c);
        CharSequence charSequence = this.f15155a;
        if (this.f15161g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15156b, max, this.f15167m);
        }
        int min = Math.min(charSequence.length(), this.f15159e);
        this.f15159e = min;
        if (this.f15166l && this.f15161g == 1) {
            this.f15160f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15158d, min, this.f15156b, max);
        obtain.setAlignment(this.f15160f);
        obtain.setIncludePad(this.f15165k);
        if (this.f15166l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15167m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15161g);
        float f10 = this.f15162h;
        if (f10 != 0.0f || this.f15163i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15163i);
        }
        if (this.f15161g > 1) {
            obtain.setHyphenationFrequency(this.f15164j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15160f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15167m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15164j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15165k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15166l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15162h = f10;
        this.f15163i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15161g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
