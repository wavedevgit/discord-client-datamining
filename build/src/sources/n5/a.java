package n5;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.DashPathEffect;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.RectF;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import l5.a0;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements a.b, k, e {

    /* renamed from: e  reason: collision with root package name */
    private final com.airbnb.lottie.n f39666e;

    /* renamed from: f  reason: collision with root package name */
    protected final t5.b f39667f;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f39669h;

    /* renamed from: i  reason: collision with root package name */
    final Paint f39670i;

    /* renamed from: j  reason: collision with root package name */
    private final o5.a f39671j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f39672k;

    /* renamed from: l  reason: collision with root package name */
    private final List f39673l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f39674m;

    /* renamed from: n  reason: collision with root package name */
    private o5.a f39675n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f39676o;

    /* renamed from: p  reason: collision with root package name */
    float f39677p;

    /* renamed from: q  reason: collision with root package name */
    private o5.c f39678q;

    /* renamed from: a  reason: collision with root package name */
    private final PathMeasure f39662a = new PathMeasure();

    /* renamed from: b  reason: collision with root package name */
    private final Path f39663b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f39664c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final RectF f39665d = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final List f39668g = new ArrayList();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f39679a;

        /* renamed from: b  reason: collision with root package name */
        private final u f39680b;

        private b(u uVar) {
            this.f39679a = new ArrayList();
            this.f39680b = uVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(com.airbnb.lottie.n nVar, t5.b bVar, Paint.Cap cap, Paint.Join join, float f10, r5.d dVar, r5.b bVar2, List list, r5.b bVar3) {
        m5.a aVar = new m5.a(1);
        this.f39670i = aVar;
        this.f39677p = 0.0f;
        this.f39666e = nVar;
        this.f39667f = bVar;
        aVar.setStyle(Paint.Style.STROKE);
        aVar.setStrokeCap(cap);
        aVar.setStrokeJoin(join);
        aVar.setStrokeMiter(f10);
        this.f39672k = dVar.a();
        this.f39671j = bVar2.a();
        if (bVar3 == null) {
            this.f39674m = null;
        } else {
            this.f39674m = bVar3.a();
        }
        this.f39673l = new ArrayList(list.size());
        this.f39669h = new float[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f39673l.add(((r5.b) list.get(i10)).a());
        }
        bVar.i(this.f39672k);
        bVar.i(this.f39671j);
        for (int i11 = 0; i11 < this.f39673l.size(); i11++) {
            bVar.i((o5.a) this.f39673l.get(i11));
        }
        o5.a aVar2 = this.f39674m;
        if (aVar2 != null) {
            bVar.i(aVar2);
        }
        this.f39672k.a(this);
        this.f39671j.a(this);
        for (int i12 = 0; i12 < list.size(); i12++) {
            ((o5.a) this.f39673l.get(i12)).a(this);
        }
        o5.a aVar3 = this.f39674m;
        if (aVar3 != null) {
            aVar3.a(this);
        }
        if (bVar.x() != null) {
            o5.a a10 = bVar.x().a().a();
            this.f39676o = a10;
            a10.a(this);
            bVar.i(this.f39676o);
        }
        if (bVar.z() != null) {
            this.f39678q = new o5.c(this, bVar, bVar.z());
        }
    }

    private void f(Matrix matrix) {
        float floatValue;
        l5.e.b("StrokeContent#applyDashPattern");
        if (this.f39673l.isEmpty()) {
            l5.e.c("StrokeContent#applyDashPattern");
            return;
        }
        float g10 = x5.j.g(matrix);
        for (int i10 = 0; i10 < this.f39673l.size(); i10++) {
            this.f39669h[i10] = ((Float) ((o5.a) this.f39673l.get(i10)).h()).floatValue();
            if (i10 % 2 == 0) {
                float[] fArr = this.f39669h;
                if (fArr[i10] < 1.0f) {
                    fArr[i10] = 1.0f;
                }
            } else {
                float[] fArr2 = this.f39669h;
                if (fArr2[i10] < 0.1f) {
                    fArr2[i10] = 0.1f;
                }
            }
            float[] fArr3 = this.f39669h;
            fArr3[i10] = fArr3[i10] * g10;
        }
        o5.a aVar = this.f39674m;
        if (aVar == null) {
            floatValue = 0.0f;
        } else {
            floatValue = g10 * ((Float) aVar.h()).floatValue();
        }
        this.f39670i.setPathEffect(new DashPathEffect(this.f39669h, floatValue));
        l5.e.c("StrokeContent#applyDashPattern");
    }

    private void i(Canvas canvas, b bVar, Matrix matrix) {
        float f10;
        float f11;
        float f12;
        l5.e.b("StrokeContent#applyTrimPath");
        if (bVar.f39680b == null) {
            l5.e.c("StrokeContent#applyTrimPath");
            return;
        }
        this.f39663b.reset();
        for (int size = bVar.f39679a.size() - 1; size >= 0; size--) {
            this.f39663b.addPath(((m) bVar.f39679a.get(size)).q(), matrix);
        }
        float floatValue = ((Float) bVar.f39680b.i().h()).floatValue() / 100.0f;
        float floatValue2 = ((Float) bVar.f39680b.d().h()).floatValue() / 100.0f;
        float floatValue3 = ((Float) bVar.f39680b.f().h()).floatValue() / 360.0f;
        if (floatValue < 0.01f && floatValue2 > 0.99f) {
            canvas.drawPath(this.f39663b, this.f39670i);
            l5.e.c("StrokeContent#applyTrimPath");
            return;
        }
        this.f39662a.setPath(this.f39663b, false);
        float length = this.f39662a.getLength();
        while (this.f39662a.nextContour()) {
            length += this.f39662a.getLength();
        }
        float f13 = floatValue3 * length;
        float f14 = (floatValue * length) + f13;
        float min = Math.min((floatValue2 * length) + f13, (f14 + length) - 1.0f);
        float f15 = 0.0f;
        for (int size2 = bVar.f39679a.size() - 1; size2 >= 0; size2--) {
            this.f39664c.set(((m) bVar.f39679a.get(size2)).q());
            this.f39664c.transform(matrix);
            this.f39662a.setPath(this.f39664c, false);
            float length2 = this.f39662a.getLength();
            if (min > length) {
                float f16 = min - length;
                if (f16 < f15 + length2 && f15 < f16) {
                    if (f14 > length) {
                        f12 = (f14 - length) / length2;
                    } else {
                        f12 = 0.0f;
                    }
                    x5.j.a(this.f39664c, f12, Math.min(f16 / length2, 1.0f), 0.0f);
                    canvas.drawPath(this.f39664c, this.f39670i);
                    f15 += length2;
                }
            }
            float f17 = f15 + length2;
            if (f17 >= f14 && f15 <= min) {
                if (f17 <= min && f14 < f15) {
                    canvas.drawPath(this.f39664c, this.f39670i);
                } else {
                    if (f14 < f15) {
                        f10 = 0.0f;
                    } else {
                        f10 = (f14 - f15) / length2;
                    }
                    if (min > f17) {
                        f11 = 1.0f;
                    } else {
                        f11 = (min - f15) / length2;
                    }
                    x5.j.a(this.f39664c, f10, f11, 0.0f);
                    canvas.drawPath(this.f39664c, this.f39670i);
                }
            }
            f15 += length2;
        }
        l5.e.c("StrokeContent#applyTrimPath");
    }

    @Override // o5.a.b
    public void a() {
        this.f39666e.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        u uVar = null;
        for (int size = list.size() - 1; size >= 0; size--) {
            c cVar = (c) list.get(size);
            if (cVar instanceof u) {
                u uVar2 = (u) cVar;
                if (uVar2.j() == t.a.INDIVIDUALLY) {
                    uVar = uVar2;
                }
            }
        }
        if (uVar != null) {
            uVar.c(this);
        }
        b bVar = null;
        for (int size2 = list2.size() - 1; size2 >= 0; size2--) {
            c cVar2 = (c) list2.get(size2);
            if (cVar2 instanceof u) {
                u uVar3 = (u) cVar2;
                if (uVar3.j() == t.a.INDIVIDUALLY) {
                    if (bVar != null) {
                        this.f39668g.add(bVar);
                    }
                    bVar = new b(uVar3);
                    uVar3.c(this);
                }
            }
            if (cVar2 instanceof m) {
                if (bVar == null) {
                    bVar = new b(uVar);
                }
                bVar.f39679a.add((m) cVar2);
            }
        }
        if (bVar != null) {
            this.f39668g.add(bVar);
        }
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        o5.c cVar2;
        o5.c cVar3;
        o5.c cVar4;
        o5.c cVar5;
        o5.c cVar6;
        if (obj == a0.f36448d) {
            this.f39672k.o(cVar);
        } else if (obj == a0.f36463s) {
            this.f39671j.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f39675n;
            if (aVar != null) {
                this.f39667f.H(aVar);
            }
            if (cVar == null) {
                this.f39675n = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f39675n = qVar;
            qVar.a(this);
            this.f39667f.i(this.f39675n);
        } else if (obj == a0.f36454j) {
            o5.a aVar2 = this.f39676o;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f39676o = qVar2;
            qVar2.a(this);
            this.f39667f.i(this.f39676o);
        } else if (obj == a0.f36449e && (cVar6 = this.f39678q) != null) {
            cVar6.c(cVar);
        } else if (obj == a0.G && (cVar5 = this.f39678q) != null) {
            cVar5.f(cVar);
        } else if (obj == a0.H && (cVar4 = this.f39678q) != null) {
            cVar4.d(cVar);
        } else if (obj == a0.I && (cVar3 = this.f39678q) != null) {
            cVar3.e(cVar);
        } else if (obj == a0.J && (cVar2 = this.f39678q) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        l5.e.b("StrokeContent#getBounds");
        this.f39663b.reset();
        for (int i10 = 0; i10 < this.f39668g.size(); i10++) {
            b bVar = (b) this.f39668g.get(i10);
            for (int i11 = 0; i11 < bVar.f39679a.size(); i11++) {
                this.f39663b.addPath(((m) bVar.f39679a.get(i11)).q(), matrix);
            }
        }
        this.f39663b.computeBounds(this.f39665d, false);
        float q10 = ((o5.d) this.f39671j).q();
        RectF rectF2 = this.f39665d;
        float f10 = q10 / 2.0f;
        rectF2.set(rectF2.left - f10, rectF2.top - f10, rectF2.right + f10, rectF2.bottom + f10);
        rectF.set(this.f39665d);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
        l5.e.c("StrokeContent#getBounds");
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        l5.e.b("StrokeContent#draw");
        if (x5.j.h(matrix)) {
            l5.e.c("StrokeContent#draw");
            return;
        }
        this.f39670i.setAlpha(x5.i.c((int) ((((i10 / 255.0f) * ((o5.f) this.f39672k).q()) / 100.0f) * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY));
        this.f39670i.setStrokeWidth(((o5.d) this.f39671j).q() * x5.j.g(matrix));
        if (this.f39670i.getStrokeWidth() <= 0.0f) {
            l5.e.c("StrokeContent#draw");
            return;
        }
        f(matrix);
        o5.a aVar = this.f39675n;
        if (aVar != null) {
            this.f39670i.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f39676o;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f39670i.setMaskFilter(null);
            } else if (floatValue != this.f39677p) {
                this.f39670i.setMaskFilter(this.f39667f.y(floatValue));
            }
            this.f39677p = floatValue;
        }
        o5.c cVar = this.f39678q;
        if (cVar != null) {
            cVar.b(this.f39670i);
        }
        for (int i11 = 0; i11 < this.f39668g.size(); i11++) {
            b bVar = (b) this.f39668g.get(i11);
            if (bVar.f39680b != null) {
                i(canvas, bVar, matrix);
            } else {
                l5.e.b("StrokeContent#buildPath");
                this.f39663b.reset();
                for (int size = bVar.f39679a.size() - 1; size >= 0; size--) {
                    this.f39663b.addPath(((m) bVar.f39679a.get(size)).q(), matrix);
                }
                l5.e.c("StrokeContent#buildPath");
                l5.e.b("StrokeContent#drawPath");
                canvas.drawPath(this.f39663b, this.f39670i);
                l5.e.c("StrokeContent#drawPath");
            }
        }
        l5.e.c("StrokeContent#draw");
    }
}
