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
    static final int f15904o = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f15905a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f15906b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15907c;

    /* renamed from: e  reason: collision with root package name */
    private int f15909e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15916l;

    /* renamed from: n  reason: collision with root package name */
    private i f15918n;

    /* renamed from: d  reason: collision with root package name */
    private int f15908d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f15910f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f15911g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f15912h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f15913i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f15914j = f15904o;

    /* renamed from: k  reason: collision with root package name */
    private boolean f15915k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f15917m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f15905a = charSequence;
        this.f15906b = textPaint;
        this.f15907c = i10;
        this.f15909e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f15905a == null) {
            this.f15905a = "";
        }
        int max = Math.max(0, this.f15907c);
        CharSequence charSequence = this.f15905a;
        if (this.f15911g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f15906b, max, this.f15917m);
        }
        int min = Math.min(charSequence.length(), this.f15909e);
        this.f15909e = min;
        if (this.f15916l && this.f15911g == 1) {
            this.f15910f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f15908d, min, this.f15906b, max);
        obtain.setAlignment(this.f15910f);
        obtain.setIncludePad(this.f15915k);
        if (this.f15916l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f15917m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f15911g);
        float f10 = this.f15912h;
        if (f10 != 0.0f || this.f15913i != 1.0f) {
            obtain.setLineSpacing(f10, this.f15913i);
        }
        if (this.f15911g > 1) {
            obtain.setHyphenationFrequency(this.f15914j);
        }
        i iVar = this.f15918n;
        if (iVar != null) {
            iVar.a(obtain);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f15910f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f15917m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f15914j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f15915k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f15916l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f15912h = f10;
        this.f15913i = f11;
        return this;
    }

    public h i(int i10) {
        this.f15911g = i10;
        return this;
    }

    public h j(i iVar) {
        this.f15918n = iVar;
        return this;
    }
}
