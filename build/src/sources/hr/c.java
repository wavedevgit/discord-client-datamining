package hr;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f26905x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f26906a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f26907b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f26908c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f26909d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f26910e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f26911f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f26912g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f26913h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f26914i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f26915j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f26916k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f26917l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f26918m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f26919n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f26920o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f26921p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f26922q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f26923r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f26924s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f26925t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f26926u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f26927v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f26928w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f26929a;

        /* renamed from: c  reason: collision with root package name */
        private int f26931c;

        /* renamed from: d  reason: collision with root package name */
        private int f26932d;

        /* renamed from: e  reason: collision with root package name */
        private int f26933e;

        /* renamed from: f  reason: collision with root package name */
        private int f26934f;

        /* renamed from: g  reason: collision with root package name */
        private int f26935g;

        /* renamed from: h  reason: collision with root package name */
        private int f26936h;

        /* renamed from: i  reason: collision with root package name */
        private int f26937i;

        /* renamed from: j  reason: collision with root package name */
        private int f26938j;

        /* renamed from: k  reason: collision with root package name */
        private int f26939k;

        /* renamed from: l  reason: collision with root package name */
        private int f26940l;

        /* renamed from: m  reason: collision with root package name */
        private int f26941m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f26942n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f26943o;

        /* renamed from: p  reason: collision with root package name */
        private int f26944p;

        /* renamed from: q  reason: collision with root package name */
        private int f26945q;

        /* renamed from: s  reason: collision with root package name */
        private int f26947s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f26948t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f26949u;

        /* renamed from: v  reason: collision with root package name */
        private int f26950v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f26930b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f26946r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f26951w = -1;

        a() {
        }

        public a A(int i10) {
            this.f26935g = i10;
            return this;
        }

        public a B(int i10) {
            this.f26941m = i10;
            return this;
        }

        public a C(int i10) {
            this.f26946r = i10;
            return this;
        }

        public a D(int i10) {
            this.f26951w = i10;
            return this;
        }

        public a x(int i10) {
            this.f26931c = i10;
            return this;
        }

        public a y(int i10) {
            this.f26932d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f26906a = aVar.f26929a;
        this.f26907b = aVar.f26930b;
        this.f26908c = aVar.f26931c;
        this.f26909d = aVar.f26932d;
        this.f26910e = aVar.f26933e;
        this.f26911f = aVar.f26934f;
        this.f26912g = aVar.f26935g;
        this.f26913h = aVar.f26936h;
        this.f26914i = aVar.f26937i;
        this.f26915j = aVar.f26938j;
        this.f26916k = aVar.f26939k;
        this.f26917l = aVar.f26940l;
        this.f26918m = aVar.f26941m;
        this.f26919n = aVar.f26942n;
        this.f26920o = aVar.f26943o;
        this.f26921p = aVar.f26944p;
        this.f26922q = aVar.f26945q;
        this.f26923r = aVar.f26946r;
        this.f26924s = aVar.f26947s;
        this.f26925t = aVar.f26948t;
        this.f26926u = aVar.f26949u;
        this.f26927v = aVar.f26950v;
        this.f26928w = aVar.f26951w;
    }

    public static a i(Context context) {
        nr.b a10 = nr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f26910e;
        if (i10 == 0) {
            i10 = nr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f26915j;
        if (i10 == 0) {
            i10 = this.f26914i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f26920o;
        if (typeface == null) {
            typeface = this.f26919n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f26922q;
            if (i11 <= 0) {
                i11 = this.f26921p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f26922q;
        if (i12 <= 0) {
            i12 = this.f26921p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f26914i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f26919n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f26921p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f26921p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f26924s;
        if (i10 == 0) {
            i10 = nr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f26923r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f26925t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f26926u;
        if (fArr == null) {
            fArr = f26905x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f26907b);
        int i10 = this.f26906a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f26911f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f26912g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f26927v;
        if (i10 == 0) {
            i10 = nr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f26928w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f26908c;
    }

    public int k() {
        int i10 = this.f26909d;
        if (i10 == 0) {
            return (int) ((this.f26908c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f26908c, i10) / 2;
        int i11 = this.f26913h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f26916k;
        if (i10 != 0) {
            return i10;
        }
        return nr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f26917l;
        if (i10 == 0) {
            i10 = this.f26916k;
        }
        if (i10 != 0) {
            return i10;
        }
        return nr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f26918m;
    }
}
