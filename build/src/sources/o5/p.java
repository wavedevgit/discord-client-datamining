package o5;

import android.graphics.Matrix;
import android.graphics.PointF;
import java.util.Collections;
import l5.a0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f42456a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f42457b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f42458c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f42459d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f42460e;

    /* renamed from: f  reason: collision with root package name */
    private a f42461f;

    /* renamed from: g  reason: collision with root package name */
    private a f42462g;

    /* renamed from: h  reason: collision with root package name */
    private a f42463h;

    /* renamed from: i  reason: collision with root package name */
    private a f42464i;

    /* renamed from: j  reason: collision with root package name */
    private a f42465j;

    /* renamed from: k  reason: collision with root package name */
    private d f42466k;

    /* renamed from: l  reason: collision with root package name */
    private d f42467l;

    /* renamed from: m  reason: collision with root package name */
    private a f42468m;

    /* renamed from: n  reason: collision with root package name */
    private a f42469n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f42470o;

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
        this.f42461f = a10;
        if (lVar.f() == null) {
            a11 = null;
        } else {
            a11 = lVar.f().a();
        }
        this.f42462g = a11;
        if (lVar.h() == null) {
            a12 = null;
        } else {
            a12 = lVar.h().a();
        }
        this.f42463h = a12;
        if (lVar.g() == null) {
            a13 = null;
        } else {
            a13 = lVar.g().a();
        }
        this.f42464i = a13;
        if (lVar.i() == null) {
            dVar = null;
        } else {
            dVar = (d) lVar.i().a();
        }
        this.f42466k = dVar;
        this.f42470o = lVar.l();
        if (this.f42466k != null) {
            this.f42457b = new Matrix();
            this.f42458c = new Matrix();
            this.f42459d = new Matrix();
            this.f42460e = new float[9];
        } else {
            this.f42457b = null;
            this.f42458c = null;
            this.f42459d = null;
            this.f42460e = null;
        }
        if (lVar.j() == null) {
            dVar2 = null;
        } else {
            dVar2 = (d) lVar.j().a();
        }
        this.f42467l = dVar2;
        if (lVar.e() != null) {
            this.f42465j = lVar.e().a();
        }
        if (lVar.k() != null) {
            this.f42468m = lVar.k().a();
        } else {
            this.f42468m = null;
        }
        if (lVar.d() != null) {
            this.f42469n = lVar.d().a();
        } else {
            this.f42469n = null;
        }
    }

    private void d() {
        for (int i10 = 0; i10 < 9; i10++) {
            this.f42460e[i10] = 0.0f;
        }
    }

    public void a(t5.b bVar) {
        bVar.i(this.f42465j);
        bVar.i(this.f42468m);
        bVar.i(this.f42469n);
        bVar.i(this.f42461f);
        bVar.i(this.f42462g);
        bVar.i(this.f42463h);
        bVar.i(this.f42464i);
        bVar.i(this.f42466k);
        bVar.i(this.f42467l);
    }

    public void b(a.b bVar) {
        a aVar = this.f42465j;
        if (aVar != null) {
            aVar.a(bVar);
        }
        a aVar2 = this.f42468m;
        if (aVar2 != null) {
            aVar2.a(bVar);
        }
        a aVar3 = this.f42469n;
        if (aVar3 != null) {
            aVar3.a(bVar);
        }
        a aVar4 = this.f42461f;
        if (aVar4 != null) {
            aVar4.a(bVar);
        }
        a aVar5 = this.f42462g;
        if (aVar5 != null) {
            aVar5.a(bVar);
        }
        a aVar6 = this.f42463h;
        if (aVar6 != null) {
            aVar6.a(bVar);
        }
        a aVar7 = this.f42464i;
        if (aVar7 != null) {
            aVar7.a(bVar);
        }
        d dVar = this.f42466k;
        if (dVar != null) {
            dVar.a(bVar);
        }
        d dVar2 = this.f42467l;
        if (dVar2 != null) {
            dVar2.a(bVar);
        }
    }

    public boolean c(Object obj, y5.c cVar) {
        Float valueOf = Float.valueOf(100.0f);
        Float valueOf2 = Float.valueOf(0.0f);
        if (obj == a0.f36851f) {
            a aVar = this.f42461f;
            if (aVar == null) {
                this.f42461f = new q(cVar, new PointF());
                return true;
            }
            aVar.o(cVar);
            return true;
        } else if (obj == a0.f36852g) {
            a aVar2 = this.f42462g;
            if (aVar2 == null) {
                this.f42462g = new q(cVar, new PointF());
                return true;
            }
            aVar2.o(cVar);
            return true;
        } else {
            if (obj == a0.f36853h) {
                a aVar3 = this.f42462g;
                if (aVar3 instanceof n) {
                    ((n) aVar3).s(cVar);
                    return true;
                }
            }
            if (obj == a0.f36854i) {
                a aVar4 = this.f42462g;
                if (aVar4 instanceof n) {
                    ((n) aVar4).t(cVar);
                    return true;
                }
            }
            if (obj == a0.f36860o) {
                a aVar5 = this.f42463h;
                if (aVar5 == null) {
                    this.f42463h = new q(cVar, new y5.d());
                    return true;
                }
                aVar5.o(cVar);
                return true;
            } else if (obj == a0.f36861p) {
                a aVar6 = this.f42464i;
                if (aVar6 == null) {
                    this.f42464i = new q(cVar, valueOf2);
                    return true;
                }
                aVar6.o(cVar);
                return true;
            } else if (obj == a0.f36848c) {
                a aVar7 = this.f42465j;
                if (aVar7 == null) {
                    this.f42465j = new q(cVar, 100);
                    return true;
                }
                aVar7.o(cVar);
                return true;
            } else if (obj == a0.C) {
                a aVar8 = this.f42468m;
                if (aVar8 == null) {
                    this.f42468m = new q(cVar, valueOf);
                    return true;
                }
                aVar8.o(cVar);
                return true;
            } else if (obj == a0.D) {
                a aVar9 = this.f42469n;
                if (aVar9 == null) {
                    this.f42469n = new q(cVar, valueOf);
                    return true;
                }
                aVar9.o(cVar);
                return true;
            } else if (obj == a0.f36862q) {
                if (this.f42466k == null) {
                    this.f42466k = new d(Collections.singletonList(new y5.a(valueOf2)));
                }
                this.f42466k.o(cVar);
                return true;
            } else if (obj == a0.f36863r) {
                if (this.f42467l == null) {
                    this.f42467l = new d(Collections.singletonList(new y5.a(valueOf2)));
                }
                this.f42467l.o(cVar);
                return true;
            } else {
                return false;
            }
        }
    }

    public a e() {
        return this.f42469n;
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
        this.f42456a.reset();
        a aVar = this.f42462g;
        if (aVar != null && (pointF2 = (PointF) aVar.h()) != null) {
            float f10 = pointF2.x;
            if (f10 != 0.0f || pointF2.y != 0.0f) {
                this.f42456a.preTranslate(f10, pointF2.y);
            }
        }
        if (this.f42470o) {
            if (aVar != null) {
                float f11 = aVar.f();
                PointF pointF3 = (PointF) aVar.h();
                float f12 = pointF3.x;
                float f13 = pointF3.y;
                aVar.n(1.0E-4f + f11);
                PointF pointF4 = (PointF) aVar.h();
                aVar.n(f11);
                this.f42456a.preRotate((float) Math.toDegrees(Math.atan2(pointF4.y - f13, pointF4.x - f12)));
            }
        } else {
            a aVar2 = this.f42464i;
            if (aVar2 != null) {
                if (aVar2 instanceof q) {
                    q10 = ((Float) aVar2.h()).floatValue();
                } else {
                    q10 = ((d) aVar2).q();
                }
                if (q10 != 0.0f) {
                    this.f42456a.preRotate(q10);
                }
            }
        }
        if (this.f42466k != null) {
            if (this.f42467l == null) {
                cos = 0.0f;
            } else {
                cos = (float) Math.cos(Math.toRadians((-dVar3.q()) + 90.0f));
            }
            if (this.f42467l == null) {
                sin = 1.0f;
            } else {
                sin = (float) Math.sin(Math.toRadians((-dVar4.q()) + 90.0f));
            }
            float tan = (float) Math.tan(Math.toRadians(dVar.q()));
            d();
            float[] fArr = this.f42460e;
            fArr[0] = cos;
            fArr[1] = sin;
            float f14 = -sin;
            fArr[3] = f14;
            fArr[4] = cos;
            fArr[8] = 1.0f;
            this.f42457b.setValues(fArr);
            d();
            float[] fArr2 = this.f42460e;
            fArr2[0] = 1.0f;
            fArr2[3] = tan;
            fArr2[4] = 1.0f;
            fArr2[8] = 1.0f;
            this.f42458c.setValues(fArr2);
            d();
            float[] fArr3 = this.f42460e;
            fArr3[0] = cos;
            fArr3[1] = f14;
            fArr3[3] = sin;
            fArr3[4] = cos;
            fArr3[8] = 1.0f;
            this.f42459d.setValues(fArr3);
            this.f42458c.preConcat(this.f42457b);
            this.f42459d.preConcat(this.f42458c);
            this.f42456a.preConcat(this.f42459d);
        }
        a aVar3 = this.f42463h;
        if (aVar3 != null && (dVar2 = (y5.d) aVar3.h()) != null && (dVar2.b() != 1.0f || dVar2.c() != 1.0f)) {
            this.f42456a.preScale(dVar2.b(), dVar2.c());
        }
        a aVar4 = this.f42461f;
        if (aVar4 != null && (pointF = (PointF) aVar4.h()) != null) {
            float f15 = pointF.x;
            if (f15 != 0.0f || pointF.y != 0.0f) {
                this.f42456a.preTranslate(-f15, -pointF.y);
            }
        }
        return this.f42456a;
    }

    public Matrix g(float f10) {
        PointF pointF;
        y5.d dVar;
        float f11;
        a aVar = this.f42462g;
        PointF pointF2 = null;
        if (aVar == null) {
            pointF = null;
        } else {
            pointF = (PointF) aVar.h();
        }
        a aVar2 = this.f42463h;
        if (aVar2 == null) {
            dVar = null;
        } else {
            dVar = (y5.d) aVar2.h();
        }
        this.f42456a.reset();
        if (pointF != null) {
            this.f42456a.preTranslate(pointF.x * f10, pointF.y * f10);
        }
        if (dVar != null) {
            double d10 = f10;
            this.f42456a.preScale((float) Math.pow(dVar.b(), d10), (float) Math.pow(dVar.c(), d10));
        }
        a aVar3 = this.f42464i;
        if (aVar3 != null) {
            float floatValue = ((Float) aVar3.h()).floatValue();
            a aVar4 = this.f42461f;
            if (aVar4 != null) {
                pointF2 = (PointF) aVar4.h();
            }
            Matrix matrix = this.f42456a;
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
        return this.f42456a;
    }

    public a h() {
        return this.f42465j;
    }

    public a i() {
        return this.f42468m;
    }

    public void j(float f10) {
        a aVar = this.f42465j;
        if (aVar != null) {
            aVar.n(f10);
        }
        a aVar2 = this.f42468m;
        if (aVar2 != null) {
            aVar2.n(f10);
        }
        a aVar3 = this.f42469n;
        if (aVar3 != null) {
            aVar3.n(f10);
        }
        a aVar4 = this.f42461f;
        if (aVar4 != null) {
            aVar4.n(f10);
        }
        a aVar5 = this.f42462g;
        if (aVar5 != null) {
            aVar5.n(f10);
        }
        a aVar6 = this.f42463h;
        if (aVar6 != null) {
            aVar6.n(f10);
        }
        a aVar7 = this.f42464i;
        if (aVar7 != null) {
            aVar7.n(f10);
        }
        d dVar = this.f42466k;
        if (dVar != null) {
            dVar.n(f10);
        }
        d dVar2 = this.f42467l;
        if (dVar2 != null) {
            dVar2.n(f10);
        }
    }
}
