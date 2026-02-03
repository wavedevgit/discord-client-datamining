package com.budiyev.android.codescanner;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class o extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Paint f9156d;

    /* renamed from: e  reason: collision with root package name */
    private final Paint f9157e;

    /* renamed from: i  reason: collision with root package name */
    private final Path f9158i;

    /* renamed from: o  reason: collision with root package name */
    private l f9159o;

    /* renamed from: p  reason: collision with root package name */
    private int f9160p;

    /* renamed from: q  reason: collision with root package name */
    private int f9161q;

    /* renamed from: r  reason: collision with root package name */
    private float f9162r;

    /* renamed from: s  reason: collision with root package name */
    private float f9163s;

    /* renamed from: t  reason: collision with root package name */
    private float f9164t;

    /* renamed from: u  reason: collision with root package name */
    private float f9165u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f9166v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f9167w;

    public o(Context context) {
        super(context);
        this.f9160p = 0;
        this.f9161q = 0;
        this.f9162r = 1.0f;
        this.f9163s = 1.0f;
        this.f9164t = 0.75f;
        this.f9165u = 0.5f;
        this.f9166v = true;
        this.f9167w = true;
        Paint paint = new Paint(1);
        this.f9156d = paint;
        paint.setStyle(Paint.Style.FILL);
        Paint paint2 = new Paint(1);
        this.f9157e = paint2;
        paint2.setStyle(Paint.Style.STROKE);
        Path path = new Path();
        path.setFillType(Path.FillType.EVEN_ODD);
        this.f9158i = path;
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
            float f12 = this.f9162r / this.f9163s;
            float f13 = this.f9164t;
            if (f10 / f11 <= f12) {
                round2 = Math.round(f10 * f13);
                round = Math.round(round2 / f12);
            } else {
                round = Math.round(f11 * f13);
                round2 = Math.round(round * f12);
            }
            int i12 = (i10 - round2) / 2;
            int round3 = Math.round((i11 - round) * this.f9165u);
            this.f9159o = new l(i12, round3, round2 + i12, round + round3);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float a() {
        return this.f9163s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float b() {
        return this.f9162r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f9157e.getColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f9161q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f9160p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l f() {
        return this.f9159o;
    }

    public float g() {
        return this.f9164t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h() {
        return (int) this.f9157e.getStrokeWidth();
    }

    public float i() {
        return this.f9165u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f9156d.getColor();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(float f10, float f11) {
        this.f9162r = f10;
        this.f9163s = f11;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(float f10) {
        this.f9163s = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(float f10) {
        this.f9162r = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        l lVar = this.f9159o;
        if (lVar != null) {
            int width = getWidth();
            int height = getHeight();
            float g10 = lVar.g();
            float e10 = lVar.e();
            float f10 = lVar.f();
            float c10 = lVar.c();
            float f11 = this.f9160p;
            float f12 = this.f9161q;
            boolean z10 = this.f9166v;
            boolean z11 = this.f9167w;
            Path path = this.f9158i;
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
                    canvas.drawPath(path, this.f9156d);
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
                    canvas.drawPath(path, this.f9157e);
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
                canvas.drawPath(path, this.f9156d);
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
                canvas.drawPath(path, this.f9157e);
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
        this.f9157e.setColor(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        Paint.Cap cap;
        Paint paint = this.f9157e;
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
        this.f9161q = i10;
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        this.f9160p = i10;
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(float f10) {
        this.f9164t = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        this.f9157e.setStrokeWidth(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    public void v(float f10) {
        this.f9165u = f10;
        k();
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(boolean z10) {
        this.f9167w = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(int i10) {
        this.f9156d.setColor(i10);
        if (isLaidOut()) {
            invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(boolean z10) {
        this.f9166v = z10;
        if (isLaidOut()) {
            invalidate();
        }
    }
}
