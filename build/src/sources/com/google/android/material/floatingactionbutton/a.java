package com.google.android.material.floatingactionbutton;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import oh.k;
import oh.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private final Paint f16028b;

    /* renamed from: h  reason: collision with root package name */
    float f16034h;

    /* renamed from: i  reason: collision with root package name */
    private int f16035i;

    /* renamed from: j  reason: collision with root package name */
    private int f16036j;

    /* renamed from: k  reason: collision with root package name */
    private int f16037k;

    /* renamed from: l  reason: collision with root package name */
    private int f16038l;

    /* renamed from: m  reason: collision with root package name */
    private int f16039m;

    /* renamed from: o  reason: collision with root package name */
    private k f16041o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16042p;

    /* renamed from: a  reason: collision with root package name */
    private final l f16027a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f16029c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f16030d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f16031e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f16032f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f16033g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f16040n = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b extends Drawable.ConstantState {
        private b() {
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            return a.this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(k kVar) {
        this.f16041o = kVar;
        Paint paint = new Paint(1);
        this.f16028b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f16030d;
        copyBounds(rect);
        float height = this.f16034h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f16035i, this.f16039m), r1.c.h(this.f16036j, this.f16039m), r1.c.h(r1.c.l(this.f16036j, 0), this.f16039m), r1.c.h(r1.c.l(this.f16038l, 0), this.f16039m), r1.c.h(this.f16038l, this.f16039m), r1.c.h(this.f16037k, this.f16039m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f16032f.set(getBounds());
        return this.f16032f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f16039m = colorStateList.getColorForState(getState(), this.f16039m);
        }
        this.f16042p = colorStateList;
        this.f16040n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f16034h != f10) {
            this.f16034h = f10;
            this.f16028b.setStrokeWidth(f10 * 1.3333f);
            this.f16040n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f16040n) {
            this.f16028b.setShader(a());
            this.f16040n = false;
        }
        float strokeWidth = this.f16028b.getStrokeWidth() / 2.0f;
        copyBounds(this.f16030d);
        this.f16031e.set(this.f16030d);
        float min = Math.min(this.f16041o.r().a(b()), this.f16031e.width() / 2.0f);
        if (this.f16041o.u(b())) {
            this.f16031e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f16031e, min, min, this.f16028b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f16035i = i10;
        this.f16036j = i11;
        this.f16037k = i12;
        this.f16038l = i13;
    }

    public void f(k kVar) {
        this.f16041o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f16033g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f16034h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f16041o.u(b())) {
            outline.setRoundRect(getBounds(), this.f16041o.r().a(b()));
            return;
        }
        copyBounds(this.f16030d);
        this.f16031e.set(this.f16030d);
        this.f16027a.d(this.f16041o, 1.0f, this.f16031e, this.f16029c);
        com.google.android.material.drawable.c.k(outline, this.f16029c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f16041o.u(b())) {
            int round = Math.round(this.f16034h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f16042p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f16040n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f16042p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f16039m)) != this.f16039m) {
            this.f16040n = true;
            this.f16039m = colorForState;
        }
        if (this.f16040n) {
            invalidateSelf();
        }
        return this.f16040n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f16028b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f16028b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
