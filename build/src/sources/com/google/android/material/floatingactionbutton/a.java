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
import ph.k;
import ph.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private final Paint f15019b;

    /* renamed from: h  reason: collision with root package name */
    float f15025h;

    /* renamed from: i  reason: collision with root package name */
    private int f15026i;

    /* renamed from: j  reason: collision with root package name */
    private int f15027j;

    /* renamed from: k  reason: collision with root package name */
    private int f15028k;

    /* renamed from: l  reason: collision with root package name */
    private int f15029l;

    /* renamed from: m  reason: collision with root package name */
    private int f15030m;

    /* renamed from: o  reason: collision with root package name */
    private k f15032o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15033p;

    /* renamed from: a  reason: collision with root package name */
    private final l f15018a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f15020c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f15021d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15022e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f15023f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f15024g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f15031n = true;

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
        this.f15032o = kVar;
        Paint paint = new Paint(1);
        this.f15019b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f15021d;
        copyBounds(rect);
        float height = this.f15025h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f15026i, this.f15030m), r1.c.h(this.f15027j, this.f15030m), r1.c.h(r1.c.l(this.f15027j, 0), this.f15030m), r1.c.h(r1.c.l(this.f15029l, 0), this.f15030m), r1.c.h(this.f15029l, this.f15030m), r1.c.h(this.f15028k, this.f15030m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f15023f.set(getBounds());
        return this.f15023f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f15030m = colorStateList.getColorForState(getState(), this.f15030m);
        }
        this.f15033p = colorStateList;
        this.f15031n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f15025h != f10) {
            this.f15025h = f10;
            this.f15019b.setStrokeWidth(f10 * 1.3333f);
            this.f15031n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f15031n) {
            this.f15019b.setShader(a());
            this.f15031n = false;
        }
        float strokeWidth = this.f15019b.getStrokeWidth() / 2.0f;
        copyBounds(this.f15021d);
        this.f15022e.set(this.f15021d);
        float min = Math.min(this.f15032o.r().a(b()), this.f15022e.width() / 2.0f);
        if (this.f15032o.u(b())) {
            this.f15022e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f15022e, min, min, this.f15019b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f15026i = i10;
        this.f15027j = i11;
        this.f15028k = i12;
        this.f15029l = i13;
    }

    public void f(k kVar) {
        this.f15032o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f15024g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f15025h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f15032o.u(b())) {
            outline.setRoundRect(getBounds(), this.f15032o.r().a(b()));
            return;
        }
        copyBounds(this.f15021d);
        this.f15022e.set(this.f15021d);
        this.f15018a.d(this.f15032o, 1.0f, this.f15022e, this.f15020c);
        com.google.android.material.drawable.c.k(outline, this.f15020c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f15032o.u(b())) {
            int round = Math.round(this.f15025h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f15033p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f15031n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f15033p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f15030m)) != this.f15030m) {
            this.f15031n = true;
            this.f15030m = colorForState;
        }
        if (this.f15031n) {
            invalidateSelf();
        }
        return this.f15031n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f15019b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f15019b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
