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
    private static final Object f3242o = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final Spannable f3243d;

    /* renamed from: e  reason: collision with root package name */
    private final Params f3244e;

    /* renamed from: i  reason: collision with root package name */
    private final PrecomputedText f3245i;

    public Params a() {
        return this.f3244e;
    }

    public PrecomputedText b() {
        Spannable spannable = this.f3243d;
        if (b.a(spannable)) {
            return c.a(spannable);
        }
        return null;
    }

    @Override // java.lang.CharSequence
    public char charAt(int i10) {
        return this.f3243d.charAt(i10);
    }

    @Override // android.text.Spanned
    public int getSpanEnd(Object obj) {
        return this.f3243d.getSpanEnd(obj);
    }

    @Override // android.text.Spanned
    public int getSpanFlags(Object obj) {
        return this.f3243d.getSpanFlags(obj);
    }

    @Override // android.text.Spanned
    public int getSpanStart(Object obj) {
        return this.f3243d.getSpanStart(obj);
    }

    @Override // android.text.Spanned
    public Object[] getSpans(int i10, int i11, Class cls) {
        if (Build.VERSION.SDK_INT >= 29) {
            return this.f3245i.getSpans(i10, i11, cls);
        }
        return this.f3243d.getSpans(i10, i11, cls);
    }

    @Override // java.lang.CharSequence
    public int length() {
        return this.f3243d.length();
    }

    @Override // android.text.Spanned
    public int nextSpanTransition(int i10, int i11, Class cls) {
        return this.f3243d.nextSpanTransition(i10, i11, cls);
    }

    @Override // android.text.Spannable
    public void removeSpan(Object obj) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3245i.removeSpan(obj);
                return;
            } else {
                this.f3243d.removeSpan(obj);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be removed from PrecomputedText.");
    }

    @Override // android.text.Spannable
    public void setSpan(Object obj, int i10, int i11, int i12) {
        if (!(obj instanceof MetricAffectingSpan)) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3245i.setSpan(obj, i10, i11, i12);
                return;
            } else {
                this.f3243d.setSpan(obj, i10, i11, i12);
                return;
            }
        }
        throw new IllegalArgumentException("MetricAffectingSpan can not be set to PrecomputedText.");
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        return this.f3243d.subSequence(i10, i11);
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return this.f3243d.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Params {

        /* renamed from: a  reason: collision with root package name */
        private final TextPaint f3246a;

        /* renamed from: b  reason: collision with root package name */
        private final TextDirectionHeuristic f3247b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3248c;

        /* renamed from: d  reason: collision with root package name */
        private final int f3249d;

        /* renamed from: e  reason: collision with root package name */
        final PrecomputedText.Params f3250e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private final TextPaint f3251a;

            /* renamed from: c  reason: collision with root package name */
            private int f3253c = 1;

            /* renamed from: d  reason: collision with root package name */
            private int f3254d = 1;

            /* renamed from: b  reason: collision with root package name */
            private TextDirectionHeuristic f3252b = TextDirectionHeuristics.FIRSTSTRONG_LTR;

            public a(TextPaint textPaint) {
                this.f3251a = textPaint;
            }

            public Params a() {
                return new Params(this.f3251a, this.f3252b, this.f3253c, this.f3254d);
            }

            public a b(int i10) {
                this.f3253c = i10;
                return this;
            }

            public a c(int i10) {
                this.f3254d = i10;
                return this;
            }

            public a d(TextDirectionHeuristic textDirectionHeuristic) {
                this.f3252b = textDirectionHeuristic;
                return this;
            }
        }

        Params(TextPaint textPaint, TextDirectionHeuristic textDirectionHeuristic, int i10, int i11) {
            if (Build.VERSION.SDK_INT >= 29) {
                this.f3250e = d.a(textPaint).setBreakStrategy(i10).setHyphenationFrequency(i11).setTextDirection(textDirectionHeuristic).build();
            } else {
                this.f3250e = null;
            }
            this.f3246a = textPaint;
            this.f3247b = textDirectionHeuristic;
            this.f3248c = i10;
            this.f3249d = i11;
        }

        public boolean a(Params params) {
            if (this.f3248c != params.b() || this.f3249d != params.c() || this.f3246a.getTextSize() != params.e().getTextSize() || this.f3246a.getTextScaleX() != params.e().getTextScaleX() || this.f3246a.getTextSkewX() != params.e().getTextSkewX() || this.f3246a.getLetterSpacing() != params.e().getLetterSpacing() || !TextUtils.equals(this.f3246a.getFontFeatureSettings(), params.e().getFontFeatureSettings()) || this.f3246a.getFlags() != params.e().getFlags() || !this.f3246a.getTextLocales().equals(params.e().getTextLocales())) {
                return false;
            }
            if (this.f3246a.getTypeface() == null) {
                if (params.e().getTypeface() != null) {
                    return false;
                }
                return true;
            } else if (!this.f3246a.getTypeface().equals(params.e().getTypeface())) {
                return false;
            } else {
                return true;
            }
        }

        public int b() {
            return this.f3248c;
        }

        public int c() {
            return this.f3249d;
        }

        public TextDirectionHeuristic d() {
            return this.f3247b;
        }

        public TextPaint e() {
            return this.f3246a;
        }

        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof Params)) {
                return false;
            }
            Params params = (Params) obj;
            if (a(params) && this.f3247b == params.d()) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return b2.b.b(Float.valueOf(this.f3246a.getTextSize()), Float.valueOf(this.f3246a.getTextScaleX()), Float.valueOf(this.f3246a.getTextSkewX()), Float.valueOf(this.f3246a.getLetterSpacing()), Integer.valueOf(this.f3246a.getFlags()), this.f3246a.getTextLocales(), this.f3246a.getTypeface(), Boolean.valueOf(this.f3246a.isElegantTextHeight()), this.f3247b, Integer.valueOf(this.f3248c), Integer.valueOf(this.f3249d));
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder("{");
            sb2.append("textSize=" + this.f3246a.getTextSize());
            sb2.append(", textScaleX=" + this.f3246a.getTextScaleX());
            sb2.append(", textSkewX=" + this.f3246a.getTextSkewX());
            int i10 = Build.VERSION.SDK_INT;
            sb2.append(", letterSpacing=" + this.f3246a.getLetterSpacing());
            sb2.append(", elegantTextHeight=" + this.f3246a.isElegantTextHeight());
            sb2.append(", textLocale=" + this.f3246a.getTextLocales());
            sb2.append(", typeface=" + this.f3246a.getTypeface());
            if (i10 >= 26) {
                sb2.append(", variationSettings=" + this.f3246a.getFontVariationSettings());
            }
            sb2.append(", textDir=" + this.f3247b);
            sb2.append(", breakStrategy=" + this.f3248c);
            sb2.append(", hyphenationFrequency=" + this.f3249d);
            sb2.append("}");
            return sb2.toString();
        }

        public Params(PrecomputedText.Params params) {
            this.f3246a = params.getTextPaint();
            this.f3247b = params.getTextDirection();
            this.f3248c = params.getBreakStrategy();
            this.f3249d = params.getHyphenationFrequency();
            this.f3250e = Build.VERSION.SDK_INT < 29 ? null : params;
        }
    }
}
