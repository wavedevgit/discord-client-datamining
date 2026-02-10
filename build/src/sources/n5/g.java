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
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements e, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final Path f36865a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f36866b;

    /* renamed from: c  reason: collision with root package name */
    private final u5.b f36867c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36868d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f36869e;

    /* renamed from: f  reason: collision with root package name */
    private final List f36870f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f36871g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f36872h;

    /* renamed from: i  reason: collision with root package name */
    private o5.a f36873i;

    /* renamed from: j  reason: collision with root package name */
    private final com.airbnb.lottie.n f36874j;

    /* renamed from: k  reason: collision with root package name */
    private o5.a f36875k;

    /* renamed from: l  reason: collision with root package name */
    float f36876l;

    /* renamed from: m  reason: collision with root package name */
    private o5.c f36877m;

    public g(com.airbnb.lottie.n nVar, u5.b bVar, t5.p pVar) {
        Path path = new Path();
        this.f36865a = path;
        this.f36866b = new m5.a(1);
        this.f36870f = new ArrayList();
        this.f36867c = bVar;
        this.f36868d = pVar.d();
        this.f36869e = pVar.f();
        this.f36874j = nVar;
        if (bVar.x() != null) {
            o5.d a10 = bVar.x().a().a();
            this.f36875k = a10;
            a10.a(this);
            bVar.i(this.f36875k);
        }
        if (bVar.z() != null) {
            this.f36877m = new o5.c(this, bVar, bVar.z());
        }
        if (pVar.b() != null && pVar.e() != null) {
            path.setFillType(pVar.c());
            o5.a a11 = pVar.b().a();
            this.f36871g = a11;
            a11.a(this);
            bVar.i(a11);
            o5.a a12 = pVar.e().a();
            this.f36872h = a12;
            a12.a(this);
            bVar.i(a12);
            return;
        }
        this.f36871g = null;
        this.f36872h = null;
    }

    @Override // o5.a.b
    public void a() {
        this.f36874j.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f36870f.add((m) cVar);
            }
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.c cVar2;
        o5.c cVar3;
        o5.c cVar4;
        o5.c cVar5;
        o5.c cVar6;
        if (obj == b0.f35545a) {
            this.f36871g.o(cVar);
        } else if (obj == b0.f35548d) {
            this.f36872h.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f36873i;
            if (aVar != null) {
                this.f36867c.H(aVar);
            }
            if (cVar == null) {
                this.f36873i = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f36873i = qVar;
            qVar.a(this);
            this.f36867c.i(this.f36873i);
        } else if (obj == b0.f35554j) {
            o5.a aVar2 = this.f36875k;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f36875k = qVar2;
            qVar2.a(this);
            this.f36867c.i(this.f36875k);
        } else if (obj == b0.f35549e && (cVar6 = this.f36877m) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f36877m) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f36877m) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f36877m) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f36877m) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f36865a.reset();
        for (int i10 = 0; i10 < this.f36870f.size(); i10++) {
            this.f36865a.addPath(((m) this.f36870f.get(i10)).t(), matrix);
        }
        this.f36865a.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.c
    public String getName() {
        return this.f36868d;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        if (!this.f36869e) {
            if (l5.e.h()) {
                l5.e.b("FillContent#draw");
            }
            int q10 = ((o5.b) this.f36871g).q();
            int intValue = (int) ((((i10 / 255.0f) * ((Integer) this.f36872h.h()).intValue()) / 100.0f) * 255.0f);
            this.f36866b.setColor((q10 & 16777215) | (y5.i.c(intValue, 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 24));
            o5.a aVar = this.f36873i;
            if (aVar != null) {
                this.f36866b.setColorFilter((ColorFilter) aVar.h());
            }
            o5.a aVar2 = this.f36875k;
            if (aVar2 != null) {
                float floatValue = ((Float) aVar2.h()).floatValue();
                if (floatValue == 0.0f) {
                    this.f36866b.setMaskFilter(null);
                } else if (floatValue != this.f36876l) {
                    this.f36866b.setMaskFilter(this.f36867c.y(floatValue));
                }
                this.f36876l = floatValue;
            }
            o5.c cVar = this.f36877m;
            if (cVar != null) {
                cVar.b(this.f36866b, matrix, y5.j.l(i10, intValue));
            }
            this.f36865a.reset();
            for (int i11 = 0; i11 < this.f36870f.size(); i11++) {
                this.f36865a.addPath(((m) this.f36870f.get(i11)).t(), matrix);
            }
            canvas.drawPath(this.f36865a, this.f36866b);
            if (l5.e.h()) {
                l5.e.c("FillContent#draw");
            }
        }
    }
}
