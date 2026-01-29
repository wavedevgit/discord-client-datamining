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
    b f11086d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f11087e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f11088i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f11089o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f11090p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f11091q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f11092r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11093s;

    /* renamed from: t  reason: collision with root package name */
    private float f11094t;

    /* renamed from: u  reason: collision with root package name */
    private int f11095u;

    /* renamed from: v  reason: collision with root package name */
    private int f11096v;

    /* renamed from: w  reason: collision with root package name */
    private float f11097w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f11098x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f11099y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f11100z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11101a;

        static {
            int[] iArr = new int[b.values().length];
            f11101a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11101a[b.OVERLAY_COLOR.ordinal()] = 2;
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
        this.f11086d = b.OVERLAY_COLOR;
        this.f11087e = new RectF();
        this.f11090p = new float[8];
        this.f11091q = new float[8];
        this.f11092r = new Paint(1);
        this.f11093s = false;
        this.f11094t = 0.0f;
        this.f11095u = 0;
        this.f11096v = 0;
        this.f11097w = 0.0f;
        this.f11098x = false;
        this.f11099y = false;
        this.f11100z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f11100z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f11097w;
        rectF.inset(f10, f10);
        if (this.f11086d == b.OVERLAY_COLOR) {
            this.f11100z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f11093s) {
            this.f11100z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f11100z.addRoundRect(this.B, this.f11090p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f11097w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f11094t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f11093s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f11091q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f11090p[i10] + this.f11097w) - (this.f11094t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f11094t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f11093s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f11097w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f11090p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f11087e.set(getBounds());
        int i10 = a.f11101a[this.f11086d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f11098x) {
                    RectF rectF = this.f11088i;
                    if (rectF == null) {
                        this.f11088i = new RectF(this.f11087e);
                        this.f11089o = new Matrix();
                    } else {
                        rectF.set(this.f11087e);
                    }
                    RectF rectF2 = this.f11088i;
                    float f10 = this.f11094t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f11089o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f11087e, this.f11088i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f11087e);
                    canvas.concat(this.f11089o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f11092r.setStyle(Paint.Style.FILL);
                this.f11092r.setColor(this.f11096v);
                this.f11092r.setStrokeWidth(0.0f);
                this.f11092r.setFilterBitmap(i());
                this.f11100z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f11100z, this.f11092r);
                if (this.f11093s) {
                    float width = ((this.f11087e.width() - this.f11087e.height()) + this.f11094t) / 2.0f;
                    float height = ((this.f11087e.height() - this.f11087e.width()) + this.f11094t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f11087e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f11092r);
                        RectF rectF4 = this.f11087e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f11092r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f11087e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f11092r);
                        RectF rectF6 = this.f11087e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f11092r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f11100z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f11095u != 0) {
            this.f11092r.setStyle(Paint.Style.STROKE);
            this.f11092r.setColor(this.f11095u);
            this.f11092r.setStrokeWidth(this.f11094t);
            this.f11100z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f11092r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f11099y != z10) {
            this.f11099y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f11098x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f11090p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f11090p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f11099y;
    }

    public void j(int i10) {
        this.f11096v = i10;
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
        this.f11095u = i10;
        this.f11094t = f10;
        k();
        invalidateSelf();
    }
}
