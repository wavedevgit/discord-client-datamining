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
    static final int f15174n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15175a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15176b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15177c;

    /* renamed from: e  reason: collision with root package name */
    private int f15179e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15186l;

    /* renamed from: d  reason: collision with root package name */
    private int f15178d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15180f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15181g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15182h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15183i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15184j = f15174n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15185k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15187m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15175a = charSequence;
        this.f15176b = textPaint;
        this.f15177c = i10;
        this.f15179e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15175a == null) {
            this.f15175a = "";
        }
        int max = Math.max(0, this.f15177c);
        CharSequence charSequence = this.f15175a;
        if (this.f15181g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15176b, max, this.f15187m);
        }
        int min = Math.min(charSequence.length(), this.f15179e);
        this.f15179e = min;
        if (this.f15186l && this.f15181g == 1) {
            this.f15180f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15178d, min, this.f15176b, max);
        obtain.setAlignment(this.f15180f);
        obtain.setIncludePad(this.f15185k);
        if (this.f15186l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15187m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15181g);
        float f10 = this.f15182h;
        if (f10 != 0.0f || this.f15183i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15183i);
        }
        if (this.f15181g > 1) {
            obtain.setHyphenationFrequency(this.f15184j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15180f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15187m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15184j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15185k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15186l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15182h = f10;
        this.f15183i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15181g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
