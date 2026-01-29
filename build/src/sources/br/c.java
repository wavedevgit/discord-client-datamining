package br;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f7749x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f7750a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f7751b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f7752c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f7753d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f7754e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f7755f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f7756g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f7757h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f7758i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f7759j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f7760k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f7761l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f7762m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f7763n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f7764o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f7765p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f7766q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f7767r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f7768s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f7769t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f7770u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f7771v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f7772w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7773a;

        /* renamed from: c  reason: collision with root package name */
        private int f7775c;

        /* renamed from: d  reason: collision with root package name */
        private int f7776d;

        /* renamed from: e  reason: collision with root package name */
        private int f7777e;

        /* renamed from: f  reason: collision with root package name */
        private int f7778f;

        /* renamed from: g  reason: collision with root package name */
        private int f7779g;

        /* renamed from: h  reason: collision with root package name */
        private int f7780h;

        /* renamed from: i  reason: collision with root package name */
        private int f7781i;

        /* renamed from: j  reason: collision with root package name */
        private int f7782j;

        /* renamed from: k  reason: collision with root package name */
        private int f7783k;

        /* renamed from: l  reason: collision with root package name */
        private int f7784l;

        /* renamed from: m  reason: collision with root package name */
        private int f7785m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f7786n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f7787o;

        /* renamed from: p  reason: collision with root package name */
        private int f7788p;

        /* renamed from: q  reason: collision with root package name */
        private int f7789q;

        /* renamed from: s  reason: collision with root package name */
        private int f7791s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f7792t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f7793u;

        /* renamed from: v  reason: collision with root package name */
        private int f7794v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f7774b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f7790r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f7795w = -1;

        a() {
        }

        public a A(int i10) {
            this.f7779g = i10;
            return this;
        }

        public a B(int i10) {
            this.f7785m = i10;
            return this;
        }

        public a C(int i10) {
            this.f7790r = i10;
            return this;
        }

        public a D(int i10) {
            this.f7795w = i10;
            return this;
        }

        public a x(int i10) {
            this.f7775c = i10;
            return this;
        }

        public a y(int i10) {
            this.f7776d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f7750a = aVar.f7773a;
        this.f7751b = aVar.f7774b;
        this.f7752c = aVar.f7775c;
        this.f7753d = aVar.f7776d;
        this.f7754e = aVar.f7777e;
        this.f7755f = aVar.f7778f;
        this.f7756g = aVar.f7779g;
        this.f7757h = aVar.f7780h;
        this.f7758i = aVar.f7781i;
        this.f7759j = aVar.f7782j;
        this.f7760k = aVar.f7783k;
        this.f7761l = aVar.f7784l;
        this.f7762m = aVar.f7785m;
        this.f7763n = aVar.f7786n;
        this.f7764o = aVar.f7787o;
        this.f7765p = aVar.f7788p;
        this.f7766q = aVar.f7789q;
        this.f7767r = aVar.f7790r;
        this.f7768s = aVar.f7791s;
        this.f7769t = aVar.f7792t;
        this.f7770u = aVar.f7793u;
        this.f7771v = aVar.f7794v;
        this.f7772w = aVar.f7795w;
    }

    public static a i(Context context) {
        hr.b a10 = hr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f7754e;
        if (i10 == 0) {
            i10 = hr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f7759j;
        if (i10 == 0) {
            i10 = this.f7758i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f7764o;
        if (typeface == null) {
            typeface = this.f7763n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f7766q;
            if (i11 <= 0) {
                i11 = this.f7765p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f7766q;
        if (i12 <= 0) {
            i12 = this.f7765p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f7758i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f7763n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f7765p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f7765p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f7768s;
        if (i10 == 0) {
            i10 = hr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f7767r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f7769t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f7770u;
        if (fArr == null) {
            fArr = f7749x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f7751b);
        int i10 = this.f7750a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f7755f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f7756g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f7771v;
        if (i10 == 0) {
            i10 = hr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f7772w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f7752c;
    }

    public int k() {
        int i10 = this.f7753d;
        if (i10 == 0) {
            return (int) ((this.f7752c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f7752c, i10) / 2;
        int i11 = this.f7757h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f7760k;
        if (i10 != 0) {
            return i10;
        }
        return hr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f7761l;
        if (i10 == 0) {
            i10 = this.f7760k;
        }
        if (i10 != 0) {
            return i10;
        }
        return hr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f7762m;
    }
}
