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
    private static final Object f3352o = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final Spannable f3353d;

    /* renamed from: e  reason: collision with root package name */
    private final Params f3354e;

    /* renamed from: i  reason: collision with root package name */
    private final PrecomputedText f3355i;

    public Params a() {
        return this.f3354e;
    }

    public PrecomputedText b() {
        Spannable spannable = this.f3353d;
        if (b.a(spannable)) {
            return c.a(spannable);
        }
        return null;
    }

    @Override // java.lang.CharSequence
    public char charAt(int i10) {
        return this.f3353d.charAt(i10);
    }

    @Override // android.text.Spanned
    public int getSpanEnd(Object obj) {
        return this.f3353d.getSpanEnd(obj);
    }

    @Override // android.text.Spanned
    public int getSpanFlags(Object obj) {
        return this.f3353d.getSpanFlags(obj);
    }

    @Override // android.text.Spanned
    public int getSpanStart(Object obj) {
        return this.f3353d.getSpanStart(obj);
    }

    @Override // android.text.Spanned
    public Object[] getSpans(int i10, int i11, Class cls) {
        if (Build.VERSION.SDK_INT >= 29) {
            return this.f3355i.getSpans(i10, i11, cls);
        }
        return this.f3353d.getSpans(i10, i11, cls);
    }

    @Override // java.lang.CharSequence
    public int length() {
        return this.f3353d.length();
    }

    @Override // android.text.Spanned
    public int nextSpanTransition(int i10, int i11, Class cls) {
        return this.f3353d.nextSpanTransition(i10, i11, cls);
    }

    @Override // android.text.Spannable
    public void removeSpan(Object obj) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3355i.removeSpan(obj);
                return;
            } else {
                this.f3353d.removeSpan(obj);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be removed from PrecomputedText.");
    }

    @Override // android.text.Spannable
    public void setSpan(Object obj, int i10, int i11, int i12) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3355i.setSpan(obj, i10, i11, i12);
                return;
            } else {
                this.f3353d.setSpan(obj, i10, i11, i12);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be set to PrecomputedText.");
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        return this.f3353d.subSequence(i10, i11);
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return this.f3353d.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Params {

        /* renamed from: a  reason: collision with root package name */
        private final TextPaint f3356a;

        /* renamed from: b  reason: collision with root package name */
        private final TextDirectionHeuristic f3357b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3358c;

        /* renamed from: d  reason: collision with root package name */
        private final int f3359d;

        /* renamed from: e  reason: collision with root package name */
        final PrecomputedText.Params f3360e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private final TextPaint f3361a;

            /* renamed from: c  reason: collision with root package name */
            private int f3363c = 1;

            /* renamed from: d  reason: collision with root package name */
            private int f3364d = 1;

            /* renamed from: b  reason: collision with root package name */
            private TextDirectionHeuristic f3362b = TextDirectionHeuristics.FIRSTSTRONG_LTR;

            public a(TextPaint textPaint) {
                this.f3361a = textPaint;
            }

            public Params a() {
                return new Params(this.f3361a, this.f3362b, this.f3363c, this.f3364d);
            }

            public a b(int i10) {
                this.f3363c = i10;
                return this;
            }

            public a c(int i10) {
                this.f3364d = i10;
                return this;
            }

            public a d(TextDirectionHeuristic textDirectionHeuristic) {
                this.f3362b = textDirectionHeuristic;
                return this;
            }
        }

        Params(TextPaint textPaint, TextDirectionHeuristic textDirectionHeuristic, int i10, int i11) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3360e = d.a(textPaint).setBreakStrategy(i10).setHyphenationFrequency(i11).setTextDirection(textDirectionHeuristic).build();
            } else {
                this.f3360e = null;
            }
            this.f3356a = textPaint;
            this.f3357b = textDirectionHeuristic;
            this.f3358c = i10;
            this.f3359d = i11;
        }

        public boolean a(Params params) {
            if (this.f3358c != params.b() || this.f3359d != params.c() || this.f3356a.getTextSize() != params.e().getTextSize() || this.f3356a.getTextScaleX() != params.e().getTextScaleX() || this.f3356a.getTextSkewX() != params.e().getTextSkewX() || this.f3356a.getLetterSpacing() != params.e().getLetterSpacing() || !TextUtils.equals(this.f3356a.getFontFeatureSettings(), params.e().getFontFeatureSettings()) || this.f3356a.getFlags() != params.e().getFlags() || !this.f3356a.getTextLocales().equals(params.e().getTextLocales())) {
                return false;
            }
            if (this.f3356a.getTypeface() == null) {
                if (params.e().getTypeface() != null) {
                    return false;
                }
                return true;
            } else if (!this.f3356a.getTypeface().equals(params.e().getTypeface())) {
                return false;
            } else {
                return true;
            }
        }

        public int b() {
            return this.f3358c;
        }

        public int c() {
            return this.f3359d;
        }

        public TextDirectionHeuristic d() {
            return this.f3357b;
        }

        public TextPaint e() {
            return this.f3356a;
        }

        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof Params)) {
                return false;
            }
            Params params = (Params) obj;
            if (a(params) && this.f3357b == params.d()) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return b2.b.b(Float.valueOf(this.f3356a.getTextSize()), Float.valueOf(this.f3356a.getTextScaleX()), Float.valueOf(this.f3356a.getTextSkewX()), Float.valueOf(this.f3356a.getLetterSpacing()), Integer.valueOf(this.f3356a.getFlags()), this.f3356a.getTextLocales(), this.f3356a.getTypeface(), Boolean.valueOf(this.f3356a.isElegantTextHeight()), this.f3357b, Integer.valueOf(this.f3358c), Integer.valueOf(this.f3359d));
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder("{");
            sb2.append("textSize=" + this.f3356a.getTextSize());
            sb2.append(", textScaleX=" + this.f3356a.getTextScaleX());
            sb2.append(", textSkewX=" + this.f3356a.getTextSkewX());
            int i10 = Build.VERSION.SDK_INT;
            sb2.append(", letterSpacing=" + this.f3356a.getLetterSpacing());
            sb2.append(", elegantTextHeight=" + this.f3356a.isElegantTextHeight());
            sb2.append(", textLocale=" + this.f3356a.getTextLocales());
            sb2.append(", typeface=" + this.f3356a.getTypeface());
            if (i10 >= 26) {
                sb2.append(", variationSettings=" + this.f3356a.getFontVariationSettings());
            }
            sb2.append(", textDir=" + this.f3357b);
            sb2.append(", breakStrategy=" + this.f3358c);
            sb2.append(", hyphenationFrequency=" + this.f3359d);
            sb2.append("}");
            return sb2.toString();
        }

        public Params(PrecomputedText.Params params) {
            this.f3356a = params.getTextPaint();
            this.f3357b = params.getTextDirection();
            this.f3358c = params.getBreakStrategy();
            this.f3359d = params.getHyphenationFrequency();
            this.f3360e = Build.VERSION.SDK_INT < 29 ? null : params;
        }
    }
}
