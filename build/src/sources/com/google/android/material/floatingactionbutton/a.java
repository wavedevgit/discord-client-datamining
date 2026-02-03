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
    private final Paint f15657b;

    /* renamed from: h  reason: collision with root package name */
    float f15663h;

    /* renamed from: i  reason: collision with root package name */
    private int f15664i;

    /* renamed from: j  reason: collision with root package name */
    private int f15665j;

    /* renamed from: k  reason: collision with root package name */
    private int f15666k;

    /* renamed from: l  reason: collision with root package name */
    private int f15667l;

    /* renamed from: m  reason: collision with root package name */
    private int f15668m;

    /* renamed from: o  reason: collision with root package name */
    private k f15670o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15671p;

    /* renamed from: a  reason: collision with root package name */
    private final l f15656a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f15658c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f15659d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15660e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f15661f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f15662g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f15669n = true;

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
        this.f15670o = kVar;
        Paint paint = new Paint(1);
        this.f15657b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f15659d;
        copyBounds(rect);
        float height = this.f15663h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f15664i, this.f15668m), r1.c.h(this.f15665j, this.f15668m), r1.c.h(r1.c.l(this.f15665j, 0), this.f15668m), r1.c.h(r1.c.l(this.f15667l, 0), this.f15668m), r1.c.h(this.f15667l, this.f15668m), r1.c.h(this.f15666k, this.f15668m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f15661f.set(getBounds());
        return this.f15661f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f15668m = colorStateList.getColorForState(getState(), this.f15668m);
        }
        this.f15671p = colorStateList;
        this.f15669n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f15663h != f10) {
            this.f15663h = f10;
            this.f15657b.setStrokeWidth(f10 * 1.3333f);
            this.f15669n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f15669n) {
            this.f15657b.setShader(a());
            this.f15669n = false;
        }
        float strokeWidth = this.f15657b.getStrokeWidth() / 2.0f;
        copyBounds(this.f15659d);
        this.f15660e.set(this.f15659d);
        float min = Math.min(this.f15670o.r().a(b()), this.f15660e.width() / 2.0f);
        if (this.f15670o.u(b())) {
            this.f15660e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f15660e, min, min, this.f15657b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f15664i = i10;
        this.f15665j = i11;
        this.f15666k = i12;
        this.f15667l = i13;
    }

    public void f(k kVar) {
        this.f15670o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f15662g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f15663h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f15670o.u(b())) {
            outline.setRoundRect(getBounds(), this.f15670o.r().a(b()));
            return;
        }
        copyBounds(this.f15659d);
        this.f15660e.set(this.f15659d);
        this.f15656a.d(this.f15670o, 1.0f, this.f15660e, this.f15658c);
        com.google.android.material.drawable.c.k(outline, this.f15658c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f15670o.u(b())) {
            int round = Math.round(this.f15663h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f15671p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f15669n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f15671p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f15668m)) != this.f15668m) {
            this.f15669n = true;
            this.f15668m = colorForState;
        }
        if (this.f15669n) {
            invalidateSelf();
        }
        return this.f15669n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f15657b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f15657b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
