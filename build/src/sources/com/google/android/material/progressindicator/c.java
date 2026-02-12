package com.google.android.material.progressindicator;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.Rect;
import android.graphics.RectF;
import android.os.Build;
import android.util.Pair;
import com.google.android.material.progressindicator.i;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends i {

    /* renamed from: f  reason: collision with root package name */
    private float f16085f;

    /* renamed from: g  reason: collision with root package name */
    private float f16086g;

    /* renamed from: h  reason: collision with root package name */
    private float f16087h;

    /* renamed from: i  reason: collision with root package name */
    private float f16088i;

    /* renamed from: j  reason: collision with root package name */
    private float f16089j;

    /* renamed from: k  reason: collision with root package name */
    private float f16090k;

    /* renamed from: l  reason: collision with root package name */
    private int f16091l;

    /* renamed from: m  reason: collision with root package name */
    private float f16092m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f16093n;

    /* renamed from: o  reason: collision with root package name */
    private float f16094o;

    /* renamed from: p  reason: collision with root package name */
    private final RectF f16095p;

    /* renamed from: q  reason: collision with root package name */
    private final Pair f16096q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(f fVar) {
        super(fVar);
        this.f16095p = new RectF();
        this.f16096q = new Pair(new i.b(), new i.b());
    }

    private void j(Path path, i.b bVar, i.b bVar2) {
        float f10 = (this.f16089j / 2.0f) * 0.48f;
        i.b bVar3 = new i.b(this, bVar);
        i.b bVar4 = new i.b(this, bVar2);
        bVar3.b(f10);
        bVar4.b(-f10);
        float[] fArr = bVar3.f16162a;
        float f11 = fArr[0];
        float f12 = fArr[1];
        float[] fArr2 = bVar4.f16162a;
        float f13 = fArr2[0];
        float f14 = fArr2[1];
        float[] fArr3 = bVar2.f16162a;
        path.cubicTo(f11, f12, f13, f14, fArr3[0], fArr3[1]);
    }

    private void k(PathMeasure pathMeasure, Path path, Pair pair, float f10, float f11, float f12, float f13) {
        int i10;
        float f14 = this.f16087h * f12;
        if (this.f16093n) {
            i10 = ((f) this.f16149a).f16080j;
        } else {
            i10 = ((f) this.f16149a).f16081k;
        }
        float f15 = this.f16088i;
        if (f15 != this.f16092m || (pathMeasure == this.f16152d && (f14 != this.f16090k || i10 != this.f16091l))) {
            this.f16090k = f14;
            this.f16091l = i10;
            this.f16092m = f15;
            g();
        }
        path.rewind();
        float f16 = 0.0f;
        float a10 = u1.a.a(f11, 0.0f, 1.0f);
        if (((f) this.f16149a).b(this.f16093n)) {
            float f17 = f13 / ((float) ((this.f16088i * 6.283185307179586d) / this.f16089j));
            f10 += f17;
            f16 = 0.0f - (f17 * 360.0f);
        }
        float f18 = f10 % 1.0f;
        float length = (pathMeasure.getLength() * f18) / 2.0f;
        float length2 = ((f18 + a10) * pathMeasure.getLength()) / 2.0f;
        pathMeasure.getSegment(length, length2, path, true);
        i.b bVar = (i.b) pair.first;
        bVar.c();
        pathMeasure.getPosTan(length, bVar.f16162a, bVar.f16163b);
        i.b bVar2 = (i.b) pair.second;
        bVar2.c();
        pathMeasure.getPosTan(length2, bVar2.f16162a, bVar2.f16163b);
        this.f16153e.reset();
        this.f16153e.setRotate(f16);
        bVar.d(f16);
        bVar2.d(f16);
        path.transform(this.f16153e);
    }

    private void l(PathMeasure pathMeasure, Path path, float f10) {
        int i10;
        path.rewind();
        float length = pathMeasure.getLength();
        if (this.f16093n) {
            i10 = ((f) this.f16149a).f16080j;
        } else {
            i10 = ((f) this.f16149a).f16081k;
        }
        int max = Math.max(3, (int) ((length / i10) / 2.0f)) * 2;
        this.f16089j = length / max;
        ArrayList arrayList = new ArrayList();
        for (int i11 = 0; i11 < max; i11++) {
            i.b bVar = new i.b();
            float f11 = i11;
            pathMeasure.getPosTan(this.f16089j * f11, bVar.f16162a, bVar.f16163b);
            i.b bVar2 = new i.b();
            float f12 = this.f16089j;
            pathMeasure.getPosTan((f11 * f12) + (f12 / 2.0f), bVar2.f16162a, bVar2.f16163b);
            arrayList.add(bVar);
            bVar2.a(f10 * 2.0f);
            arrayList.add(bVar2);
        }
        arrayList.add((i.b) arrayList.get(0));
        i.b bVar3 = (i.b) arrayList.get(0);
        float[] fArr = bVar3.f16162a;
        int i12 = 1;
        path.moveTo(fArr[0], fArr[1]);
        while (i12 < arrayList.size()) {
            i.b bVar4 = (i.b) arrayList.get(i12);
            j(path, bVar3, bVar4);
            i12++;
            bVar3 = bVar4;
        }
    }

    private void m(Canvas canvas, Paint paint, float f10, float f11, int i10, int i11, int i12, float f12, float f13, boolean z10) {
        float f14;
        boolean z11;
        Paint.Cap cap;
        if (f11 >= f10) {
            f14 = f11 - f10;
        } else {
            f14 = (f11 + 1.0f) - f10;
        }
        float f15 = f10 % 1.0f;
        if (f15 < 0.0f) {
            f15 += 1.0f;
        }
        if (this.f16094o < 1.0f) {
            float f16 = f15 + f14;
            if (f16 > 1.0f) {
                m(canvas, paint, f15, 1.0f, i10, i11, 0, f12, f13, z10);
                m(canvas, paint, 1.0f, f16, i10, 0, i12, f12, f13, z10);
                return;
            }
        }
        float degrees = (float) Math.toDegrees(this.f16086g / this.f16088i);
        float f17 = f14 - 0.99f;
        if (f17 >= 0.0f) {
            float f18 = ((f17 * degrees) / 180.0f) / 0.01f;
            f14 += f18;
            if (!z10) {
                f15 -= f18 / 2.0f;
            }
        }
        float c10 = nh.a.c(1.0f - this.f16094o, 1.0f, f15);
        float c11 = nh.a.c(0.0f, this.f16094o, f14);
        float degrees2 = (float) Math.toDegrees(i11 / this.f16088i);
        float degrees3 = ((c11 * 360.0f) - degrees2) - ((float) Math.toDegrees(i12 / this.f16088i));
        float f19 = (c10 * 360.0f) + degrees2;
        if (degrees3 > 0.0f) {
            if (((f) this.f16149a).b(this.f16093n) && z10 && f12 > 0.0f) {
                z11 = true;
            } else {
                z11 = false;
            }
            paint.setAntiAlias(true);
            paint.setColor(i10);
            paint.setStrokeWidth(this.f16085f);
            float f20 = this.f16086g * 2.0f;
            float f21 = degrees * 2.0f;
            if (degrees3 < f21) {
                float f22 = degrees3 / f21;
                float f23 = f19 + (degrees * f22);
                i.b bVar = new i.b();
                if (!z11) {
                    bVar.d(f23 + 90.0f);
                    bVar.a(-this.f16088i);
                } else {
                    float length = ((f23 / 360.0f) * this.f16152d.getLength()) / 2.0f;
                    float f24 = this.f16087h * f12;
                    float f25 = this.f16088i;
                    if (f25 != this.f16092m || f24 != this.f16090k) {
                        this.f16090k = f24;
                        this.f16092m = f25;
                        g();
                    }
                    this.f16152d.getPosTan(length, bVar.f16162a, bVar.f16163b);
                }
                paint.setStyle(Paint.Style.FILL);
                o(canvas, paint, bVar, f20, this.f16085f, f22);
                return;
            }
            paint.setStyle(Paint.Style.STROKE);
            if (((f) this.f16149a).g()) {
                cap = Paint.Cap.ROUND;
            } else {
                cap = Paint.Cap.BUTT;
            }
            paint.setStrokeCap(cap);
            float f26 = f19 + degrees;
            float f27 = degrees3 - f21;
            ((i.b) this.f16096q.first).c();
            ((i.b) this.f16096q.second).c();
            if (!z11) {
                ((i.b) this.f16096q.first).d(f26 + 90.0f);
                ((i.b) this.f16096q.first).a(-this.f16088i);
                ((i.b) this.f16096q.second).d(f26 + f27 + 90.0f);
                ((i.b) this.f16096q.second).a(-this.f16088i);
                RectF rectF = this.f16095p;
                float f28 = this.f16088i;
                rectF.set(-f28, -f28, f28, f28);
                canvas.drawArc(this.f16095p, f26, f27, false, paint);
            } else {
                k(this.f16152d, this.f16151c, this.f16096q, f26 / 360.0f, f27 / 360.0f, f12, f13);
                canvas.drawPath(this.f16151c, paint);
            }
            if (!((f) this.f16149a).g() && this.f16086g > 0.0f) {
                paint.setStyle(Paint.Style.FILL);
                n(canvas, paint, (i.b) this.f16096q.first, f20, this.f16085f);
                n(canvas, paint, (i.b) this.f16096q.second, f20, this.f16085f);
            }
        }
    }

    private void n(Canvas canvas, Paint paint, i.b bVar, float f10, float f11) {
        o(canvas, paint, bVar, f10, f11, 1.0f);
    }

    private void o(Canvas canvas, Paint paint, i.b bVar, float f10, float f11, float f12) {
        float min = Math.min(f11, this.f16085f);
        float f13 = f10 / 2.0f;
        float min2 = Math.min(f13, (this.f16086g * min) / this.f16085f);
        RectF rectF = new RectF((-f10) / 2.0f, (-min) / 2.0f, f13, min / 2.0f);
        canvas.save();
        float[] fArr = bVar.f16162a;
        canvas.translate(fArr[0], fArr[1]);
        canvas.rotate(i(bVar.f16163b));
        canvas.scale(f12, f12);
        canvas.drawRoundRect(rectF, min2, min2, paint);
        canvas.restore();
    }

    private int p() {
        b bVar = this.f16149a;
        return ((f) bVar).f16128p + (((f) bVar).f16129q * 2);
    }

    @Override // com.google.android.material.progressindicator.i
    void a(Canvas canvas, Rect rect, float f10, boolean z10, boolean z11) {
        float width = rect.width() / f();
        float height = rect.height() / e();
        b bVar = this.f16149a;
        float f11 = (((f) bVar).f16128p / 2.0f) + ((f) bVar).f16129q;
        canvas.translate((f11 * width) + rect.left, (f11 * height) + rect.top);
        canvas.rotate(-90.0f);
        canvas.scale(width, height);
        if (((f) this.f16149a).f16130r != 0) {
            canvas.scale(1.0f, -1.0f);
            if (Build.VERSION.SDK_INT == 29) {
                canvas.rotate(0.1f);
            }
        }
        float f12 = -f11;
        canvas.clipRect(f12, f12, f11, f11);
        b bVar2 = this.f16149a;
        this.f16085f = ((f) bVar2).f16071a * f10;
        this.f16086g = Math.min(((f) bVar2).f16071a / 2, ((f) bVar2).a()) * f10;
        b bVar3 = this.f16149a;
        this.f16087h = ((f) bVar3).f16082l * f10;
        float f13 = (((f) bVar3).f16128p - ((f) bVar3).f16071a) / 2.0f;
        this.f16088i = f13;
        if (z10 || z11) {
            float f14 = ((1.0f - f10) * ((f) bVar3).f16071a) / 2.0f;
            if ((z10 && ((f) bVar3).f16077g == 2) || (z11 && ((f) bVar3).f16078h == 1)) {
                this.f16088i = f13 + f14;
            } else if ((z10 && ((f) bVar3).f16077g == 1) || (z11 && ((f) bVar3).f16078h == 2)) {
                this.f16088i = f13 - f14;
            }
        }
        if (z11 && ((f) bVar3).f16078h == 3) {
            this.f16094o = f10;
        } else {
            this.f16094o = 1.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public void b(Canvas canvas, Paint paint, int i10, int i11) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public void c(Canvas canvas, Paint paint, i.a aVar, int i10) {
        int a10 = jh.a.a(aVar.f16156c, i10);
        canvas.save();
        canvas.rotate(aVar.f16160g);
        this.f16093n = aVar.f16161h;
        float f10 = aVar.f16154a;
        float f11 = aVar.f16155b;
        int i11 = aVar.f16157d;
        m(canvas, paint, f10, f11, a10, i11, i11, aVar.f16158e, aVar.f16159f, true);
        canvas.restore();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public void d(Canvas canvas, Paint paint, float f10, float f11, int i10, int i11, int i12) {
        int a10 = jh.a.a(i10, i11);
        this.f16093n = false;
        m(canvas, paint, f10, f11, a10, i12, i12, 0.0f, 0.0f, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public int e() {
        return p();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public int f() {
        return p();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.i
    public void g() {
        this.f16150b.rewind();
        this.f16150b.moveTo(1.0f, 0.0f);
        for (int i10 = 0; i10 < 2; i10++) {
            this.f16150b.cubicTo(1.0f, 0.5522848f, 0.5522848f, 1.0f, 0.0f, 1.0f);
            this.f16150b.cubicTo(-0.5522848f, 1.0f, -1.0f, 0.5522848f, -1.0f, 0.0f);
            this.f16150b.cubicTo(-1.0f, -0.5522848f, -0.5522848f, -1.0f, 0.0f, -1.0f);
            this.f16150b.cubicTo(0.5522848f, -1.0f, 1.0f, -0.5522848f, 1.0f, 0.0f);
        }
        this.f16153e.reset();
        Matrix matrix = this.f16153e;
        float f10 = this.f16088i;
        matrix.setScale(f10, f10);
        this.f16150b.transform(this.f16153e);
        if (((f) this.f16149a).b(this.f16093n)) {
            this.f16152d.setPath(this.f16150b, false);
            l(this.f16152d, this.f16150b, this.f16090k);
        }
        this.f16152d.setPath(this.f16150b, false);
    }
}
