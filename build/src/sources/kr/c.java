package kr;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f35041x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f35042a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f35043b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f35044c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f35045d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f35046e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f35047f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f35048g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f35049h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f35050i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f35051j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f35052k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f35053l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f35054m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f35055n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f35056o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f35057p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f35058q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f35059r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f35060s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f35061t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f35062u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f35063v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f35064w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f35065a;

        /* renamed from: c  reason: collision with root package name */
        private int f35067c;

        /* renamed from: d  reason: collision with root package name */
        private int f35068d;

        /* renamed from: e  reason: collision with root package name */
        private int f35069e;

        /* renamed from: f  reason: collision with root package name */
        private int f35070f;

        /* renamed from: g  reason: collision with root package name */
        private int f35071g;

        /* renamed from: h  reason: collision with root package name */
        private int f35072h;

        /* renamed from: i  reason: collision with root package name */
        private int f35073i;

        /* renamed from: j  reason: collision with root package name */
        private int f35074j;

        /* renamed from: k  reason: collision with root package name */
        private int f35075k;

        /* renamed from: l  reason: collision with root package name */
        private int f35076l;

        /* renamed from: m  reason: collision with root package name */
        private int f35077m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f35078n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f35079o;

        /* renamed from: p  reason: collision with root package name */
        private int f35080p;

        /* renamed from: q  reason: collision with root package name */
        private int f35081q;

        /* renamed from: s  reason: collision with root package name */
        private int f35083s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f35084t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f35085u;

        /* renamed from: v  reason: collision with root package name */
        private int f35086v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f35066b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f35082r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f35087w = -1;

        a() {
        }

        public a A(int i10) {
            this.f35071g = i10;
            return this;
        }

        public a B(int i10) {
            this.f35077m = i10;
            return this;
        }

        public a C(int i10) {
            this.f35082r = i10;
            return this;
        }

        public a D(int i10) {
            this.f35087w = i10;
            return this;
        }

        public a x(int i10) {
            this.f35067c = i10;
            return this;
        }

        public a y(int i10) {
            this.f35068d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f35042a = aVar.f35065a;
        this.f35043b = aVar.f35066b;
        this.f35044c = aVar.f35067c;
        this.f35045d = aVar.f35068d;
        this.f35046e = aVar.f35069e;
        this.f35047f = aVar.f35070f;
        this.f35048g = aVar.f35071g;
        this.f35049h = aVar.f35072h;
        this.f35050i = aVar.f35073i;
        this.f35051j = aVar.f35074j;
        this.f35052k = aVar.f35075k;
        this.f35053l = aVar.f35076l;
        this.f35054m = aVar.f35077m;
        this.f35055n = aVar.f35078n;
        this.f35056o = aVar.f35079o;
        this.f35057p = aVar.f35080p;
        this.f35058q = aVar.f35081q;
        this.f35059r = aVar.f35082r;
        this.f35060s = aVar.f35083s;
        this.f35061t = aVar.f35084t;
        this.f35062u = aVar.f35085u;
        this.f35063v = aVar.f35086v;
        this.f35064w = aVar.f35087w;
    }

    public static a i(Context context) {
        qr.b a10 = qr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f35046e;
        if (i10 == 0) {
            i10 = qr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f35051j;
        if (i10 == 0) {
            i10 = this.f35050i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f35056o;
        if (typeface == null) {
            typeface = this.f35055n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f35058q;
            if (i11 <= 0) {
                i11 = this.f35057p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f35058q;
        if (i12 <= 0) {
            i12 = this.f35057p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f35050i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f35055n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f35057p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f35057p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f35060s;
        if (i10 == 0) {
            i10 = qr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f35059r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f35061t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f35062u;
        if (fArr == null) {
            fArr = f35041x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f35043b);
        int i10 = this.f35042a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f35047f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f35048g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f35063v;
        if (i10 == 0) {
            i10 = qr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f35064w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f35044c;
    }

    public int k() {
        int i10 = this.f35045d;
        if (i10 == 0) {
            return (int) ((this.f35044c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f35044c, i10) / 2;
        int i11 = this.f35049h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f35052k;
        if (i10 != 0) {
            return i10;
        }
        return qr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f35053l;
        if (i10 == 0) {
            i10 = this.f35052k;
        }
        if (i10 != 0) {
            return i10;
        }
        return qr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f35054m;
    }
}
