package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends Drawable implements h {

    /* renamed from: i  reason: collision with root package name */
    float[] f9670i;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f9668d = new float[8];

    /* renamed from: e  reason: collision with root package name */
    final float[] f9669e = new float[8];

    /* renamed from: o  reason: collision with root package name */
    final Paint f9671o = new Paint(1);

    /* renamed from: p  reason: collision with root package name */
    private boolean f9672p = false;

    /* renamed from: q  reason: collision with root package name */
    private float f9673q = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    private float f9674r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f9675s = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f9676t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f9677u = false;

    /* renamed from: v  reason: collision with root package name */
    final Path f9678v = new Path();

    /* renamed from: w  reason: collision with root package name */
    final Path f9679w = new Path();

    /* renamed from: x  reason: collision with root package name */
    private int f9680x = 0;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f9681y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private int f9682z = SetSpanOperation.SPAN_MAX_PRIORITY;

    public j(int i10) {
        j(i10);
    }

    public static j g(ColorDrawable colorDrawable) {
        return new j(colorDrawable.getColor());
    }

    private void k() {
        float[] fArr;
        float f10;
        float[] fArr2;
        this.f9678v.reset();
        this.f9679w.reset();
        this.f9681y.set(getBounds());
        RectF rectF = this.f9681y;
        float f11 = this.f9673q;
        rectF.inset(f11 / 2.0f, f11 / 2.0f);
        int i10 = 0;
        if (this.f9672p) {
            this.f9679w.addCircle(this.f9681y.centerX(), this.f9681y.centerY(), Math.min(this.f9681y.width(), this.f9681y.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i11 = 0;
            while (true) {
                fArr = this.f9669e;
                if (i11 >= fArr.length) {
                    break;
                }
                fArr[i11] = (this.f9668d[i11] + this.f9674r) - (this.f9673q / 2.0f);
                i11++;
            }
            this.f9679w.addRoundRect(this.f9681y, fArr, Path.Direction.CW);
        }
        RectF rectF2 = this.f9681y;
        float f12 = this.f9673q;
        rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
        float f13 = this.f9674r;
        if (this.f9676t) {
            f10 = this.f9673q;
        } else {
            f10 = 0.0f;
        }
        float f14 = f13 + f10;
        this.f9681y.inset(f14, f14);
        if (this.f9672p) {
            this.f9678v.addCircle(this.f9681y.centerX(), this.f9681y.centerY(), Math.min(this.f9681y.width(), this.f9681y.height()) / 2.0f, Path.Direction.CW);
        } else if (this.f9676t) {
            if (this.f9670i == null) {
                this.f9670i = new float[8];
            }
            while (true) {
                fArr2 = this.f9670i;
                if (i10 >= fArr2.length) {
                    break;
                }
                fArr2[i10] = this.f9668d[i10] - this.f9673q;
                i10++;
            }
            this.f9678v.addRoundRect(this.f9681y, fArr2, Path.Direction.CW);
        } else {
            this.f9678v.addRoundRect(this.f9681y, this.f9668d, Path.Direction.CW);
        }
        float f15 = -f14;
        this.f9681y.inset(f15, f15);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f9672p = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.f9674r != f10) {
            this.f9674r = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void c(float f10) {
        boolean z10;
        if (f10 >= 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.c(z10, "radius should be non negative");
        Arrays.fill(this.f9668d, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f9671o.setColor(d.c(this.f9680x, this.f9682z));
        this.f9671o.setStyle(Paint.Style.FILL);
        this.f9671o.setFilterBitmap(i());
        canvas.drawPath(this.f9678v, this.f9671o);
        if (this.f9673q != 0.0f) {
            this.f9671o.setColor(d.c(this.f9675s, this.f9682z));
            this.f9671o.setStyle(Paint.Style.STROKE);
            this.f9671o.setStrokeWidth(this.f9673q);
            canvas.drawPath(this.f9679w, this.f9671o);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f9677u != z10) {
            this.f9677u = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.f9676t != z10) {
            this.f9676t = z10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f9682z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return d.b(d.c(this.f9680x, this.f9682z));
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f9668d, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f9668d, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f9677u;
    }

    public void j(int i10) {
        if (this.f9680x != i10) {
            this.f9680x = i10;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        k();
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (i10 != this.f9682z) {
            this.f9682z = i10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f9675s != i10) {
            this.f9675s = i10;
            invalidateSelf();
        }
        if (this.f9673q != f10) {
            this.f9673q = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
