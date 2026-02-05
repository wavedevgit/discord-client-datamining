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
    float[] f10055i;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f10053d = new float[8];

    /* renamed from: e  reason: collision with root package name */
    final float[] f10054e = new float[8];

    /* renamed from: o  reason: collision with root package name */
    final Paint f10056o = new Paint(1);

    /* renamed from: p  reason: collision with root package name */
    private boolean f10057p = false;

    /* renamed from: q  reason: collision with root package name */
    private float f10058q = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    private float f10059r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f10060s = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f10061t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10062u = false;

    /* renamed from: v  reason: collision with root package name */
    final Path f10063v = new Path();

    /* renamed from: w  reason: collision with root package name */
    final Path f10064w = new Path();

    /* renamed from: x  reason: collision with root package name */
    private int f10065x = 0;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f10066y = new RectF();

    /* renamed from: z  reason: collision with root package name */
    private int f10067z = SetSpanOperation.SPAN_MAX_PRIORITY;

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
        this.f10063v.reset();
        this.f10064w.reset();
        this.f10066y.set(getBounds());
        RectF rectF = this.f10066y;
        float f11 = this.f10058q;
        rectF.inset(f11 / 2.0f, f11 / 2.0f);
        int i10 = 0;
        if (this.f10057p) {
            this.f10064w.addCircle(this.f10066y.centerX(), this.f10066y.centerY(), Math.min(this.f10066y.width(), this.f10066y.height()) / 2.0f, Path.Direction.CW);
        } else {
            int i11 = 0;
            while (true) {
                fArr = this.f10054e;
                if (i11 >= fArr.length) {
                    break;
                }
                fArr[i11] = (this.f10053d[i11] + this.f10059r) - (this.f10058q / 2.0f);
                i11++;
            }
            this.f10064w.addRoundRect(this.f10066y, fArr, Path.Direction.CW);
        }
        RectF rectF2 = this.f10066y;
        float f12 = this.f10058q;
        rectF2.inset((-f12) / 2.0f, (-f12) / 2.0f);
        float f13 = this.f10059r;
        if (this.f10061t) {
            f10 = this.f10058q;
        } else {
            f10 = 0.0f;
        }
        float f14 = f13 + f10;
        this.f10066y.inset(f14, f14);
        if (this.f10057p) {
            this.f10063v.addCircle(this.f10066y.centerX(), this.f10066y.centerY(), Math.min(this.f10066y.width(), this.f10066y.height()) / 2.0f, Path.Direction.CW);
        } else if (this.f10061t) {
            if (this.f10055i == null) {
                this.f10055i = new float[8];
            }
            while (true) {
                fArr2 = this.f10055i;
                if (i10 >= fArr2.length) {
                    break;
                }
                fArr2[i10] = this.f10053d[i10] - this.f10058q;
                i10++;
            }
            this.f10063v.addRoundRect(this.f10066y, fArr2, Path.Direction.CW);
        } else {
            this.f10063v.addRoundRect(this.f10066y, this.f10053d, Path.Direction.CW);
        }
        float f15 = -f14;
        this.f10066y.inset(f15, f15);
    }

    @Override // com.facebook.drawee.drawable.h
    public void a(boolean z10) {
        this.f10057p = z10;
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void b(float f10) {
        if (this.f10059r != f10) {
            this.f10059r = f10;
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
        Arrays.fill(this.f10053d, f10);
        k();
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.h
    public void d(boolean z10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f10056o.setColor(d.c(this.f10065x, this.f10067z));
        this.f10056o.setStyle(Paint.Style.FILL);
        this.f10056o.setFilterBitmap(i());
        canvas.drawPath(this.f10063v, this.f10056o);
        if (this.f10058q != 0.0f) {
            this.f10056o.setColor(d.c(this.f10060s, this.f10067z));
            this.f10056o.setStyle(Paint.Style.STROKE);
            this.f10056o.setStrokeWidth(this.f10058q);
            canvas.drawPath(this.f10064w, this.f10056o);
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void e(boolean z10) {
        if (this.f10062u != z10) {
            this.f10062u = z10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void f(boolean z10) {
        if (this.f10061t != z10) {
            this.f10061t = z10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f10067z;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return d.b(d.c(this.f10065x, this.f10067z));
    }

    @Override // com.facebook.drawee.drawable.h
    public void h(float[] fArr) {
        boolean z10;
        if (fArr == null) {
            Arrays.fill(this.f10053d, 0.0f);
        } else {
            if (fArr.length == 8) {
                z10 = true;
            } else {
                z10 = false;
            }
            o8.j.c(z10, "radii should have exactly 8 values");
            System.arraycopy(fArr, 0, this.f10053d, 0, 8);
        }
        k();
        invalidateSelf();
    }

    public boolean i() {
        return this.f10062u;
    }

    public void j(int i10) {
        if (this.f10065x != i10) {
            this.f10065x = i10;
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
        if (i10 != this.f10067z) {
            this.f10067z = i10;
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.h
    public void setBorder(int i10, float f10) {
        if (this.f10060s != i10) {
            this.f10060s = i10;
            invalidateSelf();
        }
        if (this.f10058q != f10) {
            this.f10058q = f10;
            k();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
