package n5;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import l5.a0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements e, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final Path f39799a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f39800b;

    /* renamed from: c  reason: collision with root package name */
    private final t5.b f39801c;

    /* renamed from: d  reason: collision with root package name */
    private final String f39802d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39803e;

    /* renamed from: f  reason: collision with root package name */
    private final List f39804f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39805g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f39806h;

    /* renamed from: i  reason: collision with root package name */
    private o5.a f39807i;

    /* renamed from: j  reason: collision with root package name */
    private final com.airbnb.lottie.n f39808j;

    /* renamed from: k  reason: collision with root package name */
    private o5.a f39809k;

    /* renamed from: l  reason: collision with root package name */
    float f39810l;

    /* renamed from: m  reason: collision with root package name */
    private o5.c f39811m;

    public g(com.airbnb.lottie.n nVar, t5.b bVar, s5.p pVar) {
        Path path = new Path();
        this.f39799a = path;
        m5.a aVar = new m5.a(1);
        this.f39800b = aVar;
        this.f39804f = new ArrayList();
        this.f39801c = bVar;
        this.f39802d = pVar.d();
        this.f39803e = pVar.f();
        this.f39808j = nVar;
        if (bVar.x() != null) {
            o5.a a10 = bVar.x().a().a();
            this.f39809k = a10;
            a10.a(this);
            bVar.i(this.f39809k);
        }
        if (bVar.z() != null) {
            this.f39811m = new o5.c(this, bVar, bVar.z());
        }
        if (pVar.b() != null && pVar.e() != null) {
            r1.d.b(aVar, bVar.w().d());
            path.setFillType(pVar.c());
            o5.a a11 = pVar.b().a();
            this.f39805g = a11;
            a11.a(this);
            bVar.i(a11);
            o5.a a12 = pVar.e().a();
            this.f39806h = a12;
            a12.a(this);
            bVar.i(a12);
            return;
        }
        this.f39805g = null;
        this.f39806h = null;
    }

    @Override // o5.a.b
    public void a() {
        this.f39808j.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f39804f.add((m) cVar);
            }
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
        if (obj == a0.f36862a) {
            this.f39805g.o(cVar);
        } else if (obj == a0.f36865d) {
            this.f39806h.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f39807i;
            if (aVar != null) {
                this.f39801c.H(aVar);
            }
            if (cVar == null) {
                this.f39807i = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f39807i = qVar;
            qVar.a(this);
            this.f39801c.i(this.f39807i);
        } else if (obj == a0.f36871j) {
            o5.a aVar2 = this.f39809k;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f39809k = qVar2;
            qVar2.a(this);
            this.f39801c.i(this.f39809k);
        } else if (obj == a0.f36866e && (cVar6 = this.f39811m) != null) {
            cVar6.c(cVar);
        } else if (obj == a0.G && (cVar5 = this.f39811m) != null) {
            cVar5.f(cVar);
        } else if (obj == a0.H && (cVar4 = this.f39811m) != null) {
            cVar4.d(cVar);
        } else if (obj == a0.I && (cVar3 = this.f39811m) != null) {
            cVar3.e(cVar);
        } else if (obj == a0.J && (cVar2 = this.f39811m) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f39799a.reset();
        for (int i10 = 0; i10 < this.f39804f.size(); i10++) {
            this.f39799a.addPath(((m) this.f39804f.get(i10)).q(), matrix);
        }
        this.f39799a.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        if (this.f39803e) {
            return;
        }
        l5.e.b("FillContent#draw");
        this.f39800b.setColor((x5.i.c((int) ((((i10 / 255.0f) * ((Integer) this.f39806h.h()).intValue()) / 100.0f) * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 24) | (((o5.b) this.f39805g).q() & 16777215));
        o5.a aVar = this.f39807i;
        if (aVar != null) {
            this.f39800b.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f39809k;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f39800b.setMaskFilter(null);
            } else if (floatValue != this.f39810l) {
                this.f39800b.setMaskFilter(this.f39801c.y(floatValue));
            }
            this.f39810l = floatValue;
        }
        o5.c cVar = this.f39811m;
        if (cVar != null) {
            cVar.b(this.f39800b);
        }
        this.f39799a.reset();
        for (int i11 = 0; i11 < this.f39804f.size(); i11++) {
            this.f39799a.addPath(((m) this.f39804f.get(i11)).q(), matrix);
        }
        canvas.drawPath(this.f39799a, this.f39800b);
        l5.e.c("FillContent#draw");
    }

    @Override // n5.c
    public String getName() {
        return this.f39802d;
    }
}
