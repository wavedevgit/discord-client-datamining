package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends f implements h {
    private final Path A;
    private final RectF B;

    /* renamed from: d  reason: collision with root package name */
    b f10715d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f10716e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f10717i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f10718o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f10719p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f10720q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f10721r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10722s;

    /* renamed from: t  reason: collision with root package name */
    private float f10723t;

    /* renamed from: u  reason: collision with root package name */
    private int f10724u;

    /* renamed from: v  reason: collision with root package name */
    private int f10725v;

    /* renamed from: w  reason: collision with root package name */
    private float f10726w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f10727x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f10728y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f10729z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10730a;

        static {
            int[] iArr = new int[b.values().length];
            f10730a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10730a[b.OVERLAY_COLOR.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum b {
        OVERLAY_COLOR,
        CLIPPING
    }

    public k(Drawable drawable) {
        super((Drawable) o8.j.g(drawable));
        this.f10715d = b.OVERLAY_COLOR;
        this.f10716e = new RectF();
        this.f10719p = new float[8];
        this.f10720q = new float[8];
        this.f10721r = new Paint(1);
        this.f10722s = false;
        this.f10723t = 0.0f;
        this.f10724u = 0;
        this.f10725v = 0;
        this.f10726w = 0.0f;
        this.f10727x = false;
        this.f10728y = false;
        this.f10729z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f10729z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f10726w;
        rectF.inset(f10, f10);
        if (this.f10715d == b.OVERLAY_COLOR) {
            this.f10729z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f10722s) {
            this.f10729z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f10729z.addRoundRect(this.B, this.f10719p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f10726w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f10723t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f10722s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f10720q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f10719p[i10] + this.f10726w) - (this.f10723t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f10723t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10722s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f10726w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f10719p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10716e.set(getBounds());
        int i10 = a.f10730a[this.f10715d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f10727x) {
                    RectF rectF = this.f10717i;
                    if (rectF == null) {
                        this.f10717i = new RectF(this.f10716e);
                        this.f10718o = new Matrix();
                    } else {
                        rectF.set(this.f10716e);
                    }
                    RectF rectF2 = this.f10717i;
                    float f10 = this.f10723t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f10718o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f10716e, this.f10717i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f10716e);
                    canvas.concat(this.f10718o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f10721r.setStyle(Paint.Style.FILL);
                this.f10721r.setColor(this.f10725v);
                this.f10721r.setStrokeWidth(0.0f);
                this.f10721r.setFilterBitmap(i());
                this.f10729z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f10729z, this.f10721r);
                if (this.f10722s) {
                    float width = ((this.f10716e.width() - this.f10716e.height()) + this.f10723t) / 2.0f;
                    float height = ((this.f10716e.height() - this.f10716e.width()) + this.f10723t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f10716e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f10721r);
                        RectF rectF4 = this.f10716e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f10721r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f10716e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f10721r);
                        RectF rectF6 = this.f10716e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f10721r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f10729z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f10724u != 0) {
            this.f10721r.setStyle(Paint.Style.STROKE);
            this.f10721r.setColor(this.f10724u);
            this.f10721r.setStrokeWidth(this.f10723t);
            this.f10729z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f10721r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10728y != z10) {
            this.f10728y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f10727x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10719p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10719p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10728y;
    }

    public void j(int i10) {
        this.f10725v = i10;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        k();
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        this.f10724u = i10;
        this.f10723t = f10;
        k();
        invalidateSelf();
    }
}
