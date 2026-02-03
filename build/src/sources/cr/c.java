package cr;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f20747x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f20748a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f20749b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f20750c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f20751d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f20752e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f20753f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f20754g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f20755h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f20756i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f20757j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f20758k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f20759l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f20760m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f20761n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f20762o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f20763p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f20764q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f20765r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f20766s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f20767t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f20768u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f20769v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f20770w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f20771a;

        /* renamed from: c  reason: collision with root package name */
        private int f20773c;

        /* renamed from: d  reason: collision with root package name */
        private int f20774d;

        /* renamed from: e  reason: collision with root package name */
        private int f20775e;

        /* renamed from: f  reason: collision with root package name */
        private int f20776f;

        /* renamed from: g  reason: collision with root package name */
        private int f20777g;

        /* renamed from: h  reason: collision with root package name */
        private int f20778h;

        /* renamed from: i  reason: collision with root package name */
        private int f20779i;

        /* renamed from: j  reason: collision with root package name */
        private int f20780j;

        /* renamed from: k  reason: collision with root package name */
        private int f20781k;

        /* renamed from: l  reason: collision with root package name */
        private int f20782l;

        /* renamed from: m  reason: collision with root package name */
        private int f20783m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f20784n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f20785o;

        /* renamed from: p  reason: collision with root package name */
        private int f20786p;

        /* renamed from: q  reason: collision with root package name */
        private int f20787q;

        /* renamed from: s  reason: collision with root package name */
        private int f20789s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f20790t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f20791u;

        /* renamed from: v  reason: collision with root package name */
        private int f20792v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f20772b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f20788r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f20793w = -1;

        a() {
        }

        public a A(int i10) {
            this.f20777g = i10;
            return this;
        }

        public a B(int i10) {
            this.f20783m = i10;
            return this;
        }

        public a C(int i10) {
            this.f20788r = i10;
            return this;
        }

        public a D(int i10) {
            this.f20793w = i10;
            return this;
        }

        public a x(int i10) {
            this.f20773c = i10;
            return this;
        }

        public a y(int i10) {
            this.f20774d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f20748a = aVar.f20771a;
        this.f20749b = aVar.f20772b;
        this.f20750c = aVar.f20773c;
        this.f20751d = aVar.f20774d;
        this.f20752e = aVar.f20775e;
        this.f20753f = aVar.f20776f;
        this.f20754g = aVar.f20777g;
        this.f20755h = aVar.f20778h;
        this.f20756i = aVar.f20779i;
        this.f20757j = aVar.f20780j;
        this.f20758k = aVar.f20781k;
        this.f20759l = aVar.f20782l;
        this.f20760m = aVar.f20783m;
        this.f20761n = aVar.f20784n;
        this.f20762o = aVar.f20785o;
        this.f20763p = aVar.f20786p;
        this.f20764q = aVar.f20787q;
        this.f20765r = aVar.f20788r;
        this.f20766s = aVar.f20789s;
        this.f20767t = aVar.f20790t;
        this.f20768u = aVar.f20791u;
        this.f20769v = aVar.f20792v;
        this.f20770w = aVar.f20793w;
    }

    public static a i(Context context) {
        ir.b a10 = ir.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f20752e;
        if (i10 == 0) {
            i10 = ir.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f20757j;
        if (i10 == 0) {
            i10 = this.f20756i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f20762o;
        if (typeface == null) {
            typeface = this.f20761n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f20764q;
            if (i11 <= 0) {
                i11 = this.f20763p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f20764q;
        if (i12 <= 0) {
            i12 = this.f20763p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f20756i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f20761n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f20763p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f20763p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f20766s;
        if (i10 == 0) {
            i10 = ir.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f20765r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f20767t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f20768u;
        if (fArr == null) {
            fArr = f20747x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f20749b);
        int i10 = this.f20748a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f20753f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f20754g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f20769v;
        if (i10 == 0) {
            i10 = ir.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f20770w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f20750c;
    }

    public int k() {
        int i10 = this.f20751d;
        if (i10 == 0) {
            return (int) ((this.f20750c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f20750c, i10) / 2;
        int i11 = this.f20755h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f20758k;
        if (i10 != 0) {
            return i10;
        }
        return ir.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f20759l;
        if (i10 == 0) {
            i10 = this.f20758k;
        }
        if (i10 != 0) {
            return i10;
        }
        return ir.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f20760m;
    }
}
