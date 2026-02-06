package androidx.core.text;

import a2.b;
import a2.c;
import a2.d;
import android.os.Build;
import android.text.PrecomputedText;
import android.text.Spannable;
import android.text.TextDirectionHeuristic;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.TextUtils;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class PrecomputedTextCompat implements Spannable {

    /* renamed from: o  reason: collision with root package name */
    private static final Object f3652o = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final Spannable f3653d;

    /* renamed from: e  reason: collision with root package name */
    private final Params f3654e;

    /* renamed from: i  reason: collision with root package name */
    private final PrecomputedText f3655i;

    public Params a() {
        return this.f3654e;
    }

    public PrecomputedText b() {
        Spannable spannable = this.f3653d;
        if (b.a(spannable)) {
            return c.a(spannable);
        }
        return null;
    }

    @Override // java.lang.CharSequence
    public char charAt(int i10) {
        return this.f3653d.charAt(i10);
    }

    @Override // android.text.Spanned
    public int getSpanEnd(Object obj) {
        return this.f3653d.getSpanEnd(obj);
    }

    @Override // android.text.Spanned
    public int getSpanFlags(Object obj) {
        return this.f3653d.getSpanFlags(obj);
    }

    @Override // android.text.Spanned
    public int getSpanStart(Object obj) {
        return this.f3653d.getSpanStart(obj);
    }

    @Override // android.text.Spanned
    public Object[] getSpans(int i10, int i11, Class cls) {
        if (Build.VERSION.SDK_INT >= 29) {
            return this.f3655i.getSpans(i10, i11, cls);
        }
        return this.f3653d.getSpans(i10, i11, cls);
    }

    @Override // java.lang.CharSequence
    public int length() {
        return this.f3653d.length();
    }

    @Override // android.text.Spanned
    public int nextSpanTransition(int i10, int i11, Class cls) {
        return this.f3653d.nextSpanTransition(i10, i11, cls);
    }

    @Override // android.text.Spannable
    public void removeSpan(Object obj) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3655i.removeSpan(obj);
                return;
            } else {
                this.f3653d.removeSpan(obj);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be removed from PrecomputedText.");
    }

    @Override // android.text.Spannable
    public void setSpan(Object obj, int i10, int i11, int i12) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3655i.setSpan(obj, i10, i11, i12);
                return;
            } else {
                this.f3653d.setSpan(obj, i10, i11, i12);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be set to PrecomputedText.");
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        return this.f3653d.subSequence(i10, i11);
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return this.f3653d.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Params {

        /* renamed from: a  reason: collision with root package name */
        private final TextPaint f3656a;

        /* renamed from: b  reason: collision with root package name */
        private final TextDirectionHeuristic f3657b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3658c;

        /* renamed from: d  reason: collision with root package name */
        private final int f3659d;

        /* renamed from: e  reason: collision with root package name */
        final PrecomputedText.Params f3660e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private final TextPaint f3661a;

            /* renamed from: c  reason: collision with root package name */
            private int f3663c = 1;

            /* renamed from: d  reason: collision with root package name */
            private int f3664d = 1;

            /* renamed from: b  reason: collision with root package name */
            private TextDirectionHeuristic f3662b = TextDirectionHeuristics.FIRSTSTRONG_LTR;

            public a(TextPaint textPaint) {
                this.f3661a = textPaint;
            }

            public Params a() {
                return new Params(this.f3661a, this.f3662b, this.f3663c, this.f3664d);
            }

            public a b(int i10) {
                this.f3663c = i10;
                return this;
            }

            public a c(int i10) {
                this.f3664d = i10;
                return this;
            }

            public a d(TextDirectionHeuristic textDirectionHeuristic) {
                this.f3662b = textDirectionHeuristic;
                return this;
            }
        }

        Params(TextPaint textPaint, TextDirectionHeuristic textDirectionHeuristic, int i10, int i11) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3660e = d.a(textPaint).setBreakStrategy(i10).setHyphenationFrequency(i11).setTextDirection(textDirectionHeuristic).build();
            } else {
                this.f3660e = null;
            }
            this.f3656a = textPaint;
            this.f3657b = textDirectionHeuristic;
            this.f3658c = i10;
            this.f3659d = i11;
        }

        public boolean a(Params params) {
            if (this.f3658c != params.b() || this.f3659d != params.c() || this.f3656a.getTextSize() != params.e().getTextSize() || this.f3656a.getTextScaleX() != params.e().getTextScaleX() || this.f3656a.getTextSkewX() != params.e().getTextSkewX() || this.f3656a.getLetterSpacing() != params.e().getLetterSpacing() || !TextUtils.equals(this.f3656a.getFontFeatureSettings(), params.e().getFontFeatureSettings()) || this.f3656a.getFlags() != params.e().getFlags() || !this.f3656a.getTextLocales().equals(params.e().getTextLocales())) {
                return false;
            }
            if (this.f3656a.getTypeface() == null) {
                if (params.e().getTypeface() != null) {
                    return false;
                }
                return true;
            } else if (!this.f3656a.getTypeface().equals(params.e().getTypeface())) {
                return false;
            } else {
                return true;
            }
        }

        public int b() {
            return this.f3658c;
        }

        public int c() {
            return this.f3659d;
        }

        public TextDirectionHeuristic d() {
            return this.f3657b;
        }

        public TextPaint e() {
            return this.f3656a;
        }

        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof Params)) {
                return false;
            }
            Params params = (Params) obj;
            if (a(params) && this.f3657b == params.d()) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return b2.b.b(Float.valueOf(this.f3656a.getTextSize()), Float.valueOf(this.f3656a.getTextScaleX()), Float.valueOf(this.f3656a.getTextSkewX()), Float.valueOf(this.f3656a.getLetterSpacing()), Integer.valueOf(this.f3656a.getFlags()), this.f3656a.getTextLocales(), this.f3656a.getTypeface(), Boolean.valueOf(this.f3656a.isElegantTextHeight()), this.f3657b, Integer.valueOf(this.f3658c), Integer.valueOf(this.f3659d));
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder("{");
            sb2.append("textSize=" + this.f3656a.getTextSize());
            sb2.append(", textScaleX=" + this.f3656a.getTextScaleX());
            sb2.append(", textSkewX=" + this.f3656a.getTextSkewX());
            int i10 = Build.VERSION.SDK_INT;
            sb2.append(", letterSpacing=" + this.f3656a.getLetterSpacing());
            sb2.append(", elegantTextHeight=" + this.f3656a.isElegantTextHeight());
            sb2.append(", textLocale=" + this.f3656a.getTextLocales());
            sb2.append(", typeface=" + this.f3656a.getTypeface());
            if (i10 >= 26) {
                sb2.append(", variationSettings=" + this.f3656a.getFontVariationSettings());
            }
            sb2.append(", textDir=" + this.f3657b);
            sb2.append(", breakStrategy=" + this.f3658c);
            sb2.append(", hyphenationFrequency=" + this.f3659d);
            sb2.append("}");
            return sb2.toString();
        }

        public Params(PrecomputedText.Params params) {
            this.f3656a = params.getTextPaint();
            this.f3657b = params.getTextDirection();
            this.f3658c = params.getBreakStrategy();
            this.f3659d = params.getHyphenationFrequency();
            this.f3660e = Build.VERSION.SDK_INT < 29 ? null : params;
        }
    }
}
