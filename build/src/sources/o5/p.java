package o5;

import android.graphics.Matrix;
import android.graphics.PointF;
import java.util.Collections;
import l5.a0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f42306a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f42307b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f42308c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f42309d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f42310e;

    /* renamed from: f  reason: collision with root package name */
    private a f42311f;

    /* renamed from: g  reason: collision with root package name */
    private a f42312g;

    /* renamed from: h  reason: collision with root package name */
    private a f42313h;

    /* renamed from: i  reason: collision with root package name */
    private a f42314i;

    /* renamed from: j  reason: collision with root package name */
    private a f42315j;

    /* renamed from: k  reason: collision with root package name */
    private d f42316k;

    /* renamed from: l  reason: collision with root package name */
    private d f42317l;

    /* renamed from: m  reason: collision with root package name */
    private a f42318m;

    /* renamed from: n  reason: collision with root package name */
    private a f42319n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f42320o;

    public p(r5.l lVar) {
        a a10;
        a a11;
        a a12;
        a a13;
        d dVar;
        d dVar2;
        if (lVar.c() == null) {
            a10 = null;
        } else {
            a10 = lVar.c().a();
        }
        this.f42311f = a10;
        if (lVar.f() == null) {
            a11 = null;
        } else {
            a11 = lVar.f().a();
        }
        this.f42312g = a11;
        if (lVar.h() == null) {
            a12 = null;
        } else {
            a12 = lVar.h().a();
        }
        this.f42313h = a12;
        if (lVar.g() == null) {
            a13 = null;
        } else {
            a13 = lVar.g().a();
        }
        this.f42314i = a13;
        if (lVar.i() == null) {
            dVar = null;
        } else {
            dVar = (d) lVar.i().a();
        }
        this.f42316k = dVar;
        this.f42320o = lVar.l();
        if (this.f42316k != null) {
            this.f42307b = new Matrix();
            this.f42308c = new Matrix();
            this.f42309d = new Matrix();
            this.f42310e = new float[9];
        } else {
            this.f42307b = null;
            this.f42308c = null;
            this.f42309d = null;
            this.f42310e = null;
        }
        if (lVar.j() == null) {
            dVar2 = null;
        } else {
            dVar2 = (d) lVar.j().a();
        }
        this.f42317l = dVar2;
        if (lVar.e() != null) {
            this.f42315j = lVar.e().a();
        }
        if (lVar.k() != null) {
            this.f42318m = lVar.k().a();
        } else {
            this.f42318m = null;
        }
        if (lVar.d() != null) {
            this.f42319n = lVar.d().a();
        } else {
            this.f42319n = null;
        }
    }

    private void d() {
        for (int i10 = 0; i10 < 9; i10++) {
            this.f42310e[i10] = 0.0f;
        }
    }

    public void a(t5.b bVar) {
        bVar.i(this.f42315j);
        bVar.i(this.f42318m);
        bVar.i(this.f42319n);
        bVar.i(this.f42311f);
        bVar.i(this.f42312g);
        bVar.i(this.f42313h);
        bVar.i(this.f42314i);
        bVar.i(this.f42316k);
        bVar.i(this.f42317l);
    }

    public void b(a.b bVar) {
        a aVar = this.f42315j;
        if (aVar != null) {
            aVar.a(bVar);
        }
        a aVar2 = this.f42318m;
        if (aVar2 != null) {
            aVar2.a(bVar);
        }
        a aVar3 = this.f42319n;
        if (aVar3 != null) {
            aVar3.a(bVar);
        }
        a aVar4 = this.f42311f;
        if (aVar4 != null) {
            aVar4.a(bVar);
        }
        a aVar5 = this.f42312g;
        if (aVar5 != null) {
            aVar5.a(bVar);
        }
        a aVar6 = this.f42313h;
        if (aVar6 != null) {
            aVar6.a(bVar);
        }
        a aVar7 = this.f42314i;
        if (aVar7 != null) {
            aVar7.a(bVar);
        }
        d dVar = this.f42316k;
        if (dVar != null) {
            dVar.a(bVar);
        }
        d dVar2 = this.f42317l;
        if (dVar2 != null) {
            dVar2.a(bVar);
        }
    }

    public boolean c(Object obj, y5.c cVar) {
        Float valueOf = Float.valueOf(100.0f);
        Float valueOf2 = Float.valueOf(0.0f);
        if (obj == a0.f36377f) {
            a aVar = this.f42311f;
            if (aVar == null) {
                this.f42311f = new q(cVar, new PointF());
                return true;
            }
            aVar.o(cVar);
            return true;
        } else if (obj == a0.f36378g) {
            a aVar2 = this.f42312g;
            if (aVar2 == null) {
                this.f42312g = new q(cVar, new PointF());
                return true;
            }
            aVar2.o(cVar);
            return true;
        } else {
            if (obj == a0.f36379h) {
                a aVar3 = this.f42312g;
                if (aVar3 instanceof n) {
                    ((n) aVar3).s(cVar);
                    return true;
                }
            }
            if (obj == a0.f36380i) {
                a aVar4 = this.f42312g;
                if (aVar4 instanceof n) {
                    ((n) aVar4).t(cVar);
                    return true;
                }
            }
            if (obj == a0.f36386o) {
                a aVar5 = this.f42313h;
                if (aVar5 == null) {
                    this.f42313h = new q(cVar, new y5.d());
                    return true;
                }
                aVar5.o(cVar);
                return true;
            } else if (obj == a0.f36387p) {
                a aVar6 = this.f42314i;
                if (aVar6 == null) {
                    this.f42314i = new q(cVar, valueOf2);
                    return true;
                }
                aVar6.o(cVar);
                return true;
            } else if (obj == a0.f36374c) {
                a aVar7 = this.f42315j;
                if (aVar7 == null) {
                    this.f42315j = new q(cVar, 100);
                    return true;
                }
                aVar7.o(cVar);
                return true;
            } else if (obj == a0.C) {
                a aVar8 = this.f42318m;
                if (aVar8 == null) {
                    this.f42318m = new q(cVar, valueOf);
                    return true;
                }
                aVar8.o(cVar);
                return true;
            } else if (obj == a0.D) {
                a aVar9 = this.f42319n;
                if (aVar9 == null) {
                    this.f42319n = new q(cVar, valueOf);
                    return true;
                }
                aVar9.o(cVar);
                return true;
            } else if (obj == a0.f36388q) {
                if (this.f42316k == null) {
                    this.f42316k = new d(Collections.singletonList(new y5.a(valueOf2)));
                }
                this.f42316k.o(cVar);
                return true;
            } else if (obj == a0.f36389r) {
                if (this.f42317l == null) {
                    this.f42317l = new d(Collections.singletonList(new y5.a(valueOf2)));
                }
                this.f42317l.o(cVar);
                return true;
            } else {
                return false;
            }
        }
    }

    public a e() {
        return this.f42319n;
    }

    public Matrix f() {
        float q10;
        d dVar;
        PointF pointF;
        y5.d dVar2;
        d dVar3;
        float cos;
        d dVar4;
        float sin;
        PointF pointF2;
        this.f42306a.reset();
        a aVar = this.f42312g;
        if (aVar != null && (pointF2 = (PointF) aVar.h()) != null) {
            float f10 = pointF2.x;
            if (f10 != 0.0f || pointF2.y != 0.0f) {
                this.f42306a.preTranslate(f10, pointF2.y);
            }
        }
        if (this.f42320o) {
            if (aVar != null) {
                float f11 = aVar.f();
                PointF pointF3 = (PointF) aVar.h();
                float f12 = pointF3.x;
                float f13 = pointF3.y;
                aVar.n(1.0E-4f + f11);
                PointF pointF4 = (PointF) aVar.h();
                aVar.n(f11);
                this.f42306a.preRotate((float) Math.toDegrees(Math.atan2(pointF4.y - f13, pointF4.x - f12)));
            }
        } else {
            a aVar2 = this.f42314i;
            if (aVar2 != null) {
                if (aVar2 instanceof q) {
                    q10 = ((Float) aVar2.h()).floatValue();
                } else {
                    q10 = ((d) aVar2).q();
                }
                if (q10 != 0.0f) {
                    this.f42306a.preRotate(q10);
                }
            }
        }
        if (this.f42316k != null) {
            if (this.f42317l == null) {
                cos = 0.0f;
            } else {
                cos = (float) Math.cos(Math.toRadians((-dVar3.q()) + 90.0f));
            }
            if (this.f42317l == null) {
                sin = 1.0f;
            } else {
                sin = (float) Math.sin(Math.toRadians((-dVar4.q()) + 90.0f));
            }
            float tan = (float) Math.tan(Math.toRadians(dVar.q()));
            d();
            float[] fArr = this.f42310e;
            fArr[0] = cos;
            fArr[1] = sin;
            float f14 = -sin;
            fArr[3] = f14;
            fArr[4] = cos;
            fArr[8] = 1.0f;
            this.f42307b.setValues(fArr);
            d();
            float[] fArr2 = this.f42310e;
            fArr2[0] = 1.0f;
            fArr2[3] = tan;
            fArr2[4] = 1.0f;
            fArr2[8] = 1.0f;
            this.f42308c.setValues(fArr2);
            d();
            float[] fArr3 = this.f42310e;
            fArr3[0] = cos;
            fArr3[1] = f14;
            fArr3[3] = sin;
            fArr3[4] = cos;
            fArr3[8] = 1.0f;
            this.f42309d.setValues(fArr3);
            this.f42308c.preConcat(this.f42307b);
            this.f42309d.preConcat(this.f42308c);
            this.f42306a.preConcat(this.f42309d);
        }
        a aVar3 = this.f42313h;
        if (aVar3 != null && (dVar2 = (y5.d) aVar3.h()) != null && (dVar2.b() != 1.0f || dVar2.c() != 1.0f)) {
            this.f42306a.preScale(dVar2.b(), dVar2.c());
        }
        a aVar4 = this.f42311f;
        if (aVar4 != null && (pointF = (PointF) aVar4.h()) != null) {
            float f15 = pointF.x;
            if (f15 != 0.0f || pointF.y != 0.0f) {
                this.f42306a.preTranslate(-f15, -pointF.y);
            }
        }
        return this.f42306a;
    }

    public Matrix g(float f10) {
        PointF pointF;
        y5.d dVar;
        float f11;
        a aVar = this.f42312g;
        PointF pointF2 = null;
        if (aVar == null) {
            pointF = null;
        } else {
            pointF = (PointF) aVar.h();
        }
        a aVar2 = this.f42313h;
        if (aVar2 == null) {
            dVar = null;
        } else {
            dVar = (y5.d) aVar2.h();
        }
        this.f42306a.reset();
        if (pointF != null) {
            this.f42306a.preTranslate(pointF.x * f10, pointF.y * f10);
        }
        if (dVar != null) {
            double d10 = f10;
            this.f42306a.preScale((float) Math.pow(dVar.b(), d10), (float) Math.pow(dVar.c(), d10));
        }
        a aVar3 = this.f42314i;
        if (aVar3 != null) {
            float floatValue = ((Float) aVar3.h()).floatValue();
            a aVar4 = this.f42311f;
            if (aVar4 != null) {
                pointF2 = (PointF) aVar4.h();
            }
            Matrix matrix = this.f42306a;
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
        return this.f42306a;
    }

    public a h() {
        return this.f42315j;
    }

    public a i() {
        return this.f42318m;
    }

    public void j(float f10) {
        a aVar = this.f42315j;
        if (aVar != null) {
            aVar.n(f10);
        }
        a aVar2 = this.f42318m;
        if (aVar2 != null) {
            aVar2.n(f10);
        }
        a aVar3 = this.f42319n;
        if (aVar3 != null) {
            aVar3.n(f10);
        }
        a aVar4 = this.f42311f;
        if (aVar4 != null) {
            aVar4.n(f10);
        }
        a aVar5 = this.f42312g;
        if (aVar5 != null) {
            aVar5.n(f10);
        }
        a aVar6 = this.f42313h;
        if (aVar6 != null) {
            aVar6.n(f10);
        }
        a aVar7 = this.f42314i;
        if (aVar7 != null) {
            aVar7.n(f10);
        }
        d dVar = this.f42316k;
        if (dVar != null) {
            dVar.n(f10);
        }
        d dVar2 = this.f42317l;
        if (dVar2 != null) {
            dVar2.n(f10);
        }
    }
}
