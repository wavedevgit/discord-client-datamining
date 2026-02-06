package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends Drawable implements h, a0 {
    RectF A;
    Matrix G;
    Matrix H;
    private TransformCallback N;

    /* renamed from: d  reason: collision with root package name */
    private final Drawable f9986d;

    /* renamed from: v  reason: collision with root package name */
    float[] f9996v;

    /* renamed from: e  reason: collision with root package name */
    protected boolean f9987e = false;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f9988i = false;

    /* renamed from: o  reason: collision with root package name */
    protected float f9989o = 0.0f;

    /* renamed from: p  reason: collision with root package name */
    protected final Path f9990p = new Path();

    /* renamed from: q  reason: collision with root package name */
    protected boolean f9991q = true;

    /* renamed from: r  reason: collision with root package name */
    protected int f9992r = 0;

    /* renamed from: s  reason: collision with root package name */
    protected final Path f9993s = new Path();

    /* renamed from: t  reason: collision with root package name */
    private final float[] f9994t = new float[8];

    /* renamed from: u  reason: collision with root package name */
    final float[] f9995u = new float[8];

    /* renamed from: w  reason: collision with root package name */
    final RectF f9997w = new RectF();

    /* renamed from: x  reason: collision with root package name */
    final RectF f9998x = new RectF();

    /* renamed from: y  reason: collision with root package name */
    final RectF f9999y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    final RectF f10000z = new RectF();
    final Matrix B = new Matrix();
    final Matrix C = new Matrix();
    final Matrix D = new Matrix();
    final Matrix E = new Matrix();
    final Matrix F = new Matrix();
    final Matrix I = new Matrix();
    private float J = 0.0f;
    private boolean K = false;
    private boolean L = false;
    private boolean M = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Drawable drawable) {
        this.f9986d = drawable;
    }

    private static Matrix g(Matrix matrix) {
        if (matrix == null) {
            return null;
        }
        return new Matrix(matrix);
    }

    private static boolean j(Matrix matrix, Matrix matrix2) {
        if (matrix == null && matrix2 == null) {
            return true;
        }
        if (matrix != null && matrix2 != null) {
            return matrix.equals(matrix2);
        }
        return false;
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f9987e = z10;
        this.M = true;
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.J != f10) {
            this.J = f10;
            this.M = true;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        boolean z10;
        int i10 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        Arrays.fill(this.f9994t, f10);
        if (i10 != 0) {
            z11 = true;
        }
        this.f9988i = z11;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void clearColorFilter() {
        this.f9986d.clearColorFilter();
    }

    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (ya.b.d()) {
            ya.b.a("RoundedDrawable#draw");
        }
        this.f9986d.draw(canvas);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.L != z10) {
            this.L = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.K != z10) {
            this.K = z10;
            this.M = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f9986d.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        return this.f9986d.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f9986d.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f9986d.getIntrinsicWidth();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f9986d.getOpacity();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        boolean z11;
        if (fArr == null) {
            Arrays.fill(this.f9994t, 0.0f);
            this.f9988i = false;
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f9994t, 0, 8);
            this.f9988i = false;
            for (int i10 = 0; i10 < 8; i10++) {
                boolean z12 = this.f9988i;
                if (fArr[i10] > 0.0f) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f9988i = z12 | z11;
            }
        }
        this.M = true;
        invalidateSelf();
    }

    public boolean i() {
        return this.L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        if (!this.f9987e && !this.f9988i && this.f9989o <= 0.0f) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void l() {
        float[] fArr;
        float f10;
        if (this.M) {
            this.f9993s.reset();
            RectF rectF = this.f9997w;
            float f11 = this.f9989o;
            rectF.inset(f11 / 2.0f, f11 / 2.0f);
            if (this.f9987e) {
                this.f9993s.addCircle(this.f9997w.centerX(), this.f9997w.centerY(), Math.min(this.f9997w.width(), this.f9997w.height()) / 2.0f, Path.Direction.CW);
            } else {
                int i10 = 0;
                while (true) {
                    fArr = this.f9995u;
                    if (i10 >= fArr.length) {
                        break;
                    }
                    fArr[i10] = (this.f9994t[i10] + this.J) - (this.f9989o / 2.0f);
                    i10++;
                }
                this.f9993s.addRoundRect(this.f9997w, fArr, Path.Direction.CW);
            }
            RectF rectF2 = this.f9997w;
            float f12 = this.f9989o;
            rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
            this.f9990p.reset();
            float f13 = this.J;
            if (this.K) {
                f10 = this.f9989o;
            } else {
                f10 = 0.0f;
            }
            float f14 = f13 + f10;
            this.f9997w.inset(f14, f14);
            if (this.f9987e) {
                this.f9990p.addCircle(this.f9997w.centerX(), this.f9997w.centerY(), Math.min(this.f9997w.width(), this.f9997w.height()) / 2.0f, Path.Direction.CW);
            } else if (this.K) {
                if (this.f9996v == null) {
                    this.f9996v = new float[8];
                }
                for (int i11 = 0; i11 < this.f9995u.length; i11++) {
                    this.f9996v[i11] = this.f9994t[i11] - this.f9989o;
                }
                this.f9990p.addRoundRect(this.f9997w, this.f9996v, Path.Direction.CW);
            } else {
                this.f9990p.addRoundRect(this.f9997w, this.f9994t, Path.Direction.CW);
            }
            float f15 = -f14;
            this.f9997w.inset(f15, f15);
            this.f9990p.setFillType(Path.FillType.WINDING);
            this.M = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void m() {
        Matrix matrix;
        Matrix matrix2;
        TransformCallback transformCallback = this.N;
        if (transformCallback != null) {
            transformCallback.getTransform(this.D);
            this.N.getRootBounds(this.f9997w);
        } else {
            this.D.reset();
            this.f9997w.set(getBounds());
        }
        this.f9999y.set(0.0f, 0.0f, getIntrinsicWidth(), getIntrinsicHeight());
        this.f10000z.set(this.f9986d.getBounds());
        Matrix matrix3 = this.B;
        RectF rectF = this.f9999y;
        RectF rectF2 = this.f10000z;
        Matrix.ScaleToFit scaleToFit = Matrix.ScaleToFit.FILL;
        matrix3.setRectToRect(rectF, rectF2, scaleToFit);
        if (this.K) {
            RectF rectF3 = this.A;
            if (rectF3 == null) {
                this.A = new RectF(this.f9997w);
            } else {
                rectF3.set(this.f9997w);
            }
            RectF rectF4 = this.A;
            float f10 = this.f9989o;
            rectF4.inset(f10, f10);
            if (this.G == null) {
                this.G = new Matrix();
            }
            this.G.setRectToRect(this.f9997w, this.A, scaleToFit);
        } else {
            Matrix matrix4 = this.G;
            if (matrix4 != null) {
                matrix4.reset();
            }
        }
        if (!this.D.equals(this.E) || !this.B.equals(this.C) || ((matrix2 = this.G) != null && !j(matrix2, this.H))) {
            this.f9991q = true;
            this.D.invert(this.F);
            this.I.set(this.D);
            if (this.K && (matrix = this.G) != null) {
                this.I.postConcat(matrix);
            }
            this.I.preConcat(this.B);
            this.E.set(this.D);
            this.C.set(this.B);
            if (this.K) {
                Matrix matrix5 = this.H;
                if (matrix5 == null) {
                    this.H = g(this.G);
                } else {
                    matrix5.set(this.G);
                }
            } else {
                Matrix matrix6 = this.H;
                if (matrix6 != null) {
                    matrix6.reset();
                }
            }
        }
        if (!this.f9997w.equals(this.f9998x)) {
            this.M = true;
            this.f9998x.set(this.f9997w);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f9986d.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f9986d.setAlpha(i10);
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f9992r == i10 && this.f9989o == f10) {
            return;
        }
        this.f9992r = i10;
        this.f9989o = f10;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(int i10, PorterDuff.Mode mode) {
        this.f9986d.setColorFilter(i10, mode);
    }

    @Override // com.facebook.drawee.drawable.a0
    public void setTransformCallback(TransformCallback transformCallback) {
        this.N = transformCallback;
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f9986d.setColorFilter(colorFilter);
    }
}
