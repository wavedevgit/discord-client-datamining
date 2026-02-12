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
import l5.b0;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements a.b, k, e {

    /* renamed from: e  reason: collision with root package name */
    private final com.airbnb.lottie.n f36831e;

    /* renamed from: f  reason: collision with root package name */
    protected final u5.b f36832f;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f36834h;

    /* renamed from: i  reason: collision with root package name */
    final Paint f36835i;

    /* renamed from: j  reason: collision with root package name */
    private final o5.a f36836j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f36837k;

    /* renamed from: l  reason: collision with root package name */
    private final List f36838l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f36839m;

    /* renamed from: n  reason: collision with root package name */
    private o5.a f36840n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f36841o;

    /* renamed from: p  reason: collision with root package name */
    float f36842p;

    /* renamed from: q  reason: collision with root package name */
    private o5.c f36843q;

    /* renamed from: a  reason: collision with root package name */
    private final PathMeasure f36827a = new PathMeasure();

    /* renamed from: b  reason: collision with root package name */
    private final Path f36828b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f36829c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final RectF f36830d = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final List f36833g = new ArrayList();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f36844a;

        /* renamed from: b  reason: collision with root package name */
        private final u f36845b;

        private b(u uVar) {
            this.f36844a = new ArrayList();
            this.f36845b = uVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(com.airbnb.lottie.n nVar, u5.b bVar, Paint.Cap cap, Paint.Join join, float f10, s5.d dVar, s5.b bVar2, List list, s5.b bVar3) {
        m5.a aVar = new m5.a(1);
        this.f36835i = aVar;
        this.f36842p = 0.0f;
        this.f36831e = nVar;
        this.f36832f = bVar;
        aVar.setStyle(Paint.Style.STROKE);
        aVar.setStrokeCap(cap);
        aVar.setStrokeJoin(join);
        aVar.setStrokeMiter(f10);
        this.f36837k = dVar.a();
        this.f36836j = bVar2.a();
        if (bVar3 == null) {
            this.f36839m = null;
        } else {
            this.f36839m = bVar3.a();
        }
        this.f36838l = new ArrayList(list.size());
        this.f36834h = new float[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f36838l.add(((s5.b) list.get(i10)).a());
        }
        bVar.i(this.f36837k);
        bVar.i(this.f36836j);
        for (int i11 = 0; i11 < this.f36838l.size(); i11++) {
            bVar.i((o5.a) this.f36838l.get(i11));
        }
        o5.a aVar2 = this.f36839m;
        if (aVar2 != null) {
            bVar.i(aVar2);
        }
        this.f36837k.a(this);
        this.f36836j.a(this);
        for (int i12 = 0; i12 < list.size(); i12++) {
            ((o5.a) this.f36838l.get(i12)).a(this);
        }
        o5.a aVar3 = this.f36839m;
        if (aVar3 != null) {
            aVar3.a(this);
        }
        if (bVar.x() != null) {
            o5.d a10 = bVar.x().a().a();
            this.f36841o = a10;
            a10.a(this);
            bVar.i(this.f36841o);
        }
        if (bVar.z() != null) {
            this.f36843q = new o5.c(this, bVar, bVar.z());
        }
    }

    private void g() {
        float floatValue;
        if (l5.e.h()) {
            l5.e.b("StrokeContent#applyDashPattern");
        }
        if (this.f36838l.isEmpty()) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyDashPattern");
                return;
            }
            return;
        }
        for (int i10 = 0; i10 < this.f36838l.size(); i10++) {
            this.f36834h[i10] = ((Float) ((o5.a) this.f36838l.get(i10)).h()).floatValue();
            if (i10 % 2 == 0) {
                float[] fArr = this.f36834h;
                if (fArr[i10] < 1.0f) {
                    fArr[i10] = 1.0f;
                }
            } else {
                float[] fArr2 = this.f36834h;
                if (fArr2[i10] < 0.1f) {
                    fArr2[i10] = 0.1f;
                }
            }
        }
        o5.a aVar = this.f36839m;
        if (aVar == null) {
            floatValue = 0.0f;
        } else {
            floatValue = ((Float) aVar.h()).floatValue();
        }
        this.f36835i.setPathEffect(new DashPathEffect(this.f36834h, floatValue));
        if (l5.e.h()) {
            l5.e.c("StrokeContent#applyDashPattern");
        }
    }

    private void i(Canvas canvas, b bVar) {
        float f10;
        float f11;
        float f12;
        if (l5.e.h()) {
            l5.e.b("StrokeContent#applyTrimPath");
        }
        if (bVar.f36845b == null) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f36828b.reset();
        for (int size = bVar.f36844a.size() - 1; size >= 0; size--) {
            this.f36828b.addPath(((m) bVar.f36844a.get(size)).t());
        }
        float floatValue = ((Float) bVar.f36845b.i().h()).floatValue() / 100.0f;
        float floatValue2 = ((Float) bVar.f36845b.e().h()).floatValue() / 100.0f;
        float floatValue3 = ((Float) bVar.f36845b.g().h()).floatValue() / 360.0f;
        if (floatValue < 0.01f && floatValue2 > 0.99f) {
            canvas.drawPath(this.f36828b, this.f36835i);
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f36827a.setPath(this.f36828b, false);
        float length = this.f36827a.getLength();
        while (this.f36827a.nextContour()) {
            length += this.f36827a.getLength();
        }
        float f13 = floatValue3 * length;
        float f14 = (floatValue * length) + f13;
        float min = Math.min((floatValue2 * length) + f13, (f14 + length) - 1.0f);
        float f15 = 0.0f;
        for (int size2 = bVar.f36844a.size() - 1; size2 >= 0; size2--) {
            this.f36829c.set(((m) bVar.f36844a.get(size2)).t());
            this.f36827a.setPath(this.f36829c, false);
            float length2 = this.f36827a.getLength();
            if (min > length) {
                float f16 = min - length;
                if (f16 < f15 + length2 && f15 < f16) {
                    if (f14 > length) {
                        f12 = (f14 - length) / length2;
                    } else {
                        f12 = 0.0f;
                    }
                    y5.j.a(this.f36829c, f12, Math.min(f16 / length2, 1.0f), 0.0f);
                    canvas.drawPath(this.f36829c, this.f36835i);
                    f15 += length2;
                }
            }
            float f17 = f15 + length2;
            if (f17 >= f14 && f15 <= min) {
                if (f17 <= min && f14 < f15) {
                    canvas.drawPath(this.f36829c, this.f36835i);
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
                    y5.j.a(this.f36829c, f10, f11, 0.0f);
                    canvas.drawPath(this.f36829c, this.f36835i);
                }
            }
            f15 += length2;
        }
        if (l5.e.h()) {
            l5.e.c("StrokeContent#applyTrimPath");
        }
    }

    @Override // o5.a.b
    public void a() {
        this.f36831e.invalidateSelf();
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
            uVar.d(this);
        }
        b bVar = null;
        for (int size2 = list2.size() - 1; size2 >= 0; size2--) {
            c cVar2 = (c) list2.get(size2);
            if (cVar2 instanceof u) {
                u uVar3 = (u) cVar2;
                if (uVar3.j() == t.a.INDIVIDUALLY) {
                    if (bVar != null) {
                        this.f36833g.add(bVar);
                    }
                    bVar = new b(uVar3);
                    uVar3.d(this);
                }
            }
            if (cVar2 instanceof m) {
                if (bVar == null) {
                    bVar = new b(uVar);
                }
                bVar.f36844a.add((m) cVar2);
            }
        }
        if (bVar != null) {
            this.f36833g.add(bVar);
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.c cVar2;
        o5.c cVar3;
        o5.c cVar4;
        o5.c cVar5;
        o5.c cVar6;
        if (obj == b0.f35549d) {
            this.f36837k.o(cVar);
        } else if (obj == b0.f35564s) {
            this.f36836j.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f36840n;
            if (aVar != null) {
                this.f36832f.H(aVar);
            }
            if (cVar == null) {
                this.f36840n = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f36840n = qVar;
            qVar.a(this);
            this.f36832f.i(this.f36840n);
        } else if (obj == b0.f35555j) {
            o5.a aVar2 = this.f36841o;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f36841o = qVar2;
            qVar2.a(this);
            this.f36832f.i(this.f36841o);
        } else if (obj == b0.f35550e && (cVar6 = this.f36843q) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f36843q) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f36843q) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f36843q) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f36843q) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        if (l5.e.h()) {
            l5.e.b("StrokeContent#getBounds");
        }
        this.f36828b.reset();
        for (int i10 = 0; i10 < this.f36833g.size(); i10++) {
            b bVar = (b) this.f36833g.get(i10);
            for (int i11 = 0; i11 < bVar.f36844a.size(); i11++) {
                this.f36828b.addPath(((m) bVar.f36844a.get(i11)).t(), matrix);
            }
        }
        this.f36828b.computeBounds(this.f36830d, false);
        float q10 = ((o5.d) this.f36836j).q();
        RectF rectF2 = this.f36830d;
        float f10 = q10 / 2.0f;
        rectF2.set(rectF2.left - f10, rectF2.top - f10, rectF2.right + f10, rectF2.bottom + f10);
        rectF.set(this.f36830d);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
        if (l5.e.h()) {
            l5.e.c("StrokeContent#getBounds");
        }
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        if (l5.e.h()) {
            l5.e.b("StrokeContent#draw");
        }
        if (y5.j.h(matrix)) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#draw");
                return;
            }
            return;
        }
        int q10 = (int) ((((i10 / 255.0f) * ((o5.f) this.f36837k).q()) / 100.0f) * 255.0f);
        this.f36835i.setAlpha(y5.i.c(q10, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
        this.f36835i.setStrokeWidth(((o5.d) this.f36836j).q());
        if (this.f36835i.getStrokeWidth() <= 0.0f) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#draw");
                return;
            }
            return;
        }
        g();
        o5.a aVar = this.f36840n;
        if (aVar != null) {
            this.f36835i.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f36841o;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f36835i.setMaskFilter(null);
            } else if (floatValue != this.f36842p) {
                this.f36835i.setMaskFilter(this.f36832f.y(floatValue));
            }
            this.f36842p = floatValue;
        }
        o5.c cVar = this.f36843q;
        if (cVar != null) {
            cVar.b(this.f36835i, matrix, y5.j.l(i10, q10));
        }
        canvas.save();
        canvas.concat(matrix);
        for (int i11 = 0; i11 < this.f36833g.size(); i11++) {
            b bVar = (b) this.f36833g.get(i11);
            if (bVar.f36845b != null) {
                i(canvas, bVar);
            } else {
                if (l5.e.h()) {
                    l5.e.b("StrokeContent#buildPath");
                }
                this.f36828b.reset();
                for (int size = bVar.f36844a.size() - 1; size >= 0; size--) {
                    this.f36828b.addPath(((m) bVar.f36844a.get(size)).t());
                }
                if (l5.e.h()) {
                    l5.e.c("StrokeContent#buildPath");
                    l5.e.b("StrokeContent#drawPath");
                }
                canvas.drawPath(this.f36828b, this.f36835i);
                if (l5.e.h()) {
                    l5.e.c("StrokeContent#drawPath");
                }
            }
        }
        canvas.restore();
        if (l5.e.h()) {
            l5.e.c("StrokeContent#draw");
        }
    }
}
