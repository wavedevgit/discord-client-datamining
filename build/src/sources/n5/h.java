package n5;

import android.graphics.BlurMaskFilter;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Shader;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements e, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final String f36878a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36879b;

    /* renamed from: c  reason: collision with root package name */
    private final u5.b f36880c;

    /* renamed from: d  reason: collision with root package name */
    private final u0.j f36881d = new u0.j();

    /* renamed from: e  reason: collision with root package name */
    private final u0.j f36882e = new u0.j();

    /* renamed from: f  reason: collision with root package name */
    private final Path f36883f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f36884g;

    /* renamed from: h  reason: collision with root package name */
    private final RectF f36885h;

    /* renamed from: i  reason: collision with root package name */
    private final List f36886i;

    /* renamed from: j  reason: collision with root package name */
    private final t5.g f36887j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f36888k;

    /* renamed from: l  reason: collision with root package name */
    private final o5.a f36889l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f36890m;

    /* renamed from: n  reason: collision with root package name */
    private final o5.a f36891n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f36892o;

    /* renamed from: p  reason: collision with root package name */
    private o5.q f36893p;

    /* renamed from: q  reason: collision with root package name */
    private final com.airbnb.lottie.n f36894q;

    /* renamed from: r  reason: collision with root package name */
    private final int f36895r;

    /* renamed from: s  reason: collision with root package name */
    private o5.a f36896s;

    /* renamed from: t  reason: collision with root package name */
    float f36897t;

    /* renamed from: u  reason: collision with root package name */
    private o5.c f36898u;

    public h(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar, t5.e eVar) {
        Path path = new Path();
        this.f36883f = path;
        this.f36884g = new m5.a(1);
        this.f36885h = new RectF();
        this.f36886i = new ArrayList();
        this.f36897t = 0.0f;
        this.f36880c = bVar;
        this.f36878a = eVar.f();
        this.f36879b = eVar.i();
        this.f36894q = nVar;
        this.f36887j = eVar.e();
        path.setFillType(eVar.c());
        this.f36895r = (int) (iVar.d() / 32.0f);
        o5.a a10 = eVar.d().a();
        this.f36888k = a10;
        a10.a(this);
        bVar.i(a10);
        o5.a a11 = eVar.g().a();
        this.f36889l = a11;
        a11.a(this);
        bVar.i(a11);
        o5.a a12 = eVar.h().a();
        this.f36890m = a12;
        a12.a(this);
        bVar.i(a12);
        o5.a a13 = eVar.b().a();
        this.f36891n = a13;
        a13.a(this);
        bVar.i(a13);
        if (bVar.x() != null) {
            o5.d a14 = bVar.x().a().a();
            this.f36896s = a14;
            a14.a(this);
            bVar.i(this.f36896s);
        }
        if (bVar.z() != null) {
            this.f36898u = new o5.c(this, bVar, bVar.z());
        }
    }

    private int[] g(int[] iArr) {
        o5.q qVar = this.f36893p;
        if (qVar != null) {
            Integer[] numArr = (Integer[]) qVar.h();
            int i10 = 0;
            if (iArr.length == numArr.length) {
                while (i10 < iArr.length) {
                    iArr[i10] = numArr[i10].intValue();
                    i10++;
                }
            } else {
                iArr = new int[numArr.length];
                while (i10 < numArr.length) {
                    iArr[i10] = numArr[i10].intValue();
                    i10++;
                }
            }
        }
        return iArr;
    }

    private int i() {
        int i10;
        int round = Math.round(this.f36890m.f() * this.f36895r);
        int round2 = Math.round(this.f36891n.f() * this.f36895r);
        int round3 = Math.round(this.f36888k.f() * this.f36895r);
        if (round != 0) {
            i10 = 527 * round;
        } else {
            i10 = 17;
        }
        if (round2 != 0) {
            i10 = i10 * 31 * round2;
        }
        if (round3 != 0) {
            return i10 * 31 * round3;
        }
        return i10;
    }

    private LinearGradient j() {
        long i10 = i();
        LinearGradient linearGradient = (LinearGradient) this.f36881d.d(i10);
        if (linearGradient != null) {
            return linearGradient;
        }
        PointF pointF = (PointF) this.f36890m.h();
        PointF pointF2 = (PointF) this.f36891n.h();
        t5.d dVar = (t5.d) this.f36888k.h();
        LinearGradient linearGradient2 = new LinearGradient(pointF.x, pointF.y, pointF2.x, pointF2.y, g(dVar.d()), dVar.e(), Shader.TileMode.CLAMP);
        this.f36881d.g(i10, linearGradient2);
        return linearGradient2;
    }

    private RadialGradient k() {
        long i10 = i();
        RadialGradient radialGradient = (RadialGradient) this.f36882e.d(i10);
        if (radialGradient != null) {
            return radialGradient;
        }
        PointF pointF = (PointF) this.f36890m.h();
        PointF pointF2 = (PointF) this.f36891n.h();
        t5.d dVar = (t5.d) this.f36888k.h();
        int[] g10 = g(dVar.d());
        float[] e10 = dVar.e();
        float f10 = pointF.x;
        float f11 = pointF.y;
        float hypot = (float) Math.hypot(pointF2.x - f10, pointF2.y - f11);
        if (hypot <= 0.0f) {
            hypot = 0.001f;
        }
        RadialGradient radialGradient2 = new RadialGradient(f10, f11, hypot, g10, e10, Shader.TileMode.CLAMP);
        this.f36882e.g(i10, radialGradient2);
        return radialGradient2;
    }

    @Override // o5.a.b
    public void a() {
        this.f36894q.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f36886i.add((m) cVar);
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
        if (obj == b0.f35548d) {
            this.f36889l.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f36892o;
            if (aVar != null) {
                this.f36880c.H(aVar);
            }
            if (cVar == null) {
                this.f36892o = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f36892o = qVar;
            qVar.a(this);
            this.f36880c.i(this.f36892o);
        } else if (obj == b0.L) {
            o5.q qVar2 = this.f36893p;
            if (qVar2 != null) {
                this.f36880c.H(qVar2);
            }
            if (cVar == null) {
                this.f36893p = null;
                return;
            }
            this.f36881d.a();
            this.f36882e.a();
            o5.q qVar3 = new o5.q(cVar);
            this.f36893p = qVar3;
            qVar3.a(this);
            this.f36880c.i(this.f36893p);
        } else if (obj == b0.f35554j) {
            o5.a aVar2 = this.f36896s;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar4 = new o5.q(cVar);
            this.f36896s = qVar4;
            qVar4.a(this);
            this.f36880c.i(this.f36896s);
        } else if (obj == b0.f35549e && (cVar6 = this.f36898u) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f36898u) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f36898u) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f36898u) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f36898u) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f36883f.reset();
        for (int i10 = 0; i10 < this.f36886i.size(); i10++) {
            this.f36883f.addPath(((m) this.f36886i.get(i10)).t(), matrix);
        }
        this.f36883f.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.c
    public String getName() {
        return this.f36878a;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        Shader k10;
        if (!this.f36879b) {
            if (l5.e.h()) {
                l5.e.b("GradientFillContent#draw");
            }
            this.f36883f.reset();
            for (int i11 = 0; i11 < this.f36886i.size(); i11++) {
                this.f36883f.addPath(((m) this.f36886i.get(i11)).t(), matrix);
            }
            this.f36883f.computeBounds(this.f36885h, false);
            if (this.f36887j == t5.g.LINEAR) {
                k10 = j();
            } else {
                k10 = k();
            }
            k10.setLocalMatrix(matrix);
            this.f36884g.setShader(k10);
            o5.a aVar = this.f36892o;
            if (aVar != null) {
                this.f36884g.setColorFilter((ColorFilter) aVar.h());
            }
            o5.a aVar2 = this.f36896s;
            if (aVar2 != null) {
                float floatValue = ((Float) aVar2.h()).floatValue();
                if (floatValue == 0.0f) {
                    this.f36884g.setMaskFilter(null);
                } else if (floatValue != this.f36897t) {
                    this.f36884g.setMaskFilter(new BlurMaskFilter(floatValue, BlurMaskFilter.Blur.NORMAL));
                }
                this.f36897t = floatValue;
            }
            int intValue = (int) ((((i10 / 255.0f) * ((Integer) this.f36889l.h()).intValue()) / 100.0f) * 255.0f);
            this.f36884g.setAlpha(y5.i.c(intValue, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
            o5.c cVar = this.f36898u;
            if (cVar != null) {
                cVar.b(this.f36884g, matrix, y5.j.l(i10, intValue));
            }
            canvas.drawPath(this.f36883f, this.f36884g);
            if (l5.e.h()) {
                l5.e.c("GradientFillContent#draw");
            }
        }
    }
}
