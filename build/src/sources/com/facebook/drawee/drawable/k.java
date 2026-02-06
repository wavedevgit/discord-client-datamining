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
    b f9967d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f9968e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f9969i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f9970o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f9971p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f9972q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f9973r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f9974s;

    /* renamed from: t  reason: collision with root package name */
    private float f9975t;

    /* renamed from: u  reason: collision with root package name */
    private int f9976u;

    /* renamed from: v  reason: collision with root package name */
    private int f9977v;

    /* renamed from: w  reason: collision with root package name */
    private float f9978w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f9979x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f9980y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f9981z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f9982a;

        static {
            int[] iArr = new int[b.values().length];
            f9982a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f9982a[b.OVERLAY_COLOR.ordinal()] = 2;
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
        this.f9967d = b.OVERLAY_COLOR;
        this.f9968e = new RectF();
        this.f9971p = new float[8];
        this.f9972q = new float[8];
        this.f9973r = new Paint(1);
        this.f9974s = false;
        this.f9975t = 0.0f;
        this.f9976u = 0;
        this.f9977v = 0;
        this.f9978w = 0.0f;
        this.f9979x = false;
        this.f9980y = false;
        this.f9981z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f9981z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f9978w;
        rectF.inset(f10, f10);
        if (this.f9967d == b.OVERLAY_COLOR) {
            this.f9981z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f9974s) {
            this.f9981z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f9981z.addRoundRect(this.B, this.f9971p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f9978w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f9975t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f9974s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f9972q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f9971p[i10] + this.f9978w) - (this.f9975t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f9975t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f9974s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f9978w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f9971p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f9968e.set(getBounds());
        int i10 = a.f9982a[this.f9967d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f9979x) {
                    RectF rectF = this.f9969i;
                    if (rectF == null) {
                        this.f9969i = new RectF(this.f9968e);
                        this.f9970o = new Matrix();
                    } else {
                        rectF.set(this.f9968e);
                    }
                    RectF rectF2 = this.f9969i;
                    float f10 = this.f9975t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f9970o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f9968e, this.f9969i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f9968e);
                    canvas.concat(this.f9970o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f9973r.setStyle(Paint.Style.FILL);
                this.f9973r.setColor(this.f9977v);
                this.f9973r.setStrokeWidth(0.0f);
                this.f9973r.setFilterBitmap(i());
                this.f9981z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f9981z, this.f9973r);
                if (this.f9974s) {
                    float width = ((this.f9968e.width() - this.f9968e.height()) + this.f9975t) / 2.0f;
                    float height = ((this.f9968e.height() - this.f9968e.width()) + this.f9975t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f9968e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f9973r);
                        RectF rectF4 = this.f9968e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f9973r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f9968e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f9973r);
                        RectF rectF6 = this.f9968e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f9973r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f9981z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f9976u != 0) {
            this.f9973r.setStyle(Paint.Style.STROKE);
            this.f9973r.setColor(this.f9976u);
            this.f9973r.setStrokeWidth(this.f9975t);
            this.f9981z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f9973r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f9980y != z10) {
            this.f9980y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f9979x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f9971p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f9971p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f9980y;
    }

    public void j(int i10) {
        this.f9977v = i10;
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
        this.f9976u = i10;
        this.f9975t = f10;
        k();
        invalidateSelf();
    }
}
