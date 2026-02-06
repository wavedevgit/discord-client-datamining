package rb;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.text.style.ReplacementSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends ReplacementSpan {

    /* renamed from: d  reason: collision with root package name */
    protected int f48717d;

    /* renamed from: e  reason: collision with root package name */
    protected int f48718e;

    /* renamed from: i  reason: collision with root package name */
    private Rect f48719i;

    /* renamed from: o  reason: collision with root package name */
    private final int f48720o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint.FontMetricsInt f48721p;

    /* renamed from: q  reason: collision with root package name */
    private final Drawable f48722q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f48723r;

    public a(Drawable drawable, int i10) {
        this(drawable, i10, new Rect());
    }

    protected int a(Paint.FontMetricsInt fontMetricsInt) {
        int i10;
        int c10 = c(fontMetricsInt.ascent, fontMetricsInt.descent);
        int i11 = this.f48718e + c10;
        if (this.f48720o == 2) {
            Rect rect = this.f48723r;
            i10 = c10 - rect.top;
            i11 += rect.bottom;
        } else {
            i10 = c10 - this.f48723r.top;
        }
        e(fontMetricsInt, i10, i11);
        return this.f48717d;
    }

    protected int b(int i10, int i11, int i12, int i13, int i14) {
        Paint.FontMetricsInt fontMetricsInt = this.f48721p;
        return i10 + c(fontMetricsInt.ascent, fontMetricsInt.descent);
    }

    protected int c(int i10, int i11) {
        int i12 = this.f48720o;
        if (i12 != 0) {
            if (i12 != 2) {
                return (-this.f48718e) - this.f48723r.bottom;
            }
            Rect rect = this.f48723r;
            int i13 = rect.bottom;
            return (i10 + (((((i11 - i10) + rect.top) + i13) - this.f48718e) / 2)) - i13;
        }
        return (i11 - this.f48718e) - this.f48723r.bottom;
    }

    public void d() {
        Rect bounds = this.f48722q.getBounds();
        this.f48719i = bounds;
        int width = bounds.width();
        Rect rect = this.f48723r;
        this.f48717d = width + rect.left + rect.right;
        this.f48718e = this.f48719i.height();
    }

    @Override // android.text.style.ReplacementSpan
    public void draw(Canvas canvas, CharSequence charSequence, int i10, int i11, float f10, int i12, int i13, int i14, Paint paint) {
        paint.getFontMetricsInt(this.f48721p);
        Paint.FontMetricsInt fontMetricsInt = this.f48721p;
        int b10 = b(i13, fontMetricsInt.ascent, fontMetricsInt.descent, i12, i14);
        float f11 = f10 + this.f48723r.left;
        canvas.translate(f11, b10);
        this.f48722q.draw(canvas);
        canvas.translate(-f11, -b10);
    }

    protected void e(Paint.FontMetricsInt fontMetricsInt, int i10, int i11) {
        if (i10 < fontMetricsInt.ascent) {
            fontMetricsInt.ascent = i10;
        }
        if (i10 < fontMetricsInt.top) {
            fontMetricsInt.top = i10;
        }
        if (i11 > fontMetricsInt.descent) {
            fontMetricsInt.descent = i11;
        }
        if (i11 > fontMetricsInt.bottom) {
            fontMetricsInt.bottom = i11;
        }
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(Paint paint, CharSequence charSequence, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        d();
        if (fontMetricsInt == null) {
            return this.f48717d;
        }
        return a(fontMetricsInt);
    }

    public a(Drawable drawable, int i10, Rect rect) {
        this.f48721p = new Paint.FontMetricsInt();
        this.f48722q = drawable;
        this.f48720o = i10;
        this.f48723r = rect;
        d();
    }
}
