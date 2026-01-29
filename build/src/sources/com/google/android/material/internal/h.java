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
    static final int f16183n = 1;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f16184a;

    /* renamed from: b  reason: collision with root package name */
    private final TextPaint f16185b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16186c;

    /* renamed from: e  reason: collision with root package name */
    private int f16188e;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16195l;

    /* renamed from: d  reason: collision with root package name */
    private int f16187d = 0;

    /* renamed from: f  reason: collision with root package name */
    private Layout.Alignment f16189f = Layout.Alignment.ALIGN_NORMAL;

    /* renamed from: g  reason: collision with root package name */
    private int f16190g = Integer.MAX_VALUE;

    /* renamed from: h  reason: collision with root package name */
    private float f16191h = 0.0f;

    /* renamed from: i  reason: collision with root package name */
    private float f16192i = 1.0f;

    /* renamed from: j  reason: collision with root package name */
    private int f16193j = f16183n;

    /* renamed from: k  reason: collision with root package name */
    private boolean f16194k = true;

    /* renamed from: m  reason: collision with root package name */
    private TextUtils.TruncateAt f16196m = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends Exception {
    }

    private h(CharSequence charSequence, TextPaint textPaint, int i10) {
        this.f16184a = charSequence;
        this.f16185b = textPaint;
        this.f16186c = i10;
        this.f16188e = charSequence.length();
    }

    public static h b(CharSequence charSequence, TextPaint textPaint, int i10) {
        return new h(charSequence, textPaint, i10);
    }

    public StaticLayout a() {
        TextDirectionHeuristic textDirectionHeuristic;
        if (this.f16184a == null) {
            this.f16184a = "";
        }
        int max = Math.max(0, this.f16186c);
        CharSequence charSequence = this.f16184a;
        if (this.f16190g == 1) {
            charSequence = TextUtils.ellipsize(charSequence, this.f16185b, max, this.f16196m);
        }
        int min = Math.min(charSequence.length(), this.f16188e);
        this.f16188e = min;
        if (this.f16195l && this.f16190g == 1) {
            this.f16189f = Layout.Alignment.ALIGN_OPPOSITE;
        }
        StaticLayout.Builder obtain = StaticLayout.Builder.obtain(charSequence, this.f16187d, min, this.f16185b, max);
        obtain.setAlignment(this.f16189f);
        obtain.setIncludePad(this.f16194k);
        if (this.f16195l) {
            textDirectionHeuristic = TextDirectionHeuristics.RTL;
        } else {
            textDirectionHeuristic = TextDirectionHeuristics.LTR;
        }
        obtain.setTextDirection(textDirectionHeuristic);
        TextUtils.TruncateAt truncateAt = this.f16196m;
        if (truncateAt != null) {
            obtain.setEllipsize(truncateAt);
        }
        obtain.setMaxLines(this.f16190g);
        float f10 = this.f16191h;
        if (f10 != 0.0f || this.f16192i != 1.0f) {
            obtain.setLineSpacing(f10, this.f16192i);
        }
        if (this.f16190g > 1) {
            obtain.setHyphenationFrequency(this.f16193j);
        }
        return obtain.build();
    }

    public h c(Layout.Alignment alignment) {
        this.f16189f = alignment;
        return this;
    }

    public h d(TextUtils.TruncateAt truncateAt) {
        this.f16196m = truncateAt;
        return this;
    }

    public h e(int i10) {
        this.f16193j = i10;
        return this;
    }

    public h f(boolean z10) {
        this.f16194k = z10;
        return this;
    }

    public h g(boolean z10) {
        this.f16195l = z10;
        return this;
    }

    public h h(float f10, float f11) {
        this.f16191h = f10;
        this.f16192i = f11;
        return this;
    }

    public h i(int i10) {
        this.f16190g = i10;
        return this;
    }

    public h j(i iVar) {
        return this;
    }
}
