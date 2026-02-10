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
    private final Drawable f10703d;

    /* renamed from: v  reason: collision with root package name */
    float[] f10713v;

    /* renamed from: e  reason: collision with root package name */
    protected boolean f10704e = false;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f10705i = false;

    /* renamed from: o  reason: collision with root package name */
    protected float f10706o = 0.0f;

    /* renamed from: p  reason: collision with root package name */
    protected final Path f10707p = new Path();

    /* renamed from: q  reason: collision with root package name */
    protected boolean f10708q = true;

    /* renamed from: r  reason: collision with root package name */
    protected int f10709r = 0;

    /* renamed from: s  reason: collision with root package name */
    protected final Path f10710s = new Path();

    /* renamed from: t  reason: collision with root package name */
    private final float[] f10711t = new float[8];

    /* renamed from: u  reason: collision with root package name */
    final float[] f10712u = new float[8];

    /* renamed from: w  reason: collision with root package name */
    final RectF f10714w = new RectF();

    /* renamed from: x  reason: collision with root package name */
    final RectF f10715x = new RectF();

    /* renamed from: y  reason: collision with root package name */
    final RectF f10716y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    final RectF f10717z = new RectF();
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
        this.f10703d = drawable;
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
        this.f10704e = z10;
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
        p8.j.i(z10);
        Arrays.fill(this.f10711t, f10);
        if (i10 != 0) {
            z11 = true;
        }
        this.f10705i = z11;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void clearColorFilter() {
        this.f10703d.clearColorFilter();
    }

    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (za.b.d()) {
            za.b.a("RoundedDrawable#draw");
        }
        this.f10703d.draw(canvas);
        if (za.b.d()) {
            za.b.b();
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
        return this.f10703d.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        return this.f10703d.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f10703d.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f10703d.getIntrinsicWidth();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f10703d.getOpacity();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        boolean z11;
        if (fArr == null) {
            Arrays.fill(this.f10711t, 0.0f);
            this.f10705i = false;
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            p8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10711t, 0, 8);
            this.f10705i = false;
            for (int i10 = 0; i10 < 8; i10++) {
                boolean z12 = this.f10705i;
                if (fArr[i10] > 0.0f) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f10705i = z12 | z11;
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
        if (!this.f10704e && !this.f10705i && this.f10706o <= 0.0f) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void l() {
        float[] fArr;
        float f10;
        if (this.M) {
            this.f10710s.reset();
            RectF rectF = this.f10714w;
            float f11 = this.f10706o;
            rectF.inset(f11 / 2.0f, f11 / 2.0f);
            if (this.f10704e) {
                this.f10710s.addCircle(this.f10714w.centerX(), this.f10714w.centerY(), Math.min(this.f10714w.width(), this.f10714w.height()) / 2.0f, Path.Direction.CW);
            } else {
                int i10 = 0;
                while (true) {
                    fArr = this.f10712u;
                    if (i10 >= fArr.length) {
                        break;
                    }
                    fArr[i10] = (this.f10711t[i10] + this.J) - (this.f10706o / 2.0f);
                    i10++;
                }
                this.f10710s.addRoundRect(this.f10714w, fArr, Path.Direction.CW);
            }
            RectF rectF2 = this.f10714w;
            float f12 = this.f10706o;
            rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
            this.f10707p.reset();
            float f13 = this.J;
            if (this.K) {
                f10 = this.f10706o;
            } else {
                f10 = 0.0f;
            }
            float f14 = f13 + f10;
            this.f10714w.inset(f14, f14);
            if (this.f10704e) {
                this.f10707p.addCircle(this.f10714w.centerX(), this.f10714w.centerY(), Math.min(this.f10714w.width(), this.f10714w.height()) / 2.0f, Path.Direction.CW);
            } else if (this.K) {
                if (this.f10713v == null) {
                    this.f10713v = new float[8];
                }
                for (int i11 = 0; i11 < this.f10712u.length; i11++) {
                    this.f10713v[i11] = this.f10711t[i11] - this.f10706o;
                }
                this.f10707p.addRoundRect(this.f10714w, this.f10713v, Path.Direction.CW);
            } else {
                this.f10707p.addRoundRect(this.f10714w, this.f10711t, Path.Direction.CW);
            }
            float f15 = -f14;
            this.f10714w.inset(f15, f15);
            this.f10707p.setFillType(Path.FillType.WINDING);
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
            this.N.getRootBounds(this.f10714w);
        } else {
            this.D.reset();
            this.f10714w.set(getBounds());
        }
        this.f10716y.set(0.0f, 0.0f, getIntrinsicWidth(), getIntrinsicHeight());
        this.f10717z.set(this.f10703d.getBounds());
        Matrix matrix3 = this.B;
        RectF rectF = this.f10716y;
        RectF rectF2 = this.f10717z;
        Matrix.ScaleToFit scaleToFit = Matrix.ScaleToFit.FILL;
        matrix3.setRectToRect(rectF, rectF2, scaleToFit);
        if (this.K) {
            RectF rectF3 = this.A;
            if (rectF3 == null) {
                this.A = new RectF(this.f10714w);
            } else {
                rectF3.set(this.f10714w);
            }
            RectF rectF4 = this.A;
            float f10 = this.f10706o;
            rectF4.inset(f10, f10);
            if (this.G == null) {
                this.G = new Matrix();
            }
            this.G.setRectToRect(this.f10714w, this.A, scaleToFit);
        } else {
            Matrix matrix4 = this.G;
            if (matrix4 != null) {
                matrix4.reset();
            }
        }
        if (!this.D.equals(this.E) || !this.B.equals(this.C) || ((matrix2 = this.G) != null && !j(matrix2, this.H))) {
            this.f10708q = true;
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
        if (!this.f10714w.equals(this.f10715x)) {
            this.M = true;
            this.f10715x.set(this.f10714w);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f10703d.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f10703d.setAlpha(i10);
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f10709r == i10 && this.f10706o == f10) {
            return;
        }
        this.f10709r = i10;
        this.f10706o = f10;
        this.M = true;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(int i10, PorterDuff.Mode mode) {
        this.f10703d.setColorFilter(i10, mode);
    }

    @Override // com.facebook.drawee.drawable.a0
    public void setTransformCallback(TransformCallback transformCallback) {
        this.N = transformCallback;
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f10703d.setColorFilter(colorFilter);
    }
}
