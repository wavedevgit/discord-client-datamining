package tr;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f49893x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f49894a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f49895b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f49896c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f49897d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f49898e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f49899f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f49900g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f49901h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f49902i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f49903j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f49904k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f49905l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f49906m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f49907n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f49908o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f49909p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f49910q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f49911r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f49912s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f49913t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f49914u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f49915v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f49916w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f49917a;

        /* renamed from: c  reason: collision with root package name */
        private int f49919c;

        /* renamed from: d  reason: collision with root package name */
        private int f49920d;

        /* renamed from: e  reason: collision with root package name */
        private int f49921e;

        /* renamed from: f  reason: collision with root package name */
        private int f49922f;

        /* renamed from: g  reason: collision with root package name */
        private int f49923g;

        /* renamed from: h  reason: collision with root package name */
        private int f49924h;

        /* renamed from: i  reason: collision with root package name */
        private int f49925i;

        /* renamed from: j  reason: collision with root package name */
        private int f49926j;

        /* renamed from: k  reason: collision with root package name */
        private int f49927k;

        /* renamed from: l  reason: collision with root package name */
        private int f49928l;

        /* renamed from: m  reason: collision with root package name */
        private int f49929m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f49930n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f49931o;

        /* renamed from: p  reason: collision with root package name */
        private int f49932p;

        /* renamed from: q  reason: collision with root package name */
        private int f49933q;

        /* renamed from: s  reason: collision with root package name */
        private int f49935s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f49936t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f49937u;

        /* renamed from: v  reason: collision with root package name */
        private int f49938v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f49918b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f49934r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f49939w = -1;

        a() {
        }

        public a A(int i10) {
            this.f49923g = i10;
            return this;
        }

        public a B(int i10) {
            this.f49929m = i10;
            return this;
        }

        public a C(int i10) {
            this.f49934r = i10;
            return this;
        }

        public a D(int i10) {
            this.f49939w = i10;
            return this;
        }

        public a x(int i10) {
            this.f49919c = i10;
            return this;
        }

        public a y(int i10) {
            this.f49920d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f49894a = aVar.f49917a;
        this.f49895b = aVar.f49918b;
        this.f49896c = aVar.f49919c;
        this.f49897d = aVar.f49920d;
        this.f49898e = aVar.f49921e;
        this.f49899f = aVar.f49922f;
        this.f49900g = aVar.f49923g;
        this.f49901h = aVar.f49924h;
        this.f49902i = aVar.f49925i;
        this.f49903j = aVar.f49926j;
        this.f49904k = aVar.f49927k;
        this.f49905l = aVar.f49928l;
        this.f49906m = aVar.f49929m;
        this.f49907n = aVar.f49930n;
        this.f49908o = aVar.f49931o;
        this.f49909p = aVar.f49932p;
        this.f49910q = aVar.f49933q;
        this.f49911r = aVar.f49934r;
        this.f49912s = aVar.f49935s;
        this.f49913t = aVar.f49936t;
        this.f49914u = aVar.f49937u;
        this.f49915v = aVar.f49938v;
        this.f49916w = aVar.f49939w;
    }

    public static a i(Context context) {
        zr.b a10 = zr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f49898e;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f49903j;
        if (i10 == 0) {
            i10 = this.f49902i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f49908o;
        if (typeface == null) {
            typeface = this.f49907n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f49910q;
            if (i11 <= 0) {
                i11 = this.f49909p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f49910q;
        if (i12 <= 0) {
            i12 = this.f49909p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f49902i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f49907n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f49909p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f49909p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f49912s;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f49911r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f49913t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f49914u;
        if (fArr == null) {
            fArr = f49893x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f49895b);
        int i10 = this.f49894a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f49899f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f49900g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f49915v;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f49916w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f49896c;
    }

    public int k() {
        int i10 = this.f49897d;
        if (i10 == 0) {
            return (int) ((this.f49896c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f49896c, i10) / 2;
        int i11 = this.f49901h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f49904k;
        if (i10 != 0) {
            return i10;
        }
        return zr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f49905l;
        if (i10 == 0) {
            i10 = this.f49904k;
        }
        if (i10 != 0) {
            return i10;
        }
        return zr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f49906m;
    }
}
