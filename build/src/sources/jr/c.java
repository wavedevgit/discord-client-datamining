package jr;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f30901x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f30902a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f30903b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f30904c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f30905d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f30906e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f30907f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f30908g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f30909h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f30910i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f30911j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f30912k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f30913l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f30914m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f30915n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f30916o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f30917p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f30918q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f30919r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f30920s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f30921t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f30922u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f30923v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f30924w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f30925a;

        /* renamed from: c  reason: collision with root package name */
        private int f30927c;

        /* renamed from: d  reason: collision with root package name */
        private int f30928d;

        /* renamed from: e  reason: collision with root package name */
        private int f30929e;

        /* renamed from: f  reason: collision with root package name */
        private int f30930f;

        /* renamed from: g  reason: collision with root package name */
        private int f30931g;

        /* renamed from: h  reason: collision with root package name */
        private int f30932h;

        /* renamed from: i  reason: collision with root package name */
        private int f30933i;

        /* renamed from: j  reason: collision with root package name */
        private int f30934j;

        /* renamed from: k  reason: collision with root package name */
        private int f30935k;

        /* renamed from: l  reason: collision with root package name */
        private int f30936l;

        /* renamed from: m  reason: collision with root package name */
        private int f30937m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f30938n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f30939o;

        /* renamed from: p  reason: collision with root package name */
        private int f30940p;

        /* renamed from: q  reason: collision with root package name */
        private int f30941q;

        /* renamed from: s  reason: collision with root package name */
        private int f30943s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f30944t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f30945u;

        /* renamed from: v  reason: collision with root package name */
        private int f30946v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f30926b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f30942r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f30947w = -1;

        a() {
        }

        public a A(int i10) {
            this.f30931g = i10;
            return this;
        }

        public a B(int i10) {
            this.f30937m = i10;
            return this;
        }

        public a C(int i10) {
            this.f30942r = i10;
            return this;
        }

        public a D(int i10) {
            this.f30947w = i10;
            return this;
        }

        public a x(int i10) {
            this.f30927c = i10;
            return this;
        }

        public a y(int i10) {
            this.f30928d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f30902a = aVar.f30925a;
        this.f30903b = aVar.f30926b;
        this.f30904c = aVar.f30927c;
        this.f30905d = aVar.f30928d;
        this.f30906e = aVar.f30929e;
        this.f30907f = aVar.f30930f;
        this.f30908g = aVar.f30931g;
        this.f30909h = aVar.f30932h;
        this.f30910i = aVar.f30933i;
        this.f30911j = aVar.f30934j;
        this.f30912k = aVar.f30935k;
        this.f30913l = aVar.f30936l;
        this.f30914m = aVar.f30937m;
        this.f30915n = aVar.f30938n;
        this.f30916o = aVar.f30939o;
        this.f30917p = aVar.f30940p;
        this.f30918q = aVar.f30941q;
        this.f30919r = aVar.f30942r;
        this.f30920s = aVar.f30943s;
        this.f30921t = aVar.f30944t;
        this.f30922u = aVar.f30945u;
        this.f30923v = aVar.f30946v;
        this.f30924w = aVar.f30947w;
    }

    public static a i(Context context) {
        pr.b a10 = pr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f30906e;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f30911j;
        if (i10 == 0) {
            i10 = this.f30910i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f30916o;
        if (typeface == null) {
            typeface = this.f30915n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f30918q;
            if (i11 <= 0) {
                i11 = this.f30917p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f30918q;
        if (i12 <= 0) {
            i12 = this.f30917p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f30910i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f30915n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f30917p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f30917p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f30920s;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f30919r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f30921t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f30922u;
        if (fArr == null) {
            fArr = f30901x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f30903b);
        int i10 = this.f30902a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f30907f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f30908g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f30923v;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f30924w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f30904c;
    }

    public int k() {
        int i10 = this.f30905d;
        if (i10 == 0) {
            return (int) ((this.f30904c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f30904c, i10) / 2;
        int i11 = this.f30909h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f30912k;
        if (i10 != 0) {
            return i10;
        }
        return pr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f30913l;
        if (i10 == 0) {
            i10 = this.f30912k;
        }
        if (i10 != 0) {
            return i10;
        }
        return pr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f30914m;
    }
}
