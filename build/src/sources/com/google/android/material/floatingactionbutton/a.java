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
import rh.k;
import rh.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private final Paint f15139b;

    /* renamed from: h  reason: collision with root package name */
    float f15145h;

    /* renamed from: i  reason: collision with root package name */
    private int f15146i;

    /* renamed from: j  reason: collision with root package name */
    private int f15147j;

    /* renamed from: k  reason: collision with root package name */
    private int f15148k;

    /* renamed from: l  reason: collision with root package name */
    private int f15149l;

    /* renamed from: m  reason: collision with root package name */
    private int f15150m;

    /* renamed from: o  reason: collision with root package name */
    private k f15152o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15153p;

    /* renamed from: a  reason: collision with root package name */
    private final l f15138a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f15140c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f15141d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15142e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f15143f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f15144g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f15151n = true;

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
        this.f15152o = kVar;
        Paint paint = new Paint(1);
        this.f15139b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f15141d;
        copyBounds(rect);
        float height = this.f15145h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f15146i, this.f15150m), r1.c.h(this.f15147j, this.f15150m), r1.c.h(r1.c.l(this.f15147j, 0), this.f15150m), r1.c.h(r1.c.l(this.f15149l, 0), this.f15150m), r1.c.h(this.f15149l, this.f15150m), r1.c.h(this.f15148k, this.f15150m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f15143f.set(getBounds());
        return this.f15143f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f15150m = colorStateList.getColorForState(getState(), this.f15150m);
        }
        this.f15153p = colorStateList;
        this.f15151n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f15145h != f10) {
            this.f15145h = f10;
            this.f15139b.setStrokeWidth(f10 * 1.3333f);
            this.f15151n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f15151n) {
            this.f15139b.setShader(a());
            this.f15151n = false;
        }
        float strokeWidth = this.f15139b.getStrokeWidth() / 2.0f;
        copyBounds(this.f15141d);
        this.f15142e.set(this.f15141d);
        float min = Math.min(this.f15152o.r().a(b()), this.f15142e.width() / 2.0f);
        if (this.f15152o.u(b())) {
            this.f15142e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f15142e, min, min, this.f15139b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f15146i = i10;
        this.f15147j = i11;
        this.f15148k = i12;
        this.f15149l = i13;
    }

    public void f(k kVar) {
        this.f15152o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f15144g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f15145h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f15152o.u(b())) {
            outline.setRoundRect(getBounds(), this.f15152o.r().a(b()));
            return;
        }
        copyBounds(this.f15141d);
        this.f15142e.set(this.f15141d);
        this.f15138a.d(this.f15152o, 1.0f, this.f15142e, this.f15140c);
        com.google.android.material.drawable.c.k(outline, this.f15140c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f15152o.u(b())) {
            int round = Math.round(this.f15145h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f15153p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f15151n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f15153p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f15150m)) != this.f15150m) {
            this.f15151n = true;
            this.f15150m = colorForState;
        }
        if (this.f15151n) {
            invalidateSelf();
        }
        return this.f15151n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f15139b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f15139b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
