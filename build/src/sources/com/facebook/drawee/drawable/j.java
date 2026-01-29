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
    float[] f11073i;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f11071d = new float[8];

    /* renamed from: e  reason: collision with root package name */
    final float[] f11072e = new float[8];

    /* renamed from: o  reason: collision with root package name */
    final Paint f11074o = new Paint(1);

    /* renamed from: p  reason: collision with root package name */
    private boolean f11075p = false;

    /* renamed from: q  reason: collision with root package name */
    private float f11076q = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    private float f11077r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f11078s = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f11079t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f11080u = false;

    /* renamed from: v  reason: collision with root package name */
    final Path f11081v = new Path();

    /* renamed from: w  reason: collision with root package name */
    final Path f11082w = new Path();

    /* renamed from: x  reason: collision with root package name */
    private int f11083x = 0;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f11084y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private int f11085z = SetSpanOperation.SPAN_MAX_PRIORITY;

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
        this.f11081v.reset();
        this.f11082w.reset();
        this.f11084y.set(getBounds());
        RectF rectF = this.f11084y;
        float f11 = this.f11076q;
        rectF.inset(f11 / 2.0f, f11 / 2.0f);
        int i10 = 0;
        if (this.f11075p) {
            this.f11082w.addCircle(this.f11084y.centerX(), this.f11084y.centerY(), Math.min(this.f11084y.width(), this.f11084y.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i11 = 0;
            while (true) {
                fArr = this.f11072e;
                if (i11 >= fArr.length) {
                    break;
                }
                fArr[i11] = (this.f11071d[i11] + this.f11077r) - (this.f11076q / 2.0f);
                i11++;
            }
            this.f11082w.addRoundRect(this.f11084y, fArr, Path.Direction.CW);
        }
        RectF rectF2 = this.f11084y;
        float f12 = this.f11076q;
        rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
        float f13 = this.f11077r;
        if (this.f11079t) {
            f10 = this.f11076q;
        } else {
            f10 = 0.0f;
        }
        float f14 = f13 + f10;
        this.f11084y.inset(f14, f14);
        if (this.f11075p) {
            this.f11081v.addCircle(this.f11084y.centerX(), this.f11084y.centerY(), Math.min(this.f11084y.width(), this.f11084y.height()) / 2.0f, Path.Direction.CW);
        } else if (this.f11079t) {
            if (this.f11073i == null) {
                this.f11073i = new float[8];
            }
            while (true) {
                fArr2 = this.f11073i;
                if (i10 >= fArr2.length) {
                    break;
                }
                fArr2[i10] = this.f11071d[i10] - this.f11076q;
                i10++;
            }
            this.f11081v.addRoundRect(this.f11084y, fArr2, Path.Direction.CW);
        } else {
            this.f11081v.addRoundRect(this.f11084y, this.f11071d, Path.Direction.CW);
        }
        float f15 = -f14;
        this.f11084y.inset(f15, f15);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f11075p = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.f11077r != f10) {
            this.f11077r = f10;
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
        Arrays.fill(this.f11071d, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f11074o.setColor(d.c(this.f11083x, this.f11085z));
        this.f11074o.setStyle(Paint.Style.FILL);
        this.f11074o.setFilterBitmap(i());
        canvas.drawPath(this.f11081v, this.f11074o);
        if (this.f11076q != 0.0f) {
            this.f11074o.setColor(d.c(this.f11078s, this.f11085z));
            this.f11074o.setStyle(Paint.Style.STROKE);
            this.f11074o.setStrokeWidth(this.f11076q);
            canvas.drawPath(this.f11082w, this.f11074o);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f11080u != z10) {
            this.f11080u = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.f11079t != z10) {
            this.f11079t = z10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f11085z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return d.b(d.c(this.f11083x, this.f11085z));
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f11071d, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f11071d, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f11080u;
    }

    public void j(int i10) {
        if (this.f11083x != i10) {
            this.f11083x = i10;
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
        if (i10 != this.f11085z) {
            this.f11085z = i10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f11078s != i10) {
            this.f11078s = i10;
            invalidateSelf();
        }
        if (this.f11076q != f10) {
            this.f11076q = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
