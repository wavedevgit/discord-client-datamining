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
    private final com.airbnb.lottie.n f37399e;

    /* renamed from: f  reason: collision with root package name */
    protected final u5.b f37400f;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f37402h;

    /* renamed from: i  reason: collision with root package name */
    final Paint f37403i;

    /* renamed from: j  reason: collision with root package name */
    private final o5.a f37404j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f37405k;

    /* renamed from: l  reason: collision with root package name */
    private final List f37406l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f37407m;

    /* renamed from: n  reason: collision with root package name */
    private o5.a f37408n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f37409o;

    /* renamed from: p  reason: collision with root package name */
    float f37410p;

    /* renamed from: q  reason: collision with root package name */
    private o5.c f37411q;

    /* renamed from: a  reason: collision with root package name */
    private final PathMeasure f37395a = new PathMeasure();

    /* renamed from: b  reason: collision with root package name */
    private final Path f37396b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f37397c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final RectF f37398d = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final List f37401g = new ArrayList();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f37412a;

        /* renamed from: b  reason: collision with root package name */
        private final u f37413b;

        private b(u uVar) {
            this.f37412a = new ArrayList();
            this.f37413b = uVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(com.airbnb.lottie.n nVar, u5.b bVar, Paint.Cap cap, Paint.Join join, float f10, s5.d dVar, s5.b bVar2, List list, s5.b bVar3) {
        m5.a aVar = new m5.a(1);
        this.f37403i = aVar;
        this.f37410p = 0.0f;
        this.f37399e = nVar;
        this.f37400f = bVar;
        aVar.setStyle(Paint.Style.STROKE);
        aVar.setStrokeCap(cap);
        aVar.setStrokeJoin(join);
        aVar.setStrokeMiter(f10);
        this.f37405k = dVar.a();
        this.f37404j = bVar2.a();
        if (bVar3 == null) {
            this.f37407m = null;
        } else {
            this.f37407m = bVar3.a();
        }
        this.f37406l = new ArrayList(list.size());
        this.f37402h = new float[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f37406l.add(((s5.b) list.get(i10)).a());
        }
        bVar.i(this.f37405k);
        bVar.i(this.f37404j);
        for (int i11 = 0; i11 < this.f37406l.size(); i11++) {
            bVar.i((o5.a) this.f37406l.get(i11));
        }
        o5.a aVar2 = this.f37407m;
        if (aVar2 != null) {
            bVar.i(aVar2);
        }
        this.f37405k.a(this);
        this.f37404j.a(this);
        for (int i12 = 0; i12 < list.size(); i12++) {
            ((o5.a) this.f37406l.get(i12)).a(this);
        }
        o5.a aVar3 = this.f37407m;
        if (aVar3 != null) {
            aVar3.a(this);
        }
        if (bVar.x() != null) {
            o5.d a10 = bVar.x().a().a();
            this.f37409o = a10;
            a10.a(this);
            bVar.i(this.f37409o);
        }
        if (bVar.z() != null) {
            this.f37411q = new o5.c(this, bVar, bVar.z());
        }
    }

    private void g() {
        float floatValue;
        if (l5.e.h()) {
            l5.e.b("StrokeContent#applyDashPattern");
        }
        if (this.f37406l.isEmpty()) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyDashPattern");
                return;
            }
            return;
        }
        for (int i10 = 0; i10 < this.f37406l.size(); i10++) {
            this.f37402h[i10] = ((Float) ((o5.a) this.f37406l.get(i10)).h()).floatValue();
            if (i10 % 2 == 0) {
                float[] fArr = this.f37402h;
                if (fArr[i10] < 1.0f) {
                    fArr[i10] = 1.0f;
                }
            } else {
                float[] fArr2 = this.f37402h;
                if (fArr2[i10] < 0.1f) {
                    fArr2[i10] = 0.1f;
                }
            }
        }
        o5.a aVar = this.f37407m;
        if (aVar == null) {
            floatValue = 0.0f;
        } else {
            floatValue = ((Float) aVar.h()).floatValue();
        }
        this.f37403i.setPathEffect(new DashPathEffect(this.f37402h, floatValue));
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
        if (bVar.f37413b == null) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f37396b.reset();
        for (int size = bVar.f37412a.size() - 1; size >= 0; size--) {
            this.f37396b.addPath(((m) bVar.f37412a.get(size)).t());
        }
        float floatValue = ((Float) bVar.f37413b.i().h()).floatValue() / 100.0f;
        float floatValue2 = ((Float) bVar.f37413b.e().h()).floatValue() / 100.0f;
        float floatValue3 = ((Float) bVar.f37413b.g().h()).floatValue() / 360.0f;
        if (floatValue < 0.01f && floatValue2 > 0.99f) {
            canvas.drawPath(this.f37396b, this.f37403i);
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f37395a.setPath(this.f37396b, false);
        float length = this.f37395a.getLength();
        while (this.f37395a.nextContour()) {
            length += this.f37395a.getLength();
        }
        float f13 = floatValue3 * length;
        float f14 = (floatValue * length) + f13;
        float min = Math.min((floatValue2 * length) + f13, (f14 + length) - 1.0f);
        float f15 = 0.0f;
        for (int size2 = bVar.f37412a.size() - 1; size2 >= 0; size2--) {
            this.f37397c.set(((m) bVar.f37412a.get(size2)).t());
            this.f37395a.setPath(this.f37397c, false);
            float length2 = this.f37395a.getLength();
            if (min > length) {
                float f16 = min - length;
                if (f16 < f15 + length2 && f15 < f16) {
                    if (f14 > length) {
                        f12 = (f14 - length) / length2;
                    } else {
                        f12 = 0.0f;
                    }
                    y5.j.a(this.f37397c, f12, Math.min(f16 / length2, 1.0f), 0.0f);
                    canvas.drawPath(this.f37397c, this.f37403i);
                    f15 += length2;
                }
            }
            float f17 = f15 + length2;
            if (f17 >= f14 && f15 <= min) {
                if (f17 <= min && f14 < f15) {
                    canvas.drawPath(this.f37397c, this.f37403i);
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
                    y5.j.a(this.f37397c, f10, f11, 0.0f);
                    canvas.drawPath(this.f37397c, this.f37403i);
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
        this.f37399e.invalidateSelf();
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
                        this.f37401g.add(bVar);
                    }
                    bVar = new b(uVar3);
                    uVar3.d(this);
                }
            }
            if (cVar2 instanceof m) {
                if (bVar == null) {
                    bVar = new b(uVar);
                }
                bVar.f37412a.add((m) cVar2);
            }
        }
        if (bVar != null) {
            this.f37401g.add(bVar);
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.c cVar2;
        o5.c cVar3;
        o5.c cVar4;
        o5.c cVar5;
        o5.c cVar6;
        if (obj == b0.f36117d) {
            this.f37405k.o(cVar);
        } else if (obj == b0.f36132s) {
            this.f37404j.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f37408n;
            if (aVar != null) {
                this.f37400f.H(aVar);
            }
            if (cVar == null) {
                this.f37408n = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f37408n = qVar;
            qVar.a(this);
            this.f37400f.i(this.f37408n);
        } else if (obj == b0.f36123j) {
            o5.a aVar2 = this.f37409o;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f37409o = qVar2;
            qVar2.a(this);
            this.f37400f.i(this.f37409o);
        } else if (obj == b0.f36118e && (cVar6 = this.f37411q) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f37411q) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f37411q) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f37411q) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f37411q) != null) {
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
        this.f37396b.reset();
        for (int i10 = 0; i10 < this.f37401g.size(); i10++) {
            b bVar = (b) this.f37401g.get(i10);
            for (int i11 = 0; i11 < bVar.f37412a.size(); i11++) {
                this.f37396b.addPath(((m) bVar.f37412a.get(i11)).t(), matrix);
            }
        }
        this.f37396b.computeBounds(this.f37398d, false);
        float q10 = ((o5.d) this.f37404j).q();
        RectF rectF2 = this.f37398d;
        float f10 = q10 / 2.0f;
        rectF2.set(rectF2.left - f10, rectF2.top - f10, rectF2.right + f10, rectF2.bottom + f10);
        rectF.set(this.f37398d);
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
        int q10 = (int) ((((i10 / 255.0f) * ((o5.f) this.f37405k).q()) / 100.0f) * 255.0f);
        this.f37403i.setAlpha(y5.i.c(q10, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
        this.f37403i.setStrokeWidth(((o5.d) this.f37404j).q());
        if (this.f37403i.getStrokeWidth() <= 0.0f) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#draw");
                return;
            }
            return;
        }
        g();
        o5.a aVar = this.f37408n;
        if (aVar != null) {
            this.f37403i.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f37409o;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f37403i.setMaskFilter(null);
            } else if (floatValue != this.f37410p) {
                this.f37403i.setMaskFilter(this.f37400f.y(floatValue));
            }
            this.f37410p = floatValue;
        }
        o5.c cVar = this.f37411q;
        if (cVar != null) {
            cVar.b(this.f37403i, matrix, y5.j.l(i10, q10));
        }
        canvas.save();
        canvas.concat(matrix);
        for (int i11 = 0; i11 < this.f37401g.size(); i11++) {
            b bVar = (b) this.f37401g.get(i11);
            if (bVar.f37413b != null) {
                i(canvas, bVar);
            } else {
                if (l5.e.h()) {
                    l5.e.b("StrokeContent#buildPath");
                }
                this.f37396b.reset();
                for (int size = bVar.f37412a.size() - 1; size >= 0; size--) {
                    this.f37396b.addPath(((m) bVar.f37412a.get(size)).t());
                }
                if (l5.e.h()) {
                    l5.e.c("StrokeContent#buildPath");
                    l5.e.b("StrokeContent#drawPath");
                }
                canvas.drawPath(this.f37396b, this.f37403i);
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
