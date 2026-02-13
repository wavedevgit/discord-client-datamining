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
    private final String f37447a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37448b;

    /* renamed from: c  reason: collision with root package name */
    private final u5.b f37449c;

    /* renamed from: d  reason: collision with root package name */
    private final u0.j f37450d = new u0.j();

    /* renamed from: e  reason: collision with root package name */
    private final u0.j f37451e = new u0.j();

    /* renamed from: f  reason: collision with root package name */
    private final Path f37452f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f37453g;

    /* renamed from: h  reason: collision with root package name */
    private final RectF f37454h;

    /* renamed from: i  reason: collision with root package name */
    private final List f37455i;

    /* renamed from: j  reason: collision with root package name */
    private final t5.g f37456j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f37457k;

    /* renamed from: l  reason: collision with root package name */
    private final o5.a f37458l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f37459m;

    /* renamed from: n  reason: collision with root package name */
    private final o5.a f37460n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f37461o;

    /* renamed from: p  reason: collision with root package name */
    private o5.q f37462p;

    /* renamed from: q  reason: collision with root package name */
    private final com.airbnb.lottie.n f37463q;

    /* renamed from: r  reason: collision with root package name */
    private final int f37464r;

    /* renamed from: s  reason: collision with root package name */
    private o5.a f37465s;

    /* renamed from: t  reason: collision with root package name */
    float f37466t;

    /* renamed from: u  reason: collision with root package name */
    private o5.c f37467u;

    public h(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar, t5.e eVar) {
        Path path = new Path();
        this.f37452f = path;
        this.f37453g = new m5.a(1);
        this.f37454h = new RectF();
        this.f37455i = new ArrayList();
        this.f37466t = 0.0f;
        this.f37449c = bVar;
        this.f37447a = eVar.f();
        this.f37448b = eVar.i();
        this.f37463q = nVar;
        this.f37456j = eVar.e();
        path.setFillType(eVar.c());
        this.f37464r = (int) (iVar.d() / 32.0f);
        o5.a a10 = eVar.d().a();
        this.f37457k = a10;
        a10.a(this);
        bVar.i(a10);
        o5.a a11 = eVar.g().a();
        this.f37458l = a11;
        a11.a(this);
        bVar.i(a11);
        o5.a a12 = eVar.h().a();
        this.f37459m = a12;
        a12.a(this);
        bVar.i(a12);
        o5.a a13 = eVar.b().a();
        this.f37460n = a13;
        a13.a(this);
        bVar.i(a13);
        if (bVar.x() != null) {
            o5.d a14 = bVar.x().a().a();
            this.f37465s = a14;
            a14.a(this);
            bVar.i(this.f37465s);
        }
        if (bVar.z() != null) {
            this.f37467u = new o5.c(this, bVar, bVar.z());
        }
    }

    private int[] g(int[] iArr) {
        o5.q qVar = this.f37462p;
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
        int round = Math.round(this.f37459m.f() * this.f37464r);
        int round2 = Math.round(this.f37460n.f() * this.f37464r);
        int round3 = Math.round(this.f37457k.f() * this.f37464r);
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
        LinearGradient linearGradient = (LinearGradient) this.f37450d.d(i10);
        if (linearGradient != null) {
            return linearGradient;
        }
        PointF pointF = (PointF) this.f37459m.h();
        PointF pointF2 = (PointF) this.f37460n.h();
        t5.d dVar = (t5.d) this.f37457k.h();
        LinearGradient linearGradient2 = new LinearGradient(pointF.x, pointF.y, pointF2.x, pointF2.y, g(dVar.d()), dVar.e(), Shader.TileMode.CLAMP);
        this.f37450d.g(i10, linearGradient2);
        return linearGradient2;
    }

    private RadialGradient k() {
        long i10 = i();
        RadialGradient radialGradient = (RadialGradient) this.f37451e.d(i10);
        if (radialGradient != null) {
            return radialGradient;
        }
        PointF pointF = (PointF) this.f37459m.h();
        PointF pointF2 = (PointF) this.f37460n.h();
        t5.d dVar = (t5.d) this.f37457k.h();
        int[] g10 = g(dVar.d());
        float[] e10 = dVar.e();
        float f10 = pointF.x;
        float f11 = pointF.y;
        float hypot = (float) Math.hypot(pointF2.x - f10, pointF2.y - f11);
        if (hypot <= 0.0f) {
            hypot = 0.001f;
        }
        RadialGradient radialGradient2 = new RadialGradient(f10, f11, hypot, g10, e10, Shader.TileMode.CLAMP);
        this.f37451e.g(i10, radialGradient2);
        return radialGradient2;
    }

    @Override // o5.a.b
    public void a() {
        this.f37463q.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f37455i.add((m) cVar);
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
        if (obj == b0.f36117d) {
            this.f37458l.o(cVar);
        } else if (obj == b0.K) {
            o5.a aVar = this.f37461o;
            if (aVar != null) {
                this.f37449c.H(aVar);
            }
            if (cVar == null) {
                this.f37461o = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f37461o = qVar;
            qVar.a(this);
            this.f37449c.i(this.f37461o);
        } else if (obj == b0.L) {
            o5.q qVar2 = this.f37462p;
            if (qVar2 != null) {
                this.f37449c.H(qVar2);
            }
            if (cVar == null) {
                this.f37462p = null;
                return;
            }
            this.f37450d.a();
            this.f37451e.a();
            o5.q qVar3 = new o5.q(cVar);
            this.f37462p = qVar3;
            qVar3.a(this);
            this.f37449c.i(this.f37462p);
        } else if (obj == b0.f36123j) {
            o5.a aVar2 = this.f37465s;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar4 = new o5.q(cVar);
            this.f37465s = qVar4;
            qVar4.a(this);
            this.f37449c.i(this.f37465s);
        } else if (obj == b0.f36118e && (cVar6 = this.f37467u) != null) {
            cVar6.c(cVar);
        } else if (obj == b0.G && (cVar5 = this.f37467u) != null) {
            cVar5.f(cVar);
        } else if (obj == b0.H && (cVar4 = this.f37467u) != null) {
            cVar4.d(cVar);
        } else if (obj == b0.I && (cVar3 = this.f37467u) != null) {
            cVar3.e(cVar);
        } else if (obj == b0.J && (cVar2 = this.f37467u) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f37452f.reset();
        for (int i10 = 0; i10 < this.f37455i.size(); i10++) {
            this.f37452f.addPath(((m) this.f37455i.get(i10)).t(), matrix);
        }
        this.f37452f.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.c
    public String getName() {
        return this.f37447a;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        Shader k10;
        if (!this.f37448b) {
            if (l5.e.h()) {
                l5.e.b("GradientFillContent#draw");
            }
            this.f37452f.reset();
            for (int i11 = 0; i11 < this.f37455i.size(); i11++) {
                this.f37452f.addPath(((m) this.f37455i.get(i11)).t(), matrix);
            }
            this.f37452f.computeBounds(this.f37454h, false);
            if (this.f37456j == t5.g.LINEAR) {
                k10 = j();
            } else {
                k10 = k();
            }
            k10.setLocalMatrix(matrix);
            this.f37453g.setShader(k10);
            o5.a aVar = this.f37461o;
            if (aVar != null) {
                this.f37453g.setColorFilter((ColorFilter) aVar.h());
            }
            o5.a aVar2 = this.f37465s;
            if (aVar2 != null) {
                float floatValue = ((Float) aVar2.h()).floatValue();
                if (floatValue == 0.0f) {
                    this.f37453g.setMaskFilter(null);
                } else if (floatValue != this.f37466t) {
                    this.f37453g.setMaskFilter(new BlurMaskFilter(floatValue, BlurMaskFilter.Blur.NORMAL));
                }
                this.f37466t = floatValue;
            }
            int intValue = (int) ((((i10 / 255.0f) * ((Integer) this.f37458l.h()).intValue()) / 100.0f) * 255.0f);
            this.f37453g.setAlpha(y5.i.c(intValue, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
            o5.c cVar = this.f37467u;
            if (cVar != null) {
                cVar.b(this.f37453g, matrix, y5.j.l(i10, intValue));
            }
            canvas.drawPath(this.f37452f, this.f37453g);
            if (l5.e.h()) {
                l5.e.c("GradientFillContent#draw");
            }
        }
    }
}
