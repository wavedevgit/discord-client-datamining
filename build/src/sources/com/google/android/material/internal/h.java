package com.google.android.material.internal;

import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextDirectionHeuristic;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: o  reason: collision with root package name */
    static final int f15903o = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15904a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15905b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15906c;

    /* renamed from: e  reason: collision with root package name */
    private int f15908e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15915l;

    /* renamed from: n  reason: collision with root package name */
    private i f15917n;

    /* renamed from: d  reason: collision with root package name */
    private int f15907d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15909f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15910g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15911h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15912i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15913j = f15903o;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15914k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15916m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15904a = charSequence;
        this.f15905b = textPaint;
        this.f15906c = i10;
        this.f15908e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15904a == null) {
            this.f15904a = "";
        }
        int max = Math.max(0, this.f15906c);
        CharSequence charSequence = this.f15904a;
        if (this.f15910g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15905b, max, this.f15916m);
        }
        int min = Math.min(charSequence.length(), this.f15908e);
        this.f15908e = min;
        if (this.f15915l && this.f15910g == 1) {
            this.f15909f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15907d, min, this.f15905b, max);
        obtain.setAlignment(this.f15909f);
        obtain.setIncludePad(this.f15914k);
        if (this.f15915l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15916m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15910g);
        float f10 = this.f15911h;
        if (f10 != 0.0f || this.f15912i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15912i);
        }
        if (this.f15910g > 1) {
            obtain.setHyphenationFrequency(this.f15913j);
        }
        i iVar = this.f15917n;
        if (iVar != null) {
            iVar.a(obtain);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15909f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15916m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15913j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15914k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15915l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15911h = f10;
        this.f15912i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15910g = i10;
        return this;
    }

    public h j(i iVar) {
        this.f15917n = iVar;
        return this;
    }
}
