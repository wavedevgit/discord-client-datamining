package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.graphics.Region;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import androidx.annotation.NonNull;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import qq.h;
import rq.d;
import uq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class OverlayView extends View {
    private Paint A;
    private Paint B;
    private Paint C;
    private Paint D;
    private int E;
    private float F;
    private float G;
    private int H;
    private int I;
    private int J;
    private int K;
    private d L;
    private boolean M;

    /* renamed from: d  reason: collision with root package name */
    private final RectF f19518d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f19519e;

    /* renamed from: i  reason: collision with root package name */
    protected int f19520i;

    /* renamed from: o  reason: collision with root package name */
    protected int f19521o;

    /* renamed from: p  reason: collision with root package name */
    protected float[] f19522p;

    /* renamed from: q  reason: collision with root package name */
    protected float[] f19523q;

    /* renamed from: r  reason: collision with root package name */
    private int f19524r;

    /* renamed from: s  reason: collision with root package name */
    private int f19525s;

    /* renamed from: t  reason: collision with root package name */
    private float f19526t;

    /* renamed from: u  reason: collision with root package name */
    private float[] f19527u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f19528v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f19529w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f19530x;

    /* renamed from: y  reason: collision with root package name */
    private int f19531y;

    /* renamed from: z  reason: collision with root package name */
    private Path f19532z;

    public OverlayView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private int c(float f10, float f11) {
        double d10 = this.I;
        int i10 = -1;
        for (int i11 = 0; i11 < 8; i11 += 2) {
            double sqrt = Math.sqrt(Math.pow(f10 - this.f19522p[i11], 2.0d) + Math.pow(f11 - this.f19522p[i11 + 1], 2.0d));
            if (sqrt < d10) {
                i10 = i11 / 2;
                d10 = sqrt;
            }
        }
        if (this.E == 1 && i10 < 0 && this.f19518d.contains(f10, f11)) {
            return 4;
        }
        return i10;
    }

    private void e(TypedArray typedArray) {
        int dimensionPixelSize = typedArray.getDimensionPixelSize(h.f48125k, getResources().getDimensionPixelSize(qq.b.f48067a));
        int color = typedArray.getColor(h.f48124j, getResources().getColor(qq.a.f48057c));
        this.C.setStrokeWidth(dimensionPixelSize);
        this.C.setColor(color);
        Paint paint = this.C;
        Paint.Style style = Paint.Style.STROKE;
        paint.setStyle(style);
        this.D.setStrokeWidth(dimensionPixelSize * 3);
        this.D.setColor(color);
        this.D.setStyle(style);
    }

    private void f(TypedArray typedArray) {
        int dimensionPixelSize = typedArray.getDimensionPixelSize(h.f48129o, getResources().getDimensionPixelSize(qq.b.f48068b));
        int color = typedArray.getColor(h.f48126l, getResources().getColor(qq.a.f48058d));
        this.B.setStrokeWidth(dimensionPixelSize);
        this.B.setColor(color);
        this.f19524r = typedArray.getInt(h.f48128n, 2);
        this.f19525s = typedArray.getInt(h.f48127m, 2);
    }

    private void i(float f10, float f11) {
        boolean z10;
        float f12;
        float f13;
        float f14;
        float f15;
        this.f19519e.set(this.f19518d);
        int i10 = this.H;
        boolean z11 = true;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            this.f19519e.offset(f10 - this.F, f11 - this.G);
                            if (this.f19519e.left > getLeft() && this.f19519e.top > getTop() && this.f19519e.right < getRight() && this.f19519e.bottom < getBottom()) {
                                this.f19518d.set(this.f19519e);
                                j();
                                postInvalidate();
                                return;
                            }
                            return;
                        }
                    } else {
                        RectF rectF = this.f19519e;
                        RectF rectF2 = this.f19518d;
                        rectF.set(f10, rectF2.top, rectF2.right, f11);
                    }
                } else {
                    RectF rectF3 = this.f19519e;
                    RectF rectF4 = this.f19518d;
                    rectF3.set(rectF4.left, rectF4.top, f10, f11);
                }
            } else {
                RectF rectF5 = this.f19519e;
                RectF rectF6 = this.f19518d;
                rectF5.set(rectF6.left, f11, f10, rectF6.bottom);
            }
        } else {
            RectF rectF7 = this.f19519e;
            RectF rectF8 = this.f19518d;
            rectF7.set(f10, f11, rectF8.right, rectF8.bottom);
        }
        if (this.f19519e.height() >= this.J) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f19519e.width() < this.J) {
            z11 = false;
        }
        RectF rectF9 = this.f19518d;
        if (z11) {
            f12 = this.f19519e.left;
        } else {
            f12 = rectF9.left;
        }
        if (z10) {
            f13 = this.f19519e.top;
        } else {
            f13 = rectF9.top;
        }
        if (z11) {
            f14 = this.f19519e.right;
        } else {
            f14 = rectF9.right;
        }
        if (z10) {
            f15 = this.f19519e.bottom;
        } else {
            f15 = rectF9.bottom;
        }
        rectF9.set(f12, f13, f14, f15);
        if (!z10 && !z11) {
            return;
        }
        j();
        postInvalidate();
    }

    private void j() {
        this.f19522p = g.b(this.f19518d);
        this.f19523q = g.a(this.f19518d);
        this.f19527u = null;
        this.f19532z.reset();
        this.f19532z.addCircle(this.f19518d.centerX(), this.f19518d.centerY(), Math.min(this.f19518d.width(), this.f19518d.height()) / 2.0f, Path.Direction.CW);
    }

    protected void a(Canvas canvas) {
        int i10;
        int i11;
        if (this.f19529w) {
            if (this.f19527u == null && !this.f19518d.isEmpty()) {
                this.f19527u = new float[(this.f19524r * 4) + (this.f19525s * 4)];
                int i12 = 0;
                for (int i13 = 0; i13 < this.f19524r; i13++) {
                    float[] fArr = this.f19527u;
                    RectF rectF = this.f19518d;
                    fArr[i12] = rectF.left;
                    float f10 = i13 + 1.0f;
                    float height = rectF.height() * (f10 / (this.f19524r + 1));
                    RectF rectF2 = this.f19518d;
                    fArr[i12 + 1] = height + rectF2.top;
                    float[] fArr2 = this.f19527u;
                    int i14 = i12 + 3;
                    fArr2[i12 + 2] = rectF2.right;
                    i12 += 4;
                    fArr2[i14] = (rectF2.height() * (f10 / (this.f19524r + 1))) + this.f19518d.top;
                }
                for (int i15 = 0; i15 < this.f19525s; i15++) {
                    float[] fArr3 = this.f19527u;
                    float f11 = i15 + 1.0f;
                    float width = this.f19518d.width() * (f11 / (this.f19525s + 1));
                    RectF rectF3 = this.f19518d;
                    fArr3[i12] = width + rectF3.left;
                    float[] fArr4 = this.f19527u;
                    fArr4[i12 + 1] = rectF3.top;
                    int i16 = i12 + 3;
                    float width2 = rectF3.width() * (f11 / (this.f19525s + 1));
                    RectF rectF4 = this.f19518d;
                    fArr4[i12 + 2] = width2 + rectF4.left;
                    i12 += 4;
                    this.f19527u[i16] = rectF4.bottom;
                }
            }
            float[] fArr5 = this.f19527u;
            if (fArr5 != null) {
                canvas.drawLines(fArr5, this.B);
            }
        }
        if (this.f19528v) {
            canvas.drawRect(this.f19518d, this.C);
        }
        if (this.E != 0) {
            canvas.save();
            this.f19519e.set(this.f19518d);
            this.f19519e.inset(this.K, -i10);
            RectF rectF5 = this.f19519e;
            Region.Op op2 = Region.Op.DIFFERENCE;
            canvas.clipRect(rectF5, op2);
            this.f19519e.set(this.f19518d);
            this.f19519e.inset(-i11, this.K);
            canvas.clipRect(this.f19519e, op2);
            canvas.drawRect(this.f19518d, this.D);
            canvas.restore();
        }
    }

    protected void b(Canvas canvas) {
        canvas.save();
        if (this.f19530x) {
            canvas.clipPath(this.f19532z, Region.Op.DIFFERENCE);
        } else {
            canvas.clipRect(this.f19518d, Region.Op.DIFFERENCE);
        }
        canvas.drawColor(this.f19531y);
        canvas.restore();
        if (this.f19530x) {
            canvas.drawCircle(this.f19518d.centerX(), this.f19518d.centerY(), Math.min(this.f19518d.width(), this.f19518d.height()) / 2.0f, this.A);
        }
    }

    protected void d() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void g(TypedArray typedArray) {
        this.f19530x = typedArray.getBoolean(h.f48122h, false);
        int color = typedArray.getColor(h.f48123i, getResources().getColor(qq.a.f48059e));
        this.f19531y = color;
        this.A.setColor(color);
        this.A.setStyle(Paint.Style.STROKE);
        this.A.setStrokeWidth(1.0f);
        e(typedArray);
        this.f19528v = typedArray.getBoolean(h.f48130p, true);
        f(typedArray);
        this.f19529w = typedArray.getBoolean(h.f48131q, true);
    }

    @NonNull
    public RectF getCropViewRect() {
        return this.f19518d;
    }

    public int getFreestyleCropMode() {
        return this.E;
    }

    public d getOverlayViewChangeListener() {
        return this.L;
    }

    public void h() {
        int i10 = this.f19520i;
        float f10 = this.f19526t;
        int i11 = (int) (i10 / f10);
        int i12 = this.f19521o;
        if (i11 > i12) {
            int i13 = (int) (i12 * f10);
            int i14 = (i10 - i13) / 2;
            this.f19518d.set(getPaddingLeft() + i14, getPaddingTop(), getPaddingLeft() + i13 + i14, getPaddingTop() + this.f19521o);
        } else {
            int i15 = (i12 - i11) / 2;
            this.f19518d.set(getPaddingLeft(), getPaddingTop() + i15, getPaddingLeft() + this.f19520i, getPaddingTop() + i11 + i15);
        }
        d dVar = this.L;
        if (dVar != null) {
            dVar.a(this.f19518d);
        }
        j();
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        b(canvas);
        a(canvas);
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (z10) {
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            this.f19520i = (getWidth() - getPaddingRight()) - paddingLeft;
            this.f19521o = (getHeight() - getPaddingBottom()) - paddingTop;
            if (this.M) {
                this.M = false;
                setTargetAspectRatio(this.f19526t);
            }
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        boolean z10 = false;
        if (!this.f19518d.isEmpty() && this.E != 0) {
            float x10 = motionEvent.getX();
            float y10 = motionEvent.getY();
            if ((motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY) == 0) {
                int c10 = c(x10, y10);
                this.H = c10;
                if (c10 != -1) {
                    z10 = true;
                }
                if (!z10) {
                    this.F = -1.0f;
                    this.G = -1.0f;
                    return z10;
                }
                if (this.F < 0.0f) {
                    this.F = x10;
                    this.G = y10;
                }
                return z10;
            } else if ((motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY) == 2 && motionEvent.getPointerCount() == 1 && this.H != -1) {
                float min = Math.min(Math.max(x10, getPaddingLeft()), getWidth() - getPaddingRight());
                float min2 = Math.min(Math.max(y10, getPaddingTop()), getHeight() - getPaddingBottom());
                i(min, min2);
                this.F = min;
                this.G = min2;
                return true;
            } else if ((motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY) == 1) {
                this.F = -1.0f;
                this.G = -1.0f;
                this.H = -1;
                d dVar = this.L;
                if (dVar != null) {
                    dVar.a(this.f19518d);
                }
            }
        }
        return false;
    }

    public void setCircleDimmedLayer(boolean z10) {
        this.f19530x = z10;
    }

    public void setCropFrameColor(int i10) {
        this.C.setColor(i10);
    }

    public void setCropFrameStrokeWidth(int i10) {
        this.C.setStrokeWidth(i10);
    }

    public void setCropGridColor(int i10) {
        this.B.setColor(i10);
    }

    public void setCropGridColumnCount(int i10) {
        this.f19525s = i10;
        this.f19527u = null;
    }

    public void setCropGridCornerColor(int i10) {
        this.D.setColor(i10);
    }

    public void setCropGridRowCount(int i10) {
        this.f19524r = i10;
        this.f19527u = null;
    }

    public void setCropGridStrokeWidth(int i10) {
        this.B.setStrokeWidth(i10);
    }

    public void setDimmedColor(int i10) {
        this.f19531y = i10;
    }

    @Deprecated
    public void setFreestyleCropEnabled(boolean z10) {
        this.E = z10 ? 1 : 0;
    }

    public void setFreestyleCropMode(int i10) {
        this.E = i10;
        postInvalidate();
    }

    public void setOverlayViewChangeListener(d dVar) {
        this.L = dVar;
    }

    public void setShowCropFrame(boolean z10) {
        this.f19528v = z10;
    }

    public void setShowCropGrid(boolean z10) {
        this.f19529w = z10;
    }

    public void setTargetAspectRatio(float f10) {
        this.f19526t = f10;
        if (this.f19520i > 0) {
            h();
            postInvalidate();
            return;
        }
        this.M = true;
    }

    public OverlayView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19518d = new RectF();
        this.f19519e = new RectF();
        this.f19527u = null;
        this.f19532z = new Path();
        this.A = new Paint(1);
        this.B = new Paint(1);
        this.C = new Paint(1);
        this.D = new Paint(1);
        this.E = 0;
        this.F = -1.0f;
        this.G = -1.0f;
        this.H = -1;
        this.I = getResources().getDimensionPixelSize(qq.b.f48070d);
        this.J = getResources().getDimensionPixelSize(qq.b.f48071e);
        this.K = getResources().getDimensionPixelSize(qq.b.f48069c);
        d();
    }
}
