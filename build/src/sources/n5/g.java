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
    private final Path f39161a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f39162b;

    /* renamed from: c  reason: collision with root package name */
    private final t5.b f39163c;

    /* renamed from: d  reason: collision with root package name */
    private final String f39164d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39165e;

    /* renamed from: f  reason: collision with root package name */
    private final List f39166f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39167g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f39168h;

    /* renamed from: i  reason: collision with root package name */
    private o5.a f39169i;

    /* renamed from: j  reason: collision with root package name */
    private final com.airbnb.lottie.n f39170j;

    /* renamed from: k  reason: collision with root package name */
    private o5.a f39171k;

    /* renamed from: l  reason: collision with root package name */
    float f39172l;

    /* renamed from: m  reason: collision with root package name */
    private o5.c f39173m;

    public g(com.airbnb.lottie.n nVar, t5.b bVar, s5.p pVar) {
        Path path = new Path();
        this.f39161a = path;
        m5.a aVar = new m5.a(1);
        this.f39162b = aVar;
        this.f39166f = new ArrayList();
        this.f39163c = bVar;
        this.f39164d = pVar.d();
        this.f39165e = pVar.f();
        this.f39170j = nVar;
        if (bVar.x() != null) {
            o5.a a10 = bVar.x().a().a();
            this.f39171k = a10;
            a10.a(this);
            bVar.i(this.f39171k);
        }
        if (bVar.z() != null) {
            this.f39173m = new o5.c(this, bVar, bVar.z());
        }
        if (pVar.b() != null && pVar.e() != null) {
            r1.d.b(aVar, bVar.w().d());
            path.setFillType(pVar.c());
            o5.a a11 = pVar.b().a();
            this.f39167g = a11;
            a11.a(this);
            bVar.i(a11);
            o5.a a12 = pVar.e().a();
            this.f39168h = a12;
            a12.a(this);
            bVar.i(a12);
            return;
        }
        this.f39167g = null;
        this.f39168h = null;
    }

    @Override // o5.a.b
    public void a() {
        this.f39170j.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f39166f.add((m) cVar);
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
        if (obj == a0.f36372a) {
            this.f39167g.o(cVar);
        } else if (obj == a0.f36375d) {
            this.f39168h.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f39169i;
            if (aVar != null) {
                this.f39163c.H(aVar);
            }
            if (cVar == null) {
                this.f39169i = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f39169i = qVar;
            qVar.a(this);
            this.f39163c.i(this.f39169i);
        } else if (obj == a0.f36381j) {
            o5.a aVar2 = this.f39171k;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f39171k = qVar2;
            qVar2.a(this);
            this.f39163c.i(this.f39171k);
        } else if (obj == a0.f36376e && (cVar6 = this.f39173m) != null) {
            cVar6.c(cVar);
        } else if (obj == a0.G && (cVar5 = this.f39173m) != null) {
            cVar5.f(cVar);
        } else if (obj == a0.H && (cVar4 = this.f39173m) != null) {
            cVar4.d(cVar);
        } else if (obj == a0.I && (cVar3 = this.f39173m) != null) {
            cVar3.e(cVar);
        } else if (obj == a0.J && (cVar2 = this.f39173m) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f39161a.reset();
        for (int i10 = 0; i10 < this.f39166f.size(); i10++) {
            this.f39161a.addPath(((m) this.f39166f.get(i10)).r(), matrix);
        }
        this.f39161a.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        if (this.f39165e) {
            return;
        }
        l5.e.b("FillContent#draw");
        this.f39162b.setColor((x5.i.c((int) ((((i10 / 255.0f) * ((Integer) this.f39168h.h()).intValue()) / 100.0f) * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 24) | (((o5.b) this.f39167g).q() & 16777215));
        o5.a aVar = this.f39169i;
        if (aVar != null) {
            this.f39162b.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f39171k;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f39162b.setMaskFilter(null);
            } else if (floatValue != this.f39172l) {
                this.f39162b.setMaskFilter(this.f39163c.y(floatValue));
            }
            this.f39172l = floatValue;
        }
        o5.c cVar = this.f39173m;
        if (cVar != null) {
            cVar.b(this.f39162b);
        }
        this.f39161a.reset();
        for (int i11 = 0; i11 < this.f39166f.size(); i11++) {
            this.f39161a.addPath(((m) this.f39166f.get(i11)).r(), matrix);
        }
        canvas.drawPath(this.f39161a, this.f39162b);
        l5.e.c("FillContent#draw");
    }

    @Override // n5.c
    public String getName() {
        return this.f39164d;
    }
}
