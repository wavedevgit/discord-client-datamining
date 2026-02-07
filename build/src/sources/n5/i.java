package n5;

import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Shader;
import l5.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends a {
    private final o5.a A;
    private o5.q B;

    /* renamed from: r  reason: collision with root package name */
    private final String f38598r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f38599s;

    /* renamed from: t  reason: collision with root package name */
    private final u0.j f38600t;

    /* renamed from: u  reason: collision with root package name */
    private final u0.j f38601u;

    /* renamed from: v  reason: collision with root package name */
    private final RectF f38602v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.g f38603w;

    /* renamed from: x  reason: collision with root package name */
    private final int f38604x;

    /* renamed from: y  reason: collision with root package name */
    private final o5.a f38605y;

    /* renamed from: z  reason: collision with root package name */
    private final o5.a f38606z;

    public i(com.airbnb.lottie.n nVar, t5.b bVar, s5.f fVar) {
        super(nVar, bVar, fVar.b().d(), fVar.g().d(), fVar.i(), fVar.k(), fVar.m(), fVar.h(), fVar.c());
        this.f38600t = new u0.j();
        this.f38601u = new u0.j();
        this.f38602v = new RectF();
        this.f38598r = fVar.j();
        this.f38603w = fVar.f();
        this.f38599s = fVar.n();
        this.f38604x = (int) (nVar.K().d() / 32.0f);
        o5.a a10 = fVar.e().a();
        this.f38605y = a10;
        a10.a(this);
        bVar.i(a10);
        o5.a a11 = fVar.l().a();
        this.f38606z = a11;
        a11.a(this);
        bVar.i(a11);
        o5.a a12 = fVar.d().a();
        this.A = a12;
        a12.a(this);
        bVar.i(a12);
    }

    private int[] j(int[] iArr) {
        o5.q qVar = this.B;
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

    private int k() {
        int i10;
        int round = Math.round(this.f38606z.f() * this.f38604x);
        int round2 = Math.round(this.A.f() * this.f38604x);
        int round3 = Math.round(this.f38605y.f() * this.f38604x);
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

    private LinearGradient l() {
        long k10 = k();
        LinearGradient linearGradient = (LinearGradient) this.f38600t.d(k10);
        if (linearGradient != null) {
            return linearGradient;
        }
        PointF pointF = (PointF) this.f38606z.h();
        PointF pointF2 = (PointF) this.A.h();
        s5.d dVar = (s5.d) this.f38605y.h();
        LinearGradient linearGradient2 = new LinearGradient(pointF.x, pointF.y, pointF2.x, pointF2.y, j(dVar.d()), dVar.e(), Shader.TileMode.CLAMP);
        this.f38600t.h(k10, linearGradient2);
        return linearGradient2;
    }

    private RadialGradient m() {
        float f10;
        float f11;
        long k10 = k();
        RadialGradient radialGradient = (RadialGradient) this.f38601u.d(k10);
        if (radialGradient != null) {
            return radialGradient;
        }
        PointF pointF = (PointF) this.f38606z.h();
        PointF pointF2 = (PointF) this.A.h();
        s5.d dVar = (s5.d) this.f38605y.h();
        int[] j10 = j(dVar.d());
        float[] e10 = dVar.e();
        RadialGradient radialGradient2 = new RadialGradient(pointF.x, pointF.y, (float) Math.hypot(pointF2.x - f10, pointF2.y - f11), j10, e10, Shader.TileMode.CLAMP);
        this.f38601u.h(k10, radialGradient2);
        return radialGradient2;
    }

    @Override // n5.a, q5.f
    public void d(Object obj, y5.c cVar) {
        super.d(obj, cVar);
        if (obj == a0.L) {
            o5.q qVar = this.B;
            if (qVar != null) {
                this.f38530f.H(qVar);
            }
            if (cVar == null) {
                this.B = null;
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.B = qVar2;
            qVar2.a(this);
            this.f38530f.i(this.B);
        }
    }

    @Override // n5.a, n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        Shader m10;
        if (this.f38599s) {
            return;
        }
        e(this.f38602v, matrix, false);
        if (this.f38603w == s5.g.LINEAR) {
            m10 = l();
        } else {
            m10 = m();
        }
        m10.setLocalMatrix(matrix);
        this.f38533i.setShader(m10);
        super.g(canvas, matrix, i10);
    }

    @Override // n5.c
    public String getName() {
        return this.f38598r;
    }
}
