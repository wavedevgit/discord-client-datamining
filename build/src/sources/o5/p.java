package o5;

import android.graphics.Matrix;
import android.graphics.PointF;
import java.util.Collections;
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f38639a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f38640b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f38641c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f38642d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f38643e;

    /* renamed from: f  reason: collision with root package name */
    private a f38644f;

    /* renamed from: g  reason: collision with root package name */
    private a f38645g;

    /* renamed from: h  reason: collision with root package name */
    private a f38646h;

    /* renamed from: i  reason: collision with root package name */
    private a f38647i;

    /* renamed from: j  reason: collision with root package name */
    private a f38648j;

    /* renamed from: k  reason: collision with root package name */
    private d f38649k;

    /* renamed from: l  reason: collision with root package name */
    private d f38650l;

    /* renamed from: m  reason: collision with root package name */
    private a f38651m;

    /* renamed from: n  reason: collision with root package name */
    private a f38652n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f38653o;

    public p(s5.n nVar) {
        a a10;
        a a11;
        a a12;
        d a13;
        d a14;
        d a15;
        if (nVar.c() == null) {
            a10 = null;
        } else {
            a10 = nVar.c().a();
        }
        this.f38644f = a10;
        if (nVar.f() == null) {
            a11 = null;
        } else {
            a11 = nVar.f().a();
        }
        this.f38645g = a11;
        if (nVar.h() == null) {
            a12 = null;
        } else {
            a12 = nVar.h().a();
        }
        this.f38646h = a12;
        if (nVar.g() == null) {
            a13 = null;
        } else {
            a13 = nVar.g().a();
        }
        this.f38647i = a13;
        if (nVar.i() == null) {
            a14 = null;
        } else {
            a14 = nVar.i().a();
        }
        this.f38649k = a14;
        this.f38653o = nVar.l();
        if (this.f38649k != null) {
            this.f38640b = new Matrix();
            this.f38641c = new Matrix();
            this.f38642d = new Matrix();
            this.f38643e = new float[9];
        } else {
            this.f38640b = null;
            this.f38641c = null;
            this.f38642d = null;
            this.f38643e = null;
        }
        if (nVar.j() == null) {
            a15 = null;
        } else {
            a15 = nVar.j().a();
        }
        this.f38650l = a15;
        if (nVar.e() != null) {
            this.f38648j = nVar.e().a();
        }
        if (nVar.k() != null) {
            this.f38651m = nVar.k().a();
        } else {
            this.f38651m = null;
        }
        if (nVar.d() != null) {
            this.f38652n = nVar.d().a();
        } else {
            this.f38652n = null;
        }
    }

    private void d() {
        for (int i10 = 0; i10 < 9; i10++) {
            this.f38643e[i10] = 0.0f;
        }
    }

    public void a(u5.b bVar) {
        bVar.i(this.f38648j);
        bVar.i(this.f38651m);
        bVar.i(this.f38652n);
        bVar.i(this.f38644f);
        bVar.i(this.f38645g);
        bVar.i(this.f38646h);
        bVar.i(this.f38647i);
        bVar.i(this.f38649k);
        bVar.i(this.f38650l);
    }

    public void b(a.b bVar) {
        a aVar = this.f38648j;
        if (aVar != null) {
            aVar.a(bVar);
        }
        a aVar2 = this.f38651m;
        if (aVar2 != null) {
            aVar2.a(bVar);
        }
        a aVar3 = this.f38652n;
        if (aVar3 != null) {
            aVar3.a(bVar);
        }
        a aVar4 = this.f38644f;
        if (aVar4 != null) {
            aVar4.a(bVar);
        }
        a aVar5 = this.f38645g;
        if (aVar5 != null) {
            aVar5.a(bVar);
        }
        a aVar6 = this.f38646h;
        if (aVar6 != null) {
            aVar6.a(bVar);
        }
        a aVar7 = this.f38647i;
        if (aVar7 != null) {
            aVar7.a(bVar);
        }
        d dVar = this.f38649k;
        if (dVar != null) {
            dVar.a(bVar);
        }
        d dVar2 = this.f38650l;
        if (dVar2 != null) {
            dVar2.a(bVar);
        }
    }

    public boolean c(Object obj, z5.c cVar) {
        Float valueOf = Float.valueOf(100.0f);
        Float valueOf2 = Float.valueOf(0.0f);
        if (obj == b0.f35551f) {
            a aVar = this.f38644f;
            if (aVar == null) {
                this.f38644f = new q(cVar, new PointF());
                return true;
            }
            aVar.o(cVar);
            return true;
        } else if (obj == b0.f35552g) {
            a aVar2 = this.f38645g;
            if (aVar2 == null) {
                this.f38645g = new q(cVar, new PointF());
                return true;
            }
            aVar2.o(cVar);
            return true;
        } else {
            if (obj == b0.f35553h) {
                a aVar3 = this.f38645g;
                if (aVar3 instanceof n) {
                    ((n) aVar3).s(cVar);
                    return true;
                }
            }
            if (obj == b0.f35554i) {
                a aVar4 = this.f38645g;
                if (aVar4 instanceof n) {
                    ((n) aVar4).t(cVar);
                    return true;
                }
            }
            if (obj == b0.f35560o) {
                a aVar5 = this.f38646h;
                if (aVar5 == null) {
                    this.f38646h = new q(cVar, new z5.d());
                    return true;
                }
                aVar5.o(cVar);
                return true;
            } else if (obj == b0.f35561p) {
                a aVar6 = this.f38647i;
                if (aVar6 == null) {
                    this.f38647i = new q(cVar, valueOf2);
                    return true;
                }
                aVar6.o(cVar);
                return true;
            } else if (obj == b0.f35548c) {
                a aVar7 = this.f38648j;
                if (aVar7 == null) {
                    this.f38648j = new q(cVar, 100);
                    return true;
                }
                aVar7.o(cVar);
                return true;
            } else if (obj == b0.C) {
                a aVar8 = this.f38651m;
                if (aVar8 == null) {
                    this.f38651m = new q(cVar, valueOf);
                    return true;
                }
                aVar8.o(cVar);
                return true;
            } else if (obj == b0.D) {
                a aVar9 = this.f38652n;
                if (aVar9 == null) {
                    this.f38652n = new q(cVar, valueOf);
                    return true;
                }
                aVar9.o(cVar);
                return true;
            } else if (obj == b0.f35562q) {
                if (this.f38649k == null) {
                    this.f38649k = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f38649k.o(cVar);
                return true;
            } else if (obj == b0.f35563r) {
                if (this.f38650l == null) {
                    this.f38650l = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f38650l.o(cVar);
                return true;
            } else {
                return false;
            }
        }
    }

    public a e() {
        return this.f38652n;
    }

    public Matrix f() {
        float q10;
        d dVar;
        PointF pointF;
        z5.d dVar2;
        d dVar3;
        float cos;
        d dVar4;
        float sin;
        PointF pointF2;
        this.f38639a.reset();
        a aVar = this.f38645g;
        if (aVar != null && (pointF2 = (PointF) aVar.h()) != null) {
            float f10 = pointF2.x;
            if (f10 != 0.0f || pointF2.y != 0.0f) {
                this.f38639a.preTranslate(f10, pointF2.y);
            }
        }
        if (this.f38653o) {
            if (aVar != null) {
                float f11 = aVar.f();
                PointF pointF3 = (PointF) aVar.h();
                float f12 = pointF3.x;
                float f13 = pointF3.y;
                aVar.n(1.0E-4f + f11);
                PointF pointF4 = (PointF) aVar.h();
                aVar.n(f11);
                this.f38639a.preRotate((float) Math.toDegrees(Math.atan2(pointF4.y - f13, pointF4.x - f12)));
            }
        } else {
            a aVar2 = this.f38647i;
            if (aVar2 != null) {
                if (aVar2 instanceof q) {
                    q10 = ((Float) aVar2.h()).floatValue();
                } else {
                    q10 = ((d) aVar2).q();
                }
                if (q10 != 0.0f) {
                    this.f38639a.preRotate(q10);
                }
            }
        }
        if (this.f38649k != null) {
            if (this.f38650l == null) {
                cos = 0.0f;
            } else {
                cos = (float) Math.cos(Math.toRadians((-dVar3.q()) + 90.0f));
            }
            if (this.f38650l == null) {
                sin = 1.0f;
            } else {
                sin = (float) Math.sin(Math.toRadians((-dVar4.q()) + 90.0f));
            }
            float tan = (float) Math.tan(Math.toRadians(dVar.q()));
            d();
            float[] fArr = this.f38643e;
            fArr[0] = cos;
            fArr[1] = sin;
            float f14 = -sin;
            fArr[3] = f14;
            fArr[4] = cos;
            fArr[8] = 1.0f;
            this.f38640b.setValues(fArr);
            d();
            float[] fArr2 = this.f38643e;
            fArr2[0] = 1.0f;
            fArr2[3] = tan;
            fArr2[4] = 1.0f;
            fArr2[8] = 1.0f;
            this.f38641c.setValues(fArr2);
            d();
            float[] fArr3 = this.f38643e;
            fArr3[0] = cos;
            fArr3[1] = f14;
            fArr3[3] = sin;
            fArr3[4] = cos;
            fArr3[8] = 1.0f;
            this.f38642d.setValues(fArr3);
            this.f38641c.preConcat(this.f38640b);
            this.f38642d.preConcat(this.f38641c);
            this.f38639a.preConcat(this.f38642d);
        }
        a aVar3 = this.f38646h;
        if (aVar3 != null && (dVar2 = (z5.d) aVar3.h()) != null && (dVar2.b() != 1.0f || dVar2.c() != 1.0f)) {
            this.f38639a.preScale(dVar2.b(), dVar2.c());
        }
        a aVar4 = this.f38644f;
        if (aVar4 != null && (pointF = (PointF) aVar4.h()) != null) {
            float f15 = pointF.x;
            if (f15 != 0.0f || pointF.y != 0.0f) {
                this.f38639a.preTranslate(-f15, -pointF.y);
            }
        }
        return this.f38639a;
    }

    public Matrix g(float f10) {
        PointF pointF;
        z5.d dVar;
        float f11;
        a aVar = this.f38645g;
        PointF pointF2 = null;
        if (aVar == null) {
            pointF = null;
        } else {
            pointF = (PointF) aVar.h();
        }
        a aVar2 = this.f38646h;
        if (aVar2 == null) {
            dVar = null;
        } else {
            dVar = (z5.d) aVar2.h();
        }
        this.f38639a.reset();
        if (pointF != null) {
            this.f38639a.preTranslate(pointF.x * f10, pointF.y * f10);
        }
        if (dVar != null) {
            double d10 = f10;
            this.f38639a.preScale((float) Math.pow(dVar.b(), d10), (float) Math.pow(dVar.c(), d10));
        }
        a aVar3 = this.f38647i;
        if (aVar3 != null) {
            float floatValue = ((Float) aVar3.h()).floatValue();
            a aVar4 = this.f38644f;
            if (aVar4 != null) {
                pointF2 = (PointF) aVar4.h();
            }
            Matrix matrix = this.f38639a;
            float f12 = floatValue * f10;
            float f13 = 0.0f;
            if (pointF2 == null) {
                f11 = 0.0f;
            } else {
                f11 = pointF2.x;
            }
            if (pointF2 != null) {
                f13 = pointF2.y;
            }
            matrix.preRotate(f12, f11, f13);
        }
        return this.f38639a;
    }

    public a h() {
        return this.f38648j;
    }

    public a i() {
        return this.f38651m;
    }

    public void j(float f10) {
        a aVar = this.f38648j;
        if (aVar != null) {
            aVar.n(f10);
        }
        a aVar2 = this.f38651m;
        if (aVar2 != null) {
            aVar2.n(f10);
        }
        a aVar3 = this.f38652n;
        if (aVar3 != null) {
            aVar3.n(f10);
        }
        a aVar4 = this.f38644f;
        if (aVar4 != null) {
            aVar4.n(f10);
        }
        a aVar5 = this.f38645g;
        if (aVar5 != null) {
            aVar5.n(f10);
        }
        a aVar6 = this.f38646h;
        if (aVar6 != null) {
            aVar6.n(f10);
        }
        a aVar7 = this.f38647i;
        if (aVar7 != null) {
            aVar7.n(f10);
        }
        d dVar = this.f38649k;
        if (dVar != null) {
            dVar.n(f10);
        }
        d dVar2 = this.f38650l;
        if (dVar2 != null) {
            dVar2.n(f10);
        }
    }
}
