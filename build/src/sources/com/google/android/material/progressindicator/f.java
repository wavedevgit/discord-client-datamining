package com.google.android.material.progressindicator;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import androidx.dynamicanimation.animation.SpringAnimation;
import com.google.android.material.progressindicator.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends g {
    private static final b3.b F = new a("indicatorLevel");
    private h A;
    private final androidx.dynamicanimation.animation.c B;
    private final SpringAnimation C;
    private final h.a D;
    private boolean E;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends b3.b {
        a(String str) {
            super(str);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(f fVar) {
            return fVar.x() * 10000.0f;
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(f fVar, float f10) {
            fVar.z(f10 / 10000.0f);
        }
    }

    f(Context context, b bVar, h hVar) {
        super(context, bVar);
        this.E = false;
        y(hVar);
        this.D = new h.a();
        androidx.dynamicanimation.animation.c cVar = new androidx.dynamicanimation.animation.c();
        this.B = cVar;
        cVar.d(1.0f);
        cVar.f(50.0f);
        SpringAnimation springAnimation = new SpringAnimation(this, F);
        this.C = springAnimation;
        springAnimation.y(cVar);
        n(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f v(Context context, e eVar, c cVar) {
        return new f(context, eVar, cVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float x() {
        return this.D.f16300b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void z(float f10) {
        this.D.f16300b = f10;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(float f10) {
        setLevel((int) (f10 * 10000.0f));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect rect = new Rect();
        if (!getBounds().isEmpty() && isVisible() && canvas.getClipBounds(rect)) {
            canvas.save();
            this.A.g(canvas, getBounds(), h(), k(), j());
            this.f16294x.setStyle(Paint.Style.FILL);
            this.f16294x.setAntiAlias(true);
            h.a aVar = this.D;
            b bVar = this.f16283e;
            aVar.f16301c = bVar.f16253c[0];
            int i10 = bVar.f16257g;
            if (i10 > 0) {
                this.A.d(canvas, this.f16294x, x(), 1.0f, this.f16283e.f16254d, getAlpha(), (int) ((i10 * u1.a.a(x(), 0.0f, 0.01f)) / 0.01f));
            } else {
                this.A.d(canvas, this.f16294x, 0.0f, 1.0f, bVar.f16254d, getAlpha(), 0);
            }
            this.A.c(canvas, this.f16294x, this.D, getAlpha());
            this.A.b(canvas, this.f16294x, this.f16283e.f16253c[0], getAlpha());
            canvas.restore();
        }
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getAlpha() {
        return super.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.A.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.A.f();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getOpacity() {
        return super.getOpacity();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean i() {
        return super.i();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ boolean isRunning() {
        return super.isRunning();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean j() {
        return super.j();
    }

    @Override // android.graphics.drawable.Drawable
    public void jumpToCurrentState() {
        this.C.z();
        z(getLevel() / 10000.0f);
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean k() {
        return super.k();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ void m(androidx.vectordrawable.graphics.drawable.b bVar) {
        super.m(bVar);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.E) {
            this.C.z();
            z(i10 / 10000.0f);
            return true;
        }
        this.C.n(x() * 10000.0f);
        this.C.t(i10);
        return true;
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean q(boolean z10, boolean z11, boolean z12) {
        return super.q(z10, z11, z12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.g
    public boolean r(boolean z10, boolean z11, boolean z12) {
        boolean r10 = super.r(z10, z11, z12);
        float a10 = this.f16284i.a(this.f16282d.getContentResolver());
        if (a10 == 0.0f) {
            this.E = true;
            return r10;
        }
        this.E = false;
        this.B.f(50.0f / a10);
        return r10;
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean s(androidx.vectordrawable.graphics.drawable.b bVar) {
        return super.s(bVar);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setAlpha(int i10) {
        super.setAlpha(i10);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setColorFilter(ColorFilter colorFilter) {
        super.setColorFilter(colorFilter);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean setVisible(boolean z10, boolean z11) {
        return super.setVisible(z10, z11);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void start() {
        super.start();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void stop() {
        super.stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h w() {
        return this.A;
    }

    void y(h hVar) {
        this.A = hVar;
    }
}
