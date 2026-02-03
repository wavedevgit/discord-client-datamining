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
    private final Paint f14625b;

    /* renamed from: h  reason: collision with root package name */
    float f14631h;

    /* renamed from: i  reason: collision with root package name */
    private int f14632i;

    /* renamed from: j  reason: collision with root package name */
    private int f14633j;

    /* renamed from: k  reason: collision with root package name */
    private int f14634k;

    /* renamed from: l  reason: collision with root package name */
    private int f14635l;

    /* renamed from: m  reason: collision with root package name */
    private int f14636m;

    /* renamed from: o  reason: collision with root package name */
    private k f14638o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f14639p;

    /* renamed from: a  reason: collision with root package name */
    private final l f14624a = l.k();

    /* renamed from: c  reason: collision with root package name */
    private final Path f14626c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final Rect f14627d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final RectF f14628e = new RectF();

    /* renamed from: f  reason: collision with root package name */
    private final RectF f14629f = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final b f14630g = new b();

    /* renamed from: n  reason: collision with root package name */
    private boolean f14637n = true;

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
        this.f14638o = kVar;
        Paint paint = new Paint(1);
        this.f14625b = paint;
        paint.setStyle(Paint.Style.STROKE);
    }

    private Shader a() {
        Rect rect = this.f14627d;
        copyBounds(rect);
        float height = this.f14631h / rect.height();
        return new LinearGradient(0.0f, rect.top, 0.0f, rect.bottom, new int[]{r1.c.h(this.f14632i, this.f14636m), r1.c.h(this.f14633j, this.f14636m), r1.c.h(r1.c.l(this.f14633j, 0), this.f14636m), r1.c.h(r1.c.l(this.f14635l, 0), this.f14636m), r1.c.h(this.f14635l, this.f14636m), r1.c.h(this.f14634k, this.f14636m)}, new float[]{0.0f, height, 0.5f, 0.5f, 1.0f - height, 1.0f}, Shader.TileMode.CLAMP);
    }

    protected RectF b() {
        this.f14629f.set(getBounds());
        return this.f14629f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(ColorStateList colorStateList) {
        if (colorStateList != null) {
            this.f14636m = colorStateList.getColorForState(getState(), this.f14636m);
        }
        this.f14639p = colorStateList;
        this.f14637n = true;
        invalidateSelf();
    }

    public void d(float f10) {
        if (this.f14631h != f10) {
            this.f14631h = f10;
            this.f14625b.setStrokeWidth(f10 * 1.3333f);
            this.f14637n = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (this.f14637n) {
            this.f14625b.setShader(a());
            this.f14637n = false;
        }
        float strokeWidth = this.f14625b.getStrokeWidth() / 2.0f;
        copyBounds(this.f14627d);
        this.f14628e.set(this.f14627d);
        float min = Math.min(this.f14638o.r().a(b()), this.f14628e.width() / 2.0f);
        if (this.f14638o.u(b())) {
            this.f14628e.inset(strokeWidth, strokeWidth);
            canvas.drawRoundRect(this.f14628e, min, min, this.f14625b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(int i10, int i11, int i12, int i13) {
        this.f14632i = i10;
        this.f14633j = i11;
        this.f14634k = i12;
        this.f14635l = i13;
    }

    public void f(k kVar) {
        this.f14638o = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f14630g;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f14631h > 0.0f) {
            return -3;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f14638o.u(b())) {
            outline.setRoundRect(getBounds(), this.f14638o.r().a(b()));
            return;
        }
        copyBounds(this.f14627d);
        this.f14628e.set(this.f14627d);
        this.f14624a.d(this.f14638o, 1.0f, this.f14628e, this.f14626c);
        com.google.android.material.drawable.c.k(outline, this.f14626c);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        if (this.f14638o.u(b())) {
            int round = Math.round(this.f14631h);
            rect.set(round, round, round, round);
            return true;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f14639p;
        if ((colorStateList != null && colorStateList.isStateful()) || super.isStateful()) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f14637n = true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int colorForState;
        ColorStateList colorStateList = this.f14639p;
        if (colorStateList != null && (colorForState = colorStateList.getColorForState(iArr, this.f14636m)) != this.f14636m) {
            this.f14637n = true;
            this.f14636m = colorForState;
        }
        if (this.f14637n) {
            invalidateSelf();
        }
        return this.f14637n;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f14625b.setAlpha(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f14625b.setColorFilter(colorFilter);
        invalidateSelf();
    }
}
