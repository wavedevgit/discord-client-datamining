package n5;

import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Shader;
import l5.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends a {
    private final o5.a A;
    private o5.q B;

    /* renamed from: r  reason: collision with root package name */
    private final String f36900r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f36901s;

    /* renamed from: t  reason: collision with root package name */
    private final u0.j f36902t;

    /* renamed from: u  reason: collision with root package name */
    private final u0.j f36903u;

    /* renamed from: v  reason: collision with root package name */
    private final RectF f36904v;

    /* renamed from: w  reason: collision with root package name */
    private final t5.g f36905w;

    /* renamed from: x  reason: collision with root package name */
    private final int f36906x;

    /* renamed from: y  reason: collision with root package name */
    private final o5.a f36907y;

    /* renamed from: z  reason: collision with root package name */
    private final o5.a f36908z;

    public i(com.airbnb.lottie.n nVar, u5.b bVar, t5.f fVar) {
        super(nVar, bVar, fVar.b().d(), fVar.g().d(), fVar.i(), fVar.k(), fVar.m(), fVar.h(), fVar.c());
        this.f36902t = new u0.j();
        this.f36903u = new u0.j();
        this.f36904v = new RectF();
        this.f36900r = fVar.j();
        this.f36905w = fVar.f();
        this.f36901s = fVar.n();
        this.f36906x = (int) (nVar.J().d() / 32.0f);
        o5.a a10 = fVar.e().a();
        this.f36907y = a10;
        a10.a(this);
        bVar.i(a10);
        o5.a a11 = fVar.l().a();
        this.f36908z = a11;
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
        int round = Math.round(this.f36908z.f() * this.f36906x);
        int round2 = Math.round(this.A.f() * this.f36906x);
        int round3 = Math.round(this.f36907y.f() * this.f36906x);
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
        LinearGradient linearGradient = (LinearGradient) this.f36902t.d(k10);
        if (linearGradient != null) {
            return linearGradient;
        }
        PointF pointF = (PointF) this.f36908z.h();
        PointF pointF2 = (PointF) this.A.h();
        t5.d dVar = (t5.d) this.f36907y.h();
        LinearGradient linearGradient2 = new LinearGradient(pointF.x, pointF.y, pointF2.x, pointF2.y, j(dVar.d()), dVar.e(), Shader.TileMode.CLAMP);
        this.f36902t.g(k10, linearGradient2);
        return linearGradient2;
    }

    private RadialGradient m() {
        float f10;
        float f11;
        long k10 = k();
        RadialGradient radialGradient = (RadialGradient) this.f36903u.d(k10);
        if (radialGradient != null) {
            return radialGradient;
        }
        PointF pointF = (PointF) this.f36908z.h();
        PointF pointF2 = (PointF) this.A.h();
        t5.d dVar = (t5.d) this.f36907y.h();
        int[] j10 = j(dVar.d());
        float[] e10 = dVar.e();
        RadialGradient radialGradient2 = new RadialGradient(pointF.x, pointF.y, (float) Math.hypot(pointF2.x - f10, pointF2.y - f11), j10, e10, Shader.TileMode.CLAMP);
        this.f36903u.g(k10, radialGradient2);
        return radialGradient2;
    }

    @Override // n5.a, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.L) {
            o5.q qVar = this.B;
            if (qVar != null) {
                this.f36832f.H(qVar);
            }
            if (cVar == null) {
                this.B = null;
                return;
            }
            o5.q qVar2 = new o5.q(cVar);
            this.B = qVar2;
            qVar2.a(this);
            this.f36832f.i(this.B);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f36900r;
    }

    @Override // n5.a, n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        Shader m10;
        if (this.f36901s) {
            return;
        }
        f(this.f36904v, matrix, false);
        if (this.f36905w == t5.g.LINEAR) {
            m10 = l();
        } else {
            m10 = m();
        }
        this.f36835i.setShader(m10);
        super.h(canvas, matrix, i10);
    }
}
