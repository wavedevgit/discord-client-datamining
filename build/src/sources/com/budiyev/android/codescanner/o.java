package com.budiyev.android.codescanner;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class o extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Paint f8509d;

    /* renamed from: e  reason: collision with root package name */
    private final Paint f8510e;

    /* renamed from: i  reason: collision with root package name */
    private final Path f8511i;

    /* renamed from: o  reason: collision with root package name */
    private l f8512o;

    /* renamed from: p  reason: collision with root package name */
    private int f8513p;

    /* renamed from: q  reason: collision with root package name */
    private int f8514q;

    /* renamed from: r  reason: collision with root package name */
    private float f8515r;

    /* renamed from: s  reason: collision with root package name */
    private float f8516s;

    /* renamed from: t  reason: collision with root package name */
    private float f8517t;

    /* renamed from: u  reason: collision with root package name */
    private float f8518u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f8519v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f8520w;

    public o(Context context) {
        super(context);
        this.f8513p = 0;
        this.f8514q = 0;
        this.f8515r = 1.0f;
        this.f8516s = 1.0f;
        this.f8517t = 0.75f;
        this.f8518u = 0.5f;
        this.f8519v = true;
        this.f8520w = true;
        Paint paint = new Paint(1);
        this.f8509d = paint;
        paint.setStyle(Paint.Style.FILL);
        Paint paint2 = new Paint(1);
        this.f8510e = paint2;
        paint2.setStyle(Paint.Style.STROKE);
        Path path = new Path();
        path.setFillType(Path.FillType.EVEN_ODD);
        this.f8511i = path;
    }

    private void k() {
        l(getWidth(), getHeight());
    }

    private void l(int i10, int i11) {
        int round;
        int round2;
        if (i10 > 0 && i11 > 0) {
            float f10 = i10;
            float f11 = i11;
            float f12 = this.f8515r / this.f8516s;
            float f13 = this.f8517t;
            if (f10 / f11 <= f12) {
                round2 = Math.round(f10 * f13);
                round = Math.round(round2 / f12);
            } else {
                round = Math.round(f11 * f13);
                round2 = Math.round(round * f12);
            }
            int i12 = (i10 - round2) / 2;
            int round3 = Math.round((i11 - round) * this.f8518u);
            this.f8512o = new l(i12, round3, round2 + i12, round + round3);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float a() {
        return this.f8516s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float b() {
        return this.f8515r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f8510e.getColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f8514q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f8513p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l f() {
        return this.f8512o;
    }

    public float g() {
        return this.f8517t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h() {
        return (int) this.f8510e.getStrokeWidth();
    }

    public float i() {
        return this.f8518u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f8509d.getColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(float f10, float f11) {
        this.f8515r = f10;
        this.f8516s = f11;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(float f10) {
        this.f8516s = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(float f10) {
        this.f8515r = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        l lVar = this.f8512o;
        if (lVar != null) {
            int width = getWidth();
            int height = getHeight();
            float g10 = lVar.g();
            float e10 = lVar.e();
            float f10 = lVar.f();
            float c10 = lVar.c();
            float f11 = this.f8513p;
            float f12 = this.f8514q;
            boolean z10 = this.f8519v;
            boolean z11 = this.f8520w;
            Path path = this.f8511i;
            if (f12 > 0.0f) {
                float min = Math.min(f12, Math.max(f11 - 1.0f, 0.0f));
                if (z10) {
                    path.reset();
                    float f13 = g10 + min;
                    path.moveTo(e10, f13);
                    float f14 = e10 + min;
                    path.quadTo(e10, g10, f14, g10);
                    float f15 = f10 - min;
                    path.lineTo(f15, g10);
                    path.quadTo(f10, g10, f10, f13);
                    float f16 = c10 - min;
                    path.lineTo(f10, f16);
                    path.quadTo(f10, c10, f15, c10);
                    path.lineTo(f14, c10);
                    path.quadTo(e10, c10, e10, f16);
                    path.lineTo(e10, f13);
                    path.moveTo(0.0f, 0.0f);
                    float f17 = width;
                    path.lineTo(f17, 0.0f);
                    float f18 = height;
                    path.lineTo(f17, f18);
                    path.lineTo(0.0f, f18);
                    path.lineTo(0.0f, 0.0f);
                    canvas.drawPath(path, this.f8509d);
                }
                if (z11) {
                    path.reset();
                    float f19 = g10 + f11;
                    path.moveTo(e10, f19);
                    float f20 = g10 + min;
                    path.lineTo(e10, f20);
                    float f21 = e10 + min;
                    path.quadTo(e10, g10, f21, g10);
                    float f22 = e10 + f11;
                    path.lineTo(f22, g10);
                    float f23 = f10 - f11;
                    path.moveTo(f23, g10);
                    float f24 = f10 - min;
                    path.lineTo(f24, g10);
                    path.quadTo(f10, g10, f10, f20);
                    path.lineTo(f10, f19);
                    float f25 = c10 - f11;
                    path.moveTo(f10, f25);
                    float f26 = c10 - min;
                    path.lineTo(f10, f26);
                    path.quadTo(f10, c10, f24, c10);
                    path.lineTo(f23, c10);
                    path.moveTo(f22, c10);
                    path.lineTo(f21, c10);
                    path.quadTo(e10, c10, e10, f26);
                    path.lineTo(e10, f25);
                    canvas.drawPath(path, this.f8510e);
                    return;
                }
                return;
            }
            if (z10) {
                path.reset();
                path.moveTo(e10, g10);
                path.lineTo(f10, g10);
                path.lineTo(f10, c10);
                path.lineTo(e10, c10);
                path.lineTo(e10, g10);
                path.moveTo(0.0f, 0.0f);
                float f27 = width;
                path.lineTo(f27, 0.0f);
                float f28 = height;
                path.lineTo(f27, f28);
                path.lineTo(0.0f, f28);
                path.lineTo(0.0f, 0.0f);
                canvas.drawPath(path, this.f8509d);
            }
            if (z11) {
                path.reset();
                float f29 = g10 + f11;
                path.moveTo(e10, f29);
                path.lineTo(e10, g10);
                float f30 = e10 + f11;
                path.lineTo(f30, g10);
                float f31 = f10 - f11;
                path.moveTo(f31, g10);
                path.lineTo(f10, g10);
                path.lineTo(f10, f29);
                float f32 = c10 - f11;
                path.moveTo(f10, f32);
                path.lineTo(f10, c10);
                path.lineTo(f31, c10);
                path.moveTo(f30, c10);
                path.lineTo(e10, c10);
                path.lineTo(e10, f32);
                canvas.drawPath(path, this.f8510e);
            }
        }
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        l(i12 - i10, i13 - i11);
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        l(getMeasuredWidth(), getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(int i10) {
        this.f8510e.setColor(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        Paint.Cap cap;
        Paint paint = this.f8510e;
        if (z10) {
            cap = Paint.Cap.ROUND;
        } else {
            cap = Paint.Cap.BUTT;
        }
        paint.setStrokeCap(cap);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(int i10) {
        this.f8514q = i10;
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        this.f8513p = i10;
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(float f10) {
        this.f8517t = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        this.f8510e.setStrokeWidth(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    public void v(float f10) {
        this.f8518u = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(boolean z10) {
        this.f8520w = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(int i10) {
        this.f8509d.setColor(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(boolean z10) {
        this.f8519v = z10;
        if (isLaidOut()) {
            invalidate();
        }
    }
}
