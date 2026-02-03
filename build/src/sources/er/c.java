package er;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.util.Arrays;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: x  reason: collision with root package name */
    private static final float[] f22593x = {2.0f, 1.5f, 1.17f, 1.0f, 0.83f, 0.67f};

    /* renamed from: a  reason: collision with root package name */
    protected final int f22594a;

    /* renamed from: b  reason: collision with root package name */
    protected final boolean f22595b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f22596c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f22597d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f22598e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f22599f;

    /* renamed from: g  reason: collision with root package name */
    protected final int f22600g;

    /* renamed from: h  reason: collision with root package name */
    protected final int f22601h;

    /* renamed from: i  reason: collision with root package name */
    protected final int f22602i;

    /* renamed from: j  reason: collision with root package name */
    protected final int f22603j;

    /* renamed from: k  reason: collision with root package name */
    protected final int f22604k;

    /* renamed from: l  reason: collision with root package name */
    protected final int f22605l;

    /* renamed from: m  reason: collision with root package name */
    protected final int f22606m;

    /* renamed from: n  reason: collision with root package name */
    protected final Typeface f22607n;

    /* renamed from: o  reason: collision with root package name */
    protected final Typeface f22608o;

    /* renamed from: p  reason: collision with root package name */
    protected final int f22609p;

    /* renamed from: q  reason: collision with root package name */
    protected final int f22610q;

    /* renamed from: r  reason: collision with root package name */
    protected final int f22611r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f22612s;

    /* renamed from: t  reason: collision with root package name */
    protected final Typeface f22613t;

    /* renamed from: u  reason: collision with root package name */
    protected final float[] f22614u;

    /* renamed from: v  reason: collision with root package name */
    protected final int f22615v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f22616w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f22617a;

        /* renamed from: c  reason: collision with root package name */
        private int f22619c;

        /* renamed from: d  reason: collision with root package name */
        private int f22620d;

        /* renamed from: e  reason: collision with root package name */
        private int f22621e;

        /* renamed from: f  reason: collision with root package name */
        private int f22622f;

        /* renamed from: g  reason: collision with root package name */
        private int f22623g;

        /* renamed from: h  reason: collision with root package name */
        private int f22624h;

        /* renamed from: i  reason: collision with root package name */
        private int f22625i;

        /* renamed from: j  reason: collision with root package name */
        private int f22626j;

        /* renamed from: k  reason: collision with root package name */
        private int f22627k;

        /* renamed from: l  reason: collision with root package name */
        private int f22628l;

        /* renamed from: m  reason: collision with root package name */
        private int f22629m;

        /* renamed from: n  reason: collision with root package name */
        private Typeface f22630n;

        /* renamed from: o  reason: collision with root package name */
        private Typeface f22631o;

        /* renamed from: p  reason: collision with root package name */
        private int f22632p;

        /* renamed from: q  reason: collision with root package name */
        private int f22633q;

        /* renamed from: s  reason: collision with root package name */
        private int f22635s;

        /* renamed from: t  reason: collision with root package name */
        private Typeface f22636t;

        /* renamed from: u  reason: collision with root package name */
        private float[] f22637u;

        /* renamed from: v  reason: collision with root package name */
        private int f22638v;

        /* renamed from: b  reason: collision with root package name */
        private boolean f22618b = true;

        /* renamed from: r  reason: collision with root package name */
        private int f22634r = -1;

        /* renamed from: w  reason: collision with root package name */
        private int f22639w = -1;

        a() {
        }

        public a A(int i10) {
            this.f22623g = i10;
            return this;
        }

        public a B(int i10) {
            this.f22629m = i10;
            return this;
        }

        public a C(int i10) {
            this.f22634r = i10;
            return this;
        }

        public a D(int i10) {
            this.f22639w = i10;
            return this;
        }

        public a x(int i10) {
            this.f22619c = i10;
            return this;
        }

        public a y(int i10) {
            this.f22620d = i10;
            return this;
        }

        public c z() {
            return new c(this);
        }
    }

    protected c(a aVar) {
        this.f22594a = aVar.f22617a;
        this.f22595b = aVar.f22618b;
        this.f22596c = aVar.f22619c;
        this.f22597d = aVar.f22620d;
        this.f22598e = aVar.f22621e;
        this.f22599f = aVar.f22622f;
        this.f22600g = aVar.f22623g;
        this.f22601h = aVar.f22624h;
        this.f22602i = aVar.f22625i;
        this.f22603j = aVar.f22626j;
        this.f22604k = aVar.f22627k;
        this.f22605l = aVar.f22628l;
        this.f22606m = aVar.f22629m;
        this.f22607n = aVar.f22630n;
        this.f22608o = aVar.f22631o;
        this.f22609p = aVar.f22632p;
        this.f22610q = aVar.f22633q;
        this.f22611r = aVar.f22634r;
        this.f22612s = aVar.f22635s;
        this.f22613t = aVar.f22636t;
        this.f22614u = aVar.f22637u;
        this.f22615v = aVar.f22638v;
        this.f22616w = aVar.f22639w;
    }

    public static a i(Context context) {
        kr.b a10 = kr.b.a(context);
        return new a().B(a10.b(8)).x(a10.b(24)).y(a10.b(4)).A(a10.b(1)).C(a10.b(1)).D(a10.b(4));
    }

    public void a(Paint paint) {
        int i10 = this.f22598e;
        if (i10 == 0) {
            i10 = kr.a.a(paint.getColor(), 25);
        }
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
    }

    public void b(Paint paint) {
        int i10 = this.f22603j;
        if (i10 == 0) {
            i10 = this.f22602i;
        }
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f22608o;
        if (typeface == null) {
            typeface = this.f22607n;
        }
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f22610q;
            if (i11 <= 0) {
                i11 = this.f22609p;
            }
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f22610q;
        if (i12 <= 0) {
            i12 = this.f22609p;
        }
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void c(Paint paint) {
        int i10 = this.f22602i;
        if (i10 != 0) {
            paint.setColor(i10);
        }
        Typeface typeface = this.f22607n;
        if (typeface != null) {
            paint.setTypeface(typeface);
            int i11 = this.f22609p;
            if (i11 > 0) {
                paint.setTextSize(i11);
                return;
            }
            return;
        }
        paint.setTypeface(Typeface.MONOSPACE);
        int i12 = this.f22609p;
        if (i12 > 0) {
            paint.setTextSize(i12);
        } else {
            paint.setTextSize(paint.getTextSize() * 0.87f);
        }
    }

    public void d(Paint paint) {
        int i10 = this.f22612s;
        if (i10 == 0) {
            i10 = kr.a.a(paint.getColor(), 75);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f22611r;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void e(Paint paint, int i10) {
        Typeface typeface = this.f22613t;
        if (typeface == null) {
            paint.setFakeBoldText(true);
        } else {
            paint.setTypeface(typeface);
        }
        float[] fArr = this.f22614u;
        if (fArr == null) {
            fArr = f22593x;
        }
        if (fArr != null && fArr.length >= i10) {
            paint.setTextSize(paint.getTextSize() * fArr[i10 - 1]);
            return;
        }
        throw new IllegalStateException(String.format(Locale.US, "Supplied heading level: %d is invalid, where configured heading sizes are: `%s`", Integer.valueOf(i10), Arrays.toString(fArr)));
    }

    public void f(TextPaint textPaint) {
        textPaint.setUnderlineText(this.f22595b);
        int i10 = this.f22594a;
        if (i10 != 0) {
            textPaint.setColor(i10);
        } else {
            textPaint.setColor(textPaint.linkColor);
        }
    }

    public void g(Paint paint) {
        int i10 = this.f22599f;
        if (i10 == 0) {
            i10 = paint.getColor();
        }
        paint.setColor(i10);
        int i11 = this.f22600g;
        if (i11 != 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public void h(Paint paint) {
        int i10 = this.f22615v;
        if (i10 == 0) {
            i10 = kr.a.a(paint.getColor(), 25);
        }
        paint.setColor(i10);
        paint.setStyle(Paint.Style.FILL);
        int i11 = this.f22616w;
        if (i11 >= 0) {
            paint.setStrokeWidth(i11);
        }
    }

    public int j() {
        return this.f22596c;
    }

    public int k() {
        int i10 = this.f22597d;
        if (i10 == 0) {
            return (int) ((this.f22596c * 0.25f) + 0.5f);
        }
        return i10;
    }

    public int l(int i10) {
        int min = Math.min(this.f22596c, i10) / 2;
        int i11 = this.f22601h;
        if (i11 != 0 && i11 <= min) {
            return i11;
        }
        return min;
    }

    public int m(Paint paint) {
        int i10 = this.f22604k;
        if (i10 != 0) {
            return i10;
        }
        return kr.a.a(paint.getColor(), 25);
    }

    public int n(Paint paint) {
        int i10 = this.f22605l;
        if (i10 == 0) {
            i10 = this.f22604k;
        }
        if (i10 != 0) {
            return i10;
        }
        return kr.a.a(paint.getColor(), 25);
    }

    public int o() {
        return this.f22606m;
    }
}
