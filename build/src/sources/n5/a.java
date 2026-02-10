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
    private final com.airbnb.lottie.n f37826e;

    /* renamed from: f  reason: collision with root package name */
    protected final u5.b f37827f;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f37829h;

    /* renamed from: i  reason: collision with root package name */
    final Paint f37830i;

    /* renamed from: j  reason: collision with root package name */
    private final o5.a f37831j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f37832k;

    /* renamed from: l  reason: collision with root package name */
    private final List f37833l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f37834m;

    /* renamed from: n  reason: collision with root package name */
    private o5.a f37835n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f37836o;

    /* renamed from: p  reason: collision with root package name */
    float f37837p;

    /* renamed from: q  reason: collision with root package name */
    private o5.c f37838q;

    /* renamed from: a  reason: collision with root package name */
    private final PathMeasure f37822a = new PathMeasure();

    /* renamed from: b  reason: collision with root package name */
    private final Path f37823b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final Path f37824c = new Path();

    /* renamed from: d  reason: collision with root package name */
    private final RectF f37825d = new RectF();

    /* renamed from: g  reason: collision with root package name */
    private final List f37828g = new ArrayList();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f37839a;

        /* renamed from: b  reason: collision with root package name */
        private final u f37840b;

        private b(u uVar) {
            this.f37839a = new ArrayList();
            this.f37840b = uVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(com.airbnb.lottie.n nVar, u5.b bVar, Paint.Cap cap, Paint.Join join, float f10, s5.d dVar, s5.b bVar2, List list, s5.b bVar3) {
        m5.a aVar = new m5.a(1);
        this.f37830i = aVar;
        this.f37837p = 0.0f;
        this.f37826e = nVar;
        this.f37827f = bVar;
        aVar.setStyle(Paint.Style.STROKE);
        aVar.setStrokeCap(cap);
        aVar.setStrokeJoin(join);
        aVar.setStrokeMiter(f10);
        this.f37832k = dVar.a();
        this.f37831j = bVar2.a();
        if (bVar3 == null) {
            this.f37834m = null;
        } else {
            this.f37834m = bVar3.a();
        }
        this.f37833l = new ArrayList(list.size());
        this.f37829h = new float[list.size()];
        for (int i10 = 0; i10 < list.size(); i10++) {
            this.f37833l.add(((s5.b) list.get(i10)).a());
        }
        bVar.i(this.f37832k);
        bVar.i(this.f37831j);
        for (int i11 = 0; i11 < this.f37833l.size(); i11++) {
            bVar.i((o5.a) this.f37833l.get(i11));
        }
        o5.a aVar2 = this.f37834m;
        if (aVar2 != null) {
            bVar.i(aVar2);
        }
        this.f37832k.a(this);
        this.f37831j.a(this);
        for (int i12 = 0; i12 < list.size(); i12++) {
            ((o5.a) this.f37833l.get(i12)).a(this);
        }
        o5.a aVar3 = this.f37834m;
        if (aVar3 != null) {
            aVar3.a(this);
        }
        if (bVar.x() != null) {
            o5.d a10 = bVar.x().a().a();
            this.f37836o = a10;
            a10.a(this);
            bVar.i(this.f37836o);
        }
        if (bVar.z() != null) {
            this.f37838q = new o5.c(this, bVar, bVar.z());
        }
    }

    private void g() {
        float floatValue;
        if (l5.e.h()) {
            l5.e.b("StrokeContent#applyDashPattern");
        }
        if (this.f37833l.isEmpty()) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyDashPattern");
                return;
            }
            return;
        }
        for (int i10 = 0; i10 < this.f37833l.size(); i10++) {
            this.f37829h[i10] = ((Float) ((o5.a) this.f37833l.get(i10)).h()).floatValue();
            if (i10 % 2 == 0) {
                float[] fArr = this.f37829h;
                if (fArr[i10] < 1.0f) {
                    fArr[i10] = 1.0f;
                }
            } else {
                float[] fArr2 = this.f37829h;
                if (fArr2[i10] < 0.1f) {
                    fArr2[i10] = 0.1f;
                }
            }
        }
        o5.a aVar = this.f37834m;
        if (aVar == null) {
            floatValue = 0.0f;
        } else {
            floatValue = ((Float) aVar.h()).floatValue();
        }
        this.f37830i.setPathEffect(new DashPathEffect(this.f37829h, floatValue));
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
        if (bVar.f37840b == null) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f37823b.reset();
        for (int size = bVar.f37839a.size() - 1; size >= 0; size--) {
            this.f37823b.addPath(((m) bVar.f37839a.get(size)).t());
        }
        float floatValue = ((Float) bVar.f37840b.i().h()).floatValue() / 100.0f;
        float floatValue2 = ((Float) bVar.f37840b.e().h()).floatValue() / 100.0f;
        float floatValue3 = ((Float) bVar.f37840b.g().h()).floatValue() / 360.0f;
        if (floatValue < 0.01f && floatValue2 > 0.99f) {
            canvas.drawPath(this.f37823b, this.f37830i);
            if (l5.e.h()) {
                l5.e.c("StrokeContent#applyTrimPath");
                return;
            }
            return;
        }
        this.f37822a.setPath(this.f37823b, false);
        float length = this.f37822a.getLength();
        while (this.f37822a.nextContour()) {
            length += this.f37822a.getLength();
        }
        float f13 = floatValue3 * length;
        float f14 = (floatValue * length) + f13;
        float min = Math.min((floatValue2 * length) + f13, (f14 + length) - 1.0f);
        float f15 = 0.0f;
        for (int size2 = bVar.f37839a.size() - 1; size2 >= 0; size2--) {
            this.f37824c.set(((m) bVar.f37839a.get(size2)).t());
            this.f37822a.setPath(this.f37824c, false);
            float length2 = this.f37822a.getLength();
            if (min > length) {
                float f16 = min - length;
                if (f16 < f15 + length2 && f15 < f16) {
                    if (f14 > length) {
                        f12 = (f14 - length) / length2;
                    } else {
                        f12 = 0.0f;
                    }
                    y5.j.a(this.f37824c, f12, Math.min(f16 / length2, 1.0f), 0.0f);
                    canvas.drawPath(this.f37824c, this.f37830i);
                    f15 += length2;
                }
            }
            float f17 = f15 + length2;
            if (f17 >= f14 && f15 <= min) {
                if (f17 <= min && f14 < f15) {
                    canvas.drawPath(this.f37824c, this.f37830i);
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
                    y5.j.a(this.f37824c, f10, f11, 0.0f);
                    canvas.drawPath(this.f37824c, this.f37830i);
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
        this.f37826e.invalidateSelf();
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
                        this.f37828g.add(bVar);
                    }
                    bVar = new b(uVar3);
                    uVar3.d(this);
                }
            }
            if (cVar2 instanceof m) {
                if (bVar == null) {
                    bVar = new b(uVar);
                }
                bVar.f37839a.add((m) cVar2);
            }
        }
        if (bVar != null) {
            this.f37828g.add(bVar);
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.c cVar2;
        o5.c cVar3;
        o5.c cVar4;
        o5.c cVar5;
        o5.c cVar6;
        if (obj == b0.f35651d) {
            this.f37832k.o(cVar);
        } else if (obj == b0.f35666s) {
            this.f37831j.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f37835n;
            if (aVar != null) {
                this.f37827f.H(aVar);
            }
            if (cVar == null) {
                this.f37835n = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f37835n = qVar;
            qVar.a(this);
            this.f37827f.i(this.f37835n);
        } else if (obj == b0.f35657j) {
            o5.a aVar2 = this.f37836o;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f37836o = qVar2;
            qVar2.a(this);
            this.f37827f.i(this.f37836o);
        } else if (obj == b0.f35652e && (cVar6 = this.f37838q) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f37838q) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f37838q) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f37838q) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f37838q) != null) {
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
        this.f37823b.reset();
        for (int i10 = 0; i10 < this.f37828g.size(); i10++) {
            b bVar = (b) this.f37828g.get(i10);
            for (int i11 = 0; i11 < bVar.f37839a.size(); i11++) {
                this.f37823b.addPath(((m) bVar.f37839a.get(i11)).t(), matrix);
            }
        }
        this.f37823b.computeBounds(this.f37825d, false);
        float q10 = ((o5.d) this.f37831j).q();
        RectF rectF2 = this.f37825d;
        float f10 = q10 / 2.0f;
        rectF2.set(rectF2.left - f10, rectF2.top - f10, rectF2.right + f10, rectF2.bottom + f10);
        rectF.set(this.f37825d);
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
        int q10 = (int) ((((i10 / 255.0f) * ((o5.f) this.f37832k).q()) / 100.0f) * 255.0f);
        this.f37830i.setAlpha(y5.i.c(q10, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
        this.f37830i.setStrokeWidth(((o5.d) this.f37831j).q());
        if (this.f37830i.getStrokeWidth() <= 0.0f) {
            if (l5.e.h()) {
                l5.e.c("StrokeContent#draw");
                return;
            }
            return;
        }
        g();
        o5.a aVar = this.f37835n;
        if (aVar != null) {
            this.f37830i.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f37836o;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f37830i.setMaskFilter(null);
            } else if (floatValue != this.f37837p) {
                this.f37830i.setMaskFilter(this.f37827f.y(floatValue));
            }
            this.f37837p = floatValue;
        }
        o5.c cVar = this.f37838q;
        if (cVar != null) {
            cVar.b(this.f37830i, matrix, y5.j.l(i10, q10));
        }
        canvas.save();
        canvas.concat(matrix);
        for (int i11 = 0; i11 < this.f37828g.size(); i11++) {
            b bVar = (b) this.f37828g.get(i11);
            if (bVar.f37840b != null) {
                i(canvas, bVar);
            } else {
                if (l5.e.h()) {
                    l5.e.b("StrokeContent#buildPath");
                }
                this.f37823b.reset();
                for (int size = bVar.f37839a.size() - 1; size >= 0; size--) {
                    this.f37823b.addPath(((m) bVar.f37839a.get(size)).t());
                }
                if (l5.e.h()) {
                    l5.e.c("StrokeContent#buildPath");
                    l5.e.b("StrokeContent#drawPath");
                }
                canvas.drawPath(this.f37823b, this.f37830i);
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
