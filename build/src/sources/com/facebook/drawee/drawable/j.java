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
    float[] f10671i;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f10669d = new float[8];

    /* renamed from: e  reason: collision with root package name */
    final float[] f10670e = new float[8];

    /* renamed from: o  reason: collision with root package name */
    final Paint f10672o = new Paint(1);

    /* renamed from: p  reason: collision with root package name */
    private boolean f10673p = false;

    /* renamed from: q  reason: collision with root package name */
    private float f10674q = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    private float f10675r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f10676s = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f10677t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10678u = false;

    /* renamed from: v  reason: collision with root package name */
    final Path f10679v = new Path();

    /* renamed from: w  reason: collision with root package name */
    final Path f10680w = new Path();

    /* renamed from: x  reason: collision with root package name */
    private int f10681x = 0;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f10682y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private int f10683z = SetSpanOperation.SPAN_MAX_PRIORITY;

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
        this.f10679v.reset();
        this.f10680w.reset();
        this.f10682y.set(getBounds());
        RectF rectF = this.f10682y;
        float f11 = this.f10674q;
        rectF.inset(f11 / 2.0f, f11 / 2.0f);
        int i10 = 0;
        if (this.f10673p) {
            this.f10680w.addCircle(this.f10682y.centerX(), this.f10682y.centerY(), Math.min(this.f10682y.width(), this.f10682y.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i11 = 0;
            while (true) {
                fArr = this.f10670e;
                if (i11 >= fArr.length) {
                    break;
                }
                fArr[i11] = (this.f10669d[i11] + this.f10675r) - (this.f10674q / 2.0f);
                i11++;
            }
            this.f10680w.addRoundRect(this.f10682y, fArr, Path.Direction.CW);
        }
        RectF rectF2 = this.f10682y;
        float f12 = this.f10674q;
        rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
        float f13 = this.f10675r;
        if (this.f10677t) {
            f10 = this.f10674q;
        } else {
            f10 = 0.0f;
        }
        float f14 = f13 + f10;
        this.f10682y.inset(f14, f14);
        if (this.f10673p) {
            this.f10679v.addCircle(this.f10682y.centerX(), this.f10682y.centerY(), Math.min(this.f10682y.width(), this.f10682y.height()) / 2.0f, Path.Direction.CW);
        } else if (this.f10677t) {
            if (this.f10671i == null) {
                this.f10671i = new float[8];
            }
            while (true) {
                fArr2 = this.f10671i;
                if (i10 >= fArr2.length) {
                    break;
                }
                fArr2[i10] = this.f10669d[i10] - this.f10674q;
                i10++;
            }
            this.f10679v.addRoundRect(this.f10682y, fArr2, Path.Direction.CW);
        } else {
            this.f10679v.addRoundRect(this.f10682y, this.f10669d, Path.Direction.CW);
        }
        float f15 = -f14;
        this.f10682y.inset(f15, f15);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10673p = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.f10675r != f10) {
            this.f10675r = f10;
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
        p8.j.c(z10, "radius should be non negative");
        Arrays.fill(this.f10669d, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10672o.setColor(d.c(this.f10681x, this.f10683z));
        this.f10672o.setStyle(Paint.Style.FILL);
        this.f10672o.setFilterBitmap(i());
        canvas.drawPath(this.f10679v, this.f10672o);
        if (this.f10674q != 0.0f) {
            this.f10672o.setColor(d.c(this.f10676s, this.f10683z));
            this.f10672o.setStyle(Paint.Style.STROKE);
            this.f10672o.setStrokeWidth(this.f10674q);
            canvas.drawPath(this.f10680w, this.f10672o);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10678u != z10) {
            this.f10678u = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.f10677t != z10) {
            this.f10677t = z10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f10683z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return d.b(d.c(this.f10681x, this.f10683z));
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10669d, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            p8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10669d, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10678u;
    }

    public void j(int i10) {
        if (this.f10681x != i10) {
            this.f10681x = i10;
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
        if (i10 != this.f10683z) {
            this.f10683z = i10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f10676s != i10) {
            this.f10676s = i10;
            invalidateSelf();
        }
        if (this.f10674q != f10) {
            this.f10674q = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
