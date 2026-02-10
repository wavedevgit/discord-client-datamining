package com.google.android.material.progressindicator;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import com.google.android.material.progressindicator.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends h {

    /* renamed from: b  reason: collision with root package name */
    private float f15369b;

    /* renamed from: c  reason: collision with root package name */
    private float f15370c;

    /* renamed from: d  reason: collision with root package name */
    private float f15371d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15372e;

    /* renamed from: f  reason: collision with root package name */
    private float f15373f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(e eVar) {
        super(eVar);
    }

    private void h(Canvas canvas, Paint paint, float f10, float f11, int i10, int i11, int i12) {
        float f12;
        Paint.Cap cap;
        if (f11 >= f10) {
            f12 = f11 - f10;
        } else {
            f12 = (f11 + 1.0f) - f10;
        }
        float f13 = f10 % 1.0f;
        if (this.f15373f < 1.0f) {
            float f14 = f13 + f12;
            if (f14 > 1.0f) {
                h(canvas, paint, f13, 1.0f, i10, i11, 0);
                h(canvas, paint, 1.0f, f14, i10, 0, i12);
                return;
            }
        }
        float degrees = (float) Math.toDegrees(this.f15370c / this.f15371d);
        if (f13 == 0.0f && f12 >= 0.99f) {
            f12 += ((f12 - 0.99f) * ((degrees * 2.0f) / 360.0f)) / 0.01f;
        }
        float b10 = lh.a.b(1.0f - this.f15373f, 1.0f, f13);
        float b11 = lh.a.b(0.0f, this.f15373f, f12);
        float degrees2 = (float) Math.toDegrees(i11 / this.f15371d);
        float degrees3 = ((b11 * 360.0f) - degrees2) - ((float) Math.toDegrees(i12 / this.f15371d));
        float f15 = (b10 * 360.0f) + degrees2;
        if (degrees3 > 0.0f) {
            paint.setAntiAlias(true);
            paint.setColor(i10);
            paint.setStrokeWidth(this.f15369b);
            float f16 = degrees * 2.0f;
            if (degrees3 < f16) {
                float f17 = degrees3 / f16;
                paint.setStyle(Paint.Style.FILL);
                j(canvas, paint, f15 + (degrees * f17), this.f15370c * 2.0f, this.f15369b, f17);
                return;
            }
            float f18 = this.f15371d;
            RectF rectF = new RectF(-f18, -f18, f18, f18);
            paint.setStyle(Paint.Style.STROKE);
            if (this.f15372e) {
                cap = Paint.Cap.ROUND;
            } else {
                cap = Paint.Cap.BUTT;
            }
            paint.setStrokeCap(cap);
            float f19 = f15 + degrees;
            canvas.drawArc(rectF, f19, degrees3 - f16, false, paint);
            if (!this.f15372e && this.f15370c > 0.0f) {
                paint.setStyle(Paint.Style.FILL);
                i(canvas, paint, f19, this.f15370c * 2.0f, this.f15369b);
                i(canvas, paint, (f15 + degrees3) - degrees, this.f15370c * 2.0f, this.f15369b);
            }
        }
    }

    private void i(Canvas canvas, Paint paint, float f10, float f11, float f12) {
        j(canvas, paint, f10, f11, f12, 1.0f);
    }

    private void j(Canvas canvas, Paint paint, float f10, float f11, float f12, float f13) {
        float min = (int) Math.min(f12, this.f15369b);
        float f14 = f11 / 2.0f;
        float min2 = Math.min(f14, (this.f15370c * min) / this.f15369b);
        RectF rectF = new RectF((-min) / 2.0f, (-f11) / 2.0f, min / 2.0f, f14);
        canvas.save();
        double d10 = f10;
        canvas.translate((float) (this.f15371d * Math.cos(Math.toRadians(d10))), (float) (this.f15371d * Math.sin(Math.toRadians(d10))));
        canvas.rotate(f10);
        canvas.scale(f13, f13);
        canvas.drawRoundRect(rectF, min2, min2, paint);
        canvas.restore();
    }

    private int k() {
        b bVar = this.f15409a;
        return ((e) bVar).f15389h + (((e) bVar).f15390i * 2);
    }

    @Override // com.google.android.material.progressindicator.h
    void a(Canvas canvas, Rect rect, float f10, boolean z10, boolean z11) {
        boolean z12;
        float width = rect.width() / f();
        float height = rect.height() / e();
        b bVar = this.f15409a;
        float f11 = (((e) bVar).f15389h / 2.0f) + ((e) bVar).f15390i;
        canvas.translate((f11 * width) + rect.left, (f11 * height) + rect.top);
        canvas.rotate(-90.0f);
        canvas.scale(width, height);
        if (((e) this.f15409a).f15391j != 0) {
            canvas.scale(1.0f, -1.0f);
        }
        float f12 = -f11;
        canvas.clipRect(f12, f12, f11, f11);
        b bVar2 = this.f15409a;
        if (((e) bVar2).f15362a / 2 <= ((e) bVar2).f15363b) {
            z12 = true;
        } else {
            z12 = false;
        }
        this.f15372e = z12;
        this.f15369b = ((e) bVar2).f15362a * f10;
        this.f15370c = Math.min(((e) bVar2).f15362a / 2, ((e) bVar2).f15363b) * f10;
        b bVar3 = this.f15409a;
        float f13 = (((e) bVar3).f15389h - ((e) bVar3).f15362a) / 2.0f;
        this.f15371d = f13;
        if (z10 || z11) {
            if ((z10 && ((e) bVar3).f15366e == 2) || (z11 && ((e) bVar3).f15367f == 1)) {
                this.f15371d = f13 + (((1.0f - f10) * ((e) bVar3).f15362a) / 2.0f);
            } else if ((z10 && ((e) bVar3).f15366e == 1) || (z11 && ((e) bVar3).f15367f == 2)) {
                this.f15371d = f13 - (((1.0f - f10) * ((e) bVar3).f15362a) / 2.0f);
            }
        }
        if (z11 && ((e) bVar3).f15367f == 3) {
            this.f15373f = f10;
        } else {
            this.f15373f = 1.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public void b(Canvas canvas, Paint paint, int i10, int i11) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public void c(Canvas canvas, Paint paint, h.a aVar, int i10) {
        int a10 = hh.a.a(aVar.f15412c, i10);
        float f10 = aVar.f15410a;
        float f11 = aVar.f15411b;
        int i11 = aVar.f15413d;
        h(canvas, paint, f10, f11, a10, i11, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public void d(Canvas canvas, Paint paint, float f10, float f11, int i10, int i11, int i12) {
        h(canvas, paint, f10, f11, hh.a.a(i10, i11), i12, i12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public int e() {
        return k();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public int f() {
        return k();
    }
}
