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
import l5.a0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements e, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final String f39714a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39715b;

    /* renamed from: c  reason: collision with root package name */
    private final t5.b f39716c;

    /* renamed from: d  reason: collision with root package name */
    private final u0.j f39717d = new u0.j();

    /* renamed from: e  reason: collision with root package name */
    private final u0.j f39718e = new u0.j();

    /* renamed from: f  reason: collision with root package name */
    private final Path f39719f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f39720g;

    /* renamed from: h  reason: collision with root package name */
    private final RectF f39721h;

    /* renamed from: i  reason: collision with root package name */
    private final List f39722i;

    /* renamed from: j  reason: collision with root package name */
    private final s5.g f39723j;

    /* renamed from: k  reason: collision with root package name */
    private final o5.a f39724k;

    /* renamed from: l  reason: collision with root package name */
    private final o5.a f39725l;

    /* renamed from: m  reason: collision with root package name */
    private final o5.a f39726m;

    /* renamed from: n  reason: collision with root package name */
    private final o5.a f39727n;

    /* renamed from: o  reason: collision with root package name */
    private o5.a f39728o;

    /* renamed from: p  reason: collision with root package name */
    private o5.q f39729p;

    /* renamed from: q  reason: collision with root package name */
    private final com.airbnb.lottie.n f39730q;

    /* renamed from: r  reason: collision with root package name */
    private final int f39731r;

    /* renamed from: s  reason: collision with root package name */
    private o5.a f39732s;

    /* renamed from: t  reason: collision with root package name */
    float f39733t;

    /* renamed from: u  reason: collision with root package name */
    private o5.c f39734u;

    public h(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar, s5.e eVar) {
        Path path = new Path();
        this.f39719f = path;
        this.f39720g = new m5.a(1);
        this.f39721h = new RectF();
        this.f39722i = new ArrayList();
        this.f39733t = 0.0f;
        this.f39716c = bVar;
        this.f39714a = eVar.f();
        this.f39715b = eVar.i();
        this.f39730q = nVar;
        this.f39723j = eVar.e();
        path.setFillType(eVar.c());
        this.f39731r = (int) (iVar.d() / 32.0f);
        o5.a a10 = eVar.d().a();
        this.f39724k = a10;
        a10.a(this);
        bVar.i(a10);
        o5.a a11 = eVar.g().a();
        this.f39725l = a11;
        a11.a(this);
        bVar.i(a11);
        o5.a a12 = eVar.h().a();
        this.f39726m = a12;
        a12.a(this);
        bVar.i(a12);
        o5.a a13 = eVar.b().a();
        this.f39727n = a13;
        a13.a(this);
        bVar.i(a13);
        if (bVar.x() != null) {
            o5.a a14 = bVar.x().a().a();
            this.f39732s = a14;
            a14.a(this);
            bVar.i(this.f39732s);
        }
        if (bVar.z() != null) {
            this.f39734u = new o5.c(this, bVar, bVar.z());
        }
    }

    private int[] f(int[] iArr) {
        o5.q qVar = this.f39729p;
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
        int round = Math.round(this.f39726m.f() * this.f39731r);
        int round2 = Math.round(this.f39727n.f() * this.f39731r);
        int round3 = Math.round(this.f39724k.f() * this.f39731r);
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
        LinearGradient linearGradient = (LinearGradient) this.f39717d.d(i10);
        if (linearGradient != null) {
            return linearGradient;
        }
        PointF pointF = (PointF) this.f39726m.h();
        PointF pointF2 = (PointF) this.f39727n.h();
        s5.d dVar = (s5.d) this.f39724k.h();
        LinearGradient linearGradient2 = new LinearGradient(pointF.x, pointF.y, pointF2.x, pointF2.y, f(dVar.d()), dVar.e(), Shader.TileMode.CLAMP);
        this.f39717d.g(i10, linearGradient2);
        return linearGradient2;
    }

    private RadialGradient k() {
        long i10 = i();
        RadialGradient radialGradient = (RadialGradient) this.f39718e.d(i10);
        if (radialGradient != null) {
            return radialGradient;
        }
        PointF pointF = (PointF) this.f39726m.h();
        PointF pointF2 = (PointF) this.f39727n.h();
        s5.d dVar = (s5.d) this.f39724k.h();
        int[] f10 = f(dVar.d());
        float[] e10 = dVar.e();
        float f11 = pointF.x;
        float f12 = pointF.y;
        float hypot = (float) Math.hypot(pointF2.x - f11, pointF2.y - f12);
        if (hypot <= 0.0f) {
            hypot = 0.001f;
        }
        RadialGradient radialGradient2 = new RadialGradient(f11, f12, hypot, f10, e10, Shader.TileMode.CLAMP);
        this.f39718e.g(i10, radialGradient2);
        return radialGradient2;
    }

    @Override // o5.a.b
    public void a() {
        this.f39730q.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list2.size(); i10++) {
            c cVar = (c) list2.get(i10);
            if (cVar instanceof m) {
                this.f39722i.add((m) cVar);
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
        if (obj == a0.f36448d) {
            this.f39725l.o(cVar);
        } else if (obj == a0.K) {
            o5.a aVar = this.f39728o;
            if (aVar != null) {
                this.f39716c.H(aVar);
            }
            if (cVar == null) {
                this.f39728o = null;
                return;
            }
            o5.q qVar = new o5.q(cVar);
            this.f39728o = qVar;
            qVar.a(this);
            this.f39716c.i(this.f39728o);
        } else if (obj == a0.L) {
            o5.q qVar2 = this.f39729p;
            if (qVar2 != null) {
                this.f39716c.H(qVar2);
            }
            if (cVar == null) {
                this.f39729p = null;
                return;
            }
            this.f39717d.a();
            this.f39718e.a();
            o5.q qVar3 = new o5.q(cVar);
            this.f39729p = qVar3;
            qVar3.a(this);
            this.f39716c.i(this.f39729p);
        } else if (obj == a0.f36454j) {
            o5.a aVar2 = this.f39732s;
            if (aVar2 != null) {
                aVar2.o(cVar);
                return;
            }
            o5.q qVar4 = new o5.q(cVar);
            this.f39732s = qVar4;
            qVar4.a(this);
            this.f39716c.i(this.f39732s);
        } else if (obj == a0.f36449e && (cVar6 = this.f39734u) != null) {
            cVar6.c(cVar);
        } else if (obj == a0.G && (cVar5 = this.f39734u) != null) {
            cVar5.f(cVar);
        } else if (obj == a0.H && (cVar4 = this.f39734u) != null) {
            cVar4.d(cVar);
        } else if (obj == a0.I && (cVar3 = this.f39734u) != null) {
            cVar3.e(cVar);
        } else if (obj == a0.J && (cVar2 = this.f39734u) != null) {
            cVar2.g(cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f39719f.reset();
        for (int i10 = 0; i10 < this.f39722i.size(); i10++) {
            this.f39719f.addPath(((m) this.f39722i.get(i10)).q(), matrix);
        }
        this.f39719f.computeBounds(rectF, false);
        rectF.set(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        Shader k10;
        if (this.f39715b) {
            return;
        }
        l5.e.b("GradientFillContent#draw");
        this.f39719f.reset();
        for (int i11 = 0; i11 < this.f39722i.size(); i11++) {
            this.f39719f.addPath(((m) this.f39722i.get(i11)).q(), matrix);
        }
        this.f39719f.computeBounds(this.f39721h, false);
        if (this.f39723j == s5.g.LINEAR) {
            k10 = j();
        } else {
            k10 = k();
        }
        k10.setLocalMatrix(matrix);
        this.f39720g.setShader(k10);
        o5.a aVar = this.f39728o;
        if (aVar != null) {
            this.f39720g.setColorFilter((ColorFilter) aVar.h());
        }
        o5.a aVar2 = this.f39732s;
        if (aVar2 != null) {
            float floatValue = ((Float) aVar2.h()).floatValue();
            if (floatValue == 0.0f) {
                this.f39720g.setMaskFilter(null);
            } else if (floatValue != this.f39733t) {
                this.f39720g.setMaskFilter(new BlurMaskFilter(floatValue, BlurMaskFilter.Blur.NORMAL));
            }
            this.f39733t = floatValue;
        }
        o5.c cVar = this.f39734u;
        if (cVar != null) {
            cVar.b(this.f39720g);
        }
        this.f39720g.setAlpha(x5.i.c((int) ((((i10 / 255.0f) * ((Integer) this.f39725l.h()).intValue()) / 100.0f) * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY));
        canvas.drawPath(this.f39719f, this.f39720g);
        l5.e.c("GradientFillContent#draw");
    }

    @Override // n5.c
    public String getName() {
        return this.f39714a;
    }
}
