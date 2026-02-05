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
    private final Drawable f10087d;

    /* renamed from: v  reason: collision with root package name */
    float[] f10097v;

    /* renamed from: e  reason: collision with root package name */
    protected boolean f10088e = false;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f10089i = false;

    /* renamed from: o  reason: collision with root package name */
    protected float f10090o = 0.0f;

    /* renamed from: p  reason: collision with root package name */
    protected final Path f10091p = new Path();

    /* renamed from: q  reason: collision with root package name */
    protected boolean f10092q = true;

    /* renamed from: r  reason: collision with root package name */
    protected int f10093r = 0;

    /* renamed from: s  reason: collision with root package name */
    protected final Path f10094s = new Path();

    /* renamed from: t  reason: collision with root package name */
    private final float[] f10095t = new float[8];

    /* renamed from: u  reason: collision with root package name */
    final float[] f10096u = new float[8];

    /* renamed from: w  reason: collision with root package name */
    final RectF f10098w = new RectF();

    /* renamed from: x  reason: collision with root package name */
    final RectF f10099x = new RectF();

    /* renamed from: y  reason: collision with root package name */
    final RectF f10100y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    final RectF f10101z = new RectF();
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
        this.f10087d = drawable;
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
        this.f10088e = z10;
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
        Arrays.fill(this.f10095t, f10);
        if (i10 != 0) {
            z11 = true;
        }
        this.f10089i = z11;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void clearColorFilter() {
        this.f10087d.clearColorFilter();
    }

    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (ya.b.d()) {
            ya.b.a("RoundedDrawable#draw");
        }
        this.f10087d.draw(canvas);
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
        return this.f10087d.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        return this.f10087d.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f10087d.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f10087d.getIntrinsicWidth();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f10087d.getOpacity();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        boolean z11;
        if (fArr == null) {
            Arrays.fill(this.f10095t, 0.0f);
            this.f10089i = false;
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10095t, 0, 8);
            this.f10089i = false;
            for (int i10 = 0; i10 < 8; i10++) {
                boolean z12 = this.f10089i;
                if (fArr[i10] > 0.0f) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f10089i = z12 | z11;
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
        if (!this.f10088e && !this.f10089i && this.f10090o <= 0.0f) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void l() {
        float[] fArr;
        float f10;
        if (this.M) {
            this.f10094s.reset();
            RectF rectF = this.f10098w;
            float f11 = this.f10090o;
            rectF.inset(f11 / 2.0f, f11 / 2.0f);
            if (this.f10088e) {
                this.f10094s.addCircle(this.f10098w.centerX(), this.f10098w.centerY(), Math.min(this.f10098w.width(), this.f10098w.height()) / 2.0f, Path.Direction.CW);
            } else {
                int i10 = 0;
                while (true) {
                    fArr = this.f10096u;
                    if (i10 >= fArr.length) {
                        break;
                    }
                    fArr[i10] = (this.f10095t[i10] + this.J) - (this.f10090o / 2.0f);
                    i10++;
                }
                this.f10094s.addRoundRect(this.f10098w, fArr, Path.Direction.CW);
            }
            RectF rectF2 = this.f10098w;
            float f12 = this.f10090o;
            rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
            this.f10091p.reset();
            float f13 = this.J;
            if (this.K) {
                f10 = this.f10090o;
            } else {
                f10 = 0.0f;
            }
            float f14 = f13 + f10;
            this.f10098w.inset(f14, f14);
            if (this.f10088e) {
                this.f10091p.addCircle(this.f10098w.centerX(), this.f10098w.centerY(), Math.min(this.f10098w.width(), this.f10098w.height()) / 2.0f, Path.Direction.CW);
            } else if (this.K) {
                if (this.f10097v == null) {
                    this.f10097v = new float[8];
                }
                for (int i11 = 0; i11 < this.f10096u.length; i11++) {
                    this.f10097v[i11] = this.f10095t[i11] - this.f10090o;
                }
                this.f10091p.addRoundRect(this.f10098w, this.f10097v, Path.Direction.CW);
            } else {
                this.f10091p.addRoundRect(this.f10098w, this.f10095t, Path.Direction.CW);
            }
            float f15 = -f14;
            this.f10098w.inset(f15, f15);
            this.f10091p.setFillType(Path.FillType.WINDING);
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
            this.N.getRootBounds(this.f10098w);
        } else {
            this.D.reset();
            this.f10098w.set(getBounds());
        }
        this.f10100y.set(0.0f, 0.0f, getIntrinsicWidth(), getIntrinsicHeight());
        this.f10101z.set(this.f10087d.getBounds());
        Matrix matrix3 = this.B;
        RectF rectF = this.f10100y;
        RectF rectF2 = this.f10101z;
        Matrix.ScaleToFit scaleToFit = Matrix.ScaleToFit.FILL;
        matrix3.setRectToRect(rectF, rectF2, scaleToFit);
        if (this.K) {
            RectF rectF3 = this.A;
            if (rectF3 == null) {
                this.A = new RectF(this.f10098w);
            } else {
                rectF3.set(this.f10098w);
            }
            RectF rectF4 = this.A;
            float f10 = this.f10090o;
            rectF4.inset(f10, f10);
            if (this.G == null) {
                this.G = new Matrix();
            }
            this.G.setRectToRect(this.f10098w, this.A, scaleToFit);
        } else {
            Matrix matrix4 = this.G;
            if (matrix4 != null) {
                matrix4.reset();
            }
        }
        if (!this.D.equals(this.E) || !this.B.equals(this.C) || ((matrix2 = this.G) != null && !j(matrix2, this.H))) {
            this.f10092q = true;
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
        if (!this.f10098w.equals(this.f10099x)) {
            this.M = true;
            this.f10099x.set(this.f10098w);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f10087d.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f10087d.setAlpha(i10);
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f10093r == i10 && this.f10090o == f10) {
            return;
        }
        this.f10093r = i10;
        this.f10090o = f10;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(int i10, PorterDuff.Mode mode) {
        this.f10087d.setColorFilter(i10, mode);
    }

    @Override // com.facebook.drawee.drawable.a0
    public void setTransformCallback(TransformCallback transformCallback) {
        this.N = transformCallback;
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f10087d.setColorFilter(colorFilter);
    }
}
