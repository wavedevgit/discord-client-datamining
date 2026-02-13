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
    private static final float[] f50461x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f50462a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f50463b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f50464c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f50465d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f50466e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f50467f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f50468g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f50469h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f50470i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f50471j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f50472k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f50473l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f50474m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f50475n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f50476o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f50477p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f50478q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f50479r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f50480s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f50481t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f50482u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f50483v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f50484w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f50485a;

        /* renamed from: c  reason: collision with root package name */
        private int f50487c;

        /* renamed from: d  reason: collision with root package name */
        private int f50488d;

        /* renamed from: e  reason: collision with root package name */
        private int f50489e;

        /* renamed from: f  reason: collision with root package name */
        private int f50490f;

        /* renamed from: g  reason: collision with root package name */
        private int f50491g;

        /* renamed from: h  reason: collision with root package name */
        private int f50492h;

        /* renamed from: i  reason: collision with root package name */
        private int f50493i;

        /* renamed from: j  reason: collision with root package name */
        private int f50494j;

        /* renamed from: k  reason: collision with root package name */
        private int f50495k;

        /* renamed from: l  reason: collision with root package name */
        private int f50496l;

        /* renamed from: m  reason: collision with root package name */
        private int f50497m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f50498n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f50499o;

        /* renamed from: p  reason: collision with root package name */
        private int f50500p;

        /* renamed from: q  reason: collision with root package name */
        private int f50501q;

        /* renamed from: s  reason: collision with root package name */
        private int f50503s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f50504t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f50505u;

        /* renamed from: v  reason: collision with root package name */
        private int f50506v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f50486b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f50502r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f50507w = -1;

        a() {
        }

        public a A(int i10) {
            this.f50491g = i10;
            return this;
        }

        public a B(int i10) {
            this.f50497m = i10;
            return this;
        }

        public a C(int i10) {
            this.f50502r = i10;
            return this;
        }

        public a D(int i10) {
            this.f50507w = i10;
            return this;
        }

        public a x(int i10) {
            this.f50487c = i10;
            return this;
        }

        public a y(int i10) {
            this.f50488d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f50462a = aVar.f50485a;
        this.f50463b = aVar.f50486b;
        this.f50464c = aVar.f50487c;
        this.f50465d = aVar.f50488d;
        this.f50466e = aVar.f50489e;
        this.f50467f = aVar.f50490f;
        this.f50468g = aVar.f50491g;
        this.f50469h = aVar.f50492h;
        this.f50470i = aVar.f50493i;
        this.f50471j = aVar.f50494j;
        this.f50472k = aVar.f50495k;
        this.f50473l = aVar.f50496l;
        this.f50474m = aVar.f50497m;
        this.f50475n = aVar.f50498n;
        this.f50476o = aVar.f50499o;
        this.f50477p = aVar.f50500p;
        this.f50478q = aVar.f50501q;
        this.f50479r = aVar.f50502r;
        this.f50480s = aVar.f50503s;
        this.f50481t = aVar.f50504t;
        this.f50482u = aVar.f50505u;
        this.f50483v = aVar.f50506v;
        this.f50484w = aVar.f50507w;
    }

    public static a i(Context context) {
        zr.b a10 = zr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f50466e;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f50471j;
        if (i10 == 0) {
            i10 = this.f50470i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f50476o;
        if (typeface == null) {
            typeface = this.f50475n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f50478q;
            if (i11 <= 0) {
                i11 = this.f50477p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f50478q;
        if (i12 <= 0) {
            i12 = this.f50477p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f50470i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f50475n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f50477p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f50477p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f50480s;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f50479r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f50481t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f50482u;
        if (fArr == null) {
            fArr = f50461x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f50463b);
        int i10 = this.f50462a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f50467f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f50468g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f50483v;
        if (i10 == 0) {
            i10 = zr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f50484w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f50464c;
    }

    public int k() {
        int i10 = this.f50465d;
        if (i10 == 0) {
            return (int) ((this.f50464c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f50464c, i10) / 2;
        int i11 = this.f50469h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f50472k;
        if (i10 != 0) {
            return i10;
        }
        return zr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f50473l;
        if (i10 == 0) {
            i10 = this.f50472k;
        }
        if (i10 != 0) {
            return i10;
        }
        return zr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f50474m;
    }
}
