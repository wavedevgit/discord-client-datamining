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
    private final Path f38516a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f38517b;

    /* renamed from: c  reason: collision with root package name */
    private final t5.b f38518c;

    /* renamed from: d  reason: collision with root package name */
    private final String f38519d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f38520e;

    /* renamed from: f  reason: collision with root package name */
    private final List f38521f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f38522g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f38523h;

    /* renamed from: i  reason: collision with root package name */
    private o5.a f38524i;

    /* renamed from: j  reason: collision with root package name */
    private final com.airbnb.lottie.n f38525j;

    /* renamed from: k  reason: collision with root package name */
    private o5.a f38526k;

    /* renamed from: l  reason: collision with root package name */
    float f38527l;

    /* renamed from: m  reason: collision with root package name */
    private o5.c f38528m;

    public g(com.airbnb.lottie.n nVar, t5.b bVar, s5.p pVar) {
        Path path = new Path();
        this.f38516a = path;
        m5.a aVar = new m5.a(1);
        this.f38517b = aVar;
        this.f38521f = new ArrayList();
        this.f38518c = bVar;
        this.f38519d = pVar.d();
        this.f38520e = pVar.f();
        this.f38525j = nVar;
        if (bVar.x() != null) {
            o5.a a10 = bVar.x().a().a();
            this.f38526k = a10;
            a10.a(this);
            bVar.i(this.f38526k);
        }
        if (bVar.z() != null) {
            this.f38528m = new o5.c(this, bVar, bVar.z());
        }
        if (pVar.b() != null && pVar.e() != null) {
            r1.d.b(aVar, bVar.w().d());
            path.setFillType(pVar.c());
            o5.a a11 = pVar.b().a();
            this.f38522g = a11;
            a11.a(this);
            bVar.i(a11);
            o5.a a12 = pVar.e().a();
            this.f38523h = a12;
            a12.a(this);
            bVar.i(a12);
            return;
        }
        this.f38522g = null;
        this.f38523h = null;
    }

    @Override // o5.a.b
    public void a() {
        this.f38525j.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f38521f.add((m) cVar);
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
        if (obj == a0.f35765a) {
            this.f38522g.o(cVar);
        } else if (obj == a0.f35768d) {
            this.f38523h.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f38524i;
            if (aVar != null) {
                this.f38518c.H(aVar);
            }
            if (cVar == null) {
                this.f38524i = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f38524i = qVar;
            qVar.a(this);
            this.f38518c.i(this.f38524i);
        } else if (obj == a0.f35774j) {
            o5.a aVar2 = this.f38526k;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.f38526k = qVar2;
            qVar2.a(this);
            this.f38518c.i(this.f38526k);
        } else if (obj == a0.f35769e && (cVar6 = this.f38528m) != null) {
            cVar6.c(cVar);
        } else if (obj == a0.G && (cVar5 = this.f38528m) != null) {
            cVar5.f(cVar);
        } else if (obj == a0.H && (cVar4 = this.f38528m) != null) {
            cVar4.d(cVar);
        } else if (obj == a0.I && (cVar3 = this.f38528m) != null) {
            cVar3.e(cVar);
        } else if (obj == a0.J && (cVar2 = this.f38528m) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f38516a.reset();
        for (int i10 = 0; i10 < this.f38521f.size(); i10++) {
            this.f38516a.addPath(((m) this.f38521f.get(i10)).t(), matrix);
        }
        this.f38516a.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        if (this.f38520e) {
            return;
        }
        l5.e.b("FillContent#draw");
        this.f38517b.setColor((x5.i.c((int) ((((i10 / 255.0f) * ((Integer) this.f38523h.h()).intValue()) / 100.0f) * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 24) | (((o5.b) this.f38522g).q() & 16777215));
        o5.a aVar = this.f38524i;
        if (aVar != null) {
            this.f38517b.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f38526k;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f38517b.setMaskFilter(null);
            } else if (floatValue != this.f38527l) {
                this.f38517b.setMaskFilter(this.f38518c.y(floatValue));
            }
            this.f38527l = floatValue;
        }
        o5.c cVar = this.f38528m;
        if (cVar != null) {
            cVar.b(this.f38517b);
        }
        this.f38516a.reset();
        for (int i11 = 0; i11 < this.f38521f.size(); i11++) {
            this.f38516a.addPath(((m) this.f38521f.get(i11)).t(), matrix);
        }
        canvas.drawPath(this.f38516a, this.f38517b);
        l5.e.c("FillContent#draw");
    }

    @Override // n5.c
    public String getName() {
        return this.f38519d;
    }
}
