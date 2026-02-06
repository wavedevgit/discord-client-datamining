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
import qh.k;
import qh.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private final Paint f14999b;

    /* renamed from: h  reason: collision with root package name */
    float f15005h;

    /* renamed from: i  reason: collision with root package name */
    private int f15006i;

    /* renamed from: j  reason: collision with root package name */
    private int f15007j;

    /* renamed from: k  reason: collision with root package name */
    private int f15008k;

    /* renamed from: l  reason: collision with root package name */
    private int f15009l;

    /* renamed from: m  reason: collision with root package name */
    private int f15010m;

    /* renamed from: o  reason: collision with root package name */
    private k f15012o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15013p;

    /* renamed from: a  reason: collision with root package name */
    private final l f14998a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f15000c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f15001d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15002e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f15003f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f15004g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f15011n = true;

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
        this.f15012o = kVar;
        Paint paint = new Paint(1);
        this.f14999b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f15001d;
        copyBounds(rect);
        float height = this.f15005h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f15006i, this.f15010m), r1.c.h(this.f15007j, this.f15010m), r1.c.h(r1.c.l(this.f15007j, 0), this.f15010m), r1.c.h(r1.c.l(this.f15009l, 0), this.f15010m), r1.c.h(this.f15009l, this.f15010m), r1.c.h(this.f15008k, this.f15010m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f15003f.set(getBounds());
        return this.f15003f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f15010m = colorStateList.getColorForState(getState(), this.f15010m);
        }
        this.f15013p = colorStateList;
        this.f15011n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f15005h != f10) {
            this.f15005h = f10;
            this.f14999b.setStrokeWidth(f10 * 1.3333f);
            this.f15011n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f15011n) {
            this.f14999b.setShader(a());
            this.f15011n = false;
        }
        float strokeWidth = this.f14999b.getStrokeWidth() / 2.0f;
        copyBounds(this.f15001d);
        this.f15002e.set(this.f15001d);
        float min = Math.min(this.f15012o.r().a(b()), this.f15002e.width() / 2.0f);
        if (this.f15012o.u(b())) {
            this.f15002e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f15002e, min, min, this.f14999b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f15006i = i10;
        this.f15007j = i11;
        this.f15008k = i12;
        this.f15009l = i13;
    }

    public void f(k kVar) {
        this.f15012o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f15004g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f15005h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f15012o.u(b())) {
            outline.setRoundRect(getBounds(), this.f15012o.r().a(b()));
            return;
        }
        copyBounds(this.f15001d);
        this.f15002e.set(this.f15001d);
        this.f14998a.d(this.f15012o, 1.0f, this.f15002e, this.f15000c);
        com.google.android.material.drawable.c.k(outline, this.f15000c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f15012o.u(b())) {
            int round = Math.round(this.f15005h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f15013p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f15011n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f15013p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f15010m)) != this.f15010m) {
            this.f15011n = true;
            this.f15010m = colorForState;
        }
        if (this.f15011n) {
            invalidateSelf();
        }
        return this.f15011n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f14999b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f14999b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
