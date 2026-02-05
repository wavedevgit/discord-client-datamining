package n5;

import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
import java.util.List;
import l5.a0;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o implements a.b, k, m {

    /* renamed from: c  reason: collision with root package name */
    private final String f39232c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f39233d;

    /* renamed from: e  reason: collision with root package name */
    private final com.airbnb.lottie.n f39234e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f39235f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39236g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f39237h;

    /* renamed from: k  reason: collision with root package name */
    private boolean f39240k;

    /* renamed from: a  reason: collision with root package name */
    private final Path f39230a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final RectF f39231b = new RectF();

    /* renamed from: i  reason: collision with root package name */
    private final b f39238i = new b();

    /* renamed from: j  reason: collision with root package name */
    private o5.a f39239j = null;

    public o(com.airbnb.lottie.n nVar, t5.b bVar, s5.l lVar) {
        this.f39232c = lVar.c();
        this.f39233d = lVar.f();
        this.f39234e = nVar;
        o5.a a10 = lVar.d().a();
        this.f39235f = a10;
        o5.a a11 = lVar.e().a();
        this.f39236g = a11;
        o5.a a12 = lVar.b().a();
        this.f39237h = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    private void f() {
        this.f39240k = false;
        this.f39234e.invalidateSelf();
    }

    @Override // o5.a.b
    public void a() {
        f();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            c cVar = (c) list.get(i10);
            if (cVar instanceof u) {
                u uVar = (u) cVar;
                if (uVar.j() == t.a.SIMULTANEOUSLY) {
                    this.f39238i.a(uVar);
                    uVar.c(this);
                }
            }
            if (cVar instanceof q) {
                this.f39239j = ((q) cVar).f();
            }
        }
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (obj == a0.f36383l) {
            this.f39236g.o(cVar);
        } else if (obj == a0.f36385n) {
            this.f39235f.o(cVar);
        } else if (obj == a0.f36384m) {
            this.f39237h.o(cVar);
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39232c;
    }

    @Override // n5.m
    public Path r() {
        float q10;
        o5.a aVar;
        if (this.f39240k) {
            return this.f39230a;
        }
        this.f39230a.reset();
        if (this.f39233d) {
            this.f39240k = true;
            return this.f39230a;
        }
        PointF pointF = (PointF) this.f39236g.h();
        float f10 = pointF.x / 2.0f;
        float f11 = pointF.y / 2.0f;
        o5.a aVar2 = this.f39237h;
        if (aVar2 == null) {
            q10 = 0.0f;
        } else {
            q10 = ((o5.d) aVar2).q();
        }
        if (q10 == 0.0f && (aVar = this.f39239j) != null) {
            q10 = Math.min(((Float) aVar.h()).floatValue(), Math.min(f10, f11));
        }
        float min = Math.min(f10, f11);
        if (q10 > min) {
            q10 = min;
        }
        PointF pointF2 = (PointF) this.f39235f.h();
        this.f39230a.moveTo(pointF2.x + f10, (pointF2.y - f11) + q10);
        this.f39230a.lineTo(pointF2.x + f10, (pointF2.y + f11) - q10);
        int i10 = (q10 > 0.0f ? 1 : (q10 == 0.0f ? 0 : -1));
        if (i10 > 0) {
            RectF rectF = this.f39231b;
            float f12 = pointF2.x;
            float f13 = q10 * 2.0f;
            float f14 = pointF2.y;
            rectF.set((f12 + f10) - f13, (f14 + f11) - f13, f12 + f10, f14 + f11);
            this.f39230a.arcTo(this.f39231b, 0.0f, 90.0f, false);
        }
        this.f39230a.lineTo((pointF2.x - f10) + q10, pointF2.y + f11);
        if (i10 > 0) {
            RectF rectF2 = this.f39231b;
            float f15 = pointF2.x;
            float f16 = pointF2.y;
            float f17 = q10 * 2.0f;
            rectF2.set(f15 - f10, (f16 + f11) - f17, (f15 - f10) + f17, f16 + f11);
            this.f39230a.arcTo(this.f39231b, 90.0f, 90.0f, false);
        }
        this.f39230a.lineTo(pointF2.x - f10, (pointF2.y - f11) + q10);
        if (i10 > 0) {
            RectF rectF3 = this.f39231b;
            float f18 = pointF2.x;
            float f19 = pointF2.y;
            float f20 = q10 * 2.0f;
            rectF3.set(f18 - f10, f19 - f11, (f18 - f10) + f20, (f19 - f11) + f20);
            this.f39230a.arcTo(this.f39231b, 180.0f, 90.0f, false);
        }
        this.f39230a.lineTo((pointF2.x + f10) - q10, pointF2.y - f11);
        if (i10 > 0) {
            RectF rectF4 = this.f39231b;
            float f21 = pointF2.x;
            float f22 = q10 * 2.0f;
            float f23 = pointF2.y;
            rectF4.set((f21 + f10) - f22, f23 - f11, f21 + f10, (f23 - f11) + f22);
            this.f39230a.arcTo(this.f39231b, 270.0f, 90.0f, false);
        }
        this.f39230a.close();
        this.f39238i.b(this.f39230a);
        this.f39240k = true;
        return this.f39230a;
    }
}
