package o5;

import android.graphics.Matrix;
import android.graphics.PointF;
import java.util.Collections;
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f38638a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f38639b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f38640c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f38641d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f38642e;

    /* renamed from: f  reason: collision with root package name */
    private a f38643f;

    /* renamed from: g  reason: collision with root package name */
    private a f38644g;

    /* renamed from: h  reason: collision with root package name */
    private a f38645h;

    /* renamed from: i  reason: collision with root package name */
    private a f38646i;

    /* renamed from: j  reason: collision with root package name */
    private a f38647j;

    /* renamed from: k  reason: collision with root package name */
    private d f38648k;

    /* renamed from: l  reason: collision with root package name */
    private d f38649l;

    /* renamed from: m  reason: collision with root package name */
    private a f38650m;

    /* renamed from: n  reason: collision with root package name */
    private a f38651n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f38652o;

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
        this.f38643f = a10;
        if (nVar.f() == null) {
            a11 = null;
        } else {
            a11 = nVar.f().a();
        }
        this.f38644g = a11;
        if (nVar.h() == null) {
            a12 = null;
        } else {
            a12 = nVar.h().a();
        }
        this.f38645h = a12;
        if (nVar.g() == null) {
            a13 = null;
        } else {
            a13 = nVar.g().a();
        }
        this.f38646i = a13;
        if (nVar.i() == null) {
            a14 = null;
        } else {
            a14 = nVar.i().a();
        }
        this.f38648k = a14;
        this.f38652o = nVar.l();
        if (this.f38648k != null) {
            this.f38639b = new Matrix();
            this.f38640c = new Matrix();
            this.f38641d = new Matrix();
            this.f38642e = new float[9];
        } else {
            this.f38639b = null;
            this.f38640c = null;
            this.f38641d = null;
            this.f38642e = null;
        }
        if (nVar.j() == null) {
            a15 = null;
        } else {
            a15 = nVar.j().a();
        }
        this.f38649l = a15;
        if (nVar.e() != null) {
            this.f38647j = nVar.e().a();
        }
        if (nVar.k() != null) {
            this.f38650m = nVar.k().a();
        } else {
            this.f38650m = null;
        }
        if (nVar.d() != null) {
            this.f38651n = nVar.d().a();
        } else {
            this.f38651n = null;
        }
    }

    private void d() {
        for (int i10 = 0; i10 < 9; i10++) {
            this.f38642e[i10] = 0.0f;
        }
    }

    public void a(u5.b bVar) {
        bVar.i(this.f38647j);
        bVar.i(this.f38650m);
        bVar.i(this.f38651n);
        bVar.i(this.f38643f);
        bVar.i(this.f38644g);
        bVar.i(this.f38645h);
        bVar.i(this.f38646i);
        bVar.i(this.f38648k);
        bVar.i(this.f38649l);
    }

    public void b(a.b bVar) {
        a aVar = this.f38647j;
        if (aVar != null) {
            aVar.a(bVar);
        }
        a aVar2 = this.f38650m;
        if (aVar2 != null) {
            aVar2.a(bVar);
        }
        a aVar3 = this.f38651n;
        if (aVar3 != null) {
            aVar3.a(bVar);
        }
        a aVar4 = this.f38643f;
        if (aVar4 != null) {
            aVar4.a(bVar);
        }
        a aVar5 = this.f38644g;
        if (aVar5 != null) {
            aVar5.a(bVar);
        }
        a aVar6 = this.f38645h;
        if (aVar6 != null) {
            aVar6.a(bVar);
        }
        a aVar7 = this.f38646i;
        if (aVar7 != null) {
            aVar7.a(bVar);
        }
        d dVar = this.f38648k;
        if (dVar != null) {
            dVar.a(bVar);
        }
        d dVar2 = this.f38649l;
        if (dVar2 != null) {
            dVar2.a(bVar);
        }
    }

    public boolean c(Object obj, z5.c cVar) {
        Float valueOf = Float.valueOf(100.0f);
        Float valueOf2 = Float.valueOf(0.0f);
        if (obj == b0.f35550f) {
            a aVar = this.f38643f;
            if (aVar == null) {
                this.f38643f = new q(cVar, new PointF());
                return true;
            }
            aVar.o(cVar);
            return true;
        } else if (obj == b0.f35551g) {
            a aVar2 = this.f38644g;
            if (aVar2 == null) {
                this.f38644g = new q(cVar, new PointF());
                return true;
            }
            aVar2.o(cVar);
            return true;
        } else {
            if (obj == b0.f35552h) {
                a aVar3 = this.f38644g;
                if (aVar3 instanceof n) {
                    ((n) aVar3).s(cVar);
                    return true;
                }
            }
            if (obj == b0.f35553i) {
                a aVar4 = this.f38644g;
                if (aVar4 instanceof n) {
                    ((n) aVar4).t(cVar);
                    return true;
                }
            }
            if (obj == b0.f35559o) {
                a aVar5 = this.f38645h;
                if (aVar5 == null) {
                    this.f38645h = new q(cVar, new z5.d());
                    return true;
                }
                aVar5.o(cVar);
                return true;
            } else if (obj == b0.f35560p) {
                a aVar6 = this.f38646i;
                if (aVar6 == null) {
                    this.f38646i = new q(cVar, valueOf2);
                    return true;
                }
                aVar6.o(cVar);
                return true;
            } else if (obj == b0.f35547c) {
                a aVar7 = this.f38647j;
                if (aVar7 == null) {
                    this.f38647j = new q(cVar, 100);
                    return true;
                }
                aVar7.o(cVar);
                return true;
            } else if (obj == b0.C) {
                a aVar8 = this.f38650m;
                if (aVar8 == null) {
                    this.f38650m = new q(cVar, valueOf);
                    return true;
                }
                aVar8.o(cVar);
                return true;
            } else if (obj == b0.D) {
                a aVar9 = this.f38651n;
                if (aVar9 == null) {
                    this.f38651n = new q(cVar, valueOf);
                    return true;
                }
                aVar9.o(cVar);
                return true;
            } else if (obj == b0.f35561q) {
                if (this.f38648k == null) {
                    this.f38648k = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f38648k.o(cVar);
                return true;
            } else if (obj == b0.f35562r) {
                if (this.f38649l == null) {
                    this.f38649l = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f38649l.o(cVar);
                return true;
            } else {
                return false;
            }
        }
    }

    public a e() {
        return this.f38651n;
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
        this.f38638a.reset();
        a aVar = this.f38644g;
        if (aVar != null && (pointF2 = (PointF) aVar.h()) != null) {
            float f10 = pointF2.x;
            if (f10 != 0.0f || pointF2.y != 0.0f) {
                this.f38638a.preTranslate(f10, pointF2.y);
            }
        }
        if (this.f38652o) {
            if (aVar != null) {
                float f11 = aVar.f();
                PointF pointF3 = (PointF) aVar.h();
                float f12 = pointF3.x;
                float f13 = pointF3.y;
                aVar.n(1.0E-4f + f11);
                PointF pointF4 = (PointF) aVar.h();
                aVar.n(f11);
                this.f38638a.preRotate((float) Math.toDegrees(Math.atan2(pointF4.y - f13, pointF4.x - f12)));
            }
        } else {
            a aVar2 = this.f38646i;
            if (aVar2 != null) {
                if (aVar2 instanceof q) {
                    q10 = ((Float) aVar2.h()).floatValue();
                } else {
                    q10 = ((d) aVar2).q();
                }
                if (q10 != 0.0f) {
                    this.f38638a.preRotate(q10);
                }
            }
        }
        if (this.f38648k != null) {
            if (this.f38649l == null) {
                cos = 0.0f;
            } else {
                cos = (float) Math.cos(Math.toRadians((-dVar3.q()) + 90.0f));
            }
            if (this.f38649l == null) {
                sin = 1.0f;
            } else {
                sin = (float) Math.sin(Math.toRadians((-dVar4.q()) + 90.0f));
            }
            float tan = (float) Math.tan(Math.toRadians(dVar.q()));
            d();
            float[] fArr = this.f38642e;
            fArr[0] = cos;
            fArr[1] = sin;
            float f14 = -sin;
            fArr[3] = f14;
            fArr[4] = cos;
            fArr[8] = 1.0f;
            this.f38639b.setValues(fArr);
            d();
            float[] fArr2 = this.f38642e;
            fArr2[0] = 1.0f;
            fArr2[3] = tan;
            fArr2[4] = 1.0f;
            fArr2[8] = 1.0f;
            this.f38640c.setValues(fArr2);
            d();
            float[] fArr3 = this.f38642e;
            fArr3[0] = cos;
            fArr3[1] = f14;
            fArr3[3] = sin;
            fArr3[4] = cos;
            fArr3[8] = 1.0f;
            this.f38641d.setValues(fArr3);
            this.f38640c.preConcat(this.f38639b);
            this.f38641d.preConcat(this.f38640c);
            this.f38638a.preConcat(this.f38641d);
        }
        a aVar3 = this.f38645h;
        if (aVar3 != null && (dVar2 = (z5.d) aVar3.h()) != null && (dVar2.b() != 1.0f || dVar2.c() != 1.0f)) {
            this.f38638a.preScale(dVar2.b(), dVar2.c());
        }
        a aVar4 = this.f38643f;
        if (aVar4 != null && (pointF = (PointF) aVar4.h()) != null) {
            float f15 = pointF.x;
            if (f15 != 0.0f || pointF.y != 0.0f) {
                this.f38638a.preTranslate(-f15, -pointF.y);
            }
        }
        return this.f38638a;
    }

    public Matrix g(float f10) {
        PointF pointF;
        z5.d dVar;
        float f11;
        a aVar = this.f38644g;
        PointF pointF2 = null;
        if (aVar == null) {
            pointF = null;
        } else {
            pointF = (PointF) aVar.h();
        }
        a aVar2 = this.f38645h;
        if (aVar2 == null) {
            dVar = null;
        } else {
            dVar = (z5.d) aVar2.h();
        }
        this.f38638a.reset();
        if (pointF != null) {
            this.f38638a.preTranslate(pointF.x * f10, pointF.y * f10);
        }
        if (dVar != null) {
            double d10 = f10;
            this.f38638a.preScale((float) Math.pow(dVar.b(), d10), (float) Math.pow(dVar.c(), d10));
        }
        a aVar3 = this.f38646i;
        if (aVar3 != null) {
            float floatValue = ((Float) aVar3.h()).floatValue();
            a aVar4 = this.f38643f;
            if (aVar4 != null) {
                pointF2 = (PointF) aVar4.h();
            }
            Matrix matrix = this.f38638a;
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
        return this.f38638a;
    }

    public a h() {
        return this.f38647j;
    }

    public a i() {
        return this.f38650m;
    }

    public void j(float f10) {
        a aVar = this.f38647j;
        if (aVar != null) {
            aVar.n(f10);
        }
        a aVar2 = this.f38650m;
        if (aVar2 != null) {
            aVar2.n(f10);
        }
        a aVar3 = this.f38651n;
        if (aVar3 != null) {
            aVar3.n(f10);
        }
        a aVar4 = this.f38643f;
        if (aVar4 != null) {
            aVar4.n(f10);
        }
        a aVar5 = this.f38644g;
        if (aVar5 != null) {
            aVar5.n(f10);
        }
        a aVar6 = this.f38645h;
        if (aVar6 != null) {
            aVar6.n(f10);
        }
        a aVar7 = this.f38646i;
        if (aVar7 != null) {
            aVar7.n(f10);
        }
        d dVar = this.f38648k;
        if (dVar != null) {
            dVar.n(f10);
        }
        d dVar2 = this.f38649l;
        if (dVar2 != null) {
            dVar2.n(f10);
        }
    }
}
