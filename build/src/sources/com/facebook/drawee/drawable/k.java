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
    b f10684d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f10685e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f10686i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f10687o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f10688p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f10689q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f10690r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10691s;

    /* renamed from: t  reason: collision with root package name */
    private float f10692t;

    /* renamed from: u  reason: collision with root package name */
    private int f10693u;

    /* renamed from: v  reason: collision with root package name */
    private int f10694v;

    /* renamed from: w  reason: collision with root package name */
    private float f10695w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f10696x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f10697y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f10698z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10699a;

        static {
            int[] iArr = new int[b.values().length];
            f10699a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10699a[b.OVERLAY_COLOR.ordinal()] = 2;
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
        this.f10684d = b.OVERLAY_COLOR;
        this.f10685e = new RectF();
        this.f10688p = new float[8];
        this.f10689q = new float[8];
        this.f10690r = new Paint(1);
        this.f10691s = false;
        this.f10692t = 0.0f;
        this.f10693u = 0;
        this.f10694v = 0;
        this.f10695w = 0.0f;
        this.f10696x = false;
        this.f10697y = false;
        this.f10698z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f10698z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f10695w;
        rectF.inset(f10, f10);
        if (this.f10684d == b.OVERLAY_COLOR) {
            this.f10698z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f10691s) {
            this.f10698z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f10698z.addRoundRect(this.B, this.f10688p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f10695w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f10692t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f10691s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f10689q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f10688p[i10] + this.f10695w) - (this.f10692t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f10692t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10691s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f10695w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f10688p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10685e.set(getBounds());
        int i10 = a.f10699a[this.f10684d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f10696x) {
                    RectF rectF = this.f10686i;
                    if (rectF == null) {
                        this.f10686i = new RectF(this.f10685e);
                        this.f10687o = new Matrix();
                    } else {
                        rectF.set(this.f10685e);
                    }
                    RectF rectF2 = this.f10686i;
                    float f10 = this.f10692t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f10687o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f10685e, this.f10686i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f10685e);
                    canvas.concat(this.f10687o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f10690r.setStyle(Paint.Style.FILL);
                this.f10690r.setColor(this.f10694v);
                this.f10690r.setStrokeWidth(0.0f);
                this.f10690r.setFilterBitmap(i());
                this.f10698z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f10698z, this.f10690r);
                if (this.f10691s) {
                    float width = ((this.f10685e.width() - this.f10685e.height()) + this.f10692t) / 2.0f;
                    float height = ((this.f10685e.height() - this.f10685e.width()) + this.f10692t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f10685e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f10690r);
                        RectF rectF4 = this.f10685e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f10690r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f10685e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f10690r);
                        RectF rectF6 = this.f10685e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f10690r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f10698z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f10693u != 0) {
            this.f10690r.setStyle(Paint.Style.STROKE);
            this.f10690r.setColor(this.f10693u);
            this.f10690r.setStrokeWidth(this.f10692t);
            this.f10698z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f10690r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10697y != z10) {
            this.f10697y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f10696x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10688p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            p8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10688p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10697y;
    }

    public void j(int i10) {
        this.f10694v = i10;
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
        this.f10693u = i10;
        this.f10692t = f10;
        k();
        invalidateSelf();
    }
}
