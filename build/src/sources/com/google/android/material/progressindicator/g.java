package com.google.android.material.progressindicator;

import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import androidx.dynamicanimation.animation.SpringAnimation;
import com.google.android.material.progressindicator.g;
import com.google.android.material.progressindicator.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends h {
    private static final b3.d N = new a("indicatorLevel");
    private i C;
    private final androidx.dynamicanimation.animation.d D;
    private final SpringAnimation E;
    private final i.a F;
    private float G;
    private boolean H;
    private final ValueAnimator I;
    private ValueAnimator J;
    private TimeInterpolator K;
    private TimeInterpolator L;
    private TimeInterpolator M;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends b3.d {
        a(String str) {
            super(str);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(g gVar) {
            return gVar.D() * 10000.0f;
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(g gVar, float f10) {
            gVar.J(f10 / 10000.0f);
            gVar.F((int) f10);
        }
    }

    g(Context context, final b bVar, i iVar) {
        super(context, bVar);
        this.H = false;
        H(iVar);
        i.a aVar = new i.a();
        this.F = aVar;
        aVar.f16161h = true;
        androidx.dynamicanimation.animation.d dVar = new androidx.dynamicanimation.animation.d();
        this.D = dVar;
        dVar.f(1.0f);
        dVar.h(50.0f);
        SpringAnimation springAnimation = new SpringAnimation(this, N);
        this.E = springAnimation;
        springAnimation.z(dVar);
        ValueAnimator valueAnimator = new ValueAnimator();
        this.I = valueAnimator;
        valueAnimator.setDuration(1000L);
        valueAnimator.setFloatValues(0.0f, 1.0f);
        valueAnimator.setRepeatCount(-1);
        valueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: ph.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                g.v(g.this, bVar, valueAnimator2);
            }
        });
        if (bVar.b(true) && bVar.f16083m != 0) {
            valueAnimator.start();
        }
        p(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g A(Context context, f fVar, c cVar) {
        return new g(context, fVar, cVar);
    }

    private float B(int i10) {
        float f10 = i10;
        return (f10 < 1000.0f || f10 > 9000.0f) ? 0.0f : 1.0f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float D() {
        return this.F.f16155b;
    }

    private void E() {
        if (this.J != null) {
            return;
        }
        Context context = this.f16132d;
        int i10 = bh.b.W;
        TimeInterpolator timeInterpolator = ch.a.f8276a;
        this.L = oh.g.g(context, i10, timeInterpolator);
        this.M = oh.g.g(this.f16132d, bh.b.R, timeInterpolator);
        ValueAnimator valueAnimator = new ValueAnimator();
        this.J = valueAnimator;
        valueAnimator.setDuration(500L);
        this.J.setFloatValues(0.0f, 1.0f);
        this.J.setInterpolator(null);
        this.J.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: ph.c
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                g.this.F.f16158e = r0.K.getInterpolation(r0.J.getAnimatedFraction());
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F(int i10) {
        if (this.f16133e.b(true)) {
            E();
            float B = B(i10);
            if (B != this.G) {
                if (this.J.isRunning()) {
                    this.J.cancel();
                }
                this.G = B;
                if (B == 1.0f) {
                    this.K = this.L;
                    this.J.start();
                    return;
                }
                this.K = this.M;
                this.J.reverse();
            } else if (!this.J.isRunning()) {
                G(B);
            }
        }
    }

    private void G(float f10) {
        this.F.f16158e = f10;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J(float f10) {
        this.F.f16155b = f10;
        invalidateSelf();
    }

    public static /* synthetic */ void v(g gVar, b bVar, ValueAnimator valueAnimator) {
        gVar.getClass();
        if (bVar.b(true) && bVar.f16083m != 0 && gVar.isVisible()) {
            gVar.invalidateSelf();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i C() {
        return this.C;
    }

    void H(i iVar) {
        this.C = iVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(boolean z10) {
        if (z10 && !this.I.isRunning()) {
            this.I.start();
        } else if (!z10 && this.I.isRunning()) {
            this.I.cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(float f10) {
        setLevel((int) (f10 * 10000.0f));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (!getBounds().isEmpty() && isVisible() && canvas.getClipBounds(this.A)) {
            canvas.save();
            this.C.h(canvas, getBounds(), h(), m(), l());
            this.F.f16159f = i();
            this.f16145y.setStyle(Paint.Style.FILL);
            this.f16145y.setAntiAlias(true);
            i.a aVar = this.F;
            b bVar = this.f16133e;
            aVar.f16156c = bVar.f16075e[0];
            int i10 = bVar.f16079i;
            if (i10 > 0) {
                this.C.d(canvas, this.f16145y, D(), 1.0f, this.f16133e.f16076f, getAlpha(), (int) ((i10 * u1.a.a(D(), 0.0f, 0.01f)) / 0.01f));
            } else {
                this.C.d(canvas, this.f16145y, 0.0f, 1.0f, bVar.f16076f, getAlpha(), 0);
            }
            this.C.c(canvas, this.f16145y, this.F, getAlpha());
            this.C.b(canvas, this.f16145y, this.f16133e.f16075e[0], getAlpha());
            canvas.restore();
        }
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getAlpha() {
        return super.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.C.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.C.f();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getOpacity() {
        return super.getOpacity();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ boolean isRunning() {
        return super.isRunning();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean j() {
        return super.j();
    }

    @Override // android.graphics.drawable.Drawable
    public void jumpToCurrentState() {
        this.E.A();
        J(getLevel() / 10000.0f);
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean l() {
        return super.l();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean m() {
        return super.m();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ void o(androidx.vectordrawable.graphics.drawable.b bVar) {
        super.o(bVar);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        float B = B(i10);
        if (this.H) {
            this.E.A();
            J(i10 / 10000.0f);
            G(B);
            return true;
        }
        this.E.o(D() * 10000.0f);
        this.E.u(i10);
        return true;
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean s(boolean z10, boolean z11, boolean z12) {
        return super.s(z10, z11, z12);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setAlpha(int i10) {
        super.setAlpha(i10);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setColorFilter(ColorFilter colorFilter) {
        super.setColorFilter(colorFilter);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean setVisible(boolean z10, boolean z11) {
        return super.setVisible(z10, z11);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void start() {
        super.start();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void stop() {
        super.stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public boolean t(boolean z10, boolean z11, boolean z12) {
        boolean t10 = super.t(z10, z11, z12);
        float a10 = this.f16134i.a(this.f16132d.getContentResolver());
        if (a10 == 0.0f) {
            this.H = true;
            return t10;
        }
        this.H = false;
        this.D.h(50.0f / a10);
        return t10;
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean u(androidx.vectordrawable.graphics.drawable.b bVar) {
        return super.u(bVar);
    }
}
