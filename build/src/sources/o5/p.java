package o5;

import android.graphics.Matrix;
import android.graphics.PointF;
import java.util.Collections;
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f39207a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f39208b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f39209c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f39210d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f39211e;

    /* renamed from: f  reason: collision with root package name */
    private a f39212f;

    /* renamed from: g  reason: collision with root package name */
    private a f39213g;

    /* renamed from: h  reason: collision with root package name */
    private a f39214h;

    /* renamed from: i  reason: collision with root package name */
    private a f39215i;

    /* renamed from: j  reason: collision with root package name */
    private a f39216j;

    /* renamed from: k  reason: collision with root package name */
    private d f39217k;

    /* renamed from: l  reason: collision with root package name */
    private d f39218l;

    /* renamed from: m  reason: collision with root package name */
    private a f39219m;

    /* renamed from: n  reason: collision with root package name */
    private a f39220n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f39221o;

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
        this.f39212f = a10;
        if (nVar.f() == null) {
            a11 = null;
        } else {
            a11 = nVar.f().a();
        }
        this.f39213g = a11;
        if (nVar.h() == null) {
            a12 = null;
        } else {
            a12 = nVar.h().a();
        }
        this.f39214h = a12;
        if (nVar.g() == null) {
            a13 = null;
        } else {
            a13 = nVar.g().a();
        }
        this.f39215i = a13;
        if (nVar.i() == null) {
            a14 = null;
        } else {
            a14 = nVar.i().a();
        }
        this.f39217k = a14;
        this.f39221o = nVar.l();
        if (this.f39217k != null) {
            this.f39208b = new Matrix();
            this.f39209c = new Matrix();
            this.f39210d = new Matrix();
            this.f39211e = new float[9];
        } else {
            this.f39208b = null;
            this.f39209c = null;
            this.f39210d = null;
            this.f39211e = null;
        }
        if (nVar.j() == null) {
            a15 = null;
        } else {
            a15 = nVar.j().a();
        }
        this.f39218l = a15;
        if (nVar.e() != null) {
            this.f39216j = nVar.e().a();
        }
        if (nVar.k() != null) {
            this.f39219m = nVar.k().a();
        } else {
            this.f39219m = null;
        }
        if (nVar.d() != null) {
            this.f39220n = nVar.d().a();
        } else {
            this.f39220n = null;
        }
    }

    private void d() {
        for (int i10 = 0; i10 < 9; i10++) {
            this.f39211e[i10] = 0.0f;
        }
    }

    public void a(u5.b bVar) {
        bVar.i(this.f39216j);
        bVar.i(this.f39219m);
        bVar.i(this.f39220n);
        bVar.i(this.f39212f);
        bVar.i(this.f39213g);
        bVar.i(this.f39214h);
        bVar.i(this.f39215i);
        bVar.i(this.f39217k);
        bVar.i(this.f39218l);
    }

    public void b(a.b bVar) {
        a aVar = this.f39216j;
        if (aVar != null) {
            aVar.a(bVar);
        }
        a aVar2 = this.f39219m;
        if (aVar2 != null) {
            aVar2.a(bVar);
        }
        a aVar3 = this.f39220n;
        if (aVar3 != null) {
            aVar3.a(bVar);
        }
        a aVar4 = this.f39212f;
        if (aVar4 != null) {
            aVar4.a(bVar);
        }
        a aVar5 = this.f39213g;
        if (aVar5 != null) {
            aVar5.a(bVar);
        }
        a aVar6 = this.f39214h;
        if (aVar6 != null) {
            aVar6.a(bVar);
        }
        a aVar7 = this.f39215i;
        if (aVar7 != null) {
            aVar7.a(bVar);
        }
        d dVar = this.f39217k;
        if (dVar != null) {
            dVar.a(bVar);
        }
        d dVar2 = this.f39218l;
        if (dVar2 != null) {
            dVar2.a(bVar);
        }
    }

    public boolean c(Object obj, z5.c cVar) {
        Float valueOf = Float.valueOf(100.0f);
        Float valueOf2 = Float.valueOf(0.0f);
        if (obj == b0.f36119f) {
            a aVar = this.f39212f;
            if (aVar == null) {
                this.f39212f = new q(cVar, new PointF());
                return true;
            }
            aVar.o(cVar);
            return true;
        } else if (obj == b0.f36120g) {
            a aVar2 = this.f39213g;
            if (aVar2 == null) {
                this.f39213g = new q(cVar, new PointF());
                return true;
            }
            aVar2.o(cVar);
            return true;
        } else {
            if (obj == b0.f36121h) {
                a aVar3 = this.f39213g;
                if (aVar3 instanceof n) {
                    ((n) aVar3).s(cVar);
                    return true;
                }
            }
            if (obj == b0.f36122i) {
                a aVar4 = this.f39213g;
                if (aVar4 instanceof n) {
                    ((n) aVar4).t(cVar);
                    return true;
                }
            }
            if (obj == b0.f36128o) {
                a aVar5 = this.f39214h;
                if (aVar5 == null) {
                    this.f39214h = new q(cVar, new z5.d());
                    return true;
                }
                aVar5.o(cVar);
                return true;
            } else if (obj == b0.f36129p) {
                a aVar6 = this.f39215i;
                if (aVar6 == null) {
                    this.f39215i = new q(cVar, valueOf2);
                    return true;
                }
                aVar6.o(cVar);
                return true;
            } else if (obj == b0.f36116c) {
                a aVar7 = this.f39216j;
                if (aVar7 == null) {
                    this.f39216j = new q(cVar, 100);
                    return true;
                }
                aVar7.o(cVar);
                return true;
            } else if (obj == b0.C) {
                a aVar8 = this.f39219m;
                if (aVar8 == null) {
                    this.f39219m = new q(cVar, valueOf);
                    return true;
                }
                aVar8.o(cVar);
                return true;
            } else if (obj == b0.D) {
                a aVar9 = this.f39220n;
                if (aVar9 == null) {
                    this.f39220n = new q(cVar, valueOf);
                    return true;
                }
                aVar9.o(cVar);
                return true;
            } else if (obj == b0.f36130q) {
                if (this.f39217k == null) {
                    this.f39217k = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f39217k.o(cVar);
                return true;
            } else if (obj == b0.f36131r) {
                if (this.f39218l == null) {
                    this.f39218l = new d(Collections.singletonList(new z5.a(valueOf2)));
                }
                this.f39218l.o(cVar);
                return true;
            } else {
                return false;
            }
        }
    }

    public a e() {
        return this.f39220n;
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
        this.f39207a.reset();
        a aVar = this.f39213g;
        if (aVar != null && (pointF2 = (PointF) aVar.h()) != null) {
            float f10 = pointF2.x;
            if (f10 != 0.0f || pointF2.y != 0.0f) {
                this.f39207a.preTranslate(f10, pointF2.y);
            }
        }
        if (this.f39221o) {
            if (aVar != null) {
                float f11 = aVar.f();
                PointF pointF3 = (PointF) aVar.h();
                float f12 = pointF3.x;
                float f13 = pointF3.y;
                aVar.n(1.0E-4f + f11);
                PointF pointF4 = (PointF) aVar.h();
                aVar.n(f11);
                this.f39207a.preRotate((float) Math.toDegrees(Math.atan2(pointF4.y - f13, pointF4.x - f12)));
            }
        } else {
            a aVar2 = this.f39215i;
            if (aVar2 != null) {
                if (aVar2 instanceof q) {
                    q10 = ((Float) aVar2.h()).floatValue();
                } else {
                    q10 = ((d) aVar2).q();
                }
                if (q10 != 0.0f) {
                    this.f39207a.preRotate(q10);
                }
            }
        }
        if (this.f39217k != null) {
            if (this.f39218l == null) {
                cos = 0.0f;
            } else {
                cos = (float) Math.cos(Math.toRadians((-dVar3.q()) + 90.0f));
            }
            if (this.f39218l == null) {
                sin = 1.0f;
            } else {
                sin = (float) Math.sin(Math.toRadians((-dVar4.q()) + 90.0f));
            }
            float tan = (float) Math.tan(Math.toRadians(dVar.q()));
            d();
            float[] fArr = this.f39211e;
            fArr[0] = cos;
            fArr[1] = sin;
            float f14 = -sin;
            fArr[3] = f14;
            fArr[4] = cos;
            fArr[8] = 1.0f;
            this.f39208b.setValues(fArr);
            d();
            float[] fArr2 = this.f39211e;
            fArr2[0] = 1.0f;
            fArr2[3] = tan;
            fArr2[4] = 1.0f;
            fArr2[8] = 1.0f;
            this.f39209c.setValues(fArr2);
            d();
            float[] fArr3 = this.f39211e;
            fArr3[0] = cos;
            fArr3[1] = f14;
            fArr3[3] = sin;
            fArr3[4] = cos;
            fArr3[8] = 1.0f;
            this.f39210d.setValues(fArr3);
            this.f39209c.preConcat(this.f39208b);
            this.f39210d.preConcat(this.f39209c);
            this.f39207a.preConcat(this.f39210d);
        }
        a aVar3 = this.f39214h;
        if (aVar3 != null && (dVar2 = (z5.d) aVar3.h()) != null && (dVar2.b() != 1.0f || dVar2.c() != 1.0f)) {
            this.f39207a.preScale(dVar2.b(), dVar2.c());
        }
        a aVar4 = this.f39212f;
        if (aVar4 != null && (pointF = (PointF) aVar4.h()) != null) {
            float f15 = pointF.x;
            if (f15 != 0.0f || pointF.y != 0.0f) {
                this.f39207a.preTranslate(-f15, -pointF.y);
            }
        }
        return this.f39207a;
    }

    public Matrix g(float f10) {
        PointF pointF;
        z5.d dVar;
        float f11;
        a aVar = this.f39213g;
        PointF pointF2 = null;
        if (aVar == null) {
            pointF = null;
        } else {
            pointF = (PointF) aVar.h();
        }
        a aVar2 = this.f39214h;
        if (aVar2 == null) {
            dVar = null;
        } else {
            dVar = (z5.d) aVar2.h();
        }
        this.f39207a.reset();
        if (pointF != null) {
            this.f39207a.preTranslate(pointF.x * f10, pointF.y * f10);
        }
        if (dVar != null) {
            double d10 = f10;
            this.f39207a.preScale((float) Math.pow(dVar.b(), d10), (float) Math.pow(dVar.c(), d10));
        }
        a aVar3 = this.f39215i;
        if (aVar3 != null) {
            float floatValue = ((Float) aVar3.h()).floatValue();
            a aVar4 = this.f39212f;
            if (aVar4 != null) {
                pointF2 = (PointF) aVar4.h();
            }
            Matrix matrix = this.f39207a;
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
        return this.f39207a;
    }

    public a h() {
        return this.f39216j;
    }

    public a i() {
        return this.f39219m;
    }

    public void j(float f10) {
        a aVar = this.f39216j;
        if (aVar != null) {
            aVar.n(f10);
        }
        a aVar2 = this.f39219m;
        if (aVar2 != null) {
            aVar2.n(f10);
        }
        a aVar3 = this.f39220n;
        if (aVar3 != null) {
            aVar3.n(f10);
        }
        a aVar4 = this.f39212f;
        if (aVar4 != null) {
            aVar4.n(f10);
        }
        a aVar5 = this.f39213g;
        if (aVar5 != null) {
            aVar5.n(f10);
        }
        a aVar6 = this.f39214h;
        if (aVar6 != null) {
            aVar6.n(f10);
        }
        a aVar7 = this.f39215i;
        if (aVar7 != null) {
            aVar7.n(f10);
        }
        d dVar = this.f39217k;
        if (dVar != null) {
            dVar.n(f10);
        }
        d dVar2 = this.f39218l;
        if (dVar2 != null) {
            dVar2.n(f10);
        }
    }
}
