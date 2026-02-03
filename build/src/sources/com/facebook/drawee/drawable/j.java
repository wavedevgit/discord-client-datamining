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
    float[] f10702i;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f10700d = new float[8];

    /* renamed from: e  reason: collision with root package name */
    final float[] f10701e = new float[8];

    /* renamed from: o  reason: collision with root package name */
    final Paint f10703o = new Paint(1);

    /* renamed from: p  reason: collision with root package name */
    private boolean f10704p = false;

    /* renamed from: q  reason: collision with root package name */
    private float f10705q = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    private float f10706r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f10707s = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f10708t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10709u = false;

    /* renamed from: v  reason: collision with root package name */
    final Path f10710v = new Path();

    /* renamed from: w  reason: collision with root package name */
    final Path f10711w = new Path();

    /* renamed from: x  reason: collision with root package name */
    private int f10712x = 0;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f10713y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private int f10714z = SetSpanOperation.SPAN_MAX_PRIORITY;

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
        this.f10710v.reset();
        this.f10711w.reset();
        this.f10713y.set(getBounds());
        RectF rectF = this.f10713y;
        float f11 = this.f10705q;
        rectF.inset(f11 / 2.0f, f11 / 2.0f);
        int i10 = 0;
        if (this.f10704p) {
            this.f10711w.addCircle(this.f10713y.centerX(), this.f10713y.centerY(), Math.min(this.f10713y.width(), this.f10713y.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i11 = 0;
            while (true) {
                fArr = this.f10701e;
                if (i11 >= fArr.length) {
                    break;
                }
                fArr[i11] = (this.f10700d[i11] + this.f10706r) - (this.f10705q / 2.0f);
                i11++;
            }
            this.f10711w.addRoundRect(this.f10713y, fArr, Path.Direction.CW);
        }
        RectF rectF2 = this.f10713y;
        float f12 = this.f10705q;
        rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
        float f13 = this.f10706r;
        if (this.f10708t) {
            f10 = this.f10705q;
        } else {
            f10 = 0.0f;
        }
        float f14 = f13 + f10;
        this.f10713y.inset(f14, f14);
        if (this.f10704p) {
            this.f10710v.addCircle(this.f10713y.centerX(), this.f10713y.centerY(), Math.min(this.f10713y.width(), this.f10713y.height()) / 2.0f, Path.Direction.CW);
        } else if (this.f10708t) {
            if (this.f10702i == null) {
                this.f10702i = new float[8];
            }
            while (true) {
                fArr2 = this.f10702i;
                if (i10 >= fArr2.length) {
                    break;
                }
                fArr2[i10] = this.f10700d[i10] - this.f10705q;
                i10++;
            }
            this.f10710v.addRoundRect(this.f10713y, fArr2, Path.Direction.CW);
        } else {
            this.f10710v.addRoundRect(this.f10713y, this.f10700d, Path.Direction.CW);
        }
        float f15 = -f14;
        this.f10713y.inset(f15, f15);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10704p = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.f10706r != f10) {
            this.f10706r = f10;
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
        Arrays.fill(this.f10700d, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10703o.setColor(d.c(this.f10712x, this.f10714z));
        this.f10703o.setStyle(Paint.Style.FILL);
        this.f10703o.setFilterBitmap(i());
        canvas.drawPath(this.f10710v, this.f10703o);
        if (this.f10705q != 0.0f) {
            this.f10703o.setColor(d.c(this.f10707s, this.f10714z));
            this.f10703o.setStyle(Paint.Style.STROKE);
            this.f10703o.setStrokeWidth(this.f10705q);
            canvas.drawPath(this.f10711w, this.f10703o);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10709u != z10) {
            this.f10709u = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.f10708t != z10) {
            this.f10708t = z10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f10714z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return d.b(d.c(this.f10712x, this.f10714z));
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10700d, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10700d, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10709u;
    }

    public void j(int i10) {
        if (this.f10712x != i10) {
            this.f10712x = i10;
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
        if (i10 != this.f10714z) {
            this.f10714z = i10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f10707s != i10) {
            this.f10707s = i10;
            invalidateSelf();
        }
        if (this.f10705q != f10) {
            this.f10705q = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
