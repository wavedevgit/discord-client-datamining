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
    b f10107d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f10108e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f10109i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f10110o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f10111p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f10112q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f10113r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10114s;

    /* renamed from: t  reason: collision with root package name */
    private float f10115t;

    /* renamed from: u  reason: collision with root package name */
    private int f10116u;

    /* renamed from: v  reason: collision with root package name */
    private int f10117v;

    /* renamed from: w  reason: collision with root package name */
    private float f10118w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f10119x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f10120y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f10121z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10122a;

        static {
            int[] iArr = new int[b.values().length];
            f10122a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10122a[b.OVERLAY_COLOR.ordinal()] = 2;
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
        super((Drawable) p8.j.g(drawable));
        this.f10107d = b.OVERLAY_COLOR;
        this.f10108e = new RectF();
        this.f10111p = new float[8];
        this.f10112q = new float[8];
        this.f10113r = new Paint(1);
        this.f10114s = false;
        this.f10115t = 0.0f;
        this.f10116u = 0;
        this.f10117v = 0;
        this.f10118w = 0.0f;
        this.f10119x = false;
        this.f10120y = false;
        this.f10121z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f10121z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f10118w;
        rectF.inset(f10, f10);
        if (this.f10107d == b.OVERLAY_COLOR) {
            this.f10121z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f10114s) {
            this.f10121z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f10121z.addRoundRect(this.B, this.f10111p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f10118w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f10115t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f10114s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f10112q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f10111p[i10] + this.f10118w) - (this.f10115t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f10115t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10114s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f10118w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f10111p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10108e.set(getBounds());
        int i10 = a.f10122a[this.f10107d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f10119x) {
                    RectF rectF = this.f10109i;
                    if (rectF == null) {
                        this.f10109i = new RectF(this.f10108e);
                        this.f10110o = new Matrix();
                    } else {
                        rectF.set(this.f10108e);
                    }
                    RectF rectF2 = this.f10109i;
                    float f10 = this.f10115t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f10110o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f10108e, this.f10109i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f10108e);
                    canvas.concat(this.f10110o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f10113r.setStyle(Paint.Style.FILL);
                this.f10113r.setColor(this.f10117v);
                this.f10113r.setStrokeWidth(0.0f);
                this.f10113r.setFilterBitmap(i());
                this.f10121z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f10121z, this.f10113r);
                if (this.f10114s) {
                    float width = ((this.f10108e.width() - this.f10108e.height()) + this.f10115t) / 2.0f;
                    float height = ((this.f10108e.height() - this.f10108e.width()) + this.f10115t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f10108e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f10113r);
                        RectF rectF4 = this.f10108e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f10113r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f10108e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f10113r);
                        RectF rectF6 = this.f10108e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f10113r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f10121z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f10116u != 0) {
            this.f10113r.setStyle(Paint.Style.STROKE);
            this.f10113r.setColor(this.f10116u);
            this.f10113r.setStrokeWidth(this.f10115t);
            this.f10121z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f10113r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10120y != z10) {
            this.f10120y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f10119x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10111p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            p8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10111p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10120y;
    }

    public void j(int i10) {
        this.f10117v = i10;
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
        this.f10116u = i10;
        this.f10115t = f10;
        k();
        invalidateSelf();
    }
}
