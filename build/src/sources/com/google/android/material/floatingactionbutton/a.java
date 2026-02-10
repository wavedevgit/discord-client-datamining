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
import th.l;
import th.m;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private final Paint f15761b;

    /* renamed from: h  reason: collision with root package name */
    float f15767h;

    /* renamed from: i  reason: collision with root package name */
    private int f15768i;

    /* renamed from: j  reason: collision with root package name */
    private int f15769j;

    /* renamed from: k  reason: collision with root package name */
    private int f15770k;

    /* renamed from: l  reason: collision with root package name */
    private int f15771l;

    /* renamed from: m  reason: collision with root package name */
    private int f15772m;

    /* renamed from: o  reason: collision with root package name */
    private l f15774o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15775p;

    /* renamed from: a  reason: collision with root package name */
    private final m f15760a = m.l();

    /* renamed from: c  reason: collision with root package name */
    private final Path f15762c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f15763d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15764e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f15765f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f15766g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f15773n = true;

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
    public a(l lVar) {
        this.f15774o = lVar;
        Paint paint = new Paint(1);
        this.f15761b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f15763d;
        copyBounds(rect);
        float height = this.f15767h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f15768i, this.f15772m), r1.c.h(this.f15769j, this.f15772m), r1.c.h(r1.c.l(this.f15769j, 0), this.f15772m), r1.c.h(r1.c.l(this.f15771l, 0), this.f15772m), r1.c.h(this.f15771l, this.f15772m), r1.c.h(this.f15770k, this.f15772m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f15765f.set(getBounds());
        return this.f15765f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f15772m = colorStateList.getColorForState(getState(), this.f15772m);
        }
        this.f15775p = colorStateList;
        this.f15773n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f15767h != f10) {
            this.f15767h = f10;
            this.f15761b.setStrokeWidth(f10 * 1.3333f);
            this.f15773n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f15773n) {
            this.f15761b.setShader(a());
            this.f15773n = false;
        }
        float strokeWidth = this.f15761b.getStrokeWidth() / 2.0f;
        copyBounds(this.f15763d);
        this.f15764e.set(this.f15763d);
        float min = Math.min(this.f15774o.r().a(b()), this.f15764e.width() / 2.0f);
        if (this.f15774o.v(b())) {
            this.f15764e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f15764e, min, min, this.f15761b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f15768i = i10;
        this.f15769j = i11;
        this.f15770k = i12;
        this.f15771l = i13;
    }

    public void f(l lVar) {
        this.f15774o = lVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f15766g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f15767h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f15774o.v(b())) {
            outline.setRoundRect(getBounds(), this.f15774o.r().a(b()));
            return;
        }
        copyBounds(this.f15763d);
        this.f15764e.set(this.f15763d);
        this.f15760a.d(this.f15774o, 1.0f, this.f15764e, this.f15762c);
        com.google.android.material.drawable.c.l(outline, this.f15762c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f15774o.v(b())) {
            int round = Math.round(this.f15767h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f15775p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f15773n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f15775p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f15772m)) != this.f15772m) {
            this.f15773n = true;
            this.f15772m = colorForState;
        }
        if (this.f15773n) {
            invalidateSelf();
        }
        return this.f15773n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f15761b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f15761b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
