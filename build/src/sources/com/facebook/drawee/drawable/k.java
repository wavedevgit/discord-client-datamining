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
    b f10068d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f10069e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f10070i;

    /* renamed from: o  reason: collision with root package name */
    private Matrix f10071o;

    /* renamed from: p  reason: collision with root package name */
    private final float[] f10072p;

    /* renamed from: q  reason: collision with root package name */
    final float[] f10073q;

    /* renamed from: r  reason: collision with root package name */
    final Paint f10074r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10075s;

    /* renamed from: t  reason: collision with root package name */
    private float f10076t;

    /* renamed from: u  reason: collision with root package name */
    private int f10077u;

    /* renamed from: v  reason: collision with root package name */
    private int f10078v;

    /* renamed from: w  reason: collision with root package name */
    private float f10079w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f10080x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f10081y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f10082z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10083a;

        static {
            int[] iArr = new int[b.values().length];
            f10083a = iArr;
            try {
                iArr[b.CLIPPING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10083a[b.OVERLAY_COLOR.ordinal()] = 2;
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
        this.f10068d = b.OVERLAY_COLOR;
        this.f10069e = new RectF();
        this.f10072p = new float[8];
        this.f10073q = new float[8];
        this.f10074r = new Paint(1);
        this.f10075s = false;
        this.f10076t = 0.0f;
        this.f10077u = 0;
        this.f10078v = 0;
        this.f10079w = 0.0f;
        this.f10080x = false;
        this.f10081y = false;
        this.f10082z = new Path();
        this.A = new Path();
        this.B = new RectF();
    }

    private void k() {
        float[] fArr;
        this.f10082z.reset();
        this.A.reset();
        this.B.set(getBounds());
        RectF rectF = this.B;
        float f10 = this.f10079w;
        rectF.inset(f10, f10);
        if (this.f10068d == b.OVERLAY_COLOR) {
            this.f10082z.addRect(this.B, Path.Direction.CW);
        }
        if (this.f10075s) {
            this.f10082z.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            this.f10082z.addRoundRect(this.B, this.f10072p, Path.Direction.CW);
        }
        RectF rectF2 = this.B;
        float f11 = this.f10079w;
        rectF2.inset(-f11, -f11);
        RectF rectF3 = this.B;
        float f12 = this.f10076t;
        rectF3.inset(f12 / 2.0f, f12 / 2.0f);
        if (this.f10075s) {
            this.A.addCircle(this.B.centerX(), this.B.centerY(), Math.min(this.B.width(), this.B.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i10 = 0;
            while (true) {
                fArr = this.f10073q;
                if (i10 >= fArr.length) {
                    break;
                }
                fArr[i10] = (this.f10072p[i10] + this.f10079w) - (this.f10076t / 2.0f);
                i10++;
            }
            this.A.addRoundRect(this.B, fArr, Path.Direction.CW);
        }
        RectF rectF4 = this.B;
        float f13 = this.f10076t;
        rectF4.inset((-f13) / 2.0f, (-f13) / 2.0f);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10075s = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        this.f10079w = f10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        Arrays.fill(this.f10072p, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10069e.set(getBounds());
        int i10 = a.f10083a[this.f10068d.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (this.f10080x) {
                    RectF rectF = this.f10070i;
                    if (rectF == null) {
                        this.f10070i = new RectF(this.f10069e);
                        this.f10071o = new Matrix();
                    } else {
                        rectF.set(this.f10069e);
                    }
                    RectF rectF2 = this.f10070i;
                    float f10 = this.f10076t;
                    rectF2.inset(f10, f10);
                    Matrix matrix = this.f10071o;
                    if (matrix != null) {
                        matrix.setRectToRect(this.f10069e, this.f10070i, Matrix.ScaleToFit.FILL);
                    }
                    int save = canvas.save();
                    canvas.clipRect(this.f10069e);
                    canvas.concat(this.f10071o);
                    super.draw(canvas);
                    canvas.restoreToCount(save);
                } else {
                    super.draw(canvas);
                }
                this.f10074r.setStyle(Paint.Style.FILL);
                this.f10074r.setColor(this.f10078v);
                this.f10074r.setStrokeWidth(0.0f);
                this.f10074r.setFilterBitmap(i());
                this.f10082z.setFillType(Path.FillType.EVEN_ODD);
                canvas.drawPath(this.f10082z, this.f10074r);
                if (this.f10075s) {
                    float width = ((this.f10069e.width() - this.f10069e.height()) + this.f10076t) / 2.0f;
                    float height = ((this.f10069e.height() - this.f10069e.width()) + this.f10076t) / 2.0f;
                    if (width > 0.0f) {
                        RectF rectF3 = this.f10069e;
                        float f11 = rectF3.left;
                        canvas.drawRect(f11, rectF3.top, f11 + width, rectF3.bottom, this.f10074r);
                        RectF rectF4 = this.f10069e;
                        float f12 = rectF4.right;
                        canvas.drawRect(f12 - width, rectF4.top, f12, rectF4.bottom, this.f10074r);
                    }
                    if (height > 0.0f) {
                        RectF rectF5 = this.f10069e;
                        float f13 = rectF5.left;
                        float f14 = rectF5.top;
                        canvas.drawRect(f13, f14, rectF5.right, f14 + height, this.f10074r);
                        RectF rectF6 = this.f10069e;
                        float f15 = rectF6.left;
                        float f16 = rectF6.bottom;
                        canvas.drawRect(f15, f16 - height, rectF6.right, f16, this.f10074r);
                    }
                }
            }
        } else {
            int save2 = canvas.save();
            canvas.clipPath(this.f10082z);
            super.draw(canvas);
            canvas.restoreToCount(save2);
        }
        if (this.f10077u != 0) {
            this.f10074r.setStyle(Paint.Style.STROKE);
            this.f10074r.setColor(this.f10077u);
            this.f10074r.setStrokeWidth(this.f10076t);
            this.f10082z.setFillType(Path.FillType.EVEN_ODD);
            canvas.drawPath(this.A, this.f10074r);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10081y != z10) {
            this.f10081y = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        this.f10080x = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10072p, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10072p, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10081y;
    }

    public void j(int i10) {
        this.f10078v = i10;
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
        this.f10077u = i10;
        this.f10076t = f10;
        k();
        invalidateSelf();
    }
}
