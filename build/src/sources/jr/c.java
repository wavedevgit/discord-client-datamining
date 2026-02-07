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
    private static final float[] f30949x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f30950a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f30951b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f30952c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f30953d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f30954e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f30955f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f30956g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f30957h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f30958i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f30959j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f30960k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f30961l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f30962m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f30963n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f30964o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f30965p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f30966q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f30967r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f30968s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f30969t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f30970u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f30971v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f30972w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f30973a;

        /* renamed from: c  reason: collision with root package name */
        private int f30975c;

        /* renamed from: d  reason: collision with root package name */
        private int f30976d;

        /* renamed from: e  reason: collision with root package name */
        private int f30977e;

        /* renamed from: f  reason: collision with root package name */
        private int f30978f;

        /* renamed from: g  reason: collision with root package name */
        private int f30979g;

        /* renamed from: h  reason: collision with root package name */
        private int f30980h;

        /* renamed from: i  reason: collision with root package name */
        private int f30981i;

        /* renamed from: j  reason: collision with root package name */
        private int f30982j;

        /* renamed from: k  reason: collision with root package name */
        private int f30983k;

        /* renamed from: l  reason: collision with root package name */
        private int f30984l;

        /* renamed from: m  reason: collision with root package name */
        private int f30985m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f30986n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f30987o;

        /* renamed from: p  reason: collision with root package name */
        private int f30988p;

        /* renamed from: q  reason: collision with root package name */
        private int f30989q;

        /* renamed from: s  reason: collision with root package name */
        private int f30991s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f30992t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f30993u;

        /* renamed from: v  reason: collision with root package name */
        private int f30994v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f30974b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f30990r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f30995w = -1;

        a() {
        }

        public a A(int i10) {
            this.f30979g = i10;
            return this;
        }

        public a B(int i10) {
            this.f30985m = i10;
            return this;
        }

        public a C(int i10) {
            this.f30990r = i10;
            return this;
        }

        public a D(int i10) {
            this.f30995w = i10;
            return this;
        }

        public a x(int i10) {
            this.f30975c = i10;
            return this;
        }

        public a y(int i10) {
            this.f30976d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f30950a = aVar.f30973a;
        this.f30951b = aVar.f30974b;
        this.f30952c = aVar.f30975c;
        this.f30953d = aVar.f30976d;
        this.f30954e = aVar.f30977e;
        this.f30955f = aVar.f30978f;
        this.f30956g = aVar.f30979g;
        this.f30957h = aVar.f30980h;
        this.f30958i = aVar.f30981i;
        this.f30959j = aVar.f30982j;
        this.f30960k = aVar.f30983k;
        this.f30961l = aVar.f30984l;
        this.f30962m = aVar.f30985m;
        this.f30963n = aVar.f30986n;
        this.f30964o = aVar.f30987o;
        this.f30965p = aVar.f30988p;
        this.f30966q = aVar.f30989q;
        this.f30967r = aVar.f30990r;
        this.f30968s = aVar.f30991s;
        this.f30969t = aVar.f30992t;
        this.f30970u = aVar.f30993u;
        this.f30971v = aVar.f30994v;
        this.f30972w = aVar.f30995w;
    }

    public static a i(Context context) {
        pr.b a10 = pr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f30954e;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f30959j;
        if (i10 == 0) {
            i10 = this.f30958i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f30964o;
        if (typeface == null) {
            typeface = this.f30963n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f30966q;
            if (i11 <= 0) {
                i11 = this.f30965p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f30966q;
        if (i12 <= 0) {
            i12 = this.f30965p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f30958i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f30963n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f30965p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f30965p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f30968s;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f30967r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f30969t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f30970u;
        if (fArr == null) {
            fArr = f30949x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f30951b);
        int i10 = this.f30950a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f30955f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f30956g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f30971v;
        if (i10 == 0) {
            i10 = pr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f30972w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f30952c;
    }

    public int k() {
        int i10 = this.f30953d;
        if (i10 == 0) {
            return (int) ((this.f30952c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f30952c, i10) / 2;
        int i11 = this.f30957h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f30960k;
        if (i10 != 0) {
            return i10;
        }
        return pr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f30961l;
        if (i10 == 0) {
            i10 = this.f30960k;
        }
        if (i10 != 0) {
            return i10;
        }
        return pr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f30962m;
    }
}
